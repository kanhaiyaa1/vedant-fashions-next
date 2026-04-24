import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buyers | Admin | Vedant Fashion",
};

export default async function AdminBuyersPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ search?: string }>;
}) {
  const { lang } = await params;
  const { search } = await searchParams;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${lang}/login`);

  const { data: admin } = await supabase.from("admins").select("id").eq("id", user.id).single();
  if (!admin) redirect(`/${lang}/login`);

  let query = supabase
    .from("buyers")
    .select("id, full_name, company, email, country, phone, created_at, enquiries(count)")
    .order("created_at", { ascending: false });

  const { data: buyers } = await query;

  const filtered = (buyers ?? []).filter((b) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      b.full_name?.toLowerCase().includes(q) ||
      b.company?.toLowerCase().includes(q) ||
      b.email?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="p-6 md:p-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Buyers</h1>
          <p className="text-sm text-gray-400 mt-1">{filtered.length} registered buyer{filtered.length !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* Search */}
      <form method="GET" className="flex gap-3">
        <input
          type="text"
          name="search"
          defaultValue={search ?? ""}
          placeholder="Search by name, company or email…"
          className="flex-1 max-w-sm bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded transition-colors">
          Search
        </button>
        {search && (
          <Link href={`/${lang}/admin/buyers`} className="text-sm text-gray-400 hover:text-white px-4 py-2 rounded border border-gray-700 transition-colors">
            Clear
          </Link>
        )}
      </form>

      {/* Table */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {filtered.length === 0 ? (
          <p className="px-6 py-10 text-sm text-gray-500 text-center">No buyers found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  {["Name", "Company", "Email", "Country", "Enquiries", "Joined", "Actions"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs text-gray-400 font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => {
                  const enquiryCount = Array.isArray(b.enquiries)
                    ? (b.enquiries[0] as { count: number } | undefined)?.count ?? 0
                    : 0;
                  return (
                    <tr key={b.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="px-6 py-3 text-gray-200 font-medium">{b.full_name ?? "—"}</td>
                      <td className="px-6 py-3 text-gray-400">{b.company ?? "—"}</td>
                      <td className="px-6 py-3 text-gray-400 text-xs">{b.email}</td>
                      <td className="px-6 py-3 text-gray-400">{b.country ?? "—"}</td>
                      <td className="px-6 py-3 text-center">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold ${
                          enquiryCount > 0 ? "bg-blue-900/50 text-blue-400" : "bg-gray-800 text-gray-500"
                        }`}>
                          {enquiryCount}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-400 text-xs whitespace-nowrap">
                        {new Date(b.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-6 py-3">
                        <Link
                          href={`/${lang}/admin/enquiries?search=${encodeURIComponent(b.email ?? "")}`}
                          className="text-xs text-blue-400 hover:text-blue-300 whitespace-nowrap"
                        >
                          View Enquiries
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
