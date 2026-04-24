import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings | Admin | Vedant Fashion",
};

export default async function AdminSettingsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${lang}/login`);

  const { data: admin } = await supabase.from("admins").select("id, role").eq("id", user.id).single();
  if (!admin) redirect(`/${lang}/login`);

  const [{ data: admins }, { count: totalEmails }, { data: lastLog }] = await Promise.all([
    supabase.from("admins").select("id, email, role, created_at").order("created_at"),
    supabase.from("email_logs").select("*", { count: "exact", head: true }),
    supabase.from("email_logs").select("created_at").order("created_at", { ascending: false }).limit(1).single(),
  ]);

  const sectionClass = "bg-gray-900 rounded-lg p-6 space-y-5";
  const headingClass = "text-sm font-semibold text-white border-b border-gray-800 pb-3";
  const labelClass = "block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5";
  const inputClass = "w-full bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">Admin configuration and system status</p>
      </div>

      {/* Notification Settings */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Notification Settings</h2>
        <div>
          <label className={labelClass}>Notification Email</label>
          <input type="email" defaultValue="contact@vedantfashion.com" className={inputClass} />
        </div>
        <button
          type="button"
          onClick={undefined}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded transition-colors opacity-60 cursor-not-allowed"
          title="Coming soon"
        >
          Save — Coming Soon
        </button>
      </div>

      {/* Admin Users */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Admin Users</h2>
        <div className="overflow-hidden rounded border border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-800/40">
                <th className="px-4 py-3 text-left text-xs text-gray-400 font-medium">Email</th>
                <th className="px-4 py-3 text-left text-xs text-gray-400 font-medium">Role</th>
                <th className="px-4 py-3 text-left text-xs text-gray-400 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {(admins ?? []).map((a) => (
                <tr key={a.id} className="border-b border-gray-800/50 last:border-0">
                  <td className="px-4 py-3 text-gray-300 text-xs">{a.email}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                      a.role === "super_admin" ? "bg-purple-900/40 text-purple-400" : "bg-gray-800 text-gray-400"
                    }`}>
                      {a.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    {new Date(a.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-800/50 rounded p-4 text-xs text-gray-400 leading-relaxed">
          <p className="font-medium text-gray-300 mb-1">To add a new admin:</p>
          <p>Run this in the Supabase SQL editor:</p>
          <code className="block mt-2 bg-gray-950 rounded px-3 py-2 text-green-400 font-mono">
            INSERT INTO admins (id, email, role){"\n"}
            VALUES (&#39;&lt;user-uuid&gt;&#39;, &#39;admin@example.com&#39;, &#39;manager&#39;);
          </code>
        </div>
      </div>

      {/* Email Configuration */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Email Configuration</h2>
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-800">
            <div>
              <p className="text-sm text-gray-300 font-medium">Resend API</p>
              <p className="text-xs text-gray-500 mt-0.5">Configure RESEND_API_KEY in environment variables</p>
            </div>
            <span className={`shrink-0 inline-flex px-2 py-1 rounded text-xs font-medium ${
              process.env.RESEND_API_KEY ? "bg-green-900/40 text-green-400" : "bg-red-900/40 text-red-400"
            }`}>
              {process.env.RESEND_API_KEY ? "Configured" : "Missing"}
            </span>
          </div>
          <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-800">
            <div>
              <p className="text-sm text-gray-300 font-medium">From Address</p>
              <p className="text-xs text-gray-500 mt-0.5">notifications@vedantfashion.com</p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-800">
            <div>
              <p className="text-sm text-gray-300 font-medium">Newsletter Address</p>
              <p className="text-xs text-gray-500 mt-0.5">newsletter@vedantfashion.com</p>
            </div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-800/50 rounded p-4 text-xs text-yellow-400 leading-relaxed">
            <p className="font-medium mb-1">Domain verification required</p>
            <p>Both sending addresses require DNS verification in the Resend dashboard before emails will deliver in production. Go to resend.com → Domains → Add vedantfashion.com.</p>
          </div>
        </div>
      </div>

      {/* Cron Job */}
      <div className={sectionClass}>
        <h2 className={headingClass}>Cron Jobs</h2>
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-800">
            <div>
              <p className="text-sm text-gray-300 font-medium">Process Email Sequences</p>
              <p className="text-xs text-gray-500 mt-0.5">Runs hourly via Vercel Cron — /api/process-sequences</p>
            </div>
            <span className="shrink-0 inline-flex px-2 py-1 rounded text-xs font-medium bg-green-900/40 text-green-400">
              Active
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded p-4">
              <p className="text-xs text-gray-500 mb-1">Last Run</p>
              <p className="text-sm text-gray-200 font-medium">
                {lastLog?.created_at
                  ? new Date(lastLog.created_at).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })
                  : "No runs yet"}
              </p>
            </div>
            <div className="bg-gray-800/50 rounded p-4">
              <p className="text-xs text-gray-500 mb-1">Total Emails Sent</p>
              <p className="text-sm text-gray-200 font-medium">{(totalEmails ?? 0).toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-800/50 rounded p-4 text-xs text-yellow-400 leading-relaxed">
            <p className="font-medium mb-1">Vercel Free Plan note</p>
            <p>Vercel free plan does not send an Authorization header with cron requests. Upgrade to Pro or change the route to use a query-param secret: <code className="font-mono">?secret=CRON_SECRET</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
