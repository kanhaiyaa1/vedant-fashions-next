"use client";
import { useRef, useState, useEffect } from "react";
import { Search, ClipboardCheck, Microscope, PackageCheck, ShieldCheck } from "lucide-react";

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

const steps = [
  {
    icon: ClipboardCheck,
    stage: "01",
    title: "Incoming Inspection",
    description: "100% fabric inspection using 4-point system. Shade lot verification, GSM testing, and shrinkage checks before cutting.",
    standard: "4-Point System / ASTM D5430",
  },
  {
    icon: Search,
    stage: "02",
    title: "In-line Inspection",
    description: "Continuous monitoring at every 5th operation. Stitch density, seam strength, and measurement audits throughout production.",
    standard: "AQL 2.5 / ISO 2859-1",
  },
  {
    icon: Microscope,
    stage: "03",
    title: "Lab Testing",
    description: "In-house lab for colorfastness, shrinkage, tensile strength, and pilling resistance. Third-party validation on request.",
    standard: "ISO 105 / ISO 12945 / ISO 13934",
  },
  {
    icon: PackageCheck,
    stage: "04",
    title: "Pre-shipment Audit",
    description: "Final AQL 2.5 inspection by independent QC team. Measurement accuracy, appearance, packaging, and labelling review.",
    standard: "AQL 2.5 Level II",
  },
  {
    icon: ShieldCheck,
    stage: "05",
    title: "Certification & Documentation",
    description: "GOTS / GRS transaction certificates, OEKO-TEX reports, and Certificate of Origin issued with every shipment.",
    standard: "GOTS / GRS / OEKO-TEX",
  },
];

const stepDelay = ["", "fade-up-delay-1", "fade-up-delay-2", "fade-up-delay-3", "fade-up-delay-4"];

const QualityProcess = () => {
  const heading = useInView(0.2);
  const stepsRef = useInView(0.1);

  return (
    <section className="section-spacing bg-cream">
      <div className="container-wide">
        <div ref={heading.ref} className={`text-center mb-16 space-y-4 fade-up ${heading.inView ? "visible" : ""}`}>
          <p className="text-subheading text-gold">Quality Assurance</p>
          <h2 className="text-display-md text-foreground">5-Stage Quality Control</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Every garment passes through five rigorous quality checkpoints. Our defect rate is below 1.5% — among the lowest in Indian garment manufacturing.
          </p>
        </div>

        <div ref={stepsRef.ref} className="space-y-0">
          {steps.map(({ icon: Icon, stage, title, description, standard }, i) => (
            <div
              key={stage}
              className={`relative flex gap-6 md:gap-10 fade-up ${stepDelay[i]} ${stepsRef.inView ? "visible" : ""}`}
            >
              {/* Connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 z-10"
                  style={stepsRef.inView ? { transform: "translateY(0)" } : { transform: "translateY(16px)" }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 md:pb-12">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-caption font-mono">STAGE {stage}</span>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground">{title}</h3>
                </div>
                <p className="text-body-sm text-muted-foreground max-w-lg">{description}</p>
                <p className="text-caption mt-2 font-mono">Standard: {standard}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
