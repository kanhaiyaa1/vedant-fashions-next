"use client";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/images";
const testimonials = [
  {
    quote: "Vedant Fashion has been a reliable supplier for us. The quality of their organic cotton is unmatched and their delivery timelines are impeccable.",
    author: "Aisha Al Mansoori",
    role: "Head of Procurement",
    company: "Al Noor Trading, Dubai",
  },
  {
    quote: "Their fabric sourcing and quality control gave us confidence to launch our new line. The technical support team is knowledgeable and responsive.",
    author: "Elena Kowalska",
    role: "Creative Director",
    company: "Moda Wschod, Warsaw",
  },
  {
    quote: "We've reduced our supply chain complexity since partnering with Vedant Fashion. One supplier for all our sourcing needs.",
    author: "Dmitri Sokolov",
    role: "COO",
    company: "Tekstil Group, Moscow",
  },
];

const Testimonials = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/60">
            Trusted Partners
          </p>
          <h2 className="text-display-md">What Our Partners Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="space-y-6 p-6 md:p-8 border border-primary-foreground/10 rounded">
              <div className="font-display text-3xl text-primary-foreground/30">"</div>
              <p className="text-sm md:text-base leading-relaxed text-primary-foreground/85">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-primary-foreground/10">
                <p className="font-display text-base font-medium">{t.author}</p>
                <p className="text-xs text-primary-foreground/60 mt-0.5">{t.role}</p>
                <p className="text-xs text-primary-foreground/40">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By */}
      <div className="flex items-center justify-center gap-8 flex-wrap mt-12 pt-10 border-t border-primary-foreground/10">
        {CLIENT_LOGOS.map((logo) => (
          <div key={logo.name} className="relative h-10 w-28 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
            <Image src={logo.src} alt={logo.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
