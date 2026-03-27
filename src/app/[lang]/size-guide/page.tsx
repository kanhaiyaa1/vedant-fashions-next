import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Size Guide — EU, UK & US Sizing",
    description: "Complete garment size guide for European, UK, and US markets. Women's, men's, and unisex sizing with measurements in centimetres.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/size-guide`, ...buildHreflangAlternates("/size-guide") },
  };
}

const womenSizes = [
  { size: "XS", eu: "34", uk: "6", us: "2", bust: "80", waist: "62", hip: "88" },
  { size: "S", eu: "36", uk: "8", us: "4", bust: "84", waist: "66", hip: "92" },
  { size: "M", eu: "38", uk: "10", us: "6", bust: "88", waist: "70", hip: "96" },
  { size: "L", eu: "40", uk: "12", us: "8", bust: "92", waist: "74", hip: "100" },
  { size: "XL", eu: "42", uk: "14", us: "10", bust: "96", waist: "78", hip: "104" },
  { size: "2XL", eu: "44", uk: "16", us: "12", bust: "100", waist: "82", hip: "108" },
  { size: "3XL", eu: "46–48", uk: "18–20", us: "14–16", bust: "106", waist: "88", hip: "114" },
];

const menSizes = [
  { size: "S", eu: "46", uk: "36", us: "36", chest: "92", waist: "78", hip: "96" },
  { size: "M", eu: "48", uk: "38", us: "38", chest: "96", waist: "82", hip: "100" },
  { size: "L", eu: "50", uk: "40", us: "40", chest: "100", waist: "86", hip: "104" },
  { size: "XL", eu: "52", uk: "42", us: "42", chest: "104", waist: "90", hip: "108" },
  { size: "2XL", eu: "54", uk: "44", us: "44", chest: "108", waist: "94", hip: "112" },
];

const SizeGuidePage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Size Guide"
        title="European Size Conversion Charts"
        description="All garments are graded to EU size standards. We support custom grading to your brand's fit specifications. Measurements in centimeters."
      />

      <ContentBlock subtitle="Women's Sizing" title="Women's Size Chart">
        <div className="border border-border rounded overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">Size</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">EU</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">UK</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">US</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Bust (cm)</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Waist (cm)</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Hip (cm)</th>
                </tr>
              </thead>
              <tbody>
                {womenSizes.map((s) => (
                  <tr key={s.size} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{s.size}</td>
                    <td className="p-4 text-muted-foreground">{s.eu}</td>
                    <td className="p-4 text-muted-foreground">{s.uk}</td>
                    <td className="p-4 text-muted-foreground">{s.us}</td>
                    <td className="p-4 text-muted-foreground">{s.bust}</td>
                    <td className="p-4 text-muted-foreground">{s.waist}</td>
                    <td className="p-4 text-muted-foreground">{s.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Men's Sizing" title="Men's Size Chart" bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">Size</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">EU</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">UK</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">US</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Chest (cm)</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Waist (cm)</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Hip (cm)</th>
                </tr>
              </thead>
              <tbody>
                {menSizes.map((s) => (
                  <tr key={s.size} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{s.size}</td>
                    <td className="p-4 text-muted-foreground">{s.eu}</td>
                    <td className="p-4 text-muted-foreground">{s.uk}</td>
                    <td className="p-4 text-muted-foreground">{s.us}</td>
                    <td className="p-4 text-muted-foreground">{s.chest}</td>
                    <td className="p-4 text-muted-foreground">{s.waist}</td>
                    <td className="p-4 text-muted-foreground">{s.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Custom Grading" title="Need Custom Fit Specs?">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-body text-muted-foreground">
            We can grade garments to your brand's proprietary size charts. Send us your measurement specs 
            and we'll adapt our patterns accordingly. We support EU, UK, US, and Scandinavian sizing systems.
          </p>
          <p className="text-caption">
            Tolerance: ±1 cm on critical measurements. All garments measured flat per buyer spec sheets.
          </p>
        </div>
      </ContentBlock>

      <CTASection buttonText="Send Your Size Specs" />
    </div>
  );
};

export default SizeGuidePage;
