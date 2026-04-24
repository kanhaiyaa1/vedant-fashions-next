"use client";

import { useTransition } from "react";
import { updateEnquiryStatus } from "./actions";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
  closed: "bg-gray-200 text-gray-600",
};

interface StatusDropdownProps {
  id: string;
  current: string;
}

export default function StatusDropdown({ id, current }: StatusDropdownProps) {
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    startTransition(() => {
      updateEnquiryStatus(id, newStatus);
    });
  }

  return (
    <select
      defaultValue={current}
      onChange={handleChange}
      disabled={isPending}
      className={`text-xs font-medium px-2 py-1 rounded border-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 capitalize ${
        STATUS_COLORS[current] ?? "bg-gray-200 text-gray-600"
      }`}
    >
      {["new", "read", "replied", "closed"].map((s) => (
        <option key={s} value={s} className="bg-white text-gray-800 capitalize">
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </option>
      ))}
    </select>
  );
}
