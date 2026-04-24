import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Requests | Dashboard | Vedant Fashion",
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

export default async function BuyerSamplesPage({ params }: SamplesPageProps) {
  const { lang } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${lang}/login`);

  const { data: samples } = await supabase
    .from("sample_requests")
    .select("id, product_category, styles, quantity, status, admin_notes, created_at")
    .eq("buyer_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container-wide h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="font-display text-xl font-semibold text-foreground">
            Vedant<span className="font-light text-muted-foreground ml-1">Fashion</span>
          </Link>
          <Link href={`/${lang}/dashboard`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="container-wide py-10 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <p className="text-subheading text-gold">Buyer Portal</p>
            <h1 className="text-display-sm text-foreground">Sample Requests</h1>
          </div>
          <Link
            href={`/${lang}/dashboard/samples/new`}
            className="bg-primary text-primary-foreground text-xs uppercase tracking-widest px-5 py-2.5 rounded hover:bg-primary/90 transition-colors"
          >
            + New Request
          </Link>
        </div>

        {!samples || samples.length === 0 ? (
          <div className="bg-card border border-border rounded p-12 text-center space-y-4">
            <p className="text-muted-foreground">No sample requests yet.</p>
            <Link
              href={`/${lang}/dashboard/samples/new`}
              className="inline-block bg-primary text-primary-foreground text-xs uppercase tracking-widest px-6 py-2.5 rounded hover:bg-primary/90 transition-colors"
            >
              Request Your First Sample
            </Link>
          </div>
        ) : (
          <div className="border border-border rounded overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr>
                  {["Date", "Category", "Style", "Quantity", "Status", "Admin Notes"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 font-medium text-foreground text-xs uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {samples.map((s: Record<string, string>) => (
                  <tr key={s.id} className="border-t border-border hover:bg-accent/30 transition-colors">
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap text-xs">
                      {s.created_at
                        ? new Date(s.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit", month: "short", year: "numeric",
                          })
                        : "—"}
                    </td>
                    <td className="px-4 py-3 text-foreground whitespace-nowrap">
                      {s.product_category ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                      {s.styles ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                      {s.quantity ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                        STATUS_COLORS[s.status] ?? "bg-gray-100 text-gray-600"
                      }`}>
                        {s.status ?? "pending"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs max-w-[240px]">
                      {s.admin_notes ?? (
                        <span className="text-muted-foreground/50 italic">No notes yet</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
