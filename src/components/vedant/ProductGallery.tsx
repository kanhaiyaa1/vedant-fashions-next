"use client";
import { useState } from "react";

const galleryImages = [
  { id: 1, label: "Organic Cotton Rolls", aspect: "aspect-[4/3]" },
  { id: 2, label: "Weaving Detail", aspect: "aspect-square" },
  { id: 3, label: "Natural Dyes", aspect: "aspect-[3/4]" },
  { id: 4, label: "Finished Fabric", aspect: "aspect-[4/3]" },
  { id: 5, label: "Texture Close-up", aspect: "aspect-square" },
  { id: 6, label: "Production Line", aspect: "aspect-[3/4]" },
];

const ProductGallery = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="section-spacing bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Craftsmanship</p>
          <h2 className="text-display-md text-foreground">From Fiber to Fabric</h2>
        </div>

        {/* Main display */}
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 aspect-[16/10] bg-gradient-to-br from-primary/8 via-accent to-secondary rounded overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 border border-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-display text-primary/50">{selected + 1}</span>
              </div>
              <p className="font-display text-xl text-foreground">{galleryImages[selected].label}</p>
              <p className="text-caption mt-2">Click thumbnails to preview</p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setSelected(i)}
                className={`aspect-square rounded overflow-hidden transition-all ${selected === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100"}`}
              >
                <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-medium">{img.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
