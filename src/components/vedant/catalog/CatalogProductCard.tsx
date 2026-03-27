import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface CatalogProductCardProps {
  product: Product;
}

const CatalogProductCard = ({ product }: CatalogProductCardProps) => {
  const primaryFabric = product.fabricOptions[0];

  return (
    <Link href={`/catalog/${product.slug}`} className="group block">
      {/* Image */}
      <div className="aspect-[3/4] bg-gradient-to-b from-accent/60 to-secondary rounded overflow-hidden mb-4 relative">
        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-charcoal/60 to-transparent">
          <span className="text-sm text-primary-foreground font-medium">View Details →</span>
        </div>
        {/* Cert badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.certifications.slice(0, 2).map((cert) => (
            <Badge key={cert} className="bg-olive text-olive-foreground text-[10px] uppercase tracking-wider border-0 rounded-sm px-2 py-0.5">
              {cert}
            </Badge>
          ))}
        </div>
        {/* Category label */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[10px] uppercase tracking-wider bg-background/80 backdrop-blur-sm px-2 py-1 rounded-sm text-foreground">
            {product.category.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p className="text-caption uppercase tracking-wider">{product.subcategory}</p>
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-body-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-caption">{primaryFabric?.gsm} GSM</span>
          <span className="text-caption">MOQ: {product.moq}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatalogProductCard;
