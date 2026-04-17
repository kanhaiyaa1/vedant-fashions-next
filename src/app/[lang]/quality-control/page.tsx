import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, ShieldCheck, AlertTriangle } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { qualityControlContent } from "@/data/translations/quality-control";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getContent(qualityControlContent, lang);
  return {
    title: c.hero.title,
    description: c.hero.description,
    alternates: buildHreflangAlternates("/quality-control"),
  };
}

// Non-translatable: test method codes, equipment models, tolerances
const TEST_DATA = [
  { method: "ISO 6330 / AATCC 135",  equipment: "Wascator FOM 71",     tolerance: "±3% (woven) / ±5% (knit)" },
  { method: "ISO 105-C06 A1S",       equipment: "Gyrowash 815",         tolerance: "Grade 4 minimum" },
  { method: "ISO 105-X12",           equipment: "Crockmeter",            tolerance: "Dry 4, Wet 3 minimum" },
  { method: "ISO 105-B02",           equipment: "Xenon Arc (Atlas)",     tolerance: "Grade 4 minimum" },
  { method: "ISO 13934-1 (strip)",   equipment: "Instron 5969",          tolerance: "≥200N warp, ≥150N weft" },
  { method: "ISO 13937-2 (Elmendorf)",equipment: "Elmendorf Tester",    tolerance: "≥15N" },
  { method: "ISO 12945-2 (Martindale)",equipment: "Martindale Tester",  tolerance: "Grade 3–4 at 2000 cycles" },
  { method: "ISO 3801",              equipment: "GSM Cutter + Scale",    tolerance: "±5% of declared" },
  { method: "CIE LAB ΔE measurement",equipment: "Datacolor 800",        tolerance: "ΔE < 1.0 (CMC 2:1)" },
  { method: "ISO 3071",              equipment: "Digital pH Meter",      tolerance: "4.0–7.5 (skin contact)" },
  { method: "ISO 14184-1",           equipment: "Spectrophotometer",     tolerance: "≤75 ppm (skin contact)" },
  { method: "EU Dir. 2002/61/EC",    equipment: "GC-MS",                 tolerance: "< 30 ppm each amine" },
];

const DEFECT_COLOURS = ["text-destructive", "text-gold", "text-muted-foreground"] as const;

const BUYER_ICONS = [ShieldCheck, ShieldCheck, ShieldCheck];

export default async function QualityControlPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(qualityControlContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title={c.hero.title} description={c.hero.description} url="/quality-control" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: c.hero.subtitle, url: "/quality-control" }]} />
      <PageHero subtitle={c.hero.subtitle} title={c.hero.title} description={c.hero.description} />

      {/* QC Process */}
      <ContentBlock subtitle={c.process.subtitle} title={c.process.title}>
        <div className="space-y-8">
          {c.process.stages.map((s, i) => (
            <div key={i} className="border border-border rounded p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center font-display font-semibold text-gold text-sm">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{s.stage}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {s.checks.map((check, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span className="text-body-sm text-muted-foreground">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Defect Classification */}
      <ContentBlock subtitle={c.defects.subtitle} title={c.defects.title} bg="cream">
        <div className="max-w-2xl mx-auto space-y-4">
          {c.defects.items.map((d, i) => (
            <div key={i} className="bg-card border border-border rounded p-6 flex gap-4 items-start">
              <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${DEFECT_COLOURS[i]}`} />
              <div>
                <h4 className="font-display font-medium text-foreground">{d.level}</h4>
                <p className="text-body-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
            </div>
          ))}
          <p className="text-caption text-center pt-2">{c.defects.footnote}</p>
        </div>
      </ContentBlock>

      {/* Lab */}
      <ContentBlock subtitle={c.lab.subtitle} title={c.lab.title}>
        <div className="border border-border rounded overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-secondary">
                  {c.lab.headers.map((h) => (
                    <th key={h} className="text-left p-4 font-display font-semibold text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEST_DATA.map((t, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{c.lab.testNames[i]}</td>
                    <td className="p-4 text-muted-foreground">{t.method}</td>
                    <td className="p-4 text-muted-foreground hidden md:table-cell">{t.equipment}</td>
                    <td className="p-4 text-muted-foreground hidden lg:table-cell">{t.tolerance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-caption text-center mt-4">{c.lab.footnote}</p>
      </ContentBlock>

      {/* Buyer QC */}
      <ContentBlock subtitle={c.buyers.subtitle} title={c.buyers.title} bg="dark">
        <div className="grid md:grid-cols-3 gap-6">
          {c.buyers.cards.map(({ title, desc }, i) => {
            const Icon = BUYER_ICONS[i];
            return (
              <div key={i} className="border border-primary-foreground/10 rounded p-6 space-y-3">
                <Icon className="w-5 h-5 text-primary-foreground/70" />
                <h3 className="font-display text-lg font-medium">{title}</h3>
                <p className="text-sm text-primary-foreground/70">{desc}</p>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title={c.cta.title} description={c.cta.description} buttonText={c.cta.buttonText} />
    </div>
  );
}
