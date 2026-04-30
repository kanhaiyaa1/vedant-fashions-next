import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { CataloguePDF } from "@/lib/pdf/catalogue";
import { products } from "@/data/products";

export const dynamic = "force-dynamic";

export async function GET() {
  const categoryList = [...new Set(products.map((p) => p.category))];

  const groupedProducts = categoryList.map((cat) => ({
    category: cat,
    products: products.filter((p) => p.category === cat).slice(0, 6),
  }));

  const generatedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pdfBuffer = await renderToBuffer(
    React.createElement(CataloguePDF, {
      products: groupedProducts,
      categories: categoryList,
      generatedDate,
    }) as any
  );

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Vedant-Fashion-Catalogue.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
