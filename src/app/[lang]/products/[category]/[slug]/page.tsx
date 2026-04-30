import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { getCategoryImages } from "@/data/images";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const categoryName = product.category
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${product.name} | ${categoryName} | Vedant Fashion`,
    description: `${product.shortDescription} — MOQ ${product.moq}. FOB USD 5–8. Export to UAE, Saudi Arabia, Russia.`,
    alternates: buildHreflangAlternates(`/products/${category}/${slug}`),
  };
}

const STEPS = [
  { n: "01", title: "Inquiry", body: "Submit your brief — style, quantity, target price, destination port." },
  { n: "02", title: "Quotation", body: "Receive formal quotation within 24 hours with fabric specs and lead time." },
  { n: "03", title: "Sample", body: "Approve sealed sample before bulk. Digital lab-dip approval available." },
  { n: "04", title: "Production", body: "In-line and final QC at our ISO 9001 facility. AQL 2.5." },
  { n: "05", title: "Shipment", body: "FOB JNPT Mumbai. FCL/LCL on all GCC, EU, and CIS lanes." },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; category: string; slug: string }>;
}) {
  const { lang, category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryLabel = product.category
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  const fobPrice = product.fabricOptions[0]?.price ?? "Contact for pricing";
  const categoryImgs = getCategoryImages(product.category);
  const productIndex = products.findIndex((p) => p.slug === product.slug);
  const mainImg = categoryImgs[productIndex % categoryImgs.length];
  const thumbImgs = [1, 2, 3].map((offset) => categoryImgs[(productIndex + offset) % categoryImgs.length]);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    brand: { "@type": "Brand", name: "Vedant Fashion" },
    manufacturer: { "@type": "Organization", name: "Vedant Fashion" },
    countryOfOrigin: "IN",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Vedant Fashion" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/40">
        <div className="container-wide py-3 text-xs text-muted-foreground flex gap-2">
          <Link href={`/${lang}`} className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href={`/${lang}/products/${product.category}`} className="hover:text-foreground">{categoryLabel}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* SECTION 1 — Hero */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Image gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden relative bg-secondary">
                <Image
                  src={mainImg}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {thumbImgs.map((src, i) => (
                  <div key={i} className="aspect-square rounded overflow-hidden relative bg-secondary">
                    <Image
                      src={src}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                  </div>
                ))}
              </div>
              <Link
                href={`/${lang}/dashboard/samples/new`}
                className="block w-full text-center border border-primary text-primary rounded px-4 py-2.5 text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Request Sample
              </Link>
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  {categoryLabel}
                </span>
                <h1 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground mt-3 font-body leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-gold/60 to-transparent" />

              {/* Key specs */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-body">
                  <span className="text-muted-foreground">MOQ:</span>
                  <span className="font-medium">{product.moq}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-body">
                  <span className="text-muted-foreground">Lead Time:</span>
                  <span className="font-medium">{product.leadTime}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-body">
                  <span className="text-muted-foreground">FOB:</span>
                  <span className="font-medium">{fobPrice}</span>
                </span>
              </div>

              {/* Certifications */}
              {product.certifications.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-olive/10 text-olive border border-olive/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              )}

              {/* Color options */}
              {product.colorOptions && product.colorOptions.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body">
                    Available Colours
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colorOptions.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 rounded-full border border-border text-xs font-body text-foreground"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* HS Code + Origin */}
              <div className="grid grid-cols-2 gap-4 text-sm font-body">
                {product.hsCode && (
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest">HS Code</p>
                    <p className="font-medium mt-1">{product.hsCode}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest">Country of Origin</p>
                  <p className="font-medium mt-1">{product.countryOfOrigin ?? "India"}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={`/${lang}/inquiry`}
                  className="flex-1 text-center bg-primary text-primary-foreground rounded px-6 py-3 text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Request This Product
                </Link>
                <Link
                  href={`/${lang}/dashboard/samples/new`}
                  className="flex-1 text-center border border-primary text-primary rounded px-6 py-3 text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Request Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Fabric Specifications */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            Fabric Specifications
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border bg-card">
                  {["Fabric Name", "Composition", "GSM", "Weave", "Width", "Shrinkage", "Colourfastness"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs uppercase tracking-widest text-muted-foreground font-medium whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.fabricOptions.length > 0 ? (
                  product.fabricOptions.map((f, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/20">
                      <td className="px-4 py-3 font-medium">{f.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{f.composition}</td>
                      <td className="px-4 py-3 text-muted-foreground">{f.gsm}</td>
                      <td className="px-4 py-3 text-muted-foreground">{f.weave}</td>
                      <td className="px-4 py-3 text-muted-foreground">{f.width}</td>
                      <td className="px-4 py-3 text-muted-foreground">{f.shrinkage}</td>
                      <td className="px-4 py-3 text-muted-foreground">{f.colorfastness}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-6 text-center text-muted-foreground">
                      Fabric specifications available on request.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Size Chart */}
      <section className="section-spacing">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
            Size Chart
          </h2>
          <p className="text-sm text-muted-foreground font-body mb-8">
            Custom grading available. GCC sizing on request.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border bg-card">
                  {product.sizeChart.length > 0 &&
                    Object.keys(product.sizeChart[0]).map((key) => (
                      <th
                        key={key}
                        className="px-4 py-3 text-left text-xs uppercase tracking-widest text-muted-foreground font-medium whitespace-nowrap"
                      >
                        {key}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {product.sizeChart.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/20">
                    {Object.values(row).map((val, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>
                        {String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Export Compliance */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
            Export Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ...product.exportCompliance,
              "Bilingual Arabic/English care labels for GCC markets",
              "India-UAE CEPA Certificate of Origin available",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Ordering Process */}
      <section className="section-spacing">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-10 text-center">
            Ordering Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center space-y-3">
                <div className="w-10 h-10 rounded-full border-2 border-gold/60 flex items-center justify-center mx-auto">
                  <span className="text-xs font-medium text-gold">{step.n}</span>
                </div>
                <h3 className="font-display text-base font-semibold">{step.title}</h3>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Related Products */}
      {related.length > 0 && (
        <section className="section-spacing bg-secondary/30">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-10">
              More {categoryLabel}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/${lang}/products/${rp.category}/${rp.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square overflow-hidden relative bg-secondary">
                    {(() => {
                      const imgs = getCategoryImages(rp.category);
                      const idx = products.findIndex((p) => p.slug === rp.slug);
                      return (
                        <Image
                          src={imgs[idx % imgs.length]}
                          alt={rp.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="33vw"
                        />
                      );
                    })()}
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {rp.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body">MOQ {rp.moq}</p>
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

      {/* SECTION 7 — CTA Block */}
      <section className="bg-foreground text-background py-20">
        <div className="container-wide text-center space-y-6">
          <h2 className="font-display text-3xl font-semibold">
            Ready to Order {product.name}?
          </h2>
          <p className="font-body text-background/70 max-w-xl mx-auto text-sm">
            Our export team responds within 24 hours with pricing, lead times, and fabric swatches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/products`}
              className="px-8 py-3 rounded border border-background/30 text-background text-xs uppercase tracking-widest hover:bg-background/10 transition-colors"
            >
              Request Catalogue
            </Link>
            <Link
              href={`/${lang}/inquiry`}
              className="px-8 py-3 rounded bg-gold text-foreground text-xs uppercase tracking-widest hover:bg-gold/90 transition-colors font-medium"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
