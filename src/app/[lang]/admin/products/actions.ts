"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface ProductInput {
  name: string;
  slug?: string;
  category: string;
  description?: string;
  moq?: number | null;
  lead_time?: string;
  fob_price?: string;
  hs_code?: string;
  certifications: string[];
  active: boolean;
}

export async function createProduct(data: ProductInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("products").insert({
    name: data.name,
    slug: data.slug || null,
    category: data.category,
    description: data.description || null,
    moq: data.moq || null,
    lead_time: data.lead_time || null,
    fob_price: data.fob_price || null,
    hs_code: data.hs_code || null,
    certifications: data.certifications,
    active: data.active,
    updated_at: new Date().toISOString(),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/[lang]/admin/products", "page");
}

export async function updateProduct(id: string, data: ProductInput) {
  const supabase = await createClient();
  const { error } = await supabase.from("products").update({
    name: data.name,
    category: data.category,
    description: data.description || null,
    moq: data.moq || null,
    lead_time: data.lead_time || null,
    fob_price: data.fob_price || null,
    hs_code: data.hs_code || null,
    certifications: data.certifications,
    active: data.active,
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/[lang]/admin/products", "page");
}

export async function toggleProductActive(id: string, currentStatus: boolean) {
  const supabase = await createClient();
  await supabase
    .from("products")
    .update({ active: !currentStatus, updated_at: new Date().toISOString() })
    .eq("id", id);
  revalidatePath("/[lang]/admin/products", "page");
}

export async function toggleFeatured(id: string, currentStatus: boolean) {
  const supabase = await createClient();
  await supabase
    .from("products")
    .update({ featured: !currentStatus, updated_at: new Date().toISOString() })
    .eq("id", id);
  revalidatePath("/[lang]/admin/products", "page");
}
