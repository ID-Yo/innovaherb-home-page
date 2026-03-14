import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Shipping and Returns | InnoVAherb",
  description:
    "Review Bulgaria shipping, order support, and return guidance for the InnoVAherb storefront.",
  path: "/shipping-returns",
});

export default function ShippingReturnsPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container className="max-w-4xl space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Support policy</p>
            <h1 className="mt-4 font-display text-5xl text-grey-900">Shipping and returns</h1>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-[2rem] bg-white p-6 shadow-elevated">
              <h2 className="font-display text-3xl text-grey-900">Shipping</h2>
              <p className="mt-4 text-sm leading-7 text-grey-600">
                We currently deliver across Bulgaria. Orders over EUR 50 receive free shipping, while orders below that threshold show a flat delivery fee at checkout before payment.
              </p>
            </section>
            <section className="rounded-[2rem] bg-white p-6 shadow-elevated">
              <h2 className="font-display text-3xl text-grey-900">Returns</h2>
              <p className="mt-4 text-sm leading-7 text-grey-600">
                If you need help with a return or refund, contact our support team and we will guide you through the next steps as quickly as possible.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
