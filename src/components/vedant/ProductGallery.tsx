"use client";
import { useState } from "react";
import Image from "next/image";
import { PRODUCT_IMAGES } from "@/data/images";

const galleryImages = [
  { src: PRODUCT_IMAGES.blouses[4],  alt: "Cream bell sleeve blouse" },
  { src: PRODUCT_IMAGES.blouses[16], alt: "Pink embroidered blouse" },
  { src: PRODUCT_IMAGES.dresses[6],  alt: "Maroon floral midi dress" },
  { src: PRODUCT_IMAGES.dresses[2],  alt: "Dark floral kaftan" },
  { src: PRODUCT_IMAGES.tops[8],     alt: "Dark sequin blouse" },
  { src: PRODUCT_IMAGES.tops[22],    alt: "Red floral blouse" },
  { src: PRODUCT_IMAGES.skirts[0],   alt: "Red floral maxi skirt" },
  { src: PRODUCT_IMAGES.pants[1],    alt: "Wide leg pants" },
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

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 aspect-[16/10] rounded overflow-hidden relative bg-secondary">
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="lg:col-span-2 grid grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setSelected(i)}
                className={`aspect-square rounded overflow-hidden relative transition-all ${selected === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="15vw"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
