import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale, PUBLIC_LOCALES } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { aboutPageContent } from "@/lib/public-page-copy";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = aboutPageContent[locale];

  return buildMetadata({
    title: t.metadataTitle,
    description: t.metadataDescription,
    path: "/about",
    locale,
    availableLocales: PUBLIC_LOCALES,
  });
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = aboutPageContent[locale];

  return (
    <>
      <SiteHeader locale={locale} availableLocales={PUBLIC_LOCALES} />
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
