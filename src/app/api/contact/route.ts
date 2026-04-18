import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const baseSchema = z.object({
  formType: z.enum(["general", "product", "bulk", "private-label"]),
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional(),
  country: z.string().min(1),
  message: z.string().trim().max(2000).optional(),
  // Optional fields used by specific form types
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
  // Product inquiry form (catalog page)
  productName: z.string().max(200).optional(),
  productId: z.string().max(50).optional(),
});

function buildEmailText(data: z.infer<typeof baseSchema>): string {
  const lines: string[] = [
    `Form Type:         ${data.formType}`,
    `Name:              ${data.name}`,
    `Company:           ${data.company}`,
    `Email:             ${data.email}`,
    `Phone:             ${data.phone ?? "—"}`,
    `Country:           ${data.country}`,
    `Message:           ${data.message ?? "—"}`,
    ``,
    `--- Optional Fields ---`,
    `Product Interest:  ${data.productInterest ?? "—"}`,
    `Product Name:      ${data.productName ?? "—"}`,
    `Product ID:        ${data.productId ?? "—"}`,
    `Quantity:          ${data.quantity ?? "—"}`,
    `Target Date:       ${data.targetDate ?? "—"}`,
    `Color Requirements:${data.colorRequirements ?? "—"}`,
    `Incoterm:          ${data.incoterm ?? "—"}`,
    `Shipping Port:     ${data.shippingPort ?? "—"}`,
    `Annual Volume:     ${data.annualVolume ?? "—"}`,
    `Brand Name:        ${data.brandName ?? "—"}`,
    `Has Tech Pack:     ${data.hasTechPack ?? "—"}`,
    `Labeling Needs:    ${data.labelingNeeds ?? "—"}`,
    `Target Price:      ${data.targetPrice ?? "—"}`,
    ``,
    `Received at: ${new Date().toISOString()}`,
  ];
  return lines.join("\n");
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
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "contact@vedantfashion.com",
    subject: `New B2B Enquiry — ${data.formType} from ${data.name}, ${data.company}`,
    text: buildEmailText(data),
  });

  if (error) {
    console.error("[contact API] Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
