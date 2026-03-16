import type { MetadataRoute } from "next";
import { PUBLIC_LOCALES, withLocale } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/shipping-returns",
    "/privacy-policy",
    "/terms",
  ];

  const localizedStaticRoutes = PUBLIC_LOCALES.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: absoluteUrl(withLocale(route, locale)),
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          PUBLIC_LOCALES.map((entry) => [siteConfig.localeAlternates[entry], absoluteUrl(withLocale(route, entry))]),
        ),
      },
    })),
  );

  const localizedProductRoutes = PUBLIC_LOCALES.flatMap((locale) =>
    products.map((product) => ({
      url: absoluteUrl(withLocale(`/products/${product.slug}`, locale)),
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          PUBLIC_LOCALES.map((entry) => [
            siteConfig.localeAlternates[entry],
            absoluteUrl(withLocale(`/products/${product.slug}`, entry)),
          ]),
        ),
      },
    })),
  );

  return [...localizedStaticRoutes, ...localizedProductRoutes];
}
