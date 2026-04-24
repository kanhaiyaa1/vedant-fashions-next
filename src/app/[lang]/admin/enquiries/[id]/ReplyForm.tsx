"use client";

import { useState, useTransition } from "react";
import { sendReply } from "./actions";

interface ReplyFormProps {
  id: string;
  buyerName: string;
  buyerEmail: string;
  buyerCompany: string;
  existingReply?: string | null;
  repliedAt?: string | null;
}

export default function ReplyForm({
  id,
  buyerName,
  buyerEmail,
  buyerCompany,
  existingReply,
  repliedAt,
}: ReplyFormProps) {
  const [reply, setReply] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const placeholder = `Dear ${buyerName},

Thank you for your enquiry regarding [product/category].

We are pleased to confirm that we can accommodate your requirements. Here are the details:

- MOQ: 300 pieces per style
- Lead time: 45–60 days from order confirmation
- FOB Mumbai
- Payment terms: 30% advance, 70% against documents

Please find attached our latest catalogue and price list for your reference.

We look forward to building a long-term partnership with ${buyerCompany}.

Warm regards,
Vedant Fashion Team`;

  function handleSend() {
    setError("");
    if (!reply.trim()) {
      setError("Please write a reply before sending.");
      return;
    }
    startTransition(async () => {
      try {
        await sendReply(id, reply, buyerEmail, buyerName);
        setSent(true);
        setReply("");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to send reply.");
      }
    });
  }

  return (
    <div className="space-y-6">
      {/* Previous reply */}
      {existingReply && (
        <div className="bg-gray-800 rounded-lg p-5 space-y-2 border border-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Previous Reply
            </p>
            {repliedAt && (
              <p className="text-xs text-gray-500">
                Sent {new Date(repliedAt).toLocaleDateString("en-GB", {
                  day: "2-digit", month: "short", year: "numeric",
                })}
              </p>
            )}
          </div>
          <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
            {existingReply}
          </p>
        </div>
      )}

      {/* Success state */}
      {sent ? (
        <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center space-y-2">
          <p className="text-green-400 font-medium">Reply sent successfully ✓</p>
          <p className="text-sm text-gray-400">
            Email delivered to <span className="text-gray-200">{buyerEmail}</span>
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-2 text-xs text-gray-400 hover:text-white transition-colors underline"
          >
            Send another reply
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
            Reply to {buyerName} at {buyerCompany}
          </label>
          <textarea
            value={reply}
            onChange={(e) => { setReply(e.target.value); setError(""); }}
            placeholder={placeholder}
            rows={14}
            className="w-full bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-600 resize-y leading-relaxed"
          />

          {error && (
            <p className="text-sm text-red-400 bg-red-900/20 border border-red-800 rounded px-3 py-2">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Sends to: <span className="text-gray-400">{buyerEmail}</span>
            </p>
            <button
              onClick={handleSend}
              disabled={isPending}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-medium rounded transition-colors"
            >
              {isPending ? "Sending…" : "Send Reply"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
