import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import PageHeroArt from "@/components/vedant/PageHeroArt";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";
import { Shield, Leaf, Recycle, Award, CheckCircle, Globe, FileCheck, Scale } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { certificationsContent } from "@/data/translations/certifications";

// Non-translatable practice data: icon, name, responsibility
const CERT_DATA = [
  { icon: Leaf,        name: "Fabric Inspection",             auditor: "In-house Textile Lab" },
  { icon: Shield,      name: "Product Safety Awareness",       auditor: "In-house QC Team" },
  { icon: Recycle,     name: "Sustainable Fabric Sourcing",    auditor: "In-house Sourcing Team" },
  { icon: Award,       name: "Quality Management",             auditor: "In-house QC Team" },
  { icon: CheckCircle, name: "Chemical Safety Awareness",      auditor: "In-house QC Team" },
  { icon: Globe,       name: "Fair Labour Practices",          auditor: "Management" },
  { icon: FileCheck,   name: "Responsible Waste Handling",     auditor: "In-house Team" },
  { icon: Scale,       name: "Export & Customs Documentation", auditor: "In-house Export Team" },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  void lang;
  return {
    title: "Compliance & Quality Practices",
    description: "We're transparent about where we stand: no third-party certifications yet, but real in-house quality checks, sustainable fabric sourcing, and compliance practices at our Mumbai facility.",
    alternates: buildHreflangAlternates("/certifications"),
  };
}

const CertificationsPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const c = getContent(certificationsContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="Compliance & Quality Practices" description="In-house quality checks, sustainable fabric sourcing, and compliance practices at our Mumbai facility." url="/certifications" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Certifications", url: "/certifications" }]} />
      <PageHeroArt image="/images/site-files/new-cotton-lawns-the-list-group.jpg" opacity={0.15} blur={1}>
        <PageHero
          subtitle={c.hero.subtitle}
          title={c.hero.title}
          description={c.hero.description}
          transparent
        />
      </PageHeroArt>

      <ContentBlock subtitle={c.section.subtitle} title={c.section.title}>
        <div className="space-y-6">
          {CERT_DATA.map(({ icon: Icon, name, auditor }, i) => {
            const t = c.certs[i];
            return (
              <div key={name} className="border border-border rounded p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-olive" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-medium text-foreground">{name}</h3>
                      <Badge className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">{c.activeBadge}</Badge>
                    </div>
                    <p className="text-body text-muted-foreground">{t.scope}</p>
                    <p className="text-body-sm text-muted-foreground">{t.details}</p>
                    <div className="flex flex-wrap gap-6 pt-2 text-caption">
                      <span>{c.validityLabel} {t.validity}</span>
                      <span>{c.auditorLabel} {auditor}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      <CTASection
        title={c.cta.title}
        description={c.cta.description}
        buttonText={c.cta.buttonText}
      />
    </div>
  );
};

export default CertificationsPage;
