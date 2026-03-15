import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Shipping and Returns | InnoVAherb",
  description:
    "Review Bulgaria shipping, order support, and return guidance for the InnoVAherb storefront.",
  path: "/shipping-returns",
});

const content = {
  en: {
    eyebrow: "Support policy",
    title: "Shipping and returns",
    shippingTitle: "Shipping",
    shippingText: "We currently deliver across Bulgaria. Orders over EUR 50 receive free shipping, while orders below that threshold show a flat delivery fee at checkout before payment.",
    returnsTitle: "Returns",
    returnsText: "If you need help with a return or refund, contact our support team and we will guide you through the next steps as quickly as possible.",
  },
  bg: {
    eyebrow: "Политика за поддръжка",
    title: "Доставка и връщане",
    shippingTitle: "Доставка",
    shippingText: "В момента доставяме в рамките на България. Поръчките над 50 EUR получават безплатна доставка, а за поръчки под тази стойност таксата се показва при checkout преди плащане.",
    returnsTitle: "Връщане",
    returnsText: "Ако имате нужда от съдействие за връщане или възстановяване на сума, свържете се с нашия екип и ще ви насочим през следващите стъпки възможно най-бързо.",
  },
} as const;

export default async function ShippingReturnsPage({
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
