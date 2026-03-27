import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Linen Shirts — Wholesale Manufacturer",
    description: "Wholesale linen and linen-blend shirts, enzyme-washed for softness. Men's and women's cuts. OEKO-TEX certified. MOQ 500 pcs, EU export ready.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/products/linen-shirts`, ...buildHreflangAlternates("/products/linen-shirts") },
  };
}

const styles = [
  { name: "Classic Linen Shirt", fabric: "100% European Flax Linen, 150 GSM", sizes: "XS–3XL (EU 36–54)", colors: "White, Natural, Sky, Sand, Olive", features: ["Single-needle stitching", "Coconut shell buttons", "Enzyme-washed for softness", "Split yoke construction"], cert: "OEKO-TEX" },
  { name: "Linen-Cotton Blend Shirt", fabric: "55% Linen, 45% Organic Cotton, 130 GSM", sizes: "S–2XL", colors: "8 seasonal colorways", features: ["Reduced wrinkle factor vs. pure linen", "Button-down collar option", "Chest pocket", "Garment-dyed finish"], cert: "GRS" },
  { name: "Oversized Linen Tunic", fabric: "100% Handloom Linen, 160 GSM", sizes: "One size / S–L", colors: "Natural, Charcoal, Rust", features: ["Relaxed oversized fit", "Side slits", "Hand-finished edges", "Artisanal character"], cert: "GOTS" },
  { name: "Mandarin Collar Linen", fabric: "100% Belgian Linen, 140 GSM", sizes: "S–2XL", colors: "White, Ecru, Navy", features: ["Band collar", "Concealed placket", "French seams throughout", "Premium mother-of-pearl buttons"], cert: "OEKO-TEX" },
];

const LinenShirtsPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Linen Shirts"
        title="Premium Linen Shirts — European Quality, Indian Value"
        description="Pure linen and linen-blend shirts crafted for comfort and style. Enzyme-washed for softness, enzyme-finished for minimal shrinkage. Perfect for SS and transitional collections."
      />

      <ContentBlock subtitle="Collection" title="Linen Shirt Range">
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

      <ContentBlock subtitle="Linen Facts" title="Why Our Linen?" bg="cream">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "European Flax", desc: "Sourced from Belgium and France — the world's finest linen-growing regions." },
            { title: "Enzyme Washed", desc: "Pre-washed for a soft, lived-in feel. Minimal shrinkage post-consumer wash." },
            { title: "Naturally Sustainable", desc: "Linen requires 88% less water than cotton. No irrigation, no pesticides needed." },
          ].map((f) => (
            <div key={f.title} className="space-y-2">
              <h3 className="font-display text-lg font-medium text-foreground">{f.title}</h3>
              <p className="text-body-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" buttonText="Request Linen Samples" />
    </div>
  );
};

export default LinenShirtsPage;
