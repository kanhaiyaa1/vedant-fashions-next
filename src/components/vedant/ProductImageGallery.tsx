"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: Props) {
  const [selected, setSelected] = useState(0);

  function prev() {
    setSelected((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setSelected((i) => (i + 1) % images.length);
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-secondary">
        <Image
          src={images[selected]}
          alt={`${productName} — image ${selected + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded pointer-events-none">
          {selected + 1} / {images.length}
        </div>
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex-none w-16 h-16 rounded overflow-hidden relative border-2 transition-colors snap-start ${
              i === selected
                ? "border-primary"
                : "border-transparent hover:border-border"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${productName} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
