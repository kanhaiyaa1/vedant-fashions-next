import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { createServiceClient } from "@/lib/supabase/server";
import { randomUUID } from "crypto";
import { enquiryConfirmationEmail } from "@/lib/email/templates";

const FROM = "notifications@vedantfashion.com";

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

  const validatedData = result.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const enquiryId = randomUUID();
  const supabase = await createServiceClient();

  const { error: dbError } = await supabase
    .from("enquiries")
    .insert({
      id: enquiryId,
      form_type: validatedData.formType ?? "general",
      name: validatedData.name,
      company: validatedData.company,
      email: validatedData.email,
      phone: validatedData.phone ?? null,
      country: validatedData.country,
      product_interest: validatedData.productInterest ?? null,
      quantity: validatedData.quantity ?? null,
      message: validatedData.message ?? null,
      incoterm: validatedData.incoterm ?? null,
      shipping_port: validatedData.shippingPort ?? null,
      status: "new",
    });

  if (dbError) {
    console.error("[contact] DB insert failed:", JSON.stringify(dbError));
    return NextResponse.json(
      { error: "Failed to save enquiry: " + dbError.message },
      { status: 500 }
    );
  }

  console.log("[contact] DB insert success, enquiryId:", enquiryId);

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: "contact@vedantfashion.com",
        replyTo: validatedData.email,
        subject: `New ${validatedData.formType} enquiry — ${validatedData.company}, ${validatedData.country}`,
        html: `<p>Name: ${validatedData.name}</p>
               <p>Company: ${validatedData.company}</p>
               <p>Email: ${validatedData.email}</p>
               <p>Phone: ${validatedData.phone ?? "N/A"}</p>
               <p>Country: ${validatedData.country}</p>
               <p>Form Type: ${validatedData.formType}</p>
               <p>Product Interest: ${validatedData.productInterest ?? "N/A"}</p>
               <p>Quantity: ${validatedData.quantity ?? "N/A"}</p>
               <p>Message: ${validatedData.message ?? "N/A"}</p>
               <p>Enquiry ID: ${enquiryId}</p>`,
      }),
      resend.emails.send({
        from: FROM,
        to: validatedData.email,
        replyTo: "contact@vedantfashion.com",
        subject: `Enquiry received — Vedant Fashion (Ref: ${enquiryId.slice(0, 8).toUpperCase()})`,
        html: enquiryConfirmationEmail({
          name: validatedData.name,
          company: validatedData.company,
          enquiryId: enquiryId.slice(0, 8).toUpperCase(),
          productInterest: validatedData.productInterest ?? "General enquiry",
          quantity: validatedData.quantity ?? "Not specified",
          country: validatedData.country,
        }),
      }),
    ]);
    console.log("[contact] emails sent successfully");
  } catch (emailError) {
    console.error("[contact] email send failed:", emailError);
  }

  return NextResponse.json({
    success: true,
    enquiryId: enquiryId.slice(0, 8).toUpperCase(),
  });
}
