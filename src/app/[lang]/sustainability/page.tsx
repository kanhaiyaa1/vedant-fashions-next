import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Leaf, Droplets, Sun, Recycle, TreePine, Heart, FileCheck, Award } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Sustainability",
    description: "Sustainable garment manufacturing — GOTS, OEKO-TEX, GRS certified. Solar energy, zero liquid discharge, organic materials, fair labour.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/sustainability`, ...buildHreflangAlternates("/sustainability") },
  };
}

const pillars = [
  { icon: Leaf, title: "Organic Fibres", desc: "80% of our production uses GOTS-certified organic cotton, Tencel™ Lyocell, and European flax linen. Full traceability from certified farms to finished garment. We're committed to eliminating conventional cotton by 2027." },
  { icon: Droplets, title: "Water Stewardship", desc: "Zero Liquid Discharge (ZLD) plant in our finishing unit since 2021. Rainwater harvesting across all facilities. 40% water reduction achieved since 2020 through closed-loop dyeing systems and waterless finishing technologies." },
  { icon: Sun, title: "Renewable Energy", desc: "800 kWp rooftop solar installation powers 35% of our operations. On track for 70% renewable energy by 2027. Carbon offset programme for remaining Scope 2 emissions through Gold Standard credits." },
  { icon: Recycle, title: "Circular Production", desc: "Fabric waste recycled into insulation material and industrial rags. Zero textile waste to landfill since 2022. GRS-certified recycled polyester from post-consumer PET bottles. Cardboard and poly packaging recycled." },
  { icon: TreePine, title: "Responsible Chemistry", desc: "All dyes REACH-compliant and AZO-free. OEKO-TEX Standard 100 certified chemicals only. ZDHC MRSL Level 2 conformance. FSC-certified packaging materials for all shipments." },
  { icon: Heart, title: "Social Impact", desc: "Living wages above local minimum across all facilities. Women constitute 65% of workforce. On-site childcare, health clinic, and skill development programmes. SEDEX/SMETA 4-pillar audited." },
];

const metrics = [
  { num: "80%", label: "Organic / Recycled Fibre Input" },
  { num: "40%", label: "Water Reduction Since 2020" },
  { num: "35%", label: "Solar-Powered Operations" },
  { num: "0", label: "Textile Waste to Landfill" },
  { num: "65%", label: "Women in Workforce" },
  { num: "100%", label: "REACH-Compliant Chemistry" },
];

const goals = [
  { target: "2026", goal: "100% organic cotton across all production lines", status: "On Track" },
  { target: "2027", goal: "70% renewable energy across all four facilities", status: "In Progress" },
  { target: "2027", goal: "Eliminate conventional cotton from supply chain", status: "In Progress" },
  { target: "2028", goal: "Science-Based Target validated — 50% emission reduction (Scope 1 & 2)", status: "Planning" },
  { target: "2028", goal: "ZDHC MRSL Level 3 conformance across wet processing", status: "Planning" },
  { target: "2030", goal: "Net-zero Scope 1 and 2 emissions", status: "Committed" },
];

const certs = [
  { name: "GOTS 6.0", body: "Global Organic Textile Standard", scope: "Full chain of custody — fibre to finished garment", number: "CU 1234567" },
  { name: "OEKO-TEX Standard 100", body: "Hohenstein Institute", scope: "Product Class I (baby) and II (skin contact)", number: "SH012 345678" },
  { name: "GRS 4.0", body: "Global Recycled Standard", scope: "Recycled polyester and regenerated cotton", number: "CU 7654321" },
  { name: "SEDEX / SMETA", body: "Supplier Ethical Data Exchange", scope: "4-pillar audit — labour, H&S, environment, business ethics", number: "ZC12345678" },
  { name: "ISO 14001:2015", body: "Environmental Management System", scope: "All manufacturing and finishing facilities", number: "EMS-2023-IN" },
];

const statusColor = (status: string) => {
  if (status === "On Track") return "bg-olive/20 text-olive";
  if (status === "In Progress") return "bg-gold/20 text-gold";
  return "bg-muted text-muted-foreground";
};

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="Sustainability Commitment" description="Sustainable fashion manufacturing with verified certifications and transparent reporting." url="/sustainability" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Sustainability", url: "/sustainability" }]} />
      <PageHero
        subtitle="Sustainability"
        title="Fashion That Respects the Planet"
        description="Sustainability isn't a marketing claim — it's embedded in every thread we weave, every garment we stitch, and every shipment we dispatch. Certified, audited, and transparently reported for our European partners."
      />

      {/* Pillars */}
      <ContentBlock subtitle="Our Approach" title="Six Pillars of Sustainable Manufacturing">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-olive" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
              <p className="text-body-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Metrics */}
      <ContentBlock subtitle="Impact" title="Measurable Progress" bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {metrics.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold">{s.num}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Certifications */}
      <ContentBlock subtitle="Certifications" title="Third-Party Verification">
        <div className="space-y-4">
          {certs.map((c) => (
            <div key={c.name} className="border border-border rounded p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-3 md:w-56 shrink-0">
                <Award className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <p className="font-display font-medium text-foreground">{c.name}</p>
                  <p className="text-caption">{c.body}</p>
                </div>
              </div>
              <p className="text-body-sm text-muted-foreground flex-1">{c.scope}</p>
              <Badge variant="outline" className="text-[10px] w-fit">{c.number}</Badge>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Roadmap */}
      <ContentBlock subtitle="Roadmap" title="Sustainability Targets" bg="cream">
        <div className="max-w-3xl mx-auto space-y-4">
          {goals.map((g, i) => (
            <div key={i} className="flex gap-6 items-start bg-card border border-border rounded p-6">
              <span className="font-display text-2xl font-semibold text-gold shrink-0 w-14">{g.target}</span>
              <p className="text-body text-muted-foreground flex-1">{g.goal}</p>
              <Badge className={`${statusColor(g.status)} border-0 text-[10px] uppercase tracking-wider shrink-0`}>{g.status}</Badge>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* What Buyers Receive */}
      <ContentBlock subtitle="For Buyers" title="Sustainability Documentation">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <FileCheck className="w-5 h-5 text-olive" />
            <p className="font-display text-lg font-medium text-foreground">Every order includes:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "GOTS Transaction Certificate per shipment",
              "OEKO-TEX test reports per fabric",
              "GRS certification for recycled materials",
              "Chemical compliance declarations (REACH, RSL)",
              "Carbon footprint estimate per order",
              "Social audit summary report",
              "Traceability documentation — farm to garment",
              "Annual sustainability impact report",
            ].map((doc) => (
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
        title="Need Sustainability Documentation?"
        description="We provide full chain-of-custody documentation, certification copies, and carbon footprint reports for every order. Compliant with EU Green Claims Directive requirements."
        buttonText="Request Documentation"
      />
    </div>
  );
};

export default SustainabilityPage;
