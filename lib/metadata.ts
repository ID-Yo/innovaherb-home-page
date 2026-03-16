import type { Metadata } from "next";
import { localePath, PUBLIC_LOCALES } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { Locale } from "@/lib/types";

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
  availableLocales = PUBLIC_LOCALES,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  availableLocales?: readonly Locale[];
  index?: boolean;
}): Metadata {
  const canonicalPath = localePath(path, locale);
  const languages = Object.fromEntries(
    availableLocales.map((entry) => [siteConfig.localeAlternates[entry], absoluteUrl(localePath(path, entry))]),
  );

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages,
    },
    robots: index ? undefined : { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(canonicalPath),
      locale: siteConfig.localeAlternates[locale],
      images: [
        {
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
          alt: "InnoVAherb premium mushroom extract sprays",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.socialImage)],
    },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}
