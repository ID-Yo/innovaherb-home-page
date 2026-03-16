import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductPurchasePanel, RecommendedPairCard } from "@/components/storefront/ProductPurchasePanel";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { getLocale, PUBLIC_LOCALES, withLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { extraFaqs, localizedSalesOverrides, pageCopy } from "@/lib/product-page-copy";
import { getProductBySlug, products } from "@/lib/products";
import { productSalesContent } from "@/lib/storefront-content";
import { absoluteUrl } from "@/lib/site";
import { Locale, ProductSlug } from "@/lib/types";

function getLocalizedSalesContent(slug: ProductSlug, locale: Locale) {
  const sales = productSalesContent[slug];

  if (locale === "en") {
    return sales;
  }

  const override = localizedSalesOverrides[locale][slug];

  return {
    ...sales,
    shortPitch: override.shortPitch,
    trustBadges: override.trustBadges,
    quickBenefits: products.find((product) => product.slug === slug)?.localized[locale].benefits ?? sales.quickBenefits,
    usageTitle: override.usageTitle,
    ingredientHighlights: products.find((product) => product.slug === slug)?.localized[locale].ingredients ?? sales.ingredientHighlights,
    fullIngredients: (products.find((product) => product.slug === slug)?.localized[locale].ingredients ?? sales.ingredientHighlights).join(", "),
    conversionNote: override.conversionNote,
    bundleTitle: override.bundleTitle,
    bundleText: override.bundleText,
    reviews: sales.reviews.map((review, index) => ({
      ...review,
      text: override.reviews[index] ?? review.text,
    })),
    faq: override.faq,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const locale = getLocale(await searchParams);
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found | InnoVAherb",
      description: "The requested product could not be found.",
      path: `/products/${slug}`,
      locale,
      availableLocales: PUBLIC_LOCALES,
    });
  }

  return buildMetadata({
    title: product.localized[locale].seoTitle,
    description: product.localized[locale].seoDescription,
    path: `/products/${slug}`,
    locale,
    availableLocales: PUBLIC_LOCALES,
  });
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const locale = getLocale(await searchParams);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const copy = product.localized[locale];
  const sales = getLocalizedSalesContent(product.slug, locale);
  const t = pageCopy[locale];
  const faqItems = [...sales.faq, ...extraFaqs[locale]].slice(0, 8);
  const pairedProducts = sales.pairsWith
    .map((pairedSlug) => getProductBySlug(pairedSlug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));
  const featuredPairSlug = sales.pairsWith[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: copy.name,
    sku: product.sku,
    image: [absoluteUrl(product.image)],
    description: copy.seoDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: (product.priceCents / 100).toFixed(2),
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: absoluteUrl(withLocale(`/products/${product.slug}`, locale)),
    },
  };

  return (
    <>
      <SiteHeader locale={locale} availableLocales={PUBLIC_LOCALES} />
      <Script
        id={`${product.slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main className="pb-24 lg:pb-0">
        <section className="grain relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-warm-50 to-warm-100" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-100/20 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:-mt-16 lg:px-8 lg:py-8">
            <nav className="animate-fade-in-up mb-5 flex items-center gap-2 text-sm text-grey-400">
              <Link href={withLocale("/", locale)} className="transition-colors hover:text-brand-600">{t.home}</Link>
              <span>{">"}</span>
              <Link href={withLocale("/#products", locale)} className="transition-colors hover:text-brand-600">{t.products}</Link>
              <span>{">"}</span>
              <span className="font-medium text-grey-700">{copy.name}</span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="animate-fade-in-up delay-100">
                <div className="product-img-wrap relative overflow-hidden rounded-3xl bg-white p-6 shadow-product sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent" />
                  <img src={product.image} alt={copy.name} className="relative mx-auto w-full max-w-xs rounded-[1.75rem]" />
                </div>
                <RecommendedPairCard
                  locale={locale}
                  product={product}
                  pairSlug={featuredPairSlug}
                  title={sales.bundleTitle}
                  text={sales.bundleText}
                  className="mt-5 hidden lg:block"
                />
              </div>

              <ProductPurchasePanel product={product} copy={copy} locale={locale} salesContent={sales} />
            </div>
          </div>
        </section>

        <section className="border-y border-warm-200/50 bg-warm-50 py-4 sm:py-5">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {sales.quickBenefits.map((benefit) => (
              <div key={benefit} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-grey-700 shadow-elevated">
                {benefit}
              </div>
            ))}
            <div className="rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-elevated">
              {t.shippingBanner}
            </div>
          </div>
        </section>

        <section className="bg-white py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.whyBuy(copy.name)}</h2>
                <p className="mt-3 leading-body text-grey-600">{copy.heroDescription}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-warm-200/70 bg-warm-50 p-5">
                    <h3 className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{t.keyBenefits}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-body text-grey-600">
                      {copy.benefits.map((benefit) => (
                        <li key={benefit}>- {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-warm-200/70 bg-warm-50 p-5">
                    <h3 className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{t.howToUse}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-body text-grey-600">
                      {copy.usage.map((step) => (
                        <li key={step}>- {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <details className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="font-semibold text-grey-900">{t.activeIngredients}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{sales.ingredientHighlights.join(", ")}</p>
                    </div>
                  </div>
                </details>

                <details className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="font-semibold text-grey-900">{t.fullIngredients}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{sales.fullIngredients}</p>
                    </div>
                  </div>
                </details>

                <details className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="font-semibold text-grey-900">{t.sprayFormat}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{t.sprayFormatText}</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm-50 py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.reviews}</h2>

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="stars text-xl">★★★★★</span>
              <span className="font-semibold text-grey-700">{sales.rating.toFixed(1)}</span>
              <span className="text-sm text-grey-400">· {sales.reviewCount} {t.reviewCount}</span>
            </div>

            <div className="mx-auto mb-8 max-w-xs">
              <div className="space-y-1.5">
                {([
                  [5, "five"],
                  [4, "four"],
                  [3, "three"],
                  [2, "two"],
                  [1, "one"],
                ] as const).map(([star, key]) => (
                  <div key={star} className="flex items-center gap-2.5">
                    <span className="w-5 shrink-0 text-right text-xs text-grey-400">{star}★</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-warm-100">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${sales.ratingDist[key]}%` }} />
                    </div>
                    <span className="w-8 shrink-0 text-xs text-grey-400">{sales.ratingDist[key]}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
              {sales.reviews.map((review, index) => (
                <div key={review.name} className="rounded-2xl bg-white p-5 shadow-elevated">
                  <div className="stars mb-3 text-base">★★★★★</div>
                  <p className="mb-5 text-sm italic leading-body text-grey-700">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${index === 1 ? "bg-earth-100 text-earth-700" : "bg-brand-100 text-brand-700"}`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-grey-900">{review.name}</p>
                      <p className="text-xs text-grey-400">{t.verifiedPurchase}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.faq}</h2>
            <div className="grid gap-3 lg:grid-cols-2">
              {faqItems.map((item, index) => (
                <details key={item.question} className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="pr-4 font-semibold text-grey-900">{item.question}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{item.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm-50 py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.pairSection}</h2>
            <p className="mb-6 mt-3 text-center text-grey-500">{t.pairSectionText}</p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {pairedProducts.map((paired) => (
                <Link
                  key={paired.slug}
                  href={withLocale(`/products/${paired.slug}`, locale)}
                  className="product-card group block rounded-2xl bg-white p-5 shadow-product"
                >
                  <div className="relative mb-3 overflow-hidden rounded-xl bg-warm-50 p-3">
                    <img src={paired.image} alt={paired.localized[locale].name} className="mx-auto h-auto w-28 rounded-2xl transition-transform duration-500 ease-spring" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${paired.accentClass}`}>
                    {paired.localized[locale].tagline}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-grey-900">
                    {paired.localized[locale].name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between border-t border-warm-100 pt-3">
                    <span className="font-display text-lg font-bold text-grey-900">
                      EUR {(paired.priceCents / 100).toFixed(2)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-[gap] duration-200 group-hover:gap-2">
                      {t.learnMore}
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

