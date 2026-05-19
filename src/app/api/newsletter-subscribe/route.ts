import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import { welcomeEmail } from "@/lib/email/templates";

export async function POST(request: NextRequest) {
  const { email, name, company, country, source } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const supabase = createServiceClient();

  console.log("[newsletter] attempting upsert for:", email);
  const { error } = await supabase
    .from("newsletter_subscribers")
    .upsert(
      { email, name: name ?? email, company: company ?? "", country: country ?? "", source: source ?? "website", status: "active" },
      { onConflict: "email" }
    );
  console.log("[newsletter] upsert result:", JSON.stringify({ error }));

  if (error) {
    console.error("[newsletter] upsert error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "Vedant Fashion <newsletter@vedantfashion.com>",
      to: email,
      subject: "Welcome to Vedant Fashion",
      html: welcomeEmail({ name: name ?? email, company: "", country: "" }),
    });
  } catch (e) {
    console.error("[newsletter] email send error:", e);
  }

  return NextResponse.json({ success: true });
}
