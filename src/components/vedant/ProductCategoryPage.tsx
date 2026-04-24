import Link from "next/link";
import {
  products,
  categories,
  standardSizeChart,
  categoryFobPricing,
  type Product,
} from "@/data/products";
import { getContent } from "@/data/translations/page-content";
import { productCategoryContent } from "@/data/translations/product-category";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  ShieldCheck,
  Package,
  Globe,
  Clock,
  HelpCircle,
  BookOpen,
  FlaskConical,
  Ship,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────

export interface CategoryFaq {
  q: string;
  a: string;
}

interface GccMarketNote {
  country: string;
  note: string;
}

interface Props {
  categorySlug: string;
  primaryKeyword: string;
  heroDescription: string;
  middleEastMarkets: string[];
  gccMarketNotes?: GccMarketNote[];
  faqs: CategoryFaq[];
  lang: string;
  moqOverride?: number;
  leadTimeOverride?: string;
  fobPriceOverride?: string;
}

// ── Helpers ────────────────────────────────────────────────────────────

/** Collect unique fabric rows across all products in the category (max 8 rows). */
function collectFabricRows(categoryProducts: Product[]) {
  const seen = new Set<string>();
  const rows: {
    name: string;
    composition: string;
    gsm: number;
    weave: string;
    width: string;
    shrinkage: string;
    colorfastness: string;
    hsCode: string;
    price: string;
  }[] = [];

  for (const p of categoryProducts) {
    for (const f of p.fabricOptions) {
      const key = f.name + f.gsm;
      if (!seen.has(key) && rows.length < 8) {
        seen.add(key);
        rows.push({
          name: f.name,
          composition: f.composition,
          gsm: f.gsm,
          weave: f.weave,
          width: f.width ?? "56–58\"",
          shrinkage: f.shrinkage ?? "3–5%",
          colorfastness: f.colorfastness ?? "Grade 4 (ISO 105)",
          hsCode: f.hsCode ?? p.hsCode ?? "—",
          price: f.price ?? categoryFobPricing[p.category] ?? "—",
        });
      }
    }
  }
  return rows;
}

// Ordering steps are now sourced from productCategoryContent per locale.

// ── Component ──────────────────────────────────────────────────────────

