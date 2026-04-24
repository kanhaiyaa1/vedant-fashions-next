import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createHmac } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/server";
import { newsletterEmail } from "@/lib/email/templates";

function generateToken(email: string): string {
  return createHmac("sha256", process.env.CRON_SECRET ?? "secret")
    .update(email)
    .digest("hex")
    .slice(0, 32);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: admin } = await supabase.from("admins").select("id").eq("id", user.id).single();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await request.json();
  const { campaignId, targetAudience, countries, testEmail, isTest } = body as {
    campaignId: string;
    targetAudience: "all" | "countries" | "buyers" | "test";
    countries?: string[];
    testEmail?: string;
    isTest?: boolean;
  };

  const serviceSupabase = createServiceClient();

  const { data: campaign, error: campError } = await serviceSupabase
    .from("newsletter_campaigns")
    .select("*")
    .eq("id", campaignId)
    .single();

  if (campError || !campaign) {
    return NextResponse.json({ error: "Campaign not found" }, { status: 404 });
  }

  type Subscriber = { email: string; full_name: string | null };
  let subscribers: Subscriber[] = [];

  if (isTest || targetAudience === "test") {
    if (!testEmail) return NextResponse.json({ error: "Test email required" }, { status: 400 });
    subscribers = [{ email: testEmail, full_name: null }];
  } else if (targetAudience === "buyers") {
    const { data } = await serviceSupabase.from("buyers").select("email, full_name");
    subscribers = (data ?? []).filter((b) => b.email) as Subscriber[];
  } else {
    let query = serviceSupabase
      .from("newsletter_subscribers")
      .select("email, full_name")
      .eq("status", "active");
    if (targetAudience === "countries" && countries && countries.length > 0) {
      query = query.in("country", countries);
    }
    const { data } = await query;
    subscribers = (data ?? []) as Subscriber[];
  }

  if (subscribers.length === 0) {
    return NextResponse.json({ sent: 0, message: "No subscribers matched" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  let sent = 0;

  const BATCH_SIZE = 50;
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);
    const emailBatch = batch.map((sub) => ({
      from: "Vedant Fashion <newsletter@vedantfashion.com>",
      to: sub.email,
      subject: campaign.subject,
      html: newsletterEmail({
        subject: campaign.subject,
        previewText: campaign.preview_text ?? "",
        content: campaign.content,
        unsubscribeUrl: `https://vedantfashion.com/api/unsubscribe?email=${encodeURIComponent(sub.email)}&token=${generateToken(sub.email)}`,
      }),
    }));

    const { data: batchResult } = await resend.batch.send(emailBatch);
    const batchSent = Array.isArray(batchResult) ? batchResult.length : 0;
    sent += batchSent;

    if (!isTest && batchResult && Array.isArray(batchResult)) {
      await serviceSupabase.from("email_logs").insert(
        batch.map((sub, idx) => ({
          recipient_email: sub.email,
          recipient_name: sub.full_name,
          subject: campaign.subject,
          template_name: "newsletterEmail",
          status: "sent",
          resend_id: batchResult[idx]?.id ?? null,
        }))
      );
    }
  }

  if (!isTest) {
    await serviceSupabase
      .from("newsletter_campaigns")
      .update({ status: "sent", sent_at: new Date().toISOString(), sent_count: sent })
      .eq("id", campaignId);
  }

  return NextResponse.json({ sent });
}
