import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Leaf, Droplets, Sun, Recycle, TreePine, Heart, FileCheck, Award } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Badge } from "@/components/ui/badge";
import { getContent } from "@/data/translations/page-content";
import { sustainabilityContent } from "@/data/translations/sustainability";

// Icons paired by index with pillars.items (6 items)
const PILLAR_ICONS = [Leaf, Droplets, Sun, Recycle, TreePine, Heart];

// Non-translatable metric numbers (labels come from translations)
const METRIC_NUMS = ["80%", "40%", "35%", "0", "65%", "100%"];

// Non-translatable goals data: target year + statusKey for colour logic
const GOALS_DATA = [
  { target: "2026", statusKey: "onTrack" },
  { target: "2027", statusKey: "inProgress" },
  { target: "2027", statusKey: "inProgress" },
  { target: "2028", statusKey: "planning" },
  { target: "2028", statusKey: "planning" },
  { target: "2030", statusKey: "committed" },
];

// Non-translatable cert static data: name (cert code) + number
const CERT_STATIC = [
  { name: "GOTS 6.0",              number: "CU 1234567" },
  { name: "OEKO-TEX Standard 100", number: "SH012 345678" },
  { name: "GRS 4.0",               number: "CU 7654321" },
  { name: "SEDEX / SMETA",         number: "ZC12345678" },
  { name: "ISO 14001:2015",        number: "EMS-2023-IN" },
];

const statusColor = (statusKey: string) => {
  if (statusKey === "onTrack")    return "bg-olive/20 text-olive";
  if (statusKey === "inProgress") return "bg-gold/20 text-gold";
  return "bg-muted text-muted-foreground";
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Sustainable Garment Manufacturing India | Vedant",
    description: "GOTS, OEKO-TEX & GRS certified sustainable garment manufacturing India. Solar energy, zero liquid discharge. Exporting to UAE, Saudi Arabia & Russia.",
    alternates: buildHreflangAlternates("/sustainability"),
  };
}

const SustainabilityPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const c = getContent(sustainabilityContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="Sustainability Commitment" description="Sustainable fashion manufacturing with verified certifications and transparent reporting." url="/sustainability" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Sustainability", url: "/sustainability" }]} />
      <PageHero
        subtitle={c.hero.subtitle}
        title={c.hero.title}
        description={c.hero.description}
      />

      {/* Pillars */}
      <ContentBlock subtitle={c.pillars.subtitle} title={c.pillars.title}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.pillars.items.map(({ title, desc }, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <div key={title} className="bg-card border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
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

      {/* Metrics */}
      <ContentBlock subtitle={c.metrics.subtitle} title={c.metrics.title} bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {c.metrics.items.map(({ label }, i) => (
            <div key={label}>
              <p className="font-display text-4xl font-semibold">{METRIC_NUMS[i]}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Certifications */}
      <ContentBlock subtitle={c.certSection.subtitle} title={c.certSection.title}>
        <div className="space-y-4">
          {c.certSection.certs.map(({ body, scope }, i) => {
            const cs = CERT_STATIC[i];
            return (
              <div key={cs.name} className="border border-border rounded p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:w-56 shrink-0">
                  <Award className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="font-display font-medium text-foreground">{cs.name}</p>
                    <p className="text-caption">{body}</p>
                  </div>
                </div>
                <p className="text-body-sm text-muted-foreground flex-1">{scope}</p>
                <Badge variant="outline" className="text-[10px] w-fit">{cs.number}</Badge>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      {/* Roadmap */}
      <ContentBlock subtitle={c.roadmap.subtitle} title={c.roadmap.title} bg="cream">
        <div className="max-w-3xl mx-auto space-y-4">
          {c.roadmap.items.map(({ goal }, i) => {
            const g = GOALS_DATA[i];
            return (
              <div key={i} className="flex gap-6 items-start bg-card border border-border rounded p-6">
                <span className="font-display text-2xl font-semibold text-gold shrink-0 w-14">{g.target}</span>
                <p className="text-body text-muted-foreground flex-1">{goal}</p>
                <Badge className={`${statusColor(g.statusKey)} border-0 text-[10px] uppercase tracking-wider shrink-0`}>
                  {c.statusLabels[g.statusKey as keyof typeof c.statusLabels]}
                </Badge>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      {/* What Buyers Receive */}
      <ContentBlock subtitle={c.docs.subtitle} title={c.docs.title}>
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <FileCheck className="w-5 h-5 text-olive" />
            <p className="font-display text-lg font-medium text-foreground">{c.docs.heading}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {c.docs.items.map((doc) => (
              <div key={doc} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                <span className="text-body-sm text-muted-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      <CTASection
        variant="dark"
        title={c.cta.title}
        description={c.cta.description}
        buttonText={c.cta.buttonText}
      />
    </div>
  );
};

export default SustainabilityPage;
