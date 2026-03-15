import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service | InnoVAherb",
  description: "Read the storefront terms that govern orders, payments, and customer support for InnoVAherb.",
  path: "/terms",
});

const content = {
  en: {
    title: "Terms of service",
    paragraphs: [
      "Orders placed on the InnoVAherb storefront are subject to product availability, payment confirmation, and review before dispatch.",
      "We currently ship within Bulgaria. Approved refunds are returned through the original payment method used at checkout.",
      "Customers receive email updates as their order moves from confirmation to dispatch and delivery support.",
    ],
  },
  bg: {
    title: "Общи условия",
    paragraphs: [
      "Поръчките в магазина на InnoVAherb зависят от наличността на продуктите, потвърждение на плащането и преглед преди изпращане.",
      "В момента доставяме в рамките на България. Одобрените възстановявания се връщат по първоначалния метод на плащане, използван при checkout.",
      "Клиентите получават имейл известия, докато поръчката преминава от потвърждение към изпращане и съдействие при доставка.",
    ],
  },
} as const;

export default async function TermsPage({
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