export default function ProductCategoryPage({
  categorySlug,
  primaryKeyword,
  heroDescription,
  middleEastMarkets,
  gccMarketNotes,
  faqs,
  lang,
  moqOverride,
  leadTimeOverride,
  fobPriceOverride,
}: Props) {
  const category = categories.find((c) => c.slug === categorySlug);
  const categoryProducts = products.filter((p) => p.category === categorySlug);
  const firstProduct = categoryProducts[0];

  if (!category || !firstProduct) return null;

  const content = getContent(productCategoryContent, lang);

  const fabricRows = collectFabricRows(categoryProducts);
  const fobPrice =
    fobPriceOverride ?? categoryFobPricing[categorySlug] ?? firstProduct.fabricOptions[0]?.price ?? "On request";
  const exportCompliance = firstProduct.exportCompliance;
  const allCerts = [
    ...new Set(categoryProducts.flatMap((p) => p.certifications)),
  ];

  // Build unique size range across products
  const hasMens = categorySlug === "linen-shirts";
  const sizeRange = hasMens ? "S–3XL (EU 46–58)" : "XS–3XL (EU 34–52)";

  // JSON-LD schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} — Vedant Fashion`,
    description: category.description,
    numberOfItems: categoryProducts.length,
    itemListElement: categoryProducts.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.shortDescription,
        sku: p.sku,
        brand: { "@type": "Brand", name: "Vedant Fashion" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Vedant Fashion" },
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ── 1. HERO ───────────────────────────────────────────────────── */}
      <PageHero
        subtitle={category.name}
        title={primaryKeyword}
        description={heroDescription}
      />

      {/* ── 2. CATEGORY OVERVIEW ──────────────────────────────────────── */}
      <ContentBlock
        subtitle={content.overview.subtitle}
        title={`${category.name} — ${content.overview.title}`}
      >
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-body text-muted-foreground leading-relaxed">
            {category.description}
          </p>
          <p className="text-body text-muted-foreground leading-relaxed">
            {content.overview.paragraph1.replace("{productCount}", String(category.productCount))}
          </p>
          <p className="text-body text-muted-foreground leading-relaxed">
            {content.overview.paragraph2}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {allCerts.map((c) => (
              <Badge
                key={c}
                className="bg-olive text-olive-foreground border-0 text-xs px-3 py-1 rounded-sm"
              >
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* ── 3. FABRIC SPECIFICATION TABLE ─────────────────────────────── */}
      <ContentBlock
        subtitle={content.fabricTable.subtitle}
        title={content.fabricTable.title}
        bg="cream"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-body-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                {content.fabricTable.headers.map((h) => (
                  <th
                    key={h}
                    className="text-left py-3 px-3 text-caption font-semibold text-foreground uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fabricRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
                >
                  <td className="py-3 px-3 font-medium text-foreground whitespace-nowrap">{row.name}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.composition}</td>
                  <td className="py-3 px-3 text-muted-foreground font-mono">{row.gsm}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.weave}</td>
                  <td className="py-3 px-3 text-muted-foreground whitespace-nowrap">{row.width}</td>
                  <td className="py-3 px-3 text-muted-foreground whitespace-nowrap">{row.shrinkage}</td>
                  <td className="py-3 px-3 text-muted-foreground whitespace-nowrap">{row.colorfastness}</td>
                  <td className="py-3 px-3 text-muted-foreground font-mono whitespace-nowrap">{row.hsCode}</td>
                  <td className="py-3 px-3 text-olive font-medium whitespace-nowrap">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-caption text-muted-foreground mt-4">
          {content.fabricTable.footnote}
        </p>
      </ContentBlock>

      {/* ── 4. TECHNICAL SPECS TABLE ──────────────────────────────────── */}
      <ContentBlock
        subtitle={content.techSpecs.subtitle}
        title={content.techSpecs.title}
      >
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-body-sm border-collapse">
            <tbody>
              {[
                { label: content.techSpecs.labels.moq, value: `${moqOverride ?? firstProduct.moq} per style per colour` },
                { label: content.techSpecs.labels.sampleLeadTime, value: "12–15 working days (proto / counter sample)" },
                { label: content.techSpecs.labels.productionLeadTime, value: `${leadTimeOverride ?? firstProduct.leadTime} from order confirmation + fabric receipt` },
                { label: content.techSpecs.labels.sizeRange, value: sizeRange },
                { label: content.techSpecs.labels.fobPrice, value: fobPrice },
                { label: content.techSpecs.labels.incoterms, value: "FOB Mumbai / CIF Destination / DDP" },
                { label: content.techSpecs.labels.payment, value: "LC at sight · TT 30/70 · SWIFT USD/AED/EUR" },
                { label: content.techSpecs.labels.countryOfOrigin, value: "India (preferential duty eligible for UAE CEPA, GCC frameworks)" },
                { label: content.techSpecs.labels.qualityStandard, value: "AQL 2.5 per ISO 2859-1 · In-house lab testing" },
                { label: content.techSpecs.labels.qualityCerts, value: (firstProduct.qualityStandards ?? ["ISO 13934-1", "ISO 105-C06", "ISO 105-X12"]).join(" · ") },
              ].map(({ label, value }) => (
                <tr key={label} className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground w-1/2 align-top">{label}</td>
                  <td className="py-3 px-4 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentBlock>

      {/* ── 5. MIDDLE EAST MARKET SUITABILITY ─────────────────────────── */}
      <ContentBlock
        subtitle={content.gccMarkets.subtitle}
        title={content.gccMarkets.title}
        bg="cream"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {(
              gccMarketNotes ?? [
                { country: "UAE", note: "Premium woven garments in high demand across Dubai, Abu Dhabi, and Sharjah retail channels. ESMA-compliant labelling included. 18–22 days sea freight to Jebel Ali." },
                { country: "Saudi Arabia", note: "SASO-compliant production with Arabic labelling. 20–24 days to Dammam / Jeddah. Strong demand for modest-wear adaptations." },
                { country: "Qatar", note: "GSO 1956-compliant. 20–23 days to Hamad Port. Premium retail and hospitality sector demand." },
                { country: "Kuwait", note: "PAAET/PSNS compliant. 19–22 days to Shuwaikh Port. Consistent wholesale demand from Kuwait City fashion importers." },
              ]
            ).map(({ country, note }) => (
              <div
                key={country}
                className="bg-card border border-border rounded p-5 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-olive shrink-0" />
                  <p className="font-display font-medium text-foreground">{country}</p>
                </div>
                <p className="text-body-sm text-muted-foreground">{note}</p>
                <Link
                  href={`/${lang}/${country.toLowerCase().replace(/\s+/g, "-")}/garment-manufacturer`}
                  className="text-caption text-olive hover:underline"
                >
                  {content.gccMarkets.viewExportPage.replace("{country}", country)}
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
            <Ship className="w-5 h-5 text-olive shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground text-body-sm">{content.gccMarkets.seaFreight}</p>
              <p className="text-body-sm text-muted-foreground mt-1">
                {content.gccMarkets.seaFreightDesc}
              </p>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* ── 6. EXPORT COMPLIANCE ──────────────────────────────────────── */}
      <ContentBlock
        subtitle={content.compliance.subtitle}
        title={content.compliance.title}
      >
        <div className="max-w-2xl mx-auto space-y-3">
          {exportCompliance.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-card border border-border rounded p-4"
            >
              <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span className="text-body-sm text-muted-foreground">{item}</span>
            </div>
          ))}
          <div className="flex items-start gap-3 bg-card border border-border rounded p-4">
            <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
            <span className="text-body-sm text-muted-foreground">
              {content.compliance.gccNote}
            </span>
          </div>
          <div className="flex items-start gap-3 bg-card border border-border rounded p-4">
            <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
            <span className="text-body-sm text-muted-foreground">
              {content.compliance.cepaNote}
            </span>
          </div>
        </div>
      </ContentBlock>

      {/* ── 7. SIZE CHART ─────────────────────────────────────────────── */}
      <ContentBlock
        subtitle={content.sizeChart.subtitle}
        title={content.sizeChart.title}
        bg="cream"
      >
        <div className="overflow-x-auto max-w-3xl mx-auto">
          <table className="w-full text-body-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                {content.sizeChart.headers.map((h) => (
                  <th
                    key={h}
                    className="text-left py-3 px-3 text-caption font-semibold text-foreground uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {standardSizeChart.map((row, i) => (
                <tr
                  key={row.size}
                  className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
                >
                  <td className="py-3 px-3 font-semibold text-foreground">{row.size}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.eu}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.uk}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.us}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.chest ?? "—"}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.waist ?? "—"}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.hip ?? "—"}</td>
                  <td className="py-3 px-3 text-muted-foreground">{row.length ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-caption text-muted-foreground mt-3">
            {content.sizeChart.footnote}
          </p>
        </div>
      </ContentBlock>

      {/* ── 8. ORDERING PROCESS ───────────────────────────────────────── */}
      <ContentBlock
        subtitle={content.ordering.subtitle}
        title={content.ordering.title}
        bg="dark"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {content.ordering.steps.map((s, i) => (
              <div key={s.step} className="flex gap-5 pb-8 last:pb-0 relative">
                {i < content.ordering.steps.length - 1 && (
                  <div className="absolute left-5 top-10 w-px h-full bg-primary-foreground/20" />
                )}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-primary-foreground/70">{s.step}</span>
                </div>
                <div className="pt-1 space-y-1">
                  <p className="font-display font-medium text-primary-foreground">{s.title}</p>
                  <p className="text-body-sm text-primary-foreground/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* ── 9. FAQ ────────────────────────────────────────────────────── */}
      <ContentBlock
        subtitle="Wholesale FAQ"
        title={`${category.name} — Buyer FAQs`}
        bg="cream"
      >
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded px-4"
              >
                <AccordionTrigger className="text-left text-body font-medium py-4 hover:no-underline">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-body-sm text-muted-foreground pb-4 pl-7">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentBlock>

      {/* ── 10. CTA ───────────────────────────────────────────────────── */}
      <section className="bg-primary section-spacing">
        <div className="container-wide text-center space-y-6">
          <p className="text-subheading text-primary-foreground/60 uppercase tracking-widest text-xs">
            {content.cta.subtitle}
          </p>
          <h2 className="font-display text-display-sm font-medium text-primary-foreground">
            {content.cta.title
              .replace("{category}", category.name)
              .replace("{markets}", middleEastMarkets.slice(0, 3).join(", "))}
          </h2>
          <p className="text-body text-primary-foreground/70 max-w-xl mx-auto">
            {content.cta.desc.replace("{fobPrice}", fobPrice)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href={`/${lang}/catalog`}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/90 transition-colors text-body-sm"
            >
              <BookOpen className="w-4 h-4" />
              {content.cta.catalogBtn}
            </Link>
            <Link
              href={`/${lang}/inquiry`}
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 text-primary-foreground font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/10 transition-colors text-body-sm"
            >
              <Package className="w-4 h-4" />
              {content.cta.sampleBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
