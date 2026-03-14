import Link from "next/link";
import Image from "next/image";
import { Product, Locale } from "@/lib/types";
import { formatEuro } from "@/lib/format";
import { AddToCartButton } from "@/components/storefront/add-to-cart-button";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const copy = product.localized[locale];

  return (
    <article className="group product-card flex h-full flex-col rounded-xl bg-white p-3 shadow-product sm:rounded-2xl sm:p-4">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative mb-3 flex h-36 items-center justify-center overflow-hidden rounded-lg bg-warm-50 sm:h-40 sm:rounded-xl lg:h-44">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 to-transparent" />
          <Image
            src={product.image}
            alt={`${copy.name} mushroom extract spray by InnoVAherb`}
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 144px, (min-width: 640px) 160px, 160px"
            quality={72}
            className="relative max-h-full w-auto transition-transform duration-500 ease-spring group-hover:scale-105"
          />
        </div>
        <div className="space-y-0.5 sm:space-y-1">
          <span className={`text-[10px] font-bold uppercase tracking-widest sm:text-xs ${product.accentClass}`}>{copy.tagline}</span>
          <h3 className="font-display text-base font-bold tracking-tight text-grey-900 sm:text-lg">{copy.name}</h3>
          <p className="hidden text-xs leading-relaxed text-grey-500 sm:block sm:text-sm">{copy.shortDescription}</p>
        </div>
      </Link>
      <div className="mt-2.5 flex items-center justify-between border-t border-warm-100 pt-2.5 sm:mt-3 sm:pt-3">
        <span className="font-display text-base font-bold text-grey-900 sm:text-lg">{formatEuro(product.priceCents)}</span>
        <div className="flex items-center gap-2">
          <Link href={`/products/${product.slug}`} className="text-xs font-semibold text-grey-600 sm:text-sm">
            View {copy.name}
          </Link>
          <AddToCartButton
            slug={product.slug}
            className="px-2.5 py-2 text-[10px] sm:px-3.5 sm:text-xs"
          />
        </div>
      </div>
    </article>
  );
}
