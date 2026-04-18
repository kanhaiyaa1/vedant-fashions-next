"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { getContent } from "@/data/translations/page-content";
import { homeContent } from "@/data/translations/home";

interface HeroProps {
  lang?: string;
}

const Hero = ({ lang }: HeroProps) => {
  const params = useParams();
  const locale = lang ?? (typeof params?.lang === "string" ? params.lang : "en");
  const c = getContent(homeContent, locale);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a1a]">

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 animate-fade-in">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-[0.2em] font-medium"
          style={{ animation: "pulse 3s ease-in-out infinite" }}
        >
          B2B Wholesale Manufacturer · Mumbai, India
        </div>

        {/* H1 */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
          {c.hero.title}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
          {c.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 uppercase text-xs tracking-widest px-10 h-12 font-medium"
            asChild
          >
            <Link href={`/${locale}/catalog`}>Request Catalogue</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10 uppercase text-xs tracking-widest px-10 h-12 font-medium"
            asChild
          >
            <Link href={`/${locale}/inquiry`}>Send Enquiry</Link>
          </Button>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-0 pt-8 border-t border-white/10 w-full"
          style={{ animation: "fadeUp 0.8s ease 0.3s both" }}
        >
          {c.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && <div className="w-px h-10 bg-white/20 mx-6 md:mx-10" />}
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-semibold text-gold">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute bottom-8 left-6 z-10 bg-black/60 backdrop-blur-sm border border-white/10 rounded px-4 py-3">
        <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{c.hero.certBadge}</p>
        <p className="text-xs font-medium text-white">{c.hero.certBadgeDesc}</p>
      </div>

      {/* Floating card — bottom right */}
      <div className="absolute bottom-8 right-6 z-10 bg-black/60 backdrop-blur-sm border border-white/10 rounded px-4 py-3">
        <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{c.stats[0].label}</p>
        <p className="text-xs font-medium text-white">{c.stats[0].value}</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ChevronDown className="w-6 h-6" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
