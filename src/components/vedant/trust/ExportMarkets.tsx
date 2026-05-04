"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Globe } from "lucide-react";
import { getContent } from "@/data/translations/page-content";
import { homeContent } from "@/data/translations/home";

interface ExportMarketsProps {
  lang?: string;
}

const markets = [
  { region: "UAE", countries: "Dubai, Abu Dhabi, Sharjah", share: "32%", highlight: true },
  { region: "Saudi Arabia", countries: "Riyadh, Jeddah, Dammam", share: "24%", highlight: false },
  { region: "Qatar & Kuwait", countries: "Doha, Kuwait City", share: "18%", highlight: false },
  { region: "Oman & Bahrain", countries: "Muscat, Manama", share: "12%", highlight: false },
  { region: "Russia & CIS", countries: "Moscow, St. Petersburg", share: "9%", highlight: false },
  { region: "Egypt & Others", countries: "Alexandria, Cairo + Global", share: "5%", highlight: false },
];

const logos = [
  "25,000+ pieces manufactured monthly",
  "18–22 days sea freight to UAE",
  "GOTS & OEKO-TEX certified production",
  "FOB Mumbai · CIF · DDP available",
];

const ExportMarkets = ({ lang }: ExportMarketsProps) => {
  const params = useParams();
  const locale = lang ?? (typeof params?.lang === "string" ? params.lang : "en");
  const c = getContent(homeContent, locale).exportMarkets;

  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">{c.subtitle}</p>
          <h2 className="text-display-md text-foreground">{c.title}</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {c.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map placeholder */}
          <div className="lg:col-span-2 aspect-square bg-gradient-to-br from-primary/8 via-accent to-secondary rounded flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/site-files/high-fashion-women-garment.jpg"
              alt="Ladies fashion export"
              fill
              className="object-cover opacity-20"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="relative z-10 text-center p-8">
              <Globe className="w-16 h-16 text-primary/25 mx-auto mb-4" />
              <p className="font-display text-lg text-foreground">{c.countriesLabel}</p>
              <p className="text-caption mt-1">Middle East & Global markets</p>
            </div>
          </div>

          {/* Market breakdown */}
          <div className="lg:col-span-3 space-y-3">
            {markets.map((m) => (
              <div key={m.region} className={`border rounded p-4 md:p-5 flex items-center justify-between gap-4 ${m.highlight ? "border-primary bg-primary/5" : "border-border"}`}>
                <div>
                  <p className="font-display text-base font-medium text-foreground">{m.region}</p>
                  <p className="text-caption mt-0.5">{m.countries}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-display text-2xl font-semibold text-foreground">{m.share}</p>
                  <p className="text-caption">{c.exportShareLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trade presence */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((item, i) => (
            <div key={i} className="bg-secondary/50 rounded px-4 py-3 text-center">
              <p className="text-body-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportMarkets;
