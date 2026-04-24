"use server";

import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { enquiryReplyEmail } from "@/lib/email/templates";

export async function updateStatus(id: string, status: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("enquiries")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function sendReply(
  id: string,
  replyText: string,
  buyerEmail: string,
  buyerName: string
) {
  if (!replyText.trim()) throw new Error("Reply text cannot be empty.");

  const supabase = await createClient();

  const { error: dbError } = await supabase
    .from("enquiries")
    .update({
      reply_text: replyText,
      replied_at: new Date().toISOString(),
      status: "replied",
    })
    .eq("id", id);

  if (dbError) throw new Error(dbError.message);

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error: emailError } = await resend.emails.send({
    from: "Vedant Fashion <contact@vedantfashion.com>",
    to: buyerEmail,
    replyTo: "contact@vedantfashion.com",
    subject: "Reply to your enquiry — Vedant Fashion",
    html: enquiryReplyEmail({ name: buyerName, replyText, enquiryId: id }),
  });

  if (emailError) throw new Error(`Email failed: ${emailError.message}`);
}
