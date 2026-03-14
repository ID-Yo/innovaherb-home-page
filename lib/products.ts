import { Product } from "@/lib/types";

function product(
  value: Product,
): Product {
  return value;
}

export const products = [
  product({
    slug: "lions-mane",
    sku: "IH-LM-001",
    priceCents: 1998,
    category: "Focus",
    image: "/brand_assets/Lions_mane_front.webp",
    accentClass: "text-brand-600",
    stock: 34,
    published: true,
    localized: {
      en: {
        name: "Lion's Mane",
        shortDescription: "Supports focus, memory, and daily mental clarity.",
        heroTitle: "Lion's Mane mushroom spray for sharper focus",
        heroDescription:
          "A fast-absorbing oral spray built for workdays, study sessions, and mental clarity without pills.",
        tagline: "FOCUS life",
        benefits: [
          "Supports concentration and cognitive stamina",
          "Helps maintain memory and mental clarity",
          "Easy sublingual format for daily use",
        ],
        ingredients: [
          "Lion's Mane extract 10:1",
          "Purified water",
          "Vegetable glycerin",
          "Natural preservative",
        ],
        usage: [
          "Shake before use",
          "Spray 3-4 times under the tongue",
          "Hold for 30 seconds and swallow",
        ],
        seoTitle: "Lion's Mane Mushroom Spray for Focus | InnoVAherb",
        seoDescription:
          "Shop InnoVAherb Lion's Mane mushroom spray for focus, clarity, and memory support. Natural Bulgarian extract with fast oral absorption.",
      },
      bg: {
        name: "Лъвска грива",
        shortDescription: "Подкрепя фокуса, паметта и яснотата през деня.",
        heroTitle: "Спрей с Лъвска грива за по-добър фокус",
        heroDescription:
          "Бързоусвоим орален спрей за работа, учене и ежедневна концентрация без капсули.",
        tagline: "ФОКУС живот",
        benefits: [
          "Подкрепя концентрацията и умствената издръжливост",
          "Помага за паметта и ясната мисъл",
          "Удобен сублингвален прием всеки ден",
        ],
        ingredients: [
          "Екстракт от Лъвска грива 10:1",
          "Пречистена вода",
          "Растителен глицерин",
          "Естествен консервант",
        ],
        usage: [
          "Разклатете преди употреба",
          "Впръскайте 3-4 пъти под езика",
          "Задръжте 30 секунди и преглътнете",
        ],
        seoTitle: "Спрей с Лъвска грива за фокус | InnoVAherb",
        seoDescription:
          "Поръчайте спрей с Лъвска грива от InnoVAherb за фокус, памет и яснота. Натурален български екстракт с бързо усвояване.",
      },
    },
  }),
  product({
    slug: "cordyceps",
    sku: "IH-CO-001",
    priceCents: 1998,
    category: "Energy",
    image: "/brand_assets/Cordycepts_front.webp",
    accentClass: "text-earth-500",
    stock: 27,
    published: true,
    localized: {
      en: {
        name: "Cordyceps",
        shortDescription: "Natural daily energy and stamina support.",
        heroTitle: "Cordyceps spray for clean daily energy",
        heroDescription:
          "Built for active days, workouts, and natural stamina support without jittery stimulants.",
        tagline: "ENERGY life",
        benefits: [
          "Supports natural energy and endurance",
          "Fits pre-workout and busy-day routines",
          "Fast oral spray delivery",
        ],
        ingredients: [
          "Cordyceps extract 10:1",
          "Purified water",
          "Vegetable glycerin",
          "Natural preservative",
        ],
        usage: [
          "Shake before use",
          "Spray 3-4 times under the tongue",
          "Take in the morning or before activity",
        ],
        seoTitle: "Cordyceps Mushroom Spray for Energy | InnoVAherb",
        seoDescription:
          "Shop Cordyceps mushroom spray by InnoVAherb for clean daily energy, stamina, and workout support with natural Bulgarian extract.",
      },
      bg: {
        name: "Кордицепс",
        shortDescription: "Естествена подкрепа за енергия и издръжливост.",
        heroTitle: "Спрей с Кордицепс за чиста енергия",
        heroDescription:
          "Подходящ за активни дни, тренировки и ежедневна издръжливост без стимулантен срив.",
        tagline: "ЕНЕРГИЯ живот",
        benefits: [
          "Подкрепя естествената енергия и издръжливост",
          "Подходящ преди тренировка и натоварен ден",
          "Бързоусвоим орален спрей",
        ],
        ingredients: [
          "Екстракт от Кордицепс 10:1",
          "Пречистена вода",
          "Растителен глицерин",
          "Естествен консервант",
        ],
        usage: [
          "Разклатете преди употреба",
          "Впръскайте 3-4 пъти под езика",
          "Приемайте сутрин или преди активност",
        ],
        seoTitle: "Спрей с Кордицепс за енергия | InnoVAherb",
        seoDescription:
          "Поръчайте спрей с Кордицепс от InnoVAherb за чиста енергия, издръжливост и активен ден с натурален български екстракт.",
      },
    },
  }),
  product({
    slug: "reishi",
    sku: "IH-RE-001",
    priceCents: 1998,
    category: "Balance",
    image: "/brand_assets/Reishi_front.webp",
    accentClass: "text-brand-600",
    stock: 19,
    published: true,
    localized: {
      en: {
        name: "Reishi",
        shortDescription: "A calm-evening formula for balance and recovery.",
        heroTitle: "Reishi spray for calm and evening balance",
        heroDescription:
          "A grounded evening support spray designed for busy routines, stress management, and rest.",
        tagline: "BALANCE life",
        benefits: [
          "Supports calm and daily balance",
          "Fits evening recovery routines",
          "Simple oral spray format",
        ],
        ingredients: [
          "Reishi extract 10:1",
          "Purified water",
          "Vegetable glycerin",
          "Natural preservative",
        ],
        usage: [
          "Shake before use",
          "Spray 3-4 times under the tongue",
          "Use in the late afternoon or evening",
        ],
        seoTitle: "Reishi Mushroom Spray for Balance | InnoVAherb",
        seoDescription:
          "Shop Reishi mushroom spray by InnoVAherb for calm, balance, and evening recovery with natural Bulgarian extract.",
      },
      bg: {
        name: "Рейши",
        shortDescription: "Вечерна формула за баланс и възстановяване.",
        heroTitle: "Спрей с Рейши за спокойствие и баланс",
        heroDescription:
          "Вечерен спрей за натоварено ежедневие, по-спокоен ритъм и по-добро възстановяване.",
        tagline: "БАЛАНС живот",
        benefits: [
          "Подкрепя спокойствието и ежедневния баланс",
          "Подходящ за вечерна рутина",
          "Лесен орален прием",
        ],
        ingredients: [
          "Екстракт от Рейши 10:1",
          "Пречистена вода",
          "Растителен глицерин",
          "Естествен консервант",
        ],
        usage: [
          "Разклатете преди употреба",
          "Впръскайте 3-4 пъти под езика",
          "Използвайте следобед или вечер",
        ],
        seoTitle: "Спрей с Рейши за баланс | InnoVAherb",
        seoDescription:
          "Поръчайте спрей с Рейши от InnoVAherb за спокойствие, баланс и вечерно възстановяване с натурален български екстракт.",
      },
    },
  }),
  product({
    slug: "shiitake",
    sku: "IH-SH-001",
    priceCents: 1998,
    category: "Vitality",
    image: "/brand_assets/Shiitake_front.webp",
    accentClass: "text-earth-600",
    stock: 22,
    published: true,
    localized: {
      en: {
        name: "Shiitake",
        shortDescription: "Daily mushroom support for steady vitality.",
        heroTitle: "Shiitake spray for daily vitality",
        heroDescription:
          "A simple daily wellness spray to support immune resilience and everyday vitality.",
        tagline: "VITALITY life",
        benefits: [
          "Supports daily vitality and wellness",
          "Great for consistent everyday use",
          "Fast spray format without capsules",
        ],
        ingredients: [
          "Shiitake extract 10:1",
          "Purified water",
          "Vegetable glycerin",
          "Natural preservative",
        ],
        usage: [
          "Shake before use",
          "Spray 3-4 times under the tongue",
          "Use daily at any time of day",
        ],
        seoTitle: "Shiitake Mushroom Spray for Vitality | InnoVAherb",
        seoDescription:
          "Shop Shiitake mushroom spray by InnoVAherb for everyday vitality and wellness with natural Bulgarian extract.",
      },
      bg: {
        name: "Шийтаке",
        shortDescription: "Ежедневна подкрепа за жизненост и добър тонус.",
        heroTitle: "Спрей с Шийтаке за ежедневна виталност",
        heroDescription:
          "Лесен ежедневен спрей за по-добра жизненост и постоянна грижа за добрия тонус.",
        tagline: "ВИТАЛНОСТ живот",
        benefits: [
          "Подкрепя жизнеността и добрия тонус",
          "Подходящ за постоянна ежедневна употреба",
          "Бърз прием без капсули",
        ],
        ingredients: [
          "Екстракт от Шийтаке 10:1",
          "Пречистена вода",
          "Растителен глицерин",
          "Естествен консервант",
        ],
        usage: [
          "Разклатете преди употреба",
          "Впръскайте 3-4 пъти под езика",
          "Използвайте ежедневно по всяко време",
        ],
        seoTitle: "Спрей с Шийтаке за виталност | InnoVAherb",
        seoDescription:
          "Поръчайте спрей с Шийтаке от InnoVAherb за ежедневна жизненост и добър тонус с натурален български екстракт.",
      },
    },
  }),
  product({
    slug: "chaga",
    sku: "IH-CH-001",
    priceCents: 1998,
    category: "Shield",
    image: "/brand_assets/Chaga_front.webp",
    accentClass: "text-warm-600",
    stock: 16,
    published: true,
    localized: {
      en: {
        name: "Chaga",
        shortDescription: "Antioxidant-rich support for resilient routines.",
        heroTitle: "Chaga spray for resilient daily support",
        heroDescription:
          "A powerful mushroom spray designed for antioxidant support and a grounded wellness routine.",
        tagline: "SHIELD life",
        benefits: [
          "Antioxidant-rich mushroom support",
          "Supports grounded, steady daily wellness",
          "Fast oral spray format",
        ],
        ingredients: [
          "Chaga extract 10:1",
          "Purified water",
          "Vegetable glycerin",
          "Natural preservative",
        ],
        usage: [
          "Shake before use",
          "Spray 3-4 times under the tongue",
          "Use in the morning as part of your routine",
        ],
        seoTitle: "Chaga Mushroom Spray for Antioxidant Support | InnoVAherb",
        seoDescription:
          "Shop Chaga mushroom spray by InnoVAherb for antioxidant support and resilient daily wellness with natural Bulgarian extract.",
      },
      bg: {
        name: "Чага",
        shortDescription: "Антиоксидантна подкрепа за устойчиво ежедневие.",
        heroTitle: "Спрей с Чага за ежедневна подкрепа",
        heroDescription:
          "Мощен гъбен спрей за антиоксидантна грижа и стабилна уелнес рутина.",
        tagline: "ЩИТ живот",
        benefits: [
          "Богата антиоксидантна подкрепа",
          "Подходящ за стабилна ежедневна грижа",
          "Бърз орален спрей",
        ],
        ingredients: [
          "Екстракт от Чага 10:1",
          "Пречистена вода",
          "Растителен глицерин",
          "Естествен консервант",
        ],
        usage: [
          "Разклатете преди употреба",
          "Впръскайте 3-4 пъти под езика",
          "Приемайте сутрин като част от рутината",
        ],
        seoTitle: "Спрей с Чага за антиоксидантна подкрепа | InnoVAherb",
        seoDescription:
          "Поръчайте спрей с Чага от InnoVAherb за антиоксидантна подкрепа и устойчиво ежедневие с натурален български екстракт.",
      },
    },
  }),
  product({
    slug: "mix",
    sku: "IH-MX-001",
    priceCents: 1998,
    category: "Complete",
    image: "/brand_assets/Mix_front.webp",
    accentClass: "text-brand-700",
    stock: 42,
    published: true,
    localized: {
      en: {
        name: "5-Mushroom Mix",
        shortDescription: "A complete blend for all-day mushroom wellness.",
        heroTitle: "5-mushroom blend spray for full-spectrum support",
        heroDescription:
          "Our broadest daily formula combines focus, energy, balance, vitality, and antioxidant support in one spray.",
        tagline: "COMPLETE life",
        benefits: [
          "Combines all six signature mushroom directions into one formula",
          "Great starter product for full-day routines",
          "Easy spray format for travel and workdays",
        ],
        ingredients: [
          "Lion's Mane extract",
          "Cordyceps extract",
          "Reishi extract",
          "Shiitake extract",
          "Chaga extract",
        ],
        usage: [
          "Shake before use",
          "Spray 3-4 times under the tongue",
          "Use once or twice daily",
        ],
        seoTitle: "5-Mushroom Blend Spray for Daily Wellness | InnoVAherb",
        seoDescription:
          "Shop the InnoVAherb 5-mushroom spray blend for full-spectrum daily wellness with premium Bulgarian mushroom extracts.",
      },
      bg: {
        name: "Микс 5 гъби",
        shortDescription: "Пълна гъбена формула за всеки ден.",
        heroTitle: "Спрей с 5 гъби за цялостна подкрепа",
        heroDescription:
          "Най-пълната ни ежедневна формула съчетава фокус, енергия, баланс, виталност и антиоксидантна грижа.",
        tagline: "ПЪЛЕН живот",
        benefits: [
          "Съчетава всички основни ползи в една формула",
          "Подходящ стартов продукт за ежедневна рутина",
          "Удобен спрей за работа и пътуване",
        ],
        ingredients: [
          "Екстракт от Лъвска грива",
          "Екстракт от Кордицепс",
          "Екстракт от Рейши",
          "Екстракт от Шийтаке",
          "Екстракт от Чага",
        ],
        usage: [
          "Разклатете преди употреба",
          "Впръскайте 3-4 пъти под езика",
          "Използвайте веднъж или два пъти дневно",
        ],
        seoTitle: "Спрей микс от 5 гъби за ежедневен уелнес | InnoVAherb",
        seoDescription:
          "Поръчайте микс спрей от 5 гъби на InnoVAherb за цялостна ежедневна грижа с премиум български гъбени екстракти.",
      },
    },
  }),
] as const satisfies Product[];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
