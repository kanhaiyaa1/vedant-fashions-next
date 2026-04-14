import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import ProductCategoryPage from "@/components/vedant/ProductCategoryPage";
import type { CategoryFaq } from "@/components/vedant/ProductCategoryPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Resort Wear Manufacturer Middle East | India Export | Vedant",
    description:
      "GOTS-certified resort wear manufacturer for UAE, Saudi Arabia, Qatar & Kuwait. Kaftans, wide-leg trousers, jumpsuits. MOQ 300 pcs. FOB USD 7.00–12.00.",
    keywords:
      "resort wear manufacturer UAE, kaftan supplier Saudi Arabia, wholesale resort wear exporter India, GOTS resort wear manufacturer, wide leg trousers wholesale Middle East, linen resort wear Qatar Kuwait, kaftan MOQ 300 pcs, FOB resort wear India, private label resort wear, beach cover-up wholesale manufacturer",
    alternates: buildHreflangAlternates("/products/resort-wear"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What resort wear styles do you manufacture for GCC and Middle East buyers?",
    a: "Our resort wear range covers 15 SKUs: cotton voile kaftans (hand-block printed), wide-leg linen trousers, unstructured linen blazers, printed cotton sarongs, linen jumpsuits, organic cotton palazzo pants, beach cover-ups with crochet trim, linen Bermuda shorts, cotton wrap skirts, tiered maxi skirts, linen cropped tops, drawstring cotton trousers, linen tunic dresses, organic cotton halter tops, and linen shackets. All styles are designed for resort, hospitality, and leisure retail.",
  },
  {
    q: "Are your kaftans and resort styles suitable for the UAE and Gulf retail market?",
    a: "Yes. Our kaftan and wide-leg trouser styles are particularly well positioned for UAE and GCC resort retail — breathable organic cotton voile and linen are ideal for the Gulf climate. We offer modest-wear adaptations (full coverage, longer lengths, opaque linings) across all styles. Hand block-printed and embroidered kaftans are also popular with UAE and Bahraini boutique buyers.",
  },
  {
    q: "What is the MOQ and FOB price range for resort wear?",
    a: "Standard MOQ is 300 pieces per style per colour. FOB pricing from Mumbai is USD 7.00–12.00 per piece — kaftans and wide-leg trousers at the lower end, linen blazers and jumpsuits with higher fabric and construction cost at the upper end. We provide formal quotations within 24 hours of receiving your product brief and target quantity.",
  },
  {
    q: "Can resort wear be co-ordinated as sets for wholesale buyers?",
    a: "Yes. We offer co-ordinated resort sets — matching top + wide-leg trousers, kaftan + palazzo pant, crop top + maxi skirt — designed to be sold as sets or as separates. Co-ord sets are available in matching or complementary colourways. The same fabrication and print runs across both pieces ensure colour consistency.",
  },
  {
    q: "Do your resort wear products comply with UAE ESMA and GCC customs requirements?",
    a: "Yes. All resort wear exported to the GCC carries bilingual Arabic / English woven care labels with fibre composition, care symbols (ISO 3758), country of origin, and manufacturer details per ESMA, SASO, and GSO 1956 standards. Certificate of Origin for India-UAE CEPA preferential duty is provided with every UAE shipment.",
  },
  {
    q: "Can you produce custom block-printed or digital-printed kaftans for GCC buyers?",
    a: "Yes. We offer full in-house print development — traditional hand block printing (Jaipur artisans), rotary screen printing, and digital printing. Custom print artwork (buyer-supplied or developed by our studio) can be applied to any resort wear style. Print samples are produced within 15–20 working days. Minimum print run is 300 metres of fabric.",
  },
];

export default async function ResortWearPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <ProductCategoryPage
      categorySlug="resort-wear"
      primaryKeyword="Resort Wear Manufacturer for Middle East Wholesale Buyers"
      heroDescription="GOTS 6.0 certified resort wear manufacturer in India. Kaftans, wide-leg trousers, linen jumpsuits, palazzo pants, and beach cover-ups. Breathable fabrics for Gulf climates. FOB USD 7.00–12.00 per piece. MOQ 300 pcs. 17–22 days sea freight to GCC ports."
      middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt"]}
      gccMarketNotes={[
        { country: "UAE", note: "Kaftans and wide-leg trousers in high demand for Dubai resort retail, beach clubs, and hospitality uniforms. 18–22 days to Jebel Ali." },
        { country: "Saudi Arabia", note: "Modest resort wear — covered kaftans and wide-leg trousers — well suited to KSA retail expansion. SASO compliant. 20–24 days to Dammam / Jeddah." },
        { country: "Qatar", note: "Premium linen jumpsuits and shackets popular in Doha's lifestyle retail. GSO compliant. 20–23 days to Hamad Port." },
        { country: "Oman", note: "Resort wear for Muscat's growing tourism retail sector. Closest GCC port — 17–20 days from Mumbai. DGSM compliant." },
      ]}
      faqs={FAQS}
      lang={lang}
    />
  );
}
