import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About InnoVAherb | Bulgarian Mushroom Spray Brand",
  description:
    "Learn how InnoVAherb builds premium Bulgarian mushroom extract sprays designed for practical daily wellness routines.",
  path: "/about",
});

const copy = {
  en: {
    eyebrow: "About us",
    title: "Bulgarian mushroom extracts built for daily use.",
    paragraphs: [
      "InnoVAherb was created for people who want natural supplement routines that feel practical instead of complicated. The collection starts with premium mushroom extracts and turns them into simple oral sprays that fit workdays, home routines, and travel.",
      "The brand position is direct: one spray, one clear use case, one premium but accessible daily ritual. That clarity carries into the storefront, the product naming, and the order flow. Every product page explains what the formula is for, how to use it, and how it fits into a real routine.",
      "As the e-commerce product grows, the focus stays the same: clean product data, straightforward checkout, and operations that give the team visibility into every order from payment to fulfillment.",
    ],
  },
  bg: {
    eyebrow: "За нас",
    title: "Български гъбени екстракти, създадени за ежедневна употреба.",
    paragraphs: [
      "InnoVAherb е създаден за хора, които искат натурална рутина с добавки, която да бъде практична, а не сложна. Колекцията започва с премиум гъбени екстракти и ги превръща в лесни орални спрейове за работни дни, домашна рутина и пътуване.",
      "Позиционирането на марката е ясно: един спрей, една конкретна цел, един премиум, но достъпен ежедневен ритуал. Тази яснота се вижда в магазина, в имената на продуктите и в процеса на поръчка.",
      "Докато електронният магазин расте, фокусът остава същият: чисти продуктови данни, директен checkout и ясна оперативна видимост за всеки етап от поръчката.",
    ],
  },
} as const;

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = copy[locale];

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="py-20">
        <Container className="max-w-prosewide">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl text-grey-900">{t.title}</h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6 text-lg leading-8 text-grey-600">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-elevated">
              <img src="/brand_assets/group_front3.png" alt="InnoVAherb collection visual" className="w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
