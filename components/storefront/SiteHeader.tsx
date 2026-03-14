"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Locale } from "@/lib/types";
import { LocaleToggle } from "@/components/storefront/LocaleToggle";
import { CartIndicator } from "@/components/storefront/cart-indicator";
import { useCart } from "@/components/storefront/CartProvider";
import { Container } from "@/components/ui/Container";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="bg-brand-700 px-4 py-1.5 text-center text-xs tracking-wide text-white">
        Get 10% off your first order when you start with two bottles or more.
      </div>
      <header className="sticky top-0 z-50 border-b border-warm-200/60 bg-warm-50/95 sm:backdrop-blur-md">
        <Container className="flex h-14 items-center justify-between lg:h-16">
          <Link href="/" className="group flex-shrink-0">
            <Image
              src="/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
              alt="InnoVAherb logo"
              width={1090}
              height={190}
              sizes="184px"
              quality={65}
              priority
              className="h-7 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-8 lg:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/#products" className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              Products
            </Link>
            <Link href="/about" className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              About Us
            </Link>
            <Link href="/blog" className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              Blog
            </Link>
            <Link href="/contact" className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              Contacts
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleToggle locale={locale} />
            <Link
              href="/cart"
              className="relative rounded-full p-2 text-grey-700 transition-colors hover:bg-warm-100"
              aria-label={`Cart (${itemCount} item${itemCount === 1 ? "" : "s"})`}
            >
              <ShoppingBag className="h-5 w-5" />
              <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-600 px-1 text-[0.625rem] font-bold text-white">
                <CartIndicator />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-lg p-2 text-grey-700 transition-colors hover:bg-warm-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
        {menuOpen ? (
          <div className="border-t border-warm-200/60 bg-warm-50 lg:hidden">
            <nav className="space-y-1 px-6 py-6">
              <Link href="/#products" className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
              <Link href="/about" className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/blog" className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                Contacts
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
