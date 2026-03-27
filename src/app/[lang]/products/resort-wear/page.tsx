import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Resort Wear — Wholesale Manufacturer",
    description: "Wholesale resort and holiday wear — kaftans, co-ord sets, wrap skirts, and jumpsuits. GOTS and OEKO-TEX certified. MOQ 300 pcs, EU export ready.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/products/resort-wear`, ...buildHreflangAlternates("/products/resort-wear") },
  };
}

const styles = [
  { name: "Kaftan Dress", fabric: "100% Organic Cotton Voile, 80 GSM", sizes: "One Size / S–XL", colors: "Block print, Tie-dye, Solid pastels", features: ["Relaxed A-line kaftan", "Side slits", "Hand block-printed options", "Perfect for beach / poolside retail"], cert: "GOTS" },
  { name: "Wide-Leg Co-ord Set", fabric: "55% Linen, 45% Viscose, 130 GSM", sizes: "XS–XL", colors: "Sand, Terracotta, Sage, Ocean", features: ["Cropped top + palazzo pants", "Elasticated waistband", "Packable — wrinkle-resistant", "Cruise & holiday market"], cert: "OEKO-TEX" },
  { name: "Wrap Skirt", fabric: "100% Tencel™ Lyocell, 105 GSM", sizes: "XS–XL", colors: "Tropical prints, Earth tones", features: ["True wrap with tie closure", "Midi length", "Digital-printed botanicals", "OEKO-TEX certified inks"], cert: "OEKO-TEX" },
  { name: "Linen Jumpsuit", fabric: "100% European Flax Linen, 150 GSM", sizes: "XS–2XL", colors: "Natural, White, Olive", features: ["Belted waist", "Tapered leg", "Button front", "Enzyme-washed for soft hand"], cert: "GOTS" },
];

const ResortWearPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Resort Wear"
        title="Mediterranean-Ready Resort Collections"
        description="Breathable, packable, effortlessly elegant resort wear. Designed for cruise lines, coastal boutiques, and holiday-focused retailers across Europe."
      />

      <ContentBlock subtitle="Collection" title="Resort Wear Range">
        <div className="space-y-8">
          {styles.map((s) => (
            <div key={s.name} className="grid lg:grid-cols-3 gap-6 border border-border rounded p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/8 via-accent to-secondary rounded flex items-center justify-center">
                <p className="font-display text-lg text-primary/40">{s.name}</p>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-medium text-foreground">{s.name}</h3>
                  <Badge className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">{s.cert}</Badge>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-body-sm">
                  <div><span className="text-muted-foreground font-medium">Fabric:</span> <span className="text-foreground">{s.fabric}</span></div>
                  <div><span className="text-muted-foreground font-medium">Sizes:</span> <span className="text-foreground">{s.sizes}</span></div>
                  <div className="sm:col-span-2"><span className="text-muted-foreground font-medium">Colors:</span> <span className="text-foreground">{s.colors}</span></div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="text-body-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Planning Your SS 2027 Resort Line?" description="Get ahead with early sampling. We offer resort wear development packages starting from 10 styles." buttonText="Start Resort Development" />
    </div>
  );
};

export default ResortWearPage;
