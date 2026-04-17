import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Layers, Scissors, Lightbulb } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { oemContent } from "@/data/translations/oem";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getContent(oemContent, lang);
  return {
    title: c.hero.title,
    description: c.hero.description,
    alternates: buildHreflangAlternates("/oem"),
  };
}

// Non-translatable: service icons and capacity numbers
const SERVICE_ICONS = [Layers, Scissors, Lightbulb];
const CAPACITY_NUMS = ["50,000", "12", "600+", "48hr"];

export default async function OEMPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(oemContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <ServiceSchema name={c.hero.title} description={c.hero.description} url="/oem" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: c.hero.subtitle, url: "/oem" }]} />
      <PageHero subtitle={c.hero.subtitle} title={c.hero.title} description={c.hero.description} />

      {/* Services */}
      <ContentBlock subtitle={c.services.subtitle} title={c.services.title}>
        <div className="space-y-8">
          {c.services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div key={i} className="border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-olive" />
                  <h3 className="font-display text-xl font-medium text-foreground">{s.title}</h3>
                </div>
                <p className="text-body text-muted-foreground">{s.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                      <span className="text-body-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      {/* Comparison */}
      <ContentBlock subtitle={c.comparison.subtitle} title={c.comparison.title} bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  {c.comparison.headers.map((h) => (
                    <th key={h} className="text-left p-4 font-display font-semibold text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.fob}</td>
                    <td className="p-4 text-muted-foreground">{row.cmt}</td>
                    <td className="p-4 text-muted-foreground">{row.odm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentBlock>

      {/* Order Process */}
      <ContentBlock subtitle={c.process.subtitle} title={c.process.title}>
        <div className="max-w-3xl mx-auto space-y-0">
          {c.process.steps.map((p, i) => (
            <div key={i} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display font-semibold text-gold text-sm shrink-0">
                  {i + 1}
                </div>
                {i < c.process.steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">{p.step}</h3>
                <p className="text-body text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Capacity */}
      <ContentBlock subtitle={c.capacity.subtitle} title={c.capacity.title} bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {CAPACITY_NUMS.map((num, i) => (
            <div key={i}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{num}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{c.capacity.labels[i]}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title={c.cta.title} description={c.cta.description} buttonText={c.cta.buttonText} />
    </div>
  );
}
