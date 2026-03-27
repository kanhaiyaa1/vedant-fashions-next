import { useEffect } from "react";
import { getAllPagePaths } from "@/data/seo-pages";
import { products } from "@/data/products";
import { knowledgeHubArticles } from "@/data/knowledge-hub";
import { locales, defaultLocale, type Locale } from "@/i18n/types";

const BASE_URL = "https://www.vedantfashion.com";

// Priority and changefreq by cluster
const clusterConfig: Record<string, { priority: string; changefreq: string }> = {
  main: { priority: "1.0", changefreq: "weekly" },
  products: { priority: "0.9", changefreq: "weekly" },
  category: { priority: "0.8", changefreq: "monthly" },
  country: { priority: "0.7", changefreq: "monthly" },
  fabric: { priority: "0.7", changefreq: "monthly" },
  services: { priority: "0.8", changefreq: "monthly" },
  resources: { priority: "0.6", changefreq: "monthly" },
  logistics: { priority: "0.6", changefreq: "monthly" },
  manufacturing: { priority: "0.7", changefreq: "monthly" },
  compliance: { priority: "0.7", changefreq: "monthly" },
  buyer: { priority: "0.6", changefreq: "monthly" },
  "knowledge-hub": { priority: "0.7", changefreq: "monthly" },
  catalog: { priority: "0.8", changefreq: "weekly" },
};

function getConfig(cluster: string) {
  return clusterConfig[cluster] || { priority: "0.5", changefreq: "monthly" };
}

function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

function generateHreflangEntries(path: string): string {
  const entries = locales.map(
    (loc) => `      <xhtml:link rel="alternate" hreflang="${loc.code}" href="${BASE_URL}${localePath(path, loc.code)}" />`
  );
  entries.push(`      <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${path}" />`);
  return entries.join("\n");
}

function generateUrlEntry(path: string, priority: string, changefreq: string, lastmod: string): string {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${generateHreflangEntries(path)}
  </url>`;
}

function generateSitemapXml(urls: { path: string; priority: string; changefreq: string }[]): string {
  const lastmod = new Date().toISOString().split("T")[0];
  const entries = urls.map((u) => generateUrlEntry(u.path, u.priority, u.changefreq, lastmod));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`;
}

// ── Individual sitemaps ────────────────────────────────────────────

export function generateMainSitemap(): string {
  const pages = getAllPagePaths().filter((p) =>
    ["main", "services", "resources"].includes(p.cluster)
  );
  return generateSitemapXml(
    pages.map((p) => ({ path: p.path, ...getConfig(p.cluster) }))
  );
}

export function generateProductsSitemap(): string {
  const pages = getAllPagePaths().filter((p) =>
    ["products", "category"].includes(p.cluster)
  );
  return generateSitemapXml(
    pages.map((p) => ({ path: p.path, ...getConfig(p.cluster) }))
  );
}

export function generateCatalogSitemap(): string {
  const urls = [
    { path: "/catalog", priority: "0.9", changefreq: "weekly" },
    ...products.map((p) => ({
      path: `/catalog/${p.slug}`,
      priority: "0.7",
      changefreq: "monthly" as string,
    })),
  ];
  return generateSitemapXml(urls);
}

export function generateCountrySitemap(): string {
  const pages = getAllPagePaths().filter((p) => p.cluster === "country");
  return generateSitemapXml(
    pages.map((p) => ({ path: p.path, ...getConfig("country") }))
  );
}

export function generateFabricSitemap(): string {
  const pages = getAllPagePaths().filter((p) => p.cluster === "fabric");
  return generateSitemapXml(
    pages.map((p) => ({ path: p.path, ...getConfig("fabric") }))
  );
}

export function generateKnowledgeSitemap(): string {
  const urls = [
    { path: "/knowledge", priority: "0.8", changefreq: "weekly" },
    ...knowledgeHubArticles.map((a) => ({
      path: `/knowledge/${a.slug}`,
      priority: "0.7",
      changefreq: "monthly" as string,
    })),
  ];
  // Also add knowledge pages from seo-pages
  const knowledgePages = getAllPagePaths().filter((p) =>
    ["manufacturing", "compliance", "logistics", "buyer"].includes(p.cluster)
  );
  knowledgePages.forEach((p) => {
    urls.push({ path: p.path, ...getConfig(p.cluster) });
  });
  return generateSitemapXml(urls);
}

export function generateLocaleSitemaps(): Record<string, string> {
  const allPages = getAllPagePaths();
  const catalogUrls = products.map((p) => ({
    path: `/catalog/${p.slug}`,
    cluster: "catalog",
  }));
  const knowledgeUrls = knowledgeHubArticles.map((a) => ({
    path: `/knowledge/${a.slug}`,
    cluster: "knowledge-hub",
  }));
  const allUrls = [...allPages, ...catalogUrls, ...knowledgeUrls];

  const sitemaps: Record<string, string> = {};

  locales
    .filter((l) => l.code !== defaultLocale)
    .forEach((loc) => {
      const urls = allUrls.map((u) => ({
        path: localePath(u.path, loc.code),
        ...getConfig(u.cluster),
      }));
      sitemaps[loc.code] = generateSitemapXml(urls);
    });

  return sitemaps;
}

// ── Sitemap Index ──────────────────────────────────────────────────

export function generateSitemapIndex(): string {
  const lastmod = new Date().toISOString().split("T")[0];
  const sitemaps = [
    "sitemap-main.xml",
    "sitemap-products.xml",
    "sitemap-catalog.xml",
    "sitemap-countries.xml",
    "sitemap-fabrics.xml",
    "sitemap-knowledge.xml",
    ...locales
      .filter((l) => l.code !== defaultLocale)
      .map((l) => `sitemap-${l.code}.xml`),
  ];

  const entries = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${BASE_URL}/${s}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

// ── All sitemaps as a map ──────────────────────────────────────────

export function getAllSitemaps(): Record<string, string> {
  const sitemaps: Record<string, string> = {
    "sitemap.xml": generateSitemapIndex(),
    "sitemap-main.xml": generateMainSitemap(),
    "sitemap-products.xml": generateProductsSitemap(),
    "sitemap-catalog.xml": generateCatalogSitemap(),
    "sitemap-countries.xml": generateCountrySitemap(),
    "sitemap-fabrics.xml": generateFabricSitemap(),
    "sitemap-knowledge.xml": generateKnowledgeSitemap(),
  };

  const localeMaps = generateLocaleSitemaps();
  Object.entries(localeMaps).forEach(([code, xml]) => {
    sitemaps[`sitemap-${code}.xml`] = xml;
  });

  return sitemaps;
}
