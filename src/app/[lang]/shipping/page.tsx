import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { FAQSchema } from "@/components/seo/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Ship, Plane, FileCheck, ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Shipping to Middle East & Russia | Export India | Vedant",
    description:
      "Sea & air freight from India to UAE, Saudi Arabia, Qatar, Kuwait, Oman, Russia. FOB Mumbai. Full export documentation. MOQ 300 pcs.",
    alternates: buildHreflangAlternates("/shipping"),
  };
}

const INCOTERMS = [
  {
    term: "FOB",
    full: "Free on Board — Mumbai",
    meaning:
      "Vedant delivers goods to Nhava Sheva (JNPT) Mumbai. Risk and title transfer to the buyer at the ship's rail. Buyer arranges and pays ocean freight, insurance, and destination customs.",
    freight: "Buyer arranges and pays",
    customs: "Buyer handles destination customs",
  },
  {
    term: "CIF",
    full: "Cost, Insurance & Freight",
    meaning:
      "Vedant pays ocean freight and minimum cargo insurance to the named destination port. Risk transfers at ship's rail in Mumbai — buyer is responsible once goods are afloat.",
    freight: "Vedant pays to destination port",
    customs: "Buyer handles destination customs",
  },
  {
    term: "DDP",
    full: "Delivered Duty Paid",
    meaning:
      "Vedant handles everything including import duties, VAT, and customs clearance at destination. Goods are delivered to buyer's named warehouse. Maximum convenience for buyers without import infrastructure.",
    freight: "Vedant pays all freight",
    customs: "Vedant handles import duties & customs",
  },
];

const SEA_ROUTES = [
  { country: "UAE", port: "Jebel Ali", transit: "18–22 days", frequency: "Weekly" },
  { country: "Saudi Arabia", port: "Dammam", transit: "20–24 days", frequency: "Weekly" },
  { country: "Saudi Arabia", port: "Jeddah", transit: "21–25 days", frequency: "Weekly" },
  { country: "Qatar", port: "Hamad Port, Doha", transit: "20–23 days", frequency: "Bi-weekly" },
  { country: "Kuwait", port: "Shuwaikh", transit: "19–22 days", frequency: "Weekly" },
  { country: "Oman", port: "Port Sultan Qaboos, Muscat", transit: "17–20 days", frequency: "Weekly" },
  { country: "Bahrain", port: "Khalifa Bin Salman", transit: "19–22 days", frequency: "Bi-weekly" },
  { country: "Egypt", port: "Alexandria / Port Said", transit: "18–22 days", frequency: "Weekly" },
  { country: "Russia", port: "St. Petersburg", transit: "25–32 days", frequency: "Weekly" },
  { country: "Russia", port: "Novorossiysk", transit: "22–28 days", frequency: "Weekly" },
  { country: "Poland", port: "Gdańsk / Gdynia", transit: "22–28 days", frequency: "Weekly" },
];

const AIR_ROUTES = [
  { airport: "Dubai (DXB)", transit: "1–2 days" },
  { airport: "Riyadh (RUH)", transit: "2–3 days" },
  { airport: "Doha (DOH)", transit: "1–2 days" },
  { airport: "Moscow (SVO)", transit: "4–5 days" },
];

const EXPORT_DOCS = [
  {
    name: "Commercial Invoice",
    desc: "Itemised invoice with FOB value, HS codes, buyer/seller details, and unit prices.",
  },
  {
    name: "Packing List",
    desc: "Carton-wise breakdown: style, colour, size ratio, gross/net weight, and dimensions.",
  },
  {
    name: "Bill of Lading",
    desc: "Original negotiable B/L or seawaybill issued by the shipping line (original or telex release).",
  },
  {
    name: "Certificate of Origin (GSP)",
    desc: "Issued by FIEO / Export Inspection Council for GSP preferential duty in eligible markets.",
  },
  {
    name: "CEPA Certificate of Origin (UAE)",
    desc: "India-UAE CEPA preferential origin certificate — reduces UAE import duty to 0% on qualifying garments.",
  },
  {
    name: "GOTS / OEKO-TEX Certificate Copies",
    desc: "Current scope certificate or transaction certificate per shipment for GOTS-certified orders.",
  },
  {
    name: "AZO-Free Test Report",
    desc: "Third-party lab report (SGS / Intertek) confirming absence of restricted azo dyes per EN 14362-1.",
  },
  {
    name: "Formaldehyde Test Report",
    desc: "Test confirming formaldehyde levels within OEKO-TEX / REACH limits for all age categories.",
  },
  {
    name: "ESMA / SASO Compliance Declaration",
    desc: "Self-declaration or third-party conformity assessment for UAE ESMA and Saudi SASO textile regulations.",
  },
  {
    name: "Arabic / English Care Label Samples",
    desc: "Pre-production woven label samples with bilingual care symbols per ISO 3758 for GCC buyer approval.",
  },
];

