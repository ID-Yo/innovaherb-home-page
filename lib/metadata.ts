import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: absoluteUrl(path),
    },
    robots: index ? undefined : { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(path),
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
      icon: [
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: [
        { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
      ],
    },
  };
}
