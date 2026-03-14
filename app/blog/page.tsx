import { SiteHeader } from "@/components/storefront/SiteHeader";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

const posts = [
  {
    title: "How mushroom spray formats support consistency",
    excerpt:
      "A practical look at why easy daily rituals outperform complicated supplement stacks for many shoppers.",
  },
  {
    title: "Choosing between Lion's Mane, Reishi, and Cordyceps",
    excerpt:
      "A simple guide for choosing a mushroom spray based on the day you want to have, not just the ingredient name.",
  },
  {
    title: "What a clean e-commerce supplement experience should feel like",
    excerpt:
      "Why product clarity, transparent pricing, and reliable fulfillment matter as much as beautiful packaging.",
  },
];

export const metadata = buildMetadata({
  title: "InnoVAherb Blog | Mushroom Wellness and Product Guides",
  description:
    "Read InnoVAherb articles about mushroom wellness routines, supplement shopping, and product guidance.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Editorial</p>
          <h1 className="mt-4 font-display text-5xl text-grey-900">Brand, ingredient, and wellness notes.</h1>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-[2rem] border border-warm-200 bg-white p-6 shadow-elevated">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Journal</p>
                <h2 className="mt-4 font-display text-3xl text-grey-900">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-grey-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
