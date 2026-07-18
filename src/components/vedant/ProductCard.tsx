"use client";
import Image from "next/image";
import { getCategoryImages } from "@/data/images";

interface ProductCardProps {
  name: string;
  category: string;
  composition: string;
  weight: string;
  moq: string;
  certifications: string[];
  image?: string;
}

const ProductCard = ({ name, category, composition, weight, moq, image }: ProductCardProps) => {
  const cardImage = image ?? getCategoryImages(category)[0];
  return (
    <div className="group cursor-pointer hover-card rounded">
      <div className="aspect-[3/4] rounded overflow-hidden mb-4 relative bg-secondary hover-zoom">
        {cardImage && (
          <Image
            src={cardImage}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-secondary/60" />
      </div>
      {/* Info */}
      <div className="space-y-1.5">
        <p className="text-caption uppercase tracking-wider">{category}</p>
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors hover-gold inline-block">
          {name}
        </h3>
        <p className="text-body-sm text-muted-foreground">{composition}</p>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-caption">{weight}</span>
          <span className="text-caption">MOQ: {moq}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
