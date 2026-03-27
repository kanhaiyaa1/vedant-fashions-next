import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import Link from "next/link";
import { knowledgeHubClusters, getArticlesByCluster } from "@/data/knowledge-hub";
import PageHero from "@/components/vedant/PageHero";
import { BookOpen, Clock } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Textile Knowledge Hub — Guides for Garment Buyers",
    description: "40+ in-depth articles on fabric types, garment manufacturing, sustainability, EU regulations, quality control, export logistics, and private label manufacturing.",
    keywords: "textile knowledge, garment manufacturing guide, fabric types, EU textile regulations, B2B fashion",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/knowledge`, ...buildHreflangAlternates("/knowledge") },
  };
}

const KnowledgeHubIndex = () => {
  return (
    <div className="min-h-screen bg-background font-body">

      <PageHero
        subtitle="Knowledge Hub"
        title="Textile & Garment Manufacturing Knowledge Hub"
        description="In-depth guides, articles, and resources for fashion buyers, brand owners, and sourcing professionals. 40+ articles covering every aspect of B2B garment manufacturing."
      />

      <section className="container-wide section-spacing">
        <div className="space-y-16">
          {knowledgeHubClusters.map((cluster) => {
            const articles = getArticlesByCluster(cluster.cluster);
            return (
              <div key={cluster.cluster}>
                <div className="mb-6">
                  <p className="text-subheading text-gold">{cluster.label}</p>
                  <p className="text-body text-muted-foreground mt-1">{cluster.description}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/knowledge/${article.slug}`}
                      className="group bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-gold" />
                        <span className="text-caption text-gold">{article.clusterLabel}</span>
                      </div>
                      <h3 className="font-display text-sm font-medium text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-3 text-caption text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} read</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHubIndex;
