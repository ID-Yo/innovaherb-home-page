import Link from "next/link";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Order received | InnoVAherb",
  description: "Your InnoVAherb order has been received and is awaiting payment confirmation.",
  path: "/checkout/success",
});

export default function CheckoutSuccessPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-24">
        <Container className="max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-elevated">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Order received</p>
          <h1 className="mt-4 font-display text-5xl text-grey-900">Thanks for your order.</h1>
          <p className="mt-6 text-base leading-8 text-grey-600">
            Payment confirmation and fulfillment updates are driven by secure Stripe webhooks. You will receive email confirmation once the payment is fully recorded.
          </p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white">
            Return to the shop
          </Link>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
