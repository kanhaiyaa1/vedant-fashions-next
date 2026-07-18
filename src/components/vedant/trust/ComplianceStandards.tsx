"use client";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, FlaskConical, Scale, Truck, Globe } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/vedant/animations";

const standards = [
  {
    icon: Shield,
    category: "Chemical Safety",
    items: [
      { name: "REACH Regulation (EC 1907/2006)", status: "Aligned" },
      { name: "AZO-free dyes (EN 14362)", status: "Practice" },
      { name: "Formaldehyde < 75 ppm (Category II)", status: "In-house Check" },
      { name: "Heavy metals within EU limits", status: "In-house Check" },
      { name: "Phthalates-free (for childrenswear)", status: "Available" },
    ],
  },
  {
    icon: FileText,
    category: "Textile Labelling",
    items: [
      { name: "EU Regulation No. 1007/2011", status: "Aligned" },
      { name: "Fibre composition labelling (all EU languages)", status: "Included" },
      { name: "Country of origin marking", status: "Included" },
      { name: "Care labelling (ISO 3758 / ASTM D5489)", status: "Included" },
    ],
  },
  {
    icon: FlaskConical,
    category: "Testing & Quality",
    items: [
      { name: "ISO 13934-1 (Tensile strength)", status: "In-house Test" },
      { name: "ISO 12947-2 (Abrasion resistance)", status: "In-house Test" },
      { name: "ISO 105-C06 (Colorfastness to washing)", status: "In-house Test" },
      { name: "ISO 12945-2 (Pilling resistance)", status: "In-house Test" },
      { name: "ISO 3759 (Dimensional change)", status: "In-house Test" },
    ],
  },
  {
    icon: Scale,
    category: "Social Practices",
    items: [
      { name: "Fair labour practices", status: "In Practice" },
      { name: "Health & safety at our facility", status: "In Practice" },
      { name: "ILO Core Conventions", status: "Aligned" },
      { name: "Living wage commitment", status: "In Practice" },
    ],
  },
  {
    icon: Truck,
    category: "Trade & Customs",
    items: [
      { name: "Certificate of Origin (GSP Form A)", status: "Issued" },
      { name: "EUR.1 movement certificates (where applicable)", status: "Available" },
      { name: "Correct HS code classification", status: "In Practice" },
      { name: "CPSIA compliant (US market)", status: "Available" },
    ],
  },
  {
    icon: Globe,
    category: "Environmental",
    items: [
      { name: "Sustainable fabric sourcing", status: "Growing" },
      { name: "Recycled fabric inputs", status: "Growing" },
      { name: "Responsible waste handling", status: "In Practice" },
      { name: "Formal environmental management", status: "Roadmap" },
    ],
  },
];

const statusColor = (status: string) => {
  if (status === "Aligned" || status === "In Practice" || status === "Included" || status === "Issued") return "bg-olive text-olive-foreground";
  if (status === "In-house Test" || status === "Growing" || status === "Available") return "bg-primary text-primary-foreground";
  return "bg-secondary text-secondary-foreground";
};

const ComplianceStandards = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="container-wide">
        <FadeUp className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Compliance</p>
          <h2 className="text-display-md text-foreground">Regulatory & Compliance Standards</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Full regulatory compliance for EU, UK, US, and Russian markets. Documentation provided with every shipment.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map(({ icon: Icon, category, items }, i) => {
            const Wrapper = i % 2 === 0 ? SlideLeft : SlideRight;
            const delayVal = (Math.min(i, 4) + 1) as 1 | 2 | 3 | 4 | 5;
            return (
              <Wrapper key={category} delay={delayVal}>
                <div className="bg-card border border-border rounded overflow-hidden h-full">
                  <div className="bg-secondary/50 px-5 py-4 flex items-center gap-3 border-b border-border">
                    <Icon className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-base font-medium text-foreground">{category}</h3>
                  </div>
                  <div className="p-5 space-y-2.5">
                    {items.map((item, j) => (
                      <div key={j} className="flex items-start justify-between gap-3">
                        <p className="text-body-sm text-foreground leading-snug">{item.name}</p>
                        <Badge className={`${statusColor(item.status)} border-0 text-[10px] uppercase tracking-wider rounded-sm shrink-0`}>
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandards;
