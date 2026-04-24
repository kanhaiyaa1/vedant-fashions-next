import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryFilters from "./EnquiryFilters";
import StatusDropdown from "./StatusDropdown";

export const metadata: Metadata = {
  title: "Enquiries | Admin | Vedant Fashion",
};

const PAGE_SIZE = 20;

const STATUS_COLORS: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
  closed: "bg-gray-200 text-gray-600",
};

interface EnquiriesPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{
    status?: string;
    form_type?: string;
    country?: string;
    search?: string;
    page?: string;
  }>;
}

export default async function EnquiriesPage({ params, searchParams }: EnquiriesPageProps) {
  const { lang } = await params;
  const sp = await searchParams;

  const status = sp.status ?? "";
  const formType = sp.form_type ?? "";
  const country = sp.country ?? "";
  const search = sp.search ?? "";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10));
  const offset = (page - 1) * PAGE_SIZE;

  const supabase = await createClient();

  // Build filtered query
  let query = supabase
    .from("enquiries")
    .select(
      "id, name, company, email, country, form_type, product_interest, status, created_at",
      { count: "exact" }
    )
    .order("created_at", { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (status) query = query.eq("status", status);
  if (formType) query = query.eq("form_type", formType);
  if (country) query = query.eq("country", country);
  if (search) {
    query = query.or(
      `name.ilike.%${search}%,company.ilike.%${search}%,email.ilike.%${search}%`
    );
  }

  const [{ data: enquiries, count }, { data: countriesRaw }] = await Promise.all([
    query,
    supabase.from("enquiries").select("country").not("country", "is", null),
  ]);

  const countries = [...new Set((countriesRaw ?? []).map((r) => r.country).filter(Boolean))].sort();
  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE);

  const buildPageUrl = (p: number) => {
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (formType) params.set("form_type", formType);
    if (country) params.set("country", country);
    if (search) params.set("search", search);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return `/${lang}/admin/enquiries${qs ? `?${qs}` : ""}`;
  };

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-screen-xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Enquiries</h1>
          <p className="text-sm text-gray-400 mt-1">
            {count ?? 0} total{status || formType || country || search ? " (filtered)" : ""}
          </p>
        </div>
      </div>

      {/* Filters — needs Suspense because useSearchParams is inside */}
      <Suspense fallback={<div className="h-10 bg-gray-800 rounded animate-pulse" />}>
        <EnquiryFilters countries={countries} />
      </Suspense>

      {/* Table */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {!enquiries || enquiries.length === 0 ? (
          <p className="px-6 py-16 text-center text-sm text-gray-500">
            No enquiries match the current filters.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  {[
                    "ID", "Name", "Company", "Email",
                    "Country", "Type", "Product Interest",
                    "Status", "Date", "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq: Record<string, string>) => (
                  <tr
                    key={enq.id}
                    className="border-b border-gray-800 hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-500 font-mono text-xs">
                      {enq.id?.slice(0, 8)}…
                    </td>
                    <td className="px-4 py-3 text-white font-medium whitespace-nowrap">
                      {enq.name ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                      {enq.company ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{enq.email ?? "—"}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {enq.country ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 capitalize whitespace-nowrap">
                      {enq.form_type?.replace("_", " ") ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 max-w-[160px] truncate">
                      {enq.product_interest ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      <StatusDropdown id={enq.id} current={enq.status ?? "new"} />
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">
                      {enq.created_at
                        ? new Date(enq.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Link
                        href={`/${lang}/admin/enquiries/${enq.id}`}
                        className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded transition-colors"
                      >
                        View & Reply
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-400">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={buildPageUrl(page - 1)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors"
              >
                ← Previous
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={buildPageUrl(page + 1)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
