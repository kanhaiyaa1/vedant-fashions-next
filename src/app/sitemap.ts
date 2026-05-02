import type { MetadataRoute } from "next";
import { locales } from "@/i18n/types";
import { countryPages, knowledgePages } from "@/data/seo-pages";
import { knowledgeHubArticles } from "@/data/knowledge-hub";

const BASE_URL = "https://www.vedantfashion.com";

// Core pages — priority 0.8
const CORE_PATHS = [
  "/about",
  "/manufacturing",
  "/certifications",
  "/shipping",
  "/wholesale-faq",
  "/sustainability",
];

// Service pages — priority 0.7
const SERVICE_PATHS = [
  "/oem",
  "/private-label",
  "/fabric-sourcing",
  "/quality-control",
];

// Product category pages — priority 0.8
const PRODUCT_CATEGORY_PATHS = [
  "/products",
  "/products/woven-blouses",
  "/products/cotton-dresses",
  "/products/linen-shirts",
  "/products/resort-wear",
  "/products/coord-sets",
  "/products/kurtis",
  "/products/embroidery",
  "/products/sequin-occasion",
  "/products/bottoms",
];

// Low-priority utility pages — priority 0.6
const UTILITY_PATHS = [
  "/catalog",
  "/contact",
  "/inquiry",
  "/knowledge",
  "/size-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Homepage — all locales, priority 1.0
  for (const locale of locales) {
    urls.push({
      url: `${BASE_URL}/${locale.code}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    });
  }

  // Core pages — all locales, priority 0.8
  for (const locale of locales) {
    for (const path of CORE_PATHS) {
      urls.push({
        url: `${BASE_URL}/${locale.code}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Product category pages — all locales, priority 0.8
  for (const locale of locales) {
    for (const path of PRODUCT_CATEGORY_PATHS) {
      urls.push({
        url: `${BASE_URL}/${locale.code}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Service pages — all locales, priority 0.7
  for (const locale of locales) {
    for (const path of SERVICE_PATHS) {
      urls.push({
        url: `${BASE_URL}/${locale.code}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Country garment-manufacturer pages — all locales, priority 0.9
  for (const locale of locales) {
    for (const c of countryPages) {
      urls.push({
        url: `${BASE_URL}/${locale.code}/${c.slug}/garment-manufacturer`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  // Knowledge hub articles — all locales, priority 0.7
  for (const locale of locales) {
    for (const a of knowledgeHubArticles) {
      urls.push({
        url: `${BASE_URL}/${locale.code}/knowledge/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // SEO knowledge pages — en only (not translated), priority 0.7
  for (const p of knowledgePages) {
    urls.push({
      url: `${BASE_URL}/en/knowledge/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Utility pages — all locales, priority 0.6
  for (const locale of locales) {
    for (const path of UTILITY_PATHS) {
      urls.push({
        url: `${BASE_URL}/${locale.code}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return urls;
}
