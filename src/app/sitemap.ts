import type { MetadataRoute } from "next";
import { locales } from "@/i18n/types";
import { countryPages, fabricPages, categorySubPages, knowledgePages } from "@/data/seo-pages";
import { knowledgeHubArticles } from "@/data/knowledge-hub";
import { products } from "@/data/products";

const BASE_URL = "https://www.vedantfashion.com";

const staticPaths = [
  "",
  "/about",
  "/manufacturing",
  "/sustainability",
  "/certifications",
  "/quality-control",
  "/private-label",
  "/oem",
  "/fabric-sourcing",
  "/size-guide",
  "/wholesale-faq",
  "/shipping",
  "/contact",
  "/products",
  "/catalog",
  "/inquiry",
  "/knowledge",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Static pages for all locales
  for (const locale of locales) {
    for (const path of staticPaths) {
      urls.push({
        url: `${BASE_URL}/${locale.code}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  // Catalog product pages (en only for dynamic)
  for (const product of products) {
    urls.push({
      url: `${BASE_URL}/en/catalog/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Products category/subcategory pages
  for (const p of categorySubPages) {
    urls.push({
      url: `${BASE_URL}/en/products/${p.category}/${p.subcategory}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Fabric education pages
  for (const p of fabricPages) {
    urls.push({
      url: `${BASE_URL}/en/fabrics/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Knowledge hub articles
  for (const a of knowledgeHubArticles) {
    urls.push({
      url: `${BASE_URL}/en/knowledge/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // SEO knowledge pages
  for (const p of knowledgePages) {
    urls.push({
      url: `${BASE_URL}/en/knowledge/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Country landing pages
  for (const c of countryPages) {
    urls.push({
      url: `${BASE_URL}/en/${c.slug}/garment-manufacturer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return urls;
}
