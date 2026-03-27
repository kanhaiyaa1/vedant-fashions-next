"use client";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is your minimum order quantity (MOQ)?", a: "Our standard MOQ is 500 meters per fabric per colorway. For initial sampling, we offer reduced MOQs of 50 meters. Custom programs may have different thresholds—contact us for details." },
  { q: "What certifications do your fabrics carry?", a: "Our fabrics are certified under GOTS (Global Organic Textile Standard), OEKO-TEX® Standard 100, GRS (Global Recycled Standard), and we maintain ISO 9001:2015 certification. All products are REACH compliant for the EU market." },
  { q: "What are your lead times for production orders?", a: "Standard lead times are 6–8 weeks from order confirmation. Rush orders can be accommodated within 4 weeks for stock fabrics. Seasonal collections are available for immediate dispatch from our European warehouse." },
  { q: "Do you offer custom fabric development?", a: "Yes. Our R&D team works closely with brands to develop custom compositions, weights, and finishes. Development typically takes 4–6 weeks with two rounds of lab dips and strike-offs included." },
  { q: "What Incoterms do you support?", a: "We offer FOB, CIF, and DDP terms. For European buyers, we recommend DDP delivery to your warehouse via our logistics partners. All shipments include full documentation for EU customs clearance." },
  { q: "Can you provide fabric samples before placing an order?", a: "Absolutely. We offer free swatch cards for our standard collection. Custom hangers and S-fold samples are available at cost. Sample requests are typically shipped within 3 business days." },
];

const FAQ = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-tight">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Support</p>
          <h2 className="text-display-md text-foreground">Frequently Asked Questions</h2>
        </div>

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
    </section>
  );
};

export default FAQ;
