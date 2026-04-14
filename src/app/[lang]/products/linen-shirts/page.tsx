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
    title: "Linen Shirts Manufacturer Middle East | Vedant Fashion",
    description:
      "OEKO-TEX linen shirt manufacturer for UAE, Saudi Arabia, Qatar, Kuwait. MOQ 500 pcs. FOB USD 5.50–8.00. European flax. 18–22 days to Jebel Ali.",
    keywords:
      "linen shirts manufacturer UAE, linen shirt supplier Saudi Arabia, wholesale linen shirt exporter India, European flax linen shirts wholesale, linen shirt MOQ 500 pcs, ladies linen shirt Middle East, linen shirt Qatar Kuwait, FOB linen manufacturer India, private label linen shirts, enzyme washed linen shirt wholesale",
    alternates: buildHreflangAlternates("/products/linen-shirts"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What linen shirt styles do you manufacture for GCC wholesale buyers?",
    a: "Our linen shirts range covers 18 SKUs: classic European-cut linen shirts, mandarin collar, camp collar, linen-cotton blend, grandad collar, henley, oversized drop-shoulder, embroidered, yarn-dyed stripe, guayabera, safari, short sleeve, popover, band collar, herringbone weave, western yoke, women's resort linen shirt, and gingham check. All styles are available in European flax linen (Belgian / French origin) or linen-cotton blends, enzyme-washed for softness.",
  },
  {
    q: "Why is Indian-manufactured linen particularly suitable for the UAE and GCC markets?",
    a: "Linen's natural breathability, moisture-wicking properties, and lightweight feel make it ideal for Gulf climates. Our enzyme-washed linen shirts have a soft hand-feel from the first wear — unlike stiff untreated linen. The classic and camp collar styles are particularly well suited to smart-casual resort and hospitality wear popular across UAE, Qatar, and Bahrain.",
  },
  {
    q: "What is the MOQ and FOB price for linen shirts?",
    a: "Standard MOQ is 500 pieces per style per colour, with a FOB price range of USD 5.50–8.00 per piece from Mumbai. Simple classic-collar enzyme-washed linen shirts sit at the lower end; embroidered and guayabera styles with higher labour content are priced higher. We provide formal quotations within 24 hours of receiving your style and quantity requirements.",
  },
  {
    q: "What is the difference between your European Flax® linen and standard linen?",
    a: "European Flax® is a certification mark guaranteeing the linen is sourced from France, Belgium, or the Netherlands — the world's finest flax-growing regions — without irrigation or pesticides. Our European Flax® certified shirts (ls-001, ls-008, ls-010, ls-014) carry the European Flax® hang-tag, which is a significant differentiator for premium retail buyers in the UAE, Saudi Arabia, and Qatar.",
  },
  {
    q: "Can you produce linen shirts with Arabic embroidery or custom prints for the GCC market?",
    a: "Yes. We offer tonal and contrast embroidery in-house (as on VF-LS-008 Embroidered Linen Shirt), and can execute Arabic script motifs, geometric embroidery, or custom brand embroidery on any shirt style. Screen printing and digital printing on linen are also available for patch or all-over effects. Embroidery samples are provided within 15 working days.",
  },
  {
    q: "How are your linen shirts packed and what documentation is provided for GCC import?",
    a: "Linen shirts are individually folded, poly-bagged, and packed in export cartons — typically 12 pieces per carton. We provide Commercial Invoice, Packing List, Certificate of Origin, Bill of Lading, OEKO-TEX certificate copy, and (for UAE) ESMA-compliant bilingual care label declaration. Saudi SASO documentation is facilitated via accredited Conformity Assessment Bodies for regulated product lines.",
  },
];

export default async function LinenShirtsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <ProductCategoryPage
      categorySlug="linen-shirts"
      primaryKeyword="Linen Shirts Manufacturer for Middle East Wholesale Buyers"
      heroDescription="OEKO-TEX certified European flax linen shirts manufactured in India. Classic, camp collar, guayabera, oversized, and embroidered styles. Enzyme-washed for softness. FOB USD 5.50–8.00 per piece. MOQ 500 pcs. 18–22 days sea freight to Jebel Ali."
      middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"]}
      gccMarketNotes={[
        { country: "UAE", note: "Camp collar and short-sleeve linen shirts in high demand for resort retail and hospitality channels across Dubai and Abu Dhabi. 18–22 days to Jebel Ali." },
        { country: "Saudi Arabia", note: "Long-sleeve classic and guayabera linen shirts suitable for smart-casual and modest-wear retail. SASO compliant. 20–24 days to Dammam / Jeddah." },
        { country: "Qatar", note: "Premium European flax® shirts well received in Doha's luxury retail sector. GSO 1956 compliant labels. 20–23 days to Hamad Port." },
        { country: "Kuwait", note: "Linen-cotton blend shirts popular for year-round wear in Kuwait's climate. PAAET/PSNS compliant. 19–22 days to Shuwaikh." },
      ]}
      faqs={FAQS}
      lang={lang}
    />
  );
}
