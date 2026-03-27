"use client";
import { useState } from "react";

interface ProductDetailGalleryProps {
  productName: string;
  images: string[];
}

const placeholders = [
  "Front View",
  "Back View",
  "Detail Close-up",
  "Fabric Texture",
  "On Model",
  "Flat Lay",
];

const ProductDetailGallery = ({ productName, images }: ProductDetailGalleryProps) => {
  const displayImages = images.length > 0 ? images : placeholders;
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[3/4] bg-gradient-to-br from-accent/60 via-secondary to-accent rounded overflow-hidden flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 border border-primary/20 rounded-full flex items-center justify-center">
            <span className="text-3xl font-display text-primary/40">{selected + 1}</span>
          </div>
          <p className="font-display text-lg text-foreground">{displayImages[selected]}</p>
          <p className="text-caption mt-1">{productName}</p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-2">
        {displayImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`aspect-square rounded overflow-hidden transition-all ${
              selected === i
                ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <span className="text-[9px] text-muted-foreground font-medium text-center leading-tight px-1">
                {typeof img === "string" && img.length < 20 ? img : `${i + 1}`}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailGallery;
