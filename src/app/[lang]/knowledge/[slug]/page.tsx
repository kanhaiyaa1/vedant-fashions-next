import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticleBySlug, knowledgeHubArticles } from "@/data/knowledge-hub";
import { knowledgePages } from "@/data/seo-pages";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Clock, BookOpen, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const articleSlugs = knowledgeHubArticles.map((a) => ({ slug: a.slug }));
  const pageSlugs = knowledgePages.map((p) => ({ slug: p.slug }));
  return [...articleSlugs, ...pageSlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (article) {
    return {
      title: article.metaTitle,
      description: article.metaDescription,
      keywords: `${article.title}, garment manufacturing, B2B textile`,
      alternates: { canonical: `https://www.vedantfashion.com/en/knowledge/${slug}` },
    };
  }
  const page = knowledgePages.find((p) => p.slug === slug);
  if (page) {
    return {
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: `${page.title}, garment manufacturing, B2B textile`,
      alternates: { canonical: `https://www.vedantfashion.com/en/knowledge/${slug}` },
    };
  }
  return {};
}

// ── Hub Article renderer ─────────────────────────────────────────────────────

function HubArticlePage({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const relatedArticles = article.relatedSlugs
    .map((s) => knowledgeHubArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const ctaMap: Record<string, { title: string; desc: string; btn: string }> = {
    "fabric-types": { title: "Need Fabric Samples?", desc: "Request swatch cards for any fabric in our range.", btn: "Request Swatches" },
    "garment-manufacturing": { title: "Ready to Start Manufacturing?", desc: "Get a detailed quote and production timeline within 48 hours.", btn: "Get Quote" },
    sustainability: { title: "Looking for Sustainable Manufacturing?", desc: "GOTS, OEKO-TEX, and GRS certified production.", btn: "Discuss Sustainability" },
    "eu-regulations": { title: "Need Compliance Support?", desc: "Full certification documentation for every shipment.", btn: "Contact Compliance Team" },
    "quality-control": { title: "Quality Is Our Priority", desc: "AQL 2.5 inspection with transparent QC reporting.", btn: "Learn About Our QC" },
    "export-logistics": { title: "Need a Shipping Quote?", desc: "FOB, CIF, and DDP pricing. Response within 24 hours.", btn: "Get Shipping Quote" },
    "private-label": { title: "Launch Your Private Label Brand", desc: "End-to-end private label service.", btn: "Start Your Brand" },
  };
  const cta = ctaMap[article.cluster] || ctaMap["garment-manufacturing"];

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero subtitle={article.clusterLabel} title={article.title} description={article.heroDescription} />

      <div className="container-wide pt-6 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/knowledge" className="flex items-center gap-2 text-body-sm text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Hub
          </Link>
          <div className="flex items-center gap-1 text-body-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} read</span>
          </div>
        </div>
      </div>

      {article.sections.map((section, i) => (
        <ContentBlock key={section.heading} subtitle={`Section ${i + 1}`} title={section.heading} bg={i % 2 === 1 ? "cream" : "default"}>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-body text-muted-foreground">{section.content}</p>
            {section.bullets && (
              <div className="space-y-2 pt-2">
                {section.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span className="text-body-sm text-muted-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ContentBlock>
      ))}

      {relatedArticles.length > 0 && (
        <ContentBlock subtitle="Related Articles" title="Further Reading" bg="cream">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {relatedArticles.map((ra) => ra && (
              <Link key={ra.slug} href={`/knowledge/${ra.slug}`} className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-3 h-3 text-gold" />
                  <span className="text-caption text-gold">{ra.clusterLabel}</span>
                </div>
                <p className="font-display text-sm font-medium text-foreground">{ra.title}</p>
                <div className="flex items-center gap-1 mt-2 text-caption text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{ra.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </ContentBlock>
      )}

      <CTASection variant="dark" title={cta.title} description={cta.desc} buttonText={cta.btn} />
    </div>
  );
}

// ── SEO Knowledge Page renderer ──────────────────────────────────────────────

function SeoKnowledgePage({ slug }: { slug: string }) {
  const page = knowledgePages.find((p) => p.slug === slug);
  if (!page) return null;

  const relatedPages = knowledgePages
    .filter((p) => p.cluster === page.cluster && p.slug !== slug)
    .slice(0, 4);

  const ctaMap: Record<string, { title: string; desc: string; btn: string }> = {
    manufacturing: { title: "Discuss Your Manufacturing Needs", desc: "Get a detailed quote and production timeline within 48 hours.", btn: "Get Quote" },
    compliance: { title: "Need Certification Documentation?", desc: "Full certification copies for every order.", btn: "Request Docs" },
    logistics: { title: "Need a Shipping Quote?", desc: "FOB, CIF, and DDP pricing. Response within 24 hours.", btn: "Get Shipping Quote" },
    buyer: { title: "Ready to Start Your First Order?", desc: "Our export team will guide you through every step.", btn: "Contact Us" },
  };
  const cta = ctaMap[page.cluster] || ctaMap.manufacturing;

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero subtitle={page.subtitle} title={page.title} description={page.heroDescription} />

      {page.sections.map((section, i) => (
        <ContentBlock key={section.heading} subtitle={`Section ${i + 1}`} title={section.heading} bg={i % 2 === 1 ? "cream" : "default"}>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-body text-muted-foreground">{section.content}</p>
            {section.bullets && (
              <div className="space-y-2 pt-2">
                {section.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span className="text-body-sm text-muted-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ContentBlock>
      ))}

      {relatedPages.length > 0 && (
        <ContentBlock subtitle="Related Guides" title="Further Reading" bg="cream">
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {relatedPages.map((rp) => (
              <Link key={rp.slug} href={`/knowledge/${rp.slug}`} className="bg-card border border-border rounded p-5 hover:shadow-md transition-shadow">
                <p className="text-caption text-gold">{rp.subtitle}</p>
                <p className="font-display text-sm font-medium text-foreground mt-1">{rp.title}</p>
              </Link>
            ))}
          </div>
        </ContentBlock>
      )}

      <CTASection variant="dark" title={cta.title} description={cta.desc} buttonText={cta.btn} />
    </div>
  );
}

// ── Page entry ───────────────────────────────────────────────────────────────

export default async function KnowledgeSlugPage({ params }: PageProps) {
  const { slug } = await params;

  if (getArticleBySlug(slug)) return <HubArticlePage slug={slug} />;
  if (knowledgePages.find((p) => p.slug === slug)) return <SeoKnowledgePage slug={slug} />;

  notFound();
}
