import Link from "next/link";
import { Product, Locale } from "@/lib/types";
import { formatEuro } from "@/lib/format";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const copy = product.localized[locale];

  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-warm-200/60 bg-white p-6 shadow-elevated">
      <Link href={`/products/${product.slug}`} className="rounded-[1.5rem] bg-warm-50 p-6">
        <img src={product.image} alt={copy.name} className="mx-auto h-56 w-auto object-contain" />
      </Link>
      <div className="mt-6 flex flex-1 flex-col">
        <p className={`text-xs font-bold uppercase tracking-[0.3em] ${product.accentClass}`}>{copy.tagline}</p>
        <h3 className="mt-2 font-display text-3xl text-grey-900">{copy.name}</h3>
        <p className="mt-3 text-sm leading-6 text-grey-600">{copy.shortDescription}</p>
        <div className="mt-6 flex items-center justify-between border-t border-warm-100 pt-4">
          <span className="font-display text-2xl text-grey-900">{formatEuro(product.priceCents)}</span>
          <div className="flex items-center gap-3">
            <Link href={`/products/${product.slug}`} className="text-sm font-semibold text-grey-600">
              Details
            </Link>
            <AddToCartButton slug={product.slug} />
          </div>
        </div>
      </div>
    </article>
  );
}
