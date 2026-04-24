import { createClient } from "./server";

export async function getActiveProducts(category?: string) {
  const supabase = await createClient();
  let query = supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: false });
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) return [];
  return data ?? [];
}

export async function getProductBySlug(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .single();
  return data ?? null;
}

export async function getProductCategories() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("category")
    .eq("active", true);
  if (!data) return [];
  return [...new Set(data.map((p) => p.category as string))];
}

export async function getFeaturedProducts(limit = 8) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .eq("featured", true)
    .limit(limit);
  return data ?? [];
}
