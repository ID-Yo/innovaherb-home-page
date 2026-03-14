"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { useCart } from "@/components/storefront/CartProvider";
import { formatEuro } from "@/lib/format";
import { getProductBySlug } from "@/lib/products";
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
  const pairSlug = sales.pairsWith[0];
  const pairedProduct = getProductBySlug(pairSlug);

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

  const urgencyLabel =
    product.stock <= 12
      ? `Low stock: only ${product.stock} left in this batch.`
      : product.stock <= 24
        ? `Popular choice: ${product.stock} units currently available.`
        : "Ships from Bulgaria in 1 business day.";

  const buyNow = () => {
    addItem(product.slug, quantity);
    router.push("/checkout");
  };

  const addBundle = () => {
    addItem(product.slug, 1);
    addItem(pairSlug, 1);
    router.push("/cart");
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
        <div className="mb-4 inline-flex rounded-full border border-earth-200 bg-earth-50 px-3 py-1.5 text-xs font-semibold text-earth-700">
          {urgencyLabel}
        </div>
        <div className="mb-4">
          <span className="font-display text-3xl font-bold text-grey-900">{formatEuro(product.priceCents)}</span>
          <span className="ml-2 text-sm text-grey-400">/ {sales.volume}</span>
        </div>
        <p className="mb-6 leading-body text-grey-600">{sales.shortPitch}</p>

        <div className="mb-6 flex flex-wrap gap-3">
          {sales.trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700"
            >
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
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="qty-btn px-4 py-3 text-lg text-grey-600"
              >
                -
              </button>
              <span className="min-w-12 text-center text-sm font-semibold text-grey-900">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.min(10, value + 1))}
                className="qty-btn px-4 py-3 text-lg text-grey-600"
              >
                +
              </button>
            </div>
            <p className="text-sm text-grey-500">{sales.usageTitle}</p>
          </div>
          <p className="mb-4 rounded-xl bg-warm-50 px-4 py-3 text-sm leading-body text-grey-600">
            {sales.conversionNote}
          </p>
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

        <div className="mt-4 rounded-2xl border border-brand-200/70 bg-brand-50/70 p-5 shadow-elevated">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">Higher converting bundle</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-grey-900">{sales.bundleTitle}</h3>
              <p className="mt-3 text-sm leading-body text-grey-600">{sales.bundleText}</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-grey-600">
              Free shipping path
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-grey-600">
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-grey-700">1 x {copy.name}</span>
            <span className="text-grey-400">+</span>
            <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-grey-700">
              1 x {pairedProduct?.localized.en.name ?? "paired spray"}
            </span>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl font-bold text-grey-900">{formatEuro(product.priceCents * 2)}</p>
              <p className="text-xs text-grey-500">Two bottles gets the order close to or above the free-shipping threshold.</p>
            </div>
            <button
              type="button"
              onClick={addBundle}
              className="btn-press rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
            >
              Add starter pair
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 z-[45] hidden border-b border-warm-200/60 bg-white/95 shadow-elevated backdrop-blur-md transition-transform duration-300 lg:block ${showSticky ? "translate-y-0" : "-translate-y-full"}`}
      >
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
            <button
              type="button"
              onClick={buyNow}
              className="btn-press rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t border-warm-200 bg-white/95 px-4 py-3 shadow-floating backdrop-blur-md transition-transform duration-300 lg:hidden ${showSticky ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold text-grey-900">{copy.name}</p>
            <p className="font-display text-lg font-bold text-grey-900">{formatEuro(product.priceCents)}</p>
          </div>
          <button
            type="button"
            onClick={buyNow}
            className="btn-press rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
