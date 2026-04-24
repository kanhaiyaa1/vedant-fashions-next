import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import {
  welcomeEmail,
  day2FollowupEmail,
  day5ReminderEmail,
  day30ReengagementEmail,
} from "@/lib/email/templates";

const SUBJECTS: Record<number, string> = {
  1: "Welcome to Vedant Fashion",
  2: "Have you seen our latest collection? — Vedant Fashion",
  3: "Your wholesale catalogue is ready — Vedant Fashion",
  4: "We'd love to work with you — Vedant Fashion",
};

const TEMPLATE_NAMES: Record<number, string> = {
  1: "welcomeEmail",
  2: "day2FollowupEmail",
  3: "day5ReminderEmail",
  4: "day30ReengagementEmail",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const supabase = createServiceClient();

  const { data: sequences, error: fetchError } = await supabase
    .from("email_sequences")
    .select("*, buyers(id, email, full_name, company_name, country)")
    .eq("status", "pending")
    .lte("scheduled_at", new Date().toISOString())
    .limit(50);

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (!sequences || sequences.length === 0) {
    return NextResponse.json({ processed: 0, errors: 0 });
  }

  let processed = 0;
  let errors = 0;

  for (const seq of sequences) {
    const buyer = seq.buyers;
    if (!buyer?.email) {
      errors++;
      continue;
    }

    const name = buyer.full_name ?? buyer.email;
    const company = buyer.company ?? "";
    const country = buyer.country ?? "";
    const step: number = seq.step;

    let html = "";
    try {
      if (step === 1) html = welcomeEmail({ name, company, country });
      else if (step === 2) html = day2FollowupEmail({ name, company });
      else if (step === 3) html = day5ReminderEmail({ name, company, country });
      else if (step === 4) html = day30ReengagementEmail({ name, company });
      else {
        errors++;
        continue;
      }
    } catch {
      errors++;
      continue;
    }

    const subject = SUBJECTS[step];
    const templateName = TEMPLATE_NAMES[step];

    const { data: emailData, error: sendError } = await resend.emails.send({
      from: "Vedant Fashion <notifications@vedantfashion.com>",
      to: buyer.email,
      subject,
      html,
    });

    if (sendError) {
      errors++;
      await supabase.from("email_logs").insert({
        recipient_email: buyer.email,
        recipient_name: name,
        subject,
        template_name: templateName,
        status: "failed",
        resend_id: null,
      });
      continue;
    }

    await Promise.all([
      supabase
        .from("email_sequences")
        .update({ status: "sent", sent_at: new Date().toISOString() })
        .eq("id", seq.id),
      supabase.from("email_logs").insert({
        recipient_email: buyer.email,
        recipient_name: name,
        subject,
        template_name: templateName,
        status: "sent",
        resend_id: emailData?.id ?? null,
      }),
    ]);

    processed++;
  }

  return NextResponse.json({ processed, errors });
}
