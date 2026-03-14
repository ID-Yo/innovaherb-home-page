"use client";

import type { ReactNode } from "react";
import { ProductSlug } from "@/lib/types";
import { useCart } from "@/components/storefront/CartProvider";
import clsx from "clsx";

export function AddToCartButton({
  slug,
  quantity = 1,
  className,
  children,
}: {
  slug: ProductSlug;
  quantity?: number;
  className?: string;
  children?: ReactNode;
}) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(slug, quantity)}
      className={clsx(
        "btn-press rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700",
        className,
      )}
    >
      {children ?? "Add to Cart"}
    </button>
  );
}
