import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { countryPages } from "@/data/seo-pages";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import {
  CheckCircle,
  Ship,
  FileCheck,
  ShieldCheck,
  Globe,
  Award,
  CreditCard,
  HelpCircle,
  BookOpen,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    keywords: `ladies woven wear manufacturer ${page.country}, garment manufacturer ${page.country}, clothing supplier ${page.country}, woven blouse exporter ${page.country}, textile manufacturer India ${page.country}`,
    alternates: buildHreflangAlternates(`/${page.slug}/garment-manufacturer`),
  };
}

export default async function CountryLandingPage({ params }: PageProps) {
  const { lang, country } = await params;
  const page = countryPages.find((p) => p.slug === country);

  if (!page) notFound();

  const otherCountries = countryPages.filter((p) => p.slug !== country).slice(0, 8);

  // FAQPage JSON-LD schema
  const faqSchema = page.faqs && page.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;

  const paymentTerms = page.paymentTerms ?? [
    "LC at sight (irrevocable Letter of Credit via SWIFT)",
    "TT — 30% advance, 70% against Bill of Lading copy",
    "SWIFT wire transfer in USD / EUR",
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* FAQPage JSON-LD */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        subtitle={`Export to ${page.country}`}
        title={page.h1Title ?? page.heroTitle}
        description={page.heroDescription}
      />

      {/* ── H1 PAGE TITLE (semantic SEO) ─────────────────────────────── */}
      {page.h1Title && (
        <section className="container-wide section-spacing-sm">
          <h1 className="sr-only">{page.h1Title}</h1>
        </section>
      )}

      {/* ── BRAND STATEMENT ──────────────────────────────────────────── */}
      {page.brandStatement && (
        <ContentBlock
          subtitle="About Vedant Fashion"
          title={`Why ${page.country} Buyers Choose Vedant Fashion`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-muted-foreground leading-relaxed">
              {page.brandStatement}
            </p>
          </div>
        </ContentBlock>
      )}

      {/* ── AT A GLANCE ──────────────────────────────────────────────── */}
      <ContentBlock subtitle="At a Glance" title={`Exporting to ${page.country}`} bg={page.brandStatement ? "cream" : undefined}>
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

      {/* ── SHIPPING SECTION ─────────────────────────────────────────── */}
      <ContentBlock subtitle="Sea Freight" title={`Shipping from India to ${page.country}`} bg="dark">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Ship className="w-8 h-8 text-primary-foreground/70 mx-auto" />
              <p className="text-subheading text-primary-foreground/60 uppercase tracking-widest text-xs">
                Origin Port
              </p>
              <p className="font-display text-lg text-primary-foreground font-medium">
                Mumbai / JNPT
              </p>
              <p className="text-caption text-primary-foreground/60">Nhava Sheva, India</p>
            </div>
            <div className="space-y-2 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="h-px w-12 bg-primary-foreground/30" />
                <div className="border border-primary-foreground/40 rounded px-3 py-1">
                  <p className="font-display text-xl font-semibold text-primary-foreground">
                    {page.shippingTime}
                  </p>
                </div>
                <div className="h-px w-12 bg-primary-foreground/30" />
              </div>
              <p className="text-caption text-primary-foreground/60">sea freight</p>
            </div>
            <div className="space-y-2">
              <Ship className="w-8 h-8 text-primary-foreground/70 mx-auto" />
              <p className="text-subheading text-primary-foreground/60 uppercase tracking-widest text-xs">
                Destination Port
              </p>
              <p className="font-display text-lg text-primary-foreground font-medium">
                {page.port}
              </p>
              <p className="text-caption text-primary-foreground/60">{page.country}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-primary-foreground/20">
            {[
              { label: "FCL", detail: "Full Container Load — 20ft & 40ft" },
              { label: "LCL", detail: "Groupage / Less-than-Container Load" },
              { label: "Air Freight", detail: "Available for urgent replenishment" },
            ].map((opt) => (
              <div key={opt.label} className="text-center space-y-1">
                <p className="font-display font-semibold text-primary-foreground">{opt.label}</p>
                <p className="text-caption text-primary-foreground/60">{opt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>

      {/* ── COMPLIANCE ───────────────────────────────────────────────── */}
      <ContentBlock
        subtitle="Compliance"
        title={`${page.country} Import Regulations`}
        bg="cream"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          {page.regulations.map((reg) => (
            <div
              key={reg}
              className="flex items-start gap-3 bg-card border border-border rounded p-4"
            >
              <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span className="text-body text-muted-foreground">{reg}</span>
            </div>
          ))}
          <p className="text-body-sm text-muted-foreground pt-4">{page.textileImportNotes}</p>
        </div>
      </ContentBlock>

      {/* ── CERTIFICATIONS ───────────────────────────────────────────── */}
      <ContentBlock subtitle="Our Certifications" title={`Certifications for ${page.country} Market`}>
        <div className="max-w-2xl mx-auto flex flex-wrap gap-3 justify-center">
          {page.certifications.map((cert) => (
            <Badge
              key={cert}
              className="bg-olive text-olive-foreground border-0 text-xs px-4 py-2 rounded-sm"
            >
              {cert}
            </Badge>
          ))}
        </div>
      </ContentBlock>

      {/* ── PAYMENT TERMS ────────────────────────────────────────────── */}
      <ContentBlock subtitle="Payment Terms" title="Accepted Payment Methods" bg="cream">
        <div className="max-w-2xl mx-auto space-y-3">
          {paymentTerms.map((term) => (
            <div
              key={term}
              className="flex items-start gap-3 bg-card border border-border rounded p-4"
            >
              <CreditCard className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span className="text-body text-muted-foreground">{term}</span>
            </div>
          ))}
          <p className="text-body-sm text-muted-foreground pt-4">
            All transactions are conducted in USD, EUR, or local currency as mutually agreed. First-time buyers are advised to use LC at sight or TT with advance payment for a smooth onboarding experience.
          </p>
        </div>
      </ContentBlock>

      {/* ── MARKET INSIGHT ───────────────────────────────────────────── */}
      <ContentBlock subtitle="Market Insight" title={`${page.country} Fashion Market`} bg="dark">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-base md:text-lg text-primary-foreground/80">{page.marketInsight}</p>
        </div>
      </ContentBlock>

      {/* ── FAQ BLOCK ────────────────────────────────────────────────── */}
      {page.faqs && page.faqs.length > 0 && (
        <ContentBlock
          subtitle="FAQ"
          title={`Frequently Asked Questions — ${page.country} Buyers`}
          bg="cream"
        >
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {page.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded px-4"
                >
                  <AccordionTrigger className="text-left text-body font-medium py-4 hover:no-underline">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-body-sm text-muted-foreground pb-4 pl-7">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ContentBlock>
      )}

      {/* ── CTA — REQUEST CATALOGUE + SEND ENQUIRY ───────────────────── */}
      <section className="bg-primary section-spacing">
        <div className="container-wide text-center space-y-6">
          <p className="text-subheading text-primary-foreground/60 uppercase tracking-widest text-xs">
            Partner With Us in {page.country}
          </p>
          <h2 className="font-display text-display-sm font-medium text-primary-foreground">
            Get Pricing, Samples &amp; Production Timelines
          </h2>
          <p className="text-body text-primary-foreground/70 max-w-xl mx-auto">
            Dedicated account team for {page.region} buyers. We respond within 24 hours with
            FOB pricing, product catalogue, and a tailored production plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href={`/${lang}/catalog`}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/90 transition-colors text-body-sm"
            >
              <BookOpen className="w-4 h-4" />
              Request Catalogue
            </Link>
            <Link
              href={`/${lang}/inquiry`}
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/50 text-primary-foreground font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/10 transition-colors text-body-sm"
            >
              <Mail className="w-4 h-4" />
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER MARKETS ────────────────────────────────────────────── */}
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
    </div>
  );
}
