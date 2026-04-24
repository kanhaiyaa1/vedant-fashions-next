"use server";

import { createClient } from "@/lib/supabase/server";

export async function updateEnquiryStatus(id: string, status: string) {
  const supabase = await createClient();
  await supabase.from("enquiries").update({ status }).eq("id", id);
}

export async function exportEnquiriesCSV(filters: {
  status?: string;
  form_type?: string;
  country?: string;
  search?: string;
}) {
  const supabase = await createClient();

  let query = supabase
    .from("enquiries")
    .select("id, name, company, email, phone, country, form_type, product_interest, quantity, message, incoterm, shipping_port, status, created_at")
    .order("created_at", { ascending: false });

  if (filters.status) query = query.eq("status", filters.status);
  if (filters.form_type) query = query.eq("form_type", filters.form_type);
  if (filters.country) query = query.eq("country", filters.country);
  if (filters.search) {
    query = query.or(
      `name.ilike.%${filters.search}%,company.ilike.%${filters.search}%,email.ilike.%${filters.search}%`
    );
  }

  const { data } = await query;
  if (!data || data.length === 0) return "";

  const headers = [
    "ID", "Name", "Company", "Email", "Phone", "Country",
    "Type", "Product Interest", "Quantity", "Incoterm", "Shipping Port",
    "Message", "Status", "Date",
  ];

  const escape = (v: unknown) => {
    const s = String(v ?? "").replace(/"/g, '""');
    return s.includes(",") || s.includes("\n") || s.includes('"') ? `"${s}"` : s;
  };

  const rows = data.map((e) =>
    [
      e.id, e.name, e.company, e.email, e.phone, e.country,
      e.form_type, e.product_interest, e.quantity, e.incoterm, e.shipping_port,
      e.message, e.status, e.created_at,
    ].map(escape).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}
