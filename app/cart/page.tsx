import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { CartTable } from "@/components/storefront/CartTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cart | InnoVAherb",
  description: "Review the products in your InnoVAherb cart before secure Stripe checkout.",
  path: "/cart",
});

export default function CartPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container>
          <h1 className="font-display text-5xl text-grey-900">Your cart</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-grey-600">
            Review your selected mushroom sprays, adjust quantities, and continue to secure card checkout.
          </p>
          <div className="mt-10">
            <CartTable />
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
