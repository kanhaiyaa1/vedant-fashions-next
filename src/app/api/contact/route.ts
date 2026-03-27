import { NextResponse } from "next/server";
import { z } from "zod";

// Accepts all four inquiry form types via a `formType` discriminator field.
// Validates payload server-side, then hands off to your email/CRM provider.
// To wire up email: install `nodemailer` (or Resend / SendGrid SDK) and
// replace the TODO block below with your send logic.

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

  // TODO: replace this block with your email / CRM integration.
  // Example with Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "noreply@vedantfashion.com",
  //     to: "sales@vedantfashion.com",
  //     subject: `New ${data.formType} inquiry from ${data.company}`,
  //     text: JSON.stringify(data, null, 2),
  //   });

  // For now: log to server console (visible in Vercel/Railway logs)
  console.log("[contact API]", {
    formType: data.formType,
    company: data.company,
    email: data.email,
    country: data.country,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
