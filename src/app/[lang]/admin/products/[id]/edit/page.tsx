import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import EditProductForm from "./EditProductForm";

interface EditProductPageProps {
  params: Promise<{ lang: string; id: string }>;
}

export async function generateMetadata({ params }: EditProductPageProps): Promise<Metadata> {
  const { id } = await params;
  return { title: `Edit Product | Admin | Vedant Fashion` };
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { lang, id } = await params;
  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!product) notFound();

  return (
    <div className="p-6 md:p-10 max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/${lang}/admin/products`} className="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to Products
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-white">Edit Product</h1>
        <p className="text-sm text-gray-400 mt-1">{product.name}</p>
      </div>

      <EditProductForm product={product} lang={lang} />
    </div>
  );
}
