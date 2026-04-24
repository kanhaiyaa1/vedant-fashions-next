"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/en/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display text-2xl font-semibold text-foreground">
            Vedant<span className="font-light text-muted-foreground ml-1">Fashion</span>
          </Link>
          <p className="text-subheading text-gold mt-4">Buyer Portal</p>
          <h1 className="text-display-sm text-foreground mt-2">Reset Password</h1>
        </div>

        <div className="bg-card border border-border rounded p-8 shadow-sm">
          {sent ? (
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-olive/20 flex items-center justify-center mx-auto">
                <span className="text-olive text-xl">✓</span>
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground">Check Your Email</h2>
              <p className="text-sm text-muted-foreground">
                We sent a password reset link to <strong>{email}</strong>.
              </p>
              <Link href="login" className="text-sm text-foreground font-medium hover:underline block mt-2">
                Back to Sign In
              </Link>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-5">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@company.com"
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
                  {loading ? "Sending…" : "Send Reset Link"}
                </button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                <Link href="login" className="text-foreground font-medium hover:underline">
                  Back to Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
