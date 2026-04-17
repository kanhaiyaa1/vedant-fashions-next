import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Globe, FlaskConical, Palette } from "lucide-react";
import { getContent } from "@/data/translations/page-content";
import { fabricSourcingContent } from "@/data/translations/fabric-sourcing";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getContent(fabricSourcingContent, lang);
  return {
    title: c.hero.title,
    description: c.hero.description,
    alternates: buildHreflangAlternates("/fabric-sourcing"),
  };
}

// Non-translatable: fabric technical data and sourcing icons
const SOURCING_ICONS = [Leaf, Globe, FlaskConical, Palette];

const FABRICS = [
  { name: "Organic Cotton Poplin",  weight: "100–120 GSM", width: "150 cm", weave: "Plain",         origin: "Gujarat, Maharashtra",    cert: "GOTS" },
  { name: "Organic Cotton Voile",   weight: "70–85 GSM",   width: "145 cm", weave: "Plain",         origin: "Tamil Nadu",               cert: "GOTS" },
  { name: "Organic Cotton Oxford",  weight: "120–140 GSM", width: "150 cm", weave: "Basket",        origin: "Gujarat",                  cert: "GOTS" },
  { name: "Organic Cotton Twill",   weight: "180–220 GSM", width: "150 cm", weave: "Twill 2/1",     origin: "Maharashtra",              cert: "GOTS" },
  { name: "Tencel™ Lyocell",        weight: "95–115 GSM",  width: "140 cm", weave: "Satin",         origin: "Lenzing AG, Austria",      cert: "OEKO-TEX" },
  { name: "European Flax Linen",    weight: "140–180 GSM", width: "145 cm", weave: "Plain",         origin: "Belgium, France",          cert: "European Flax®" },
  { name: "Linen-Cotton Blend",     weight: "120–140 GSM", width: "150 cm", weave: "Plain",         origin: "India + Europe blend",     cert: "GRS" },
  { name: "Recycled Polyester",     weight: "100–150 GSM", width: "155 cm", weave: "Plain/Twill",   origin: "India (rPET)",             cert: "GRS" },
  { name: "Bamboo Viscose",         weight: "130–160 GSM", width: "150 cm", weave: "Jersey",        origin: "China (FSC bamboo)",       cert: "OEKO-TEX" },
  { name: "Organic Cotton Jersey",  weight: "140–180 GSM", width: "160 cm (tubular)", weave: "Single jersey", origin: "Gujarat",       cert: "GOTS" },
];

export default async function FabricSourcingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(fabricSourcingContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero subtitle={c.hero.subtitle} title={c.hero.title} description={c.hero.description} />

      {/* Sourcing Philosophy */}
      <ContentBlock subtitle={c.sourcing.subtitle} title={c.sourcing.title}>
        <div className="grid md:grid-cols-2 gap-6">
          {c.sourcing.items.map(({ title, desc }, i) => {
            const Icon = SOURCING_ICONS[i];
            return (
              <div key={i} className="bg-card border border-border rounded p-6 md:p-8 flex gap-5">
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

      {/* Fabric Library */}
      <ContentBlock subtitle={c.library.subtitle} title={c.library.title} bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="bg-secondary">
                  {c.library.headers.map((h) => (
                    <th key={h} className="text-left p-4 font-display font-semibold text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FABRICS.map((f) => (
                  <tr key={f.name} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{f.name}</td>
                    <td className="p-4 text-muted-foreground">{f.weight}</td>
                    <td className="p-4 text-muted-foreground">{f.weave}</td>
                    <td className="p-4 text-muted-foreground">{f.width}</td>
                    <td className="p-4 text-muted-foreground">{f.origin}</td>
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
        <p className="text-caption text-center mt-4">{c.library.footnote}</p>
      </ContentBlock>

      {/* Custom */}
      <ContentBlock subtitle={c.custom.subtitle} title={c.custom.title}>
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-6">
          <p className="text-body text-muted-foreground text-center">{c.custom.intro}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.custom.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <span className="text-body-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-caption text-center pt-2">{c.custom.footnote}</p>
        </div>
      </ContentBlock>

      {/* Compliance */}
      <ContentBlock subtitle={c.compliance.subtitle} title={c.compliance.title} bg="dark">
        <div className="grid md:grid-cols-3 gap-6">
          {c.compliance.items.map(({ title, desc }, i) => (
            <div key={i} className="border border-primary-foreground/10 rounded p-6 space-y-3">
              <h3 className="font-display text-lg font-medium">{title}</h3>
              <p className="text-sm text-primary-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title={c.cta.title} description={c.cta.description} buttonText={c.cta.buttonText} />
    </div>
  );
}
