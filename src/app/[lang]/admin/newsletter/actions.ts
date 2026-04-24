"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface CampaignDraftInput {
  subject: string;
  previewText: string;
  content: string;
  targetAudience: string;
  countries: string[];
}

export async function saveDraft(data: CampaignDraftInput): Promise<string> {
  const supabase = await createClient();
  const { data: campaign, error } = await supabase
    .from("newsletter_campaigns")
    .insert({
      subject: data.subject,
      preview_text: data.previewText,
      content: data.content,
      target_audience: data.targetAudience,
      target_countries: data.countries,
      status: "draft",
    })
    .select("id")
    .single();
  if (error) throw new Error(error.message);
  revalidatePath("/[lang]/admin/newsletter", "page");
  return campaign.id;
}

export async function deleteDraft(id: string) {
  const supabase = await createClient();
  await supabase
    .from("newsletter_campaigns")
    .delete()
    .eq("id", id)
    .eq("status", "draft");
  revalidatePath("/[lang]/admin/newsletter", "page");
}
