import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";
import {
  homeAggregateReview,
  homeFaqs,
  homeHowItWorks,
  homeOfferCards,
  homeReviews,
  homeTrustPoints,
  mushroomComparison,
} from "@/lib/storefront-content";

const TRUST_ICONS: Record<string, string> = {
  lab:       "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  natural:   "M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c0 5 2.5 9 6 11M12 3c0 5-2.5 9-6 11",
  bulgaria:  "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  guarantee: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  vegan:     "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  fruiting:  "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
};
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductCard } from "@/components/storefront/ProductCard";
import { Container } from "@/components/ui/Container";
import { absoluteUrl } from "@/lib/site";
import { getLocale, withLocale } from "@/lib/i18n";

export const metadata = buildMetadata({
  title: "Bulgarian Mushroom Extract Sprays | InnoVAherb",
  description:
    "Shop Bulgarian mushroom extract sprays for focus, energy, balance, vitality, and immunity. Explore six InnoVAherb formulas with secure checkout.",
  path: "/",
});

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t =
    locale === "bg"
      ? {
          trusted: "Доверие от над 2,000 клиенти в Европа",
          title: "Български гъбени екстракт спрейове за ежедневен фокус, енергия и виталност",
          subtitle: "Открийте премиум български гъбени екстракт спрейове за фокус, енергия, баланс, имунитет и цялостна ежедневна подкрепа в по-бърз и удобен орален формат.",
          shop: "Разгледай колекцията",
          how: "Как работи",
          firstPurchase: "Препоръчителна първа покупка",
          firstPurchaseTitle: "Започнете с Микс 5 гъби",
          firstPurchaseText: "Най-лесната отправна точка, ако искате една бутилка да покрива повече от една цел.",
          firstPurchaseCta: "Към бестселъра",
          imageText: "InnoVAherb гъбените екстракт спрейове са създадени за хора, които търсят по-лесна уелнес рутина, по-чисто ежедневно дозиране и формули, насочени към ясни цели като умствена яснота, естествена енергия, вечерен баланс и ежедневна устойчивост.",
          shopByGoal: "Изберете по цел",
          shopByGoalText: "Всяка гъба има своя роля. Изберете резултата, който търсите, или започнете с Микса, ако искате най-лесната първа поръчка.",
          freeShipping: "Безплатна доставка",
          freeShippingText: "За поръчки в България над 50 EUR.",
          ritual: "Ежедневен ритуал",
          ritualText: "Впръсквате за секунди, без капсули и без подготовка.",
          bestSeller: "Най-продаван",
          bestSellerText: "Започнете с Микс 5 гъби, ако не сте сигурни.",
        }
      : {
          trusted: "Trusted by 2,000+ customers across Europe",
          title: "Bulgarian Mushroom Extract Sprays for Daily Focus, Energy, and Vitality",
          subtitle: "Discover premium Bulgarian mushroom extract sprays for focus, energy, balance, immunity, and full-spectrum daily support in a faster, easier oral format.",
          shop: "Shop Our Collection",
          how: "How It Works",
          firstPurchase: "Recommended first purchase",
          firstPurchaseTitle: "Start with the 5-Mushroom Mix",
          firstPurchaseText: "The easiest entry point for shoppers who want one bottle to cover more than one goal.",
          firstPurchaseCta: "Shop the best seller",
          imageText: "InnoVAherb mushroom extract sprays are designed for shoppers who want a simpler wellness routine, cleaner daily dosing, and formulas matched to clear goals like mental clarity, natural energy, evening balance, and everyday resilience.",
          shopByGoal: "Shop by Goal",
          shopByGoalText: "Every mushroom has a role. Pick the result you want, or start with the Mix if you want the easiest first order.",
          freeShipping: "Free shipping",
          freeShippingText: "On Bulgaria orders over EUR 50.",
          ritual: "Daily ritual",
          ritualText: "Spray in seconds, no capsules or prep.",
          bestSeller: "Best seller",
          bestSellerText: "Start with the 5-Mushroom Mix if you are unsure.",
        };
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
        name: "InnoVAherb Mushroom Extract Sprays",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/products/${product.slug}`),
          name: product.localized.en.name,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/")}#faq`,
        mainEntity: homeFaqs.map((item) => ({
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
      <SiteHeader locale={locale} />
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

          <Container className="-mt-24 grid gap-6 pb-4 pt-3 sm:-mt-20 sm:pb-5 sm:pt-4 lg:-mt-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-6 lg:pt-5">
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
              <p className="mt-4 max-w-2xl text-sm leading-body text-grey-600 lg:hidden">{t.imageText}</p>
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
              <p className="mt-4 hidden text-sm leading-body text-grey-600 lg:block">{t.imageText}</p>
            </div>
          </Container>
        </section>

        <section id="products" className="py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.shopByGoal}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">
                {t.shopByGoalText}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                Choose the Best First Order
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-base text-grey-500">
                Pick the buying path that feels easiest for you: a best-selling all-in-one spray, a two-bottle routine, or a single formula matched to one clear goal.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
              {homeOfferCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-xl border p-5 shadow-elevated sm:rounded-2xl sm:p-6 ${index === 0 ? "border-brand-200 bg-brand-50/70" : "border-warm-200/70 bg-warm-50"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{card.eyebrow}</p>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${index === 0 ? "bg-brand-700 text-white" : "bg-white text-grey-600"}`}>
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-grey-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-body text-grey-600">{card.text}</p>
                  <Link href={card.href} className={`btn-press mt-5 inline-flex rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${index === 0 ? "bg-brand-700 text-white hover:bg-brand-800" : "border border-warm-200 bg-white text-grey-800 hover:bg-warm-50"}`}>
                    {card.cta}
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-warm-100 bg-white py-8 sm:py-12">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-warm-200/70">
              {([
                { num: "2,000+", sub: "happy customers", accent: false },
                { num: "€0.67",  sub: "per day, per bottle", accent: true  },
                { num: "1 day",  sub: "shipping from Bulgaria", accent: false },
              ] as const).map(({ num, sub, accent }) => (
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
              {homeTrustPoints.map((point) => (
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
                How It Works
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">
                Three simple steps to build a mushroom routine that actually fits modern life.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              {homeHowItWorks.map((item, index) => (
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
                Which Mushroom Is Right for You?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">
                Each formula targets a different goal. Compare them to find your match — or start with the 5-Mix to cover all bases.
              </p>
            </div>

            {/* Mobile: card grid */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {mushroomComparison.map((m) => (
                <a key={m.slug} href={`/products/${m.slug}`} className="group rounded-xl border border-warm-200/70 bg-warm-50 p-3.5 shadow-elevated transition-colors hover:border-brand-200 hover:bg-brand-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600">{m.goal}</p>
                  <h3 className="mt-1 font-display text-base font-bold text-grey-900">{m.name}</h3>
                  <div className="mt-3 space-y-1.5">
                    {(["focus", "energy", "sleep", "immunity", "antioxidant"] as const).map((trait) => (
                      <div key={trait} className="flex items-center justify-between gap-2">
                        <span className="w-20 shrink-0 text-[10px] font-medium capitalize text-grey-500">{trait}</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`inline-block h-2 w-2 rounded-full ${i < m[trait] ? "bg-brand-500" : "bg-warm-200"}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition-[gap] group-hover:gap-1.5">
                    Shop
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-28 pb-4 text-left text-xs font-semibold uppercase tracking-widest text-grey-400" />
                    {mushroomComparison.map((m) => (
                      <th key={m.slug} className="pb-4 text-center">
                        <a href={`/products/${m.slug}`} className="group inline-block">
                          <p className="font-display text-sm font-bold text-grey-900 transition-colors group-hover:text-brand-600">{m.name}</p>
                          <p className="mt-0.5 text-[10px] font-medium text-grey-400">{m.goal}</p>
                        </a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(["focus", "energy", "sleep", "immunity", "antioxidant"] as const).map((trait, traitIdx) => (
                    <tr key={trait} className={traitIdx % 2 === 0 ? "bg-warm-50/70" : "bg-white"}>
                      <td className="rounded-l-xl py-3 pl-4 text-xs font-semibold capitalize text-grey-600">{trait}</td>
                      {mushroomComparison.map((m) => (
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
                    <td className="pt-5 text-xs font-semibold text-grey-400">Shop →</td>
                    {mushroomComparison.map((m) => (
                      <td key={m.slug} className="pt-5 text-center">
                        <a href={`/products/${m.slug}`} className="inline-flex rounded-lg border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100">
                          Buy
                        </a>
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
                Our Origin
              </span>
              <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl lg:text-4xl">
                From Bulgarian Forests to Your Daily Ritual
              </h2>
              <p className="mt-4 text-sm leading-body text-warm-200 sm:text-base">
                InnoVAherb was created to turn the quiet strength of medicinal mushrooms into a modern daily habit. We use Bulgarian-sourced ingredients and a premium spray format so customers get a cleaner, more practical route to focus, energy, balance, vitality, and full-spectrum wellness.
              </p>
              <p className="mt-4 text-sm leading-body text-warm-200 sm:text-base">
                The goal is not complexity. It is repeatability. Every bottle is built to be easy to understand, easy to use, and easy to keep buying because the routine genuinely fits real life.
              </p>
              <Link href="/about" className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition-colors duration-200 hover:bg-brand-500">
                Learn Our Story
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
                What Our Customers Say
              </h2>
              <p className="mt-2 text-center text-sm text-grey-400">{homeAggregateReview.label}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
              {homeReviews.map((review, index) => (
                <div key={review.name} className="rounded-xl bg-white p-5 shadow-elevated sm:rounded-2xl sm:p-6">
                  <div className="stars mb-2 text-base">★★★★★</div>
                  <p className="mb-4 text-sm italic leading-body text-grey-700">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index === 1 ? "bg-earth-100 text-earth-700" : "bg-brand-100 text-brand-700"}`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-grey-900">{review.name}</p>
                      <p className="text-xs text-grey-500">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="grain relative overflow-hidden py-5 sm:py-6">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800" />
          <div className="absolute right-0 top-0 hidden h-96 w-96 rounded-full bg-brand-400/20 blur-3xl sm:block" />

          <Container className="relative max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl">
              Join the InnoVAherb Community
            </h2>
            <p className="mb-6 mt-3 text-sm text-brand-100 sm:text-base">
              Wellness tips, product drops, and offers for customers who want to build a better routine around natural mushroom support.
            </p>
            <p className="mb-4 text-center text-xs font-medium text-white/70">
              Join 2,000+ customers already on their routine
            </p>
            <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button type="submit" className="btn-press rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition-colors duration-200 hover:bg-warm-50">
                Get 10% Off
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-white/40">No spam. Unsubscribe any time.</p>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container className="max-w-4xl">
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                Frequently Asked Questions About Our Mushroom Extract Sprays
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-base text-grey-500">
                Find quick answers about how InnoVAherb sprays work, which formula to start with, and how delivery works in Bulgaria.
              </p>
            </div>

            <div className="space-y-3">
              {homeFaqs.map((item, index) => (
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
      </main>
      <SiteFooter />
    </>
  );
}
