import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/StructuredData";

// ── Metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Wholesale FAQ — Ladies Woven Wear Export | Vedant Fashion",
    description:
      "Answers to B2B buyer questions on MOQ, sampling, certifications, shipping to UAE/Saudi/Qatar, payment terms, and GCC compliance. Vedant Fashion India.",
    keywords:
      "wholesale FAQ garment manufacturer, MOQ ladies woven wear, GOTS certified supplier India, shipping UAE Saudi Arabia Qatar, payment terms LC TT, GCC compliance ESMA SASO, AQL inspection garments, FOB CIF DDP India",
    alternates: buildHreflangAlternates("/wholesale-faq"),
  };
}

// ── FAQ Data ──────────────────────────────────────────────────────────

interface Faq {
  q: string;
  a: string;
}

interface Section {
  id: string;
  heading: string;
  icon: string;
  items: Faq[];
}

const SECTIONS: Section[] = [
  {
    id: "ordering",
    heading: "Ordering",
    icon: "📦",
    items: [
      {
        q: "What is the minimum order quantity for ladies woven wear?",
        a: "Vedant Fashion's standard MOQ is 300 pieces per style per colour for most ladies woven wear categories — including woven blouses, cotton dresses, and resort wear. Linen shirts and embellished styles (hand-embroidered, smocked) carry an MOQ of 500 pieces per style due to higher labour input. For buyers trialling a new category, we offer a one-time reduced MOQ of 150 pieces per style at an adjusted unit price. There is no minimum on the number of styles per purchase order.",
      },
      {
        q: "Can we mix styles and colours within a single purchase order?",
        a: "Yes. A single purchase order can combine multiple styles and colours across the same category. The MOQ (300 or 500 pcs) applies per style per colour — so a buyer ordering 4 styles × 300 pcs per colour = 1,200 pieces total in one PO is standard. We allow colour splitting within a style at 150 pieces per colour minimum, subject to a small dye-run surcharge. Cross-category mixing (e.g. blouses + dresses in one PO) is supported.",
      },
      {
        q: "How does the private label and OEM ordering process work?",
        a: "Vedant Fashion handles the full private label process: buyer supplies brand labels, hang-tags, and packaging specifications; we source or print to spec and attach during production. For OEM, buyers supply an approved tech pack or sample — we manufacture to your exact specifications including fabric, construction, and finish. A formal OEM agreement and NDA are signed before design files are shared. First OEM orders typically follow a proto sample → counter sample → pre-production sample → bulk approval flow, adding 15–20 working days to the standard lead time.",
      },
      {
        q: "Do you offer custom design development (ODM)?",
        a: "Yes. Vedant Fashion's in-house design studio offers full ODM (Original Design Manufacturing) — we develop styles from scratch based on your trend brief, mood board, or reference samples. Our design team proposes silhouettes, fabric options, colourways, and trim details. Two rounds of sampling are included in the ODM package. ODM orders require a minimum of 500 pieces per developed style and carry a one-time design development fee of USD 50–150 per style, credited in full against bulk order value.",
      },
      {
        q: "What information do you need to provide a quotation?",
        a: "To provide a formal FOB quotation within 24 hours, we need: (1) style reference or tech pack / sketch, (2) target fabric (composition, GSM, weave — or we propose options), (3) order quantity per style per colour, (4) required certifications (GOTS, OEKO-TEX, etc.), (5) destination port and preferred incoterm, (6) target delivery date. For repeat buyers, a brief email with style code and quantity is sufficient. We respond with itemised FOB pricing, lead time, and a production schedule.",
      },
    ],
  },
  {
    id: "samples",
    heading: "Samples",
    icon: "🧵",
    items: [
      {
        q: "What is the sample lead time and cost?",
        a: "Proto and counter samples are dispatched within 12–15 working days from receipt of a confirmed tech pack or reference sample. Pre-production samples (with buyer-approved fabric and trims) take an additional 7–10 working days. Sample charges are USD 30–80 per style depending on complexity — standard blouses and dresses at the lower end, embroidered and embellished styles at the upper end. Sample courier charges (DHL / FedEx) are billed at cost.",
      },
      {
        q: "Can you send samples to UAE, Saudi Arabia, and Qatar?",
        a: "Yes. Vedant Fashion ships samples to all GCC destinations — UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah, Dammam), Qatar (Doha), Kuwait, Oman, and Bahrain — via DHL Express and FedEx International Priority, with typical delivery in 3–5 working days. We prepare commercial invoices for low-value sample declarations and advise on any temporary import bond requirements for GCC markets. Sample packs to UAE and Saudi Arabia are a regular part of our export operations.",
      },
      {
        q: "Do you refund sample charges on bulk order placement?",
        a: "Yes. 100% of sample charges (excluding courier costs) are credited against the bulk order invoice when a confirmed purchase order is placed within 90 days of sample dispatch. The credit is applied on a per-style basis — so if samples were developed for 4 styles and an order is placed for 3 of them, the credit applies to those 3 styles proportionally. This policy applies to buyers placing first orders; repeat buyers enjoy complimentary sampling from the third season onward.",
      },
      {
        q: "What sample types do you offer — proto, counter, and pre-production?",
        a: "Vedant Fashion offers three sample stages. Proto sample: first interpretation of your design in the closest available fabric — used to assess silhouette, fit, and construction. Counter sample: revised sample in approved or near-approved fabric, reflecting all proto corrections. Pre-production (PP) sample: made from the exact bulk fabric with buyer-supplied trims, labels, and packaging — requires buyer sign-off before bulk cutting begins. Size sets (typically 3–5 sizes) are provided on request for fit grading approval.",
      },
    ],
  },
  {
    id: "quality",
    heading: "Quality Control",
    icon: "🔬",
    items: [
      {
        q: "What quality inspection standard do you use?",
        a: "Vedant Fashion conducts final random inspection to AQL 2.5 per ISO 2859-1 as standard on every bulk shipment. This means at the 2.5 Acceptance Quality Level, the maximum acceptable defect rate is 2.5% for major defects and 4.0% for minor defects. Inspections are carried out by our in-house QA team. An inspection report (with photos and measurements) is provided to the buyer within 24 hours of inspection completion, before goods are released for packing.",
      },
      {
        q: "Can we arrange a third-party inspection before shipment?",
        a: "Yes. Buyers are welcome to nominate a third-party inspection agency — SGS, Intertek, Bureau Veritas, QIMA, or equivalent. Third-party inspection costs are borne by the buyer and are arranged at least 5 working days before the shipment readiness date. We provide the inspector full access to the production facility and finished goods. If the inspection raises a critical non-conformity, production is held and remedial action is completed before goods are released — at no additional cost to the buyer.",
      },
      {
        q: "What laboratory tests do you perform on fabrics?",
        a: "Our in-house textile lab tests to ISO and EN standards including: tensile strength (ISO 13934-1), tear strength (ISO 13937-2), colour fastness to washing (ISO 105-C06), colour fastness to rubbing (ISO 105-X12), colour fastness to light (ISO 105-B02), dimensional stability / shrinkage (ISO 5077), and pilling resistance (ISO 12945-2). AZO dye content, formaldehyde levels, and pH testing are conducted at NABL-accredited external laboratories. Full test reports are included with each shipment.",
      },
      {
        q: "What is your defect rate and how do you handle claims?",
        a: "Vedant Fashion's rolling 12-month defect rate across all shipped orders is below 1.8% — well within the AQL 2.5 threshold. In the event of a claim, buyers must notify our QA team within 14 days of delivery receipt with photographic evidence of defective units. Claims are acknowledged within 48 hours and investigated within 5 working days. Resolution options include: replacement production at no charge, credit note applied to the next order, or a negotiated partial refund. We do not accept claims on goods that have been washed, worn, or altered.",
      },
    ],
  },
  {
    id: "compliance",
    heading: "Certifications & Compliance",
    icon: "📋",
    items: [
      {
        q: "Are your garments REACH compliant?",
        a: "Yes. All garments manufactured by Vedant Fashion comply with EU REACH Regulation (EC) No. 1907/2006. Restricted substances — including banned AZO dyes, heavy metals, phthalates, and formaldehyde — are controlled through fabric and dye supplier audits and verified by NABL/ILAC-accredited third-party laboratory testing. REACH compliance declarations are provided with every shipment. For garments entering EU markets, we also hold documentation for EU Textile Regulation No. 1007/2011 fibre content labelling.",
      },
      {
        q: "Do your products meet UAE ESMA and Saudi SASO requirements?",
        a: "Yes. Vedant Fashion's GCC export range is produced with bilingual Arabic / English woven care labels, fibre composition tags, country of origin declarations, and manufacturer details meeting ESMA (UAE), SASO (Saudi Arabia), and GSO 1956 GCC-wide textile labelling standards. For Saudi Arabia, we facilitate SASO conformity certification through accredited Conformity Assessment Bodies (CABs) where required. UAE ESMA declarations and compliance statements are provided with all UAE-destined shipments as standard.",
      },
      {
        q: "What certifications does Vedant Fashion hold?",
        a: "Vedant Fashion holds the following active certifications: GOTS 6.0 (Global Organic Textile Standard) — covering organic cotton and blended fibre garments; OEKO-TEX Standard 100 — tested for harmful substances across all product classes; GRS 4.0 (Global Recycled Standard) — for recycled fibre products; BSCI (Business Social Compliance Initiative) audit; SEDEX / SMETA 4-Pillar social compliance audit; ISO 9001:2015 quality management system. Certificate copies are available on request and provided as standard in the shipment documentation package.",
      },
      {
        q: "Are your dyes AZO-free and formaldehyde within safe limits?",
        a: "Yes. Vedant Fashion uses only AZO-free reactive and vat dyes across all product lines. Formaldehyde content is maintained below 75 ppm for adult garments (EU Category II standard) and below 30 ppm for children's wear. pH levels are controlled between 4.0 and 7.5. These parameters are verified by independent NABL-accredited laboratory testing on each fabric batch. Test reports are included in shipment documentation and are available for regulatory submission in UAE, Saudi Arabia, and EU markets.",
      },
      {
        q: "Can you supply GOTS-certified organic cotton garments?",
        a: "Yes. Vedant Fashion is GOTS 6.0 certified, and a significant proportion of our woven blouses, cotton dresses, and resort wear are manufactured from GOTS-certified organic cotton. GOTS Transaction Certificates (TCs) are issued per shipment through our certification body and are traceable at the product level. For buyers requiring GOTS certification, please specify this at the time of ordering so the correct certified fabric and production lot are allocated. GOTS-certified garments carry the GOTS label per the standard's labelling rules.",
      },
    ],
  },
  {
    id: "shipping",
    heading: "Shipping & Logistics",
    icon: "🚢",
    items: [
      {
        q: "What are the sea freight transit times to UAE, Saudi Arabia, Qatar, Kuwait, and Oman?",
        a: "Sea freight transit times from JNPT Mumbai / Nhava Sheva: UAE (Jebel Ali, Dubai) 18–22 days; Saudi Arabia (Dammam) 20–24 days, (Jeddah) 20–24 days; Qatar (Hamad Port, Doha) 20–23 days; Kuwait (Shuwaikh) 19–22 days; Oman (Port Sultan Qaboos, Muscat) 17–20 days — the shortest GCC transit from India; Bahrain (Khalifa Bin Salman) 19–22 days; Egypt (Alexandria) 18–22 days. We work with established freight forwarders on weekly liner services for all GCC lanes and offer competitive FCL (20ft / 40ft) and LCL rates.",
      },
      {
        q: "Do you offer FOB, CIF, and DDP incoterms?",
        a: "Yes. Vedant Fashion offers three incoterms: FOB Mumbai / JNPT — buyer's freight forwarder takes responsibility at the Mumbai port; CIF to destination port — we arrange and insure the sea freight to the buyer's named port (Jebel Ali, Dammam, Doha, etc.); DDP to buyer's warehouse — we handle the full logistics chain including freight, destination customs clearance, import duties, and last-mile delivery. DDP is available for UAE and select GCC destinations through our logistics partners. FOB is the most common term for GCC buyers.",
      },
      {
        q: "What export documents do you provide with each shipment?",
        a: "Every Vedant Fashion shipment includes: Commercial Invoice (with unit price, total value, HS codes), Packing List (style, colour, size, carton weights and dimensions), Bill of Lading (sea) or Airway Bill (air), Certificate of Origin (GSP / bilateral — required for preferential duty), GOTS / OEKO-TEX certificate copies, AZO-free and formaldehyde test reports, ESMA / SASO compliance declaration (for GCC shipments), and Arabic / English care label samples. For India-UAE CEPA shipments, a CEPA-compliant Certificate of Origin is issued.",
      },
      {
        q: "What are the HS codes for your main product categories?",
        a: "Principal HS codes: ladies woven blouses in cotton (6206.30.00), ladies woven blouses in man-made fibres (6206.40.00), ladies cotton dresses (6204.42.00), ladies dresses in other fibres (6204.49.00), linen shirts (6205.90.00), ladies woven trousers and shorts (6204.62.00), jumpsuits and dungarees (6204.69.00). HS codes are printed on each commercial invoice and packing list. GCC customs classification follows the Harmonised System (HS 2022); Vedant Fashion's documentation team can advise on classification queries for specific styles.",
      },
      {
        q: "Can you handle air freight for urgent orders?",
        a: "Yes. Vedant Fashion can arrange air freight via DHL Express Freight, FedEx International, or buyer-nominated air freight forwarders for urgent replenishment orders. Air freight from Mumbai to Dubai (DXB) takes 1–2 business days; to Riyadh (RUH) 2–3 days; to Doha (DOH) 1–2 days. Air freight costs are significantly higher than sea freight and are typically used for orders under 500 kg or for critical stock replenishment. We recommend sea freight for all orders above 200 kg on standard lead times.",
      },
    ],
  },
  {
    id: "payment",
    heading: "Payment Terms",
    icon: "💳",
    items: [
      {
        q: "What payment terms do you accept?",
        a: "Vedant Fashion accepts three standard payment structures: (1) TT (Telegraphic Transfer / SWIFT) — 30% advance before production start, 70% against copy of Bill of Lading; (2) LC at sight — irrevocable Letter of Credit issued by a reputable bank, payable at sight against shipping documents; (3) Full advance TT — 100% payment before production, qualifying for a 2% pricing discount. For established buyers with 3+ completed orders, open account terms (net 30 days from B/L date) may be discussed. First-time buyers are required to pay by LC at sight or full TT advance.",
      },
      {
        q: "Do you accept Letters of Credit (LC at sight)?",
        a: "Yes. Vedant Fashion accepts irrevocable LC at sight (ILOC) issued via SWIFT through any internationally recognised bank. LC terms must specify shipment from Mumbai / JNPT, allow partial shipments and transshipment, and provide at least 21 days for document presentation after the shipment date. We recommend buyers contact our export documentation team before issuing the LC to confirm compliant terms and avoid discrepancies. LC amendment costs are borne by the party responsible for the discrepancy.",
      },
      {
        q: "What currencies do you accept?",
        a: "Vedant Fashion invoices and accepts payment in USD (US Dollars) as the primary transaction currency for all Middle East, GCC, and international buyers. EUR (Euros) is accepted for European buyers. GBP is accepted for UK buyers. AED (UAE Dirhams) can be accommodated for UAE-based buyers on request. SAR (Saudi Riyal) invoicing is available for Saudi Arabian buyers with a local bank arrangement. For Russian transactions, please refer to the Russia/CIS section below.",
      },
      {
        q: "Is there a payment discount for full advance TT?",
        a: "Yes. Buyers who pay 100% in advance via TT / SWIFT before production commencement receive a 2% discount on the total FOB order value. This discount is applied automatically on the pro-forma invoice when full advance payment is selected. For orders above USD 50,000, the advance discount may be negotiated up to 3% subject to order complexity and delivery timeline. The 100% advance option also prioritises your order in the production schedule, reducing the standard lead time by up to 5 working days.",
      },
    ],
  },
  {
    id: "middle-east",
    heading: "Middle East Specific",
    icon: "🌙",
    items: [
      {
        q: "Do your garments come with Arabic care labels for GCC markets?",
        a: "Yes. All garments manufactured by Vedant Fashion for GCC export are supplied with bilingual Arabic / English woven care labels as standard — at no additional charge. Labels include fibre composition (in Arabic and English), care symbols per ISO 3758, country of origin (India), and manufacturer identification. Arabic label content is reviewed by our GCC compliance consultant to ensure accuracy of textile terminology. Buyers can also supply their own label design; we produce to specification in our in-house label weaving unit.",
      },
      {
        q: "Does India-UAE CEPA apply to your products and what duty savings does it offer?",
        a: "Yes. Under the India-UAE Comprehensive Economic Partnership Agreement (CEPA), signed March 2022 and in force from May 2022, qualifying woven garment HS codes attract a reduced or nil customs duty into the UAE — versus the standard GCC rate of 5%. Most ladies woven garments (HS 6204, 6206) qualify under the CEPA schedule. Vedant Fashion provides a CEPA-compliant Certificate of Origin with every UAE shipment. Actual duty savings vary by HS code; we recommend verifying your specific product's tariff rate with your UAE customs broker.",
      },
      {
        q: "Can you produce modest-wear adaptations for Saudi Arabia and Kuwait?",
        a: "Yes. Vedant Fashion regularly adapts standard silhouettes for GCC modesty requirements: adding full-length sleeves to blouses and dresses, raising necklines, extending hem lengths to midi or floor-length, adding opaque cotton linings to sheer fabrics, and adjusting fit to reduce form-fitting construction. All modifications are sampled before bulk production at no additional charge for standard adaptations. Custom modest-wear collections — including abayas, modest kaftans, and wide-leg co-ord sets — are available as dedicated SKUs within our resort wear range.",
      },
      {
        q: "Do you have experience exporting to UAE free zones — Jebel Ali and Dubai Airport Freezone?",
        a: "Yes. Vedant Fashion regularly ships goods consigned to buyers operating in Jebel Ali Free Zone (JAFZA) and Dubai Airport Freezone (DAFZA). Free zone shipments follow standard commercial documentation with the buyer's free zone entity as consignee. We prepare free zone-compatible Commercial Invoices, Packing Lists, and Bills of Lading. Goods entering JAFZA or DAFZA are not subject to UAE import duty until they exit into the UAE mainland — a key benefit for importers who re-export to other GCC countries.",
      },
    ],
  },
  {
    id: "russia-cis",
    heading: "Russia & CIS",
    icon: "🌍",
    items: [
      {
        q: "Do your products meet EAC / TR CU 017/2011 requirements for Russian import?",
        a: "Yes. Vedant Fashion's garments can be supplied with EAC (EurAsian Conformity) certification under TR CU 017/2011 — the mandatory safety standard for light industry textile products sold in Russia and all EAEU member states (Russia, Belarus, Kazakhstan, Armenia, Kyrgyzstan). We facilitate EAC certification through accredited Russian Conformity Assessment Bodies (CABs) as part of our Russia export support service. Russian-language care and composition labels are produced in-house. EAC certification timelines are typically 15–25 working days and costs are borne by the buyer.",
      },
      {
        q: "What payment corridors do you use for Russia transactions?",
        a: "Due to SWIFT restrictions on major Russian banks since 2022, Vedant Fashion uses alternative payment corridors for Russian buyers: (1) payments via non-sanctioned Russian banks with SWIFT connectivity (e.g. Gazprombank, RSHB); (2) payments routed through third countries (UAE, India, Turkey, China) in USD or EUR; (3) INR-RUB bilateral settlement under the India-Russia Rupee Trade Mechanism where applicable. We recommend Russian buyers consult their bank on available corridors before placing an order. Full advance TT is the preferred payment structure for Russian transactions.",
      },
      {
        q: "What is the sea freight timeline to St. Petersburg and Novorossiysk?",
        a: "Sea freight from JNPT Mumbai to St. Petersburg (Baltic Sea) takes 25–32 days, depending on routing via Suez Canal and transshipment at European hubs (Hamburg, Rotterdam, or Gdańsk). Novorossiysk (Black Sea) is served in 25–30 days via Suez, with direct and transship options available. St. Petersburg serves the Moscow and North-West retail distribution corridor; Novorossiysk serves Southern Russia, the Caucasus, and Central Asian re-export. We work with freight forwarders specialising in India-Russia logistics and can recommend routing options based on current geopolitical and port access conditions.",
      },
    ],
  },
];

