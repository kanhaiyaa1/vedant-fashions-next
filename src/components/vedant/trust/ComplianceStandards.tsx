"use client";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, FlaskConical, Scale, Truck, Globe } from "lucide-react";

const standards = [
  {
    icon: Shield,
    category: "Chemical Safety",
    items: [
      { name: "REACH Regulation (EC 1907/2006)", status: "Compliant" },
      { name: "AZO-free dyes (EN 14362)", status: "Certified" },
      { name: "Formaldehyde < 75 ppm (Category II)", status: "Tested" },
      { name: "Heavy metals within EU limits", status: "Tested" },
      { name: "Phthalates-free (for childrenswear)", status: "Available" },
    ],
  },
  {
    icon: FileText,
    category: "Textile Labelling",
    items: [
      { name: "EU Regulation No. 1007/2011", status: "Compliant" },
      { name: "Fibre composition labelling (all EU languages)", status: "Included" },
      { name: "Country of origin marking", status: "Included" },
      { name: "Care labelling (ISO 3758 / ASTM D5489)", status: "Included" },
    ],
  },
  {
    icon: FlaskConical,
    category: "Testing & Quality",
    items: [
      { name: "ISO 13934-1 (Tensile strength)", status: "Tested" },
      { name: "ISO 12947-2 (Abrasion resistance)", status: "Tested" },
      { name: "ISO 105-C06 (Colorfastness to washing)", status: "Tested" },
      { name: "ISO 12945-2 (Pilling resistance)", status: "Tested" },
      { name: "ISO 3759 (Dimensional change)", status: "Tested" },
    ],
  },
  {
    icon: Scale,
    category: "Social Compliance",
    items: [
      { name: "SEDEX / SMETA 4-pillar audit", status: "Audited" },
      { name: "SA8000 (Social Accountability)", status: "Certified" },
      { name: "ILO Core Conventions", status: "Compliant" },
      { name: "Living wage commitment", status: "Verified" },
    ],
  },
  {
    icon: Truck,
    category: "Trade & Customs",
    items: [
      { name: "Certificate of Origin (GSP Form A)", status: "Issued" },
      { name: "EUR.1 movement certificates (where applicable)", status: "Available" },
      { name: "Correct HS code classification", status: "Verified" },
      { name: "CPSIA compliant (US market)", status: "Available" },
    ],
  },
  {
    icon: Globe,
    category: "Environmental",
    items: [
      { name: "GOTS (Global Organic Textile Standard)", status: "Certified" },
      { name: "GRS (Global Recycled Standard)", status: "Certified" },
      { name: "OEKO-TEX® Standard 100", status: "Certified" },
      { name: "Zero liquid discharge (ZLD)", status: "Operational" },
    ],
  },
];

const statusColor = (status: string) => {
  if (status === "Certified" || status === "Compliant" || status === "Operational") return "bg-olive text-olive-foreground";
  if (status === "Tested" || status === "Audited" || status === "Verified" || status === "Issued") return "bg-primary text-primary-foreground";
  return "bg-secondary text-secondary-foreground";
};

const ComplianceStandards = () => {
  return (
    <section className="section-spacing bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Compliance</p>
          <h2 className="text-display-md text-foreground">Regulatory & Compliance Standards</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Full regulatory compliance for EU, UK, US, and Russian markets. Documentation provided with every shipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map(({ icon: Icon, category, items }) => (
            <div key={category} className="bg-card border border-border rounded overflow-hidden">
              <div className="bg-secondary/50 px-5 py-4 flex items-center gap-3 border-b border-border">
                <Icon className="w-4 h-4 text-primary" />
                <h3 className="font-display text-base font-medium text-foreground">{category}</h3>
              </div>
              <div className="p-5 space-y-2.5">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3">
                    <p className="text-body-sm text-foreground leading-snug">{item.name}</p>
                    <Badge className={`${statusColor(item.status)} border-0 text-[10px] uppercase tracking-wider rounded-sm shrink-0`}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandards;
