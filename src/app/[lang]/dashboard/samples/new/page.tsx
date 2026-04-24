"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = [
  "Woven Blouses",
  "Cotton Dresses",
  "Linen Shirts",
  "Resort Wear",
  "Co-ord Sets",
  "Other",
];

export default function NewSampleRequestPage() {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as string;

  const [form, setForm] = useState({
    category: "",
    styles: "",
    quantity: "",
    delivery_address: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.category) { setError("Please select a product category."); return; }
    if (!form.quantity || parseInt(form.quantity) < 1) { setError("Quantity must be at least 1."); return; }
    if (!form.delivery_address.trim()) { setError("Please enter a delivery address."); return; }

    setLoading(true);
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push(`/${lang}/login`); return; }

    const { error: dbError } = await supabase.from("sample_requests").insert({
      buyer_id: user.id,
      product_category: form.category,
      styles: form.styles || null,
      quantity: form.quantity,
      delivery_address: form.delivery_address,
      notes: form.notes || null,
      status: "pending",
    });

    if (dbError) {
      setError("Failed to submit request. Please try again.");
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase.from("buyers").select("full_name, company").eq("id", user.id).single();
    fetch("/api/notify-sample", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        buyerName: profile?.full_name ?? user.email ?? "Buyer",
        buyerEmail: user.email ?? "",
        buyerCompany: profile?.company ?? "—",
        category: form.category,
        quantity: form.quantity,
      }),
    }).catch(() => {});

    router.push(`/${lang}/dashboard?success=sample`);
  }

  const inputClass = "w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

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

      <main className="container-wide py-10 max-w-2xl">
        <div className="space-y-2 mb-8">
          <p className="text-subheading text-gold">Buyer Portal</p>
          <h1 className="text-display-sm text-foreground">Request a Sample</h1>
          <p className="text-sm text-muted-foreground">
            Fill in the details below and our team will process your sample request within 2 business days.
          </p>
        </div>

        <div className="bg-card border border-border rounded p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="category">
                Product Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                required
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className={inputClass}
              >
                <option value="">Select category…</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="styles">
                Style Description
              </label>
              <textarea
                id="styles"
                rows={3}
                value={form.styles}
                onChange={(e) => set("styles", e.target.value)}
                className={inputClass}
                placeholder="Describe the style, fabric, colour, or attach a reference if possible…"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="quantity">
                Quantity Required <span className="text-red-500">*</span>
              </label>
              <input
                id="quantity"
                type="number"
                min={1}
                required
                value={form.quantity}
                onChange={(e) => set("quantity", e.target.value)}
                className={inputClass}
                placeholder="e.g. 5"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="delivery_address">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="delivery_address"
                rows={3}
                required
                value={form.delivery_address}
                onChange={(e) => set("delivery_address", e.target.value)}
                className={inputClass}
                placeholder="Full delivery address including city and country…"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="notes">
                Additional Notes
                <span className="text-muted-foreground font-normal ml-1">(optional)</span>
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                className={inputClass}
                placeholder="Any special requirements, sizing, or packaging notes…"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                {error}
              </p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-primary text-primary-foreground rounded px-4 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting…" : "Submit Sample Request"}
              </button>
              <Link
                href={`/${lang}/dashboard`}
                className="px-4 py-2.5 border border-border rounded text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
