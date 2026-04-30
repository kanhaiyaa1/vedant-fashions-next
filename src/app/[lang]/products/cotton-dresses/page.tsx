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
    title: "Cotton Dresses Manufacturer Middle East | Vedant Fashion",
    description:
      "GOTS-certified cotton dress manufacturer for UAE, Saudi Arabia, Qatar & Kuwait. MOQ 300 pcs. FOB USD 6.00–9.50. 18–22 days to Jebel Ali.",
    keywords:
      "cotton dresses manufacturer UAE, organic dress supplier Saudi Arabia, wholesale dress exporter India, GOTS certified dress manufacturer, cotton dress MOQ 300 pcs, ladies dress wholesale Middle East, dress supplier Qatar Kuwait, FOB dress manufacturer India, private label dress manufacturer, organic cotton midi dress wholesale",
    alternates: buildHreflangAlternates("/products/cotton-dresses"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What cotton dress styles do you manufacture for Middle East wholesale buyers?",
    a: "Our cotton dress range includes A-line midi dresses, shirt dresses, wrap dresses, tiered maxi dresses, pinafores, smocked-bodice midi dresses, button-front styles, linen-cotton shift dresses, embroidered-bodice dresses, and digital-print midi dresses — 20+ SKUs in total. All styles are available in GOTS-certified organic cotton, with modest-wear adaptations (longer hem, higher neckline, sleeve extensions) available for the GCC market.",
  },
  {
    q: "What is the FOB price range for organic cotton dresses exported to the UAE and GCC?",
    a: "Indicative FOB pricing at Mumbai is USD 6.00–9.50 per piece at MOQ (300 pcs). Simple A-line and shift dresses sit at the lower end; smocked-bodice, embroidered, and printed styles with higher labour content sit at the upper end. Pricing is confirmed in writing within 24 hours of receiving your style request and target quantity.",
  },
  {
    q: "Can you produce modest-wear adaptations of cotton dresses for Saudi Arabia and the GCC?",
    a: "Yes. We regularly adapt our core dress silhouettes for GCC modesty requirements — adding full sleeves, raising necklines, extending hem lengths to midi or maxi, and adjusting fit to be less form-fitting. All adaptations are sampled before bulk production at no additional charge for standard modifications.",
  },
  {
    q: "Are your cotton dresses compliant with SASO and ESMA textile labelling standards?",
    a: "Yes. All dresses destined for Saudi Arabia carry SASO-compliant documentation, and UAE shipments meet ESMA requirements. Woven care labels include fibre composition, care instructions in Arabic and English, country of origin, and manufacturer details — meeting GSO 1956 GCC-wide standards. Third-party testing reports (SGS / Intertek) can be arranged for customs clearance.",
  },
  {
    q: "What is the minimum order for cotton dresses and can we mix styles in one order?",
    a: "Standard MOQ is 300 pieces per style per colour. For buyers placing multi-style orders, we allow style mixing within a single purchase order. A typical first shipment for a GCC wholesale buyer might be 4 styles × 300 pieces = 1,200 pieces, fitting efficiently into a 20ft container. Contact us for a consolidated order proposal.",
  },
  {
    q: "How long is the production lead time for cotton dresses to GCC markets?",
    a: "Standard production lead time is 45–55 days from order confirmation and fabric receipt. Sea freight from JNPT Mumbai to Jebel Ali (UAE) adds 18–22 days, Dammam/Jeddah (Saudi Arabia) 20–24 days, and Doha (Qatar) 20–23 days. Total door-to-port timeline is typically 65–80 days. Air freight is available for urgent replenishment orders.",
  },
];

export default async function CottonDressesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("cotton-dresses");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("cotton-dresses");
  return (
    <>
      <ProductCategoryPage
        categorySlug="cotton-dresses"
        primaryKeyword="Cotton Dresses Manufacturer for Middle East Wholesale Buyers"
        heroDescription="GOTS 6.0 certified organic cotton dress manufacturer in India. A-line, shirt, wrap, maxi, and smocked styles. Modest-wear adaptations for GCC. FOB USD 6.00–9.50 per piece. MOQ 300 pcs. 18–22 days sea freight to Jebel Ali."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt"]}
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
              Our Cotton Dresses Collection
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
                      src={PRODUCT_IMAGES.dresses[idx % PRODUCT_IMAGES.dresses.length]}
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
