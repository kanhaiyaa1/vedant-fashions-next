import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import Link from "next/link";
import { getAllPagePaths } from "@/data/seo-pages";
import { products } from "@/data/products";
import { knowledgeHubArticles } from "@/data/knowledge-hub";
import PageHero from "@/components/vedant/PageHero";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  void lang;
  return {
    title: "Sitemap — Vedant Fashion | All Pages",
    description: "Complete sitemap of all Vedant Fashion pages. Browse all product categories, export markets, fabric guides, and B2B resources.",
    alternates: buildHreflangAlternates("/sitemap-page"),
  };
}

const clusterLabels: Record<string, string> = {
  main: "Main Pages",
  products: "Product Pages",
  category: "Product Categories",
  country: "Export Markets",
  services: "Our Services",
  resources: "Buyer Resources",
  fabric: "Fabric Guides",
  manufacturing: "Manufacturing",
  compliance: "Compliance & Certifications",
  logistics: "Logistics & Shipping",
  buyer: "Buyer Guides",
  "knowledge-hub": "Knowledge Hub",
  catalog: "Product Catalogue",
};

const clusterOrder = [
  "main",
  "products",
  "category",
  "country",
  "services",
  "resources",
  "fabric",
  "manufacturing",
  "compliance",
  "logistics",
  "buyer",
  "knowledge-hub",
  "catalog",
];

const SitemapPage = () => {
  const basePages = getAllPagePaths();

  const productDetailPages = products.map((p) => ({
    path: `/products/${p.category}/${p.slug}`,
    title: p.name,
    cluster: "products",
  }));

  const catalogDetailPages = products.map((p) => ({
    path: `/catalog/${p.slug}`,
    title: p.name,
    cluster: "catalog",
  }));

  const knowledgeArticlePages = knowledgeHubArticles.map((a) => ({
    path: `/knowledge/${a.slug}`,
    title: a.title,
    cluster: "knowledge-hub",
  }));

  const allPages = [...basePages, ...productDetailPages, ...catalogDetailPages];

  // knowledge hub articles may already be in basePages via require(); deduplicate by path
  const seen = new Set(basePages.map((p) => p.path));
  knowledgeArticlePages.forEach((p) => {
    if (!seen.has(p.path)) allPages.push(p);
  });

  const totalPages = allPages.length;

  const grouped = allPages.reduce<Record<string, typeof allPages>>((acc, page) => {
    const key = page.cluster;
    if (!acc[key]) acc[key] = [];
    acc[key].push(page);
    return acc;
  }, {});

  // Sort alphabetically within each cluster
  Object.values(grouped).forEach((pages) =>
    pages.sort((a, b) => a.title.localeCompare(b.title))
  );

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="Sitemap"
        title={`${totalPages} Pages`}
        description="Complete index of all pages on the Vedant Fashion website. Browse by category, export market, fabric type, and more."
      />

      <section className="section-spacing bg-background">
        <div className="container-wide space-y-12">
          {clusterOrder.map((cluster) => {
            const pages = grouped[cluster];
            if (!pages || pages.length === 0) return null;
            return (
              <div key={cluster}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-display text-xl font-medium text-foreground">
                    {clusterLabels[cluster] ?? cluster}
                  </h2>
                  <span className="text-caption bg-secondary px-2 py-0.5 rounded text-xs">
                    {pages.length} {pages.length === 1 ? "page" : "pages"}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="group flex items-center justify-between text-body-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded hover:bg-secondary"
                    >
                      <span className="truncate">{page.title}</span>
                      <span className="text-caption text-muted-foreground/50 group-hover:text-muted-foreground ml-2 shrink-0 font-mono text-xs truncate max-w-[140px]">
                        {page.path}
                      </span>
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

export default SitemapPage;
