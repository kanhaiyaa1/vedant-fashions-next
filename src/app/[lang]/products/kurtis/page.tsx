import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import ProductCategoryPage from "@/components/vedant/ProductCategoryPage";
import type { CategoryFaq } from "@/components/vedant/ProductCategoryPage";
import { getActiveProducts } from "@/lib/supabase/products";
import { getProductsByCategory } from "@/data/products";
import { PRODUCT_IMAGES } from "@/data/images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Kurtis Manufacturer Middle East | India Export | Vedant Fashion",
    description:
      "Ladies kurtis manufacturer exporting to UAE, Saudi Arabia & GCC. Straight, A-line, flared styles. MOQ 100 pcs. FOB USD 5–9. 18–22 days to Jebel Ali.",
    keywords:
      "kurtis manufacturer UAE, ladies kurti supplier Saudi Arabia, wholesale kurti exporter India, cotton kurti Middle East, rayon kurti MOQ 100, georgette kurti wholesale, FOB kurti manufacturer India, private label kurtis, anarkali kurti wholesale, straight kurti manufacturer",
    alternates: buildHreflangAlternates("/products/kurtis"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What kurti styles do you manufacture for GCC and Middle East buyers?",
    a: "Our kurtis range covers 15 SKUs: straight cut cotton kurti, A-line rayon kurti, asymmetric georgette kurti, flared anarkali kurti, printed cotton short kurti, mandarin collar linen kurti, embroidered neckline georgette kurti, tie-dye rayon kurti, solid crepe kurti, longline cotton kurti, casual rayon midi kurti, and more. All styles are available with modest-wear adaptations for GCC markets.",
  },
  {
    q: "What is the MOQ and FOB price for kurtis exported to the UAE and GCC?",
    a: "Standard MOQ is 100 pieces per style per colour. FOB pricing from Mumbai is USD 5.00–9.00 per piece — simple cotton and rayon straight kurtis at the lower end, embroidered and georgette styles with higher construction at the upper end. Formal quotation within 24 hours of receiving your style and quantity brief.",
  },
  {
    q: "Are your kurtis suitable for the UAE, Saudi Arabia, and Gulf retail market?",
    a: "Yes. Kurtis are popular with Gulf buyers for their modest coverage, comfortable fit, and versatility. Our straight, A-line, and anarkali styles provide natural coverage suitable for UAE and Saudi retail. We offer full-sleeve and longer hem adaptations for buyers targeting conservative markets in KSA and Kuwait.",
  },
  {
    q: "What fabrics are your kurtis made from?",
    a: "Our kurtis are available in cotton cambric (100 GSM), rayon challis (110 GSM), polyester georgette (90 GSM), cotton lawn (80 GSM), and linen-cotton blends. All fabrics carry OEKO-TEX Standard 100 certification. Cotton and rayon styles are most popular for GCC climates due to their breathability.",
  },
  {
    q: "Can you produce custom print kurtis with Arabic motifs or brand embroidery?",
    a: "Yes. We offer full custom print development (digital print, screen print, hand block) and in-house embroidery including Arabic motifs, geometric work, and brand embroidery. Print and embroidery samples are ready within 15–20 working days. Minimum print run is 300 metres of fabric per design.",
  },
  {
    q: "Do your kurtis comply with GCC import standards and labelling requirements?",
    a: "Yes. All kurtis exported to GCC carry bilingual Arabic / English woven care labels with fibre composition, care symbols (ISO 3758), country of origin, and manufacturer details meeting ESMA, SASO, and GSO 1956 standards. Certificate of Origin for India-UAE CEPA preferential duty is provided with every UAE shipment.",
  },
];

export default async function KurtisPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("kurtis");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("kurtis");
  return (
    <>
      <ProductCategoryPage
        categorySlug="kurtis"
        primaryKeyword="Kurtis Manufacturer for Middle East & Global Wholesale Buyers"
        heroDescription="Ladies kurtis manufactured in India. Straight, A-line, asymmetric, and flared styles in rayon, georgette, and cotton. MOQ 100 pieces. FOB USD 5–9. Exporting to UAE, Saudi Arabia, Russia, Poland."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt"]}
        gccMarketNotes={[
          { country: "UAE", note: "Straight and A-line kurtis popular in Dubai's multi-cultural retail market. 18–22 days to Jebel Ali." },
          { country: "Saudi Arabia", note: "Full-sleeve and long kurtis well suited to KSA modest wear retail. SASO compliant. 20–24 days to Dammam / Jeddah." },
          { country: "Qatar", note: "Premium cotton and georgette kurtis in demand in Doha boutiques. 20–23 days to Hamad Port." },
          { country: "Oman", note: "Cotton kurtis popular in Muscat's growing fashion retail sector. 17–20 days from Mumbai." },
        ]}
        faqs={FAQS}
        lang={lang}
        moqOverride={first?.moq ?? undefined}
        leadTimeOverride={first?.lead_time ?? undefined}
        fobPriceOverride={first?.fob_price ?? undefined}
      />
      {staticProducts.length > 0 && (
        <section className="section-spacing bg-secondary/30">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-10">
              Our Kurtis Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staticProducts.map((p, idx) => (
                <Link
                  key={p.slug}
                  href={`/${lang}/products/${p.category}/${p.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square overflow-hidden relative bg-secondary">
                    <Image
                      src={PRODUCT_IMAGES.tops[idx % PRODUCT_IMAGES.tops.length]}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    {p.fabricOptions[0] && (
                      <p className="text-xs text-muted-foreground font-body">
                        {p.fabricOptions[0].composition} · {p.fabricOptions[0].gsm} GSM
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground font-body">MOQ {p.moq}</p>
                    <span className="inline-block text-xs uppercase tracking-widest text-primary font-medium mt-1">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
