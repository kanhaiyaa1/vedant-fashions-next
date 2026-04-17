import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Lock, FileText, Palette } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { privateLabelContent } from "@/data/translations/private-label";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getContent(privateLabelContent, lang);
  return {
    title: c.hero.title,
    description: c.hero.description,
    alternates: buildHreflangAlternates("/private-label"),
  };
}

// Non-translatable: icons and stat numbers
const ADVANTAGE_ICONS = [Lock, FileText, Palette];
const STAT_NUMS = ["200+", "25+", "98.5%", "< 1%"];

export default async function PrivateLabelPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(privateLabelContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <ServiceSchema name={c.hero.title} description={c.hero.description} url="/private-label" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: c.hero.subtitle, url: "/private-label" }]} />
      <PageHero subtitle={c.hero.subtitle} title={c.hero.title} description={c.hero.description} />

      {/* Advantages */}
      <ContentBlock subtitle={c.advantages.subtitle} title={c.advantages.title}>
        <div className="grid md:grid-cols-3 gap-6">
          {c.advantages.items.map(({ title, desc }, i) => {
            const Icon = ADVANTAGE_ICONS[i];
            return (
              <div key={i} className="bg-card border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-olive" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                <p className="text-body-sm text-muted-foreground">{desc}</p>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      {/* Process */}
      <ContentBlock subtitle={c.process.subtitle} title={c.process.title} bg="cream">
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

      {/* What's Included */}
      <ContentBlock subtitle={c.included.subtitle} title={c.included.title}>
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {c.included.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <span className="text-body-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* Pricing */}
      <ContentBlock subtitle={c.pricing.subtitle} title={c.pricing.title} bg="cream">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-4">
          <p className="text-body text-muted-foreground">{c.pricing.intro}</p>
          <ul className="space-y-2 text-body-sm text-muted-foreground">
            {c.pricing.items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-caption">{c.pricing.note}</p>
          </div>
        </div>
      </ContentBlock>

      {/* Key Numbers */}
      <ContentBlock subtitle={c.stats.subtitle} title={c.stats.title} bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STAT_NUMS.map((num, i) => (
            <div key={i}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{num}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{c.stats.labels[i]}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title={c.cta.title} description={c.cta.description} buttonText={c.cta.buttonText} />
    </div>
  );
}
