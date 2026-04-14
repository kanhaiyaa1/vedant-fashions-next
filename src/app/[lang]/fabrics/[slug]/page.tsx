import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { fabricPages } from "@/data/seo-pages";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return fabricPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = fabricPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: `${page.name} fabric, ${page.name.toLowerCase()} garment manufacturing`,
    alternates: buildHreflangAlternates(`/fabrics/${page.slug}`),
  };
}

export default async function FabricEducationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = fabricPages.find((p) => p.slug === slug);

  if (!page) notFound();

  const otherFabrics = fabricPages.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero subtitle="Fabric Guide" title={`${page.name} Fabric`} description={page.heroDescription} />

      <ContentBlock subtitle="Technical Specifications" title={`${page.name} Properties`}>
        <div className="max-w-2xl mx-auto border border-border rounded overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {page.properties.map((prop) => (
                <tr key={prop.label} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-foreground bg-secondary w-1/3">{prop.label}</td>
                  <td className="p-4 text-muted-foreground">{prop.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Usage" title="Weave Types & Applications" bg="cream">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="space-y-3">
            <h3 className="font-display text-lg font-medium text-foreground">Available Weaves</h3>
            {page.weaveTypes.map((w) => (
              <div key={w} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-body-sm text-muted-foreground">{w}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-lg font-medium text-foreground">Garment Applications</h3>
            {page.applications.map((a) => (
              <div key={a} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                <span className="text-body-sm text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Care" title="Washing & Care Instructions">
        <div className="max-w-xl mx-auto space-y-3">
          {page.careInstructions.map((c) => (
            <div key={c} className="flex items-start gap-3 bg-card border border-border rounded p-4">
              <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span className="text-body text-muted-foreground">{c}</span>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Sustainability" title={`${page.name} & the Environment`} bg="dark">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-base md:text-lg text-primary-foreground/80">{page.sustainability}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {page.certifications.map((cert) => (
              <Badge key={cert} className="bg-primary-foreground/10 text-primary-foreground border-0 text-xs px-4 py-2">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Sourcing" title={`Where We Source ${page.name}`} bg="cream">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded p-8">
          <p className="text-body text-muted-foreground">{page.sourcing}</p>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Explore" title="Other Fabrics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherFabrics.map((f) => (
            <Link key={f.slug} href={`/fabrics/${f.slug}`} className="bg-card border border-border rounded p-4 hover:shadow-md transition-shadow text-center">
              <p className="font-display text-sm font-medium text-foreground">{f.name}</p>
              <p className="text-caption mt-1">{f.gsmRange}</p>
            </Link>
          ))}
        </div>
      </ContentBlock>

      <CTASection
        variant="dark"
        title={`Request ${page.name} Swatches`}
        description={`Free swatch cards for our ${page.name.toLowerCase()} range. Ships within 3 working days worldwide.`}
        buttonText="Order Swatches"
      />
    </div>
  );
}
