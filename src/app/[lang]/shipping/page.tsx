import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Ship, Truck, Plane, FileCheck, Globe, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Shipping & Logistics",
    description: "Global shipping from India to Europe — sea freight, air freight, and DDP door-to-door. FOB, CIF, and DDP Incoterms. Full export documentation included.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/shipping`, ...buildHreflangAlternates("/shipping") },
  };
}

const methods = [
  { icon: Ship, title: "Sea Freight (FCL / LCL)", desc: "Most cost-effective for bulk orders. We handle consolidation for LCL shipments. Full container load pricing available for orders above 5,000 pieces. Container tracking provided.", lead: "18–22 days", best: "Bulk orders > 2,000 pcs" },
  { icon: Plane, title: "Air Freight", desc: "For urgent orders, samples, and lightweight high-value shipments. Direct flights from Ahmedabad to major European hubs. Cost-effective up to 500 kg.", lead: "3–5 days", best: "Urgent & sample shipments" },
  { icon: Truck, title: "Door-to-Door (DDP)", desc: "Full-service delivery to your warehouse. We handle customs clearance, import duties, VAT, and last-mile delivery through our European logistics partners in Germany, Netherlands, and UK.", lead: "22–28 days", best: "Brands without import setup" },
];

const docs = [
  "Commercial Invoice (in buyer's language on request)",
  "Packing List with carton-wise breakdown",
  "Bill of Lading / Airway Bill",
  "Certificate of Origin (for GSP preferential tariffs)",
  "EUR.1 Movement Certificate (EU preferential duty)",
  "GOTS Transaction Certificate per shipment",
  "OEKO-TEX / GRS certificate copies",
  "Fabric test reports (shrinkage, colorfastness, composition)",
  "AQL Final Inspection Report with photos",
  "Phytosanitary certificate (where applicable)",
];

const ports = {
  origin: [
    { name: "Nhava Sheva (JNPT)", location: "Mumbai", note: "Primary port for FCL — excellent connectivity" },
    { name: "Mundra Port", location: "Gujarat", note: "Large-volume shipments, closest to our factories" },
    { name: "Ahmedabad Airport", location: "Gujarat", note: "Air freight and sample shipments" },
  ],
  destination: [
    { name: "Hamburg", region: "DACH", note: "Our EU logistics hub — weekly departures" },
    { name: "Rotterdam", region: "Benelux", note: "Northern Europe, excellent rail connections" },
    { name: "Antwerp", region: "Belgium / France", note: "Western Europe distribution" },
    { name: "Genoa / La Spezia", region: "Italy", note: "Mediterranean market" },
    { name: "Barcelona", region: "Iberian Peninsula", note: "Spain and Portugal" },
    { name: "Gdańsk", region: "Poland", note: "Eastern Europe gateway" },
    { name: "St. Petersburg", region: "Russia / CIS", note: "Russian and CIS markets" },
  ],
};

const incoterms = [
  { term: "FOB", desc: "Free on Board — we deliver to port, risk transfers at ship's rail. Most common for experienced importers.", included: "Production, QC, inland transport, port charges, customs clearance (India)" },
  { term: "CIF", desc: "Cost, Insurance, Freight — we pay freight and insurance to your destination port. Risk transfers at ship's rail.", included: "Everything in FOB + ocean freight + cargo insurance" },
  { term: "DDP", desc: "Delivered Duty Paid — we handle everything including import duties and VAT. Garments arrive at your warehouse.", included: "Everything in CIF + customs clearance (EU) + import duties + last-mile delivery" },
];

const compliance = [
  { title: "HS Code Classification", desc: "We classify every garment with the correct 8-digit HS code per Combined Nomenclature (CN). Typical codes: 6206 (women's blouses), 6204 (dresses), 6205 (men's shirts)." },
  { title: "GSP Tariff Benefits", desc: "India-origin garments qualify for Generalised Scheme of Preferences (GSP) reduced duty rates in several markets. Certificate of Origin issued per shipment." },
  { title: "EU Import Regulations", desc: "All shipments comply with EU textile labelling (Regulation 1007/2011), REACH chemical safety, and product safety directives. Documentation in English, German, or French." },
  { title: "Customs Documentation", desc: "Complete set of customs-clearance documents provided digitally before shipment arrival. Proforma invoice available 15 days before dispatch for pre-clearance." },
];

const ShippingLogisticsPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Shipping & Logistics"
        title="Reliable Global Delivery"
        description="From our factories in Gujarat to your warehouse in Europe — seamless logistics with full documentation for EU customs clearance. FOB, CIF, and DDP Incoterms available. 98.5% on-time delivery rate."
      />

      {/* Shipping Methods */}
      <ContentBlock subtitle="Shipping Methods" title="How We Deliver">
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map(({ icon: Icon, title, desc, lead, best }) => (
            <div key={title} className="border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-olive" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
              <p className="text-body-sm text-muted-foreground">{desc}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="outline" className="text-[10px]">Transit: {lead}</Badge>
                <Badge variant="outline" className="text-[10px]">Best for: {best}</Badge>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Incoterms */}
      <ContentBlock subtitle="Incoterms" title="Trade Terms Explained" bg="cream">
        <div className="space-y-4 max-w-3xl mx-auto">
          {incoterms.map((t) => (
            <div key={t.term} className="bg-card border border-border rounded p-6 space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-semibold text-gold">{t.term}</span>
                <span className="text-body-sm text-muted-foreground">— {t.desc}</span>
              </div>
              <p className="text-caption"><strong>Included:</strong> {t.included}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Ports */}
      <ContentBlock subtitle="Routes" title="Shipping Network">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium text-foreground flex items-center gap-2">
              <Globe className="w-4 h-4 text-olive" /> Origin Ports
            </h3>
            {ports.origin.map((p) => (
              <div key={p.name} className="border border-border rounded p-4 space-y-1">
                <p className="font-medium text-foreground">{p.name} <span className="text-caption font-normal">— {p.location}</span></p>
                <p className="text-body-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium text-foreground flex items-center gap-2">
              <Globe className="w-4 h-4 text-olive" /> Destination Ports
            </h3>
            {ports.destination.map((p) => (
              <div key={p.name} className="border border-border rounded p-4 space-y-1">
                <p className="font-medium text-foreground">{p.name} <Badge variant="outline" className="text-[10px] ml-2">{p.region}</Badge></p>
                <p className="text-body-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* Export Compliance */}
      <ContentBlock subtitle="Compliance" title="Export & Customs Compliance" bg="cream">
        <div className="grid md:grid-cols-2 gap-6">
          {compliance.map((c) => (
            <div key={c.title} className="bg-card border border-border rounded p-6 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-olive shrink-0" />
                <h4 className="font-display font-medium text-foreground">{c.title}</h4>
              </div>
              <p className="text-body-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Documentation */}
      <ContentBlock subtitle="Documentation" title="Export Documents Provided" bg="dark">
        <div className="max-w-2xl mx-auto">
          <div className="border border-primary-foreground/10 rounded p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="w-5 h-5 text-primary-foreground/70" />
              <p className="font-display text-lg font-medium">Every shipment includes:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {docs.map((doc) => (
                <p key={doc} className="text-sm text-primary-foreground/70 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" /> {doc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Need a Shipping Quote?" description="We provide door-to-door logistics quotes within 24 hours. FOB, CIF, and DDP pricing available for any European destination." buttonText="Get Shipping Quote" />
    </div>
  );
};

export default ShippingLogisticsPage;
