import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Scissors, Ruler, Shirt, Package, Layers, Zap, Clock, ShieldCheck, Users, Factory } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HowToSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Garment Manufacturing India | Ladies Woven Wear",
    description: "Vertically integrated ladies woven wear manufacturing in Gujarat, India. GOTS certified. 8,000+ pcs/day. Exporting to UAE, Saudi Arabia & Russia.",
    alternates: buildHreflangAlternates("/manufacturing"),
  };
}

const capabilities = [
  { icon: Layers, title: "Fabric Sourcing & Testing", desc: "In-house textile lab for shrinkage, colorfastness, GSM, and tensile strength testing. All fabrics sourced from GOTS-certified mills across India and Europe.", stage: "Stage 1" },
  { icon: Scissors, title: "Pattern Making & Grading", desc: "CAD-based pattern development with digital grading across EU size ranges (XS–3XL). Gerber AccuMark system ensures precision within ±2mm tolerance.", stage: "Stage 2" },
  { icon: Ruler, title: "Cutting", desc: "Automated spreading and CNC cutting with Lectra Vector iX. Marker efficiency above 85%. Laser cutting available for delicate fabrics and intricate designs.", stage: "Stage 3" },
  { icon: Shirt, title: "Stitching & Assembly", desc: "12 production lines with 600+ machines — single needle, overlock, flatlock, coverstitch, buttonhole. Dedicated lines for complex constructions.", stage: "Stage 4" },
  { icon: Zap, title: "Finishing & Pressing", desc: "Steam pressing, enzyme washing, garment dyeing, embroidery, screen print, and digital print. Softener treatments to European hand-feel specifications.", stage: "Stage 5" },
  { icon: Package, title: "Packaging & Dispatch", desc: "Custom packaging per buyer specs — tissue-wrapped, polybags, hangtags, barcoding, carton packing with moisture-proof lining. FCL/LCL ready.", stage: "Stage 6" },
];

const equipment = [
  { name: "Lectra Vector iX", use: "Automated fabric cutting", capacity: "10,000 pcs/day", cert: "CE" },
  { name: "Juki DDL-9000C", use: "Single-needle lockstitch", capacity: "600+ units", cert: "ISO" },
  { name: "Brother BAS-375H", use: "Programmable pattern stitching", capacity: "24 units", cert: "CE" },
  { name: "Veit 8363", use: "Garment finishing & pressing", capacity: "5,000 pcs/day", cert: "CE" },
  { name: "Tajima TMEZ-SC", use: "Multi-head embroidery", capacity: "12 heads", cert: "CE" },
  { name: "Datacolor 800", use: "Spectrophotometer — colour matching", capacity: "Lab equipment", cert: "ISO" },
  { name: "Wascator FOM 71", use: "Dimensional stability testing", capacity: "Lab equipment", cert: "ISO" },
  { name: "Instron 5969", use: "Tensile & tear strength testing", capacity: "Lab equipment", cert: "ISO" },
];

const advantages = [
  { icon: Clock, title: "Lead Time Guarantee", desc: "45-day standard lead time from order confirmation. 30-day express available for repeat orders. Penalty clause accepted for late delivery." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "AQL 2.5 at every stage. 100% needle detection. Buyer QC teams welcome on-site. Third-party inspection arranged on request." },
  { icon: Users, title: "Dedicated Account Team", desc: "Every European client gets a dedicated merchandiser, QC officer, and logistics coordinator. Single point of contact from sampling to shipment." },
  { icon: Factory, title: "Vertical Integration", desc: "Fabric sourcing, dyeing, cutting, stitching, finishing, and packing — all under one management. No sub-contracting without buyer approval." },
];

const ManufacturingPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <HowToSchema
        name="Garment Manufacturing Process"
        description="Step-by-step garment manufacturing from fabric sourcing to packaged delivery."
        steps={capabilities.map((c) => ({ name: c.title, text: c.desc }))}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Manufacturing", url: "/manufacturing" }]} />
      <PageHero
        subtitle="Manufacturing"
        title="Vertically Integrated Garment Production"
        description="Four state-of-the-art facilities in Gujarat with 50,000 pieces/month capacity. From fibre to finished garment — every step under one roof, fully GOTS and BSCI certified."
      />

      {/* Why Vedant */}
      <ContentBlock subtitle="Why European Buyers Choose Us" title="Manufacturing Advantages">
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded p-6 md:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-olive" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                <p className="text-body-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Production Process */}
      <ContentBlock subtitle="Production Process" title="End-to-End Manufacturing" bg="cream">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map(({ icon: Icon, title, desc, stage }) => (
            <div key={title} className="bg-card border border-border rounded p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{stage}</Badge>
                </div>
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
              <p className="text-body-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Facilities */}
      <ContentBlock subtitle="Our Facilities" title="Manufacturing Infrastructure">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { name: "Unit 1 — Woven Garments", location: "Ahmedabad", area: "35,000 sq ft", cert: "GOTS · BSCI", desc: "Our flagship facility handles all woven production — blouses, shirts, dresses. 8 stitching lines, automated cutting, in-house lab. Natural lighting and ventilation systems throughout." },
              { name: "Unit 2 — Finishing & Embellishment", location: "Gandhinagar", area: "18,000 sq ft", cert: "ZLD · OEKO-TEX", desc: "Dedicated to garment washing, dyeing, embroidery, and specialty finishes. Enzyme wash, stone wash, and eco-friendly softener treatments. Zero Liquid Discharge plant operational since 2021." },
              { name: "Unit 3 — Sampling & R&D", location: "Ahmedabad", area: "8,000 sq ft", cert: "ISO 17025 (lab)", desc: "Rapid prototyping centre for buyer samples. 48-hour sample turnaround for urgent requests. CAD pattern room, textile lab with spectrophotometer, and seasonal trend library." },
              { name: "Unit 4 — Knits & Jersey", location: "Surat", area: "22,000 sq ft", cert: "GOTS · GRS", desc: "Circular knit processing for T-shirts, polo shirts, and jersey dresses. 4 production lines with 15,000 pcs/month capacity. Specialising in organic cotton jersey and Tencel blends." },
            ].map((unit) => (
              <div key={unit.name} className="border-l-2 border-gold pl-6 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-medium text-foreground">{unit.name}</h3>
                  <Badge variant="outline" className="text-[10px]">{unit.location}</Badge>
                </div>
                <div className="flex gap-3 text-caption">
                  <span>{unit.area}</span>
                  <span>·</span>
                  <span>{unit.cert}</span>
                </div>
                <p className="text-body-sm text-muted-foreground">{unit.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/8 via-accent to-secondary rounded flex items-center justify-center">
              <p className="font-display text-xl text-primary/50">Factory Floor</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-accent to-secondary rounded flex items-center justify-center">
                <p className="text-caption">Cutting Room</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent to-secondary rounded flex items-center justify-center">
                <p className="text-caption">Quality Lab</p>
              </div>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Equipment Table */}
      <ContentBlock subtitle="Equipment" title="Production Technology" bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">Equipment</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Application</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground hidden md:table-cell">Capacity</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground hidden lg:table-cell">Standard</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((eq) => (
                  <tr key={eq.name} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{eq.name}</td>
                    <td className="p-4 text-muted-foreground">{eq.use}</td>
                    <td className="p-4 text-muted-foreground hidden md:table-cell">{eq.capacity}</td>
                    <td className="p-4 hidden lg:table-cell">
                      <Badge variant="outline" className="text-[10px]">{eq.cert}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentBlock>

      {/* Key Metrics */}
      <ContentBlock subtitle="At a Glance" title="Production Capacity" bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "50,000", label: "Pieces / Month" },
            { num: "4", label: "Manufacturing Units" },
            { num: "1,800+", label: "Skilled Workers" },
            { num: "45 Days", label: "Standard Lead Time" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{s.num}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection
        title="Schedule a Virtual Factory Tour"
        description="See our production lines in action. We offer live video tours for prospective buyers across all four facilities."
        buttonText="Book a Tour"
      />
    </div>
  );
};

export default ManufacturingPage;
