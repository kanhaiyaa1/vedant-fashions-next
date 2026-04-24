import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/server";

export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Delete buyer profile row (RLS allows users to delete their own row)
  await supabase.from("buyers").delete().eq("id", user.id);

  // Delete auth user using service role (bypasses RLS)
  const adminSupabase = createServiceClient();
  const { error } = await adminSupabase.auth.admin.deleteUser(user.id);

  if (error) {
    console.error("[delete-account] auth delete error:", error);
    return NextResponse.json({ error: "Failed to delete account" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
