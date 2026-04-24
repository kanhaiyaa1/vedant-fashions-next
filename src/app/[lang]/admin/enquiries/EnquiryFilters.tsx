"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { exportEnquiriesCSV } from "./actions";

const STATUSES = ["new", "read", "replied", "closed"];
const FORM_TYPES = ["general", "product", "bulk", "private_label"];

interface EnquiryFiltersProps {
  countries: string[];
}

export default function EnquiryFilters({ countries }: EnquiryFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const set = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const status = searchParams.get("status") ?? "";
  const formType = searchParams.get("form_type") ?? "";
  const country = searchParams.get("country") ?? "";
  const search = searchParams.get("search") ?? "";

  async function handleExport() {
    const csv = await exportEnquiriesCSV({
      status: status || undefined,
      form_type: formType || undefined,
      country: country || undefined,
      search: search || undefined,
    });
    if (!csv) return;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const selectClass =
    "bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <input
        type="text"
        placeholder="Search name, company, email…"
        defaultValue={search}
        onKeyDown={(e) => {
          if (e.key === "Enter") set("search", (e.target as HTMLInputElement).value);
        }}
        onBlur={(e) => set("search", e.target.value)}
        className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500"
      />

      {/* Status */}
      <select value={status} onChange={(e) => set("status", e.target.value)} className={selectClass}>
        <option value="">All Statuses</option>
        {STATUSES.map((s) => (
          <option key={s} value={s} className="capitalize">
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </option>
        ))}
      </select>

      {/* Form type */}
      <select value={formType} onChange={(e) => set("form_type", e.target.value)} className={selectClass}>
        <option value="">All Types</option>
        {FORM_TYPES.map((t) => (
          <option key={t} value={t}>
            {t.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </option>
        ))}
      </select>

      {/* Country */}
      <select value={country} onChange={(e) => set("country", e.target.value)} className={selectClass}>
        <option value="">All Countries</option>
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Clear */}
      {(status || formType || country || search) && (
        <button
          onClick={() => router.push(pathname)}
          className="text-xs text-gray-400 hover:text-white transition-colors underline"
        >
          Clear filters
        </button>
      )}

      {/* Export */}
      <button
        onClick={handleExport}
        className="ml-auto text-xs bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
      >
        Export CSV
      </button>
    </div>
  );
}
