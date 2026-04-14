import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Lock, FileText, Palette } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Private Label Ladies Wear Manufacturing India",
    description: "Private label ladies woven wear manufacturing India — your brand, our production. GOTS certified. NDA protected. MOQ 300 pcs. FOB Mumbai.",
    alternates: buildHreflangAlternates("/private-label"),
  };
}

const process = [
  { step: "Brief & Concept", desc: "Share your brand guidelines, mood boards, and tech packs. We assign a dedicated merchandiser and QC officer to your account. NDA signed before any information exchange." },
  { step: "Fabric & Trim Sourcing", desc: "We source fabrics from our certified mill network and develop custom trims — woven labels, printed tags, buttons, zips. Lab dips and strike-offs for colour approval." },
  { step: "Pattern & Sampling", desc: "CAD pattern development with digital grading across your size range. 2 rounds of sampling included: development sample and pre-production sample with all branding." },
  { step: "Fit Approval", desc: "Size set produced across 3–5 sizes. Virtual or in-person fit sessions. Measurement chart with tolerance limits agreed before bulk production begins." },
  { step: "Bulk Production", desc: "Production with in-line QC checks every 500 pieces. Real-time progress photos and weekly status reports. AQL 2.5 final inspection per ISO 2859-1." },
  { step: "Packing & Delivery", desc: "Packed to your specifications — polybags, tissue wrap, hangtags, barcoding, carton marks. FOB/CIF/DDP to your European warehouse. Full documentation included." },
];

const included = [
  "Your brand woven labels and printed care labels",
  "Custom hangtags, swing tags, and price tickets",
  "Custom packaging design — tissue, polybags, boxes",
  "EU textile care labelling (Regulation 1007/2011)",
  "Country-specific size conversions (EU/UK/US)",
  "Barcode, EAN, and UPC generation",
  "Composition and country-of-origin labelling",
  "GOTS / OEKO-TEX chain of custody on your labels",
  "Custom colourways and exclusive prints",
  "Embroidery, screen print, or digital print branding",
];

const advantages = [
  { icon: Lock, title: "Complete Confidentiality", desc: "NDA signed before project commencement. Dedicated production lines — no sharing with other brands. All designs, patterns, and tech packs remain your IP." },
  { icon: FileText, title: "EU-Compliant Labelling", desc: "We handle all labelling requirements per EU Regulation 1007/2011 — fibre composition, care symbols (ISO 3758), country of origin, and importer details in your required languages." },
  { icon: Palette, title: "Full Creative Control", desc: "From fabric selection to final packaging, every element is produced to your brand specifications. No Vedant branding appears anywhere on the product." },
];

const PrivateLabelPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <ServiceSchema name="Private Label Manufacturing" description="End-to-end private label garment manufacturing for European fashion brands." url="/private-label" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Private Label", url: "/private-label" }]} />
      <PageHero
        subtitle="Private Label"
        title="Your Brand, Our Manufacturing"
        description="Full private-label manufacturing from concept to delivery. We produce under your brand with complete confidentiality, EU-compliant labelling, and certification traceability. Serving 200+ European brands since 1998."
      />

      {/* Advantages */}
      <ContentBlock subtitle="Why Vedant" title="Private Label Advantages">
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, desc }) => (
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

      {/* Process */}
      <ContentBlock subtitle="Process" title="How Private Label Works" bg="cream">
        <div className="max-w-3xl mx-auto space-y-0">
          {process.map((p, i) => (
            <div key={p.step} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display font-semibold text-gold text-sm shrink-0">
                  {i + 1}
                </div>
                {i < process.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
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
      <ContentBlock subtitle="What's Included" title="Private Label Services">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <span className="text-body-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* Pricing */}
      <ContentBlock subtitle="Pricing" title="Transparent Costing" bg="cream">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-4">
          <p className="text-body text-muted-foreground">
            Our pricing is fully transparent — no hidden costs. Every quote includes an itemised cost breakdown:
          </p>
          <ul className="space-y-2 text-body-sm text-muted-foreground">
            <li>• Fabric cost per metre (including wastage allowance and testing)</li>
            <li>• CMT (Cut-Make-Trim) cost per garment</li>
            <li>• Trims, labels, and packaging — itemised</li>
            <li>• Testing and certification costs (GOTS TC, lab reports)</li>
            <li>• FOB / CIF / DDP pricing options with freight estimates</li>
            <li>• Sample development costs (credited against first bulk order)</li>
          </ul>
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-caption">
              <strong>Typical price range:</strong> €4.50–€18.00 FOB per unit depending on fabric, construction complexity, and embellishments. 
              <strong> MOQ:</strong> 300 pieces per style per colour for first order; 200 pieces for repeat.
            </p>
          </div>
        </div>
      </ContentBlock>

      {/* Key Numbers */}
      <ContentBlock subtitle="At a Glance" title="Private Label Track Record" bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "200+", label: "Brands Served" },
            { num: "25+", label: "Countries Exported To" },
            { num: "98.5%", label: "On-Time Delivery Rate" },
            { num: "< 1%", label: "Defect Rate (Final Audit)" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{s.num}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Start Your Private Label Programme" description="Send us your brand brief and we'll provide a comprehensive proposal within 48 hours. NDA available on request." buttonText="Get Started" />
    </div>
  );
};

export default PrivateLabelPage;
