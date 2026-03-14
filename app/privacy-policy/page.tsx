import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | InnoVAherb",
  description: "Learn how InnoVAherb handles customer, checkout, and operational data for the e-commerce site.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container className="max-w-4xl space-y-6 text-sm leading-7 text-grey-600">
          <h1 className="font-display text-5xl text-grey-900">Privacy policy</h1>
          <p>InnoVAherb collects customer contact, shipping, and payment-related order metadata necessary to process orders and support customer service.</p>
          <p>Card details are processed by Stripe Checkout. The storefront stores only the order and payment references needed for fulfillment and operational history.</p>
          <p>Admin access is restricted to authenticated operations staff through Supabase Auth and role-controlled database access.</p>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
