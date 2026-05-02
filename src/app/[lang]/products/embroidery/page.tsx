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
    title: "Embroidery Garments Manufacturer India | Vedant Fashion",
    description:
      "Embroidered ladies garments manufacturer India. Hand & machine embroidery. MOQ 100 pcs. FOB USD 8–15. Exporting to UAE, Saudi Arabia, GCC.",
    keywords:
      "embroidery garments manufacturer India, hand embroidery blouse UAE, machine embroidery top wholesale, embroidered kurti Middle East, embroidery garment exporter India, hand embroidery manufacturer Gujarat, MOQ 100 embroidery, FOB embroidery garments India",
    alternates: buildHreflangAlternates("/products/embroidery"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What embroidery techniques does Vedant Fashion offer?",
    a: "We offer three embroidery techniques: hand embroidery (artisan thread work including floral, geometric, and arabesque motifs by skilled craftspeople), machine embroidery (computer-controlled multi-head embroidery for dense, consistent patterns), and Schiffli embroidery (large-run lace and all-over embroidery for fabric yardage). All embroidery is executed in our dedicated in-house embroidery unit.",
  },
  {
    q: "What is the MOQ and FOB price for embroidery garments?",
    a: "Standard MOQ is 100 pieces per style per colour. FOB pricing from Mumbai is USD 8.00–15.00 per piece — machine embroidery styles at the lower end, hand embroidery artisan pieces with higher labour content at the upper end. Embroidery samples are produced within 15–20 working days. Formal quotation within 24 hours of receiving your style brief.",
  },
  {
    q: "Can you produce Arabic embroidery or custom embroidery for GCC buyers?",
    a: "Yes. We regularly produce Arabic script motifs, geometric arabesque embroidery, and custom brand embroidery for UAE, Saudi, and Bahraini buyers. Custom embroidery artwork (buyer-supplied or developed by our studio under NDA) can be applied to any garment style. Embroidery digitisation is included in the sampling process.",
  },
  {
    q: "Are embroidery garments suitable for the UAE and Gulf retail market?",
    a: "Yes. Embroidery is particularly well received across UAE, Saudi Arabia, Qatar, and Bahrain for boutique, occasion, and festive retail. Arabic motif embroidery and gold/silver thread work resonate strongly with Gulf consumers. We can adapt necklines, sleeve lengths, and garment coverage for GCC modesty requirements.",
  },
  {
    q: "What base fabrics are used for embroidery garments?",
    a: "Our embroidery garments use organic cotton poplin (110 GSM), polyester georgette (90 GSM), European flax linen (155 GSM), and rayon challis (110 GSM) as base fabrics. The choice of base fabric affects the embroidery technique used. Georgette and cotton are the most popular bases for GCC embroidery garments.",
  },
  {
    q: "How long does production take for embroidery garments?",
    a: "Standard production lead time for embroidery garments is 60–90 days from order confirmation, fabric receipt, and embroidery artwork approval. Hand embroidery styles require longer due to the artisan labour involved. Sea freight from Mumbai to Jebel Ali adds 18–22 days. Total door-to-port timeline is typically 80–115 days.",
  },
];

export default async function EmbroideryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("embroidery");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("embroidery");
  return (
    <>
      <ProductCategoryPage
        categorySlug="embroidery"
        primaryKeyword="Embroidery Garments Manufacturer for Middle East Wholesale Buyers"
        heroDescription="Hand and machine embroidered ladies garments from India. Embroidered blouses, tops, kurtis, and dresses. In-house embroidery unit. MOQ 100 pieces. FOB USD 8–15."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"]}
        gccMarketNotes={[
          { country: "UAE", note: "Arabic motif and floral embroidery popular in Dubai boutiques and occasion wear retail. 18–22 days to Jebel Ali." },
          { country: "Saudi Arabia", note: "Gold thread and geometric embroidery well suited to KSA festive and occasion retail. SASO compliant. 20–24 days to Dammam / Jeddah." },
          { country: "Qatar", note: "Premium hand embroidery garments in demand in Doha's luxury boutique sector. 20–23 days to Hamad Port." },
          { country: "Bahrain", note: "Embroidered kaftans and tops popular in Manama's boutique retail. 18–22 days from Mumbai." },
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
              Our Embroidery Collection
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
