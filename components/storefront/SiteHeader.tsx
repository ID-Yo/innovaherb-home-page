import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Locale } from "@/lib/types";
import { LocaleToggle } from "@/components/storefront/LocaleToggle";
import { CartIndicator } from "@/components/storefront/cart-indicator";
import { Container } from "@/components/ui/Container";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-warm-200/70 bg-warm-50/95 backdrop-blur">
      <div className="bg-brand-700 px-4 py-2 text-center text-xs font-medium text-white">
        Premium Bulgarian mushroom extract sprays with Bulgaria-only delivery in v1.
      </div>
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
            alt="InnoVAherb"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-grey-700 lg:flex">
          <Link href="/#products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shipping-returns">Shipping</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LocaleToggle locale={locale} />
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white px-4 py-2 text-sm font-semibold text-grey-700"
          >
            <ShoppingBag className="h-4 w-4" />
            <CartIndicator />
          </Link>
        </div>
      </Container>
    </header>
  );
}
