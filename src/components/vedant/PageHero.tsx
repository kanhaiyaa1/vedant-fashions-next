"use client";
import { FadeIn, FadeUp } from "@/components/vedant/animations";

interface PageHeroProps {
  subtitle: string;
  title: string;
  description: string;
  image?: string;
}

const PageHero = ({ subtitle, title, description }: PageHeroProps) => {
  return (
    <section className="relative pt-20 md:pt-24">
      <div className="bg-cream">
        <div className="container-wide section-spacing">
          <div className="max-w-3xl space-y-6">
            <FadeIn>
              <p className="text-subheading text-gold">{subtitle}</p>
            </FadeIn>
            <FadeUp delay={1}>
              <h1 className="text-display-xl text-charcoal">{title}</h1>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="text-body-lg text-muted-foreground max-w-2xl">{description}</p>
            </FadeUp>
            <FadeUp delay={3}>
              <div className="divider-gold !mx-0 !w-16 pt-2" />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
