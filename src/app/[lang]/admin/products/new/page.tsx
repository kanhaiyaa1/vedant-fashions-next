"use client";

import { useState, useTransition } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createProduct } from "../actions";

const CATEGORIES = [
  { value: "woven-blouses", label: "Woven Blouses" },
  { value: "cotton-dresses", label: "Cotton Dresses" },
  { value: "linen-shirts", label: "Linen Shirts" },
  { value: "resort-wear", label: "Resort Wear" },
  { value: "co-ord-sets", label: "Co-ord Sets" },
  { value: "other", label: "Other" },
];

const CERTS = ["GOTS", "OEKO-TEX", "GRS", "BSCI", "ISO 9001"];

export default function NewProductPage() {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as string;
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "",
    description: "",
    moq: "",
    lead_time: "",
    fob_price: "",
    hs_code: "",
    certifications: [] as string[],
    active: true,
  });

  function toSlug(s: string) {
    return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }

  function setField(field: string, value: unknown) {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "name" && typeof value === "string" && !prev.slug) {
        updated.slug = toSlug(value);
      }
      return updated;
    });
  }

  function toggleCert(cert: string) {
    setForm((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) { setError("Product name is required."); return; }
    if (!form.slug.trim()) { setError("Slug is required."); return; }
    if (!form.category) { setError("Please select a category."); return; }

    startTransition(async () => {
      try {
        await createProduct({
          name: form.name,
          slug: form.slug,
          category: form.category,
          description: form.description || undefined,
          moq: form.moq ? parseInt(form.moq) : null,
          lead_time: form.lead_time || undefined,
          fob_price: form.fob_price || undefined,
          hs_code: form.hs_code || undefined,
          certifications: form.certifications,
          active: form.active,
        });
        router.push(`/${lang}/admin/products`);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to create product.");
      }
    });
  }

  const inputClass = "w-full bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-500";
  const labelClass = "block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5";

  return (
    <div className="p-6 md:p-10 max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/${lang}/admin/products`} className="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to Products
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-white">Add New Product</h1>
      </div>

      <div className="bg-gray-900 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className={labelClass}>Product Name *</label>
              <input type="text" required value={form.name} onChange={(e) => setField("name", e.target.value)} className={inputClass} placeholder="e.g. Floral Woven Blouse" />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Slug * <span className="normal-case font-normal text-gray-500">(URL identifier, auto-generated)</span></label>
              <input
                type="text" required value={form.slug}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: toSlug(e.target.value) }))}
                className={inputClass} placeholder="e.g. floral-woven-blouse"
              />
              <p className="text-xs text-gray-500 mt-1">Used in product URL: /products/woven-blouses/<span className="text-gray-400">{form.slug || "slug"}</span></p>
            </div>

            <div>
              <label className={labelClass}>Category *</label>
              <select required value={form.category} onChange={(e) => setField("category", e.target.value)} className={inputClass}>
                <option value="">Select…</option>
                {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>

            <div>
              <label className={labelClass}>MOQ (pieces)</label>
              <input type="number" min={1} value={form.moq} onChange={(e) => setField("moq", e.target.value)} className={inputClass} placeholder="e.g. 300" />
            </div>

            <div>
              <label className={labelClass}>Lead Time</label>
              <input type="text" value={form.lead_time} onChange={(e) => setField("lead_time", e.target.value)} className={inputClass} placeholder="e.g. 45-55 days" />
            </div>

            <div>
              <label className={labelClass}>FOB Price Range</label>
              <input type="text" value={form.fob_price} onChange={(e) => setField("fob_price", e.target.value)} className={inputClass} placeholder="e.g. USD 4.50-7.00" />
            </div>

            <div>
              <label className={labelClass}>HS Code</label>
              <input type="text" value={form.hs_code} onChange={(e) => setField("hs_code", e.target.value)} className={inputClass} placeholder="e.g. 6206.10.00" />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Description</label>
              <textarea rows={4} value={form.description} onChange={(e) => setField("description", e.target.value)} className={inputClass} placeholder="Product description…" />
            </div>
          </div>

          <div>
            <label className={labelClass}>Certifications</label>
            <div className="flex flex-wrap gap-3">
              {CERTS.map((cert) => (
                <label key={cert} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.certifications.includes(cert)}
                    onChange={() => toggleCert(cert)}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                  />
                  <span className="text-sm text-gray-300">{cert}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setField("active", !form.active)}
                className={`relative w-10 h-6 rounded-full transition-colors ${form.active ? "bg-blue-600" : "bg-gray-600"}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.active ? "translate-x-5" : "translate-x-1"}`} />
              </div>
              <span className="text-sm text-gray-300">Active (visible on site)</span>
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-900/20 border border-red-800 rounded px-3 py-2">{error}</p>
          )}

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={isPending} className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-medium py-2.5 rounded transition-colors">
              {isPending ? "Creating…" : "Create Product"}
            </button>
            <Link href={`/${lang}/admin/products`} className="px-4 py-2.5 border border-gray-700 rounded text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
