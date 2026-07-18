import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { FAQSchema } from "@/components/seo/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Ship, Plane, FileCheck, ShieldCheck } from "lucide-react";
import { getContent } from "@/data/translations/page-content";
import { shippingContent } from "@/data/translations/shipping";

// ── Static data ────────────────────────────────────────────────────────

const INCOTERM_CODES = ["FOB", "CIF", "DDP"];

const SEA_ROUTES = [
  { country: "UAE",          port: "Jebel Ali",                    transit: "18–22 days", frequency: "Weekly" },
  { country: "Saudi Arabia", port: "Dammam",                       transit: "20–24 days", frequency: "Weekly" },
  { country: "Saudi Arabia", port: "Jeddah",                       transit: "21–25 days", frequency: "Weekly" },
  { country: "Qatar",        port: "Hamad Port, Doha",             transit: "20–23 days", frequency: "Bi-weekly" },
  { country: "Kuwait",       port: "Shuwaikh",                     transit: "19–22 days", frequency: "Weekly" },
  { country: "Oman",         port: "Port Sultan Qaboos, Muscat",   transit: "17–20 days", frequency: "Weekly" },
  { country: "Bahrain",      port: "Khalifa Bin Salman",           transit: "19–22 days", frequency: "Bi-weekly" },
  { country: "Egypt",        port: "Alexandria / Port Said",       transit: "18–22 days", frequency: "Weekly" },
  { country: "Russia",       port: "St. Petersburg",               transit: "25–32 days", frequency: "Weekly" },
  { country: "Russia",       port: "Novorossiysk",                 transit: "22–28 days", frequency: "Weekly" },
  { country: "Poland",       port: "Gdańsk / Gdynia",              transit: "22–28 days", frequency: "Weekly" },
];

const AIR_ROUTES = [
  { airport: "Dubai (DXB)",   transit: "1–2 days" },
  { airport: "Riyadh (RUH)",  transit: "2–3 days" },
  { airport: "Doha (DOH)",    transit: "1–2 days" },
  { airport: "Moscow (SVO)",  transit: "4–5 days" },
];

const EXPORT_DOCS = [
  { name: "Commercial Invoice",                 desc: "Itemised invoice with FOB value, HS codes, buyer/seller details, and unit prices." },
  { name: "Packing List",                       desc: "Carton-wise breakdown: style, colour, size ratio, gross/net weight, and dimensions." },
  { name: "Bill of Lading",                     desc: "Original negotiable B/L or seawaybill issued by the shipping line (original or telex release)." },
  { name: "Certificate of Origin (GSP)",        desc: "Issued by FIEO / Export Inspection Council for GSP preferential duty in eligible markets." },
  { name: "CEPA Certificate of Origin (UAE)",   desc: "India-UAE CEPA preferential origin certificate — reduces UAE import duty to 0% on qualifying garments." },
  { name: "AZO-Free Test Report",               desc: "Third-party lab report (SGS / Intertek) confirming absence of restricted azo dyes per EN 14362-1." },
  { name: "Formaldehyde Test Report",           desc: "Test confirming formaldehyde levels within REACH limits for all age categories." },
  { name: "ESMA / SASO Compliance Declaration", desc: "Self-declaration or third-party conformity assessment for UAE ESMA and Saudi SASO textile regulations." },
  { name: "Arabic / English Care Label Samples",desc: "Pre-production woven label samples with bilingual care symbols per ISO 3758 for GCC buyer approval." },
];

const HS_CODES = [
  { category: "Ladies woven blouses (cotton)",          hs: "6206.30.00", desc: "Women's blouses, shirts, shirt-blouses — cotton" },
  { category: "Ladies woven blouses (man-made fibres)", hs: "6206.40.00", desc: "Women's blouses, shirts, shirt-blouses — man-made fibres" },
  { category: "Ladies cotton dresses",                   hs: "6204.42.00", desc: "Women's dresses — cotton" },
  { category: "Ladies dresses (other fibres)",           hs: "6204.49.00", desc: "Women's dresses — other textile materials (linen, Tencel™)" },
  { category: "Linen shirts",                            hs: "6205.90.00", desc: "Men's/women's shirts — other textile materials (linen)" },
  { category: "Ladies woven trousers",                   hs: "6204.62.00", desc: "Women's trousers and breeches — cotton" },
  { category: "Jumpsuits / dungarees",                   hs: "6204.69.00", desc: "Women's dungarees and jumpsuits — other materials" },
];

// ── Metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Shipping to Middle East & Russia | Export India | Vedant",
    description:
      "Sea & air freight from India to UAE, Saudi Arabia, Qatar, Kuwait, Oman, Russia. FOB Mumbai. Full export documentation. MOQ 300 pcs.",
    alternates: buildHreflangAlternates("/shipping"),
  };
}

// ── Page ───────────────────────────────────────────────────────────────

