import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Cotton Dresses — Wholesale Manufacturer",
    description: "Wholesale organic cotton dresses — A-line, shirt dresses, wrap styles. GOTS certified, garment-dyed options. MOQ 300 pcs. EU export ready.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/products/cotton-dresses`, ...buildHreflangAlternates("/products/cotton-dresses") },
  };
}

const styles = [
  { name: "A-Line Midi Dress", fabric: "100% Organic Cotton Poplin, 110 GSM", sizes: "XS–3XL", colors: "15+ colorways, custom prints available", features: ["Flattering A-line silhouette", "Side seam pockets", "Back zip closure", "Fully lined bodice"], cert: "GOTS" },
  { name: "Shirt Dress", fabric: "100% Organic Cotton Chambray, 130 GSM", sizes: "XS–2XL", colors: "Indigo, Light Wash, White", features: ["Button-through front", "Adjustable waist belt", "Roll-up tab sleeves", "Chest patch pockets"], cert: "GOTS" },
  { name: "Wrap Dress", fabric: "100% Tencel™ Lyocell, 105 GSM", sizes: "XS–XL", colors: "Sage, Rust, Navy, Black", features: ["True wrap construction", "Fluid drape", "Knee length", "Low-impact dyes"], cert: "OEKO-TEX" },
  { name: "Tiered Maxi Dress", fabric: "100% Organic Cotton Voile, 75 GSM", sizes: "S–2XL", colors: "Floral prints, Solid earth tones", features: ["3-tier gathered skirt", "Adjustable straps", "Smocked back bodice", "Block print options"], cert: "GOTS" },
];

const CottonDressesPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Cotton Dresses"
        title="Organic Cotton Dresses for Every Season"
        description="Versatile dress silhouettes in GOTS-certified organic cotton. From everyday shirt dresses to occasion-ready wrap styles — designed for the European size matrix."
      />

      <ContentBlock subtitle="Collection" title="Core Dress Styles">
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

      <CTASection variant="dark" buttonText="Request Dress Samples" />
    </div>
  );
};

export default CottonDressesPage;
