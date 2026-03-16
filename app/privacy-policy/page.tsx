import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale, PUBLIC_LOCALES } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { privacyPolicyPageContent } from "@/lib/public-page-copy";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = privacyPolicyPageContent[locale];

  return buildMetadata({
    title: t.metadataTitle,
    description: t.metadataDescription,
    path: "/privacy-policy",
    locale,
    availableLocales: PUBLIC_LOCALES,
  });
}

export default async function PrivacyPolicyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = privacyPolicyPageContent[locale];

  return (
    <>
      <SiteHeader locale={locale} availableLocales={PUBLIC_LOCALES} />
      <main className="py-20">
        <Container className="max-w-4xl space-y-6 text-sm leading-7 text-grey-600">
          <h1 className="font-display text-5xl text-grey-900">{t.title}</h1>
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Container>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
