import Link from "next/link";
import {
  products,
  categories,
  standardSizeChart,
  categoryFobPricing,
  type Product,
} from "@/data/products";
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

/** Build the ordering steps list */
const ORDERING_STEPS = [
  {
    step: "01",
    title: "Enquiry & RFQ",
    desc: "Send your product brief, target quantity, delivery port, and required certifications. We respond with indicative FOB pricing within 24 hours.",
  },
  {
    step: "02",
    title: "Sample Approval",
    desc: "Proto or counter samples dispatched within 12–15 working days. Fabric, construction, and labelling reviewed and approved by the buyer before production sign-off.",
  },
  {
    step: "03",
    title: "Production",
    desc: "Bulk fabric sourced, cut, sewn, and finished in our 45,000 sq ft facility. Production updates shared weekly via your dedicated account manager.",
  },
  {
    step: "04",
    title: "QC — AQL 2.5 (ISO 2859-1)",
    desc: "In-line and final random inspection per AQL 2.5 standard under ISO 2859-1. Third-party inspection (SGS / Intertek) arranged on request at buyer's cost.",
  },
  {
    step: "05",
    title: "Shipment — FOB Mumbai",
    desc: "Export packing, Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and compliance declarations prepared. Goods handed to freight forwarder at JNPT Mumbai.",
  },
];

// ── Component ──────────────────────────────────────────────────────────

