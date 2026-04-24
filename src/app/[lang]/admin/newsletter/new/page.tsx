"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { saveDraft } from "../actions";

const COUNTRIES = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
  "Egypt", "Russia", "Poland", "France", "Italy", "Netherlands", "United Kingdom", "Other",
];

type TargetAudience = "all" | "countries" | "buyers" | "test";

export default function NewCampaignPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const duplicateId = searchParams.get("duplicate");
  const lang = params.lang as string;
  const [isPending, startTransition] = useTransition();

  const [subject, setSubject] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [content, setContent] = useState("");
  const [targetAudience, setTargetAudience] = useState<TargetAudience>("all");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [testEmail, setTestEmail] = useState("");
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [sendingTest, setSendingTest] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (!duplicateId) return;
    const supabase = createClient();
    supabase
      .from("newsletter_campaigns")
      .select("subject, preview_text, content")
      .eq("id", duplicateId)
      .single()
      .then(({ data }) => {
        if (data) {
          setSubject("Copy of " + data.subject);
          setPreviewText(data.preview_text ?? "");
          setContent(data.content);
        }
      });
  }, [duplicateId]);

  useEffect(() => {
    async function fetchCount() {
      setSubscriberCount(null);
      try {
        const res = await fetch(`/api/admin/subscriber-count?audience=${targetAudience}&countries=${selectedCountries.join(",")}`);
        if (res.ok) {
          const { count } = await res.json();
          setSubscriberCount(count);
        }
      } catch {
        setSubscriberCount(null);
      }
    }
    if (targetAudience !== "test") fetchCount();
  }, [targetAudience, selectedCountries]);

  function toggleCountry(c: string) {
    setSelectedCountries((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  function validate() {
    if (!subject.trim()) { setError("Subject line is required."); return false; }
    if (!content.trim()) { setError("Email content is required."); return false; }
    if (targetAudience === "test" && !testEmail.trim()) { setError("Test email address is required."); return false; }
    if (targetAudience === "countries" && selectedCountries.length === 0) { setError("Select at least one country."); return false; }
    return true;
  }

  async function handleSaveDraft() {
    if (!subject.trim()) { setError("Subject line is required."); return; }
    setError("");
    startTransition(async () => {
      try {
        await saveDraft({ subject, previewText, content, targetAudience, countries: selectedCountries });
        router.push(`/${lang}/admin/newsletter`);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to save draft.");
      }
    });
  }

  async function handleSendTest() {
    if (!subject.trim() || !testEmail.trim()) { setError("Subject and test email are required."); return; }
    setError(""); setSendingTest(true);
    try {
      const campaignId = await saveDraft({ subject, previewText, content, targetAudience, countries: selectedCountries });
      const res = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaignId, targetAudience: "test", testEmail, isTest: true }),
      });
      if (!res.ok) throw new Error("Send failed");
      setSuccessMsg(`Test email sent to ${testEmail}`);
      setTimeout(() => setSuccessMsg(""), 5000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to send test email.");
    } finally {
      setSendingTest(false);
    }
  }

  async function handleSend() {
    if (!validate()) return;
    const countLabel = subscriberCount !== null ? subscriberCount : "all matching";
    const confirmed = confirm(`Send this campaign to ${countLabel} subscribers? This cannot be undone.`);
    if (!confirmed) return;
    setError(""); setSending(true);
    try {
      const campaignId = await saveDraft({ subject, previewText, content, targetAudience, countries: selectedCountries });
      const res = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaignId, targetAudience, countries: selectedCountries, testEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Send failed");
      router.push(`/${lang}/admin/newsletter`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to send campaign.");
      setSending(false);
    }
  }

  const inputClass = "w-full bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500";
  const labelClass = "block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5";

  return (
    <div className="p-6 md:p-10 max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/${lang}/admin/newsletter`} className="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back
        </Link>
        <h1 className="text-xl font-semibold text-white">Create Campaign</h1>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 space-y-5">
        <div>
          <label className={labelClass}>Subject Line *</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass} placeholder="e.g. New Collection — Summer 2025" />
        </div>

        <div>
          <label className={labelClass}>Preview Text <span className="normal-case font-normal text-gray-500">(shown in email client preview)</span></label>
          <input type="text" value={previewText} onChange={(e) => setPreviewText(e.target.value)} className={inputClass} placeholder="Brief summary that appears after the subject line…" />
        </div>

        <div>
          <label className={labelClass}>Email Content *</label>
          <textarea
            rows={14}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={inputClass}
            placeholder="Write your newsletter content here. HTML is supported.&#10;&#10;Example:&#10;<h2>New Collection Arrived</h2>&#10;<p>We're excited to share our latest range…</p>&#10;<a href='https://vedantfashion.com/en/products'>Browse Collection</a>"
          />
          <p className="text-xs text-gray-500 mt-1">HTML is supported. Images, links, and formatting will render in email clients.</p>
        </div>

        {/* Target audience */}
        <div>
          <label className={labelClass}>Send To</label>
          <div className="space-y-2.5">
            {([
              { value: "all", label: "All active subscribers" },
              { value: "countries", label: "Specific countries" },
              { value: "buyers", label: "Buyers only (registered accounts)" },
              { value: "test", label: "Test email only" },
            ] as { value: TargetAudience; label: string }[]).map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="audience"
                  value={opt.value}
                  checked={targetAudience === opt.value}
                  onChange={() => setTargetAudience(opt.value)}
                  className="w-4 h-4 text-blue-500 border-gray-600 bg-gray-800 focus:ring-blue-500 focus:ring-offset-gray-900"
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {targetAudience === "countries" && (
          <div>
            <label className={labelClass}>Select Countries</label>
            <div className="grid grid-cols-2 gap-2">
              {COUNTRIES.map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCountries.includes(c)}
                    onChange={() => toggleCountry(c)}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                  />
                  <span className="text-sm text-gray-300">{c}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {targetAudience === "test" && (
          <div>
            <label className={labelClass}>Test Email Address</label>
            <input type="email" value={testEmail} onChange={(e) => setTestEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
          </div>
        )}

        {subscriberCount !== null && targetAudience !== "test" && (
          <p className="text-xs text-gray-500">
            This campaign will be sent to <span className="text-blue-400 font-medium">{subscriberCount.toLocaleString()}</span> subscriber{subscriberCount !== 1 ? "s" : ""}.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-400 bg-red-900/20 border border-red-800 rounded px-3 py-2">{error}</p>
        )}
        {successMsg && (
          <p className="text-sm text-green-400 bg-green-900/20 border border-green-800 rounded px-3 py-2">{successMsg}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleSendTest}
            disabled={sendingTest || sending}
            className="flex-1 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-medium py-2.5 rounded transition-colors disabled:opacity-50"
          >
            {sendingTest ? "Sending test…" : "Send Test Email"}
          </button>
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={isPending || sending}
            className="flex-1 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 text-sm font-medium py-2.5 rounded transition-colors disabled:opacity-50"
          >
            {isPending ? "Saving…" : "Save as Draft"}
          </button>
          <button
            type="button"
            onClick={handleSend}
            disabled={sending || isPending || sendingTest}
            className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-medium py-2.5 rounded transition-colors"
          >
            {sending
              ? "Sending…"
              : subscriberCount !== null && targetAudience !== "test"
              ? `Send to ${subscriberCount.toLocaleString()} Subscribers`
              : "Send Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
}
