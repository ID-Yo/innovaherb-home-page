"use client";

import { useCart } from "@/components/storefront/CartProvider";

export function CartIndicator() {
  const { itemCount } = useCart();
  return <span>Cart ({itemCount})</span>;
}
