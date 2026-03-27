import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Wholesale FAQ",
    description: "Answers to common questions from European wholesale buyers about MOQs, payment terms, certifications, lead times, and shipping logistics.",
    keywords: "wholesale FAQ, garment manufacturer FAQ, MOQ, payment terms, GOTS certification",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/wholesale-faq`, ...buildHreflangAlternates("/wholesale-faq") },
  };
}

const faqs = [
  { q: "What is your minimum order quantity (MOQ)?", a: "Our standard MOQ is 500 pieces per style per color. For initial orders, we can accommodate 300 pieces per style. Sampling quantities start from just 2–3 pieces per style for evaluation." },
  { q: "What are your payment terms?", a: "Standard terms: 30% advance upon order confirmation, 70% against copy of Bill of Lading. For established buyers, we offer 60-day LC (Letter of Credit) or 30-day DA (Documents Against Acceptance). We accept wire transfer (T/T) and confirmed irrevocable LC." },
  { q: "What Incoterms do you support?", a: "We offer FOB (Mumbai/Nhava Sheva), CIF to any European port, and DDP to your warehouse. For DDP shipments, we handle customs clearance, duties, and last-mile delivery through our European logistics partners." },
  { q: "What are your production lead times?", a: "Standard lead times: Sampling 2–3 weeks, Bulk production 6–8 weeks from fabric in-house. Rush orders: 4 weeks for stock fabric styles. For seasonal collections, we recommend placing orders 12–14 weeks before delivery." },
  { q: "Can you handle small initial orders?", a: "Yes. We understand the need for test orders. Our startup package offers 300 pcs/style MOQ with the same quality standards. After the first successful order, we can discuss regular MOQ terms." },
  { q: "Do you provide exclusive designs?", a: "Absolutely. All private-label development is exclusive to your brand. We sign NDAs and maintain strict sample room confidentiality. Your designs are never shared or replicated for other buyers." },
  { q: "What certifications can you provide with shipments?", a: "Every shipment includes: GOTS Transaction Certificate (for organic), GRS Certificate (for recycled), OEKO-TEX test reports, Certificate of Origin (for preferential tariffs), and fabric test reports per EN/ISO standards." },
  { q: "How do you handle quality complaints?", a: "We have a formal claims process. Claims must be filed within 14 days of delivery with photographic evidence. Our QA team investigates within 48 hours. Remedies include credit notes, replacement production, or partial refunds as agreed." },
  { q: "What sizes do you produce?", a: "We produce EU sizes 34–52 (XS–3XL) for women and 46–54 (S–2XL) for men. Custom size grading is available per your brand's measurement specifications. We support EU, UK, US, and Scandinavian size systems." },
  { q: "Do you have EU representation?", a: "Yes. Our European office in Hamburg, Germany handles buyer meetings, sample dispatch, and logistics coordination for DACH and Northern European markets. We also attend Texworld Paris and Munich Fabric Start annually." },
  { q: "What is your sampling process?", a: "Step 1: Counter sample (1–2 pcs) based on your tech pack or our design — 2 weeks. Step 2: Pre-production sample with your labels/trims — 1 week. Step 3: Size set (3–5 sizes) for fit approval. Sampling charges: €25–€50/style, refundable against bulk order." },
  { q: "Can you supply fabric only (no garments)?", a: "Yes. We sell fabric by the meter for brands with their own manufacturing. Minimum: 500 meters per fabric per color. Fabric-only orders include full test reports and certification documentation." },
];

const WholesaleFAQPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <PageHero
        subtitle="Wholesale FAQ"
        title="Everything Buyers Need to Know"
        description="Answers to the most common questions from our European wholesale partners — covering MOQs, payment, logistics, certifications, and more."
      />

      <ContentBlock subtitle="Questions" title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded px-6 data-[state=open]:bg-cream">
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Still Have Questions?" description="Our export team is available Monday–Friday, 9:00–18:00 CET." buttonText="Contact Our Team" />
    </div>
  );
};

export default WholesaleFAQPage;
