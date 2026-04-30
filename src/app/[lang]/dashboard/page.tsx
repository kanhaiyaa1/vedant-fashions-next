import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | Vedant Fashion",
};

interface DashboardPageProps {
  params: Promise<{ lang: string }>;
}

const COUNTRY_FLAGS: Record<string, string> = {
  "UAE": "🇦🇪",
  "Saudi Arabia": "🇸🇦",
  "Qatar": "🇶🇦",
  "Kuwait": "🇰🇼",
  "Oman": "🇴🇲",
  "Bahrain": "🇧🇭",
  "Egypt": "🇪🇬",
  "Russia": "🇷🇺",
  "Poland": "🇵🇱",
  "France": "🇫🇷",
  "Italy": "🇮🇹",
  "Netherlands": "🇳🇱",
  "United Kingdom": "🇬🇧",
};

const ENQUIRY_STATUS: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
  closed: "bg-gray-200 text-gray-600",
};

const SAMPLE_STATUS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  dispatched: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { lang } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect(`/${lang}/login`);

  const [
    { data: buyer },
    { data: enquiries },
    { data: samples },
    { count: catalogueCount },
  ] = await Promise.all([
    supabase.from("buyers").select("*").eq("id", user.id).single(),
    supabase.from("enquiries").select("*").eq("buyer_id", user.id).order("created_at", { ascending: false }),
    supabase.from("sample_requests").select("*").eq("buyer_id", user.id).order("created_at", { ascending: false }),
    supabase.from("catalogue_downloads").select("*", { count: "exact", head: true }).eq("buyer_id", user.id),
  ]);

  const displayName = buyer?.company ?? buyer?.full_name ?? user.email;
  const country = buyer?.country ?? null;
  const flag = country ? (COUNTRY_FLAGS[country] ?? "🌍") : null;
  const isVerified = !!user.email_confirmed_at;

  const recentEnquiries = (enquiries ?? []).slice(0, 5);
  const recentSamples = (samples ?? []).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="bg-card border-b border-border">
        <div className="container-wide h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="font-display text-xl font-semibold text-foreground">
            Vedant<span className="font-light text-muted-foreground ml-1">Fashion</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
            <form action="/api/auth/signout" method="post">
              <button type="submit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="container-wide py-10 space-y-10">

        {/* 1. HEADER BAR */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <p className="text-subheading text-gold">Buyer Portal</p>
            <h1 className="text-display-sm text-foreground">
              Welcome back, {displayName}
            </h1>
            {country && (
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <span>{flag}</span>
                <span>{country}</span>
              </p>
            )}
          </div>
          <Link
            href={`/${lang}/dashboard/profile`}
            className="text-sm font-medium border border-border rounded px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            Edit Profile
          </Link>
        </div>

        {/* 2. STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded p-5 space-y-1">
            <p className="text-caption text-muted-foreground uppercase tracking-widest">Enquiries Sent</p>
            <p className="font-display text-3xl font-semibold text-foreground">{enquiries?.length ?? 0}</p>
          </div>
          <div className="bg-card border border-border rounded p-5 space-y-1">
            <p className="text-caption text-muted-foreground uppercase tracking-widest">Sample Requests</p>
            <p className="font-display text-3xl font-semibold text-foreground">{samples?.length ?? 0}</p>
          </div>
          <div className="bg-card border border-border rounded p-5 space-y-1">
            <p className="text-caption text-muted-foreground uppercase tracking-widest">Catalogues Downloaded</p>
            <p className="font-display text-3xl font-semibold text-foreground">{catalogueCount ?? 0}</p>
          </div>
          <div className="bg-card border border-border rounded p-5 space-y-1">
            <p className="text-caption text-muted-foreground uppercase tracking-widest">Account Status</p>
            <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${
              isVerified ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
            }`}>
              {isVerified ? "Verified" : "Unverified"}
            </span>
          </div>
        </div>

        {/* 3. RECENT ENQUIRIES */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-foreground">Recent Enquiries</h2>
            <Link
              href={`/${lang}/dashboard/enquiries`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              View All
            </Link>
          </div>

          {recentEnquiries.length === 0 ? (
            <div className="bg-secondary/50 rounded p-8 text-center space-y-3">
              <p className="text-muted-foreground text-sm">No enquiries yet.</p>
              <Link
                href={`/${lang}/inquiry`}
                className="inline-block bg-primary text-primary-foreground text-xs uppercase tracking-widest px-5 py-2.5 rounded hover:bg-primary/90 transition-colors"
              >
                Send First Enquiry
              </Link>
            </div>
          ) : (
            <div className="border border-border rounded overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    {["Date", "Type", "Product", "Status", "Action"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-medium text-foreground text-xs uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentEnquiries.map((enq: Record<string, string>) => (
                    <tr key={enq.id} className="border-t border-border hover:bg-accent/30 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap text-xs">
                        {enq.created_at ? new Date(enq.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground capitalize">
                        {enq.form_type?.replace("_", " ") ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-foreground">
                        {enq.product_interest ?? enq.product_name ?? "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                          ENQUIRY_STATUS[enq.status] ?? "bg-gray-100 text-gray-600"
                        }`}>
                          {enq.status ?? "new"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {enq.status === "replied" ? (
                          <Link
                            href={`/${lang}/dashboard/enquiries/${enq.id}`}
                            className="text-xs text-primary font-medium hover:underline"
                          >
                            View Reply
                          </Link>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* 4. SAMPLE REQUESTS */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-foreground">Sample Requests</h2>
            <Link
              href={`/${lang}/catalog`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              Browse Catalog
            </Link>
          </div>

          {recentSamples.length === 0 ? (
            <div className="bg-secondary/50 rounded p-8 text-center">
              <p className="text-muted-foreground text-sm">No sample requests yet.</p>
            </div>
          ) : (
            <div className="border border-border rounded overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    {["Date", "Product", "Quantity", "Status"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-medium text-foreground text-xs uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentSamples.map((s: Record<string, string>) => (
                    <tr key={s.id} className="border-t border-border hover:bg-accent/30 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap text-xs">
                        {s.created_at ? new Date(s.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
                      </td>
                      <td className="px-4 py-3 text-foreground">{s.product_name ?? s.product_category ?? "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.quantity ?? "—"}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                          SAMPLE_STATUS[s.status] ?? "bg-gray-100 text-gray-600"
                        }`}>
                          {s.status ?? "pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* 5. QUICK ACTIONS */}
        <section className="space-y-4">
          <h2 className="font-display text-lg font-semibold text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Send New Enquiry", href: `/${lang}/inquiry`, primary: true },
              { label: "Request a Sample", href: `/${lang}/dashboard/samples/new`, primary: false },
              { label: "Download Catalogue", href: "/api/generate-catalogue", primary: false },
              { label: "View Products", href: `/${lang}/products`, primary: false },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`text-center rounded px-4 py-3 text-sm font-medium transition-colors ${
                  action.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs"
                    : "border border-border text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