export default function ProductCategoryPage({
  categorySlug,
  primaryKeyword,
  heroDescription,
  middleEastMarkets,
  gccMarketNotes,
  faqs,
  lang,
}: Props) {
  const category = categories.find((c) => c.slug === categorySlug);
  const categoryProducts = products.filter((p) => p.category === categorySlug);
  const firstProduct = categoryProducts[0];

  if (!category || !firstProduct) return null;

  const fabricRows = collectFabricRows(categoryProducts);
  const fobPrice =
    categoryFobPricing[categorySlug] ?? firstProduct.fabricOptions[0]?.price ?? "On request";
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
        subtitle="B2B Overview"
        title={`${category.name} — Wholesale Manufacturing`}
      >
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-body text-muted-foreground leading-relaxed">
            {category.description} Our {category.productCount}+ SKU range covers the full spectrum of wholesale buyer requirements — from basic core styles to fashion-forward seasonal introductions, all produced within our ISO 9001:2015 certified, 45,000 sq ft manufacturing facility in Gujarat, India.
          </p>
          <p className="text-body text-muted-foreground leading-relaxed">
            Every style is available for private label, OEM, and ODM production. GOTS 6.0 and OEKO-TEX Standard 100 certification is maintained across the full range, with BSCI / SEDEX social compliance audits available on request. Minimum order quantities start from 300 pieces per style per colour, with standard production lead times of 45–55 days from order confirmation and fabric receipt. Sea freight from Mumbai / JNPT reaches Middle East ports in 17–22 days, making India one of the most time-efficient manufacturing origins for GCC buyers.
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
        subtitle="Technical Data"
        title="Fabric Specification Table"
        bg="cream"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-body-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                {[
                  "Fabric Name",
                  "Composition",
                  "GSM",
                  "Weave",
                  "Width",
                  "Shrinkage",
                  "Colourfastness",
                  "HS Code",
                  "FOB Price",
                ].map((h) => (
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
          * Prices are indicative FOB Mumbai. Final pricing subject to style complexity, fabric selection, and confirmed order quantity. Request a formal quotation for binding pricing.
        </p>
      </ContentBlock>

      {/* ── 4. TECHNICAL SPECS TABLE ──────────────────────────────────── */}
      <ContentBlock subtitle="Order Specifications" title="Technical Order Parameters">
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-body-sm border-collapse">
            <tbody>
              {[
                { label: "Minimum Order Quantity (MOQ)", value: `${firstProduct.moq} per style per colour` },
                { label: "Sample Lead Time", value: "12–15 working days (proto / counter sample)" },
                { label: "Production Lead Time", value: `${firstProduct.leadTime} from order confirmation + fabric receipt` },
                { label: "Available Size Range", value: sizeRange },
                { label: "FOB Price Range", value: fobPrice },
                { label: "Incoterms Available", value: "FOB Mumbai / CIF Destination / DDP" },
                { label: "Payment Terms", value: "LC at sight · TT 30/70 · SWIFT USD/AED/EUR" },
                { label: "Country of Origin", value: "India (preferential duty eligible for UAE CEPA, GCC frameworks)" },
                { label: "Quality Standard", value: "AQL 2.5 per ISO 2859-1 · In-house lab testing" },
                { label: "Quality Certificates", value: (firstProduct.qualityStandards ?? ["ISO 13934-1", "ISO 105-C06", "ISO 105-X12"]).join(" · ") },
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
        subtitle="GCC Export Markets"
        title="Middle East Market Suitability"
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
                  View {country} export page →
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded p-5 flex items-start gap-3">
            <Ship className="w-5 h-5 text-olive shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground text-body-sm">Sea Freight — India to GCC</p>
              <p className="text-body-sm text-muted-foreground mt-1">
                Mumbai / JNPT to Jebel Ali (UAE): <strong className="text-foreground">18–22 days</strong> ·
                Dammam (KSA): <strong className="text-foreground">20–24 days</strong> ·
                Doha (Qatar): <strong className="text-foreground">20–23 days</strong> ·
                Shuwaikh (Kuwait): <strong className="text-foreground">19–22 days</strong> ·
                Muscat (Oman): <strong className="text-foreground">17–20 days</strong>
              </p>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* ── 6. EXPORT COMPLIANCE ──────────────────────────────────────── */}
      <ContentBlock subtitle="Regulatory Compliance" title="Export Compliance & Standards">
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
              GCC / UAE ESMA, Saudi SASO, Qatar GQSM — bilingual Arabic / English care label compliance for all Middle East shipments
            </span>
          </div>
          <div className="flex items-start gap-3 bg-card border border-border rounded p-4">
            <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
            <span className="text-body-sm text-muted-foreground">
              India-UAE CEPA Certificate of Origin available — qualifying garments attract preferential / nil import duty into UAE
            </span>
          </div>
        </div>
      </ContentBlock>

      {/* ── 7. SIZE CHART ─────────────────────────────────────────────── */}
      <ContentBlock subtitle="Size Reference" title="Standard Size Chart" bg="cream">
        <div className="overflow-x-auto max-w-3xl mx-auto">
          <table className="w-full text-body-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                {["Size", "EU", "UK", "US", "Chest (cm)", "Waist (cm)", "Hip (cm)", "Length (cm)"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-3 text-caption font-semibold text-foreground uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  )
                )}
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
            Custom grading available up to size 5XL. GCC / Middle East market sizing available on request — measurements provided in both cm and inches.
          </p>
        </div>
      </ContentBlock>

      {/* ── 8. ORDERING PROCESS ───────────────────────────────────────── */}
      <ContentBlock subtitle="How to Order" title="B2B Ordering Process" bg="dark">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {ORDERING_STEPS.map((s, i) => (
              <div key={s.step} className="flex gap-5 pb-8 last:pb-0 relative">
                {i < ORDERING_STEPS.length - 1 && (
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
            Ready to Source?
          </p>
          <h2 className="font-display text-display-sm font-medium text-primary-foreground">
            Source {category.name} from India for{" "}
            {middleEastMarkets.slice(0, 3).join(", ")}
          </h2>
          <p className="text-body text-primary-foreground/70 max-w-xl mx-auto">
            Dedicated GCC account team. Respond within 24 hours with FOB pricing, samples, and a production timeline. {fobPrice}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href={`/${lang}/catalog`}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/90 transition-colors text-body-sm"
            >
              <BookOpen className="w-4 h-4" />
              Download Catalogue
            </Link>
            <Link
              href={`/${lang}/inquiry`}
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 text-primary-foreground font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/10 transition-colors text-body-sm"
            >
              <Package className="w-4 h-4" />
              Request Sample — Middle East
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