// ── Page Component ────────────────────────────────────────────────────

export default async function WholesaleFAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;

  // Flatten all Q&A for the FAQPage JSON-LD schema
  const allFaqs = SECTIONS.flatMap((s) =>
    s.items.map((item) => ({ question: item.q, answer: item.a }))
  );

  return (
    <div className="min-h-screen bg-background font-body">
      <FAQSchema items={allFaqs} />

      {/* HERO */}
      <PageHero
        subtitle="Wholesale FAQ"
        title="B2B Buyer Questions — Answered"
        description="30+ detailed answers covering ordering, sampling, quality, certifications, shipping to UAE and GCC, payment terms, Middle East compliance, and Russia / CIS trade. Vedant Fashion export team."
      />

      {/* SECTIONS */}
      {SECTIONS.map((section, si) => (
        <ContentBlock
          key={section.id}
          subtitle={`Section ${si + 1} of ${SECTIONS.length}`}
          title={`${section.icon}  ${section.heading}`}
          bg={si % 2 === 0 ? undefined : "cream"}
        >
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {section.items.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`${section.id}-${i}`}
                  className="border border-border rounded px-5 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body-sm text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ContentBlock>
      ))}

      {/* SECTION INDEX — quick navigation */}
      <ContentBlock subtitle="Quick Navigation" title="Browse by Topic" bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="bg-primary-foreground/10 border border-primary-foreground/20 rounded p-4 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <p className="text-lg mb-1">{s.icon}</p>
              <p className="text-body-sm font-medium text-primary-foreground">{s.heading}</p>
              <p className="text-caption text-primary-foreground/60 mt-1">
                {s.items.length} question{s.items.length !== 1 ? "s" : ""}
              </p>
            </a>
          ))}
        </div>
      </ContentBlock>

      <CTASection
        variant="dark"
        title="Still Have Questions?"
        description="Our GCC and Middle East export team responds within 24 hours — Monday to Friday, 09:00–18:00 IST."
        buttonText="Contact Export Team"
      />
    </div>
  );
}
