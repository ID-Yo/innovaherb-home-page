export const siteConfig = {
  name: "InnoVAherb",
  title: "Bulgarian Mushroom Extract Sprays | InnoVAherb",
  description:
    "Shop Bulgarian mushroom extract sprays for focus, energy, balance, vitality, and immunity. Explore six InnoVAherb formulas with secure checkout.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://innovaherb-home-page.vercel.app",
  localeAlternates: {
    en: "en-US",
    bg: "bg-BG",
  },
  socialImage: "/brand_assets/Group_front.webp",
  shippingThresholdCents: 5000,
  defaultCurrency: "EUR",
} as const;

export function absoluteUrl(path = "/") {
  const safePath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${safePath}`;
}
