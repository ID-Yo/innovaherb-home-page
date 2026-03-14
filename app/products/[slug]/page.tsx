import Script from "next/script";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug, products } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found | InnoVAherb",
      description: "The requested product could not be found.",
      path: `/products/${slug}`,
    });
  }

  return buildMetadata({
    title: product.localized.en.seoTitle,
    description: product.localized.en.seoDescription,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const copy = product.localized.en;
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
      url: absoluteUrl(`/products/${product.slug}`),
    },
  };

  return (
    <>
      <SiteHeader locale="en" />
      <Script
        id={`${product.slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-[2rem] bg-white p-10 shadow-elevated">
            <img src={product.image} alt={copy.name} className="mx-auto h-[420px] w-auto object-contain" />
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.3em] ${product.accentClass}`}>{copy.tagline}</p>
            <h1 className="mt-4 font-display text-5xl text-grey-900">{copy.heroTitle}</h1>
            <p className="mt-6 text-lg leading-8 text-grey-600">{copy.heroDescription}</p>
            <p className="mt-6 text-4xl font-semibold text-grey-900">€{(product.priceCents / 100).toFixed(2)}</p>
            <div className="mt-8 flex items-center gap-4">
              <AddToCartButton slug={product.slug} />
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-warm-200 bg-white p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Benefits</dt>
                <dd className="mt-3 space-y-2 text-sm leading-7 text-grey-600">
                  {copy.benefits.map((benefit) => (
                    <p key={benefit}>{benefit}</p>
                  ))}
                </dd>
              </div>
              <div className="rounded-[1.5rem] border border-warm-200 bg-white p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Ingredients</dt>
                <dd className="mt-3 space-y-2 text-sm leading-7 text-grey-600">
                  {copy.ingredients.map((ingredient) => (
                    <p key={ingredient}>{ingredient}</p>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="mt-6 rounded-[1.5rem] border border-warm-200 bg-white p-5">
              <h2 className="font-display text-3xl text-grey-900">How to use</h2>
              <div className="mt-4 space-y-2 text-sm leading-7 text-grey-600">
                {copy.usage.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
