"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function DownloadFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    value ? params.set("search", value) : params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search by name, company or email…"
        defaultValue={search}
        onKeyDown={(e) => { if (e.key === "Enter") handleSearch((e.target as HTMLInputElement).value); }}
        onBlur={(e) => handleSearch(e.target.value)}
        className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2 w-72 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500"
      />
      {search && (
        <button onClick={() => router.push(pathname)} className="text-xs text-gray-400 hover:text-white underline transition-colors">
          Clear
        </button>
      )}
    </div>
  );
}
