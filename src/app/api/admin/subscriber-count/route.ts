import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = createServiceClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: admin } = await supabase.from("admins").select("id").eq("id", user.id).single();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { searchParams } = new URL(request.url);
  const audience = searchParams.get("audience") ?? "all";
  const countries = searchParams.get("countries");

  if (audience === "buyers") {
    const { data: buyers } = await supabase.from("buyers").select("email");
    const buyerEmails = (buyers ?? []).map((b) => b.email).filter(Boolean);

    const { count } = await supabase
      .from("newsletter_subscribers")
      .select("id", { count: "exact", head: true })
      .eq("status", "active")
      .in("email", buyerEmails);

    return NextResponse.json({ count: count ?? 0 });
  }

  let query = supabase
    .from("newsletter_subscribers")
    .select("id", { count: "exact", head: true })
    .eq("status", "active");

  if (audience === "countries" && countries) {
    const countryList = countries.split(",").map((c) => c.trim()).filter(Boolean);
    if (countryList.length > 0) {
      query = query.in("country", countryList);
    }
  }

  const { count } = await query;
  return NextResponse.json({ count: count ?? 0 });
}
