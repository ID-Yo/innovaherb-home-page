import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About InnoVAherb | Bulgarian Mushroom Spray Brand",
  description:
    "Learn how InnoVAherb builds premium Bulgarian mushroom extract sprays designed for practical daily wellness routines.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container className="max-w-prosewide">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">About us</p>
          <h1 className="mt-4 font-display text-5xl text-grey-900">Bulgarian mushroom extracts built for daily use.</h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6 text-lg leading-8 text-grey-600">
              <p>InnoVAherb was created for people who want natural supplement routines that feel practical instead of complicated. The collection starts with premium mushroom extracts and turns them into simple oral sprays that fit workdays, home routines, and travel.</p>
              <p>The brand position is direct: one spray, one clear use case, one premium but accessible daily ritual. That clarity carries into the storefront, the product naming, and the order flow. Every product page explains what the formula is for, how to use it, and how it fits into a real routine.</p>
              <p>As the e-commerce product grows, the focus stays the same: clean product data, straightforward checkout, and operations that give the team visibility into every order from payment to fulfillment.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-elevated">
              <img src="/brand_assets/group_front3.png" alt="InnoVAherb collection visual" className="w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
