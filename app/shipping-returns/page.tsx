import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale, PUBLIC_LOCALES } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { shippingReturnsPageContent } from "@/lib/public-page-copy";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = shippingReturnsPageContent[locale];

  return buildMetadata({
    title: t.metadataTitle,
    description: t.metadataDescription,
    path: "/shipping-returns",
    locale,
    availableLocales: PUBLIC_LOCALES,
  });
}

export default async function ShippingReturnsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = shippingReturnsPageContent[locale];

  return (
    <>
      <SiteHeader locale={locale} availableLocales={PUBLIC_LOCALES} />
      <main className="py-20">
        <Container className="max-w-4xl space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl text-grey-900">{t.title}</h1>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="rounded-[2rem] bg-white p-6 shadow-elevated">
              <h2 className="font-display text-3xl text-grey-900">{t.shippingTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-grey-600">{t.shippingText}</p>
            </section>
            <section className="rounded-[2rem] bg-white p-6 shadow-elevated">
              <h2 className="font-display text-3xl text-grey-900">{t.returnsTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-grey-600">{t.returnsText}</p>
            </section>
          </div>
        </Container>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
