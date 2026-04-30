"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  category: string;
  composition: string;
  weight: string;
  moq: string;
  certifications: string[];
  image?: string;
}

const ProductCard = ({ name, category, composition, weight, moq, certifications, image }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] rounded overflow-hidden mb-4 relative bg-secondary">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-secondary" />
        )}
        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-charcoal/60 to-transparent">
          <span className="text-sm text-primary-foreground font-medium">View Details →</span>
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {certifications.map((cert) => (
            <Badge key={cert} className="bg-olive text-olive-foreground text-[10px] uppercase tracking-wider border-0 rounded-sm px-2 py-0.5">
              {cert}
            </Badge>
          ))}
        </div>
      </div>
      {/* Info */}
      <div className="space-y-1.5">
        <p className="text-caption uppercase tracking-wider">{category}</p>
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
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
