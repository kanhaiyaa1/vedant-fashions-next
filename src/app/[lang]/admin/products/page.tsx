import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import ProductFilters from "./ProductFilters";
import ToggleActiveButton from "./ToggleActiveButton";
import FeaturedToggle from "./FeaturedToggle";

export const metadata: Metadata = {
  title: "Products | Admin | Vedant Fashion",
};

interface ProductsPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ search?: string; category?: string }>;
}

export default async function AdminProductsPage({ params, searchParams }: ProductsPageProps) {
  const { lang } = await params;
  const { search, category } = await searchParams;

  const supabase = await createClient();

  let query = supabase
    .from("products")
    .select("id, name, category, moq, fob_price, active, featured, created_at", { count: "exact" })
    .order("created_at", { ascending: false });

  if (category) query = query.eq("category", category);
  if (search) query = query.ilike("name", `%${search}%`);

  const { data: products, count } = await query;

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-screen-xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Products</h1>
          <p className="text-sm text-gray-400 mt-1">{count ?? 0} total</p>
        </div>
        <Link
          href={`/${lang}/admin/products/new`}
          className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded transition-colors font-medium uppercase tracking-wider"
        >
          + Add New Product
        </Link>
      </div>

      <Suspense fallback={<div className="h-10 bg-gray-800 rounded animate-pulse" />}>
        <ProductFilters />
      </Suspense>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {!products || products.length === 0 ? (
          <p className="px-6 py-16 text-center text-sm text-gray-500">
            No products found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  {["Name", "Category", "MOQ", "FOB Price", "Featured", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((p: Record<string, unknown>) => (
                  <tr key={p.id as string} className="border-b border-gray-800 hover:bg-gray-800/40 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{p.name as string}</td>
                    <td className="px-4 py-3 text-gray-300 capitalize whitespace-nowrap">
                      {(p.category as string)?.replace(/-/g, " ")}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {p.moq ? `${p.moq} pcs` : "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {(p.fob_price as string) ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      <FeaturedToggle id={p.id as string} featured={p.featured as boolean ?? false} />
                    </td>
                    <td className="px-4 py-3">
                      <ToggleActiveButton id={p.id as string} active={p.active as boolean} />
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/${lang}/admin/products/${p.id}/edit`}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        Edit
                      </Link>
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
