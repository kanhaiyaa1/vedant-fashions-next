import { renderToBuffer, Document, Page, Text } from "@react-pdf/renderer";
import { CataloguePDF } from "@/lib/pdf/catalogue";
import { products } from "@/data/products";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// react-pdf bundles React 18 internally. React 19 changed $$typeof to
// Symbol.for('react.transitional.element') which React 18 doesn't recognise,
// causing error #31. We build elements manually with the React 18 symbol so
// react-pdf's reconciler accepts them.
const R18 = Symbol.for("react.element");

function el(type: any, props?: any, ...children: any[]): any {
  const ch =
    children.length === 0
      ? undefined
      : children.length === 1
      ? children[0]
      : children;
  return {
    $$typeof: R18,
    type,
    key: null,
    ref: null,
    props: ch !== undefined ? { ...(props ?? {}), children: ch } : props ?? {},
    _owner: null,
    _store: {},
  };
}

export async function GET() {
  const categoryList = [...new Set(products.map((p) => p.category))];

  const groupedProducts = categoryList.map((cat) => ({
    category: cat,
    products: products
      .filter((p) => p.category === cat)
      .slice(0, 6)
      .map((p) => ({
        ...p,
        name: p.name ?? "Product",
        shortDescription:
          p.shortDescription ?? p.description ?? "Premium ladies woven wear.",
        moq: p.moq ?? 100,
        leadTime: p.leadTime ?? "60-90 days",

        certifications: p.certifications ?? [],
        fabricOptions: p.fabricOptions ?? [],
        sku: p.sku ?? p.slug ?? p.id ?? "VF-001",
      })),
  }));

  const generatedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  try {
    // Test with minimal PDF first using manual React 18-compatible elements
    const testPdf = el(
      Document,
      {},
      el(Page, { size: "A4" }, el(Text, {}, "Test PDF"))
    );

    const pdfBuffer = await renderToBuffer(testPdf);
    return new Response(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Vedant-Fashion-Catalogue.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[catalogue] PDF generation error:", err);
    return new Response(
      JSON.stringify({ error: "PDF generation failed", details: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
