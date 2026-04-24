import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Vedant Fashion",
};

interface AdminPageProps {
  params: Promise<{ lang: string }>;
}

const statusBadge: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
  closed: "bg-gray-200 text-gray-600",
};

export default async function AdminDashboardPage({ params }: AdminPageProps) {
  const { lang } = await params;
  const supabase = await createClient();

  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    { count: totalEnquiries },
    { count: newEnquiries },
    { count: totalBuyers },
    { count: totalSamples },
    { count: totalDownloads },
    { data: recentEnquiries },
    { data: allEnquiries },
  ] = await Promise.all([
    supabase.from("enquiries").select("*", { count: "exact", head: true }),
    supabase.from("enquiries").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("buyers").select("*", { count: "exact", head: true }),
    supabase.from("sample_requests").select("*", { count: "exact", head: true }),
    supabase.from("catalogue_downloads").select("*", { count: "exact", head: true }),
    supabase
      .from("enquiries")
      .select("id, name, company, country, form_type, status, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase.from("enquiries").select("status, created_at"),
  ]);

  const byStatus = { new: 0, read: 0, replied: 0, closed: 0 };
  let thisWeek = 0;
  let thisMonth = 0;

  for (const enq of allEnquiries ?? []) {
    const s = enq.status as keyof typeof byStatus;
    if (s in byStatus) byStatus[s]++;
    const d = new Date(enq.created_at);
    if (d >= startOfWeek) thisWeek++;
    if (d >= startOfMonth) thisMonth++;
  }

  const stats = [
    {
      label: "Total Enquiries",
      value: totalEnquiries ?? 0,
      color: "border-blue-500",
      valueColor: "text-blue-400",
    },
    {
      label: "New / Unread",
      value: newEnquiries ?? 0,
      color: "border-red-500",
      valueColor: (newEnquiries ?? 0) > 0 ? "text-red-400" : "text-gray-400",
      badge: (newEnquiries ?? 0) > 0,
    },
    {
      label: "Total Buyers",
      value: totalBuyers ?? 0,
      color: "border-green-500",
      valueColor: "text-green-400",
    },
    {
      label: "Sample Requests",
      value: totalSamples ?? 0,
      color: "border-purple-500",
      valueColor: "text-purple-400",
    },
    {
      label: "Catalogue Downloads",
      value: totalDownloads ?? 0,
      color: "border-pink-500",
      valueColor: "text-pink-400",
    },
  ];

  return (
    <div className="p-6 md:p-10 space-y-10 max-w-6xl">
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">Overview of all activity</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`bg-gray-900 border-t-2 ${s.color} rounded-lg p-5 space-y-1`}
          >
            <p className="text-xs text-gray-400 uppercase tracking-widest">{s.label}</p>
            <div className="flex items-center gap-2">
              <p className={`text-3xl font-bold ${s.valueColor}`}>{s.value}</p>
              {s.badge && (
                <span className="bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick stats bar */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 rounded-lg p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
            <span className="text-blue-400 font-bold text-sm">{thisWeek}</span>
          </div>
          <div>
            <p className="text-white font-medium text-sm">This Week</p>
            <p className="text-gray-400 text-xs">Enquiries received</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
            <span className="text-purple-400 font-bold text-sm">{thisMonth}</span>
          </div>
          <div>
            <p className="text-white font-medium text-sm">This Month</p>
            <p className="text-gray-400 text-xs">Enquiries received</p>
          </div>
        </div>
      </div>

      {/* Status breakdown */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-4">
          Enquiries by Status
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(["new", "read", "replied", "closed"] as const).map((s) => (
            <div key={s} className="text-center">
              <p className="text-2xl font-bold text-white">{byStatus[s]}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusBadge[s]}`}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent enquiries table */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-sm font-medium text-gray-300 uppercase tracking-widest">
            Recent Enquiries
          </h2>
          <Link
            href={`/${lang}/admin/enquiries`}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all →
          </Link>
        </div>

        {!recentEnquiries || recentEnquiries.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-gray-500">No enquiries yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  {["Name", "Company", "Country", "Type", "Status", "Date", "Action"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentEnquiries.map((enq: Record<string, string>) => (
                  <tr
                    key={enq.id}
                    className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-white font-medium">{enq.name ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-300">{enq.company ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400">{enq.country ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400 capitalize">{enq.form_type ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                          statusBadge[enq.status] ?? "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {enq.status ?? "new"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {enq.created_at
                        ? new Date(enq.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/${lang}/admin/enquiries/${enq.id}`}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
