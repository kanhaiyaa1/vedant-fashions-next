import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Globe, FlaskConical, Palette } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Fabric Sourcing India | GOTS Certified Mills",
    description: "GOTS-certified fabric sourcing India — organic cotton, Tencel™, linen for UAE, Saudi Arabia & Middle East garment export. Full chain-of-custody.",
    alternates: buildHreflangAlternates("/fabric-sourcing"),
  };
}

const fabrics = [
  { name: "Organic Cotton Poplin", weight: "100–120 GSM", width: "150 cm", weave: "Plain", origin: "Gujarat, Maharashtra", cert: "GOTS", uses: "Blouses, dresses, shirting", shrinkage: "±3%" },
  { name: "Organic Cotton Voile", weight: "70–85 GSM", width: "145 cm", weave: "Plain", origin: "Tamil Nadu", cert: "GOTS", uses: "Kaftans, layering, summer dresses", shrinkage: "±3%" },
  { name: "Organic Cotton Oxford", weight: "120–140 GSM", width: "150 cm", weave: "Basket", origin: "Gujarat", cert: "GOTS", uses: "Shirts, button-downs, structured blouses", shrinkage: "±2.5%" },
  { name: "Organic Cotton Twill", weight: "180–220 GSM", width: "150 cm", weave: "Twill 2/1", origin: "Maharashtra", cert: "GOTS", uses: "Trousers, jackets, workwear", shrinkage: "±3%" },
  { name: "Tencel™ Lyocell", weight: "95–115 GSM", width: "140 cm", weave: "Satin", origin: "Lenzing AG, Austria", cert: "OEKO-TEX", uses: "Wrap dresses, blouses, flowy garments", shrinkage: "±2%" },
  { name: "European Flax Linen", weight: "140–180 GSM", width: "145 cm", weave: "Plain", origin: "Belgium, France", cert: "European Flax®", uses: "Shirts, trousers, resort wear", shrinkage: "±5%" },
  { name: "Linen-Cotton Blend", weight: "120–140 GSM", width: "150 cm", weave: "Plain", origin: "India + Europe blend", cert: "GRS", uses: "Casual shirts, dresses, co-ords", shrinkage: "±4%" },
  { name: "Recycled Polyester", weight: "100–150 GSM", width: "155 cm", weave: "Plain/Twill", origin: "India (rPET)", cert: "GRS", uses: "Outerwear linings, activewear blends", shrinkage: "±1%" },
  { name: "Bamboo Viscose", weight: "130–160 GSM", width: "150 cm", weave: "Jersey", origin: "China (FSC bamboo)", cert: "OEKO-TEX", uses: "T-shirts, jersey dresses, loungewear", shrinkage: "±3%" },
  { name: "Organic Cotton Jersey", weight: "140–180 GSM", width: "160 cm (tubular)", weave: "Single jersey", origin: "Gujarat", cert: "GOTS", uses: "T-shirts, dresses, basics", shrinkage: "±5% L / ±3% W" },
];

const sourcing = [
  { icon: Leaf, title: "Certified Supply Chain", desc: "Every metre of fabric comes with full chain-of-custody documentation. GOTS Transaction Certificates issued per shipment. No blending of certified and non-certified materials." },
  { icon: Globe, title: "30+ Partner Mills", desc: "Long-standing relationships with mills in Gujarat, Maharashtra, Tamil Nadu, and European linen producers. Annual audits ensure compliance with our quality and social standards." },
  { icon: FlaskConical, title: "In-House Testing", desc: "All incoming fabric tested for GSM, shrinkage (ISO 6330), colorfastness (ISO 105-C06), tensile strength (ISO 13934-1), and composition verification before entering production." },
  { icon: Palette, title: "Dyeing & Finishing", desc: "REACH-compliant, AZO-free reactive dyes. OEKO-TEX Standard 100 certified chemicals. Low-impact dyeing processes with water recycling. Lab dips within 5 working days." },
];

const customOptions = [
  "Custom blends — cotton-linen, cotton-Tencel, linen-viscose in any ratio",
  "Custom weights — from 60 GSM voile to 300 GSM canvas",
  "Special finishes — enzyme wash, peach finish, wrinkle-free, anti-bacterial",
  "Print development — digital, screen, block, discharge, pigment print",
  "Yarn-dyed stripes and checks — custom colourways with 500m MOQ",
  "Exclusive fabric developments — dedicated loom allocation for 3,000m+ orders",
];

const FabricSourcingPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Fabric Sourcing"
        title="Certified Fabrics from Trusted Mills"
        description="We source from 30+ GOTS and OEKO-TEX certified mills across India and Europe. Full chain-of-custody documentation, in-house testing, and REACH-compliant processing for every metre."
      />

      {/* Sourcing Philosophy */}
      <ContentBlock subtitle="Our Approach" title="Responsible Fabric Sourcing">
        <div className="grid md:grid-cols-2 gap-6">
          {sourcing.map(({ icon: Icon, title, desc }) => (
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

      {/* Fabric Library */}
      <ContentBlock subtitle="Core Range" title="Standard Fabric Library" bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">Fabric</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">GSM</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Weave</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Width</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Shrinkage</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Origin</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Cert</th>
                </tr>
              </thead>
              <tbody>
                {fabrics.map((f) => (
                  <tr key={f.name} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{f.name}</td>
                    <td className="p-4 text-muted-foreground">{f.weight}</td>
                    <td className="p-4 text-muted-foreground">{f.weave}</td>
                    <td className="p-4 text-muted-foreground">{f.width}</td>
                    <td className="p-4 text-muted-foreground">{f.shrinkage}</td>
                    <td className="p-4 text-muted-foreground">{f.origin}</td>
                    <td className="p-4">
                      <Badge className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">{f.cert}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-caption text-center mt-4">
          Swatch cards and S/S & A/W seasonal shade cards available on request. Hangers shipped within 3 working days.
        </p>
      </ContentBlock>

      {/* Custom */}
      <ContentBlock subtitle="Bespoke Development" title="Custom Fabric Options">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-6">
          <p className="text-body text-muted-foreground text-center">
            Can't find what you need in our standard range? Our fabric development team works directly with mills to create exclusive weaves, blends, and finishes for your brand.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {customOptions.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <span className="text-body-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-caption text-center pt-2">
            Minimum order for custom fabric development: 500 metres. Lab dips and strike-offs provided within 7 working days.
          </p>
        </div>
      </ContentBlock>

      {/* Compliance */}
      <ContentBlock subtitle="Compliance" title="Chemical & Safety Standards" bg="dark">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "REACH Compliant", desc: "All chemicals and dyes comply with EU REACH Regulation (EC) No 1907/2006. Restricted Substance List (RSL) tested by accredited labs." },
            { title: "AZO-Free Dyes", desc: "Zero use of AZO dyes across all production. Every dye lot tested per EU Directive 2002/61/EC. Test reports available per shipment." },
            { title: "OEKO-TEX Chemicals", desc: "Only OEKO-TEX Standard 100 certified auxiliaries used in wet processing. Annual chemical inventory audit by third-party labs." },
          ].map((item) => (
            <div key={item.title} className="border border-primary-foreground/10 rounded p-6 space-y-3">
              <h3 className="font-display text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Request Fabric Swatches" description="Free swatch cards for our standard range. Custom development hangers available at cost. Ships worldwide within 3 days." buttonText="Order Swatches" />
    </div>
  );
};

export default FabricSourcingPage;
