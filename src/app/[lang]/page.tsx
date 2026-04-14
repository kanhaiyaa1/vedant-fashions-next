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
    title: "Vedant Fashion — Premium Sustainable Garment Manufacturer",
    description:
      "GOTS, OEKO-TEX & GRS certified garment manufacturer exporting premium sustainable apparel to Europe and Russia. Private label, OEM & wholesale.",
    keywords:
      "garment manufacturer India, sustainable fashion, GOTS certified, OEKO-TEX, private label, organic cotton, wholesale garments Europe",
    alternates: buildHreflangAlternates("/"),
  };
}

export default async function HomePage() {
  return (
    <main>
      <OrganizationSchema />
      <WebSiteSchema />
      <Hero />
      <FactoryCapacity />
      <ProductGrid />
      <CertificationBadges />
      <QualityProcess />
      <ProductGallery />
      <ExportMarkets />
      <SustainabilityCommitments />
      <FabricSpecTable />
      <ComplianceStandards />
      <Testimonials />
      <FAQ />
      <InquiryForm />
    </main>
  );
}
