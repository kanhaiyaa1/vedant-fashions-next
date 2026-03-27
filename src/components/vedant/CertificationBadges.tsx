"use client";
import { Shield, Leaf, Recycle, Award, CheckCircle, Globe } from "lucide-react";

const certifications = [
  { icon: Shield, name: "OEKO-TEX® Standard 100", desc: "Tested for harmful substances across all product classes." },
  { icon: Leaf, name: "GOTS Certified", desc: "Global Organic Textile Standard for organic fibers and ecological processing." },
  { icon: Recycle, name: "GRS Certified", desc: "Global Recycled Standard for recycled content and responsible production." },
  { icon: Award, name: "ISO 9001:2015", desc: "Quality management systems meeting international standards." },
  { icon: CheckCircle, name: "REACH Compliant", desc: "Full compliance with EU chemical safety regulations." },
  { icon: Globe, name: "SEDEX / SMETA", desc: "Ethical supply chain audits covering labor, health and environment." },
];

const CertificationBadges = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Trust & Compliance</p>
          <h2 className="text-display-md text-foreground">Certifications & Standards</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Every fabric we produce meets the highest European and international standards for quality, 
            sustainability, and ethical manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="bg-card border border-border rounded p-6 md:p-8 text-center space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-olive/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-olive" />
              </div>
              <h3 className="font-display text-base md:text-lg font-medium text-foreground">{name}</h3>
              <p className="text-body-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
