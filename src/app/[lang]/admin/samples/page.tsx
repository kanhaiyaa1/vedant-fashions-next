import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import SampleStatusDropdown from "./SampleStatusDropdown";

export const metadata: Metadata = {
  title: "Sample Requests | Admin | Vedant Fashion",
};

interface SamplesPageProps {
  params: Promise<{ lang: string }>;
}

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  dispatched: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default async function SamplesPage({ params }: SamplesPageProps) {
  const { lang } = await params;
  const supabase = await createClient();

  const { data: samples, count } = await supabase
    .from("sample_requests")
    .select(
      "id, buyer_id, product_category, styles, quantity, delivery_address, status, created_at",
      { count: "exact" }
    )
    .order("created_at", { ascending: false });

  // Fetch buyer details for all unique buyer IDs
  const buyerIds = [...new Set((samples ?? []).map((s) => s.buyer_id).filter(Boolean))];
  const { data: buyers } = buyerIds.length
    ? await supabase.from("buyers").select("id, full_name, company, country, email").in("id", buyerIds)
    : { data: [] };

  const buyerMap = Object.fromEntries((buyers ?? []).map((b) => [b.id, b]));

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-screen-xl">
      <div>
        <h1 className="text-2xl font-semibold text-white">Sample Requests</h1>
        <p className="text-sm text-gray-400 mt-1">{count ?? 0} total</p>
      </div>

      {/* Status summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {(["pending", "approved", "dispatched", "delivered", "rejected"] as const).map((s) => {
          const c = (samples ?? []).filter((r) => r.status === s).length;
          return (
            <div key={s} className="bg-gray-900 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white">{c}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[s]}`}>
                {s}
              </span>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {!samples || samples.length === 0 ? (
          <p className="px-6 py-16 text-center text-sm text-gray-500">No sample requests yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  {["Buyer", "Company", "Product Category", "Styles", "Quantity", "Status", "Date", "Actions"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {samples.map((s: Record<string, string>) => {
                  const buyer = buyerMap[s.buyer_id];
                  return (
                    <tr key={s.id} className="border-b border-gray-800 hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 text-white font-medium whitespace-nowrap">
                        {buyer?.full_name ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                        {buyer?.company ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                        {s.product_category ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-400 max-w-[160px] truncate">
                        {s.styles ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                        {s.quantity ?? "—"}
                      </td>
                      <td className="px-4 py-3">
                        <SampleStatusDropdown id={s.id} current={s.status ?? "pending"} />
                      </td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">
                        {s.created_at
                          ? new Date(s.created_at).toLocaleDateString("en-GB", {
                              day: "2-digit", month: "short", year: "numeric",
                            })
                          : "—"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {buyer ? (
                          <Link
                            href={`/${lang}/admin/buyers?id=${s.buyer_id}`}
                            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Buyer
                          </Link>
                        ) : (
                          <span className="text-xs text-gray-600">—</span>
                        )}
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
