import Link from "next/link";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Checkout canceled | InnoVAherb",
  description: "You canceled the checkout session before completing payment.",
  path: "/checkout/cancel",
  index: false,
});

export default function CheckoutCancelPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-24">
        <Container className="max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-elevated">
          <h1 className="font-display text-5xl text-grey-900">Checkout canceled</h1>
          <p className="mt-6 text-base leading-8 text-grey-600">
            Your cart remains available. You can update it or return to the secure checkout flow when you are ready.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/cart" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">Back to cart</Link>
            <Link href="/" className="rounded-full border border-warm-200 bg-white px-6 py-3 text-sm font-semibold text-grey-900">Continue browsing</Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
