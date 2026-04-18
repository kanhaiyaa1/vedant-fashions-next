import type { Metadata } from "next";
import { locales } from "@/i18n/types";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/StructuredData";
import Hero from "@/components/vedant/Hero";
import ProductGrid from "@/components/vedant/ProductGrid";
import ProductGallery from "@/components/vedant/ProductGallery";
import FabricSpecTable from "@/components/vedant/FabricSpecTable";
import CertificationBadges from "@/components/vedant/CertificationBadges";
import Testimonials from "@/components/vedant/Testimonials";
import FAQ from "@/components/vedant/FAQ";
import InquiryForm from "@/components/vedant/InquiryForm";
import FactoryCapacity from "@/components/vedant/trust/FactoryCapacity";
import QualityProcess from "@/components/vedant/trust/QualityProcess";
import ExportMarkets from "@/components/vedant/trust/ExportMarkets";
import SustainabilityCommitments from "@/components/vedant/trust/SustainabilityCommitments";
import ComplianceStandards from "@/components/vedant/trust/ComplianceStandards";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale.code }));
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Ladies Woven Wear Manufacturer India | Middle East & Global Export | Vedant Fashion",
    description:
      "GOTS and OEKO-TEX certified ladies woven wear manufacturer in Mumbai, India. Exporting to UAE, Saudi Arabia, Qatar, Kuwait, Russia and global markets. MOQ 300 pcs. FOB Mumbai.",
    keywords:
      "ladies woven wear manufacturer India, garment manufacturer Mumbai, wholesale garments UAE, woven blouses Saudi Arabia, GOTS certified manufacturer India, MOQ 300 pcs, FOB Mumbai, private label garment India Middle East",
    alternates: buildHreflangAlternates("/"),
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  return (
    <main>
      <OrganizationSchema />
      <WebSiteSchema />
      <Hero lang={lang} />
      <FactoryCapacity />
      <ProductGrid />
      <CertificationBadges />
      <QualityProcess />
      <ProductGallery />
      <ExportMarkets lang={lang} />
      <SustainabilityCommitments />
      <FabricSpecTable />
      <ComplianceStandards />
      <Testimonials />
      <FAQ />
      <InquiryForm />
    </main>
  );
}
