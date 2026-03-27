import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categorySubPages } from "@/data/seo-pages";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Package, Clock, DollarSign, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ lang: string; category: string; subcategory: string }>;
}

export async function generateStaticParams() {
  return categorySubPages.map((p) => ({ category: p.category, subcategory: p.subcategory }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory } = await params;
  const page = categorySubPages.find((p) => p.category === category && p.subcategory === subcategory);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: `${page.subcategoryLabel} ${page.categoryLabel}, garment manufacturer India`,
    alternates: { canonical: `https://www.vedantfashion.com/en/products/${page.category}/${page.subcategory}` },
  };
}

export default async function CategorySubPage({ params }: PageProps) {
  const { category, subcategory } = await params;
  const page = categorySubPages.find((p) => p.category === category && p.subcategory === subcategory);

  if (!page) notFound();

  const relatedPages = categorySubPages
    .filter((p) => p.category === category && p.subcategory !== subcategory)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle={`${page.categoryLabel} — ${page.subcategoryLabel}`}
        title={page.title}
        description={page.heroDescription}
      />

      <ContentBlock subtitle="At a Glance" title={`${page.title} — Key Specifications`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Package, label: "MOQ", value: page.moq },
            { icon: Clock, label: "Lead Time", value: page.leadTime },
            { icon: DollarSign, label: "Price Range", value: page.priceRange },
            { icon: Award, label: "Certifications", value: page.certifications.slice(0, 2).join(", ") },
          ].map((spec) => (
            <div key={spec.label} className="bg-card border border-border rounded p-5 text-center space-y-2">
              <spec.icon className="w-5 h-5 text-olive mx-auto" />
              <p className="text-caption">{spec.label}</p>
              <p className="font-display text-lg font-medium text-foreground">{spec.value}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Why Choose Us" title={`${page.subcategoryLabel} ${page.categoryLabel} Features`} bg="cream">
        <div className="max-w-2xl mx-auto space-y-3">
          {page.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 bg-card border border-border rounded p-4">
              <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span className="text-body text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Materials" title="Fabric Specifications">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8 space-y-4">
          <p className="text-body text-muted-foreground">{page.fabricDetails}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {page.certifications.map((cert) => (
              <Badge key={cert} className="bg-olive text-olive-foreground border-0 text-[10px] uppercase tracking-wider rounded-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </ContentBlock>

      {relatedPages.length > 0 && (
        <ContentBlock subtitle="Related" title={`More ${page.categoryLabel}`} bg="cream">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {relatedPages.map((rp) => (
              <Link
                key={rp.subcategory}
                href={`/products/${rp.category}/${rp.subcategory}`}
                className="bg-card border border-border rounded p-4 hover:shadow-md transition-shadow text-center"
              >
                <p className="font-display text-sm font-medium text-foreground">{rp.subcategoryLabel} {rp.categoryLabel}</p>
                <p className="text-caption mt-1">MOQ: {rp.moq}</p>
              </Link>
            ))}
          </div>
        </ContentBlock>
      )}

      <CTASection
        variant="dark"
        title={`Inquire About ${page.title}`}
        description={`Get pricing, samples, and production timeline for ${page.title.toLowerCase()}. Response within 48 hours.`}
        buttonText="Request Quote"
      />
    </div>
  );
}
