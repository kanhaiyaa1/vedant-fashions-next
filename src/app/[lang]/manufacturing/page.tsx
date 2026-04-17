import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Scissors, Ruler, Shirt, Package, Layers, Zap, Clock, ShieldCheck, Users, Factory } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HowToSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { manufacturingContent } from "@/data/translations/manufacturing";

// Icons paired by index with process.items (Stage 1–6)
const PROCESS_ICONS = [Layers, Scissors, Ruler, Shirt, Zap, Package];

// Icons paired by index with advantages.items
const ADVANTAGE_ICONS = [Clock, ShieldCheck, Users, Factory];

// Non-translatable equipment data: name, capacity, cert
const EQUIPMENT_DATA = [
  { name: "Lectra Vector iX",     capacity: "10,000 pcs/day", cert: "CE" },
  { name: "Juki DDL-9000C",       capacity: "600+ units",     cert: "ISO" },
  { name: "Brother BAS-375H",     capacity: "24 units",       cert: "CE" },
  { name: "Veit 8363",            capacity: "5,000 pcs/day",  cert: "CE" },
  { name: "Tajima TMEZ-SC",       capacity: "12 heads",       cert: "CE" },
  { name: "Datacolor 800",        capacity: "Lab equipment",  cert: "ISO" },
  { name: "Wascator FOM 71",      capacity: "Lab equipment",  cert: "ISO" },
  { name: "Instron 5969",         capacity: "Lab equipment",  cert: "ISO" },
];

// Non-translatable facility specs: location, area, cert
const FACILITY_SPECS = [
  { location: "Ahmedabad",   area: "35,000 sq ft", cert: "GOTS · BSCI" },
  { location: "Gandhinagar", area: "18,000 sq ft", cert: "ZLD · OEKO-TEX" },
  { location: "Ahmedabad",   area: "8,000 sq ft",  cert: "ISO 17025 (lab)" },
  { location: "Surat",       area: "22,000 sq ft", cert: "GOTS · GRS" },
];

// Non-translatable metric nums
const METRIC_NUMS = ["50,000", "4", "1,800+", "45 Days"];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Garment Manufacturing India | Ladies Woven Wear",
    description: "Vertically integrated ladies woven wear manufacturing in Gujarat, India. GOTS certified. 8,000+ pcs/day. Exporting to UAE, Saudi Arabia & Russia.",
    alternates: buildHreflangAlternates("/manufacturing"),
  };
}

const ManufacturingPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const c = getContent(manufacturingContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <HowToSchema
        name="Garment Manufacturing Process"
        description="Step-by-step garment manufacturing from fabric sourcing to packaged delivery."
        steps={c.process.items.map((item) => ({ name: item.title, text: item.desc }))}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Manufacturing", url: "/manufacturing" }]} />
      <PageHero
        subtitle={c.hero.subtitle}
        title={c.hero.title}
        description={c.hero.description}
      />

      {/* Why Vedant */}
      <ContentBlock subtitle={c.advantages.subtitle} title={c.advantages.title}>
        <div className="grid md:grid-cols-2 gap-6">
          {c.advantages.items.map(({ title, desc }, i) => {
            const Icon = ADVANTAGE_ICONS[i];
            return (
              <div key={title} className="bg-card border border-border rounded p-6 md:p-8 flex gap-5">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-olive" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                  <p className="text-body-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentBlock>

      {/* Production Process */}
      <ContentBlock subtitle={c.process.subtitle} title={c.process.title} bg="cream">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.process.items.map(({ stage, title, desc }, i) => {
            const Icon = PROCESS_ICONS[i];
            return (
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
            );
          })}
        </div>
      </ContentBlock>

      {/* Facilities */}
      <ContentBlock subtitle={c.facilities.subtitle} title={c.facilities.title}>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {c.facilities.units.map(({ name, desc }, i) => {
              const specs = FACILITY_SPECS[i];
              return (
                <div key={name} className="border-l-2 border-gold pl-6 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-medium text-foreground">{name}</h3>
                    <Badge variant="outline" className="text-[10px]">{specs.location}</Badge>
                  </div>
                  <div className="flex gap-3 text-caption">
                    <span>{specs.area}</span>
                    <span>·</span>
                    <span>{specs.cert}</span>
                  </div>
                  <p className="text-body-sm text-muted-foreground">{desc}</p>
                </div>
              );
            })}
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/8 via-accent to-secondary rounded flex items-center justify-center">
              <p className="font-display text-xl text-primary/50">{c.facilities.imagePlaceholders.factoryFloor}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-accent to-secondary rounded flex items-center justify-center">
                <p className="text-caption">{c.facilities.imagePlaceholders.cuttingRoom}</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent to-secondary rounded flex items-center justify-center">
                <p className="text-caption">{c.facilities.imagePlaceholders.qualityLab}</p>
              </div>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Equipment Table */}
      <ContentBlock subtitle={c.equipment.subtitle} title={c.equipment.title} bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">{c.equipment.headers[0]}</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">{c.equipment.headers[1]}</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground hidden md:table-cell">{c.equipment.headers[2]}</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground hidden lg:table-cell">{c.equipment.headers[3]}</th>
                </tr>
              </thead>
              <tbody>
                {EQUIPMENT_DATA.map((eq, i) => (
                  <tr key={eq.name} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{eq.name}</td>
                    <td className="p-4 text-muted-foreground">{c.equipment.rows[i].use}</td>
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
      <ContentBlock subtitle={c.metrics.subtitle} title={c.metrics.title} bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {c.metrics.items.map(({ label }, i) => (
            <div key={label}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{METRIC_NUMS[i]}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{label}</p>
            </div>
          ))}
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

export default ManufacturingPage;
