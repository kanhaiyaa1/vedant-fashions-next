import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import InquiryTabs from "./InquiryTabs";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Request a Quote — B2B Inquiry",
    description:
      "Submit a wholesale inquiry for sustainable garments. General inquiries, product requests, bulk orders, and private label manufacturing. Response within 24 hours.",
    keywords:
      "wholesale inquiry, bulk order garments, private label manufacturing, B2B fashion inquiry",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/inquiry`, ...buildHreflangAlternates("/inquiry") },
  };
}

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <PageHero
        subtitle="B2B Inquiry"
        title="How Can We Help?"
        description="Choose the inquiry type that best matches your needs. Our export team responds within 24 hours."
      />

      <InquiryTabs />

      <section className="bg-cream border-t border-border">
        <div className="container-wide py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-subheading text-gold mb-2">Email</p>
              <a href="mailto:export@vedantfashion.com" className="text-body-sm text-foreground hover:text-primary transition-colors">
                export@vedantfashion.com
              </a>
            </div>
            <div>
              <p className="text-subheading text-gold mb-2">Phone (EU)</p>
              <a href="tel:+494032101234" className="text-body-sm text-foreground hover:text-primary transition-colors">
                +49 40 3210 1234
              </a>
            </div>
            <div>
              <p className="text-subheading text-gold mb-2">Response Time</p>
              <p className="text-body-sm text-foreground">Within 24 business hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
