"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const CATEGORIES = [
  "woven-blouses", "cotton-dresses", "linen-shirts",
  "resort-wear", "co-ord-sets", "other",
];

export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const set = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      value ? params.set(key, value) : params.delete(key);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";

  const selectClass = "bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        type="text"
        placeholder="Search by name…"
        defaultValue={search}
        onKeyDown={(e) => { if (e.key === "Enter") set("search", (e.target as HTMLInputElement).value); }}
        onBlur={(e) => set("search", e.target.value)}
        className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 w-56 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500"
      />
      <select value={category} onChange={(e) => set("category", e.target.value)} className={selectClass}>
        <option value="">All Categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c.replace(/-/g, " ").replace(/\b\w/g, (x) => x.toUpperCase())}
          </option>
        ))}
      </select>
      {(search || category) && (
        <button onClick={() => router.push(pathname)} className="text-xs text-gray-400 hover:text-white underline transition-colors">
          Clear
        </button>
      )}
    </div>
  );
}
