import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/storefront/SiteFooter";
import { ProductPurchasePanel, RecommendedPairCard } from "@/components/storefront/ProductPurchasePanel";
import { SiteHeader } from "@/components/storefront/SiteHeader";
import { buildMetadata } from "@/lib/metadata";
import { getLocale, withLocale } from "@/lib/i18n";
import { getProductBySlug, products } from "@/lib/products";
import { productSalesContent } from "@/lib/storefront-content";
import { absoluteUrl } from "@/lib/site";
import { Locale, ProductSlug } from "@/lib/types";

const extraFaqs = {
  en: [
    {
      question: "How much liquid is in one bottle?",
      answer: "Each InnoVAherb spray contains 35 ml and is designed for a simple daily routine with around 30 servings.",
    },
    {
      question: "Is the spray easy to carry?",
      answer: "Yes. The 35 ml bottle fits easily into a bag, desk drawer, or gym kit, so your routine stays practical.",
    },
    {
      question: "What is the best pairing for this spray?",
      answer: "Many customers combine one focused daytime spray with a broader or evening-support formula to cover more than one daily goal.",
    },
  ],
  bg: [
    {
      question: "Колко течност има в една бутилка?",
      answer: "Всеки спрей InnoVAherb съдържа 35 мл и е създаден за лесна ежедневна рутина с около 30 приема.",
    },
    {
      question: "Лесно ли се носи със себе си?",
      answer: "Да. Бутилката от 35 мл се побира лесно в чанта, бюро или спортен сак, за да е удобна навсякъде.",
    },
    {
      question: "С кой друг спрей се комбинира най-добре?",
      answer: "Много клиенти комбинират една дневна формула с по-широка или вечерна подкрепа, за да покрият повече от една ежедневна цел.",
    },
  ],
} as const;

const bgProductOverrides: Record<
  ProductSlug,
  {
    shortPitch: string;
    trustBadges: string[];
    usageTitle: string;
    conversionNote: string;
    bundleTitle: string;
    bundleText: string;
    reviews: string[];
    faq: Array<{ question: string; answer: string }>;
  }
