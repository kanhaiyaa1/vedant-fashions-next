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
    title: "Woven Blouses Manufacturer Middle East | Vedant Fashion",
    description:
      "GOTS-certified woven blouse manufacturer for UAE, Saudi Arabia, Qatar & Kuwait. MOQ 300 pcs. FOB USD 4.50–7.00. 18–22 days to Jebel Ali.",
    keywords:
      "woven blouses manufacturer UAE, ladies blouse supplier Saudi Arabia, wholesale blouse exporter India, GOTS certified blouse manufacturer, woven blouse MOQ 300 pcs, organic cotton blouse wholesale, blouse supplier Qatar Kuwait, ladies woven wear Middle East, FOB blouse manufacturer India, private label blouse manufacturer",
    alternates: buildHreflangAlternates("/products/woven-blouses"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What is the minimum order quantity for woven blouses?",
    a: "Our standard MOQ for woven blouses is 300 pieces per style per colour. For styles requiring hand-embroidery or specialised trims (e.g. VF-WB-003 Embroidered Linen Blouse), the MOQ is 500 pieces due to the additional handcraft time involved. Mixed-colour orders for the same style may be split at 150 pieces per colour subject to a small setup charge.",
  },
  {
    q: "What FOB price range should UAE and Saudi buyers expect for woven blouses?",
    a: "Indicative FOB pricing at Mumbai is USD 4.50–7.00 per piece for standard organic cotton and Tencel™ blouses at MOQ. Embroidered and artisan-detailed styles (smocked, pintuck, hand-embroidery) sit at the higher end. Final pricing is confirmed after style selection, fabric specification, and quantity. We provide a formal quotation within 24 hours of receiving your product brief.",
  },
  {
    q: "Are your blouses compliant with UAE ESMA and Saudi SASO requirements?",
    a: "Yes. All blouses exported to the GCC carry bilingual Arabic / English woven care labels and fibre composition tags meeting ESMA (UAE), SASO (Saudi Arabia), and GSO 1956 (GCC-wide) textile labelling requirements. We provide a compliance declaration and can arrange third-party product testing (SGS / Intertek) at your request.",
  },
  {
    q: "How long does sea freight take from India to UAE, Saudi Arabia, and Qatar?",
    a: "From JNPT Mumbai: Jebel Ali (UAE) 18–22 days, Dammam / Jeddah (Saudi Arabia) 20–24 days, Hamad Port / Doha (Qatar) 20–23 days, Shuwaikh (Kuwait) 19–22 days, Muscat (Oman) 17–20 days. We work with established freight forwarders on all GCC lanes and can provide competitive FCL and LCL rates.",
  },
  {
    q: "Can you produce private label blouses with our brand's labels and packaging?",
    a: "Yes. We offer full private label and OEM services — custom woven brand labels, hang-tags, polybag printing, shipper carton branding, and inner packaging. Our design studio can also develop exclusive colourways, embroidery patterns, or print designs under NDA. A minimum of 500 pieces is recommended for first private label orders.",
  },
  {
    q: "What certifications do your woven blouses carry?",
    a: "Depending on the style and fabric, our woven blouses carry GOTS 6.0, OEKO-TEX Standard 100, GRS 4.0, FSC, and EU Ecolabel certifications. All blouses use AZO-free dyes with formaldehyde content below 75 ppm (Category II), meeting EU REACH and GCC import standards. Full certificate copies are provided with each shipment.",
  },
];

export default async function WovenBlousesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("woven-blouses");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("woven-blouses");
  return (
    <>
      <ProductCategoryPage
        categorySlug="woven-blouses"
        primaryKeyword="Woven Blouses Manufacturer for Middle East Wholesale Buyers"
        heroDescription="GOTS 6.0 and OEKO-TEX certified ladies woven blouses manufactured in India. Organic cotton poplin, Tencel™ lyocell, linen-cotton blends. FOB USD 4.50–7.00 per piece. MOQ 300 pcs. 18–22 days sea freight to Jebel Ali, Dubai."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"]}
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
              Our Woven Blouses Collection
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
                      src={PRODUCT_IMAGES.blouses[idx % PRODUCT_IMAGES.blouses.length]}
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
