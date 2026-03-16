"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { useCart } from "@/components/storefront/CartProvider";
import { formatEuro } from "@/lib/format";
import { commerceLocale, withLocale } from "@/lib/i18n";
import { getProductBySlug } from "@/lib/products";
import { Locale, Product, ProductCopy } from "@/lib/types";

function usePanelCopy(locale: Locale, reviewLabel: string) {
  if (locale === "bg") {
    return {
      reviewLabel,
      quantity: "Количество",
      stock: "Наличност",
      bestFor: "Най-подходящ за",
      pairHeading: "Защо клиентите често добавят още една бутилка",
      addToCart: "Добави в количката",
      buyNow: "Купи сега",
      shipping: "Доставяме в рамките на България. Безплатна доставка при поръчки над 50 EUR.",
      guarantee: "Не сте доволни след 30 дни постоянна употреба? Възстановяваме сумата изцяло, без излишни въпроси.",
      secure: "Сигурно плащане",
      pairBadge: "Препоръчана комбинация",
      pairButton: "Добави стартов комплект",
      pairNote: "Комбинацията е удобен начин да подкрепите повече от една ежедневна цел, без да усложнявате рутината си.",
      popular: "Популярна комбинация",
      dailySupply: "€0.67 / ден · 30-дневен прием",
    };
  }

  if (locale === "ru") {
    return {
      reviewLabel,
      quantity: "Количество",
      stock: "В наличии",
      bestFor: "Лучше всего подходит для",
      pairHeading: "Почему покупатели часто добавляют вторую бутылочку",
      addToCart: "Добавить в корзину",
      buyNow: "Купить сейчас",
      shipping: "Доставляем по Болгарии. Бесплатная доставка при заказах от 50 EUR.",
      guarantee: "Если после 30 дней регулярного использования продукт вам не подойдет, мы полностью вернем деньги.",
      secure: "Безопасная оплата",
      pairBadge: "Рекомендуемая пара",
      pairButton: "Добавить стартовую пару",
      pairNote: "Две бутылочки помогают закрыть больше одной ежедневной цели и сразу собрать более удобную рутину.",
      popular: "Популярное сочетание",
      dailySupply: "€0.67 / день · запас на 30 дней",
    };
  }

  if (locale === "sv") {
    return {
      reviewLabel,
      quantity: "Antal",
      stock: "I lager",
      bestFor: "Passar bäst för",
      pairHeading: "Varför många kunder börjar med två flaskor",
      addToCart: "Lägg i varukorgen",
      buyNow: "Köp nu",
      shipping: "Vi levererar inom Bulgarien. Fri frakt gäller för beställningar över 50 EUR.",
      guarantee: "Om du inte är nöjd efter 30 dagars konsekvent användning får du pengarna tillbaka.",
      secure: "Säker betalning",
      pairBadge: "Rekommenderad kombination",
      pairButton: "Lägg till startpaketet",
      pairNote: "Två sprayer gör det enklare att täcka fler än ett dagligt mål utan att göra rutinen komplicerad.",
      popular: "Populärt par",
      dailySupply: "€0.67 / dag · räcker i 30 dagar",
    };
  }

  return {
    reviewLabel,
    quantity: "Quantity",
    stock: "In stock",
    bestFor: "Best for",
    pairHeading: "Why customers often start with a second bottle",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    shipping: "Currently shipping within Bulgaria. Free shipping on orders above EUR 50.",
    guarantee: "Not satisfied after 30 days of consistent use? We refund in full, no questions asked.",
    secure: "Secure checkout",
    pairBadge: "Recommended pair",
    pairButton: "Add starter pair",
    pairNote: "A two-spray routine helps cover more than one daily goal while keeping the routine simple from the first order.",
    popular: "Popular pair",
    dailySupply: "€0.67 / day · 30-day supply",
  };
}

