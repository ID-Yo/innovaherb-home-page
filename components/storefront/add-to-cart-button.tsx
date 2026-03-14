"use client";

import { ProductSlug } from "@/lib/types";
import { useCart } from "@/components/storefront/CartProvider";

export function AddToCartButton({ slug, quantity = 1 }: { slug: ProductSlug; quantity?: number }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(slug, quantity)}
      className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
    >
      Add to cart
    </button>
  );
}
