"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/storefront/CartProvider";
import { products } from "@/lib/products";
import { formatEuro } from "@/lib/format";
import { getCartSubtotal, getCartTotal, getShippingCents } from "@/lib/cart";

export function CartTable() {
  const { items, updateItem, removeItem } = useCart();

  const detailedItems = useMemo(
    () =>
      items.map((item) => ({
        item,
        product: products.find((product) => product.slug === item.slug),
      })),
    [items],
  );

  const subtotal = getCartSubtotal(items, products);
  const shipping = getShippingCents(subtotal);
  const total = getCartTotal(items, products);

  if (!items.length) {
    return (
      <div className="rounded-[2rem] border border-dashed border-warm-200 bg-white p-10 text-center">
        <p className="text-grey-600">Your cart is empty.</p>
        <Link href="/#products" className="mt-4 inline-flex rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
      <div className="space-y-4">
        {detailedItems.map(({ item, product }) =>
          product ? (
            <div key={item.slug} className="flex items-center gap-4 rounded-[2rem] border border-warm-200 bg-white p-4">
              <img src={product.image} alt={product.localized.en.name} className="h-24 w-24 rounded-2xl bg-warm-50 object-contain p-3" />
              <div className="flex-1">
                <h3 className="font-display text-2xl text-grey-900">{product.localized.en.name}</h3>
                <p className="text-sm text-grey-500">{product.localized.en.shortDescription}</p>
                <p className="mt-2 text-sm font-semibold text-grey-900">{formatEuro(product.priceCents)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="rounded-full border border-warm-200 px-3 py-1" onClick={() => updateItem(item.slug, item.quantity - 1)}>-</button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button type="button" className="rounded-full border border-warm-200 px-3 py-1" onClick={() => updateItem(item.slug, item.quantity + 1)}>+</button>
              </div>
              <button type="button" className="text-sm font-semibold text-red-600" onClick={() => removeItem(item.slug)}>Remove</button>
            </div>
          ) : null,
        )}
      </div>
      <aside className="rounded-[2rem] border border-warm-200 bg-white p-6 shadow-elevated">
        <h2 className="font-display text-3xl text-grey-900">Order summary</h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-grey-600">Subtotal</dt>
            <dd className="font-semibold text-grey-900">{formatEuro(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-grey-600">Shipping</dt>
            <dd className="font-semibold text-grey-900">{shipping === 0 ? "Free" : formatEuro(shipping)}</dd>
          </div>
          <div className="flex justify-between border-t border-warm-100 pt-4 text-base">
            <dt className="font-semibold text-grey-900">Total</dt>
            <dd className="font-semibold text-grey-900">{formatEuro(total)}</dd>
          </div>
        </dl>
        <Link href="/checkout" className="mt-6 inline-flex w-full justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">
          Continue to checkout
        </Link>
      </aside>
    </div>
  );
}
