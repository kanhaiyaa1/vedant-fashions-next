"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-subheading text-gold">B2B Wholesale · Since 1998</p>
              <h1 className="text-display-xl text-charcoal">
                Sustainable Textiles for European Markets
              </h1>
            </div>
            <p className="text-body-lg text-muted-foreground max-w-lg">
              Premium organic and recycled fabrics crafted with precision. GOTS, OEKO-TEX® and GRS certified. 
              Trusted by 200+ brands across Germany, France, Italy and the Netherlands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs tracking-widest px-8 h-12" asChild>
                <Link href="/catalog">
                  Request Catalogue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="uppercase text-xs tracking-widest px-8 h-12 border-foreground/20 hover:bg-foreground/5" asChild>
                <Link href="/contact">Book a Showroom Visit</Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4 border-t border-border">
              <div>
                <p className="font-display text-3xl font-semibold text-charcoal">200+</p>
                <p className="text-caption">European Brands</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-display text-3xl font-semibold text-charcoal">15M+</p>
                <p className="text-caption">Meters Annually</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-display text-3xl font-semibold text-charcoal">27</p>
                <p className="text-caption">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 via-accent to-secondary rounded overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto border-2 border-primary/30 rounded-full flex items-center justify-center">
                    <span className="font-display text-2xl text-primary">VF</span>
                  </div>
                  <p className="text-subheading text-primary/60">SS 2026 Collection</p>
                  <p className="font-display text-xl text-primary/80">Now Available</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded shadow-lg p-4">
              <p className="text-xs font-medium text-olive uppercase tracking-wider">GOTS Certified</p>
              <p className="text-caption mt-0.5">100% Organic Cotton</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
