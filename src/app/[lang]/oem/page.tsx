import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Layers, Scissors, Lightbulb, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "OEM Garment Production",
    description: "OEM garment manufacturing — FOB, CMT, and ODM services. Full-package production for European fashion brands.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/oem`, ...buildHreflangAlternates("/oem") },
  };
}

const services = [
  {
    icon: Layers,
    title: "Full-Package Production (FOB)",
    desc: "We handle everything — fabric sourcing, trims procurement, production, QC, and packing. You receive ready-to-sell garments at your warehouse. Ideal for brands without a sourcing office in India.",
    features: [
      "Fabric sourcing from GOTS / OEKO-TEX certified mills",
      "All trims, labels, and accessories included",
      "In-house QC at every stage — AQL 2.5",
      "EU-compliant labelling and documentation",
      "FOB / CIF / DDP delivery options",
      "GOTS Transaction Certificate per shipment",
    ],
  },
  {
    icon: Scissors,
    title: "CMT (Cut-Make-Trim)",
    desc: "You supply the fabric and trims, we handle cutting, stitching, finishing, and packing. Ideal for brands with established fabric suppliers or in-house design teams.",
    features: [
      "Precision CNC cutting — Lectra Vector iX",
      "12 stitching lines, 600+ machines",
      "Finishing, pressing, and packing to your spec",
      "Buyer QC team welcome on-site",
      "Flexible capacity allocation — 2,000 to 50,000 pcs",
      "Weekly progress reports with photos",
    ],
  },
  {
    icon: Lightbulb,
    title: "Fabric-to-Garment Development (ODM)",
    desc: "Start from a concept sketch, mood board, or reference garment. We develop patterns, source fabrics, create samples, and move to bulk production — full design-to-delivery.",
    features: [
      "CAD pattern development (Gerber AccuMark)",
      "2 rounds of sampling included in quote",
      "Lab dips and strike-offs within 5 working days",
      "Fit sessions with graded size set (3–5 sizes)",
      "Production-ready tech pack delivery",
      "Seasonal trend input from our design team",
    ],
  },
];

const orderProcess = [
  { step: "Inquiry & Costing", desc: "Send us your tech pack or design brief. We respond with itemised costing within 48 hours. Volume-based pricing tiers available." },
  { step: "Sample Development", desc: "Development sample in 7–10 days. PP sample with branding in 5–7 days. Courier shipped to your office at our cost." },
  { step: "Order Confirmation", desc: "Proforma invoice issued. 30% advance, 70% against BL/copy. LC at sight accepted for orders above €20,000." },
  { step: "Production", desc: "45-day standard lead time. 30-day express for repeat styles. Real-time updates via WhatsApp/email with in-line photos." },
  { step: "Inspection & Shipment", desc: "AQL 2.5 final inspection. Third-party audit coordinated on request. Full documentation pack with every shipment." },
];

const comparisonData = [
  { feature: "Minimum Order", fob: "500 pcs/style/colour", cmt: "300 pcs/style/colour", odm: "500 pcs/style/colour" },
  { feature: "Lead Time", fob: "45 days", cmt: "30 days", odm: "60 days" },
  { feature: "Fabric Sourcing", fob: "Included", cmt: "Buyer supplies", odm: "Included" },
  { feature: "Pattern Development", fob: "Buyer provides", cmt: "Buyer provides", odm: "Included" },
  { feature: "Sampling", fob: "1 round included", cmt: "1 round included", odm: "2 rounds included" },
  { feature: "Certifications", fob: "GOTS TC included", cmt: "Upon request", odm: "GOTS TC included" },
  { feature: "Pricing Model", fob: "FOB per piece", cmt: "CMT per piece", odm: "FOB per piece" },
];

const OEMPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <ServiceSchema name="OEM Garment Production" description="Full-package, CMT, and ODM garment manufacturing services for European brands." url="/oem" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "OEM Production", url: "/oem" }]} />
      <PageHero
        subtitle="OEM Production"
        title="Contract Garment Manufacturing"
        description="Flexible OEM and ODM manufacturing models — from full-package FOB to CMT-only services. We adapt to your production model with transparent costing, reliable delivery, and full certification compliance."
      />

      {/* Services */}
      <ContentBlock subtitle="Services" title="OEM Manufacturing Models">
        <div className="space-y-8">
          {services.map((s) => (
            <div key={s.title} className="border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <s.icon className="w-5 h-5 text-olive" />
                <h3 className="font-display text-xl font-medium text-foreground">{s.title}</h3>
              </div>
              <p className="text-body text-muted-foreground">{s.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span className="text-body-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Comparison */}
      <ContentBlock subtitle="Compare" title="Service Model Comparison" bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">Feature</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">FOB (Full Package)</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">CMT</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">ODM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
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
      <ContentBlock subtitle="How It Works" title="Order Process">
        <div className="max-w-3xl mx-auto space-y-0">
          {orderProcess.map((p, i) => (
            <div key={p.step} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display font-semibold text-gold text-sm shrink-0">
                  {i + 1}
                </div>
                {i < orderProcess.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
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
      <ContentBlock subtitle="Capacity" title="Production Numbers" bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50,000", label: "Pieces / Month" },
            { num: "12", label: "Production Lines" },
            { num: "600+", label: "Machines" },
            { num: "48hr", label: "Sample Turnaround" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{s.num}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Discuss Your OEM Requirements" description="Send us your tech pack or design brief. We'll respond with a detailed costing and production timeline within 48 hours." buttonText="Get OEM Quote" />
    </div>
  );
};

export default OEMPage;
