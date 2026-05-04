"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductDetailGalleryProps {
  productName: string;
  images: string[];
}

const ProductDetailGallery = ({ productName, images }: ProductDetailGalleryProps) => {
  const [selected, setSelected] = useState(0);
  const hasImages = images.length > 0;

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[3/4] bg-secondary rounded overflow-hidden relative">
        {hasImages ? (
          <Image
            src={images[selected]}
            alt={`${productName} — image ${selected + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/60 via-secondary to-accent flex items-center justify-center">
            <p className="text-muted-foreground text-sm font-display">{productName}</p>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {hasImages && (
        <div className="grid grid-cols-6 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`aspect-square rounded overflow-hidden transition-all relative ${
                selected === i
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetailGallery;
