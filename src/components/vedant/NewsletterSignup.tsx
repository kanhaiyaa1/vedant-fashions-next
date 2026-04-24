"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm opacity-80 leading-relaxed">
        Thank you for subscribing! We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.15em] font-medium opacity-50">Stay Updated</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 bg-primary text-primary-foreground px-4 py-2 rounded text-xs font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
