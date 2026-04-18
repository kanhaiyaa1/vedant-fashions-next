"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/vedant/PageHero";
import CTASection from "@/components/vedant/CTASection";
import ProductFilters, { type FilterState } from "@/components/vedant/catalog/ProductFilters";
import CatalogProductCard from "@/components/vedant/catalog/CatalogProductCard";
import { filterProducts, products } from "@/data/products";

const CatalogClient = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    certifications: [],
    gsmRange: [60, 350],
  });

  const filtered = useMemo(() => {
    let result = filterProducts({
      category: filters.category || undefined,
      search: filters.search || undefined,
      gsmMin: filters.gsmRange[0],
      gsmMax: filters.gsmRange[1],
    });

    if (filters.certifications.length > 0) {
      result = result.filter((p) =>
        filters.certifications.some((c) => p.certifications.includes(c))
      );
    }

    return result;
  }, [filters]);

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Product Catalogue"
        title="Wholesale Garment Collection"
        description="Browse our complete range of GOTS and OEKO-TEX certified garments. All products manufactured in-house with full traceability and GCC & global export compliance."
      />

      <section className="section-spacing">
        <div className="container-wide">
          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
            <ProductFilters filters={filters} onChange={setFilters} resultCount={filtered.length} />

            <div>
              <div className="hidden lg:flex items-center justify-between mb-8">
                <p className="text-body-sm text-muted-foreground">
                  Showing {filtered.length} of {products.length} products
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-display text-xl text-foreground mb-2">No products found</p>
                  <p className="text-body-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {filtered.map((product) => (
                    <CatalogProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Can't Find What You Need?"
        description="We develop custom styles from your tech packs. Send us your designs and we'll provide a detailed quote within 48 hours."
        buttonText="Request Custom Development"
      />
    </div>
  );
};

export default CatalogClient;
