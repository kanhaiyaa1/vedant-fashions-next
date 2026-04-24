import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { Suspense } from "react";
import DownloadFilters from "./DownloadFilters";

export const metadata: Metadata = {
  title: "Catalogue Downloads | Admin | Vedant Fashion",
};

interface DownloadsPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ search?: string }>;
}

export default async function DownloadsPage({ params, searchParams }: DownloadsPageProps) {
  const { lang } = await params;
  const { search } = await searchParams;

  const supabase = await createClient();

  let query = supabase
    .from("catalogue_downloads")
    .select("id, name, company, email, country, phone, downloaded_at", { count: "exact" })
    .order("downloaded_at", { ascending: false });

  if (search) {
    query = query.or(`company.ilike.%${search}%,email.ilike.%${search}%,name.ilike.%${search}%`);
  }

  const { data: downloads, count } = await query;

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-screen-xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Catalogue Downloads</h1>
          <p className="text-sm text-gray-400 mt-1">{count ?? 0} total</p>
        </div>
      </div>

      <Suspense fallback={<div className="h-10 bg-gray-800 rounded animate-pulse" />}>
        <DownloadFilters />
      </Suspense>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {!downloads || downloads.length === 0 ? (
          <p className="px-6 py-16 text-center text-sm text-gray-500">
            No downloads yet{search ? " matching your search" : ""}.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  {["Name", "Company", "Email", "Country", "Phone", "Date"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {downloads.map((d: Record<string, string>) => (
                  <tr key={d.id} className="border-b border-gray-800 hover:bg-gray-800/40 transition-colors">
                    <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{d.name ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{d.company ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{d.email ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{d.country ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{d.phone ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">
                      {d.downloaded_at
                        ? new Date(d.downloaded_at).toLocaleDateString("en-GB", {
                            day: "2-digit", month: "short", year: "numeric",
                          })
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