const HS_CODES = [
  { category: "Ladies woven blouses (cotton)", hs: "6206.30.00", desc: "Women's blouses, shirts, shirt-blouses — cotton" },
  { category: "Ladies woven blouses (man-made fibres)", hs: "6206.40.00", desc: "Women's blouses, shirts, shirt-blouses — man-made fibres" },
  { category: "Ladies cotton dresses", hs: "6204.42.00", desc: "Women's dresses — cotton" },
  { category: "Ladies dresses (other fibres)", hs: "6204.49.00", desc: "Women's dresses — other textile materials (linen, Tencel™)" },
  { category: "Linen shirts", hs: "6205.90.00", desc: "Men's/women's shirts — other textile materials (linen)" },
  { category: "Ladies woven trousers", hs: "6204.62.00", desc: "Women's trousers and breeches — cotton" },
  { category: "Jumpsuits / dungarees", hs: "6204.69.00", desc: "Women's dungarees and jumpsuits — other materials" },
];

const FAQS = [
  {
    q: "What incoterm is most common for UAE and GCC buyers?",
    a: "FOB Mumbai is the most common incoterm for experienced GCC importers who have their own freight forwarders or use established shipping agents in the region. Many UAE and Saudi buyers have preferred freight rates via their own forwarders, making FOB the most cost-effective option. CIF is available for buyers who prefer Vedant to arrange ocean freight — particularly for first orders where buyers want a single landed cost. DDP is available for buyers in markets with complex customs requirements.",
  },
  {
    q: "Can you consolidate multiple styles into one container?",
    a: "Yes. We regularly consolidate multi-style, multi-category orders into a single FCL (Full Container Load) or LCL (Less than Container Load) shipment. A standard 20ft container holds approximately 5,000–7,000 garments depending on category mix. For orders of 2,000 pieces or fewer, we use LCL consolidation via our freight forwarders at JNPT Mumbai. All styles within a consolidated shipment share a single Bill of Lading and set of shipping documents.",
  },
  {
    q: "What is the India-UAE CEPA and how does it reduce import duty?",
    a: "The India-UAE Comprehensive Economic Partnership Agreement (CEPA), in force since May 2022, grants preferential (zero or reduced) import duty on qualifying India-origin garments entering the UAE. Garments meeting the Rules of Origin criteria (substantial transformation in India — which our fully manufactured garments satisfy) qualify for 0% import duty under CEPA versus the standard 5% GCC common external tariff. We issue a CEPA Certificate of Origin per shipment, issued by authorised Indian export bodies. This is a significant cost saving for UAE wholesale buyers purchasing regularly.",
  },
  {
    q: "Do you handle customs clearance at the destination?",
    a: "Under FOB and CIF terms, the buyer is responsible for import customs clearance at the destination port. We provide all required documentation — commercial invoice, packing list, bill of lading, certificate of origin, and compliance certificates — in advance of vessel arrival to enable smooth clearance. Under DDP terms, we manage full customs clearance including payment of import duties and VAT through our logistics partners. We can recommend established customs agents in Jebel Ali, Dammam, Doha, and St. Petersburg for buyers operating under FOB who need local clearance support.",
  },
  {
    q: "What packaging do you use for export shipments?",
    a: "Individual garments are folded and poly-bagged (biodegradable bags available on request). Bags are packed into export cartons — typically 12 pieces per carton for dresses and blouses, 12–24 pieces for shirts. Cartons are double-walled export grade, strapped, and palletised for FCL shipments. Each carton carries a label with style number, colour, size ratio, PO number, carton number, gross/net weight, and country of origin. Inner packs (sets per size or per colour) are available for retail-ready orders. Recycled paper stuffing and plastic-free packaging options are available for sustainability-focused buyers.",
  },
  {
    q: "Can you ship to Russian ports given current sanctions?",
    a: "Yes, subject to applicable compliance checks. Russia is not under a blanket embargo for Indian textile exports. We export ladies woven wear to Russia via St. Petersburg and Novorossiysk under standard trade terms, with EAC / TR CU 017/2011 compliance documentation. All shipments are reviewed against current EU, US, and UN sanctions lists — Vedant does not ship to sanctioned entities or individuals. Payment must be via compliant banking channels (SWIFT remains available for many Russian correspondent banks for non-sanctioned trade). We recommend buyers confirm their import bank's SWIFT status before placing orders. Transit via third countries (Turkey, UAE re-export) is also available.",
  },
];

