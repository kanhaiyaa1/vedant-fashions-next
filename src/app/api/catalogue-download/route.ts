import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
const FROM = "notifications@vedantfashion.com";
const ADMIN_EMAIL = "contact@vedantfashion.com";
const cataloguePdfExists = false; // set to true when PDF is placed at public/catalogues/vedant-fashion-catalogue.pdf

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  country: z.string().min(1),
  phone: z.string().trim().max(30).optional(),
  userId: z.string().uuid().optional(),
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

  const { name, company, email, country, phone, userId } = result.data;
  const now = new Date().toISOString();

  const resend = new Resend(process.env.RESEND_API_KEY);
  const supabase = createServiceClient();

  const adminText = [
    `Catalogue download on vedantfashion.com`,
    ``,
    `Name:         ${name}`,
    `Company:      ${company}`,
    `Email:        ${email}`,
    `Country:      ${country}`,
    `Phone:        ${phone ?? "—"}`,
    `Downloaded:   ${now}`,
    `---`,
    `Vedant Fashion Admin Notifications`,
  ].join("\n");

  const buyerText = [
    `Dear ${name},`,
    ``,
    `Thank you for downloading the Vedant Fashion product catalogue.`,
    ``,
    cataloguePdfExists
      ? `Your download should have started automatically. If not, please contact us and we will send it directly.`
      : `Our team will email you the catalogue within 24 hours.`,
    ``,
    `For wholesale enquiries:`,
    `Email: contact@vedantfashion.com`,
    `Phone: +91 99309 68116`,
    ``,
    `Best regards,`,
    `Vedant Fashion Export Team`,
    `Mumbai, India`,
  ].join("\n");

  const [adminEmailResult, buyerEmailResult, dbResult] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `📥 Catalogue Download — ${company}, ${country}`,
      text: adminText,
    }),
    resend.emails.send({
      from: `Vedant Fashion <${FROM}>`,
      to: email,
      subject: "Your Vedant Fashion Catalogue",
      text: buyerText,
    }),
    supabase.from("catalogue_downloads").insert({
      name,
      company,
      email,
      country,
      phone: phone ?? null,
      buyer_id: userId ?? null,
      downloaded_at: now,
    }),
  ]);

  if (adminEmailResult.error) console.error("[catalogue-download] admin email:", adminEmailResult.error);
  if (buyerEmailResult.error) console.error("[catalogue-download] buyer email:", buyerEmailResult.error);
  if (dbResult.error) console.error("[catalogue-download] db insert:", dbResult.error);

  return NextResponse.json({
    success: true,
    downloadUrl: cataloguePdfExists ? "/catalogues/vedant-fashion-catalogue.pdf" : null,
    message: cataloguePdfExists
      ? "Download starting..."
      : "Thank you! Our team will email you the catalogue within 24 hours.",
  }, { status: 200 });
}