export function RecommendedPairCard({
  locale,
  product,
  pairSlug,
  title,
  text,
  className = "",
}: {
  locale: Locale;
  product: Product;
  pairSlug: Product["slug"];
  title: string;
  text: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const router = useRouter();
  const pairedProduct = getProductBySlug(pairSlug);
  const productCopy = product.localized[locale];
  const pairedCopy = pairedProduct?.localized[locale] ?? pairedProduct?.localized.en;
  const t = usePanelCopy(locale, "");
  const storeLocale = commerceLocale(locale);

  const addBundle = () => {
    addItem(product.slug, 1);
    addItem(pairSlug, 1);
    router.push(withLocale("/cart", storeLocale));
  };

  if (!pairedCopy) {
    return null;
  }

  return (
    <div className={`rounded-2xl border border-brand-200/70 bg-brand-50/70 p-5 shadow-elevated ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.pairBadge}</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-grey-900">{title}</h3>
          <p className="mt-3 text-sm leading-body text-grey-600">{text}</p>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-grey-600">
          {t.popular}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-grey-600">
        <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-grey-700">1 x {productCopy.name}</span>
        <span className="text-grey-400">+</span>
        <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-grey-700">1 x {pairedCopy.name}</span>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-grey-900">{formatEuro(product.priceCents * 2)}</p>
          <p className="text-xs text-grey-500">{t.pairNote}</p>
        </div>
        <button
          type="button"
          onClick={addBundle}
          className="btn-press rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
        >
          {t.pairButton}
        </button>
      </div>
    </div>
  );
}

export function ProductPurchasePanel({
  product,
  copy,
  locale,
  salesContent,
}: {
  product: Product;
  copy: ProductCopy;
  locale: Locale;
  salesContent: {
    rating: number;
    reviewCount: number;
    trustBadges: string[];
    usageTitle: string;
    conversionNote: string;
  };
}) {
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const sales = salesContent;
  const storeLocale = commerceLocale(locale);
  const reviewLabel =
    locale === "bg"
      ? `${sales.rating.toFixed(1)} · ${sales.reviewCount} отзива`
      : locale === "ru"
        ? `${sales.rating.toFixed(1)} · ${sales.reviewCount} отзывов`
        : locale === "sv"
          ? `${sales.rating.toFixed(1)} · ${sales.reviewCount} omdömen`
          : `${sales.rating.toFixed(1)} · ${sales.reviewCount} reviews`;
  const t = usePanelCopy(locale, reviewLabel);

  useEffect(() => {
    const zone = document.getElementById("purchase-zone");
    if (!zone) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), {
      threshold: 0.15,
    });

    observer.observe(zone);
    return () => observer.disconnect();
  }, []);

  const urgencyLabel = useMemo(() => {
    if (product.stock <= 12) {
      return locale === "bg"
        ? `Остават само ${product.stock} броя от тази партида.`
        : locale === "ru"
          ? `Осталось только ${product.stock} шт. из текущей партии.`
          : locale === "sv"
            ? `Lågt lager: bara ${product.stock} kvar i den här batchen.`
        : `Low stock: only ${product.stock} left in this batch.`;
    }

    if (product.stock <= 24) {
      return locale === "bg"
        ? `Налични са ${product.stock} броя от текущата партида.`
        : locale === "ru"
          ? `В наличии ${product.stock} шт. из текущей партии.`
          : locale === "sv"
            ? `${product.stock} enheter finns kvar i den aktuella batchen.`
        : `${product.stock} units available from the current batch.`;
    }

    return locale === "bg"
      ? "Изпращане от България в рамките на 1 работен ден."
      : locale === "ru"
        ? "Отправка из Болгарии в течение 1 рабочего дня."
        : locale === "sv"
          ? "Skickas från Bulgarien inom 1 arbetsdag."
      : "Ships from Bulgaria in 1 business day.";
  }, [locale, product.stock]);

  const getBadgeIcon = (badge: string): string => {
    const normalized = badge.toLowerCase();
    if (normalized.includes("lab") || normalized.includes("лабо")) return "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18";
    if (normalized.includes("guarantee") || normalized.includes("дни") || normalized.includes("гаран")) return "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z";
    if (normalized.includes("spray") || normalized.includes("capsule") || normalized.includes("спрей") || normalized.includes("капсул")) return "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3";
    return "M4.5 12.75l6 6 9-13.5";
  };

  const buyNow = () => {
    addItem(product.slug, quantity);
    router.push(withLocale("/checkout", storeLocale));
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
          <span className="text-sm text-grey-500">{t.reviewLabel}</span>
        </div>
        <div className="mb-4 inline-flex rounded-full border border-earth-200 bg-earth-50 px-3 py-1.5 text-xs font-semibold text-earth-700">
          {urgencyLabel}
        </div>
        <div className="mb-4">
          <span className="font-display text-3xl font-bold text-grey-900">{formatEuro(product.priceCents)}</span>
          <span className="ml-2 text-sm text-grey-400">/ 35 ml</span>
          <p className="mt-1 text-xs font-semibold text-brand-600">{t.dailySupply}</p>
        </div>
        <p className="mb-6 leading-body text-grey-600">{copy.heroDescription}</p>

        <div className="mb-6 flex flex-wrap gap-3">
          {sales.trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700"
            >
              <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={getBadgeIcon(badge)} />
              </svg>
              {badge}
            </span>
          ))}
        </div>

        <div className="rounded-2xl border border-warm-200/70 bg-white p-5 shadow-elevated">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-grey-600">{t.quantity}</span>
            <span className="text-sm text-grey-400">{t.stock}: {product.stock}</span>
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
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">{t.bestFor}</p>
              <p className="mt-1 text-sm text-grey-500">{sales.usageTitle}</p>
            </div>
          </div>
          <div className="mb-4 rounded-xl bg-warm-50 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">{t.pairHeading}</p>
            <p className="mt-1 text-sm leading-body text-grey-600">{sales.conversionNote}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <AddToCartButton slug={product.slug} quantity={quantity} className="w-full py-3 text-sm font-bold">
              {t.addToCart}
            </AddToCartButton>
            <button
              type="button"
              onClick={buyNow}
              className="btn-press w-full rounded-xl border border-brand-600 bg-brand-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
            >
              {t.buyNow}
            </button>
          </div>
          <p className="mt-3 text-xs leading-6 text-grey-500">{t.shipping}</p>
          <p className="mt-2 flex items-start gap-1.5 text-xs text-grey-400">
            <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <span>{t.guarantee}</span>
          </p>
          <div className="mt-3 flex items-center gap-2.5 opacity-40">
            <span className="text-[10px] font-medium text-grey-500">{t.secure}</span>
            <svg viewBox="0 0 48 16" className="h-4 w-auto fill-grey-600"><text x="0" y="13" fontSize="14" fontWeight="bold" fontFamily="Arial">VISA</text></svg>
            <svg viewBox="0 0 36 24" className="h-4 w-auto"><circle cx="14" cy="12" r="10" fill="#888" /><circle cx="22" cy="12" r="10" fill="#aaa" fillOpacity="0.7" /></svg>
            <svg viewBox="0 0 60 24" className="h-4 w-auto fill-grey-600"><text x="0" y="17" fontSize="13" fontFamily="Arial">stripe</text></svg>
          </div>
        </div>
      </div>

      <div
        className={`fixed left-0 right-0 top-0 z-[45] hidden border-b border-warm-200/60 bg-white/95 shadow-elevated backdrop-blur-md transition-transform duration-300 lg:block ${showSticky ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={copy.name} className="h-10 w-10 rounded-xl object-cover" />
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
              {t.buyNow}
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
            <p className="flex items-center gap-1 text-[10px] text-grey-400">
              <span className="stars text-[10px]">★★★★★</span> {sales.rating.toFixed(1)}
            </p>
            <p className="font-display text-lg font-bold text-grey-900">{formatEuro(product.priceCents)}</p>
          </div>
          <button
            type="button"
            onClick={buyNow}
            className="btn-press rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            {t.buyNow}
          </button>
        </div>
      </div>
    </>
  );
}
