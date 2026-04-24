import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import { createClient } from "@/lib/supabase/server";
import CatalogClient from "./CatalogClient";
import CatalogDownloadSection from "./CatalogDownloadSection";

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

export default async function CatalogPage({ params }: PageProps) {
  const { lang } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      <CatalogClient />
      <CatalogDownloadSection
        lang={lang}
        userId={user?.id ?? null}
        userEmail={user?.email ?? null}
      />
    </>
  );
}
