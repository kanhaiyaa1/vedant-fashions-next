"use client";

import { useState, useTransition } from "react";
import { updateStatus } from "./actions";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
  closed: "bg-gray-200 text-gray-600",
};

interface StatusFormProps {
  id: string;
  current: string;
}

export default function StatusForm({ id, current }: StatusFormProps) {
  const [status, setStatus] = useState(current);
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleUpdate() {
    startTransition(async () => {
      await updateStatus(id, status);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-400">Current:</span>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${
            STATUS_COLORS[current] ?? "bg-gray-200 text-gray-600"
          }`}
        >
          {current}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => { setStatus(e.target.value); setSaved(false); }}
          className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {["new", "read", "replied", "closed"].map((s) => (
            <option key={s} value={s} className="capitalize">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>

        <button
          onClick={handleUpdate}
          disabled={isPending || status === current}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm rounded transition-colors"
        >
          {isPending ? "Saving…" : "Update Status"}
        </button>

        {saved && (
          <span className="text-xs text-green-400">Status updated ✓</span>
        )}
      </div>
    </div>
  );
}
