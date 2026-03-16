"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { LocaleToggle } from "@/components/storefront/LocaleToggle";
import { CartIndicator } from "@/components/storefront/cart-indicator";
import { useCart } from "@/components/storefront/CartProvider";
import { Container } from "@/components/ui/Container";
import { commerceLocale, PUBLIC_LOCALES, withLocale } from "@/lib/i18n";
import { Locale } from "@/lib/types";

const content = {
  en: {
    promo: "Get 10% off your first order when you start with two bottles or more.",
    products: "Products",
    about: "About Us",
    blog: "Blog",
    contacts: "Contacts",
    cartLabel: (count: number) => `Cart (${count} item${count === 1 ? "" : "s"})`,
  },
  bg: {
    promo: "Вземете 10% отстъпка от първата поръчка при два или повече продукта.",
    products: "Продукти",
    about: "За нас",
    blog: "Блог",
    contacts: "Контакти",
    cartLabel: (count: number) => `Количка (${count} ${count === 1 ? "артикул" : "артикула"})`,
  },
  ru: {
    promo: "Получите скидку 10% на первый заказ, если начнете с двух и более флаконов.",
    products: "Продукты",
    about: "О нас",
    blog: "Блог",
    contacts: "Контакты",
    cartLabel: (count: number) => `Корзина (${count})`,
  },
  sv: {
    promo: "Få 10 % rabatt på din första beställning när du börjar med två flaskor eller fler.",
    products: "Produkter",
    about: "Om oss",
    blog: "Blogg",
    contacts: "Kontakt",
    cartLabel: (count: number) => `Varukorg (${count})`,
  },
} as const;

export function SiteHeader({
  locale,
  availableLocales = PUBLIC_LOCALES,
}: {
  locale: Locale;
  availableLocales?: readonly Locale[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const t = content[locale];
  const storeLocale = commerceLocale(locale);

  return (
    <>
      <div className="bg-brand-700 px-4 py-1.5 text-center text-xs tracking-wide text-white">{t.promo}</div>
      <header className="sticky top-0 z-50 border-b border-warm-200/60 bg-warm-50/95 sm:backdrop-blur-md">
        <Container className="flex h-14 items-center justify-between lg:h-16">
          <Link href={withLocale("/", locale)} className="group flex-shrink-0">
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
            <Link href={withLocale("/#products", locale)} className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              {t.products}
            </Link>
            <Link href={withLocale("/about", locale)} className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              {t.about}
            </Link>
            <Link href={withLocale("/blog", locale)} className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              {t.blog}
            </Link>
            <Link href={withLocale("/contact", locale)} className="text-[0.9375rem] font-medium tracking-tight text-grey-700 transition-colors hover:text-brand-600">
              {t.contacts}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleToggle locale={locale} availableLocales={availableLocales} />
            <Link
              href={withLocale("/cart", storeLocale)}
              className="relative rounded-full p-2 text-grey-700 transition-colors hover:bg-warm-100"
              aria-label={t.cartLabel(itemCount)}
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
              <Link href={withLocale("/#products", locale)} className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                {t.products}
              </Link>
              <Link href={withLocale("/about", locale)} className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                {t.about}
              </Link>
              <Link href={withLocale("/blog", locale)} className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                {t.blog}
              </Link>
              <Link href={withLocale("/contact", locale)} className="block rounded-xl px-4 py-3 font-medium text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-700" onClick={() => setMenuOpen(false)}>
                {t.contacts}
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