export default async function ShippingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const c = getContent(shippingContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <FAQSchema
        items={c.faqs.items.map((f) => ({ question: f.q, answer: f.a }))}
      />

      {/* ── Hero with decorative background art ── */}
      <section className="relative pt-20 md:pt-24 bg-cream overflow-hidden">

        {/* Decorative SVG background art */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <svg
            viewBox="0 0 1200 600"
            className="absolute inset-0 w-full h-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Large cargo ship silhouette — right side */}
            <g transform="translate(650, 200)" fill="white">
              <ellipse cx="200" cy="180" rx="280" ry="45" />
              <rect x="-60" y="100" width="520" height="80" rx="8" />
              <rect x="80" y="20" width="120" height="90" rx="4" />
              <rect x="100" y="0" width="80" height="30" rx="2" />
              <rect x="-40" y="60" width="70" height="45" rx="2" />
              <rect x="40" y="60" width="70" height="45" rx="2" />
              <rect x="220" y="60" width="70" height="45" rx="2" />
              <rect x="300" y="60" width="70" height="45" rx="2" />
              <line x1="350" y1="100" x2="350" y2="-40" stroke="white" strokeWidth="4" />
              <line x1="350" y1="-40" x2="450" y2="-40" stroke="white" strokeWidth="3" />
              <line x1="450" y1="-40" x2="450" y2="60" stroke="white" strokeWidth="2" />
            </g>

            {/* Fabric wavy lines — top left */}
            <g opacity="0.8">
              <path d="M-50,80 Q100,40 200,90 Q300,140 400,80 Q500,20 600,70" stroke="white" strokeWidth="2" fill="none" />
              <path d="M-50,110 Q100,70 200,120 Q300,170 400,110 Q500,50 600,100" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M-50,140 Q100,100 200,150 Q300,200 400,140 Q500,80 600,130" stroke="white" strokeWidth="1" fill="none" />
            </g>

            {/* Garment silhouette — far right */}
            <g transform="translate(1050, 50)" fill="white" opacity="0.7">
              <path d="M50,0 L80,0 L90,30 L110,20 L100,80 L90,200 L10,200 L0,80 L-10,20 L10,30 Z" />
              <ellipse cx="50" cy="0" rx="30" ry="15" />
            </g>

            {/* Compass rose */}
            <g transform="translate(900, 100)" stroke="white" fill="none" opacity="0.5">
              <circle cx="0" cy="0" r="60" strokeWidth="1" />
              <circle cx="0" cy="0" r="40" strokeWidth="0.5" />
              <line x1="0" y1="-65" x2="0" y2="65" strokeWidth="1" />
              <line x1="-65" y1="0" x2="65" y2="0" strokeWidth="1" />
              <line x1="-46" y1="-46" x2="46" y2="46" strokeWidth="0.5" />
              <line x1="46" y1="-46" x2="-46" y2="46" strokeWidth="0.5" />
              <polygon points="0,-60 -8,-40 8,-40" fill="white" stroke="none" />
            </g>

            {/* Dotted shipping route arcs */}
            <path d="M200,400 Q500,100 1000,300" stroke="white" strokeWidth="1" fill="none" strokeDasharray="8 8" opacity="0.3" />
            <path d="M150,420 Q480,130 980,320" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="4 12" opacity="0.2" />

            {/* Anchor — bottom left */}
            <g transform="translate(80, 420)" stroke="white" fill="none" strokeWidth="3" opacity="0.6">
              <circle cx="0" cy="-30" r="10" />
              <line x1="0" y1="-20" x2="0" y2="40" />
              <line x1="-25" y1="-10" x2="25" y2="-10" />
              <path d="M-25,40 Q-40,30 -25,20" />
              <path d="M25,40 Q40,30 25,20" />
            </g>

            {/* Scattered dots */}
            <g fill="white" opacity="0.4">
              {[80,160,240,320,400,480,560,640,720,800].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={30 + (i % 3) * 20} r="2" />
                  <circle cx={x + 40} cy={50 + (i % 4) * 15} r="1.5" />
                  <circle cx={x + 20} cy={70 + (i % 2) * 25} r="1" />
                </g>
              ))}
            </g>

            {/* Sewing needle and thread — top right */}
            <g transform="translate(700, 30)" stroke="white" opacity="0.5">
              <line x1="0" y1="0" x2="80" y2="120" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="4" ry="8" fill="white" stroke="none" transform="rotate(-55)" />
              <path d="M80,120 Q120,100 110,140 Q100,180 140,170" strokeWidth="1.5" fill="none" />
            </g>
          </svg>

          {/* Radial vignette */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, #f5f0e8 100%)" }}
          />
        </div>

        {/* Hero content — centered single column */}
        <div className="container-wide section-spacing relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-subheading text-[#c9a96e]">Export Logistics</p>
            <h1 className="text-display-xl text-foreground">
              Shipping &amp; Export from India to Middle East, Russia &amp; Global
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
              Direct sea freight from JNPT Mumbai to 8 destination ports.
              18–22 days to Jebel Ali. FOB, CIF, and DDP available.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="border border-[#c9a96e]/40 text-[#c9a96e] text-sm px-4 py-2 rounded-sm">FOB Mumbai</span>
              <span className="border border-border text-muted-foreground text-sm px-4 py-2 rounded-sm">8 Destination Ports</span>
              <span className="border border-border text-muted-foreground text-sm px-4 py-2 rounded-sm">Weekly Sailings</span>
            </div>
            <div className="w-16 h-px bg-[#c9a96e] mx-auto" />

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 max-w-2xl mx-auto">
              {[
                { v: "18–22d", l: "UAE" },
                { v: "20–24d", l: "Saudi" },
                { v: "25–32d", l: "Russia" },
                { v: "FOB/CIF/DDP", l: "Incoterms" },
              ].map((s) => (
                <div key={s.l} className="text-center border border-border rounded p-3">
                  <p className="font-display text-sm font-semibold text-[#c9a96e]">{s.v}</p>
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INCOTERMS */}
      <ContentBlock subtitle={c.incoterms.subtitle} title={c.incoterms.title}>
        <div className="grid md:grid-cols-3 gap-6">
          {c.incoterms.items.map((t, i) => (
            <div key={INCOTERM_CODES[i]} className="bg-card border border-border rounded p-6 space-y-4">
              <div className="space-y-1">
                <p className="font-display text-2xl font-semibold text-olive">{INCOTERM_CODES[i]}</p>
                <p className="text-caption text-muted-foreground">{t.full}</p>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{t.meaning}</p>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Ship className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                  <p className="text-caption text-muted-foreground">
                    <strong className="text-foreground">{c.labels.freight}:</strong> {t.freight}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                  <p className="text-caption text-muted-foreground">
                    <strong className="text-foreground">{c.labels.customs}:</strong> {t.customs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* SEA FREIGHT TABLE */}
      <ContentBlock subtitle={c.seaFreight.subtitle} title={c.seaFreight.title} bg="cream">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">{c.seaFreight.headers[0]}</th>
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">{c.seaFreight.headers[1]}</th>
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">{c.seaFreight.headers[2]}</th>
                <th className="py-3 text-caption font-semibold text-foreground uppercase tracking-wider">{c.seaFreight.headers[3]}</th>
              </tr>
            </thead>
            <tbody>
              {SEA_ROUTES.map((row, i) => (
                <tr key={`${row.country}-${row.port}`} className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}>
                  <td className="py-3 pr-6 text-body-sm font-medium text-foreground">{row.country}</td>
                  <td className="py-3 pr-6 text-body-sm text-muted-foreground">{row.port}</td>
                  <td className="py-3 pr-6 text-body-sm font-medium text-olive">{row.transit}</td>
                  <td className="py-3 text-body-sm text-muted-foreground">{row.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-caption text-muted-foreground mt-4">{c.seaFreight.footnote}</p>
      </ContentBlock>

      {/* AIR FREIGHT */}
      <ContentBlock subtitle={c.airFreight.subtitle} title={c.airFreight.title}>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-body text-muted-foreground leading-relaxed">{c.airFreight.description}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {AIR_ROUTES.map((r) => (
              <div key={r.airport} className="bg-card border border-border rounded p-5 space-y-2 text-center">
                <Plane className="w-5 h-5 text-olive mx-auto" />
                <p className="font-display font-medium text-foreground text-sm">{r.airport}</p>
                <p className="text-body-sm text-olive font-semibold">{r.transit}</p>
              </div>
            ))}
          </div>
          <p className="text-caption text-muted-foreground">{c.airFreight.footnote}</p>
        </div>
      </ContentBlock>

      {/* EXPORT DOCUMENTATION */}
      <ContentBlock subtitle={c.exportDocs.subtitle} title={c.exportDocs.title} bg="cream">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {EXPORT_DOCS.map((doc) => (
            <div key={doc.name} className="bg-background border border-border rounded p-5 space-y-1">
              <div className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <p className="text-body-sm font-semibold text-foreground">{doc.name}</p>
              </div>
              <p className="text-caption text-muted-foreground pl-6">{doc.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* HS CODES */}
      <ContentBlock subtitle={c.hsCodes.subtitle} title={c.hsCodes.title}>
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">{c.hsCodes.headers[0]}</th>
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">{c.hsCodes.headers[1]}</th>
                <th className="py-3 text-caption font-semibold text-foreground uppercase tracking-wider">{c.hsCodes.headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {HS_CODES.map((row, i) => (
                <tr key={row.hs} className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}>
                  <td className="py-3 pr-6 text-body-sm font-medium text-foreground">{row.category}</td>
                  <td className="py-3 pr-6 text-body-sm font-mono text-olive">{row.hs}</td>
                  <td className="py-3 text-body-sm text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-caption text-muted-foreground mt-4 max-w-4xl mx-auto">{c.hsCodes.footnote}</p>
      </ContentBlock>

      {/* FAQ */}
      <ContentBlock subtitle={c.faqs.subtitle} title={c.faqs.title} bg="cream">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {c.faqs.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded bg-background px-5"
              >
                <AccordionTrigger className="text-left text-body-sm font-medium text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentBlock>

      <CTASection
        title={c.cta.title}
        description={c.cta.description}
        buttonText={c.cta.buttonText}
        buttonLink={`/${lang}/inquiry`}
      />
    </div>
  );
}
