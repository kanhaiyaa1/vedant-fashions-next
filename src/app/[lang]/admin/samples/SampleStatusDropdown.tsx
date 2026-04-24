"use client";

import { useTransition } from "react";
import { updateSampleStatus } from "./actions";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-blue-100 text-blue-700",
  dispatched: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default function SampleStatusDropdown({ id, current }: { id: string; current: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      defaultValue={current}
      disabled={isPending}
      onChange={(e) => {
        const val = e.target.value;
        startTransition(() => { updateSampleStatus(id, val); });
      }}
      className={`text-xs font-medium px-2 py-1 rounded border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 capitalize ${
        STATUS_COLORS[current] ?? "bg-gray-200 text-gray-600"
      }`}
    >
      {["pending", "approved", "dispatched", "delivered", "rejected"].map((s) => (
        <option key={s} value={s} className="bg-white text-gray-800 capitalize">
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </option>
      ))}
    </select>
  );
}