> = {
  "lions-mane": {
    shortPitch: "Премиум спрей с Лъвска грива, създаден за фокус, памет и по-ясна концентрация през работния ден в бърз сублингвален формат.",
    trustBadges: ["Лабораторно тестван", "Без капсули", "Бърз орален спрей", "30 дни гаранция"],
    usageTitle: "Най-подходящ за сутрини с нужда от фокус, учене и умствено натоварени дни.",
    conversionNote: "Много клиенти комбинират Лъвска грива с Кордицепс или Микс, за да съчетаят по-остър фокус с по-широка дневна подкрепа.",
    bundleTitle: "Стартова комбинация Фокус + Енергия",
    bundleText: "Комбинирайте Лъвска грива с Кордицепс за по-остро начало на деня и по-силен тонус до вечерта.",
    reviews: [
      "Концентрацията ми е осезаемо по-добра, когато използвам Лъвска грива постоянно преди работа.",
      "Спрей форматът ми помага да съм много по-постоянен, отколкото някога бях с капсули.",
      "Използвам го преди блокове за дълбока работа и ми помага да остана фокусиран значително по-дълго.",
      "След три седмици ученето ми е осезаемо по-продуктивно. Задържам внимание много по-дълго без умствена умора.",
      "След месец сутрешната яснота е истински различна и вече е задължителна част от рутината ми.",
      "Използвам го преди важни презентации в работата. Умът ми е по-остър и се чувствам много по-уверен.",
    ],
    faq: [
      {
        question: "Кога е най-добре да използвам Лъвска грива?",
        answer: "Повечето клиенти я използват сутрин или преди работа, учене или задача, която изисква по-добра концентрация.",
      },
      {
        question: "Колко време стига една бутилка?",
        answer: "При 3 до 4 впръсквания дневно една бутилка стига за около 30 дневни приема.",
      },
      {
        question: "Мога ли да комбинирам Лъвска грива с други спрейове?",
        answer: "Да. Много клиенти я комбинират с Кордицепс за сутрините или с Микс за по-широка ежедневна подкрепа.",
      },
      {
        question: "Подходяща ли е при прием на лекарства?",
        answer: "Гъбените ни екстракти обикновено се понасят добре, но ако приемате лекарства по лекарско предписание или имате здравословно състояние, консултирайте се със специалист преди употреба.",
      },
      {
        question: "От плодното тяло ли е екстрактът, или от мицел?",
        answer: "Използваме само 100% екстракт от плодното тяло. Нашата Лъвска грива е 10:1 концентрат без мицелна биомаса и без зърнени пълнители.",
      },
    ],
  },
  cordyceps: {
    shortPitch: "Кордицепс дава чиста ежедневна енергия и подкрепа за издръжливост в компактен спрей, удобен за тренировки и натоварени дни.",
    trustBadges: ["Лабораторно тестван", "Естествена енергия", "Бърз орален спрей", "30 дни гаранция"],
    usageTitle: "Най-подходящ за сутрини, активни дни и подкрепа за енергия преди тренировка.",
    conversionNote: "Кордицепс се комбинира отлично с Лъвска грива или Микс, когато искате чиста енергия и по-широка дневна подкрепа в една рутина.",
    bundleTitle: "Комбинация Енергия + Фокус",
    bundleText: "Съчетавайте Кордицепс с Лъвска грива за по-силна дневна рутина още от първата поръчка.",
    reviews: [
      "Използвам го преди тренировки и получавам стабилна енергия без кофеинов срив.",
      "Кордицепс се превърна в основата ми в натоварени работни дни.",
      "Харесва ми колко практичен е форматът. Една бутилка в спортния сак и съм готов.",
      "Замених предтренировъчната си добавка с Кордицепс. Издръжливостта ми се подобри и няма срив след това.",
      "Част е от сутрешната ми рутина преди дълги преходи в планината. Усещам реална разлика в устойчивото темпо.",
      "Като триатлонист винаги търся чиста подкрепа за представянето. Кордицепс пасва идеално и спреят е изключително удобен.",
    ],
    faq: [
      {
        question: "Кордицепс стимулант ли е?",
        answer: "Не. Позициониран е като натурална подкрепа за тонус и издръжливост, а не като тежък стимулант.",
      },
      {
        question: "Кога е най-добре да го приемам?",
        answer: "За повечето клиенти работи най-добре сутрин или 20 до 30 минути преди активност.",
      },
      {
        question: "Мога ли да го използвам всеки ден?",
        answer: "Да. Създаден е за лесна ежедневна употреба като част от постоянна рутина.",
      },
      {
        question: "Подходящ ли е при прием на лекарства?",
        answer: "Гъбените ни екстракти обикновено се понасят добре, но ако приемате лекарства по лекарско предписание или имате здравословно състояние, консултирайте се със специалист преди употреба.",
      },
      {
        question: "Ще се чувствам ли превъзбуден?",
        answer: "Кордицепс не е стимулант. Подпомага естественото производство на енергия без кофеин и синтетични съединения, затова повечето клиенти го описват като чист и равномерен тонус.",
      },
    ],
  },
  reishi: {
    shortPitch: "Рейши е създаден за вечерен баланс, по-спокойна рутина и по-плавно възстановяване, когато напрежението се натрупва.",
    trustBadges: ["Лабораторно тестван", "Вечерна рутина", "Бърз орален спрей", "30 дни гаранция"],
    usageTitle: "Най-подходящ за късен следобед, вечерни ритуали и дни, насочени към възстановяване.",
    conversionNote: "Рейши естествено се комбинира с дневен спрей, когато искате по-спокойни вечери без да променяте останалата част от рутината си.",
    bundleTitle: "Комбинация Ден + Нощ",
    bundleText: "Комбинирайте Рейши с Лъвска грива за фокус през деня и по-спокойно възстановяване вечер.",
    reviews: [
      "Вечерите ми са по-спокойни, а качеството на съня ми се подобри, откакто направих Рейши част от рутината си.",
      "Помага ми много по-лесно да изляза от работен режим в края на деня.",
      "Няколко впръсквания преди лягане се превърнаха в една от най-лесните полезни промени в рутината ми.",
      "Започнах Рейши в много напрегнат период на работа. Разликата в това как се справям със стреса е огромна.",
      "С натоварена работа Рейши стана вечерната ми опора. Събуждам се истински отпочинал.",
      "Подобрението в качеството на съня ми след постоянна употреба на Рейши е значително. Това е най-добрият формат, който съм пробвала.",
    ],
    faq: [
      {
        question: "Кога е най-добре да използвам Рейши?",
        answer: "Повечето клиенти го предпочитат в късния следобед или вечер като част от по-спокойна рутина.",
      },
      {
        question: "Подходящ ли е за дългосрочна ежедневна употреба?",
        answer: "Да. Създаден е като продукт за постоянна ежедневна подкрепа, а не за случайна употреба.",
      },
      {
        question: "Мога ли да го комбинирам с дневен спрей?",
        answer: "Да. Рейши се комбинира особено добре с Лъвска грива или Кордицепс за рутина от деня до вечерта.",
      },
      {
        question: "Подходящ ли е при прием на лекарства?",
        answer: "Гъбените ни екстракти обикновено се понасят добре, но ако приемате лекарства по лекарско предписание или имате здравословно състояние, консултирайте се със специалист преди употреба.",
      },
      {
        question: "Мога ли да приемам Рейши всеки ден дългосрочно?",
        answer: "Да. Рейши се използва като ежедневен тоник от векове. Нашият екстракт 10:1 е създаден за постоянна ежедневна употреба и работи най-добре вечер като част от ритуала ви за отпускане.",
      },
    ],
  },
  shiitake: {
    shortPitch: "Шийтаке подпомага ежедневната жизненост и е практично, безпроблемно допълнение към постоянна уелнес рутина.",
    trustBadges: ["Лабораторно тестван", "Ежедневна жизненост", "Бърз орален спрей", "30 дни гаранция"],
    usageTitle: "Най-подходящ за ежедневна подкрепа по всяко време на деня.",
    conversionNote: "Шийтаке е надежден спрей за ежедневна подкрепа, който клиентите често комбинират с Чага или Микс за по-широка рутина.",
    bundleTitle: "Комбинация Жизненост + Устойчивост",
    bundleText: "Комбинирайте Шийтаке с Чага за проста ежедневна рутина, която е лесна за повтаряне.",
    reviews: [
      "Шийтаке ми действа като надеждна ежедневна подкрепа, която е лесно да използвам постоянно.",
      "Исках една формула за ежедневна употреба и това пасна идеално на целта ми.",
      "Спреят прави навика много по-лесен от добавъчните режими с много продукти.",
      "Тази зима почти не боледувах. Взимам Шийтаке постоянно и мисля, че направи реална разлика.",
      "Нивата ми на енергия през деня са по-равномерни, откакто започнах Шийтаке. Ефектът е фин, но постоянен и продължавам да поръчвам отново.",
      "Фактът, че е екстракт от плодното тяло с обявено съдържание на бета-глюкани, е прозрачността, която ме накара да се доверя на марката веднага.",
    ],
    faq: [
      {
        question: "За кого е най-подходящ Шийтаке?",
        answer: "Най-подходящ е за клиенти, които искат една лесна формула за ежедневна подкрепа без твърде тясно приложение.",
      },
      {
        question: "Мога ли да го комбинирам с други продукти?",
        answer: "Да. Много клиенти го комбинират с Лъвска грива, Чага или Микс.",
      },
      {
        question: "Подходящ ли е за начинаещи?",
        answer: "Да. Това е един от най-лесните продукти в серията за разбиране и постоянна употреба.",
      },
      {
        question: "Подходящ ли е при прием на лекарства?",
        answer: "Гъбените ни екстракти обикновено се понасят добре, но ако приемате лекарства по лекарско предписание или имате здравословно състояние, консултирайте се със специалист преди употреба.",
      },
      {
        question: "Колко бета-глюкани съдържа Шийтаке и защо е важно?",
        answer: "Нашият Шийтаке съдържа минимум 25% бета-глюкани, които са ключовите активни съединения за подкрепа на имунния отговор. Това е основен маркер за качеството на гъбените екстракти.",
      },
    ],
  },
  chaga: {
    shortPitch: "Чага е насочена към ежедневна антиоксидантна подкрепа и по-устойчива уелнес рутина с лесна сутрешна употреба.",
    trustBadges: ["Лабораторно тестван", "Антиоксидантна подкрепа", "Бърз орален спрей", "30 дни гаранция"],
    usageTitle: "Най-подходящ за сутрешни рутини, насочени към устойчивост и ежедневна подкрепа.",
    conversionNote: "Чага е силен избор, когато искате антиоксидантна подкрепа и лесен продукт за включване в по-широка ежедневна рутина.",
    bundleTitle: "Комбинация за устойчивост",
    bundleText: "Комбинирайте Чага с Шийтаке за по-широка и стабилна рутина, изградена около ежедневна подкрепа.",
    reviews: [
      "Чага се усеща като силна опора в сутрешната ми уелнес рутина.",
      "Харесва ми удобният формат и стабилното усещане, което продуктът дава.",
      "Лесно е да останеш постоянен, когато приемът отнема секунди.",
      "След няколко месеца ежедневна Чага наистина се чувствам по-устойчива. И кожата ми изглежда по-добре, което беше приятен бонус.",
      "Като човек, който мисли за дълголетие, Чага беше естествено допълнение към рутината ми. Спрей форматът прави постоянството без усилие.",
      "Тъмният горски вкус е уникален и всъщност ми харесва. Ползите след два месеца ежедневна употреба говорят сами за себе си.",
    ],
    faq: [
      {
        question: "Кога е най-добре да приемам Чага?",
        answer: "Сутрешната употреба е най-често срещаният избор, особено като част от постоянна рутина.",
      },
      {
        question: "Какъв тип клиенти избират Чага?",
        answer: "Най-често това са хора, които търсят антиоксидантно богата и насочена към устойчивост подкрепа.",
      },
      {
        question: "Мога ли да я комбинирам с други спрейове?",
        answer: "Да. Чага се съчетава добре с Шийтаке или с Микс 5 гъби.",
      },
      {
        question: "Подходяща ли е при прием на лекарства?",
        answer: "Гъбените ни екстракти обикновено се понасят добре, но ако приемате лекарства по лекарско предписание или имате здравословно състояние, консултирайте се със специалист преди употреба.",
      },
      {
        question: "Чувал съм, че Чага е с високо съдържание на оксалати. Трябва ли да се притеснявам?",
        answer: "Нашият процес на екстракция с гореща вода значително намалява оксалатите спрямо суровата Чага. Ако имате анамнеза за бъбречни камъни или чувствителност към оксалати, консултирайте се с лекар преди употреба.",
      },
    ],
  },
  mix: {
    shortPitch: "Микс 5 гъби е най-лесният вариант всичко в едно за хора, които искат широкоспектърна подкрепа без да избират само една роля.",
    trustBadges: ["Лабораторно тестван", "Бестселър", "Бърз орален спрей", "30 дни гаранция"],
    usageTitle: "Най-подходящ за първа поръчка, ако искате една бутилка да покрива повече от една цел.",
    conversionNote: "Миксът е най-лесната първа поръчка, когато искате една бутилка да подкрепя повече от една цел без да премисляте избора.",
    bundleTitle: "Най-продавана стартова рутина",
    bundleText: "Комбинирайте Микса с Лъвска грива или Кордицепс, ако искате една широка база плюс една насочена дневна формула.",
    reviews: [
      "Миксът беше най-лесният начин да започна. Не ми се наложи да премислям коя бутилка да избера първо.",
      "Усеща се като най-универсалния вариант, когато искам един продукт за всекидневна употреба.",
      "Ако някой е нов за марката, това е формулата, която бих препоръчал първо.",
      "Микс 5 гъби беше първата ми поръчка и не съм поглеждала назад. Покрива всичките ми нужди, а сутрешният прием отнема пет секунди.",
      "Не можех да реша с коя единична гъба да започна, затова избрах Микса. Беше най-доброто решение и усещам широката подкрепа всеки ден.",
      "Препоръчах Микса на цялото си семейство. Съпругът ми започна миналия месец и вече усеща подобрение в енергията и качеството на съня.",
    ],
    faq: [
      {
        question: "За кого е най-подходящ Миксът?",
        answer: "Най-подходящ е за хора, които искат широка ежедневна подкрепа или не желаят да избират твърде тясна цел за начало.",
      },
      {
        question: "Добър ли е за първа поръчка?",
        answer: "Да. Това е най-лесната и директна отправна точка за нови клиенти.",
      },
      {
        question: "Мога ли по-късно да добавя спрей с една гъба?",
        answer: "Да. Много клиенти започват с Микс, а след това добавят по-фокусирана формула според нуждите си.",
      },
      {
        question: "Подходящ ли е при прием на лекарства?",
        answer: "Гъбените ни екстракти обикновено се понасят добре, но ако приемате лекарства по лекарско предписание или имате здравословно състояние, консултирайте се със специалист преди употреба.",
      },
      {
        question: "Кои пет гъби са включени в Микса и защо?",
        answer: "Миксът съдържа Лъвска грива за фокус, Кордицепс за енергия, Рейши за баланс, Шийтаке за имунитет и Чага за антиоксидантна защита. Заедно те дават по-широка подкрепа в един дневен спрей.",
      },
    ],
  },
};

