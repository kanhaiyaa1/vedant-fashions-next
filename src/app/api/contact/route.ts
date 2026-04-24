import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";
import { enquiryConfirmationEmail } from "@/lib/email/templates";

const FROM = "notifications@vedantfashion.com";
const ADMIN_EMAIL = "contact@vedantfashion.com";

const baseSchema = z.object({
  formType: z.enum(["general", "product", "bulk", "private-label"]),
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional(),
  country: z.string().min(1),
  message: z.string().trim().max(2000).optional(),
  productInterest: z.string().optional(),
  quantity: z.string().max(50).optional(),
  targetDate: z.string().optional(),
  colorRequirements: z.string().max(500).optional(),
  incoterm: z.string().optional(),
  shippingPort: z.string().max(100).optional(),
  annualVolume: z.string().max(100).optional(),
  brandName: z.string().max(100).optional(),
  hasTechPack: z.string().optional(),
  labelingNeeds: z.string().max(500).optional(),
  targetPrice: z.string().max(100).optional(),
  productName: z.string().max(200).optional(),
  productId: z.string().max(50).optional(),
});

function buildAdminText(data: z.infer<typeof baseSchema>): string {
  return [
    `New enquiry received on vedantfashion.com`,
    ``,
    `Name:              ${data.name}`,
    `Company:           ${data.company}`,
    `Email:             ${data.email}`,
    `Phone:             ${data.phone ?? "—"}`,
    `Country:           ${data.country}`,
    `Type:              ${data.formType}`,
    `Product Interest:  ${data.productInterest ?? data.productName ?? "—"}`,
    `Quantity:          ${data.quantity ?? "—"}`,
    `Incoterm:          ${data.incoterm ?? "—"}`,
    `Shipping Port:     ${data.shippingPort ?? "—"}`,
    `Annual Volume:     ${data.annualVolume ?? "—"}`,
    `Message:           ${data.message ?? "—"}`,
    ``,
    `Reply directly to this email to respond to the buyer.`,
    `---`,
    `Vedant Fashion Admin Notifications`,
  ].join("\n");
}


export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = baseSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: result.error.issues },
      { status: 422 }
    );
  }

  const data = result.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const supabase = createServiceClient();
  const enquiryId = randomUUID();
  const ref = enquiryId.slice(0, 8).toUpperCase();

  const [adminEmailResult, buyerEmailResult, dbResult] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `🆕 New ${data.formType} Enquiry — ${data.company}, ${data.country}`,
      text: buildAdminText(data),
    }),
    resend.emails.send({
      from: `Vedant Fashion <${FROM}>`,
      to: data.email,
      subject: `Enquiry received — Vedant Fashion (Ref: ${ref})`,
      html: enquiryConfirmationEmail({
        name: data.name,
        company: data.company,
        enquiryId: ref,
        productInterest: data.productInterest ?? data.productName ?? "—",
        quantity: data.quantity ?? "—",
        country: data.country,
      }),
    }),
    supabase.from("enquiries").insert({
      id: enquiryId,
      form_type: data.formType,
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone ?? null,
      country: data.country,
      product_interest: data.productInterest ?? data.productName ?? null,
      quantity: data.quantity ?? null,
      message: data.message ?? null,
      incoterm: data.incoterm ?? null,
      shipping_port: data.shippingPort ?? null,
      status: "new",
    }),
  ]);

  if (adminEmailResult.error) console.error("[contact] admin email error:", adminEmailResult.error);
  if (buyerEmailResult.error) console.error("[contact] buyer email error:", buyerEmailResult.error);
  if (dbResult.error) console.error("[contact] db insert error:", dbResult.error);

  if (adminEmailResult.error && buyerEmailResult.error && dbResult.error) {
    return NextResponse.json({ error: "Failed to process enquiry" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
