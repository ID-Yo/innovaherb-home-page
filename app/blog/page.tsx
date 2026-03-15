import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "InnoVAherb Blog | Mushroom Wellness and Product Guides",
  description:
    "Read InnoVAherb articles about mushroom wellness routines, supplement shopping, and product guidance.",
  path: "/blog",
});

const content = {
  en: {
    eyebrow: "Editorial",
    title: "Brand, ingredient, and wellness notes.",
    label: "Journal",
    posts: [
      {
        title: "How mushroom spray formats support consistency",
        excerpt: "A practical look at why easy daily rituals outperform complicated supplement stacks for many shoppers.",
      },
      {
        title: "Choosing between Lion's Mane, Reishi, and Cordyceps",
        excerpt: "A simple guide for choosing a mushroom spray based on the day you want to have, not just the ingredient name.",
      },
      {
        title: "What a clean e-commerce supplement experience should feel like",
        excerpt: "Why product clarity, transparent pricing, and reliable fulfillment matter as much as beautiful packaging.",
      },
    ],
  },
  bg: {
    eyebrow: "Редакционно",
    title: "Бележки за марката, съставките и уелнес рутината.",
    label: "Статия",
    posts: [
      {
        title: "Защо спрей форматът помага за по-добро постоянство",
        excerpt: "Практичен поглед към това защо лесните ежедневни ритуали често работят по-добре от сложните режими с много добавки.",
      },
      {
        title: "Как да изберете между Лъвска грива, Рейши и Кордицепс",
        excerpt: "Лесен ориентир за избор на спрей според начина, по който искате да се чувствате през деня, а не само според името на съставката.",
      },
      {
        title: "Как трябва да изглежда едно чисто онлайн пазаруване на добавки",
        excerpt: "Защо яснотата на продукта, прозрачната цена и надеждното изпълнение на поръчките са толкова важни, колкото и красивата опаковка.",
      },
    ],
  },
} as const;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = content[locale];

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl text-grey-900">{t.title}</h1>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.posts.map((post) => (
              <article key={post.title} className="rounded-[2rem] border border-warm-200 bg-white p-6 shadow-elevated">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.label}</p>
                <h2 className="mt-4 font-display text-3xl text-grey-900">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-grey-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
