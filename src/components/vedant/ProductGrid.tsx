"use client";
import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { PRODUCT_IMAGES } from "@/data/images";

const CARD_IMAGES = [
  PRODUCT_IMAGES.blouses[0],
  PRODUCT_IMAGES.dresses[0],
  PRODUCT_IMAGES.tops[0],
  PRODUCT_IMAGES.skirts[0],
  PRODUCT_IMAGES.blouses[1],
  PRODUCT_IMAGES.dresses[1],
  PRODUCT_IMAGES.tops[1],
  PRODUCT_IMAGES.blouses[2],
];

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

const products = [
  { name: "Milano Twill", category: "Shirting", composition: "100% Organic Cotton", weight: "120 GSM", moq: "500 m", certifications: [] },
  { name: "Nordic Linen", category: "Suiting", composition: "55% Linen, 45% Tencel™", weight: "180 GSM", moq: "300 m", certifications: [] },
  { name: "Alpine Fleece", category: "Knits", composition: "70% Recycled Poly, 30% Organic Cotton", weight: "280 GSM", moq: "800 m", certifications: [] },
  { name: "Riviera Chambray", category: "Denim", composition: "100% Organic Cotton", weight: "150 GSM", moq: "500 m", certifications: [] },
  { name: "Côte Satin", category: "Eveningwear", composition: "100% Tencel™ Lyocell", weight: "95 GSM", moq: "200 m", certifications: [] },
  { name: "Fjord Jersey", category: "Knits", composition: "95% Organic Cotton, 5% Elastane", weight: "200 GSM", moq: "600 m", certifications: [] },
  { name: "Berlin Canvas", category: "Outerwear", composition: "100% Recycled Cotton", weight: "320 GSM", moq: "400 m", certifications: [] },
  { name: "Provence Voile", category: "Shirting", composition: "100% Organic Cotton", weight: "80 GSM", moq: "500 m", certifications: [] },
];

const cardDelay = ["", "fade-up-delay-1", "fade-up-delay-2", "fade-up-delay-3", "fade-up-delay-4", "fade-up-delay-4", "fade-up-delay-4", "fade-up-delay-4"];

interface DbProduct {
  id: string;
  name: string;
  category: string;
  moq?: number | null;
  fob_price?: string | null;
  certifications?: string[] | null;
  description?: string | null;
}

interface ProductGridProps {
  dbProducts?: DbProduct[];
}

const ProductGrid = ({ dbProducts }: ProductGridProps = {}) => {
  const heading = useInView(0.2);
  const grid = useInView(0.1);

  const displayProducts = (dbProducts && dbProducts.length > 0)
    ? dbProducts.map((p) => ({
        name: p.name,
        category: p.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        composition: p.description ?? "—",
        weight: "—",
        moq: p.moq ? `${p.moq} pcs` : "300 pcs",
        certifications: p.certifications ?? [],
      }))
    : products;

  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <div ref={heading.ref} className={`text-center mb-16 space-y-4 fade-up ${heading.inView ? "visible" : ""}`}>
          <p className="text-subheading text-gold">Our Collections</p>
          <h2 className="text-display-md text-foreground">Premium Sustainable Fabrics</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of garments.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Shirting", "Suiting", "Knits"].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-colors rounded-sm ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div ref={grid.ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 stagger-children">
          {displayProducts.map((product, i) => (
            <div key={product.name} className={`fade-up hover-card hover-zoom rounded ${cardDelay[i] ?? "fade-up-delay-4"} ${grid.inView ? "visible" : ""}`}>
              <ProductCard {...product} image={CARD_IMAGES[i % CARD_IMAGES.length]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
