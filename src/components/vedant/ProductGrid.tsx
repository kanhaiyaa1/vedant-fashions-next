"use client";
import ProductCard from "./ProductCard";

const products = [
  { name: "Milano Twill", category: "Shirting", composition: "100% Organic Cotton", weight: "120 GSM", moq: "500 m", certifications: ["GOTS", "OEKO-TEX"] },
  { name: "Nordic Linen", category: "Suiting", composition: "55% Linen, 45% Tencel™", weight: "180 GSM", moq: "300 m", certifications: ["GRS"] },
  { name: "Alpine Fleece", category: "Knits", composition: "70% Recycled Poly, 30% Organic Cotton", weight: "280 GSM", moq: "800 m", certifications: ["GRS", "OEKO-TEX"] },
  { name: "Riviera Chambray", category: "Denim", composition: "100% Organic Cotton", weight: "150 GSM", moq: "500 m", certifications: ["GOTS"] },
  { name: "Côte Satin", category: "Eveningwear", composition: "100% Tencel™ Lyocell", weight: "95 GSM", moq: "200 m", certifications: ["OEKO-TEX"] },
  { name: "Fjord Jersey", category: "Knits", composition: "95% Organic Cotton, 5% Elastane", weight: "200 GSM", moq: "600 m", certifications: ["GOTS", "GRS"] },
  { name: "Berlin Canvas", category: "Outerwear", composition: "100% Recycled Cotton", weight: "320 GSM", moq: "400 m", certifications: ["GRS"] },
  { name: "Provence Voile", category: "Shirting", composition: "100% Organic Cotton", weight: "80 GSM", moq: "500 m", certifications: ["GOTS", "OEKO-TEX"] },
];

const ProductGrid = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Our Collections</p>
          <h2 className="text-display-md text-foreground">Premium Sustainable Fabrics</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of certified organic, recycled, and responsibly sourced textiles.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Shirting", "Suiting", "Knits", "Denim", "Outerwear"].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-colors rounded-sm ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
