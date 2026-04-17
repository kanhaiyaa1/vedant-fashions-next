import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { getContent } from "@/data/translations/page-content";
import { sizeGuideContent } from "@/data/translations/size-guide";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getContent(sizeGuideContent, lang);
  return {
    title: c.hero.title,
    description: c.hero.description,
    alternates: buildHreflangAlternates("/size-guide"),
  };
}

// Non-translatable: size codes, EU/UK/US numbers, cm measurements
const WOMEN_SIZES = [
  { size: "XS",  eu: "34",    uk: "6",     us: "2",     bust: "80",  waist: "62",  hip: "88"  },
  { size: "S",   eu: "36",    uk: "8",     us: "4",     bust: "84",  waist: "66",  hip: "92"  },
  { size: "M",   eu: "38",    uk: "10",    us: "6",     bust: "88",  waist: "70",  hip: "96"  },
  { size: "L",   eu: "40",    uk: "12",    us: "8",     bust: "92",  waist: "74",  hip: "100" },
  { size: "XL",  eu: "42",    uk: "14",    us: "10",    bust: "96",  waist: "78",  hip: "104" },
  { size: "2XL", eu: "44",    uk: "16",    us: "12",    bust: "100", waist: "82",  hip: "108" },
  { size: "3XL", eu: "46–48", uk: "18–20", us: "14–16", bust: "106", waist: "88",  hip: "114" },
];

const MEN_SIZES = [
  { size: "S",   eu: "46", uk: "36", us: "36", chest: "92",  waist: "78", hip: "96"  },
  { size: "M",   eu: "48", uk: "38", us: "38", chest: "96",  waist: "82", hip: "100" },
  { size: "L",   eu: "50", uk: "40", us: "40", chest: "100", waist: "86", hip: "104" },
  { size: "XL",  eu: "52", uk: "42", us: "42", chest: "104", waist: "90", hip: "108" },
  { size: "2XL", eu: "54", uk: "44", us: "44", chest: "108", waist: "94", hip: "112" },
];

export default async function SizeGuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(sizeGuideContent, lang);
  const [wH0, wH1, wH2, wH3, wH4, wH5, wH6] = c.women.headers;
  const [mH0, mH1, mH2, mH3, mH4, mH5, mH6] = c.men.headers;

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero subtitle={c.hero.subtitle} title={c.hero.title} description={c.hero.description} />

      <ContentBlock subtitle={c.women.subtitle} title={c.women.title}>
        <div className="border border-border rounded overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  {[wH0, wH1, wH2, wH3, wH4, wH5, wH6].map((h) => (
                    <th key={h} className="text-left p-4 font-display font-semibold text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WOMEN_SIZES.map((s) => (
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

      <ContentBlock subtitle={c.men.subtitle} title={c.men.title} bg="cream">
        <div className="border border-border rounded overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-secondary">
                  {[mH0, mH1, mH2, mH3, mH4, mH5, mH6].map((h) => (
                    <th key={h} className="text-left p-4 font-display font-semibold text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MEN_SIZES.map((s) => (
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

      <ContentBlock subtitle={c.custom.subtitle} title={c.custom.title}>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-body text-muted-foreground">{c.custom.paragraph}</p>
          <p className="text-caption">{c.custom.caption}</p>
        </div>
      </ContentBlock>

      <CTASection buttonText={c.cta.buttonText} />
    </div>
  );
}
