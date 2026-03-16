import { Product, ProductCopy, ProductSlug } from "@/lib/types";

function product(
  value: Omit<Product, "localized"> & { localized: Record<"en" | "bg", ProductCopy> },
) {
  return value;
}

const localeExpansions: Record<ProductSlug, { ru: ProductCopy; sv: ProductCopy }> = {
  "lions-mane": {
    ru: {
      name: "Львиная грива",
      shortDescription: "Поддержка фокуса, памяти и ясности мышления.",
      heroTitle: "Спрей с Львиной гривой для более четкого фокуса",
      heroDescription: "Быстроусваиваемый оральный спрей для работы, учебы и ежедневной концентрации без капсул.",
      tagline: "ФОКУС",
      benefits: [
        "Поддерживает концентрацию и умственную выносливость",
        "Помогает сохранять память и ясность мышления",
        "Удобный сублингвальный формат на каждый день",
      ],
      ingredients: ["Экстракт Львиной гривы 10:1", "Очищенная вода", "Растительный глицерин", "Натуральный консервант"],
      usage: ["Встряхнуть перед использованием", "Распылить 3-4 раза под язык", "Подержать 30 секунд и проглотить"],
      seoTitle: "Спрей с Львиной гривой для фокуса | InnoVAherb",
      seoDescription: "Спрей InnoVAherb с Львиной гривой для фокуса, памяти и ясности мышления.",
    },
    sv: {
      name: "Lion's Mane",
      shortDescription: "Stöd för fokus, minne och mental klarhet varje dag.",
      heroTitle: "Lion's Mane-spray för skarpare fokus",
      heroDescription: "En snabbupptaglig munspray för arbete, studier och daglig koncentration utan kapslar.",
      tagline: "FOKUS",
      benefits: [
        "Stödjer koncentration och mental uthållighet",
        "Hjälper till att bevara minne och klarhet",
        "Praktiskt sublingualt format för daglig användning",
      ],
      ingredients: ["Lion's Mane-extrakt 10:1", "Renat vatten", "Vegetabiliskt glycerin", "Naturligt konserveringsmedel"],
      usage: ["Skaka före användning", "Spraya 3-4 gånger under tungan", "Håll i 30 sekunder och svälj"],
      seoTitle: "Lion's Mane-spray för fokus | InnoVAherb",
      seoDescription: "InnoVAherb Lion's Mane-spray för fokus, klarhet och minnesstöd.",
    },
  },
  cordyceps: {
    ru: {
      name: "Кордицепс",
      shortDescription: "Естественная поддержка энергии и выносливости.",
      heroTitle: "Спрей с Кордицепсом для чистой ежедневной энергии",
      heroDescription: "Создан для активных дней, тренировок и естественной выносливости без резких стимуляторов.",
      tagline: "ЭНЕРГИЯ",
      benefits: [
        "Поддерживает естественную энергию и выносливость",
        "Подходит для тренировок и напряженных дней",
        "Быстрый оральный формат",
      ],
      ingredients: ["Экстракт Кордицепса 10:1", "Очищенная вода", "Растительный глицерин", "Натуральный консервант"],
      usage: ["Встряхнуть перед использованием", "Распылить 3-4 раза под язык", "Использовать утром или перед активностью"],
      seoTitle: "Спрей с Кордицепсом для энергии | InnoVAherb",
      seoDescription: "Спрей InnoVAherb с Кордицепсом для чистой энергии, выносливости и активных дней.",
    },
    sv: {
      name: "Cordyceps",
      shortDescription: "Naturligt stöd för energi och uthållighet varje dag.",
      heroTitle: "Cordyceps-spray för ren daglig energi",
      heroDescription: "Utvecklad för aktiva dagar, träning och naturlig uthållighet utan hårda stimulanser.",
      tagline: "ENERGI",
      benefits: [
        "Stödjer naturlig energi och uthållighet",
        "Passar inför träning och intensiva dagar",
        "Snabb munspray utan kapslar",
      ],
      ingredients: ["Cordyceps-extrakt 10:1", "Renat vatten", "Vegetabiliskt glycerin", "Naturligt konserveringsmedel"],
      usage: ["Skaka före användning", "Spraya 3-4 gånger under tungan", "Använd på morgonen eller före aktivitet"],
      seoTitle: "Cordyceps-spray för energi | InnoVAherb",
      seoDescription: "Cordyceps-spray från InnoVAherb för ren daglig energi och uthållighet.",
    },
  },
  reishi: {
    ru: {
      name: "Рейши",
      shortDescription: "Вечерняя формула для баланса и восстановления.",
      heroTitle: "Спрей с Рейши для спокойствия и вечернего баланса",
      heroDescription: "Спрей для вечернего ритуала, снятия напряжения и более спокойного восстановления.",
      tagline: "БАЛАНС",
      benefits: [
        "Поддерживает спокойствие и ежедневный баланс",
        "Подходит для вечерней рутины",
        "Простой оральный формат",
      ],
      ingredients: ["Экстракт Рейши 10:1", "Очищенная вода", "Растительный глицерин", "Натуральный консервант"],
      usage: ["Встряхнуть перед использованием", "Распылить 3-4 раза под язык", "Использовать вечером"],
      seoTitle: "Спрей с Рейши для баланса | InnoVAherb",
      seoDescription: "Спрей InnoVAherb с Рейши для спокойствия, баланса и вечернего восстановления.",
    },
    sv: {
      name: "Reishi",
      shortDescription: "En kvällsformula för balans och återhämtning.",
      heroTitle: "Reishi-spray för lugn och kvällsbalans",
      heroDescription: "En jordad kvällsspray för stressiga rutiner, återhämtning och vila.",
      tagline: "BALANS",
      benefits: [
        "Stödjer lugn och daglig balans",
        "Passar i kvällsrutinen",
        "Enkel munspray för daglig användning",
      ],
      ingredients: ["Reishi-extrakt 10:1", "Renat vatten", "Vegetabiliskt glycerin", "Naturligt konserveringsmedel"],
      usage: ["Skaka före användning", "Spraya 3-4 gånger under tungan", "Använd på eftermiddagen eller kvällen"],
      seoTitle: "Reishi-spray för balans | InnoVAherb",
      seoDescription: "Reishi-spray från InnoVAherb för lugn, balans och kvällsåterhämtning.",
    },
  },
  shiitake: {
    ru: {
      name: "Шиитаке",
      shortDescription: "Ежедневная поддержка жизненного тонуса и устойчивости.",
      heroTitle: "Спрей с Шиитаке для ежедневной жизненности",
      heroDescription: "Простой ежедневный спрей для устойчивого тонуса и поддержки иммунной системы.",
      tagline: "ЖИЗНЕННОСТЬ",
      benefits: [
        "Поддерживает ежедневный тонус и хорошее самочувствие",
        "Подходит для постоянного использования",
        "Быстрый формат без капсул",
      ],
      ingredients: ["Экстракт Шиитаке 10:1", "Очищенная вода", "Растительный глицерин", "Натуральный консервант"],
      usage: ["Встряхнуть перед использованием", "Распылить 3-4 раза под язык", "Использовать ежедневно в любое время"],
      seoTitle: "Спрей с Шиитаке для жизненности | InnoVAherb",
      seoDescription: "Спрей InnoVAherb с Шиитаке для ежедневной жизненности и устойчивой поддержки.",
    },
    sv: {
      name: "Shiitake",
      shortDescription: "Dagligt stöd för jämn vitalitet och välbefinnande.",
      heroTitle: "Shiitake-spray för daglig vitalitet",
      heroDescription: "En enkel daglig wellness-spray som stödjer motståndskraft och vardaglig vitalitet.",
      tagline: "VITALITET",
      benefits: [
        "Stödjer daglig vitalitet och välmående",
        "Passar för konsekvent vardagsanvändning",
        "Snabb spray utan kapslar",
      ],
      ingredients: ["Shiitake-extrakt 10:1", "Renat vatten", "Vegetabiliskt glycerin", "Naturligt konserveringsmedel"],
      usage: ["Skaka före användning", "Spraya 3-4 gånger under tungan", "Använd dagligen när som helst"],
      seoTitle: "Shiitake-spray för vitalitet | InnoVAherb",
      seoDescription: "Shiitake-spray från InnoVAherb för daglig vitalitet och jämnt välbefinnande.",
    },
  },
  chaga: {
    ru: {
      name: "Чага",
      shortDescription: "Антиоксидантная поддержка для устойчивой ежедневной рутины.",
      heroTitle: "Спрей с Чагой для ежедневной антиоксидантной поддержки",
      heroDescription: "Мощный грибной спрей для антиоксидантной защиты и устойчивой ежедневной рутины.",
      tagline: "ЗАЩИТА",
      benefits: [
        "Богатая антиоксидантная поддержка",
        "Подходит для стабильной ежедневной рутины",
        "Быстрый оральный формат",
      ],
      ingredients: ["Экстракт Чаги 10:1", "Очищенная вода", "Растительный глицерин", "Натуральный консервант"],
      usage: ["Встряхнуть перед использованием", "Распылить 3-4 раза под язык", "Использовать утром как часть рутины"],
      seoTitle: "Спрей с Чагой для антиоксидантной поддержки | InnoVAherb",
      seoDescription: "Спрей InnoVAherb с Чагой для антиоксидантной поддержки и устойчивой ежедневной рутины.",
    },
    sv: {
      name: "Chaga",
      shortDescription: "Antioxidantrikt stöd för en mer motståndskraftig vardag.",
      heroTitle: "Chaga-spray för motståndskraftig daglig support",
      heroDescription: "En kraftfull svampspray för antioxidantstöd och en mer jordad wellness-rutin.",
      tagline: "SKYDD",
      benefits: [
        "Antioxidantrikt svampstöd",
        "Stödjer en stadig daglig rutin",
        "Snabb oral spray",
      ],
      ingredients: ["Chaga-extrakt 10:1", "Renat vatten", "Vegetabiliskt glycerin", "Naturligt konserveringsmedel"],
      usage: ["Skaka före användning", "Spraya 3-4 gånger under tungan", "Använd på morgonen som del av rutinen"],
      seoTitle: "Chaga-spray för antioxidantstöd | InnoVAherb",
      seoDescription: "Chaga-spray från InnoVAherb för antioxidantstöd och en mer motståndskraftig vardag.",
    },
  },
  mix: {
    ru: {
      name: "Микс 5 грибов",
      shortDescription: "Комплексная формула для ежедневной грибной поддержки.",
      heroTitle: "Спрей с 5 грибами для всесторонней поддержки",
      heroDescription: "Наша самая широкая формула сочетает фокус, энергию, баланс, жизненность и антиоксидантную защиту в одном спрее.",
      tagline: "КОМПЛЕКС",
      benefits: [
        "Объединяет ключевые направления поддержки в одной формуле",
        "Отличный стартовый продукт для ежедневной рутины",
        "Удобный спрей для работы и поездок",
      ],
      ingredients: ["Экстракт Львиной гривы", "Экстракт Кордицепса", "Экстракт Рейши", "Экстракт Шиитаке", "Экстракт Чаги"],
      usage: ["Встряхнуть перед использованием", "Распылить 3-4 раза под язык", "Использовать один или два раза в день"],
      seoTitle: "Спрей Микс 5 грибов для ежедневной поддержки | InnoVAherb",
      seoDescription: "Микс 5 грибов от InnoVAherb для широкого ежедневного грибного wellness-подхода.",
    },
    sv: {
      name: "5-svampsmix",
      shortDescription: "En komplett blandning för dagligt svampwellness.",
      heroTitle: "5-svampsspray för bred daglig support",
      heroDescription: "Vår bredaste dagliga formula kombinerar fokus, energi, balans, vitalitet och antioxidantstöd i en enda spray.",
      tagline: "KOMPLETT",
      benefits: [
        "Samlar flera viktiga svampfördelar i en formula",
        "En stark startprodukt för nya kunder",
        "Praktiskt sprayformat för arbete och resor",
      ],
      ingredients: ["Lion's Mane-extrakt", "Cordyceps-extrakt", "Reishi-extrakt", "Shiitake-extrakt", "Chaga-extrakt"],
      usage: ["Skaka före användning", "Spraya 3-4 gånger under tungan", "Använd en eller två gånger dagligen"],
      seoTitle: "5-svampsspray för daglig wellness | InnoVAherb",
      seoDescription: "5-svampsmixen från InnoVAherb för bred daglig wellness med bulgariska svampextrakt.",
    },
  },
};

const baseProducts = [
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
] as const;

export const products = baseProducts.map((product) => ({
  ...product,
  localized: {
    ...product.localized,
    ...localeExpansions[product.slug],
  },
})) satisfies Product[];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
