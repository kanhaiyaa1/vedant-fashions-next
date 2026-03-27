import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Product Categories — Wholesale Garments",
    description: "Browse all product categories: woven blouses, cotton dresses, linen shirts, and resort wear. MOQ from 300 pcs, GOTS and OEKO-TEX certified.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/products`, ...buildHreflangAlternates("/products") },
  };
}

const categories = [
  { name: "Woven Blouses", slug: "/products/woven-blouses", desc: "Elegant woven blouses in organic cotton, Tencel™, and linen blends. Pintucks, ruffles, embroidery.", moq: "500 pcs", lead: "6–8 weeks" },
  { name: "Cotton Dresses", slug: "/products/cotton-dresses", desc: "A-line, shirt dresses, wrap styles in 100% organic cotton. Garment-dyed and yarn-dyed options.", moq: "300 pcs", lead: "6–8 weeks" },
  { name: "Linen Shirts", slug: "/products/linen-shirts", desc: "European-cut linen and linen-blend shirts. Enzyme-washed for softness. Men's and women's.", moq: "500 pcs", lead: "6–8 weeks" },
  { name: "Resort Wear", slug: "/products/resort-wear", desc: "Kaftans, wide-leg trousers, co-ord sets in breathable fabrics. Perfect for Mediterranean and cruise markets.", moq: "300 pcs", lead: "8–10 weeks" },
];

const ProductCategoriesPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Products"
        title="Our Product Categories"
        description="Curated garment ranges designed for European wholesale buyers. Every piece GOTS / OEKO-TEX certified, produced in our own facilities with full traceability."
      />

      <ContentBlock subtitle="Collections" title="What We Manufacture">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.slug} className="group border border-border rounded overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/8 via-accent to-secondary flex items-center justify-center">
                <p className="font-display text-xl text-primary/40 group-hover:text-primary/60 transition-colors">{cat.name}</p>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl font-medium text-foreground flex items-center gap-2">
                  {cat.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-body-sm text-muted-foreground">{cat.desc}</p>
                <div className="flex gap-6 pt-2 text-caption">
                  <span>MOQ: {cat.moq}</span>
                  <span>Lead: {cat.lead}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ContentBlock>

      <CTASection title="Need Custom Development?" description="We develop custom styles from your tech packs. Send us your designs and we'll quote within 48 hours." buttonText="Send Tech Pack" />
    </div>
  );
};

export default ProductCategoriesPage;
