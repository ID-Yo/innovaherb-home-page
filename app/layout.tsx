import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartProvider } from "@/components/storefront/CartProvider";
import { ChatWidget } from "@/components/storefront/ChatWidget";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = buildMetadata({
  title: "Bulgarian Mushroom Extract Sprays | InnoVAherb",
  description:
    "Shop Bulgarian mushroom extract sprays for focus, energy, balance, vitality, and immunity. Explore six InnoVAherb formulas with secure checkout.",
  path: "/",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const locale = headerList.get("x-innovaherb-locale") ?? "en";

  return (
    <html lang={locale}>
      <body className={`${bodyFont.variable} ${displayFont.variable} ${bodyFont.className}`}>
        <CartProvider>
          {children}
          <ChatWidget />
        </CartProvider>
      </body>
    </html>
  );
}
