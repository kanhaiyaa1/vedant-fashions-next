import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import CatalogClient from "./CatalogClient";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Product Catalogue — Wholesale Sustainable Garments",
    description:
      "Browse our full range of GOTS and OEKO-TEX certified wholesale garments — woven blouses, cotton dresses, linen shirts, and resort wear. MOQ from 300 pcs.",
    keywords:
      "wholesale garments catalogue, GOTS certified clothing, organic cotton wholesale, linen shirts bulk, sustainable fashion manufacturer",
    alternates: buildHreflangAlternates("/catalog"),
  };
}

export default function CatalogPage() {
  return <CatalogClient />;
}
