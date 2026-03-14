import Link from "next/link";
import Script from "next/script";
import { homeBodyCopy } from "@/lib/copy";
import { products } from "@/lib/products";
import { buildMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductCard } from "@/components/storefront/ProductCard";
import { Container } from "@/components/ui/Container";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Mushroom Extract Sprays for Focus and Vitality | InnoVAherb",
  description:
    "Explore premium Bulgarian mushroom extract sprays for focus, energy, immunity, and daily vitality. Shop six natural formulas and secure checkout for Bulgaria.",
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
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/")}#collection`,
        name: "InnoVAherb mushroom extract sprays",
        about: "Mushroom extract sprays for focus, energy, immunity, and daily vitality.",
        url: absoluteUrl("/"),
      },
      ...products.map((product) => ({
        "@type": "Product",
        name: product.localized.en.name,
        sku: product.sku,
        image: absoluteUrl(product.image),
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: (product.priceCents / 100).toFixed(2),
          availability: "https://schema.org/InStock",
          url: absoluteUrl(`/products/${product.slug}`),
        },
      })),
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
        <section className="grain overflow-hidden bg-gradient-to-br from-brand-50 via-warm-50 to-white">
          <Container className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-warm-200 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-700">
                Bulgaria-made mushroom extract sprays
              </div>
              <h1 className="mt-6 font-display text-5xl leading-tight text-grey-900 sm:text-6xl">
                Mushroom extract sprays for focus, energy, immunity, and daily vitality.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-grey-600">
                InnoVAherb turns premium Bulgarian mushroom extracts into easy daily oral sprays. Shop six natural formulas designed for focus, stamina, balance, vitality, antioxidant support, and full-spectrum wellness.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#products" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">
                  Shop the collection
                </Link>
                <Link href="/shipping-returns" className="rounded-full border border-warm-200 bg-white px-6 py-3 text-sm font-semibold text-grey-900">
                  Shipping and returns
                </Link>
              </div>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Fast routine</dt>
                  <dd className="mt-2 text-sm text-grey-600">No capsules, no preparation, and no complicated stacks.</dd>
                </div>
                <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Bulgaria only</dt>
                  <dd className="mt-2 text-sm text-grey-600">V1 shipping coverage is limited to Bulgaria for reliable fulfillment.</dd>
                </div>
                <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Guest checkout</dt>
                  <dd className="mt-2 text-sm text-grey-600">Secure Stripe checkout with cards and no customer account required.</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-brand-100 blur-3xl" />
              <img src="/brand_assets/Group_front.webp" alt="InnoVAherb mushroom spray collection" className="relative z-10 mx-auto max-h-[540px] w-auto" />
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Why the spray format matters</p>
              <h2 className="mt-4 font-display text-4xl text-grey-900">A simpler mushroom wellness routine for real life.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-grey-600 lg:col-span-3">
              {homeBodyCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>

        <section id="products" className="py-20">
          <Container>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Shop by goal</p>
                <h2 className="mt-3 font-display text-4xl text-grey-900">Natural mushroom sprays with one clear role each.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-grey-600">
                Each bottle is priced equally, which keeps the collection easy to compare. Choose one based on the result you want, or start with the 5-mushroom blend if you want the broadest daily routine.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale="en" />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
