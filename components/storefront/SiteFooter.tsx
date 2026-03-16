import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { withLocale } from "@/lib/i18n";
import { products } from "@/lib/products";
import { Locale } from "@/lib/types";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t =
    locale === "bg"
      ? {
          blurb:
            "Природна интелигентност, усъвършенствана. Премиум български гъбени спрейове за по-лесна ежедневна рутина.",
          shop: "Продукти",
          company: "Компания",
          support: "Поддръжка",
          about: "За нас",
          blog: "Блог",
          contact: "Контакти",
          shipping: "Доставка и връщане",
          privacy: "Политика за поверителност",
          terms: "Общи условия",
          copyright: "Copyright 2026 InnoVAherb. Всички права запазени.",
        }
      : locale === "ru"
        ? {
            blurb: "Интеллект природы, доведенный до совершенства. Премиальные болгарские грибные спреи для более простой ежедневной рутины.",
            shop: "Продукты",
            company: "Компания",
            support: "Поддержка",
            about: "О нас",
            blog: "Блог",
            contact: "Контакты",
            shipping: "Доставка и возврат",
            privacy: "Политика конфиденциальности",
            terms: "Условия использования",
            copyright: "Copyright 2026 InnoVAherb. Все права защищены.",
          }
        : locale === "sv"
          ? {
              blurb: "Naturens intelligens, förfinad. Premiumsprayer med bulgariska svampextrakt för en enklare daglig rutin.",
              shop: "Produkter",
              company: "Företag",
              support: "Support",
              about: "Om oss",
              blog: "Blogg",
              contact: "Kontakter",
              shipping: "Frakt och returer",
              privacy: "Integritetspolicy",
              terms: "Användarvillkor",
              copyright: "Copyright 2026 InnoVAherb. Alla rättigheter förbehållna.",
            }
          : {
              blurb:
                "Nature's Intelligence, Perfected. Premium Bulgarian mushroom sprays designed for modern daily rituals.",
              shop: "Shop",
              company: "Company",
              support: "Support",
              about: "About Us",
              blog: "Blog",
              contact: "Contact",
              shipping: "Shipping and Returns",
              privacy: "Privacy Policy",
              terms: "Terms of Service",
              copyright: "Copyright 2026 InnoVAherb. All rights reserved.",
            };
  return (
    <footer className="bg-grey-900 pb-8 pt-16 text-warm-200">
      <Container>
        <div className="grid gap-12 border-b border-grey-700/50 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Image
              src="/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
              alt="InnoVAherb logo"
              width={1090}
              height={190}
              sizes="184px"
              quality={65}
              className="mb-4 h-8 w-auto brightness-0 invert opacity-80"
            />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-warm-300">{t.blurb}</p>
            <div className="flex gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grey-800 text-xs font-bold">IG</div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grey-800 text-xs font-bold">FB</div>
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold tracking-heading text-white">{t.shop}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={withLocale(`/products/${product.slug}`, locale)} className="text-warm-300 transition-colors hover:text-white">
                    {product.localized[locale].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-semibold tracking-heading text-white">{t.company}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href={withLocale("/about", locale)} className="text-warm-300 transition-colors hover:text-white">{t.about}</Link></li>
              <li><Link href={withLocale("/blog", locale)} className="text-warm-300 transition-colors hover:text-white">{t.blog}</Link></li>
              <li><Link href={withLocale("/contact", locale)} className="text-warm-300 transition-colors hover:text-white">{t.contact}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-semibold tracking-heading text-white">{t.support}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href={withLocale("/shipping-returns", locale)} className="text-warm-300 transition-colors hover:text-white">{t.shipping}</Link></li>
              <li><Link href={withLocale("/privacy-policy", locale)} className="text-warm-300 transition-colors hover:text-white">{t.privacy}</Link></li>
              <li><Link href={withLocale("/terms", locale)} className="text-warm-300 transition-colors hover:text-white">{t.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-xs text-grey-400">{t.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
