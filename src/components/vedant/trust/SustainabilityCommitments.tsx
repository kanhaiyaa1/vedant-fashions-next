"use client";
import { Leaf, Droplets, Recycle, Sun, TreePine, Heart } from "lucide-react";
import { FadeUp, StaggerChildren } from "@/components/vedant/animations";

const commitments = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    metric: "Growing",
    detail: "share of sustainable and recycled fabrics",
    description: "We're expanding our sourcing of sustainable and recycled fabrics from trusted mills across India as we grow.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    metric: "45%",
    detail: "reduction in water usage since 2019",
    description: "Closed-loop water recycling in dyeing. Zero liquid discharge (ZLD) plant operational since 2021.",
  },
  {
    icon: Recycle,
    title: "Recycled Materials",
    metric: "Growing",
    detail: "use of recycled inputs in production",
    description: "Increasing use of recycled polyester and regenerated cotton blends. Fabric offcuts reused wherever possible.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    metric: "60%",
    detail: "of factory power from solar",
    description: "800 kWp rooftop solar installation. On track for 100% renewable energy by 2027.",
  },
  {
    icon: TreePine,
    title: "Carbon Reduction",
    metric: "32%",
    detail: "lower carbon footprint vs. 2020 baseline",
    description: "Scope 1 & 2 emissions tracked. Science-based targets aligned with 1.5°C pathway.",
  },
  {
    icon: Heart,
    title: "Fair Labour",
    metric: "100%",
    detail: "living wage at our Mumbai facility",
    description: "A majority-women workforce with on-site skill development programs and a respectful working environment.",
  },
];

const SustainabilityCommitments = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="container-wide">
        <FadeUp className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/60">
            Sustainability
          </p>
          <h2 className="text-display-md">Our Commitments</h2>
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Sustainability isn't a marketing claim — it's how we manufacture. Measurable targets, third-party verification, transparent reporting.
          </p>
        </FadeUp>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" baseDelay={1}>
          {commitments.map(({ icon: Icon, title, metric, detail, description }) => (
            <div key={title} className="border border-primary-foreground/10 rounded p-6 md:p-8 space-y-4 hover:border-primary-foreground/20 transition-colors">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground/70" />
                </div>
                <p className="font-display text-3xl font-semibold">{metric}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium">{title}</h3>
                <p className="text-xs text-primary-foreground/50 mt-0.5">{detail}</p>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default SustainabilityCommitments;
