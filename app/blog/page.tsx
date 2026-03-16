import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale, PUBLIC_LOCALES } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { blogPageContent } from "@/lib/public-page-copy";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = blogPageContent[locale];

  return buildMetadata({
    title: t.metadataTitle,
    description: t.metadataDescription,
    path: "/blog",
    locale,
    availableLocales: PUBLIC_LOCALES,
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = blogPageContent[locale];

  return (
    <>
      <SiteHeader locale={locale} availableLocales={PUBLIC_LOCALES} />
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
