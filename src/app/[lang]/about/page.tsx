import type { Metadata } from "next";
import Image from "next/image";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Shield, Users, Globe, Award, Factory, Truck } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { aboutContent } from "@/data/translations/about";

// Icons paired by index with values.items
const VALUE_ICONS = [Shield, Users, Globe, Award, Factory, Truck];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "About Vedant Fashion",
    description: "Ladies woven wear manufacturer India — exporting to UAE, Saudi Arabia, Russia & global markets since 2015. GOTS & OEKO-TEX certified. MOQ 300 pcs.",
    alternates: buildHreflangAlternates("/about"),
  };
}

const AboutPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const c = getContent(aboutContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="About Vedant Fashion" description="Mumbai-based B2B ladies woven wear manufacturer exporting to UAE, Saudi Arabia, Qatar, Kuwait, Russia and global markets since 2015." url="/about" type="AboutPage" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
      <PageHero
        subtitle={c.hero.subtitle}
        title={c.hero.title}
        description={c.hero.description}
      />

      {/* Mission */}
      <ContentBlock subtitle={c.mission.subtitle} title={c.mission.title}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground">{c.mission.paragraph1}</p>
            <p className="text-body text-muted-foreground">{c.mission.paragraph2}</p>
            <p className="text-body text-muted-foreground">{c.mission.paragraph3}</p>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/docs/shravan-diwan.png"
              alt="Shravan Diwan, Director — Vedant Fashion"
              width={600}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-semibold text-lg">Shravan Diwan</p>
              <p className="text-white/80 text-sm">Director, Vedant Fashion</p>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Values */}
      <ContentBlock subtitle={c.values.subtitle} title={c.values.title} bg="cream">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.values.items.map(({ title, desc }, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <div key={title} className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-olive" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                <p className="text-body-sm text-muted-foreground">{desc}</p>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      {/* Timeline */}
      <ContentBlock subtitle={c.milestones.subtitle} title={c.milestones.title}>
        <div className="max-w-2xl mx-auto">
          {c.milestones.items.map((m, i) => (
            <div key={m.year} className="flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
                {i < c.milestones.items.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-2">
                <p className="font-display text-lg font-semibold text-foreground">{m.year}</p>
                <p className="text-body text-muted-foreground">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Team stats */}
      <ContentBlock subtitle={c.stats.subtitle} title={c.stats.title} bg="cream">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {c.stats.items.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold text-charcoal">{s.num}</p>
              <p className="text-caption mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" />
    </div>
  );
};

export default AboutPage;
