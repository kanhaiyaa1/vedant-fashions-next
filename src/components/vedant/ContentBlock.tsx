"use client";
import { ReactNode } from "react";

interface ContentBlockProps {
  subtitle?: string;
  title: string;
  children: ReactNode;
  className?: string;
  bg?: "default" | "cream" | "dark";
}

const ContentBlock = ({ subtitle, title, children, className = "", bg = "default" }: ContentBlockProps) => {
  const bgClass = bg === "cream" ? "bg-cream" : bg === "dark" ? "bg-primary text-primary-foreground" : "bg-background";

  return (
    <section className={`section-spacing ${bgClass} ${className}`}>
      <div className="container-wide">
        {(subtitle || title) && (
          <div className="text-center mb-16 space-y-4">
            {subtitle && <p className={`text-subheading ${bg === "dark" ? "text-primary-foreground/50" : "text-gold"}`}>{subtitle}</p>}
            <h2 className={`text-display-md ${bg === "dark" ? "" : "text-foreground"}`}>{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentBlock;
