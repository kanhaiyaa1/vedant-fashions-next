"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const COUNTRIES = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt",
  "Russia", "Poland", "France", "Italy", "Netherlands", "United Kingdom", "Other",
];

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const lang = params.lang as string;

  const [profile, setProfile] = useState({
    full_name: "",
    company: "",
    country: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [pwForm, setPwForm] = useState({ current: "", newPw: "", confirm: "" });
  const [pwSaving, setPwSaving] = useState(false);
  const [pwMsg, setPwMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const loadProfile = useCallback(async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push(`/${lang}/login`); return; }

    const { data } = await supabase
      .from("buyers")
      .select("full_name, company, country, phone, email")
      .eq("id", user.id)
      .single();

    setProfile({
      full_name: data?.full_name ?? "",
      company: data?.company ?? "",
      country: data?.country ?? "",
      phone: data?.phone ?? "",
      email: data?.email ?? user.email ?? "",
    });
    setLoading(false);
  }, [lang, router]);

  useEffect(() => { loadProfile(); }, [loadProfile]);

  async function handleProfileSave(e: React.FormEvent) {
    e.preventDefault();
    setProfileMsg(null);
    if (!profile.full_name.trim() || !profile.company.trim()) {
      setProfileMsg({ type: "error", text: "Full name and company are required." });
      return;
    }
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from("buyers")
      .update({
        full_name: profile.full_name,
        company: profile.company,
        country: profile.country,
        phone: profile.phone || null,
      })
      .eq("id", user.id);

    setSaving(false);
    if (error) {
      setProfileMsg({ type: "error", text: "Failed to save. Please try again." });
    } else {
      setProfileMsg({ type: "success", text: "Profile updated successfully." });
      setTimeout(() => setProfileMsg(null), 4000);
    }
  }

  async function handlePasswordUpdate(e: React.FormEvent) {
    e.preventDefault();
    setPwMsg(null);
    if (!pwForm.newPw || pwForm.newPw.length < 8) {
      setPwMsg({ type: "error", text: "New password must be at least 8 characters." });
      return;
    }
    if (pwForm.newPw !== pwForm.confirm) {
      setPwMsg({ type: "error", text: "New passwords do not match." });
      return;
    }
    setPwSaving(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: pwForm.newPw });
    setPwSaving(false);
    if (error) {
      setPwMsg({ type: "error", text: error.message });
    } else {
      setPwMsg({ type: "success", text: "Password updated successfully." });
      setPwForm({ current: "", newPw: "", confirm: "" });
      setTimeout(() => setPwMsg(null), 4000);
    }
  }

  async function handleDeleteAccount() {
    const confirmed = confirm(
      "Are you sure? This will permanently delete your account and all your data. This cannot be undone."
    );
    if (!confirmed) return;
    setDeleteLoading(true);
    try {
      const res = await fetch("/api/delete-account", { method: "POST" });
      if (!res.ok) throw new Error("Delete failed");
      router.push(`/${lang}`);
    } catch {
      alert("Failed to delete account. Please contact support.");
      setDeleteLoading(false);
    }
  }

  const inputClass = "w-full border border-border rounded px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Loading profile…</p>
      </div>
    );
  }

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

      <main className="container-wide py-10 max-w-2xl space-y-10">
        <div className="space-y-1">
          <p className="text-subheading text-gold">Buyer Portal</p>
          <h1 className="text-display-sm text-foreground">Edit Profile</h1>
        </div>

        {/* Profile form */}
        <div className="bg-card border border-border rounded p-8 shadow-sm space-y-6">
          <h2 className="font-display text-base font-semibold text-foreground border-b border-border pb-3">
            Account Information
          </h2>
          <form onSubmit={handleProfileSave} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className={labelClass} htmlFor="full_name">Full Name *</label>
                <input
                  id="full_name" type="text" required
                  value={profile.full_name}
                  onChange={(e) => setProfile((p) => ({ ...p, full_name: e.target.value }))}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label className={labelClass} htmlFor="company">Company Name *</label>
                <input
                  id="company" type="text" required
                  value={profile.company}
                  onChange={(e) => setProfile((p) => ({ ...p, company: e.target.value }))}
                  className={inputClass}
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className={labelClass} htmlFor="country">Country</label>
              <select
                id="country"
                value={profile.country}
                onChange={(e) => setProfile((p) => ({ ...p, country: e.target.value }))}
                className={inputClass}
              >
                <option value="">Select country…</option>
                {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className={labelClass} htmlFor="phone">
                Phone <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="phone" type="tel"
                value={profile.phone}
                onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                className={inputClass}
                placeholder="+971 50 000 0000"
              />
            </div>

            <div className="space-y-1.5">
              <label className={labelClass} htmlFor="email">Email Address</label>
              <input
                id="email" type="email" disabled
                value={profile.email}
                className={inputClass}
              />
              <p className="text-xs text-muted-foreground">Email cannot be changed here. Contact support if needed.</p>
            </div>

            {profileMsg && (
              <p className={`text-sm rounded px-3 py-2 border ${
                profileMsg.type === "success"
                  ? "text-green-700 bg-green-50 border-green-200"
                  : "text-red-600 bg-red-50 border-red-200"
              }`}>
                {profileMsg.text}
              </p>
            )}

            <button
              type="submit" disabled={saving}
              className="w-full bg-primary text-primary-foreground rounded px-4 py-2.5 text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </form>
        </div>

        {/* Change password */}
        <div className="bg-card border border-border rounded p-8 shadow-sm space-y-6">
          <h2 className="font-display text-base font-semibold text-foreground border-b border-border pb-3">
            Change Password
          </h2>
          <form onSubmit={handlePasswordUpdate} className="space-y-5">
            <div className="space-y-1.5">
              <label className={labelClass} htmlFor="newPw">New Password</label>
              <input
                id="newPw" type="password" required
                value={pwForm.newPw}
                onChange={(e) => setPwForm((p) => ({ ...p, newPw: e.target.value }))}
                className={inputClass}
                placeholder="Min. 8 characters"
              />
            </div>
            <div className="space-y-1.5">
              <label className={labelClass} htmlFor="confirmPw">Confirm New Password</label>
              <input
                id="confirmPw" type="password" required
                value={pwForm.confirm}
                onChange={(e) => setPwForm((p) => ({ ...p, confirm: e.target.value }))}
                className={inputClass}
                placeholder="Re-enter new password"
              />
            </div>

            {pwMsg && (
              <p className={`text-sm rounded px-3 py-2 border ${
                pwMsg.type === "success"
                  ? "text-green-700 bg-green-50 border-green-200"
                  : "text-red-600 bg-red-50 border-red-200"
              }`}>
                {pwMsg.text}
              </p>
            )}

            <button
              type="submit" disabled={pwSaving}
              className="w-full border border-border rounded px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors disabled:opacity-50"
            >
              {pwSaving ? "Updating…" : "Update Password"}
            </button>
          </form>
        </div>

        {/* Danger zone */}
        <div className="bg-card border border-red-200 rounded p-8 shadow-sm space-y-4">
          <h2 className="font-display text-base font-semibold text-red-600 border-b border-red-100 pb-3">
            Danger Zone
          </h2>
          <p className="text-sm text-muted-foreground">
            Permanently delete your account and all associated data including enquiries and sample requests. This action cannot be undone.
          </p>
          <button
            onClick={handleDeleteAccount}
            disabled={deleteLoading}
            className="border border-red-400 text-red-600 hover:bg-red-50 rounded px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-50"
          >
            {deleteLoading ? "Deleting…" : "Delete My Account"}
          </button>
        </div>
      </main>
    </div>
  );
}
