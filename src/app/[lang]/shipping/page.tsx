import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
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

// INCOTERM codes — not translated
const INCOTERM_CODES = ["FOB", "CIF", "DDP"];

// Non-translatable route/docs/codes data
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
  { name: "Commercial Invoice",                desc: "Itemised invoice with FOB value, HS codes, buyer/seller details, and unit prices." },
  { name: "Packing List",                      desc: "Carton-wise breakdown: style, colour, size ratio, gross/net weight, and dimensions." },
  { name: "Bill of Lading",                    desc: "Original negotiable B/L or seawaybill issued by the shipping line (original or telex release)." },
  { name: "Certificate of Origin (GSP)",       desc: "Issued by FIEO / Export Inspection Council for GSP preferential duty in eligible markets." },
  { name: "CEPA Certificate of Origin (UAE)",  desc: "India-UAE CEPA preferential origin certificate — reduces UAE import duty to 0% on qualifying garments." },
  { name: "GOTS / OEKO-TEX Certificate Copies", desc: "Current scope certificate or transaction certificate per shipment for GOTS-certified orders." },
  { name: "AZO-Free Test Report",              desc: "Third-party lab report (SGS / Intertek) confirming absence of restricted azo dyes per EN 14362-1." },
  { name: "Formaldehyde Test Report",          desc: "Test confirming formaldehyde levels within OEKO-TEX / REACH limits for all age categories." },
  { name: "ESMA / SASO Compliance Declaration", desc: "Self-declaration or third-party conformity assessment for UAE ESMA and Saudi SASO textile regulations." },
  { name: "Arabic / English Care Label Samples", desc: "Pre-production woven label samples with bilingual care symbols per ISO 3758 for GCC buyer approval." },
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

      <PageHero
        subtitle={c.hero.subtitle}
        title={c.hero.title}
        description={c.hero.description}
      />

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
                <tr
                  key={`${row.country}-${row.port}`}
                  className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}
                >
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
                <tr
                  key={row.hs}
                  className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}
                >
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