const pageCopy = {
  en: {
    home: "Home",
    products: "Products",
    whyBuy: (name: string) => `Why customers buy ${name}`,
    keyBenefits: "Key benefits",
    howToUse: "How to use",
    activeIngredients: "Active ingredients",
    fullIngredients: "Full ingredient list",
    sprayFormat: "Why customers prefer the spray format",
    sprayFormatText:
      "The spray format lowers friction. It is easier to carry, easier to remember, and easier to use consistently than a cabinet full of capsules.",
    reviews: "Customer Reviews",
    reviewCount: "reviews",
    faq: "Frequently Asked Questions",
    pairSection: "Complete Your Wellness Routine",
    pairSectionText: "Pairs especially well with products that cover a different daily goal.",
    learnMore: "Learn More",
    shippingBanner: "Free Bulgaria shipping above EUR 50.",
    verifiedPurchase: "Verified Purchase",
  },
  bg: {
    home: "Начало",
    products: "Продукти",
    whyBuy: (name: string) => `Защо клиентите избират ${name}`,
    keyBenefits: "Основни ползи",
    howToUse: "Как се използва",
    activeIngredients: "Активни съставки",
    fullIngredients: "Пълен списък на съставките",
    sprayFormat: "Защо клиентите предпочитат спрей формата",
    sprayFormatText:
      "Спрей форматът намалява усилието. По-лесно се носи, по-лесно се помни и по-лесно се използва всеки ден от шкаф, пълен с капсули.",
    reviews: "Отзиви от клиенти",
    reviewCount: "отзива",
    faq: "Често задавани въпроси",
    pairSection: "Допълнете ежедневната си рутина",
    pairSectionText: "Съчетава се отлично с продукти, които покриват различна ежедневна цел.",
    learnMore: "Виж продукта",
    shippingBanner: "Безплатна доставка в България над 50 EUR.",
    verifiedPurchase: "Потвърдена покупка",
  },
} as const;

