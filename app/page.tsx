import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";
import {
  homeConversionPoints,
  homeFaqs,
  homeHowItWorks,
  homeOfferCards,
  homeReviews,
  homeTrustPoints,
} from "@/lib/storefront-content";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductCard } from "@/components/storefront/ProductCard";
import { Container } from "@/components/ui/Container";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Bulgarian Mushroom Extract Sprays | InnoVAherb",
  description:
    "Shop Bulgarian mushroom extract sprays for focus, energy, balance, vitality, and immunity. Explore six InnoVAherb formulas with secure checkout.",
  path: "/",
});

export default function HomePage() {
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
      <SiteHeader locale="en" />
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <section className="grain relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-warm-50 to-warm-100" />
          <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/3 rounded-full bg-brand-100/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-earth-100/20 blur-3xl" />

          <Container className="-mt-24 grid gap-6 pb-4 pt-3 sm:-mt-20 sm:pb-5 sm:pt-4 lg:-mt-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-6 lg:pt-5">
            <div>
              <div className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-warm-200/60 bg-white/70 px-3.5 py-1 shadow-elevated backdrop-blur-sm">
                <span className="stars text-sm">★★★★★</span>
                <span className="text-sm font-medium text-grey-600">Trusted by 2,000+ customers across Europe</span>
              </div>

              <h1 className="animate-fade-in-up delay-100 mb-4 font-display text-3xl font-bold tracking-heading text-grey-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                Bulgarian Mushroom Extract Sprays for Daily Focus, Energy, and Vitality
              </h1>

              <p className="animate-fade-in-up delay-200 mb-6 max-w-xl text-base leading-body text-grey-600 sm:text-lg">
                Discover premium Bulgarian mushroom extract sprays for focus, energy, balance, immunity, and full-spectrum daily support in a faster, easier oral format.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3">
                <Link href="/#products" className="btn-press inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-colors duration-200 hover:bg-brand-700">
                  Shop Our Collection
                </Link>
                <Link href="/shipping-returns" className="btn-press inline-flex items-center gap-2 rounded-xl border border-warm-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-grey-800 transition-colors duration-200 hover:bg-white">
                  Shipping and Returns
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">Free shipping</p>
                  <p className="mt-2 text-sm text-grey-600">On Bulgaria orders over EUR 50.</p>
                </div>
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">Daily ritual</p>
                  <p className="mt-2 text-sm text-grey-600">Spray in seconds, no capsules or prep.</p>
                </div>
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">Best seller</p>
                  <p className="mt-2 text-sm text-grey-600">Start with the 5-Mushroom Mix if you are unsure.</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-brand-100/80 bg-white/75 p-4 shadow-elevated backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">Recommended first purchase</p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-grey-900">Start with the 5-Mushroom Mix</p>
                    <p className="mt-1 text-sm text-grey-600">The easiest entry point for shoppers who want one bottle to cover more than one goal.</p>
                  </div>
                  <Link href="/products/mix" className="btn-press inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800">
                    Shop the best seller
                  </Link>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-body text-grey-600">
                InnoVAherb mushroom extract sprays are designed for shoppers who want a simpler wellness routine, cleaner daily dosing, and formulas matched to clear goals like mental clarity, natural energy, evening balance, and everyday resilience.
              </p>
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
                  priority
                  className="w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        <section id="products" className="py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                Shop by Goal
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">
                Every mushroom has a role. Pick the result you want, or start with the Mix if you want the easiest first order.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale="en" />
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

        <section className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                Why Customers Choose the Spray Format
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">
                The best supplement is the one you actually keep using. That is why the InnoVAherb range is built around speed, simplicity, and consistency.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
              {homeConversionPoints.map((point) => (
                <div key={point.title} className="rounded-xl border border-warm-200/70 bg-warm-50 p-5 shadow-elevated sm:rounded-2xl sm:p-6">
                  <h3 className="font-display text-xl font-bold text-grey-900">{point.title}</h3>
                  <p className="mt-3 text-sm leading-body text-grey-600">{point.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-warm-200/50 bg-warm-50 py-5 sm:py-6">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-14">
              {homeTrustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-grey-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
                  <span className="whitespace-nowrap text-xs font-medium sm:text-sm">{point}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
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

        <section className="grain relative overflow-hidden py-6 sm:py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-grey-900 via-brand-800/90 to-grey-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-grey-900/40" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-600/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-earth-500/15 blur-3xl" />

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
                <Image src="/brand_assets/Cordycepts_front.webp" alt="Cordyceps mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="128px" className="h-full w-full object-cover" />
              </div>
              <div className="-mt-6 h-48 w-36 overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Shiitake_front.webp" alt="Shiitake mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="144px" className="h-full w-full object-cover" />
              </div>
              <div className="h-44 w-32 rotate-[3deg] overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Chaga_front.webp" alt="Chaga mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="128px" className="h-full w-full object-cover" />
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
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
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
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />

          <Container className="relative max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl">
              Join the InnoVAherb Community
            </h2>
            <p className="mb-6 mt-3 text-sm text-brand-100 sm:text-base">
              Wellness tips, product drops, and offers for customers who want to build a better routine around natural mushroom support.
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
