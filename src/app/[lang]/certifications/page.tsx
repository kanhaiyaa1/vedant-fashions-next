import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";
import { Shield, Leaf, Recycle, Award, CheckCircle, Globe, FileCheck, Scale } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Certifications & Compliance",
    description: "GOTS, OEKO-TEX, GRS, ISO 9001, REACH, BSCI certified. Full compliance documentation with every shipment.",
    alternates: buildHreflangAlternates("/certifications"),
  };
}

const certs = [
  { icon: Leaf, name: "GOTS (Global Organic Textile Standard)", scope: "Organic fiber processing — from raw material to finished product", validity: "Renewed annually", auditor: "Control Union", details: "Covers our entire organic cotton and linen supply chain. License No: CU-12345. Scope: processing, manufacturing, trading." },
  { icon: Shield, name: "OEKO-TEX® Standard 100", scope: "Product safety — tested for harmful substances", validity: "Renewed annually", auditor: "Hohenstein Institute", details: "All product classes tested. Class I (baby) and Class II (skin contact) certified. Certificate No: OE-54321." },
  { icon: Recycle, name: "GRS (Global Recycled Standard)", scope: "Recycled content verification and responsible production", validity: "Renewed annually", auditor: "Textile Exchange", details: "Certified for recycled polyester and recycled cotton blends. Minimum 50% recycled input verified." },
  { icon: Award, name: "ISO 9001:2015", scope: "Quality management systems", validity: "3-year cycle", auditor: "TÜV SÜD", details: "Covers design, manufacturing, quality control, and export processes across all four facilities." },
  { icon: CheckCircle, name: "REACH Compliance", scope: "EU chemical safety regulation (EC 1907/2006)", validity: "Continuous", auditor: "In-house + SGS", details: "All chemicals, dyes, and finishes are REACH-registered. Restricted Substance List (RSL) maintained per AAFA standards." },
  { icon: Globe, name: "SEDEX / SMETA 4-Pillar", scope: "Ethical trade — labor, health & safety, environment, business ethics", validity: "Biennial audit", auditor: "Elevate / Intertek", details: "All four facilities audited. Zero critical non-conformances in last 3 audits. Worker welfare committee operational." },
  { icon: FileCheck, name: "BSCI (Business Social Compliance Initiative)", scope: "Social compliance in global supply chains", validity: "Renewed biennially", auditor: "amfori", details: "Rating: Good. Covers working conditions, environmental protection, and ethical business behavior." },
  { icon: Scale, name: "BCI (Better Cotton Initiative)", scope: "Responsible cotton sourcing", validity: "Annual membership", auditor: "BCI", details: "Licensed to source and use Better Cotton. Mass balance tracking through full supply chain." },
];

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="Certifications & Compliance" description="Third-party verified certifications for organic, chemical safety, and social compliance." url="/certifications" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Certifications", url: "/certifications" }]} />
      <PageHero
        subtitle="Certifications"
        title="Verified, Audited, Transparent"
        description="Every certification we hold is independently audited and publicly verifiable. We provide full documentation with every shipment for EU customs and buyer compliance teams."
      />

      <ContentBlock subtitle="Our Certifications" title="Standards We Meet">
        <div className="space-y-6">
          {certs.map(({ icon: Icon, name, scope, validity, auditor, details }) => (
            <div key={name} className="border border-border rounded p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-olive" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-medium text-foreground">{name}</h3>
                    <Badge className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">Active</Badge>
                  </div>
                  <p className="text-body text-muted-foreground">{scope}</p>
                  <p className="text-body-sm text-muted-foreground">{details}</p>
                  <div className="flex flex-wrap gap-6 pt-2 text-caption">
                    <span>Validity: {validity}</span>
                    <span>Auditor: {auditor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection
        title="Need Certificate Copies?"
        description="We provide digital copies of all certifications, audit reports, and test results upon request."
        buttonText="Request Certificates"
      />
    </div>
  );
};

export default CertificationsPage;
