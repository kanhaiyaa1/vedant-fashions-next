"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories, getAllCertifications } from "@/data/products";

export interface FilterState {
  search: string;
  category: string;
  certifications: string[];
  gsmRange: [number, number];
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
}

const allCertifications = getAllCertifications();

const ProductFilters = ({ filters, onChange, resultCount }: ProductFiltersProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const update = (partial: Partial<FilterState>) => onChange({ ...filters, ...partial });

  const activeCount = [
    filters.search,
    filters.category,
    filters.certifications.length > 0,
    filters.gsmRange[0] > 60 || filters.gsmRange[1] < 350,
  ].filter(Boolean).length;

  const clearAll = () =>
    onChange({ search: "", category: "", certifications: [], gsmRange: [60, 350] });

  const filterContent = (
    <div className="space-y-8">
      {/* Search */}
      <div className="space-y-2">
        <Label className="text-subheading">Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            placeholder="Search products..."
            className="pl-9 bg-background"
          />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-3">
        <Label className="text-subheading">Category</Label>
        <div className="space-y-2">
          <button
            onClick={() => update({ category: "" })}
            className={`block w-full text-left text-body-sm px-3 py-2 rounded-sm transition-colors ${
              !filters.category ? "bg-primary text-primary-foreground" : "hover:bg-accent"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => update({ category: cat.slug })}
              className={`block w-full text-left text-body-sm px-3 py-2 rounded-sm transition-colors ${
                filters.category === cat.slug ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
            >
              {cat.name}
              <span className="text-caption ml-1">({cat.productCount})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-3">
        <Label className="text-subheading">Certifications</Label>
        <div className="space-y-2">
          {allCertifications.map((cert) => (
            <label key={cert} className="flex items-center gap-2 cursor-pointer text-body-sm">
              <Checkbox
                checked={filters.certifications.includes(cert)}
                onCheckedChange={(checked) => {
                  const next = checked
                    ? [...filters.certifications, cert]
                    : filters.certifications.filter((c) => c !== cert);
                  update({ certifications: next });
                }}
              />
              {cert}
            </label>
          ))}
        </div>
      </div>

      {/* GSM Range */}
      <div className="space-y-3">
        <Label className="text-subheading">
          GSM Range: {filters.gsmRange[0]}–{filters.gsmRange[1]}
        </Label>
        <Slider
          min={60}
          max={350}
          step={10}
          value={filters.gsmRange}
          onValueChange={(v) => update({ gsmRange: v as [number, number] })}
          className="mt-2"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-6 flex items-center justify-between">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 text-body-sm border border-border px-4 py-2 rounded-sm hover:bg-accent transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeCount > 0 && (
            <Badge className="bg-primary text-primary-foreground text-[10px] ml-1">{activeCount}</Badge>
          )}
        </button>
        <p className="text-caption">{resultCount} products</p>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden mb-8 p-6 bg-card border border-border rounded">
          <div className="flex items-center justify-between mb-6">
            <p className="text-subheading">Filters</p>
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          {filterContent}
          {activeCount > 0 && (
            <button onClick={clearAll} className="mt-6 text-body-sm text-destructive underline">
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-2">
          <div className="flex items-center justify-between mb-6">
            <p className="text-subheading">Filters</p>
            {activeCount > 0 && (
              <button onClick={clearAll} className="text-caption text-destructive underline">
                Clear all
              </button>
            )}
          </div>
          {filterContent}
          <p className="text-caption pt-6 border-t border-border">{resultCount} products found</p>
        </div>
      </aside>
    </>
  );
};

export default ProductFilters;
