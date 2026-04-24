"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const COUNTRIES = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt",
  "Russia", "Poland", "France", "Italy", "Netherlands", "United Kingdom", "Other",
];

interface SignupPageProps {
  params: Promise<{ lang: string }>;
}

export default function SignupPage({ params }: SignupPageProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    const supabase = createClient();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from("buyers").upsert({
        id: data.user.id,
        full_name: form.fullName,
        company: form.company,
        country: form.country,
        email: form.email,
      });
    }

    fetch("/api/notify-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.fullName,
        company: form.company,
        country: form.country,
        email: form.email,
      }),
    }).catch(() => {});

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-4">
          <Link href="/" className="font-display text-2xl font-semibold text-foreground inline-block">
            Vedant<span className="font-light text-muted-foreground ml-1">Fashion</span>
          </Link>
          <div className="bg-card border border-border rounded p-8 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-olive/20 flex items-center justify-center mx-auto">
              <span className="text-olive text-xl">✓</span>
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground">Check Your Email</h2>
            <p className="text-sm text-muted-foreground">
              We sent a verification link to <strong>{form.email}</strong>. Click it to activate your account.
            </p>
            <Link href="login" className="text-sm text-foreground font-medium hover:underline block mt-2">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-2xl font-semibold text-foreground">
            Vedant<span className="font-light text-muted-foreground ml-1">Fashion</span>
          </Link>
          <p className="text-subheading text-gold mt-4">Buyer Portal</p>
          <h1 className="text-display-sm text-foreground mt-2">Create Account</h1>
        </div>

        <div className="bg-card border border-border rounded p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="company">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                required
                value={form.country}
                onChange={(e) => set("country", e.target.value)}
                className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select country…</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => set("password", e.target.value)}
                className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Min. 8 characters"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={form.confirmPassword}
                onChange={(e) => set("confirmPassword", e.target.value)}
                className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Re-enter password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground rounded px-4 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="login" className="text-foreground font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
