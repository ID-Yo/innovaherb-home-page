import { SiteFooter } from "@/components/storefront/SiteFooter";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact InnoVAherb | Support and Order Help",
  description:
    "Contact InnoVAherb for product questions, shipping support, wholesale inquiries, and order assistance in Bulgaria.",
  path: "/contact",
});

const content = {
  en: {
    eyebrow: "Support",
    title: "Need help with a product or order?",
    body: "Reach out for product questions, wholesale requests, or order support. We currently deliver across Bulgaria and are happy to help with shipping, product selection, and after-purchase care.",
    email: "Email",
    phone: "Phone",
    faqTitle: "FAQ snapshot",
    blocks: [
      { title: "Shipping coverage", text: "We currently ship orders across Bulgaria." },
      { title: "Payments", text: "Secure card payments are handled via Stripe Checkout." },
      { title: "Returns", text: "See the dedicated shipping and returns page for delivery and support details." },
    ],
  },
  bg: {
    eyebrow: "Поддръжка",
    title: "Имате нужда от помощ за продукт или поръчка?",
    body: "Свържете се с нас за въпроси относно продуктите, заявки на едро или съдействие по поръчка. В момента доставяме в цяла България и с удоволствие помагаме при доставка, избор на продукт и следпокупкова грижа.",
    email: "Имейл",
    phone: "Телефон",
    faqTitle: "Бързи отговори",
    blocks: [
      { title: "Покритие на доставката", text: "В момента изпращаме поръчки в рамките на цяла България." },
      { title: "Плащания", text: "Сигурните картови плащания се обработват чрез Stripe Checkout." },
      { title: "Връщане", text: "Вижте страницата за доставка и връщане за повече детайли относно доставката и поддръжката." },
    ],
  },
} as const;

export default async function ContactPage({
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
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-[2rem] border border-warm-200 bg-white p-8 shadow-elevated">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl text-grey-900">{t.title}</h1>
            <p className="mt-6 text-base leading-8 text-grey-600">{t.body}</p>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-warm-50 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.email}</dt>
                <dd className="mt-2 text-grey-900">hello@innovaherb.com</dd>
              </div>
              <div className="rounded-[1.5rem] bg-warm-50 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{t.phone}</dt>
                <dd className="mt-2 text-grey-900">+359 2 987 6543</dd>
              </div>
            </dl>
          </section>
          <section className="rounded-[2rem] border border-warm-200 bg-white p-8 shadow-elevated">
            <h2 className="font-display text-3xl text-grey-900">{t.faqTitle}</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-grey-600">
              {t.blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="font-semibold text-grey-900">{block.title}</h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
