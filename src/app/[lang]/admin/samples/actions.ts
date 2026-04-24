"use server";

import { createClient } from "@/lib/supabase/server";

export async function updateSampleStatus(id: string, status: string) {
  const supabase = await createClient();
  await supabase.from("sample_requests").update({ status }).eq("id", id);
}
