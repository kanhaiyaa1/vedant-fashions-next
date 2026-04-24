import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { createServiceClient } from "@/lib/supabase/server";

const FROM = "notifications@vedantfashion.com";
const ADMIN_EMAIL = "contact@vedantfashion.com";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  country: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { name, company, country, email } = result.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const adminText = [
    `New buyer registration on vedantfashion.com`,
    ``,
    `Name:     ${name}`,
    `Company:  ${company}`,
    `Country:  ${country}`,
    `Email:    ${email}`,
    ``,
    `View in admin panel: https://vedantfashion.com/en/admin/buyers`,
    `---`,
    `Vedant Fashion Admin Notifications`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `👤 New Buyer Registration — ${company}, ${country}`,
    text: adminText,
  });

  if (error) console.error("[notify-signup] email error:", error);

  const supabase = createServiceClient();
  const { data: buyer } = await supabase
    .from("buyers")
    .select("id")
    .eq("email", email)
    .single();

  if (buyer) {
    const { data: existing } = await supabase
      .from("email_sequences")
      .select("id")
      .eq("buyer_id", buyer.id)
      .limit(1);

    if (!existing || existing.length === 0) {
      await supabase.from("email_sequences").insert([
        { buyer_id: buyer.id, sequence_name: "onboarding", step: 1, scheduled_at: new Date().toISOString() },
        { buyer_id: buyer.id, sequence_name: "onboarding", step: 2, scheduled_at: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString() },
        { buyer_id: buyer.id, sequence_name: "onboarding", step: 3, scheduled_at: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() },
        { buyer_id: buyer.id, sequence_name: "onboarding", step: 4, scheduled_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() },
      ]);
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
