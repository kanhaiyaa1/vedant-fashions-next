"use client";

import { useTransition } from "react";
import { toggleProductActive } from "./actions";

export default function ToggleActiveButton({ id, active }: { id: string; active: boolean }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => { toggleProductActive(id, active); })}
      className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors disabled:opacity-50 ${
        active
          ? "bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700"
          : "bg-gray-200 text-gray-600 hover:bg-green-100 hover:text-green-700"
      }`}
    >
      {isPending ? "…" : active ? "Active" : "Inactive"}
    </button>
  );
}
