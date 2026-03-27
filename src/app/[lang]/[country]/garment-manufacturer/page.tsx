import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { countryPages } from "@/data/seo-pages";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, Ship, FileCheck, ShieldCheck, Globe, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ lang: string; country: string }>;
}

export async function generateStaticParams() {
  return countryPages.map((p) => ({ country: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const page = countryPages.find((p) => p.slug === country);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: `garment manufacturer ${page.country}, clothing supplier ${page.country}, textile exporter ${page.country}`,
    alternates: { canonical: `https://www.vedantfashion.com/en/${page.slug}/garment-manufacturer` },
  };
}

export default async function CountryLandingPage({ params }: PageProps) {
  const { lang, country } = await params;
  const page = countryPages.find((p) => p.slug === country);

  if (!page) notFound();

  const otherCountries = countryPages.filter((p) => p.slug !== country).slice(0, 8);

  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle={`Export to ${page.country}`}
        title={page.heroTitle}
        description={page.heroDescription}
      />

      <ContentBlock subtitle="At a Glance" title={`Exporting to ${page.country}`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Ship, label: "Shipping", value: `${page.shippingTime} to ${page.port}` },
            { icon: FileCheck, label: "Incoterms", value: page.incoterms },
            { icon: Globe, label: "Labelling Language", value: page.labellingLanguage },
            { icon: Award, label: "Trade Agreement", value: page.tradeAgreement },
            { icon: ShieldCheck, label: "Duty Information", value: page.dutyInfo.split(".")[0] + "." },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded p-6 space-y-2">
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-olive" />
                <p className="text-caption font-medium">{item.label}</p>
              </div>
              <p className="text-body-sm text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Compliance" title={`${page.country} Import Regulations`} bg="cream">
        <div className="max-w-2xl mx-auto space-y-3">
          {page.regulations.map((reg) => (
            <div key={reg} className="flex items-start gap-3 bg-card border border-border rounded p-4">
              <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span className="text-body text-muted-foreground">{reg}</span>
            </div>
          ))}
          <p className="text-body-sm text-muted-foreground pt-4">{page.textileImportNotes}</p>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Our Certifications" title={`Certifications for ${page.country} Market`}>
        <div className="max-w-2xl mx-auto flex flex-wrap gap-3 justify-center">
          {page.certifications.map((cert) => (
            <Badge key={cert} className="bg-olive text-olive-foreground border-0 text-xs px-4 py-2 rounded-sm">
              {cert}
            </Badge>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock subtitle="Market Insight" title={`${page.country} Fashion Market`} bg="dark">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-base md:text-lg text-primary-foreground/80">{page.marketInsight}</p>
        </div>
      </ContentBlock>

      <ContentBlock subtitle="We Also Export To" title="Other Markets" bg="cream">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherCountries.map((c) => (
            <Link
              key={c.slug}
              href={`/${lang}/${c.slug}/garment-manufacturer`}
              className="bg-card border border-border rounded p-4 hover:shadow-md transition-shadow text-center"
            >
              <p className="font-display text-sm font-medium text-foreground">{c.country}</p>
              <p className="text-caption mt-1">{c.region}</p>
            </Link>
          ))}
        </div>
      </ContentBlock>

      <CTASection
        variant="dark"
        title={`Partner with Us in ${page.country}`}
        description={`Get pricing, samples, and production timelines for the ${page.country} market. Dedicated account team for ${page.region} buyers.`}
        buttonText="Contact Export Team"
      />
    </div>
  );
}
