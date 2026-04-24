"use client";

import { useTransition } from "react";
import { toggleFeatured } from "./actions";

export default function FeaturedToggle({ id, featured }: { id: string; featured: boolean }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => { toggleFeatured(id, featured); })}
      title={featured ? "Remove from featured" : "Set as featured"}
      className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors disabled:opacity-50 ${
        featured
          ? "bg-yellow-100 text-yellow-700 hover:bg-gray-200 hover:text-gray-600"
          : "bg-gray-200 text-gray-500 hover:bg-yellow-100 hover:text-yellow-700"
      }`}
    >
      {isPending ? "…" : featured ? "⭐ Featured" : "Set Featured"}
    </button>
  );
}
