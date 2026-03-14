export const siteConfig = {
  name: "InnoVAherb",
  title: "Mushroom Extract Sprays for Focus and Vitality | InnoVAherb",
  description:
    "Explore premium Bulgarian mushroom extract sprays for focus, energy, immunity, and daily vitality. Shop six natural formulas and secure checkout for Bulgaria.",
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
