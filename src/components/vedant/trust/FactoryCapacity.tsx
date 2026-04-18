"use client";
import { useRef, useState, useEffect } from "react";
import { Factory, Users, Shirt, Clock, Scissors, Layers } from "lucide-react";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
};

const stats = [
  { icon: Factory, value: "3", label: "Production Units", detail: "Ahmedabad, Gujarat" },
  { icon: Shirt, value: "1.2M+", label: "Garments / Year", detail: "Across all categories" },
  { icon: Users, value: "1,800+", label: "Skilled Workers", detail: "80% women workforce" },
  { icon: Scissors, value: "24", label: "Production Lines", detail: "Automated cutting & sewing" },
  { icon: Layers, value: "200+", label: "Brands Served", detail: "Since 1998" },
  { icon: Clock, value: "6–8", label: "Weeks Lead Time", detail: "Standard production" },
];

const capabilities = [
  "Automated CAD pattern making & marker planning",
  "Gerber computerised cutting with ±1mm accuracy",
  "Single-needle & double-needle lockstitch lines",
  "In-house embroidery (Schiffli & computerised)",
  "Garment dyeing & enzyme washing plant",
  "Steam finishing & vacuum pressing",
  "In-house fabric testing laboratory",
  "Dedicated sampling room (150 samples/month)",
];

const delayClass = ["", "fade-up-delay-1", "fade-up-delay-2", "fade-up-delay-3", "fade-up-delay-4", "fade-up-delay-4"];

const FactoryCapacity = () => {
  const { ref, inView } = useInView();

  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Our Capacity</p>
          <h2 className="text-display-md text-foreground">Manufacturing at Scale</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Three vertically integrated facilities with end-to-end capabilities — from fabric sourcing to finished, packed garments ready for EU import.
          </p>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
          {stats.map(({ icon: Icon, value, label, detail }, i) => (
            <div
              key={label}
              className={`text-center p-5 border border-border rounded hover:shadow-md transition-shadow fade-up ${delayClass[i]} ${inView ? "visible" : ""}`}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-olive/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-olive" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">{value}</p>
              <p className="text-body-sm font-medium text-foreground mt-1">{label}</p>
              <p className="text-caption mt-0.5">{detail}</p>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/8 via-accent to-secondary rounded flex items-center justify-center">
            <div className="text-center p-8">
              <Factory className="w-12 h-12 text-primary/30 mx-auto mb-3" />
              <p className="font-display text-lg text-foreground">Factory Floor</p>
              <p className="text-caption mt-1">Ahmedabad, India</p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-foreground mb-6">Production Capabilities</h3>
            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-body-sm">
                  <span className="w-5 h-5 rounded-full bg-olive/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                  </span>
                  <span className="text-foreground">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryCapacity;
