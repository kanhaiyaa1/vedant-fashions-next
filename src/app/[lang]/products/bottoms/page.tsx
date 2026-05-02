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
    title: "Ladies Bottoms Manufacturer Middle East | India Export | Vedant Fashion",
    description:
      "Ladies western bottoms manufacturer India. Wide-leg pants, palazzo, skirts. MOQ 100 pcs. FOB USD 5–9. Exporting to UAE, Saudi Arabia, GCC.",
    keywords:
      "ladies bottoms manufacturer UAE, wide-leg pants supplier Saudi Arabia, palazzo trousers wholesale India, printed skirt exporter Middle East, rayon palazzo MOQ 100, linen trousers wholesale, FOB bottoms manufacturer India, private label bottoms, maxi skirt manufacturer GCC",
    alternates: buildHreflangAlternates("/products/bottoms"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What ladies bottom styles do you manufacture for GCC wholesale buyers?",
    a: "Our western bottoms range covers 8 SKUs: wide-leg rayon palazzo trousers, printed rayon maxi skirts, linen wide-leg tailored trousers, crepe midi skirts, casual cotton drawstring trousers, printed georgette culottes, linen Bermuda shorts, and tiered cotton midi skirts. All styles are available in modest lengths suitable for GCC retail.",
  },
  {
    q: "What is the MOQ and FOB price for ladies bottoms?",
    a: "Standard MOQ is 100 pieces per style per colour. FOB pricing from Mumbai is USD 5.00–9.00 per piece — rayon palazzo and printed skirts at the lower end, lined crepe and tailored linen trousers at the upper end. Formal quotation within 24 hours of receiving your style and quantity brief.",
  },
  {
    q: "Are your bottoms suitable for modest wear in Saudi Arabia and Kuwait?",
    a: "Yes. Our maxi skirts, wide-leg palazzo trousers, and longline styles are naturally modest-length and suitable for Saudi Arabia, Kuwait, and other conservative GCC markets. All styles can be length-adjusted for full-coverage requirements at no additional charge for standard modifications.",
  },
  {
    q: "Can bottoms be co-ordinated with your tops range for wholesale buyers?",
    a: "Yes. Our bottoms range is specifically designed to co-ordinate with our tops and blouses range. Matching print runs and colourways are available across both categories. Wholesale buyers regularly order tops and bottoms in matched pairs to provide complete outfit solutions for their retail customers.",
  },
  {
    q: "What fabrics are your ladies bottoms made from?",
    a: "Our bottoms are available in rayon challis (110 GSM), European flax linen (180 GSM), crepe (150 GSM), cotton cambric (100 GSM), and georgette (90 GSM). All fabrics carry OEKO-TEX Standard 100 certification. Rayon and linen are most popular for GCC buyers due to their breathability and fluid drape.",
  },
  {
    q: "Do your bottoms comply with ESMA and SASO textile labelling requirements?",
    a: "Yes. All bottoms exported to the GCC carry bilingual Arabic / English woven care labels with fibre composition, care symbols (ISO 3758), country of origin, and manufacturer details meeting ESMA, SASO, and GSO 1956 standards. Certificate of Origin for India-UAE CEPA preferential duty is provided with every UAE shipment.",
  },
];

export default async function BottomsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("bottoms");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("bottoms");
  return (
    <>
      <ProductCategoryPage
        categorySlug="bottoms"
        primaryKeyword="Ladies Western Bottoms Manufacturer for Middle East Wholesale Buyers"
        heroDescription="Ladies western wear bottoms from India. Wide-leg pants, palazzo, printed skirts, and casual trousers in viscose, rayon, and crepe. MOQ 100 pieces. FOB USD 5–9."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt"]}
        gccMarketNotes={[
          { country: "UAE", note: "Wide-leg palazzo and printed maxi skirts popular in Dubai's resort and casual retail. 18–22 days to Jebel Ali." },
          { country: "Saudi Arabia", note: "Modest-length maxi skirts and wide-leg trousers well suited to KSA retail. SASO compliant. 20–24 days." },
          { country: "Qatar", note: "Linen and crepe tailored bottoms popular in Doha's lifestyle retail. GSO compliant. 20–23 days to Hamad Port." },
          { country: "Oman", note: "Rayon and cotton bottoms popular in Muscat's growing fashion retail. 17–20 days from Mumbai." },
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
              Our Western Bottoms Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(() => {
                const bottomImgs = [...PRODUCT_IMAGES.pants, ...PRODUCT_IMAGES.skirts];
                return staticProducts.map((p, idx) => (
                  <Link
                    key={p.slug}
                    href={`/${lang}/products/${p.category}/${p.slug}`}
                    className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden relative bg-secondary">
                      <Image
                        src={bottomImgs[idx % bottomImgs.length]}
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
                ));
              })()}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
