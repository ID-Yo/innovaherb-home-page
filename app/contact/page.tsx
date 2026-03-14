import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact InnoVAherb | Support and Order Help",
  description:
    "Contact InnoVAherb for product questions, shipping support, wholesale inquiries, and order assistance in Bulgaria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-[2rem] border border-warm-200 bg-white p-8 shadow-elevated">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Support</p>
            <h1 className="mt-4 font-display text-5xl text-grey-900">Need help with a product or order?</h1>
            <p className="mt-6 text-base leading-8 text-grey-600">
              Reach out for product questions, wholesale requests, or order support. We currently deliver across Bulgaria and are happy to help with shipping, product selection, and after-purchase care.
            </p>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-warm-50 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Email</dt>
                <dd className="mt-2 text-grey-900">hello@innovaherb.com</dd>
              </div>
              <div className="rounded-[1.5rem] bg-warm-50 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Phone</dt>
                <dd className="mt-2 text-grey-900">+359 2 987 6543</dd>
              </div>
            </dl>
          </section>
          <section className="rounded-[2rem] border border-warm-200 bg-white p-8 shadow-elevated">
            <h2 className="font-display text-3xl text-grey-900">FAQ snapshot</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-grey-600">
              <div>
                <h3 className="font-semibold text-grey-900">Shipping coverage</h3>
                <p>We currently ship orders across Bulgaria.</p>
              </div>
              <div>
                <h3 className="font-semibold text-grey-900">Payments</h3>
                <p>Secure card payments are handled via Stripe Checkout.</p>
              </div>
              <div>
                <h3 className="font-semibold text-grey-900">Returns</h3>
                <p>See the dedicated shipping and returns page for delivery and support details.</p>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
