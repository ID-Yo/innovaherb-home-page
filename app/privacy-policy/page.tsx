import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | InnoVAherb",
  description: "Learn how InnoVAherb handles customer, checkout, and operational data for the e-commerce site.",
  path: "/privacy-policy",
});

const content = {
  en: {
    title: "Privacy policy",
    paragraphs: [
      "InnoVAherb collects customer contact, shipping, and payment-related order metadata necessary to process orders and support customer service.",
      "Card details are processed by Stripe Checkout. The storefront stores only the order and payment references needed for fulfillment and operational history.",
      "Admin access is restricted to authenticated operations staff through Supabase Auth and role-controlled database access.",
    ],
  },
  bg: {
    title: "Политика за поверителност",
    paragraphs: [
      "InnoVAherb събира данни за контакт, доставка и свързана с плащането информация, необходима за обработка на поръчки и обслужване на клиенти.",
      "Данните за картата се обработват чрез Stripe Checkout. Магазинът съхранява само референциите за поръчка и плащане, нужни за изпълнение и оперативна история.",
      "Административният достъп е ограничен до удостоверен оперативен екип чрез Supabase Auth и контрол на ролите в базата данни.",
    ],
  },
} as const;

export default async function PrivacyPolicyPage({
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
