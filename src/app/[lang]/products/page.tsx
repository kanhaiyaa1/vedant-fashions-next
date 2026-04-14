import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { getProductsByCategory, categoryFobPricing } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Ladies Woven Wear Manufacturer Middle East | Vedant Fashion",
    description:
      "Wholesale ladies woven garments for UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Egypt, Russia & Poland. GOTS certified. MOQ from 300 pcs. FOB India.",
    keywords:
      "ladies woven wear manufacturer Middle East, wholesale garments UAE Saudi Arabia, woven blouses cotton dresses linen shirts India, GOTS certified garment manufacturer, MOQ 300 pcs wholesale India, ladies wear exporter GCC, private label garment India Middle East",
    alternates: buildHreflangAlternates("/products"),
  };
}

const EXPORT_MARKETS = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait",
  "Oman", "Bahrain", "Egypt", "Russia", "Poland",
];

const CATEGORY_SLUGS = [
  "woven-blouses",
  "cotton-dresses",
  "linen-shirts",
  "resort-wear",
] as const;

type CategorySlug = (typeof CATEGORY_SLUGS)[number];

const CATEGORY_META: Record<
  CategorySlug,
  { label: string; href: string; tagline: string }
> = {
  "woven-blouses": {
    label: "Woven Blouses",
    href: "/products/woven-blouses",
    tagline: "Organic cotton, Tencel™, and linen-blend blouses. Pintuck, ruffle, embroidered, and wrap styles.",
  },
  "cotton-dresses": {
    label: "Cotton Dresses",
    href: "/products/cotton-dresses",
    tagline: "A-line, shirt, wrap, maxi, smocked, and tiered dresses in 100% organic cotton.",
  },
  "linen-shirts": {
    label: "Linen Shirts",
    href: "/products/linen-shirts",
    tagline: "European flax linen shirts — classic, camp collar, guayabera, mandarin, and oversized.",
  },
  "resort-wear": {
    label: "Resort Wear",
    href: "/products/resort-wear",
    tagline: "Kaftans, wide-leg trousers, jumpsuits, palazzo pants, and beach cover-ups.",
  },
};

// ItemList JSON-LD
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vedant Fashion — Wholesale Product Categories",
  description:
    "Ladies woven wear manufacturer in India exporting to Middle East, GCC, and European wholesale buyers.",
  numberOfItems: CATEGORY_SLUGS.length,
  itemListElement: CATEGORY_SLUGS.map((slug, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: CATEGORY_META[slug].label,
      description: CATEGORY_META[slug].tagline,
      brand: { "@type": "Brand", name: "Vedant Fashion" },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: categoryFobPricing[slug]?.match(/[\d.]+/)?.[0] ?? "4.50",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Vedant Fashion" },
      },
    },
  })),
};

export default async function ProductCategoriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Pull live counts and first-product specs from real data
  const categoryData = CATEGORY_SLUGS.map((slug) => {
    const prods = getProductsByCategory(slug);
    const first = prods[0];
    return {
      slug,
      ...CATEGORY_META[slug],
      productCount: prods.length,
      moq: first?.moq ?? "300 pcs",
      leadTime: first?.leadTime ?? "6–8 weeks",
      fob: categoryFobPricing[slug] ?? "On request",
      certifications: [...new Set(prods.flatMap((p) => p.certifications))].slice(0, 3),
    };
  });

  return (
    <div className="min-h-screen bg-background font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO */}
      <PageHero
        subtitle="Product Categories"
        title="Ladies Woven Wear — Wholesale Manufacturing from India"
        description="GOTS and OEKO-TEX certified ladies woven garments manufactured in India for Middle East, GCC, and global wholesale buyers. MOQ from 300 pcs. FOB Mumbai."
      />

      {/* MARKET INTRO */}
      <ContentBlock subtitle="Export Markets" title="We Export Ladies Woven Wear To">
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-body text-muted-foreground leading-relaxed">
            Vedant Fashion exports certified ladies woven wear to wholesale buyers in{" "}
            <strong className="text-foreground">
              {EXPORT_MARKETS.join(", ")}
            </strong>
            . Our 45,000 sq ft ISO 9001:2015 factory in Gujarat, India handles end-to-end
            production — from GOTS-certified fabric sourcing and pattern making to finishing,
            AQL 2.5 quality inspection, and FOB export packing.
          </p>
          <p className="text-body text-muted-foreground leading-relaxed">
            Sea freight from Mumbai / JNPT reaches GCC ports in 17–24 days — Muscat in 17–20 days,
            Jebel Ali (UAE) in 18–22 days, Shuwaikh (Kuwait) in 19–22 days, Dammam / Jeddah
            (Saudi Arabia) in 20–24 days, and Doha (Qatar) in 20–23 days. All shipments include
            bilingual Arabic / English care labels, Certificate of Origin, and full compliance
            documentation for GCC customs clearance.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {EXPORT_MARKETS.map((m) => (
              <span
                key={m}
                className="bg-card border border-border text-body-sm text-muted-foreground px-3 py-1 rounded-sm"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* CATEGORY CARDS */}
      <ContentBlock subtitle="Collections" title="What We Manufacture" bg="cream">
        <div className="grid md:grid-cols-2 gap-8">
          {categoryData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${lang}${cat.href}`}
              className="group bg-card border border-border rounded overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/8 via-accent to-secondary flex items-center justify-center">
                <p className="font-display text-xl text-primary/40 group-hover:text-primary/60 transition-colors">
                  {cat.label}
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-medium text-foreground flex items-center gap-2">
                    {cat.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-caption text-muted-foreground">{cat.productCount} SKUs</span>
                </div>
                <p className="text-body-sm text-muted-foreground">{cat.tagline}</p>
                <div className="grid grid-cols-3 gap-3 pt-1 border-t border-border">
                  <div>
                    <p className="text-caption text-muted-foreground">MOQ</p>
                    <p className="text-body-sm font-medium text-foreground">{cat.moq}</p>
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground">Lead Time</p>
                    <p className="text-body-sm font-medium text-foreground">{cat.leadTime}</p>
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground">FOB Price</p>
                    <p className="text-body-sm font-medium text-olive">
                      {cat.fob.replace(" (MOQ 300 pcs)", "").replace(" (MOQ 500 pcs)", "")}
                    </p>
                  </div>
                </div>
                {cat.certifications.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {cat.certifications.map((c) => (
                      <span
                        key={c}
                        className="bg-olive/10 text-olive text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </ContentBlock>

      {/* QUICK SPECS */}
      <ContentBlock subtitle="At a Glance" title="Factory & Export Capabilities">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "122+", label: "Active SKUs" },
            { value: "300 pcs", label: "Minimum Order" },
            { value: "45–55 days", label: "Production Lead Time" },
            { value: "9 Markets", label: "Active Export Destinations" },
          ].map(({ value, label }) => (
            <div key={label} className="space-y-1">
              <p className="font-display text-display-sm font-semibold text-olive">{value}</p>
              <p className="text-body-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection
        title="Need a Custom Development?"
        description="Send your tech packs, mood boards, or product brief. We quote within 48 hours with FOB pricing, sample timeline, and fabric recommendations."
        buttonText="Send Enquiry"
        buttonLink={`/${lang}/inquiry`}
      />
    </div>
  );
}
