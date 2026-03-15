import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/components/storefront/CartProvider";
import { ChatWidget } from "@/components/storefront/ChatWidget";
import { buildMetadata } from "@/lib/metadata";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${bodyFont.className}`}>
        <CartProvider>
          {children}
          <ChatWidget />
        </CartProvider>
      </body>
    </html>
  );
}
