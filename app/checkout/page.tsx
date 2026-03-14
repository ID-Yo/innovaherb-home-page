import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { CheckoutForm } from "@/components/storefront/CheckoutForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Checkout | InnoVAherb",
  description: "Complete your InnoVAherb order with secure card checkout and Bulgaria-only shipping.",
  path: "/checkout",
  index: false,
});

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container>
          <CheckoutForm />
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
