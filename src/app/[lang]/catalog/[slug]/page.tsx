import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Package, Shield, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailGallery from "@/components/vedant/catalog/ProductDetailGallery";
import ProductSpecifications from "@/components/vedant/catalog/ProductSpecifications";
import ProductInquiryForm from "@/components/vedant/catalog/ProductInquiryForm";
import CatalogProductCard from "@/components/vedant/catalog/CatalogProductCard";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import buildHreflangAlternates from "@/i18n/HreflangTags";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    keywords: product.tags.join(", "),
    openGraph: { type: "website", title: product.name, description: product.shortDescription },
    alternates: buildHreflangAlternates(`/catalog/${product.slug}`),
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-body">
      <ProductSchema
        name={product.name}
        description={product.description}
        sku={product.id}
        category={product.category}
        url={`/catalog/${product.slug}`}
        certifications={product.certifications}
        moq={product.moq}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Catalogue", url: "/catalog" },
        { name: product.category.replace("-", " "), url: `/catalog?category=${product.category}` },
        { name: product.name, url: `/catalog/${product.slug}` },
      ]} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border">
        <div className="container-wide py-4">
          <div className="flex items-center gap-2 text-caption">
            <Link href="/catalog" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              Catalogue
            </Link>
            <span>/</span>
            <Link href={`/catalog?category=${product.category}`} className="hover:text-foreground transition-colors capitalize">
              {product.category.replace("-", " ")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product hero */}
      <section className="section-spacing-sm">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <ProductDetailGallery productName={product.name} images={product.galleryImages} />
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-subheading text-gold capitalize">{product.category.replace("-", " ")}</p>
                <h1 className="text-display-sm text-foreground">{product.name}</h1>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} className="bg-olive text-olive-foreground border-0 rounded-sm text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-body text-muted-foreground">{product.description}</p>
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                <div className="flex items-start gap-3">
                  <Package className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-caption">Min. Order</p>
                    <p className="text-body-sm font-medium text-foreground">{product.moq}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-caption">Lead Time</p>
                    <p className="text-body-sm font-medium text-foreground">{product.leadTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-caption">Certifications</p>
                    <p className="text-body-sm font-medium text-foreground">{product.certifications.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-caption">Export</p>
                    <p className="text-body-sm font-medium text-foreground">EU / UK / RU ready</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-subheading mb-3">Features</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span key={f} className="text-body-sm bg-secondary px-3 py-1 rounded-sm">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-spacing-sm bg-cream">
        <div className="container-wide">
          <div className="mb-8">
            <p className="text-subheading text-gold">Technical Details</p>
            <h2 className="text-display-sm text-foreground mt-2">Specifications</h2>
          </div>
          <ProductSpecifications product={product} />
        </div>
      </section>

      {/* Inquiry form */}
      <section className="section-spacing-sm">
        <div className="container-tight">
          <ProductInquiryForm productName={product.name} productId={product.id} />
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section-spacing-sm bg-cream">
          <div className="container-wide">
            <div className="mb-8">
              <p className="text-subheading text-gold">More from this collection</p>
              <h2 className="text-display-sm text-foreground mt-2">Related Products</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {related.map((p) => (
                <CatalogProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
