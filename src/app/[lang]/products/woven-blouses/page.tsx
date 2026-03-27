import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Woven Blouses — Wholesale Manufacturer",
    description: "Wholesale woven blouses in organic cotton, Tencel™, and linen blends. GOTS certified. MOQ 500 pcs, 6–8 week lead time. EU export ready.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/products/woven-blouses`, ...buildHreflangAlternates("/products/woven-blouses") },
  };
}

const styles = [
  { name: "Classic Oxford Blouse", fabric: "100% Organic Cotton Oxford, 120 GSM", sizes: "XS–3XL (EU 34–52)", colors: "White, Ecru, Powder Blue, Blush", features: ["Mother-of-pearl buttons", "Back yoke with box pleat", "Adjustable cuffs", "Curved hem"], cert: "GOTS" },
  { name: "Pintuck Poplin Blouse", fabric: "100% Organic Cotton Poplin, 100 GSM", sizes: "XS–2XL", colors: "12 colorways available", features: ["Front pintuck detailing", "Concealed placket", "3/4 puff sleeves", "Enzyme-washed finish"], cert: "GOTS" },
  { name: "Tencel™ Relaxed Blouse", fabric: "100% Tencel™ Lyocell, 110 GSM", sizes: "XS–3XL", colors: "Sand, Olive, Navy, Black", features: ["Fluid drape", "Drop shoulder", "Sustainable modal hand-feel", "Low-impact dyed"], cert: "OEKO-TEX" },
  { name: "Linen-Blend Camp Collar", fabric: "55% Linen, 45% Cotton, 140 GSM", sizes: "S–2XL", colors: "Natural, Khaki, Terracotta, Indigo", features: ["Camp collar", "Chest pocket", "Side slits", "Pre-washed for minimal shrinkage"], cert: "GRS" },
  { name: "Embroidered Peasant Blouse", fabric: "100% Organic Cotton Voile, 80 GSM", sizes: "XS–XL", colors: "White, Off-white", features: ["Hand-guided embroidery", "Smocked waist", "Balloon sleeves", "Artisanal detailing"], cert: "GOTS" },
];

const WovenBlousesPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Woven Blouses"
        title="Crafted Blouses for the European Market"
        description="From classic oxfords to artisanal embroidered pieces — our woven blouse range combines Indian hand-craft with European fit standards. All styles available for private label."
      />

      <ContentBlock subtitle="Range" title="Core Blouse Styles">
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
                  <div><span className="text-muted-foreground font-medium">Colors:</span> <span className="text-foreground">{s.colors}</span></div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Features</p>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="text-body-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" buttonText="Request Blouse Samples" />
    </div>
  );
};

export default WovenBlousesPage;
