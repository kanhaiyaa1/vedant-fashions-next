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
}) {
  await params;
  return {
    title: "Sequin Occasion Wear Manufacturer India | Vedant Fashion",
    description:
      "Sequin & occasion wear manufacturer India. Evening tops, sequin dresses, party co-ords. MOQ 100 pcs. FOB USD 10–18. Exporting to UAE & GCC.",
    keywords:
      "sequin wear manufacturer India, occasion wear manufacturer UAE, sequin dress wholesale Saudi Arabia, party wear exporter India, fully sequined top wholesale, sequin co-ord set manufacturer, MOQ 100 sequin wear, FOB occasion wear India, evening wear manufacturer GCC",
    alternates: buildHreflangAlternates("/products/sequin-occasion"),
  };
}

const FAQS: CategoryFaq[] = [
  {
    q: "What sequin and occasion wear styles do you manufacture?",
    a: "Our sequin and occasion range covers 10 SKUs: fully sequined party tops, sequin midi dresses, sequin co-ord sets (top and wide-leg trouser), embellished georgette blouses (sequin + bead work), sequin maxi dresses, metallic foil-print occasion tops, beaded evening tops, sequin wrap skirts, occasion blazers with sequin lapel, and embellished kaftan-style occasion dresses.",
  },
  {
    q: "What is the MOQ and FOB price for sequin and occasion wear?",
    a: "Standard MOQ is 100 pieces per style per colour. FOB pricing from Mumbai is USD 10.00–18.00 per piece — solid sequin tops at the lower end, embellished occasion dresses and co-ord sets with higher materials and construction at the upper end. Formal quotation within 24 hours of receiving your style and quantity brief.",
  },
  {
    q: "Are sequin garments suitable for UAE and GCC party and festive retail?",
    a: "Yes. Fully sequined and embellished garments are strong sellers in UAE, Saudi Arabia, Qatar, and Bahrain for Eid, National Day, wedding season, and resort celebration retail. Gold, silver, and rose gold sequins are perennially popular. We can produce modesty-adapted versions (longer lengths, full sleeves) for conservative GCC markets.",
  },
  {
    q: "What sequin fabrics and embellishment materials do you use?",
    a: "We use pailette sequin (80% polyester / 20% nylon, 220 GSM), sequin mesh (100% polyester, 200 GSM), and metallic foil-print base fabrics. Beads used are glass and acrylic in AZO-free colourways. All base fabrics and trims carry OEKO-TEX Standard 100 certification and comply with EU REACH and GCC chemical standards.",
  },
  {
    q: "Can you produce custom colour sequin garments for a specific brand or collection?",
    a: "Yes. We can source custom sequin colourways including Pantone-matched metallic and iridescent options for private label collections. Custom sequin sampling takes 20–25 working days. We work under NDA for exclusive colour and design development. Minimum run for custom sequin fabric is 300 metres.",
  },
  {
    q: "How are sequin garments packed and what documentation is provided for GCC import?",
    a: "Sequin garments are individually poly-bagged with tissue insert and packed in export cartons — typically 6–8 pieces per carton due to weight. We provide Commercial Invoice, Packing List, Certificate of Origin, Bill of Lading, and ESMA / SASO compliant bilingual care label declaration. India-UAE CEPA Certificate of Origin is provided for UAE shipments.",
  },
];

export default async function SequinOccasionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dbProducts = await getActiveProducts("sequin-occasion");
  const first = dbProducts[0];
  const staticProducts = getProductsByCategory("sequin-occasion");
  return (
    <>
      <ProductCategoryPage
        categorySlug="sequin-occasion"
        primaryKeyword="Sequin & Occasion Wear Manufacturer for Middle East Buyers"
        heroDescription="Sequin and occasion wear manufactured in India. Fully sequined tops, dresses, and co-ords for evening and celebration markets. MOQ 100 pieces. FOB USD 10–18. Exporting to UAE, Saudi Arabia, Russia."
        middleEastMarkets={["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain"]}
        gccMarketNotes={[
          { country: "UAE", note: "Gold and silver sequin garments in high demand for Dubai's event, party, and Eid retail. 18–22 days to Jebel Ali." },
          { country: "Saudi Arabia", note: "Occasion and festive sequin wear popular for wedding and National Day retail in KSA. SASO compliant. 20–24 days." },
          { country: "Qatar", note: "Premium embellished occasion wear well received in Doha luxury boutiques. GSO compliant. 20–23 days to Hamad Port." },
          { country: "Bahrain", note: "Sequin and embellished tops popular in Manama's occasion wear retail. 18–22 days from Mumbai." },
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
              Our Sequin & Occasion Wear Collection
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
