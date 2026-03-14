"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { useCart } from "@/components/storefront/CartProvider";
import { formatEuro } from "@/lib/format";
import { Product, ProductCopy } from "@/lib/types";
import { productSalesContent } from "@/lib/storefront-content";

export function ProductPurchasePanel({
  product,
  copy,
}: {
  product: Product;
  copy: ProductCopy;
}) {
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const sales = productSalesContent[product.slug];

  useEffect(() => {
    const zone = document.getElementById("purchase-zone");
    if (!zone) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(zone);
    return () => observer.disconnect();
  }, []);

  const reviewLabel = useMemo(
    () => `${sales.rating.toFixed(1)} · ${sales.reviewCount} reviews`,
    [sales.rating, sales.reviewCount],
  );

  const buyNow = () => {
    addItem(product.slug, quantity);
    router.push("/checkout");
  };

  return (
    <>
      <div id="purchase-zone" className="animate-fade-in-up delay-200">
        <span className={`mb-2 block text-xs font-bold uppercase tracking-widest ${product.accentClass}`}>
          {copy.tagline}
        </span>
        <h1 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
          {copy.name}
        </h1>
        <div className="mb-4 mt-3 flex items-center gap-2">
          <span className="stars text-base">★★★★★</span>
          <span className="text-sm text-grey-500">{reviewLabel}</span>
        </div>
        <div className="mb-4">
          <span className="font-display text-3xl font-bold text-grey-900">{formatEuro(product.priceCents)}</span>
          <span className="ml-2 text-sm text-grey-400">/ {sales.volume}</span>
        </div>
        <p className="mb-6 leading-body text-grey-600">{sales.shortPitch}</p>

        <div className="mb-6 flex flex-wrap gap-3">
          {sales.trustBadges.map((badge) => (
            <span key={badge} className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
              {badge}
            </span>
          ))}
        </div>

        <div className="rounded-2xl border border-warm-200/70 bg-white p-5 shadow-elevated">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-grey-600">Quantity</span>
            <span className="text-sm text-grey-400">In stock: {product.stock}</span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center rounded-xl border border-warm-200 bg-warm-50">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="qty-btn px-4 py-3 text-lg text-grey-600">
                -
              </button>
              <span className="min-w-12 text-center text-sm font-semibold text-grey-900">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => Math.min(10, value + 1))} className="qty-btn px-4 py-3 text-lg text-grey-600">
                +
              </button>
            </div>
            <p className="text-sm text-grey-500">{sales.usageTitle}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <AddToCartButton slug={product.slug} quantity={quantity} className="w-full py-3 text-sm font-bold">
              Add to Cart
            </AddToCartButton>
            <button
              type="button"
              onClick={buyNow}
              className="btn-press w-full rounded-xl border border-brand-600 bg-brand-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
            >
              Buy Now
            </button>
          </div>
          <p className="mt-3 text-xs leading-6 text-grey-500">
            Bulgaria-only delivery in v1. Free shipping on orders above EUR 50.
          </p>
        </div>
      </div>

      <div className={`fixed left-0 right-0 top-0 z-[45] hidden border-b border-warm-200/60 bg-white/95 shadow-elevated backdrop-blur-md transition-transform duration-300 lg:block ${showSticky ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={copy.name} className="h-10 w-10 rounded-lg object-cover" />
            <div>
              <h3 className="font-display text-base font-bold text-grey-900">{copy.name}</h3>
              <span className={`text-xs font-semibold ${product.accentClass}`}>{copy.tagline}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-display text-xl font-bold text-grey-900">{formatEuro(product.priceCents)}</span>
            <button type="button" onClick={buyNow} className="btn-press rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed bottom-0 left-0 right-0 z-40 border-t border-warm-200 bg-white/95 px-4 py-3 shadow-floating backdrop-blur-md transition-transform duration-300 lg:hidden ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold text-grey-900">{copy.name}</p>
            <p className="font-display text-lg font-bold text-grey-900">{formatEuro(product.priceCents)}</p>
          </div>
          <button type="button" onClick={buyNow} className="btn-press rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