export default async function ShippingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-background font-body">
      <FAQSchema
        items={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <PageHero
        subtitle="Shipping & Logistics"
        title="Shipping & Export from India to Middle East, Russia & Global"
        description="FOB Mumbai sea freight to GCC ports in 17–24 days. Full export documentation including CEPA, GOTS certificates, and GCC compliance declarations. FOB, CIF, and DDP Incoterms available."
      />

      {/* INCOTERMS */}
      <ContentBlock subtitle="Trade Terms" title="Incoterms Explained">
        <div className="grid md:grid-cols-3 gap-6">
          {INCOTERMS.map((t) => (
            <div key={t.term} className="bg-card border border-border rounded p-6 space-y-4">
              <div className="space-y-1">
                <p className="font-display text-2xl font-semibold text-olive">{t.term}</p>
                <p className="text-caption text-muted-foreground">{t.full}</p>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{t.meaning}</p>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Ship className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                  <p className="text-caption text-muted-foreground">
                    <strong className="text-foreground">Freight:</strong> {t.freight}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                  <p className="text-caption text-muted-foreground">
                    <strong className="text-foreground">Customs:</strong> {t.customs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* SEA FREIGHT TABLE */}
      <ContentBlock subtitle="Sea Freight" title="Transit Times from Mumbai (JNPT)" bg="cream">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">Country</th>
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">Destination Port</th>
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">Transit Time</th>
                <th className="py-3 text-caption font-semibold text-foreground uppercase tracking-wider">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {SEA_ROUTES.map((row, i) => (
                <tr
                  key={`${row.country}-${row.port}`}
                  className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}
                >
                  <td className="py-3 pr-6 text-body-sm font-medium text-foreground">{row.country}</td>
                  <td className="py-3 pr-6 text-body-sm text-muted-foreground">{row.port}</td>
                  <td className="py-3 pr-6 text-body-sm font-medium text-olive">{row.transit}</td>
                  <td className="py-3 text-body-sm text-muted-foreground">{row.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-caption text-muted-foreground mt-4">
          All transit times are indicative from JNPT Mumbai. Vessel schedules subject to carrier availability and port congestion.
          Production lead time (45–55 days) is in addition to the above transit times.
        </p>
      </ContentBlock>

      {/* AIR FREIGHT */}
      <ContentBlock subtitle="Air Freight" title="Express Delivery by Air">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-body text-muted-foreground leading-relaxed">
            Air freight is recommended for orders under 500 kg — typically sample sets, urgent replenishment,
            or high-value garment categories where speed outweighs cost. We ship from Ahmedabad (AMD) or
            Mumbai (BOM) to all major GCC and European hubs.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {AIR_ROUTES.map((r) => (
              <div key={r.airport} className="bg-card border border-border rounded p-5 space-y-2 text-center">
                <Plane className="w-5 h-5 text-olive mx-auto" />
                <p className="font-display font-medium text-foreground text-sm">{r.airport}</p>
                <p className="text-body-sm text-olive font-semibold">{r.transit}</p>
              </div>
            ))}
          </div>
          <p className="text-caption text-muted-foreground">
            Air freight pricing provided on request alongside sea freight quotation. Airway bill, commercial invoice,
            and certificate of origin included with all air shipments.
          </p>
        </div>
      </ContentBlock>

      {/* EXPORT DOCUMENTATION */}
      <ContentBlock subtitle="Export Documentation" title="Documents Provided with Every Shipment" bg="cream">
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {EXPORT_DOCS.map((doc) => (
            <div key={doc.name} className="bg-background border border-border rounded p-5 space-y-1">
              <div className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <p className="text-body-sm font-semibold text-foreground">{doc.name}</p>
              </div>
              <p className="text-caption text-muted-foreground pl-6">{doc.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* HS CODES */}
      <ContentBlock subtitle="Classification" title="HS Codes for Our Product Categories">
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">Product Category</th>
                <th className="py-3 pr-6 text-caption font-semibold text-foreground uppercase tracking-wider">HS Code</th>
                <th className="py-3 text-caption font-semibold text-foreground uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody>
              {HS_CODES.map((row, i) => (
                <tr
                  key={row.hs}
                  className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card"}`}
                >
                  <td className="py-3 pr-6 text-body-sm font-medium text-foreground">{row.category}</td>
                  <td className="py-3 pr-6 text-body-sm font-mono text-olive">{row.hs}</td>
                  <td className="py-3 text-body-sm text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-caption text-muted-foreground mt-4 max-w-4xl mx-auto">
          HS codes are provided for guidance. Buyers should confirm classification with their customs broker
          as final tariff determination rests with the importing country&apos;s customs authority.
        </p>
      </ContentBlock>

      {/* FAQ */}
      <ContentBlock subtitle="Common Questions" title="Shipping & Logistics FAQ" bg="cream">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded bg-background px-5"
              >
                <AccordionTrigger className="text-left text-body-sm font-medium text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentBlock>

      <CTASection
        title="Get a Freight Quote"
        description="Send your order size, destination port, and preferred incoterm. We respond with a full shipping quotation within 24 hours."
        buttonText="Get a Freight Quote"
        buttonLink={`/${lang}/inquiry`}
      />
    </div>
  );
}