function getLocalizedSalesContent(slug: ProductSlug, locale: Locale) {
  const sales = productSalesContent[slug];

  if (locale === "en") {
    return sales;
  }

  const override = bgProductOverrides[slug];

  return {
    ...sales,
    shortPitch: override.shortPitch,
    trustBadges: override.trustBadges,
    quickBenefits: products.find((product) => product.slug === slug)?.localized.bg.benefits ?? sales.quickBenefits,
    usageTitle: override.usageTitle,
    ingredientHighlights: products.find((product) => product.slug === slug)?.localized.bg.ingredients ?? sales.ingredientHighlights,
    fullIngredients: (products.find((product) => product.slug === slug)?.localized.bg.ingredients ?? sales.ingredientHighlights).join(", "),
    conversionNote: override.conversionNote,
    bundleTitle: override.bundleTitle,
    bundleText: override.bundleText,
    reviews: sales.reviews.map((review, index) => ({
      ...review,
      text: override.reviews[index] ?? review.text,
    })),
    faq: override.faq,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const locale = getLocale(await searchParams);
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found | InnoVAherb",
      description: "The requested product could not be found.",
      path: `/products/${slug}`,
    });
  }

  return buildMetadata({
    title: product.localized[locale].seoTitle,
    description: product.localized[locale].seoDescription,
    path: `/products/${slug}`,
  });
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const locale = getLocale(await searchParams);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const copy = product.localized[locale];
  const sales = getLocalizedSalesContent(product.slug, locale);
  const t = pageCopy[locale];
  const faqItems = [...sales.faq, ...extraFaqs[locale]].slice(0, 8);
  const pairedProducts = sales.pairsWith
    .map((pairedSlug) => getProductBySlug(pairedSlug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));
  const featuredPairSlug = sales.pairsWith[0];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: copy.name,
    sku: product.sku,
    image: [absoluteUrl(product.image)],
    description: copy.seoDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: (product.priceCents / 100).toFixed(2),
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: absoluteUrl(`/products/${product.slug}`),
    },
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <Script
        id={`${product.slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main className="pb-24 lg:pb-0">
        <section className="grain relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-warm-50 to-warm-100" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-100/20 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-7 lg:-mt-16 lg:px-8 lg:py-8">
            <nav className="animate-fade-in-up mb-5 flex items-center gap-2 text-sm text-grey-400">
              <Link href={withLocale("/", locale)} className="transition-colors hover:text-brand-600">{t.home}</Link>
              <span>{">"}</span>
              <Link href={withLocale("/#products", locale)} className="transition-colors hover:text-brand-600">{t.products}</Link>
              <span>{">"}</span>
              <span className="font-medium text-grey-700">{copy.name}</span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
              <div className="animate-fade-in-up delay-100">
                <div className="product-img-wrap relative overflow-hidden rounded-3xl bg-white p-6 shadow-product sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent" />
                  <img src={product.image} alt={copy.name} className="relative mx-auto w-full max-w-xs rounded-[1.75rem]" />
                </div>
                <RecommendedPairCard
                  locale={locale}
                  product={product}
                  pairSlug={featuredPairSlug}
                  title={sales.bundleTitle}
                  text={sales.bundleText}
                  className="mt-5 hidden lg:block"
                />
              </div>

              <ProductPurchasePanel product={product} copy={copy} locale={locale} salesContent={sales} />
            </div>
          </div>
        </section>

        <section className="border-y border-warm-200/50 bg-warm-50 py-4 sm:py-5">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {sales.quickBenefits.map((benefit) => (
              <div key={benefit} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-grey-700 shadow-elevated">
                {benefit}
              </div>
            ))}
            <div className="rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-elevated">
              {t.shippingBanner}
            </div>
          </div>
        </section>

        <section className="bg-white py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.whyBuy(copy.name)}</h2>
                <p className="mt-3 leading-body text-grey-600">{copy.heroDescription}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-warm-200/70 bg-warm-50 p-5">
                    <h3 className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{t.keyBenefits}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-body text-grey-600">
                      {copy.benefits.map((benefit) => (
                        <li key={benefit}>- {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-warm-200/70 bg-warm-50 p-5">
                    <h3 className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{t.howToUse}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-body text-grey-600">
                      {copy.usage.map((step) => (
                        <li key={step}>- {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <details className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="font-semibold text-grey-900">{t.activeIngredients}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{sales.ingredientHighlights.join(", ")}</p>
                    </div>
                  </div>
                </details>

                <details className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="font-semibold text-grey-900">{t.fullIngredients}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{sales.fullIngredients}</p>
                    </div>
                  </div>
                </details>

                <details className="overflow-hidden rounded-xl border border-warm-100/80 bg-warm-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left">
                    <span className="font-semibold text-grey-900">{t.sprayFormat}</span>
                    <span className="faq-chevron text-grey-400">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="px-5 pb-5 text-sm leading-body text-grey-600">{t.sprayFormatText}</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-warm-50 py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.reviews}</h2>

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="stars text-xl">★★★★★</span>
              <span className="font-semibold text-grey-700">{sales.rating.toFixed(1)}</span>
              <span className="text-sm text-grey-400">· {sales.reviewCount} {t.reviewCount}</span>
            </div>

            <div className="mx-auto mb-8 max-w-xs">
              <div className="space-y-1.5">
                {([
                  [5, "five"],
                  [4, "four"],
                  [3, "three"],
                  [2, "two"],
                  [1, "one"],
                ] as const).map(([star, key]) => (
                  <div key={star} className="flex items-center gap-2.5">
                    <span className="w-5 shrink-0 text-right text-xs text-grey-400">{star}★</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-warm-100">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${sales.ratingDist[key]}%` }} />
                    </div>
                    <span className="w-8 shrink-0 text-xs text-grey-400">{sales.ratingDist[key]}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
              {sales.reviews.map((review, index) => (
                <div key={review.name} className="rounded-2xl bg-white p-5 shadow-elevated">
                  <div className="stars mb-3 text-base">★★★★★</div>
                  <p className="mb-5 text-sm italic leading-body text-grey-700">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${index === 1 ? "bg-earth-100 text-earth-700" : "bg-brand-100 text-brand-700"}`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-grey-900">{review.name}</p>
                      <p className="text-xs text-grey-400">{t.verifiedPurchase}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.faq}</h2>
            <div className="grid gap-3 lg:grid-cols-2">
              {faqItems.map((item, index) => (
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
          </div>
        </section>

        <section className="bg-warm-50 py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-xl font-bold tracking-heading text-grey-900 sm:text-2xl">{t.pairSection}</h2>
            <p className="mb-6 mt-3 text-center text-grey-500">{t.pairSectionText}</p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {pairedProducts.map((paired) => (
                <Link
                  key={paired.slug}
                  href={withLocale(`/products/${paired.slug}`, locale)}
                  className="product-card group block rounded-2xl bg-white p-5 shadow-product"
                >
                  <div className="relative mb-3 overflow-hidden rounded-xl bg-warm-50 p-3">
                    <img src={paired.image} alt={paired.localized[locale].name} className="mx-auto h-auto w-28 rounded-2xl transition-transform duration-500 ease-spring" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${paired.accentClass}`}>
                    {paired.localized[locale].tagline}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-grey-900">
                    {paired.localized[locale].name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between border-t border-warm-100 pt-3">
                    <span className="font-display text-lg font-bold text-grey-900">
                      EUR {(paired.priceCents / 100).toFixed(2)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-[gap] duration-200 group-hover:gap-2">
                      {t.learnMore}
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
