import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "dark";
}

const CTASection = ({
  title = "Ready to Partner with Us?",
  description = "Get in touch with our export team for samples, pricing, and production timelines tailored to your market.",
  buttonText = "Request a Quote",
  buttonLink = "/contact",
  variant = "default",
}: CTASectionProps) => {
  const isDark = variant === "dark";

  return (
    <section className={`section-spacing-sm ${isDark ? "bg-primary text-primary-foreground" : "bg-cream"}`}>
      <div className="container-tight text-center space-y-6">
        <h2 className={`text-display-sm ${isDark ? "" : "text-foreground"}`}>{title}</h2>
        <p className={`text-body-lg max-w-xl mx-auto ${isDark ? "opacity-80" : "text-muted-foreground"}`}>
          {description}
        </p>
        <Link href={buttonLink}>
          <Button
            size="lg"
            className={`uppercase text-xs tracking-widest px-8 h-12 mt-2 ${isDark ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
