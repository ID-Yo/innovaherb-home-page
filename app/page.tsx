import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductCard } from "@/components/storefront/ProductCard";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { Container } from "@/components/ui/Container";
import { getLocale, withLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";
import { mushroomComparison } from "@/lib/storefront-content";
import { absoluteUrl } from "@/lib/site";
import { Locale } from "@/lib/types";

const TRUST_ICONS: Record<string, string> = {
  lab: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  natural: "M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c0 5 2.5 9 6 11M12 3c0 5-2.5 9-6 11",
  bulgaria: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  guarantee:
    "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  vegan: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  fruiting: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
};

const homeContentByLocale: Record<
  Locale,
  {
    metadataTitle: string;
    metadataDescription: string;
    trusted: string;
    title: string;
    subtitle: string;
    shop: string;
    how: string;
    firstPurchase: string;
    firstPurchaseTitle: string;
    firstPurchaseText: string;
    firstPurchaseCta: string;
    imageText: string;
    shopByGoal: string;
    shopByGoalText: string;
    freeShipping: string;
    freeShippingText: string;
    ritual: string;
    ritualText: string;
    bestSeller: string;
    bestSellerText: string;
    offerHeading: string;
    offerText: string;
    offerCards: Array<{ eyebrow: string; title: string; text: string; cta: string; href: string; badge: string }>;
    metrics: Array<{ num: string; sub: string; accent: boolean }>;
    trustPoints: Array<{ icon: string; label: string }>;
    howHeading: string;
    howText: string;
    howSteps: Array<{ step: string; title: string; text: string }>;
    comparisonHeading: string;
    comparisonText: string;
    comparisonGoals: Record<string, string>;
    traitLabels: Record<string, string>;
    comparisonShop: string;
    comparisonBuy: string;
    originEyebrow: string;
    originTitle: string;
    originTextOne: string;
    originTextTwo: string;
    originCta: string;
    reviewsHeading: string;
    aggregateReviewLabel: string;
    verifiedPurchase: string;
    reviews: Array<{ initials: string; name: string; text: string }>;
    newsletterHeading: string;
    newsletterText: string;
    newsletterProof: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    newsletterNote: string;
    faqHeading: string;
    faqText: string;
    faqs: Array<{ question: string; answer: string }>;
  }
> = {
  en: {
    metadataTitle: "Bulgarian Mushroom Extract Sprays | InnoVAherb",
    metadataDescription:
      "Shop Bulgarian mushroom extract sprays for focus, energy, balance, vitality, and immunity. Explore six InnoVAherb formulas with secure checkout.",
    trusted: "Trusted by 2,000+ customers across Europe",
    title: "Bulgarian Mushroom Extract Sprays for Daily Focus, Energy, and Vitality",
    subtitle:
      "Discover premium Bulgarian mushroom extract sprays for focus, energy, balance, immunity, and full-spectrum daily support in a faster, easier oral format.",
    shop: "Shop Our Collection",
    how: "How It Works",
    firstPurchase: "Recommended first purchase",
    firstPurchaseTitle: "Start with the 5-Mushroom Mix",
    firstPurchaseText: "The easiest entry point for shoppers who want one bottle to cover more than one goal.",
    firstPurchaseCta: "Shop the best seller",
    imageText:
      "InnoVAherb mushroom extract sprays are designed for shoppers who want a simpler wellness routine, cleaner daily dosing, and formulas matched to clear goals like mental clarity, natural energy, evening balance, and everyday resilience.",
    shopByGoal: "Shop by Goal",
    shopByGoalText: "Every mushroom has a role. Pick the result you want, or start with the Mix if you want the easiest first order.",
    freeShipping: "Free shipping",
    freeShippingText: "On Bulgaria orders over EUR 50.",
    ritual: "Daily ritual",
    ritualText: "Spray in seconds, no capsules or prep.",
    bestSeller: "Best seller",
    bestSellerText: "Start with the 5-Mushroom Mix if you are unsure.",
    offerHeading: "Choose the Best First Order",
    offerText:
      "Pick the buying path that feels easiest for you: a best-selling all-in-one spray, a two-bottle routine, or a single formula matched to one clear goal.",
    offerCards: [
      {
        eyebrow: "Best first order",
        title: "Start with the 5-Mushroom Mix",
        text: "The easiest starting point for first-time buyers who want one bottle that covers multiple goals.",
        cta: "Shop the Mix",
        href: "/products/mix",
        badge: "Best seller",
      },
      {
        eyebrow: "Free shipping unlock",
        title: "Build a two-bottle routine",
        text: "Most customers pair a daytime spray with a broader evening or all-day support formula to cover more than one goal and qualify for free shipping.",
        cta: "Browse pairings",
        href: "/#products",
        badge: "Most popular",
      },
      {
        eyebrow: "Low-risk trial",
        title: "Test one bottle first",
        text: "Every formula shares the same price, which makes it easy to try one targeted spray before expanding your routine.",
        cta: "Choose by goal",
        href: "/#products",
        badge: "Simple option",
      },
    ],
    metrics: [
      { num: "2,000+", sub: "happy customers", accent: false },
      { num: "€0.67", sub: "per day, per bottle", accent: true },
      { num: "1 day", sub: "shipping from Bulgaria", accent: false },
    ],
    trustPoints: [
      { icon: "lab", label: "Lab Tested" },
      { icon: "natural", label: "100% Natural" },
      { icon: "bulgaria", label: "Made in Bulgaria" },
      { icon: "guarantee", label: "30-Day Money-Back" },
      { icon: "vegan", label: "Vegan Friendly" },
      { icon: "fruiting", label: "Fruiting Body Only" },
    ],
    howHeading: "How It Works",
    howText: "Three simple steps to build a mushroom routine that actually fits modern life.",
    howSteps: [
      { step: "1", title: "Shake", text: "Activate the extract before each use." },
      { step: "2", title: "Spray", text: "Use 3 to 4 sprays under the tongue." },
      { step: "3", title: "Stay consistent", text: "Use daily for 2 to 4 weeks to feel the full routine." },
    ],
    comparisonHeading: "Which Mushroom Is Right for You?",
    comparisonText: "Each formula targets a different goal. Compare them to find your match or start with the 5-Mix to cover more than one area.",
    comparisonGoals: {
      "lions-mane": "Focus & Memory",
      cordyceps: "Energy & Stamina",
      reishi: "Calm & Balance",
      shiitake: "Daily Vitality",
      chaga: "Antioxidants",
      mix: "Full Spectrum",
    },
    traitLabels: {
      focus: "Focus",
      energy: "Energy",
      sleep: "Sleep",
      immunity: "Immunity",
      antioxidant: "Antioxidants",
    },
    comparisonShop: "Shop",
    comparisonBuy: "Buy",
    originEyebrow: "Our Origin",
    originTitle: "From Bulgarian Forests to Your Daily Ritual",
    originTextOne:
      "InnoVAherb was created to turn the quiet strength of medicinal mushrooms into a modern daily habit. We use Bulgarian-sourced ingredients and a premium spray format so customers get a cleaner, more practical route to focus, energy, balance, vitality, and full-spectrum wellness.",
    originTextTwo:
      "The goal is not complexity. It is repeatability. Every bottle is built to be easy to understand, easy to use, and easy to reorder because the routine genuinely fits real life.",
    originCta: "Learn Our Story",
    reviewsHeading: "What Our Customers Say",
    aggregateReviewLabel: "★★★★★ 4.9 average · 800+ verified reviews",
    verifiedPurchase: "Verified Purchase",
    reviews: [
      {
        initials: "MK",
        name: "Maria K., Sofia",
        text: "I've noticed a real improvement in my focus since starting the Lion's Mane spray. It fits perfectly into my morning work routine.",
      },
      {
        initials: "SD",
        name: "Stefan D., Plovdiv",
        text: "Cordyceps gives me a clean energy lift before training. No jitters, just steady drive and better endurance.",
      },
      {
        initials: "EV",
        name: "Elena V., Varna",
        text: "Reishi became part of my evening ritual. I sleep better and feel far more balanced through stressful weeks.",
      },
      {
        initials: "PM",
        name: "Petya M., Varna",
        text: "After 3 weeks I notice a genuine difference in how calm and focused I feel under pressure.",
      },
      {
        initials: "BT",
        name: "Boris T., Burgas",
        text: "The spray format makes it impossible to forget your daily dose. Just spray and go. It is that simple.",
      },
      {
        initials: "AV",
        name: "Aneta V., Sofia",
        text: "I recommended InnoVAherb to my whole office. Three colleagues started their own routines and everyone is happy.",
      },
    ],
    newsletterHeading: "Join the InnoVAherb Community",
    newsletterText:
      "Wellness tips, product drops, and offers for customers who want to build a better routine around natural mushroom support.",
    newsletterProof: "Join 2,000+ customers already on their routine",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Get 10% Off",
    newsletterNote: "No spam. Unsubscribe any time.",
    faqHeading: "Frequently Asked Questions About Our Mushroom Extract Sprays",
    faqText: "Find quick answers about how InnoVAherb sprays work, which formula to start with, and how delivery works in Bulgaria.",
    faqs: [
      {
        question: "What makes InnoVAherb different from capsules or powders?",
        answer:
          "InnoVAherb uses a fast, convenient spray format that is easier to carry, easier to dose, and easier to repeat every day than capsules, teas, or powder blends.",
      },
      {
        question: "Which mushroom spray should I start with?",
        answer:
          "Most first-time customers start with the 5-Mushroom Mix for broader support, then add a more focused formula such as Lion's Mane, Cordyceps, or Reishi based on their main goal.",
      },
      {
        question: "Do you ship across Bulgaria?",
        answer: "Yes. InnoVAherb currently ships within Bulgaria, and orders above EUR 50 qualify for free shipping.",
      },
      {
        question: "How do I use the sprays each day?",
        answer: "Shake the bottle, spray 3 to 4 times under the tongue, hold briefly, and use consistently as part of your daily routine.",
      },
      {
        question: "How much extract is in each spray bottle?",
        answer: "Every InnoVAherb bottle contains 35 ml and is designed for around 30 daily servings when used as directed.",
      },
      {
        question: "Can I combine two sprays in one routine?",
        answer:
          "Yes. Many customers combine one daytime formula with one evening or broader-support formula to match more than one goal without overcomplicating the routine.",
      },
      {
        question: "How quickly do customers notice a difference?",
        answer:
          "Some customers notice the routine benefits within the first days, but the best results usually come after 2 to 4 weeks of consistent daily use.",
      },
      {
        question: "Are the sprays easy to carry and use on the go?",
        answer:
          "Yes. The compact 35 ml format fits easily into a bag, desk drawer, or gym kit, making it easier to stay consistent every day.",
      },
    ],
  },
  bg: {
    metadataTitle: "Български спрейове с гъбени екстракти | InnoVAherb",
    metadataDescription:
      "Поръчайте български спрейове с гъбени екстракти за фокус, енергия, баланс, жизненост и имунитет. Разгледайте шестте формули на InnoVAherb.",
    trusted: "Доверие от над 2 000 клиенти в Европа",
    title: "Български спрейове с гъбени екстракти за ежедневен фокус, енергия и жизненост",
    subtitle:
      "Открийте премиум български спрейове с гъбени екстракти за фокус, енергия, баланс, имунитет и цялостна ежедневна подкрепа в по-бърз и удобен орален формат.",
    shop: "Разгледай колекцията",
    how: "Как работи",
    firstPurchase: "Препоръчителна първа поръчка",
    firstPurchaseTitle: "Започнете с Микс 5 гъби",
    firstPurchaseText: "Най-лесният старт, ако искате една бутилка да покрива повече от една ежедневна цел.",
    firstPurchaseCta: "Към бестселъра",
    imageText:
      "InnoVAherb спрейовете с гъбени екстракти са създадени за хора, които искат по-лесна уелнес рутина, по-чисто ежедневно дозиране и формули, насочени към ясни цели като умствена яснота, естествена енергия, вечерен баланс и ежедневна устойчивост.",
    shopByGoal: "Изберете по цел",
    shopByGoalText: "Всяка гъба има своя роля. Изберете резултата, който търсите, или започнете с Микса, ако искате най-лесната първа поръчка.",
    freeShipping: "Безплатна доставка",
    freeShippingText: "За поръчки в България над 50 EUR.",
    ritual: "Ежедневен ритуал",
    ritualText: "Впръсквате за секунди, без капсули и без подготовка.",
    bestSeller: "Най-продаван",
    bestSellerText: "Започнете с Микс 5 гъби, ако не сте сигурни.",
    offerHeading: "Изберете най-подходящата първа поръчка",
    offerText:
      "Изберете най-лесния път за старт: бестселър с всичко в едно, рутина с две бутилки или една формула, насочена към ясна цел.",
    offerCards: [
      {
        eyebrow: "Най-добър старт",
        title: "Започнете с Микс 5 гъби",
        text: "Най-лесната отправна точка за първа поръчка, ако искате една бутилка да покрива повече от една цел.",
        cta: "Към Микса",
        href: "/products/mix",
        badge: "Бестселър",
      },
      {
        eyebrow: "Достигнете безплатна доставка",
        title: "Изградете рутина с две бутилки",
        text: "Много клиенти комбинират дневен спрей с по-широка или вечерна формула, за да покрият повече от една цел и да вземат безплатна доставка.",
        cta: "Виж комбинации",
        href: "/#products",
        badge: "Най-популярно",
      },
      {
        eyebrow: "Лесен тест",
        title: "Пробвайте първо една бутилка",
        text: "Всички формули са на една и съща цена, така че лесно можете да тествате един целеви спрей, преди да разширите рутината си.",
        cta: "Избери по цел",
        href: "/#products",
        badge: "Лесен избор",
      },
    ],
    metrics: [
      { num: "2 000+", sub: "доволни клиенти", accent: false },
      { num: "€0.67", sub: "на ден, за бутилка", accent: true },
      { num: "1 ден", sub: "доставка от България", accent: false },
    ],
    trustPoints: [
      { icon: "lab", label: "Лабораторно тествани" },
      { icon: "natural", label: "100% натурални" },
      { icon: "bulgaria", label: "Произведени в България" },
      { icon: "guarantee", label: "30 дни гаранция" },
      { icon: "vegan", label: "Подходящи за вегани" },
      { icon: "fruiting", label: "Само плодни тела" },
    ],
    howHeading: "Как работи",
    howText: "Три лесни стъпки за гъбена рутина, която наистина пасва на модерния начин на живот.",
    howSteps: [
      { step: "1", title: "Разклатете", text: "Активирайте екстракта преди всяка употреба." },
      { step: "2", title: "Впръскайте", text: "Използвайте 3 до 4 впръсквания под езика." },
      { step: "3", title: "Бъдете постоянни", text: "Използвайте всеки ден 2 до 4 седмици, за да усетите пълната рутина." },
    ],
    comparisonHeading: "Коя гъба е най-подходяща за вас?",
    comparisonText: "Всяка формула е насочена към различна цел. Сравнете ги, за да откриете своята, или започнете с Микс 5 гъби за по-широко покритие.",
    comparisonGoals: {
      "lions-mane": "Фокус и памет",
      cordyceps: "Енергия и издръжливост",
      reishi: "Спокойствие и баланс",
      shiitake: "Ежедневна жизненост",
      chaga: "Антиоксидантна защита",
      mix: "Пълна подкрепа",
    },
    traitLabels: {
      focus: "Фокус",
      energy: "Енергия",
      sleep: "Сън",
      immunity: "Имунитет",
      antioxidant: "Антиоксиданти",
    },
    comparisonShop: "Виж",
    comparisonBuy: "Купи",
    originEyebrow: "Нашият произход",
    originTitle: "От българските гори до вашия ежедневен ритуал",
    originTextOne:
      "InnoVAherb е създаден, за да превърне тихата сила на лечебните гъби в модерен ежедневен навик. Използваме съставки с произход от България и премиум спрей формат, за да получават клиентите по-чист и практичен път към фокус, енергия, баланс, жизненост и цялостна подкрепа.",
    originTextTwo:
      "Целта не е сложност, а постоянство. Всяка бутилка е създадена да бъде лесна за разбиране, лесна за употреба и лесна за повторна поръчка, защото рутината наистина пасва на реалния живот.",
    originCta: "Научете нашата история",
    reviewsHeading: "Какво споделят нашите клиенти",
    aggregateReviewLabel: "★★★★★ Средна оценка 4.9 · 800+ потвърдени отзива",
    verifiedPurchase: "Потвърдена покупка",
    reviews: [
      {
        initials: "MK",
        name: "Maria K., Sofia",
        text: "Забелязах истинска разлика във фокуса си, откакто започнах със спрея Lion's Mane. Пасва идеално на сутрешната ми работна рутина.",
      },
      {
        initials: "SD",
        name: "Stefan D., Plovdiv",
        text: "Cordyceps ми дава чист прилив на енергия преди тренировка. Няма треперене, само стабилен тонус и по-добра издръжливост.",
      },
      {
        initials: "EV",
        name: "Elena V., Varna",
        text: "Reishi стана част от вечерния ми ритуал. Спя по-добре и се чувствам много по-балансирана през напрегнати седмици.",
      },
      {
        initials: "PM",
        name: "Petya M., Varna",
        text: "След три седмици усещам реална разлика в това колко спокойна и концентрирана съм под напрежение.",
      },
      {
        initials: "BT",
        name: "Boris T., Burgas",
        text: "Спрей форматът прави почти невъзможно да пропуснеш дневната доза. Просто впръскваш и продължаваш. Толкова е лесно.",
      },
      {
        initials: "AV",
        name: "Aneta V., Sofia",
        text: "Препоръчах InnoVAherb на целия си офис. Трима колеги вече започнаха собствена рутина и всички са доволни.",
      },
    ],
    newsletterHeading: "Присъединете се към общността на InnoVAherb",
    newsletterText:
      "Съвети за уелнес, нови продукти и специални оферти за хора, които искат по-добра рутина с натурална гъбена подкрепа.",
    newsletterProof: "Присъединете се към над 2 000 клиенти, които вече следват своята рутина",
    newsletterPlaceholder: "Въведете вашия имейл",
    newsletterButton: "Вземете 10% отстъпка",
    newsletterNote: "Без спам. Можете да се отпишете по всяко време.",
    faqHeading: "Често задавани въпроси за нашите спрейове с гъбени екстракти",
    faqText: "Намерете бързи отговори за това как работят спрейовете на InnoVAherb, с коя формула да започнете и как работи доставката в България.",
    faqs: [
      {
        question: "С какво InnoVAherb е различен от капсули или прахове?",
        answer:
          "InnoVAherb използва бърз и удобен спрей формат, който е по-лесен за носене, дозиране и ежедневно повтаряне в сравнение с капсули, чайове или прахообразни смеси.",
      },
      {
        question: "С кой спрей е най-добре да започна?",
        answer:
          "Много клиенти започват с Микс 5 гъби за по-широка подкрепа, след което добавят по-насочена формула като Лъвска грива, Кордицепс или Рейши според основната си цел.",
      },
      {
        question: "Доставяте ли в цяла България?",
        answer: "Да. InnoVAherb доставя в рамките на България, а поръчки над 50 EUR получават безплатна доставка.",
      },
      {
        question: "Как се използват спрейовете всеки ден?",
        answer: "Разклатете бутилката, впръскайте 3 до 4 пъти под езика, задръжте за кратко и използвайте постоянно като част от ежедневната си рутина.",
      },
      {
        question: "Колко екстракт има във всяка бутилка?",
        answer: "Всяка бутилка InnoVAherb съдържа 35 мл и е създадена за около 30 дневни приема при правилна употреба.",
      },
      {
        question: "Мога ли да комбинирам два спрея в една рутина?",
        answer:
          "Да. Много клиенти комбинират дневна формула с вечерна или по-широка подкрепа, за да покрият повече от една цел без да усложняват рутината си.",
      },
      {
        question: "Колко бързо клиентите усещат разлика?",
        answer:
          "Някои клиенти усещат ползите още през първите дни, но най-добрите резултати обикновено идват след 2 до 4 седмици постоянна ежедневна употреба.",
      },
      {
        question: "Лесни ли са спрейовете за носене и употреба в движение?",
        answer:
          "Да. Компактният формат от 35 мл се побира лесно в чанта, чекмедже или спортен сак, което улеснява постоянството всеки ден.",
      },
    ],
  },
};

export const metadata = buildMetadata({
  title: homeContentByLocale.en.metadataTitle,
  description: homeContentByLocale.en.metadataDescription,
  path: "/",
});

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = getLocale(await searchParams);
  const t = homeContentByLocale[locale];
  const comparisonCards = mushroomComparison.map((item) => {
    const product = products.find((entry) => entry.slug === item.slug);
    return {
      ...item,
      name: product?.localized[locale].name ?? item.name,
      goal: t.comparisonGoals[item.slug] ?? item.goal,
    };
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: "InnoVAherb",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"),
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/")}#products`,
        name: locale === "bg" ? "Спрейове с гъбени екстракти InnoVAherb" : "InnoVAherb Mushroom Extract Sprays",
        itemListElement: comparisonCards.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/products/${product.slug}`),
          name: product.name,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/")}#faq`,
        mainEntity: t.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <section className="grain relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-warm-50 to-warm-100" />
          <div className="absolute right-0 top-0 hidden h-[600px] w-[600px] translate-x-1/4 -translate-y-1/3 rounded-full bg-brand-100/30 blur-3xl sm:block" />
          <div className="absolute bottom-0 left-0 hidden h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-earth-100/20 blur-3xl sm:block" />

          <Container className="grid gap-6 pb-4 pt-6 sm:pb-5 sm:pt-7 lg:-mt-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-6 lg:pt-5">
            <div>
              <div className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-warm-200/60 bg-white/70 px-3.5 py-1 shadow-elevated sm:backdrop-blur-sm">
                <span className="stars text-sm">★★★★★</span>
                <span className="text-sm font-medium text-grey-600">{t.trusted}</span>
              </div>

              <h1 className="animate-fade-in-up delay-100 mb-4 font-display text-3xl font-bold tracking-heading text-grey-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                {t.title}
              </h1>

              <p className="animate-fade-in-up delay-200 mb-6 max-w-xl text-base leading-body text-grey-600 sm:text-lg">
                {t.subtitle}
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3">
                <Link href={withLocale("/#products", locale)} className="btn-press inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-colors duration-200 hover:bg-brand-700">
                  {t.shop}
                </Link>
                <Link href={withLocale("/#how", locale)} className="btn-press inline-flex items-center gap-2 rounded-xl border border-warm-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-grey-800 transition-colors duration-200 hover:bg-white">
                  {t.how}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.freeShipping}</p>
                  <p className="mt-2 text-sm text-grey-600">{t.freeShippingText}</p>
                </div>
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.ritual}</p>
                  <p className="mt-2 text-sm text-grey-600">{t.ritualText}</p>
                </div>
                <div className="rounded-xl border border-white/60 bg-white/70 p-4 shadow-elevated">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.bestSeller}</p>
                  <p className="mt-2 text-sm text-grey-600">{t.bestSellerText}</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-brand-100/80 bg-white/75 p-4 shadow-elevated sm:backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{t.firstPurchase}</p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-grey-900">{t.firstPurchaseTitle}</p>
                    <p className="mt-1 text-sm text-grey-600">{t.firstPurchaseText}</p>
                  </div>
                  <Link href={withLocale("/products/mix", locale)} className="btn-press inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800">
                    {t.firstPurchaseCta}
                  </Link>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-floating lg:rounded-3xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 to-transparent" />
                <Image
                  src="/brand_assets/Group_front.webp"
                  alt="InnoVAherb Mushroom Extract Spray Collection"
                  width={1437}
                  height={660}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={72}
                  priority
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-body text-grey-600">{t.imageText}</p>
            </div>
          </Container>
        </section>

        <section id="products" className="py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.shopByGoal}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">{t.shopByGoalText}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.offerHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-base text-grey-500">{t.offerText}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
              {t.offerCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-xl border p-5 shadow-elevated sm:rounded-2xl sm:p-6 ${index === 0 ? "border-brand-200 bg-brand-50/70" : "border-warm-200/70 bg-warm-50"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600">{card.eyebrow}</p>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${index === 0 ? "bg-brand-700 text-white" : "bg-white text-grey-600"}`}>
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-grey-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-body text-grey-600">{card.text}</p>
                  <Link href={withLocale(card.href, locale)} className={`btn-press mt-5 inline-flex rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${index === 0 ? "bg-brand-700 text-white hover:bg-brand-800" : "border border-warm-200 bg-white text-grey-800 hover:bg-warm-50"}`}>
                    {card.cta}
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-warm-100 bg-white py-8 sm:py-12">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-warm-200/70">
              {t.metrics.map(({ num, sub, accent }) => (
                <div key={sub} className="px-4 text-center sm:px-8 lg:px-12">
                  <p className={`font-display text-3xl font-bold leading-none sm:text-4xl lg:text-5xl ${accent ? "text-brand-600" : "text-grey-900"}`}>
                    {num}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-grey-400 sm:text-xs">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-warm-200/50 bg-warm-50 py-5 sm:py-6">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-14">
              {t.trustPoints.map((point) => (
                <div key={point.label} className="flex items-center gap-2 text-grey-600">
                  <svg className="h-4 w-4 flex-shrink-0 text-brand-600 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={TRUST_ICONS[point.icon] ?? TRUST_ICONS.fruiting} />
                  </svg>
                  <span className="whitespace-nowrap text-xs font-medium sm:text-sm">{point.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="how" className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.howHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">{t.howText}</p>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              {t.howSteps.map((item, index) => (
                <div key={item.title} className="text-center">
                  <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 sm:mb-4 sm:h-16 sm:w-16 ${index === 1 ? "border-earth-200 bg-earth-50" : "border-brand-200 bg-brand-50"}`}>
                    <span className={`font-display text-xl font-bold sm:text-2xl ${index === 1 ? "text-earth-600" : "text-brand-600"}`}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-grey-900 sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-grey-500 sm:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.comparisonHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-base text-grey-500">{t.comparisonText}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:hidden">
              {comparisonCards.map((m) => (
                <Link key={m.slug} href={withLocale(`/products/${m.slug}`, locale)} className="group rounded-xl border border-warm-200/70 bg-warm-50 p-3.5 shadow-elevated transition-colors hover:border-brand-200 hover:bg-brand-50/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600">{m.goal}</p>
                  <h3 className="mt-1 font-display text-base font-bold text-grey-900">{m.name}</h3>
                  <div className="mt-3 space-y-1.5">
                    {(["focus", "energy", "sleep", "immunity", "antioxidant"] as const).map((trait) => (
                      <div key={trait} className="flex items-center justify-between gap-2">
                        <span className="w-20 shrink-0 text-[10px] font-medium text-grey-500">{t.traitLabels[trait]}</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`inline-block h-2 w-2 rounded-full ${i < m[trait] ? "bg-brand-500" : "bg-warm-200"}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition-[gap] group-hover:gap-1.5">
                    {t.comparisonShop}
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-28 pb-4 text-left text-xs font-semibold uppercase tracking-widest text-grey-400" />
                    {comparisonCards.map((m) => (
                      <th key={m.slug} className="pb-4 text-center">
                        <Link href={withLocale(`/products/${m.slug}`, locale)} className="group inline-block">
                          <p className="font-display text-sm font-bold text-grey-900 transition-colors group-hover:text-brand-600">{m.name}</p>
                          <p className="mt-0.5 text-[10px] font-medium text-grey-400">{m.goal}</p>
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(["focus", "energy", "sleep", "immunity", "antioxidant"] as const).map((trait, traitIdx) => (
                    <tr key={trait} className={traitIdx % 2 === 0 ? "bg-warm-50/70" : "bg-white"}>
                      <td className="rounded-l-xl py-3 pl-4 text-xs font-semibold text-grey-600">{t.traitLabels[trait]}</td>
                      {comparisonCards.map((m) => (
                        <td key={m.slug} className="py-3 text-center last:rounded-r-xl">
                          <div className="inline-flex gap-0.5">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span key={i} className={`inline-block h-2.5 w-2.5 rounded-full ${i < m[trait] ? "bg-brand-500" : "bg-warm-200"}`} />
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="pt-5 text-xs font-semibold text-grey-400">{t.comparisonShop} →</td>
                    {comparisonCards.map((m) => (
                      <td key={m.slug} className="pt-5 text-center">
                        <Link href={withLocale(`/products/${m.slug}`, locale)} className="inline-flex rounded-lg border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100">
                          {t.comparisonBuy}
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <section className="grain relative overflow-hidden py-6 sm:py-8">
          <div className="absolute inset-0 bg-gradient-to-br from-grey-900 via-brand-800/90 to-grey-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-grey-900/40" />
          <div className="absolute right-0 top-0 hidden h-[500px] w-[500px] rounded-full bg-brand-600/15 blur-3xl sm:block" />
          <div className="absolute bottom-0 left-0 hidden h-96 w-96 rounded-full bg-earth-500/15 blur-3xl sm:block" />

          <Container className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand-400 sm:text-sm">
                {t.originEyebrow}
              </span>
              <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl lg:text-4xl">
                {t.originTitle}
              </h2>
              <p className="mt-4 text-sm leading-body text-warm-200 sm:text-base">{t.originTextOne}</p>
              <p className="mt-4 text-sm leading-body text-warm-200 sm:text-base">{t.originTextTwo}</p>
              <Link href={withLocale("/about", locale)} className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition-colors duration-200 hover:bg-brand-500">
                {t.originCta}
              </Link>
            </div>
            <div className="hidden items-center justify-center gap-3 lg:flex">
              <div className="h-44 w-32 rotate-[-3deg] overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Cordycepts_front.webp" alt="Cordyceps mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="128px" quality={72} className="h-full w-full object-cover" />
              </div>
              <div className="-mt-6 h-48 w-36 overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Shiitake_front.webp" alt="Shiitake mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="144px" quality={72} className="h-full w-full object-cover" />
              </div>
              <div className="h-44 w-32 rotate-[3deg] overflow-hidden rounded-2xl border border-white/10 shadow-floating">
                <Image src="/brand_assets/Chaga_front.webp" alt="Chaga mushroom extract spray bottle by InnoVAherb" width={1000} height={1000} sizes="128px" quality={72} className="h-full w-full object-cover" />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-warm-50 py-5 sm:py-6">
          <Container>
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.reviewsHeading}
              </h2>
              <p className="mt-2 text-center text-sm text-grey-400">{t.aggregateReviewLabel}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
              {t.reviews.map((review, index) => (
                <div key={review.name} className="rounded-xl bg-white p-5 shadow-elevated sm:rounded-2xl sm:p-6">
                  <div className="stars mb-2 text-base">★★★★★</div>
                  <p className="mb-4 text-sm italic leading-body text-grey-700">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index === 1 ? "bg-earth-100 text-earth-700" : "bg-brand-100 text-brand-700"}`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-grey-900">{review.name}</p>
                      <p className="text-xs text-grey-500">{t.verifiedPurchase}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="grain relative overflow-hidden py-5 sm:py-6">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800" />
          <div className="absolute right-0 top-0 hidden h-96 w-96 rounded-full bg-brand-400/20 blur-3xl sm:block" />

          <Container className="relative max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-heading text-white sm:text-3xl">
              {t.newsletterHeading}
            </h2>
            <p className="mb-6 mt-3 text-sm text-brand-100 sm:text-base">{t.newsletterText}</p>
            <p className="mb-4 text-center text-xs font-medium text-white/70">{t.newsletterProof}</p>
            <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder={t.newsletterPlaceholder}
                className="flex-1 rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button type="submit" className="btn-press rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition-colors duration-200 hover:bg-warm-50">
                {t.newsletterButton}
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-white/40">{t.newsletterNote}</p>
          </Container>
        </section>

        <section className="bg-white py-5 sm:py-6">
          <Container className="max-w-4xl">
            <div className="mb-4 text-center sm:mb-5">
              <h2 className="font-display text-2xl font-bold tracking-heading text-grey-900 sm:text-3xl lg:text-4xl">
                {t.faqHeading}
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-base text-grey-500">{t.faqText}</p>
            </div>

            <div className="space-y-3">
              {t.faqs.map((item, index) => (
                <details key={item.question} className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="pr-4 font-semibold text-grey-900">{item.question}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{item.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
