import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import Link from "next/link";
import { getAllPagePaths } from "@/data/seo-pages";
import PageHero from "@/components/vedant/PageHero";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Sitemap — Vedant Fashion | All Pages",
    description: "Complete sitemap of all Vedant Fashion pages. Browse all product categories, export markets, fabric guides, and B2B resources.",
    alternates: buildHreflangAlternates("/sitemap"),
  };
}

const clusterLabels: Record<string, string> = {
  main: "Main Pages",
  products: "Product Pages",
  category: "Product Categories",
  country: "Export Markets",
  fabric: "Fabric Guides",
  services: "Services",
  resources: "Buyer Resources",
  manufacturing: "Manufacturing Knowledge",
  compliance: "Compliance & Certifications",
  logistics: "Logistics & Shipping",
  buyer: "Buyer Resources",
};

const SitemapPage = () => {
  const allPages = getAllPagePaths();
  const totalPages = allPages.length;

  const grouped = allPages.reduce<Record<string, typeof allPages>>((acc, page) => {
    const key = page.cluster;
    if (!acc[key]) acc[key] = [];
    acc[key].push(page);
    return acc;
  }, {});

  const clusterOrder = ["main", "products", "category", "country", "fabric", "services", "manufacturing", "compliance", "logistics", "buyer", "resources"];

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
            if (!pages) return null;
            return (
              <div key={cluster}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-display text-xl font-medium text-foreground">
                    {clusterLabels[cluster] || cluster}
                  </h2>
                  <span className="text-caption bg-secondary px-2 py-0.5 rounded text-xs">
                    {pages.length}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="text-body-sm text-muted-foreground hover:text-foreground transition-colors py-1 px-2 rounded hover:bg-secondary"
                    >
                      {page.title}
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
