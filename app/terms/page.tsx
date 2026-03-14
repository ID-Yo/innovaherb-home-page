import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service | InnoVAherb",
  description: "Read the storefront terms that govern orders, payments, and customer support for InnoVAherb.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container className="max-w-4xl space-y-6 text-sm leading-7 text-grey-600">
          <h1 className="font-display text-5xl text-grey-900">Terms of service</h1>
          <p>Orders placed on the InnoVAherb storefront are subject to product availability, payment confirmation, and operational review.</p>
          <p>Shipping is limited to Bulgaria in the first release. Refunds are reviewed manually and processed through Stripe when approved.</p>
          <p>Operational updates, stock visibility, and order statuses are maintained through the internal admin console.</p>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
