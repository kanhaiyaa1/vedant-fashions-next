import { NextRequest } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

function escapeCSV(value: string | null | undefined): string {
  const str = value ?? "";
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET(request: NextRequest) {
  void request;
  const supabase = createServiceClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { data: admin } = await supabase.from("admins").select("id").eq("id", user.id).single();
  if (!admin) return new Response("Forbidden", { status: 403 });

  const { data: subscribers } = await supabase
    .from("newsletter_subscribers")
    .select("full_name, company, email, country, status, created_at")
    .order("created_at", { ascending: false });

  const rows = (subscribers ?? []).map((s) =>
    [
      escapeCSV(s.full_name),
      escapeCSV(s.company),
      escapeCSV(s.email),
      escapeCSV(s.country),
      escapeCSV(s.status),
      escapeCSV(s.created_at ? new Date(s.created_at).toISOString() : ""),
    ].join(",")
  );

  const csv = ["Name,Company,Email,Country,Status,Subscribed At", ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=subscribers.csv",
    },
  });
}
