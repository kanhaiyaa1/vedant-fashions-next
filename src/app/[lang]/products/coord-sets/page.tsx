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
    title: "Co-ord Sets Manufacturer Middle East | India Export | Vedant Fashion",
    description:
      "Ladies co-ord sets manufacturer exporting to UAE, Saudi Arabia & GCC. Matching top and bottom sets. MOQ 100 pcs. FOB USD 7–12. 18–22 days to Jebel Ali.",
    keywords:
      "co-ord sets manufacturer UAE, matching sets supplier Saudi Arabia, wholesale co-ord sets India, ladies coord set exporter Middle East, rayon coord set MOQ 100, georgette coord set wholesale, FOB coord sets India, private label coord sets, two piece set manufacturer India",
    alternates: buildHreflangAlternates("/products/coord-sets"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What co-ord set styles do you manufacture for GCC wholesale buyers?",
    a: "Our co-ord sets range covers 12 SKUs including floral rayon top and wide-leg trouser sets, georgette crop top and palazzo sets, solid crepe blazer and trouser sets, viscose tie-dye relaxed sets, printed challis two-piece sets, and more. All sets are available to sell as a complete set or as separates with matched colourways.",
  },
  {
    q: "What is the MOQ and FOB price for co-ord sets?",
    a: "Standard MOQ is 100 pieces per style per colour. FOB pricing from Mumbai is USD 7.00–12.00 per piece — simple rayon and viscose sets at the lower end, lined crepe and georgette occasion sets at the upper end. We provide formal quotations within 24 hours of receiving your style and quantity brief.",
  },
  {
    q: "Can co-ord sets be ordered as separates rather than only as sets?",
    a: "Yes. All our co-ord sets are designed with matched cut-and-sew so the top and bottom can be sold independently or as a set. We can supply tops and bottoms in separate cartons for buyers who prefer to merchandise them separately. The same print run ensures colour consistency across both pieces.",
  },
  {
    q: "What fabrics are used in your co-ord sets?",
    a: "Our co-ord sets are available in viscose rayon challis (110 GSM), georgette (90 GSM), crepe (150 GSM), and linen-viscose blends. All fabrics carry OEKO-TEX Standard 100 certification. Rayon and viscose sets are most popular for resort and GCC climates due to their lightweight breathability.",
  },
  {
    q: "Are co-ord sets suitable for the UAE and Gulf retail market?",
    a: "Yes. Lightweight rayon and viscose co-ord sets are well suited to UAE and GCC resort, leisure, and boutique retail. We offer modest-wear adaptations — longer tops, wider legs, added coverage — for Saudi and Kuwaiti buyers. Resort-ready prints and solids in breathable fabrics are consistent top sellers across the Gulf.",
  },
  {
    q: "Can you produce private label co-ord sets with custom prints for GCC buyers?",
    a: "Yes. We offer full private label service including custom print development (digital, screen, or hand block), exclusive colourways, custom woven brand labels, and branded packaging. Custom print samples are ready within 15–20 working days. Minimum print run is 300 metres of fabric per design.",
  },
];

export default async function CoordSetsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("coord-sets");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("coord-sets");
  return (
    <>
      <ProductCategoryPage
        categorySlug="coord-sets"
        primaryKeyword="Co-ord Sets Manufacturer for Middle East Wholesale Buyers"
        heroDescription="Matching co-ord sets manufactured in India. Viscose, rayon, georgette, and crepe fabrics. MOQ 100 pieces. FOB USD 7–12. Exporting to UAE, Saudi Arabia, Qatar, Kuwait, Russia."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"]}
        gccMarketNotes={[
          { country: "UAE", note: "Rayon and viscose co-ord sets in high demand for Dubai resort retail and boutiques. 18–22 days to Jebel Ali." },
          { country: "Saudi Arabia", note: "Modest-wear adaptations of co-ord sets well suited to KSA retail expansion. SASO compliant. 20–24 days to Dammam / Jeddah." },
          { country: "Qatar", note: "Premium crepe and georgette sets popular in Doha lifestyle retail. GSO compliant. 20–23 days to Hamad Port." },
          { country: "Kuwait", note: "Resort and leisure co-ord sets popular year-round. 19–22 days to Shuwaikh." },
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
              Our Co-ord Sets Collection
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
