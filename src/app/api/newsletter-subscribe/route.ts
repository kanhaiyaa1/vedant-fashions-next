import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import { welcomeEmail } from "@/lib/email/templates";

export async function POST(request: NextRequest) {
  const { email, name, source } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const supabase = createServiceClient();

  const { error } = await supabase.from("newsletter_subscribers").upsert(
    { email, full_name: name ?? null, source: source ?? "website", status: "active" },
    { onConflict: "email" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Vedant Fashion <newsletter@vedantfashion.com>",
    to: email,
    subject: "Welcome to Vedant Fashion",
    html: welcomeEmail({ name: name ?? email, company: "", country: "" }),
  }).catch(() => {});

  return NextResponse.json({ success: true });
}
