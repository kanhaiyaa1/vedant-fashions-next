import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { sampleConfirmationEmail } from "@/lib/email/templates";

const FROM = "notifications@vedantfashion.com";
const ADMIN_EMAIL = "contact@vedantfashion.com";

const schema = z.object({
  buyerName: z.string().min(1),
  buyerEmail: z.string().email(),
  buyerCompany: z.string().min(1),
  category: z.string().min(1),
  quantity: z.string().optional(),
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

  const { buyerName, buyerEmail, buyerCompany, category, quantity } = result.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const adminText = [
    `New sample request received on vedantfashion.com`,
    ``,
    `Buyer:    ${buyerName}`,
    `Company:  ${buyerCompany}`,
    `Email:    ${buyerEmail}`,
    `Category: ${category}`,
    `Quantity: ${quantity ?? "—"}`,
    ``,
    `View in admin panel: https://vedantfashion.com/en/admin/samples`,
    `---`,
    `Vedant Fashion Admin Notifications`,
  ].join("\n");

  const [adminResult, buyerResult] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      replyTo: buyerEmail,
      subject: `🧵 New Sample Request — ${buyerCompany}`,
      text: adminText,
    }),
    resend.emails.send({
      from: `Vedant Fashion <${FROM}>`,
      to: buyerEmail,
      subject: "Sample request received — Vedant Fashion",
      html: sampleConfirmationEmail({ name: buyerName, company: buyerCompany, category, quantity: quantity ?? "—" }),
    }),
  ]);

  if (adminResult.error) console.error("[notify-sample] admin email error:", adminResult.error);
  if (buyerResult.error) console.error("[notify-sample] buyer email error:", buyerResult.error);

  return NextResponse.json({ success: true }, { status: 200 });
}
