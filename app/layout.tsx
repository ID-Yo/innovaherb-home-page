import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/components/storefront/CartProvider";
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
  title: "Mushroom Extract Sprays for Focus and Vitality | InnoVAherb",
  description:
    "Explore premium Bulgarian mushroom extract sprays for focus, energy, immunity, and daily vitality. Shop six natural formulas and secure checkout for Bulgaria.",
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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
