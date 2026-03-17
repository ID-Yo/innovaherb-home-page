import { Locale } from "@/lib/types";

type HomeContent = {
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
};

export const homeContentByLocale: Record<Locale, HomeContent> = {
  en: {
    metadataTitle: "Bulgarian Mushroom Extract Sprays | InnoVAherb",
    metadataDescription: "Shop Bulgarian mushroom extract sprays for focus, energy, balance, vitality, and immunity. Explore six InnoVAherb formulas with secure checkout.",
    trusted: "Trusted by 2,000+ customers across Europe",
    title: "Bulgarian Mushroom Extract Sprays for Daily Focus, Energy, and Vitality",
    subtitle: "Discover premium Bulgarian mushroom extract sprays for focus, energy, balance, immunity, and full-spectrum daily support in a faster, easier oral format.",
    shop: "Shop Our Collection",
    how: "How It Works",
    firstPurchase: "Recommended first purchase",
    firstPurchaseTitle: "Start with the 5-Mushroom Mix",
    firstPurchaseText: "The easiest entry point for shoppers who want one bottle to cover more than one goal.",
    firstPurchaseCta: "Shop the best seller",
    imageText: "InnoVAherb mushroom extract sprays are designed for shoppers who want a simpler wellness routine, cleaner daily dosing, and formulas matched to clear goals like mental clarity, natural energy, evening balance, and everyday resilience.",
    shopByGoal: "Shop by Goal",
    shopByGoalText: "Every mushroom has a role. Pick the result you want, or start with the Mix if you want the easiest first order.",
    freeShipping: "Free shipping",
    freeShippingText: "On Bulgaria orders over EUR 50.",
    ritual: "Daily ritual",
    ritualText: "Spray in seconds, no capsules or prep.",
    bestSeller: "Best seller",
    bestSellerText: "Start with the 5-Mushroom Mix if you are unsure.",
    offerHeading: "Choose the Best First Order",
    offerText: "Pick the buying path that feels easiest for you: a best-selling all-in-one spray, a two-bottle routine, or a single formula matched to one clear goal.",
    offerCards: [
      { eyebrow: "Best first order", title: "Start with the 5-Mushroom Mix", text: "The easiest starting point for first-time buyers who want one bottle that covers multiple goals.", cta: "Shop the Mix", href: "/products/mix", badge: "Best seller" },
      { eyebrow: "Free shipping unlock", title: "Build a two-bottle routine", text: "Most customers pair a daytime spray with a broader evening or all-day support formula to cover more than one goal and qualify for free shipping.", cta: "Browse pairings", href: "/#products", badge: "Most popular" },
      { eyebrow: "Low-risk trial", title: "Test one bottle first", text: "Every formula shares the same price, which makes it easy to try one targeted spray before expanding your routine.", cta: "Choose by goal", href: "/#products", badge: "Simple option" },
    ],
    metrics: [{ num: "2,000+", sub: "happy customers", accent: false }, { num: "€0.67", sub: "per day, per bottle", accent: true }, { num: "1 day", sub: "shipping from Bulgaria", accent: false }],
    trustPoints: [{ icon: "lab", label: "Lab Tested" }, { icon: "natural", label: "100% Natural" }, { icon: "bulgaria", label: "Made in Bulgaria" }, { icon: "guarantee", label: "30-Day Money-Back" }, { icon: "vegan", label: "Vegan Friendly" }, { icon: "fruiting", label: "Fruiting Body Only" }],
    howHeading: "How It Works",
    howText: "Three simple steps to build a mushroom routine that actually fits modern life.",
    howSteps: [{ step: "1", title: "Shake", text: "Activate the extract before each use." }, { step: "2", title: "Spray", text: "Use 5 to 7 sprays under the tongue." }, { step: "3", title: "Stay consistent", text: "Use daily for 2 to 4 weeks to feel the full routine." }],
    comparisonHeading: "Which Mushroom Is Right for You?",
    comparisonText: "Each formula targets a different goal. Compare them to find your match or start with the 5-Mix to cover more than one area.",
    comparisonGoals: { "lions-mane": "Focus & Memory", cordyceps: "Energy & Stamina", reishi: "Calm & Balance", shiitake: "Daily Vitality", chaga: "Antioxidants", mix: "Full Spectrum" },
    traitLabels: { focus: "Focus", energy: "Energy", sleep: "Sleep", immunity: "Immunity", antioxidant: "Antioxidants" },
    comparisonShop: "Shop",
    comparisonBuy: "Buy",
    originEyebrow: "Our Origin",
    originTitle: "From Bulgarian Forests to Your Daily Ritual",
    originTextOne: "InnoVAherb was created to turn the quiet strength of medicinal mushrooms into a modern daily habit. We use Bulgarian-sourced ingredients and a premium spray format so customers get a cleaner, more practical route to focus, energy, balance, vitality, and full-spectrum wellness.",
    originTextTwo: "The goal is not complexity. It is repeatability. Every bottle is built to be easy to understand, easy to use, and easy to reorder because the routine genuinely fits real life.",
    originCta: "Learn Our Story",
    reviewsHeading: "What Our Customers Say",
    aggregateReviewLabel: "★★★★★ 4.9 average · 800+ verified reviews",
    verifiedPurchase: "Verified Purchase",
    reviews: [
      { initials: "MK", name: "Maria K., Sofia", text: "I've noticed a real improvement in my focus since starting the Lion's Mane spray. It fits perfectly into my morning work routine." },
      { initials: "SD", name: "Stefan D., Plovdiv", text: "Cordyceps gives me a clean energy lift before training. No jitters, just steady drive and better endurance." },
      { initials: "EV", name: "Elena V., Varna", text: "Reishi became part of my evening ritual. I sleep better and feel far more balanced through stressful weeks." },
      { initials: "PM", name: "Petya M., Varna", text: "After 3 weeks I notice a genuine difference in how calm and focused I feel under pressure." },
      { initials: "BT", name: "Boris T., Burgas", text: "The spray format makes it impossible to forget your daily dose. Just spray and go. It is that simple." },
      { initials: "AV", name: "Aneta V., Sofia", text: "I recommended InnoVAherb to my whole office. Three colleagues started their own routines and everyone is happy." }
    ],
    newsletterHeading: "Ready for your first bottle?",
    newsletterText: "Start with the 5-Mushroom Mix for the easiest first order, or shop by goal if you already know the result you want most.",
    newsletterProof: "Fast Bulgaria shipping · 35 ml bottle · 30-day guarantee",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Start with the best seller",
    newsletterNote: "Prefer a more targeted formula? Browse the full collection below.",
    faqHeading: "Frequently Asked Questions About Our Mushroom Extract Sprays",
    faqText: "Find quick answers about how InnoVAherb sprays work, which formula to start with, and how delivery works in Bulgaria.",
    faqs: [
      { question: "What makes InnoVAherb different from capsules or powders?", answer: "InnoVAherb uses a fast, convenient spray format that is easier to carry, easier to dose, and easier to repeat every day than capsules, teas, or powder blends." },
      { question: "Which mushroom spray should I start with?", answer: "Most first-time customers start with the 5-Mushroom Mix for broader support, then add a more focused formula such as Lion's Mane, Cordyceps, or Reishi based on their main goal." },
      { question: "Do you ship across Bulgaria?", answer: "Yes. InnoVAherb currently ships within Bulgaria, and orders above EUR 50 qualify for free shipping." },
      { question: "How do I use the sprays each day?", answer: "Shake the bottle, spray 5 to 7 times under the tongue, hold briefly, and use consistently as part of your daily routine." },
      { question: "How much extract is in each spray bottle?", answer: "Every InnoVAherb bottle contains 35 ml and is designed for around 30 daily servings when used as directed." },
      { question: "Can I combine two sprays in one routine?", answer: "Yes. Many customers combine one daytime formula with one evening or broader-support formula to match more than one goal without overcomplicating the routine." },
      { question: "How quickly do customers notice a difference?", answer: "Some customers notice the routine benefits within the first days, but the best results usually come after 2 to 4 weeks of consistent daily use." },
      { question: "Are the sprays easy to carry and use on the go?", answer: "Yes. The compact 35 ml format fits easily into a bag, desk drawer, or gym kit, making it easier to stay consistent every day." }
    ],
  },
  bg: {
    metadataTitle: "Български спрейове с гъбени екстракти | InnoVAherb",
    metadataDescription: "Поръчайте български спрейове с гъбени екстракти за фокус, енергия, баланс, жизненост и имунитет. Разгледайте шестте формули на InnoVAherb.",
    trusted: "Доверие от над 2 000 клиенти в Европа",
    title: "Български спрейове с гъбени екстракти за ежедневен фокус, енергия и жизненост",
    subtitle: "Открийте премиум български спрейове с гъбени екстракти за фокус, енергия, баланс, имунитет и цялостна ежедневна подкрепа в по-бърз и удобен орален формат.",
    shop: "Разгледай колекцията",
    how: "Как работи",
    firstPurchase: "Препоръчителна първа поръчка",
    firstPurchaseTitle: "Започнете с Микс 5 гъби",
    firstPurchaseText: "Най-лесният старт, ако искате една бутилка да покрива повече от една ежедневна цел.",
    firstPurchaseCta: "Към бестселъра",
    imageText: "InnoVAherb спрейовете с гъбени екстракти са създадени за хора, които искат по-лесна уелнес рутина, по-чисто ежедневно дозиране и формули, насочени към ясни цели като умствена яснота, естествена енергия, вечерен баланс и ежедневна устойчивост.",
    shopByGoal: "Изберете по цел",
    shopByGoalText: "Всяка гъба има своя роля. Изберете резултата, който търсите, или започнете с Микса, ако искате най-лесната първа поръчка.",
    freeShipping: "Безплатна доставка",
    freeShippingText: "За поръчки в България над 50 EUR.",
    ritual: "Ежедневен ритуал",
    ritualText: "Впръсквате за секунди, без капсули и без подготовка.",
    bestSeller: "Най-продаван",
    bestSellerText: "Започнете с Микс 5 гъби, ако не сте сигурни.",
    offerHeading: "Изберете най-подходящата първа поръчка",
    offerText: "Изберете най-лесния път за старт: бестселър с всичко в едно, рутина с две бутилки или една формула, насочена към ясна цел.",
    offerCards: [
      { eyebrow: "Най-добър старт", title: "Започнете с Микс 5 гъби", text: "Най-лесната отправна точка за първа поръчка, ако искате една бутилка да покрива повече от една цел.", cta: "Към Микса", href: "/products/mix", badge: "Бестселър" },
      { eyebrow: "Достигнете безплатна доставка", title: "Изградете рутина с две бутилки", text: "Много клиенти комбинират дневен спрей с по-широка или вечерна формула, за да покрият повече от една цел и да получат безплатна доставка.", cta: "Виж комбинации", href: "/#products", badge: "Най-популярно" },
      { eyebrow: "Лесен тест", title: "Пробвайте първо една бутилка", text: "Всички формули са на една и съща цена, така че лесно можете да тествате един целеви спрей, преди да разширите рутината си.", cta: "Избери по цел", href: "/#products", badge: "Лесен избор" }
    ],
    metrics: [{ num: "2 000+", sub: "доволни клиенти", accent: false }, { num: "€0.67", sub: "на ден, за бутилка", accent: true }, { num: "1 ден", sub: "доставка от България", accent: false }],
    trustPoints: [{ icon: "lab", label: "Лабораторно тествани" }, { icon: "natural", label: "100% натурални" }, { icon: "bulgaria", label: "Произведени в България" }, { icon: "guarantee", label: "30 дни гаранция" }, { icon: "vegan", label: "Подходящи за вегани" }, { icon: "fruiting", label: "Само плодни тела" }],
    howHeading: "Как работи",
    howText: "Три лесни стъпки за гъбена рутина, която наистина пасва на модерния начин на живот.",
    howSteps: [{ step: "1", title: "Разклатете", text: "Активирайте екстракта преди всяка употреба." }, { step: "2", title: "Впръскайте", text: "Използвайте 5 до 7 впръсквания под езика." }, { step: "3", title: "Бъдете постоянни", text: "Използвайте всеки ден 2 до 4 седмици, за да усетите пълната рутина." }],
    comparisonHeading: "Коя гъба е най-подходяща за вас?",
    comparisonText: "Всяка формула е насочена към различна цел. Сравнете ги, за да откриете своята, или започнете с Микс 5 гъби за по-широко покритие.",
    comparisonGoals: { "lions-mane": "Фокус и памет", cordyceps: "Енергия и издръжливост", reishi: "Спокойствие и баланс", shiitake: "Ежедневна жизненост", chaga: "Антиоксидантна защита", mix: "Пълна подкрепа" },
    traitLabels: { focus: "Фокус", energy: "Енергия", sleep: "Сън", immunity: "Имунитет", antioxidant: "Антиоксиданти" },
    comparisonShop: "Виж",
    comparisonBuy: "Купи",
    originEyebrow: "Нашият произход",
    originTitle: "От българските гори до вашия ежедневен ритуал",
    originTextOne: "InnoVAherb е създаден, за да превърне тихата сила на лечебните гъби в модерен ежедневен навик. Използваме съставки с произход от България и премиум спрей формат, за да получават клиентите по-чист и практичен път към фокус, енергия, баланс, жизненост и цялостна подкрепа.",
    originTextTwo: "Целта не е сложност, а постоянство. Всяка бутилка е създадена да бъде лесна за разбиране, лесна за употреба и лесна за повторна поръчка, защото рутината наистина пасва на реалния живот.",
    originCta: "Научете нашата история",
    reviewsHeading: "Какво споделят нашите клиенти",
    aggregateReviewLabel: "★★★★★ Средна оценка 4.9 · 800+ потвърдени отзива",
    verifiedPurchase: "Потвърдена покупка",
    reviews: [
      { initials: "MK", name: "Maria K., Sofia", text: "Забелязах истинска разлика във фокуса си, откакто започнах със спрея Lion's Mane. Пасва идеално на сутрешната ми работна рутина." },
      { initials: "SD", name: "Stefan D., Plovdiv", text: "Cordyceps ми дава чист прилив на енергия преди тренировка. Няма треперене, само стабилен тонус и по-добра издръжливост." },
      { initials: "EV", name: "Elena V., Varna", text: "Reishi стана част от вечерния ми ритуал. Спя по-добре и се чувствам много по-балансирана през напрегнати седмици." },
      { initials: "PM", name: "Petya M., Varna", text: "След три седмици усещам реална разлика в това колко спокойна и концентрирана съм под напрежение." },
      { initials: "BT", name: "Boris T., Burgas", text: "Спрей форматът прави почти невъзможно да пропуснеш дневната доза. Просто впръскваш и продължаваш. Толкова е лесно." },
      { initials: "AV", name: "Aneta V., Sofia", text: "Препоръчах InnoVAherb на целия си офис. Трима колеги вече започнаха собствена рутина и всички са доволни." }
    ],
    newsletterHeading: "Готови ли сте за първата си бутилка?",
    newsletterText: "Започнете с Микс 5 гъби за най-лесния първи избор или разгледайте по цел, ако вече знаете какъв резултат търсите най-много.",
    newsletterProof: "Бърза доставка от България · 35 мл бутилка · 30 дни гаранция",
    newsletterPlaceholder: "Въведете вашия имейл",
    newsletterButton: "Започнете с бестселъра",
    newsletterNote: "Ако търсите по-конкретна формула, разгледайте цялата колекция.",
    faqHeading: "Често задавани въпроси за нашите спрейове с гъбени екстракти",
    faqText: "Вижте бързи отговори за това как работят спрейовете InnoVAherb, с коя формула да започнете и как се извършва доставката в България.",
    faqs: [
      { question: "С какво InnoVAherb се различава от капсулите или праховете?", answer: "InnoVAherb използва бърз и удобен спрей формат, който е по-лесен за носене, по-лесен за дозиране и по-лесен за повтаряне всеки ден от капсули, чайове или прахообразни смеси." },
      { question: "С кой гъбен спрей е добре да започна?", answer: "Повечето нови клиенти започват с Микс 5 гъби за по-широка подкрепа, а след това добавят по-фокусирана формула като Лъвска грива, Кордицепс или Рейши според основната си цел." },
      { question: "Доставяте ли в цяла България?", answer: "Да. InnoVAherb в момента доставя в рамките на България, а поръчките над 50 EUR получават безплатна доставка." },
      { question: "Как да използвам спрейовете всеки ден?", answer: "Разклатете бутилката, впръскайте 5 до 7 пъти под езика, задръжте за кратко и използвайте постоянно като част от дневната си рутина." },
      { question: "Колко екстракт има във всяка бутилка?", answer: "Всяка бутилка InnoVAherb съдържа 35 мл и е предназначена за около 30 дневни приема при употреба според указанията." },
      { question: "Мога ли да комбинирам два спрея в една рутина?", answer: "Да. Много клиенти комбинират една дневна формула с една вечерна или по-широка формула, за да покрият повече от една цел, без да усложняват рутината." },
      { question: "Колко бързо обикновено се усеща разлика?", answer: "Някои клиенти усещат ползите още през първите дни, но най-добрите резултати обикновено идват след 2 до 4 седмици постоянна ежедневна употреба." },
      { question: "Лесно ли е да носите и използвате спрейовете в движение?", answer: "Да. Компактният формат от 35 мл влиза лесно в чанта, чекмедже на бюро или спортен сак и прави постоянството по-лесно всеки ден." }
    ],
  },
  ru: {
    metadataTitle: "Болгарские спреи с грибными экстрактами | InnoVAherb",
    metadataDescription: "Купите болгарские спреи с грибными экстрактами для концентрации, энергии, баланса, жизненного тонуса и ежедневной поддержки. Откройте шесть формул InnoVAherb.",
    trusted: "Нам доверяют более 2 000 покупателей по всей Европе",
    title: "Болгарские спреи с грибными экстрактами для ежедневной концентрации, энергии и жизненного тонуса",
    subtitle: "Откройте премиальные болгарские спреи с грибными экстрактами для концентрации, энергии, баланса, иммунной поддержки и более удобного ежедневного приема.",
    shop: "Перейти к коллекции",
    how: "Как это работает",
    firstPurchase: "Рекомендуемый первый заказ",
    firstPurchaseTitle: "Начните со смеси из 5 грибов",
    firstPurchaseText: "Самый простой старт, если вы хотите одну бутылочку для поддержки сразу нескольких целей.",
    firstPurchaseCta: "К бестселлеру",
    imageText: "Спреи InnoVAherb с грибными экстрактами созданы для тех, кто хочет более простую wellness-рутину, удобную ежедневную дозировку и формулы под понятные цели: ясность мышления, естественную энергию, вечерний баланс и ежедневную устойчивость.",
    shopByGoal: "Выберите по цели",
    shopByGoalText: "У каждого гриба своя роль. Выберите нужный результат или начните со смеси, если хотите самый простой первый заказ.",
    freeShipping: "Бесплатная доставка",
    freeShippingText: "Для заказов по Болгарии от 50 EUR.",
    ritual: "Ежедневный ритуал",
    ritualText: "Несколько распылений за секунды, без капсул и подготовки.",
    bestSeller: "Бестселлер",
    bestSellerText: "Начните со смеси из 5 грибов, если не уверены, что выбрать.",
    offerHeading: "Выберите лучший первый заказ",
    offerText: "Выберите самый удобный путь: бестселлер все-в-одном, рутину из двух бутылочек или одну формулу под четкую задачу.",
    offerCards: [
      { eyebrow: "Лучший старт", title: "Начните со смеси из 5 грибов", text: "Самая простая отправная точка для первого заказа, если вы хотите одну бутылочку для нескольких задач.", cta: "К смеси", href: "/products/mix", badge: "Бестселлер" },
      { eyebrow: "Порог бесплатной доставки", title: "Соберите рутину из двух бутылочек", text: "Многие покупатели сочетают дневной спрей с более широкой или вечерней формулой, чтобы закрыть больше одной цели и получить бесплатную доставку.", cta: "Смотреть сочетания", href: "/#products", badge: "Самый популярный" },
      { eyebrow: "Низкий порог входа", title: "Попробуйте одну бутылочку", text: "Все формулы стоят одинаково, поэтому удобно начать с одного целевого спрея, а потом расширить рутину.", cta: "Выбрать по цели", href: "/#products", badge: "Простой вариант" }
    ],
    metrics: [{ num: "2 000+", sub: "довольных покупателей", accent: false }, { num: "€0.67", sub: "в день за бутылочку", accent: true }, { num: "1 день", sub: "отправка из Болгарии", accent: false }],
    trustPoints: [{ icon: "lab", label: "Лабораторно протестировано" }, { icon: "natural", label: "100% натурально" }, { icon: "bulgaria", label: "Сделано в Болгарии" }, { icon: "guarantee", label: "30-дневная гарантия" }, { icon: "vegan", label: "Подходит веганам" }, { icon: "fruiting", label: "Только плодовые тела" }],
    howHeading: "Как это работает",
    howText: "Три простых шага, чтобы встроить грибную рутину в реальную повседневную жизнь.",
    howSteps: [{ step: "1", title: "Встряхните", text: "Активируйте экстракт перед каждым использованием." }, { step: "2", title: "Распылите", text: "Сделайте 5-7 распылений под язык." }, { step: "3", title: "Соблюдайте регулярность", text: "Используйте ежедневно 2-4 недели, чтобы полностью почувствовать рутину." }],
    comparisonHeading: "Какой гриб подойдет именно вам?",
    comparisonText: "Каждая формула работает на свою цель. Сравните их и найдите подходящий вариант или начните со смеси 5 грибов для более широкой поддержки.",
    comparisonGoals: { "lions-mane": "Концентрация и память", cordyceps: "Энергия и выносливость", reishi: "Спокойствие и баланс", shiitake: "Ежедневный тонус", chaga: "Антиоксидантная поддержка", mix: "Комплексная поддержка" },
    traitLabels: { focus: "Концентрация", energy: "Энергия", sleep: "Сон", immunity: "Иммунитет", antioxidant: "Антиоксиданты" },
    comparisonShop: "Смотреть",
    comparisonBuy: "Купить",
    originEyebrow: "Наше происхождение",
    originTitle: "Из болгарских лесов в ваш ежедневный ритуал",
    originTextOne: "InnoVAherb был создан, чтобы превратить спокойную силу лечебных грибов в современную ежедневную привычку. Мы используем ингредиенты болгарского происхождения и удобный спрей-формат, чтобы дать покупателям более практичный путь к концентрации, энергии, балансу и ежедневной поддержке.",
    originTextTwo: "Наша цель - не усложнять, а помогать сохранять регулярность. Каждая бутылочка должна быть понятной, удобной и такой, к которой легко возвращаться снова.",
    originCta: "Узнать нашу историю",
    reviewsHeading: "Что говорят наши покупатели",
    aggregateReviewLabel: "★★★★★ Средняя оценка 4.9 - 800+ подтвержденных отзывов",
    verifiedPurchase: "Подтвержденная покупка",
    reviews: [
      { initials: "MK", name: "Maria K., Sofia", text: "Я действительно заметила улучшение концентрации после того, как начала использовать спрей Lion's Mane. Он идеально вписался в мою утреннюю рабочую рутину." },
      { initials: "SD", name: "Stefan D., Plovdiv", text: "Cordyceps дает мне чистый заряд энергии перед тренировкой. Без нервозности, только ровный тонус и лучшая выносливость." },
      { initials: "EV", name: "Elena V., Varna", text: "Reishi стал частью моего вечернего ритуала. Я лучше сплю и гораздо спокойнее чувствую себя в напряженные недели." },
      { initials: "PM", name: "Petya M., Varna", text: "Через три недели я заметила реальную разницу в том, насколько спокойно и собранно чувствую себя под давлением." },
      { initials: "BT", name: "Boris T., Burgas", text: "Формат спрея почти не оставляет шансов забыть дневную дозу. Просто распылил и пошел дальше. Очень удобно." },
      { initials: "AV", name: "Aneta V., Sofia", text: "Я порекомендовала InnoVAherb всему нашему офису. Трое коллег уже начали свою рутину, и все довольны." }
    ],
    newsletterHeading: "Готовы выбрать первую бутылочку?",
    newsletterText: "Начните со смеси из 5 грибов, если хотите самый простой первый заказ, или выберите формулу по цели, если уже понимаете, какого результата ждете.",
    newsletterProof: "Быстрая доставка по Болгарии · бутылочка 35 мл · 30-дневная гарантия",
    newsletterPlaceholder: "Введите ваш email",
    newsletterButton: "Начать с бестселлера",
    newsletterNote: "Если вам нужна более точная формула, откройте всю коллекцию.",
    faqHeading: "Часто задаваемые вопросы о наших спреях с грибными экстрактами",
    faqText: "Короткие ответы о том, как работают спреи InnoVAherb, с какой формулы лучше начать и как устроена доставка по Болгарии.",
    faqs: [
      { question: "Чем InnoVAherb отличается от капсул и порошков?", answer: "InnoVAherb использует быстрый и удобный формат спрея, который легче носить с собой, легче дозировать и проще использовать каждый день, чем капсулы, чаи или порошковые смеси." },
      { question: "С какого грибного спрея лучше начать?", answer: "Большинство новых покупателей начинают со смеси из 5 грибов для более широкой поддержки, а затем добавляют более целевую формулу, например Lion's Mane, Cordyceps или Reishi, в зависимости от основной задачи." },
      { question: "Вы доставляете по всей Болгарии?", answer: "Да. Сейчас InnoVAherb доставляет по Болгарии, а заказы свыше 50 EUR получают бесплатную доставку." },
      { question: "Как использовать спреи каждый день?", answer: "Встряхните бутылочку, распылите 5-7 раз под язык, подержите немного и используйте регулярно как часть вашей ежедневной рутины." },
      { question: "Сколько экстракта в каждой бутылочке?", answer: "Каждая бутылочка InnoVAherb содержит 35 мл и рассчитана примерно на 30 ежедневных порций при использовании по инструкции." },
      { question: "Можно ли сочетать два спрея в одной рутине?", answer: "Да. Многие покупатели сочетают одну дневную формулу с вечерней или более широкой формулой, чтобы закрыть больше одной цели без лишней сложности." },
      { question: "Как быстро обычно замечают разницу?", answer: "Некоторые покупатели замечают эффект уже в первые дни, но лучший результат обычно приходит после 2-4 недель регулярного ежедневного использования." },
      { question: "Удобно ли носить спреи с собой?", answer: "Да. Компактный формат 35 мл легко помещается в сумку, ящик стола или спортивную сумку, поэтому соблюдать рутину намного проще." }
    ],
  },
  sv: {
    metadataTitle: "Bulgariska sprays med svampextrakt | InnoVAherb",
    metadataDescription: "Handla bulgariska sprays med svampextrakt för fokus, energi, balans, vitalitet och dagligt stöd. Upptäck sex formulor från InnoVAherb.",
    trusted: "Betrott av 2 000+ kunder runt om i Europa",
    title: "Bulgariska sprays med svampextrakt för dagligt fokus, energi och vitalitet",
    subtitle: "Upptäck premiumsprayer med bulgariska svampextrakt för fokus, energi, balans, immunstöd och en enklare daglig rutin i snabbt oralt format.",
    shop: "Handla kollektionen",
    how: "Så fungerar det",
    firstPurchase: "Rekommenderad första beställning",
    firstPurchaseTitle: "Börja med 5-svampsmixen",
    firstPurchaseText: "Det enklaste valet om du vill att en flaska ska täcka mer än ett dagligt mål.",
    firstPurchaseCta: "Till bästsäljaren",
    imageText: "InnoVAherbs sprays med svampextrakt är skapade för kunder som vill ha en enklare wellnessrutin, renare daglig dosering och formulor anpassade efter tydliga mål som mental skärpa, naturlig energi, kvällsbalans och vardaglig motståndskraft.",
    shopByGoal: "Handla efter mål",
    shopByGoalText: "Varje svamp har sin roll. Välj det resultat du vill ha eller börja med mixen om du vill ha den enklaste första beställningen.",
    freeShipping: "Fri frakt",
    freeShippingText: "För beställningar i Bulgarien över 50 EUR.",
    ritual: "Daglig rutin",
    ritualText: "Spraya på sekunder, inga kapslar och ingen förberedelse.",
    bestSeller: "Bästsäljare",
    bestSellerText: "Börja med 5-svampsmixen om du är osäker.",
    offerHeading: "Välj den bästa första beställningen",
    offerText: "Välj den köpvåg som känns enklast: en bästsäljande allt-i-ett-spray, en tvåflaskrutin eller en formel för ett tydligt mål.",
    offerCards: [
      { eyebrow: "Bästa starten", title: "Börja med 5-svampsmixen", text: "Den enklaste utgångspunkten för förstagångsköpare som vill ha en flaska som täcker flera mål.", cta: "Handla mixen", href: "/products/mix", badge: "Bästsäljare" },
      { eyebrow: "Nivå för fri frakt", title: "Bygg en rutin med två flaskor", text: "Många kunder kombinerar en dagspray med en bredare kvälls- eller heldagsformula för att täcka fler än ett mål och kvalificera sig för fri frakt.", cta: "Se kombinationer", href: "/#products", badge: "Mest populär" },
      { eyebrow: "Lätt att prova", title: "Prova en flaska först", text: "Alla formulor har samma pris, så det är enkelt att testa en riktad spray innan du bygger ut din rutin.", cta: "Välj efter mål", href: "/#products", badge: "Enkelt val" }
    ],
    metrics: [{ num: "2 000+", sub: "nöjda kunder", accent: false }, { num: "€0.67", sub: "per dag och flaska", accent: true }, { num: "1 dag", sub: "leverans från Bulgarien", accent: false }],
    trustPoints: [{ icon: "lab", label: "Laboratorietestad" }, { icon: "natural", label: "100 % naturlig" }, { icon: "bulgaria", label: "Tillverkad i Bulgarien" }, { icon: "guarantee", label: "30 dagars garanti" }, { icon: "vegan", label: "Vegansk" }, { icon: "fruiting", label: "Endast fruktkropp" }],
    howHeading: "Så fungerar det",
    howText: "Tre enkla steg för att bygga en svamprutin som faktiskt passar ett modernt liv.",
    howSteps: [{ step: "1", title: "Skaka", text: "Aktivera extraktet före varje användning." }, { step: "2", title: "Spraya", text: "Använd 5 till 7 spray under tungan." }, { step: "3", title: "Var konsekvent", text: "Använd dagligen i 2 till 4 veckor för att känna hela rutinen." }],
    comparisonHeading: "Vilken svamp passar dig?",
    comparisonText: "Varje formula är riktad mot ett annat mål. Jämför dem för att hitta rätt val eller börja med 5-mixen för bredare stöd.",
    comparisonGoals: { "lions-mane": "Fokus och minne", cordyceps: "Energi och uthållighet", reishi: "Lugn och balans", shiitake: "Daglig vitalitet", chaga: "Antioxidanter", mix: "Helhetsspektrum" },
    traitLabels: { focus: "Fokus", energy: "Energi", sleep: "Sömn", immunity: "Immunstöd", antioxidant: "Antioxidanter" },
    comparisonShop: "Se",
    comparisonBuy: "Köp",
    originEyebrow: "Vårt ursprung",
    originTitle: "Från bulgariska skogar till din dagliga rutin",
    originTextOne: "InnoVAherb skapades för att göra den stilla styrkan i medicinalsvampar till en modern vardagsvana. Vi använder ingredienser från Bulgarien och ett premiumsprayformat så att kunder får en renare och mer praktisk väg till fokus, energi, balans, vitalitet och dagligt stöd.",
    originTextTwo: "Målet är inte komplexitet utan konsekvens. Varje flaska är byggd för att vara lätt att förstå, lätt att använda och lätt att beställa igen eftersom rutinen verkligen passar vardagen.",
    originCta: "Läs vår historia",
    reviewsHeading: "Vad våra kunder säger",
    aggregateReviewLabel: "★★★★★ 4.9 i snitt - 800+ verifierade omdömen",
    verifiedPurchase: "Verifierat köp",
    reviews: [
      { initials: "MK", name: "Maria K., Sofia", text: "Jag har märkt en verklig skillnad i mitt fokus sedan jag började med Lion's Mane-sprayen. Den passar perfekt i min morgonrutin för arbete." },
      { initials: "SD", name: "Stefan D., Plovdiv", text: "Cordyceps ger mig ett rent energilyft före träning. Ingen skakighet, bara jämn drivkraft och bättre uthållighet." },
      { initials: "EV", name: "Elena V., Varna", text: "Reishi blev en del av min kvällsrutin. Jag sover bättre och känner mig mycket mer balanserad under stressiga veckor." },
      { initials: "PM", name: "Petya M., Varna", text: "Efter tre veckor märker jag en tydlig skillnad i hur lugn och fokuserad jag känner mig under press." },
      { initials: "BT", name: "Boris T., Burgas", text: "Sprayformatet gör det nästan omöjligt att glömma den dagliga dosen. Bara spraya och gå vidare. Så enkelt är det." },
      { initials: "AV", name: "Aneta V., Sofia", text: "Jag rekommenderade InnoVAherb till hela kontoret. Tre kollegor startade sina egna rutiner och alla är nöjda." }
    ],
    newsletterHeading: "Redo för din första flaska?",
    newsletterText: "Börja med 5-svampsmixen om du vill ha det enklaste första köpet, eller handla efter mål om du redan vet vilket resultat som är viktigast för dig.",
    newsletterProof: "Snabb leverans från Bulgarien · 35 ml flaska · 30 dagars garanti",
    newsletterPlaceholder: "Ange din e-post",
    newsletterButton: "Börja med bästsäljaren",
    newsletterNote: "Vill du ha en mer riktad formula? Bläddra igenom hela kollektionen.",
    faqHeading: "Vanliga frågor om våra sprays med svampextrakt",
    faqText: "Snabba svar om hur InnoVAherb-sprayer fungerar, vilken formula du bör börja med och hur leverans i Bulgarien fungerar.",
    faqs: [
      { question: "Vad skiljer InnoVAherb från kapslar eller pulver?", answer: "InnoVAherb använder ett snabbt och bekvämt sprayformat som är lättare att bära med sig, lättare att dosera och lättare att upprepa varje dag än kapslar, teer eller pulverblandningar." },
      { question: "Vilken svampspray bör jag börja med?", answer: "De flesta förstagångskunder börjar med 5-svampsmixen för bredare stöd och lägger sedan till en mer fokuserad formula som Lion's Mane, Cordyceps eller Reishi beroende på sitt huvudmål." },
      { question: "Levererar ni i hela Bulgarien?", answer: "Ja. InnoVAherb levererar för närvarande inom Bulgarien och beställningar över 50 EUR får fri frakt." },
      { question: "Hur använder jag sprayerna varje dag?", answer: "Skaka flaskan, spraya 5 till 7 gånger under tungan, håll kort och använd konsekvent som en del av din dagliga rutin." },
      { question: "Hur mycket extrakt finns i varje flaska?", answer: "Varje InnoVAherb-flaska innehåller 35 ml och är utformad för cirka 30 dagliga portioner när den används enligt rekommendation." },
      { question: "Kan jag kombinera två sprayer i en rutin?", answer: "Ja. Många kunder kombinerar en dagsformula med en kvälls- eller bredare stödformula för att matcha mer än ett mål utan att göra rutinen komplicerad." },
      { question: "Hur snabbt märker kunder vanligtvis skillnad?", answer: "Vissa kunder märker fördelarna redan under de första dagarna, men de bästa resultaten kommer oftast efter 2 till 4 veckors konsekvent daglig användning." },
      { question: "Är sprayerna enkla att ta med och använda på språng?", answer: "Ja. Det kompakta 35 ml-formatet får lätt plats i en väska, skrivbordslåda eller gymbag och gör det enklare att vara konsekvent varje dag." }
    ],
  },
};
