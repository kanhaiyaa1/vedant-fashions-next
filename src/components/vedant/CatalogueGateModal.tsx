"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const COUNTRIES = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt",
  "Russia", "Poland", "France", "Italy", "Netherlands", "United Kingdom", "Other",
];

interface CatalogueGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (downloadUrl: string) => void;
  catalogueName?: string;
}

export default function CatalogueGateModal({
  isOpen,
  onClose,
  onSuccess,
  catalogueName = "Vedant Fashion Catalogue",
}: CatalogueGateModalProps) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", country: "", phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.country) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/catalogue-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Request failed");
      trackEvent(GA_EVENTS.CATALOGUE_DOWNLOADED, { country: form.country });
      const url = json.downloadUrl ?? "#";
      if (url !== "#") window.open(url, "_blank");
      onSuccess(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-card border border-border rounded-lg shadow-2xl w-full max-w-md p-8 space-y-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Download Our Catalogue
          </h2>
          <p className="text-sm text-muted-foreground">
            Enter your details to receive the {catalogueName}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Full Name *</label>
            <input
              type="text" required value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className={inputClass} placeholder="Your name"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Company Name *</label>
            <input
              type="text" required value={form.company}
              onChange={(e) => set("company", e.target.value)}
              className={inputClass} placeholder="Your company"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Email Address *</label>
            <input
              type="email" required value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className={inputClass} placeholder="you@company.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Country *</label>
            <select
              required value={form.country}
              onChange={(e) => set("country", e.target.value)}
              className={inputClass}
            >
              <option value="">Select country…</option>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">
              Phone <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <input
              type="tel" value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={inputClass} placeholder="+971 50 000 0000"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit" disabled={loading}
            className="w-full bg-primary text-primary-foreground rounded px-4 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Processing…" : "Download Now"}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            We respect your privacy. No spam, ever.{" "}
            <button type="button" onClick={onClose} className="underline hover:text-foreground">
              Cancel
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
