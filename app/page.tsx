import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductCard } from "@/components/storefront/ProductCard";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale, PUBLIC_LOCALES, withLocale } from "@/lib/i18n";
import { homeContentByLocale } from "@/lib/home-page-copy";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";
import { mushroomComparison } from "@/lib/storefront-content";
import { absoluteUrl } from "@/lib/site";

const TRUST_ICONS: Record<string, string> = {
  lab: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  natural: "M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c0 5 2.5 9 6 11M12 3c0 5-2.5 9-6 11",
  bulgaria: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  guarantee:
    "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  vegan: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  fruiting: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = homeContentByLocale[locale];

  return buildMetadata({
    title: t.metadataTitle,
    description: t.metadataDescription,
    path: "/",
    locale,
    availableLocales: PUBLIC_LOCALES,
  });
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = homeContentByLocale[locale];
  const comparisonCards = mushroomComparison.map((item) => {
    const product = products.find((entry) => entry.slug === item.slug);
    return {
      ...item,
      name: product?.localized[locale].name ?? item.name,
      goal: t.comparisonGoals[item.slug] ?? item.goal,
    };
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: "InnoVAherb",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"),
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/")}#products`,
        name: locale === "bg" ? "Спрейове с гъбени екстракти InnoVAherb" : "InnoVAherb Mushroom Extract Sprays",
        itemListElement: comparisonCards.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/products/${product.slug}`),
          name: product.name,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/")}#faq`,
        mainEntity: t.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader locale={locale} availableLocales={PUBLIC_LOCALES} />
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <section className="grain relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-warm-50 to-warm-100" />
          <div className="absolute right-0 top-0 hidden h-[600px] w-[600px] translate-x-1/4 -translate-y-1/3 rounded-full bg-brand-100/30 blur-3xl sm:block" />
          <div className="absolute bottom-0 left-0 hidden h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-earth-100/20 blur-3xl sm:block" />

          <Container className="grid gap-6 pb-4 pt-6 sm:pb-5 sm:pt-7 lg:-mt-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-6 lg:pt-5">
            <div>
              <div className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-warm-200/60 bg-white/70 px-3.5 py-1 shadow-elevated sm:backdrop-blur-sm">
                <span className="stars text-sm">★★★★★</span>
                <span className="text-sm font-medium text-grey-600">{t.trusted}</span>
              </div>

              <h1 className="animate-fade-in-up delay-100 mb-4 font-display text-3xl font-bold tracking-heading text-grey-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                {t.title}
              </h1>

              <p className="animate-fade-in-up delay-200 mb-6 max-w-xl text-base leading-body text-grey-600 sm:text-lg">
                {t.subtitle}
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3">
                <Link href={withLocale("/#products", locale)} className="btn-press inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-colors duration-200 hover:bg-brand-700">
                  {t.shop}
                </Link>
                <Link href={withLocale("/#how", locale)} className="btn-press inline-flex items-center gap-2 rounded-xl border border-warm-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-grey-800 transition-colors duration-200 hover:bg-white">
                  {t.how}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.freeShipping}</p>
                  <p className="mt-2 text-sm text-grey-600">{t.freeShippingText}</p>
                </div>
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.ritual}</p>
                  <p className="mt-2 text-sm text-grey-600">{t.ritualText}</p>
                </div>
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.bestSeller}</p>
                  <p className="mt-2 text-sm text-grey-600">{t.bestSellerText}</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-brand-100/80 bg-white/75 p-4 shadow-elevated sm:backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.firstPurchase}</p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-grey-900">{t.firstPurchaseTitle}</p>
                    <p className="mt-1 text-sm text-grey-600">{t.firstPurchaseText}</p>
                  </div>
                  <Link href={withLocale("/products/mix", locale)} className="btn-press inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800">
                    {t.firstPurchaseCta}
                  </Link>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-floating lg:rounded-3xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />
                <Image
                  src="/brand_assets/Group_front.webp"
                  alt="InnoVAherb Mushroom Extract Spray Collection"
                  width={1437}
                  height={660}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={72}
                  priority
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-body text-grey-600">{t.imageText}</p>
            </div>
          </Container>
        </section>

        <section id="products" className="py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.shopByGoal}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">{t.shopByGoalText}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-warm-100 bg-white py-8 sm:py-12">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-warm-200/70">
              {t.metrics.map(({ num, sub, accent }) => (
                <div key={sub} className="px-4 text-center sm:px-8 lg:px-12">
                  <p className={`font-display text-3xl font-bold leading-none sm:text-4xl lg:text-5xl ${accent ? "text-brand-600" : "text-grey-900"}`}>
                    {num}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-grey-400 sm:text-xs">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-warm-200/50 bg-warm-50 py-5 sm:py-6">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-14">
              {t.trustPoints.map((point) => (
                <div key={point.label} className="flex items-center gap-2 text-grey-600">
                  <svg className="h-4 w-4 flex-shrink-0 text-brand-600 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={TRUST_ICONS[point.icon] ?? TRUST_ICONS.fruiting} />
                  </svg>
                  <span className="whitespace-nowrap text-xs font-medium sm:text-sm">{point.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="how" className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.howHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">{t.howText}</p>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              {t.howSteps.map((item, index) => (
                <div key={item.title} className="text-center">
                  <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 sm:mb-4 sm:h-16 sm:w-16 ${index === 1 ? "border-earth-200 bg-earth-50" : "border-brand-200 bg-brand-50"}`}>
                    <span className={`font-display text-xl font-bold sm:text-2xl ${index === 1 ? "text-earth-600" : "text-brand-600"}`}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-grey-900 sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-grey-500 sm:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.comparisonHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">{t.comparisonText}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {comparisonCards.map((m) => (
                <Link key={m.slug} href={withLocale(`/products/${m.slug}`, locale)} className="group rounded-xl border border-warm-200/70 bg-warm-50 p-3.5 shadow-elevated transition-colors hover:border-brand-200 hover:bg-brand-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600">{m.goal}</p>
                  <h3 className="mt-1 font-display text-base font-bold text-grey-900">{m.name}</h3>
                  <div className="mt-3 space-y-1.5">
                    {(["focus", "energy", "sleep", "immunity", "antioxidant"] as const).map((trait) => (
                      <div key={trait} className="flex items-center justify-between gap-2">
                        <span className="w-20 shrink-0 text-[10px] font-medium text-grey-500">{t.traitLabels[trait]}</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`inline-block h-2 w-2 rounded-full ${i < m[trait] ? "bg-brand-500" : "bg-warm-200"}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition-[gap] group-hover:gap-1.5">
                    {t.comparisonShop}
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-28 pb-4 text-left text-xs font-semibold uppercase tracking-widest text-grey-400" />
                    {comparisonCards.map((m) => (
                      <th key={m.slug} className="pb-4 text-center">
                        <Link href={withLocale(`/products/${m.slug}`, locale)} className="group inline-block">
                          <p className="font-display text-sm font-bold text-grey-900 transition-colors group-hover:text-brand-600">{m.name}</p>
                          <p className="mt-0.5 text-[10px] font-medium text-grey-400">{m.goal}</p>
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(["focus", "energy", "sleep", "immunity", "antioxidant"] as const).map((trait, traitIdx) => (
                    <tr key={trait} className={traitIdx % 2 === 0 ? "bg-warm-50/70" : "bg-white"}>
                      <td className="rounded-l-xl py-3 pl-4 text-xs font-semibold text-grey-600">{t.traitLabels[trait]}</td>
                      {comparisonCards.map((m) => (
                        <td key={m.slug} className="py-3 text-center last:rounded-r-xl">
                          <div className="inline-flex gap-0.5">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span key={i} className={`inline-block h-2.5 w-2.5 rounded-full ${i < m[trait] ? "bg-brand-500" : "bg-warm-200"}`} />
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="pt-5 text-xs font-semibold text-grey-400">{t.comparisonShop} →</td>
                    {comparisonCards.map((m) => (
                      <td key={m.slug} className="pt-5 text-center">
                        <Link href={withLocale(`/products/${m.slug}`, locale)} className="inline-flex rounded-lg border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100">
                          {t.comparisonBuy}
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <section className="grain relative overflow-hidden py-6 sm:py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-grey-900 via-brand-800/90 to-grey-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-grey-900/40" />
          <div className="absolute right-0 top-0 hidden h-[500px] w-[500px] rounded-full bg-brand-600/15 blur-3xl sm:block" />
          <div className="absolute bottom-0 left-0 hidden h-96 w-96 rounded-full bg-earth-500/15 blur-3xl sm:block" />

          <Container className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 sm:text-sm">
                {t.originEyebrow}
              </span>
              <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl lg:text-4xl">
                {t.originTitle}
              </h2>
              <p className="mt-4 text-sm leading-body text-warm-200 sm:text-base">{t.originTextOne}</p>
              <p className="mt-4 text-sm leading-body text-warm-200 sm:text-base">{t.originTextTwo}</p>
              <Link href={withLocale("/about", locale)} className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition-colors duration-200 hover:bg-brand-500">
                {t.originCta}
              </Link>
            </div>
            <div className="hidden items-center justify-center gap-3 lg:flex">
              <div className="h-44 w-32 rotate-[-3deg] overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Cordycepts_front.webp" alt="Cordyceps mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="128px" quality={72} className="h-full w-full object-cover" />
              </div>
              <div className="-mt-6 h-48 w-36 overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Shiitake_front.webp" alt="Shiitake mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="144px" quality={72} className="h-full w-full object-cover" />
              </div>
              <div className="h-44 w-32 rotate-[3deg] overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Chaga_front.webp" alt="Chaga mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="128px" quality={72} className="h-full w-full object-cover" />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-warm-50 py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.reviewsHeading}
              </h2>
              <p className="mt-2 text-center text-sm text-grey-400">{t.aggregateReviewLabel}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
              {t.reviews.map((review, index) => (
                <div key={review.name} className="rounded-xl bg-white p-5 shadow-elevated sm:rounded-2xl sm:p-6">
                  <div className="stars mb-2 text-base">★★★★★</div>
                  <p className="mb-4 text-sm italic leading-body text-grey-700">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index === 1 ? "bg-earth-100 text-earth-700" : "bg-brand-100 text-brand-700"}`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-grey-900">{review.name}</p>
                      <p className="text-xs text-grey-500">{t.verifiedPurchase}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container className="max-w-4xl">
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.faqHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-base text-grey-500">{t.faqText}</p>
            </div>

            <div className="space-y-3">
              {t.faqs.map((item, index) => (
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
          </Container>
        </section>

        <section className="grain relative overflow-hidden py-5 sm:py-6">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800" />
          <div className="absolute right-0 top-0 hidden h-96 w-96 rounded-full bg-brand-400/20 blur-3xl sm:block" />

          <Container className="relative max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl">
              {t.newsletterHeading}
            </h2>
            <p className="mb-6 mt-3 text-sm text-brand-100 sm:text-base">{t.newsletterText}</p>
            <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/70">{t.newsletterProof}</p>
            <div className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={withLocale("/products/mix", locale)}
                className="btn-press rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition-colors duration-200 hover:bg-warm-50"
              >
                {t.newsletterButton}
              </Link>
              <Link
                href={withLocale("/#products", locale)}
                className="btn-press rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/15"
              >
                {t.shop}
              </Link>
            </div>
            <p className="mt-3 text-center text-xs text-white/50">{t.newsletterNote}</p>
          </Container>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

