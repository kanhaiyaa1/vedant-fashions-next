import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { deleteDraft } from "./actions";

export default async function NewsletterPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ filter?: string }>;
}) {
  const { lang } = await params;
  const { filter = "active" } = await searchParams;
  const supabase = await createClient();

  const [
    { count: total },
    { count: active },
    { count: unsub },
    { count: campaignsSent },
    { data: campaigns },
    { data: subscribers },
  ] = await Promise.all([
    supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
    supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }).eq("status", "active"),
    supabase.from("newsletter_subscribers").select("*", { count: "exact", head: true }).eq("status", "unsubscribed"),
    supabase.from("newsletter_campaigns").select("*", { count: "exact", head: true }).eq("status", "sent"),
    supabase.from("newsletter_campaigns").select("id, subject, status, sent_count, created_at, sent_at").order("created_at", { ascending: false }).limit(10),
    supabase.from("newsletter_subscribers").select("id, email, full_name, company, country, source, status, created_at").eq("status", filter === "unsubscribed" ? "unsubscribed" : "active").order("created_at", { ascending: false }).limit(100),
  ]);

  const stats = [
    { label: "Total Subscribers", value: total ?? 0, color: "text-blue-400" },
    { label: "Active", value: active ?? 0, color: "text-green-400" },
    { label: "Unsubscribed", value: unsub ?? 0, color: "text-gray-400" },
    { label: "Campaigns Sent", value: campaignsSent ?? 0, color: "text-purple-400" },
  ];

  return (
    <div className="p-6 md:p-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Newsletter</h1>
          <p className="text-sm text-gray-400 mt-1">Manage campaigns and subscribers</p>
        </div>
        <Link
          href={`/${lang}/admin/newsletter/new`}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded transition-colors"
        >
          + Create Campaign
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-900 rounded-lg p-5">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Campaigns table */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-white">Recent Campaigns</h2>
        </div>
        {!campaigns || campaigns.length === 0 ? (
          <p className="px-6 py-10 text-sm text-gray-500 text-center">No campaigns yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-3 text-left text-xs text-gray-400 font-medium">Subject</th>
                <th className="px-6 py-3 text-left text-xs text-gray-400 font-medium">Status</th>
                <th className="px-6 py-3 text-left text-xs text-gray-400 font-medium">Sent</th>
                <th className="px-6 py-3 text-left text-xs text-gray-400 font-medium">Date</th>
                <th className="px-6 py-3 text-left text-xs text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-6 py-3 text-gray-200 max-w-[260px] truncate">{c.subject}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                      c.status === "sent" ? "bg-green-900/40 text-green-400" : "bg-yellow-900/40 text-yellow-400"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-gray-400">{c.sent_count ?? 0}</td>
                  <td className="px-6 py-3 text-gray-400 text-xs">
                    {new Date(c.sent_at ?? c.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/${lang}/admin/newsletter/new?duplicate=${c.id}`} className="text-xs text-blue-400 hover:text-blue-300">
                        Duplicate
                      </Link>
                      {c.status === "draft" && (
                        <form action={async () => { "use server"; await deleteDraft(c.id); }}>
                          <button type="submit" className="text-xs text-red-400 hover:text-red-300">Delete</button>
                        </form>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Subscribers table */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold text-white">Subscribers</h2>
            <div className="flex gap-1">
              <Link href={`/${lang}/admin/newsletter?filter=active`} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${filter !== "unsubscribed" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}>
                Active
              </Link>
              <Link href={`/${lang}/admin/newsletter?filter=unsubscribed`} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${filter === "unsubscribed" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}>
                Unsubscribed
              </Link>
            </div>
          </div>
          <a
            href={`/api/admin/export-subscribers?status=${filter}`}
            className="text-xs text-gray-400 hover:text-white border border-gray-700 rounded px-3 py-1.5 transition-colors"
          >
            Export CSV
          </a>
        </div>
        {!subscribers || subscribers.length === 0 ? (
          <p className="px-6 py-10 text-sm text-gray-500 text-center">No subscribers found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  {["Email", "Name", "Company", "Country", "Source", "Subscribed", "Status"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs text-gray-400 font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subscribers.map((s) => (
                  <tr key={s.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                    <td className="px-6 py-3 text-gray-200 text-xs">{s.email}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs">{s.full_name ?? "—"}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs">{s.company ?? "—"}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs">{s.country ?? "—"}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs capitalize">{s.source ?? "—"}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs whitespace-nowrap">
                      {new Date(s.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                        s.status === "active" ? "bg-green-900/40 text-green-400" : "bg-gray-800 text-gray-400"
                      }`}>
                        {s.status}
                      </span>
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
