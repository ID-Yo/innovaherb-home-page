import { Locale } from "@/lib/types";

export const aboutPageContent: Record<Locale, { metadataTitle: string; metadataDescription: string; eyebrow: string; title: string; paragraphs: string[] }> = {
  en: {
    metadataTitle: "About InnoVAherb | Bulgarian Mushroom Spray Brand",
    metadataDescription:
      "Learn how InnoVAherb builds premium Bulgarian mushroom extract sprays designed for practical daily wellness routines.",
    eyebrow: "About us",
    title: "Bulgarian mushroom extracts built for daily use.",
    paragraphs: [
      "InnoVAherb was created for people who want natural supplement routines that feel practical instead of complicated. The collection starts with premium mushroom extracts and turns them into simple oral sprays that fit workdays, home routines, and travel.",
      "The brand position is direct: one spray, one clear use case, one premium but accessible daily ritual. That clarity carries into the storefront, the product naming, and the order flow. Every product page explains what the formula is for, how to use it, and how it fits into a real routine.",
      "As the store grows, the focus stays the same: clear product information, a straightforward checkout experience, and visibility into every order from payment to fulfillment.",
    ],
  },
  bg: {
    metadataTitle: "За InnoVAherb | Българска марка за гъбени спрейове",
    metadataDescription:
      "Научете как InnoVAherb създава премиум български спрейове с гъбени екстракти за практична ежедневна уелнес рутина.",
    eyebrow: "За нас",
    title: "Български гъбени екстракти, създадени за ежедневна употреба.",
    paragraphs: [
      "InnoVAherb е създаден за хора, които искат натурална рутина с добавки, която да бъде практична, а не сложна. Колекцията започва с премиум гъбени екстракти и ги превръща в лесни орални спрейове за работни дни, домашна рутина и пътуване.",
      "Позиционирането на марката е ясно: един спрей, една конкретна цел, един премиум, но достъпен ежедневен ритуал. Тази яснота се вижда в магазина, в имената на продуктите и в процеса на поръчка.",
      "Докато магазинът расте, фокусът остава същият: ясна продуктова информация, лесно финализиране на поръчката и прозрачност за всеки етап от изпълнението.",
    ],
  },
  ru: {
    metadataTitle: "О InnoVAherb | Болгарский бренд грибных спреев",
    metadataDescription:
      "Узнайте, как InnoVAherb создает премиальные болгарские спреи с грибными экстрактами для практичной ежедневной рутины.",
    eyebrow: "О нас",
    title: "Болгарские грибные экстракты, созданные для ежедневного использования.",
    paragraphs: [
      "InnoVAherb создан для людей, которые хотят, чтобы натуральная рутина с добавками была практичной, а не сложной. Коллекция начинается с премиальных грибных экстрактов и превращает их в удобные оральные спреи для работы, дома и поездок.",
      "Позиционирование бренда прямое: один спрей, одна понятная задача, один премиальный, но доступный ежедневный ритуал. Эта ясность сохраняется и в магазине, и в названиях продуктов, и в процессе заказа.",
      "По мере роста магазина фокус остается тем же: понятная информация о продуктах, простой процесс оформления и прозрачность по каждому заказу от оплаты до отправки.",
    ],
  },
  sv: {
    metadataTitle: "Om InnoVAherb | Bulgariskt varumarke for svampsprayer",
    metadataDescription:
      "Las hur InnoVAherb bygger premiumsprayer med bulgariska svampextrakt for praktiska dagliga rutiner.",
    eyebrow: "Om oss",
    title: "Bulgariska svampextrakt utvecklade for daglig anvandning.",
    paragraphs: [
      "InnoVAherb skapades for personer som vill ha naturliga kosttillskottsrutiner som kanns praktiska i stallet for komplicerade. Kollektionen borjar med premiumextrakt fran svamp och gor dem till enkla orala sprayer for arbetsdagar, hemmarutiner och resor.",
      "Varumarkets position ar tydlig: en spray, ett klart anvandningsomrade, en premium men tillganglig daglig rutin. Den tydligheten finns i butiken, i produktnamnen och i bestallningsflodet.",
      "När butiken växer är fokus detsamma: tydlig produktinformation, enkel checkout och full insyn i varje beställning från betalning till leverans.",
    ],
  },
};

export const blogPageContent: Record<Locale, { metadataTitle: string; metadataDescription: string; eyebrow: string; title: string; label: string; posts: Array<{ title: string; excerpt: string }> }> = {
  en: {
    metadataTitle: "InnoVAherb Blog | Mushroom Wellness and Product Guides",
    metadataDescription: "Read InnoVAherb articles about mushroom wellness routines, supplement shopping, and product guidance.",
    eyebrow: "Editorial",
    title: "Brand, ingredient, and wellness notes.",
    label: "Journal",
    posts: [
      { title: "How mushroom spray formats support consistency", excerpt: "A practical look at why easy daily rituals outperform complicated supplement stacks for many shoppers." },
      { title: "Choosing between Lion's Mane, Reishi, and Cordyceps", excerpt: "A simple guide for choosing a mushroom spray based on the day you want to have, not just the ingredient name." },
      { title: "What a clean e-commerce supplement experience should feel like", excerpt: "Why product clarity, transparent pricing, and reliable fulfillment matter as much as beautiful packaging." },
    ],
  },
  bg: {
    metadataTitle: "Блог на InnoVAherb | Насоки за гъбена уелнес рутина",
    metadataDescription: "Прочетете статии на InnoVAherb за гъбени рутини, избор на добавки и ориентиране в продуктите.",
    eyebrow: "Редакционно",
    title: "Бележки за марката, съставките и уелнес рутината.",
    label: "Статия",
    posts: [
      { title: "Защо спрей форматът помага за по-добро постоянство", excerpt: "Практичен поглед към това защо лесните ежедневни ритуали често работят по-добре от сложните режими с много добавки." },
      { title: "Как да изберете между Лъвска грива, Рейши и Кордицепс", excerpt: "Лесен ориентир за избор на спрей според начина, по който искате да се чувствате през деня, а не само според името на съставката." },
      { title: "Как трябва да изглежда едно чисто онлайн пазаруване на добавки", excerpt: "Защо яснотата на продукта, прозрачната цена и надеждното изпълнение на поръчките са толкова важни, колкото и красивата опаковка." },
    ],
  },
  ru: {
    metadataTitle: "Блог InnoVAherb | Грибные wellness-рутины и гиды по продуктам",
    metadataDescription: "Читайте материалы InnoVAherb о грибных рутинах, выборе добавок и понятной покупке wellness-продуктов.",
    eyebrow: "Редакция",
    title: "Заметки о бренде, ингредиентах и ежедневной wellness-рутине.",
    label: "Материал",
    posts: [
      { title: "Почему формат спрея помогает соблюдать рутину", excerpt: "Практичный взгляд на то, почему простые ежедневные ритуалы часто работают лучше, чем сложные наборы добавок." },
      { title: "Как выбрать между Lion's Mane, Reishi и Cordyceps", excerpt: "Простое руководство по выбору грибного спрея исходя из того, каким вы хотите видеть свой день, а не только по названию ингредиента." },
      { title: "Каким должен быть понятный онлайн-опыт покупки добавок", excerpt: "Почему ясность продукта, прозрачные цены и надежное исполнение заказов так же важны, как и красивая упаковка." },
    ],
  },
  sv: {
    metadataTitle: "InnoVAherb-bloggen | Svampguides och wellnessrutiner",
    metadataDescription: "Las InnoVAherbs artiklar om svamprutiner, kosttillskottskop och tydlig produktvagledning.",
    eyebrow: "Redaktionellt",
    title: "Anteckningar om varumarket, ingredienserna och wellnessrutinen.",
    label: "Artikel",
    posts: [
      { title: "Hur sprayformat med svamp stoder konsekvens", excerpt: "En praktisk genomgang av varfor enkla dagliga rutiner ofta fungerar battre an komplicerade tillskottsupplagg." },
      { title: "Att valja mellan Lion's Mane, Reishi och Cordyceps", excerpt: "En enkel guide for att valja en svampspray utifran vilken dag du vill ha, inte bara ingrediensnamnet." },
      { title: "Hur en tydlig e-handelsupplevelse for kosttillskott bor kannas", excerpt: "Varfor produktklarhet, transparent prissattning och tillforlitlig leverans ar lika viktiga som vacker forpackning." },
    ],
  },
};

export const contactPageContent: Record<Locale, { metadataTitle: string; metadataDescription: string; eyebrow: string; title: string; body: string; email: string; phone: string; faqTitle: string; blocks: Array<{ title: string; text: string }> }> = {
  en: {
    metadataTitle: "Contact InnoVAherb | Support and Order Help",
    metadataDescription: "Contact InnoVAherb for product questions, shipping support, wholesale inquiries, and order assistance in Bulgaria.",
    eyebrow: "Support",
    title: "Need help with a product or order?",
    body: "Reach out for product questions, wholesale requests, or order support. We currently deliver across Bulgaria and are happy to help with shipping, product selection, and after-purchase care.",
    email: "Email",
    phone: "Phone",
    faqTitle: "Quick support answers",
    blocks: [
      { title: "Shipping coverage", text: "We currently ship orders across Bulgaria." },
      { title: "Payments", text: "Secure card payments are handled via Stripe Checkout." },
      { title: "Returns", text: "Visit the shipping and returns page for delivery details, return guidance, and the next step if you need help." },
    ],
  },
  bg: {
    metadataTitle: "Контакти с InnoVAherb | Поддръжка и помощ при поръчка",
    metadataDescription: "Свържете се с InnoVAherb за въпроси за продуктите, доставка, заявки на едро и съдействие при поръчки в България.",
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
  ru: {
    metadataTitle: "Контакты InnoVAherb | Поддержка и помощь по заказам",
    metadataDescription: "Свяжитесь с InnoVAherb по вопросам о продуктах, доставке, оптовых запросах и заказах по Болгарии.",
    eyebrow: "Поддержка",
    title: "Нужна помощь с продуктом или заказом?",
    body: "Свяжитесь с нами по вопросам о продуктах, оптовых запросах или поддержке по заказу. Сейчас мы доставляем по всей Болгарии и с радостью помогаем с доставкой, выбором продукта и поддержкой после покупки.",
    email: "Email",
    phone: "Телефон",
    faqTitle: "Коротко о главном",
    blocks: [
      { title: "География доставки", text: "Сейчас мы отправляем заказы по всей Болгарии." },
      { title: "Оплата", text: "Безопасная оплата картой проходит через Stripe Checkout." },
      { title: "Возвраты", text: "Подробности о доставке и возвратах смотрите на отдельной странице поддержки." },
    ],
  },
  sv: {
    metadataTitle: "Kontakta InnoVAherb | Support och hjalp med bestallningar",
    metadataDescription: "Kontakta InnoVAherb for fragor om produkter, frakt, grossistforfragan och bestallningshjalp i Bulgarien.",
    eyebrow: "Support",
    title: "Behöver du hjälp med en produkt eller beställning?",
    body: "Hör av dig om du har frågor om produkter, grossistförfrågningar eller behöver hjälp med en beställning. Vi levererar för närvarande i hela Bulgarien och hjälper gärna till med frakt, produktval och support efter köpet.",
    email: "E-post",
    phone: "Telefon",
    faqTitle: "Snabba svar",
    blocks: [
      { title: "Leveransomrade", text: "Vi skickar for narvarande bestallningar inom hela Bulgarien." },
      { title: "Betalningar", text: "Sakra kortbetalningar hanteras via Stripe Checkout." },
      { title: "Returer", text: "Se sidan om frakt och returer för tydliga detaljer om leverans, returer och hur du får hjälp." },
    ],
  },
};

export const shippingReturnsPageContent: Record<Locale, { metadataTitle: string; metadataDescription: string; eyebrow: string; title: string; shippingTitle: string; shippingText: string; returnsTitle: string; returnsText: string }> = {
  en: {
    metadataTitle: "Shipping and Returns | InnoVAherb",
    metadataDescription: "Review Bulgaria shipping, order support, and return guidance for the InnoVAherb storefront.",
    eyebrow: "Support policy",
    title: "Shipping and returns",
    shippingTitle: "Shipping",
    shippingText: "We currently deliver across Bulgaria. Orders over EUR 50 receive free shipping, while orders below that threshold show a flat delivery fee at checkout before payment.",
    returnsTitle: "Returns",
    returnsText: "If you need help with a return or refund, contact our support team and we will guide you through the next steps as quickly as possible.",
  },
  bg: {
    metadataTitle: "Доставка и връщане | InnoVAherb",
    metadataDescription: "Прегледайте информацията за доставка в България, обслужване на поръчки и съдействие при връщане в магазина на InnoVAherb.",
    eyebrow: "Политика за поддръжка",
    title: "Доставка и връщане",
    shippingTitle: "Доставка",
    shippingText: "В момента доставяме в рамките на България. Поръчките над 50 EUR получават безплатна доставка, а за поръчки под тази стойност таксата се показва при checkout преди плащане.",
    returnsTitle: "Връщане",
    returnsText: "Ако имате нужда от съдействие за връщане или възстановяване на сума, свържете се с нашия екип и ще ви насочим през следващите стъпки възможно най-бързо.",
  },
  ru: {
    metadataTitle: "Доставка и возврат | InnoVAherb",
    metadataDescription: "Ознакомьтесь с доставкой по Болгарии, поддержкой по заказам и информацией о возвратах в магазине InnoVAherb.",
    eyebrow: "Политика поддержки",
    title: "Доставка и возврат",
    shippingTitle: "Доставка",
    shippingText: "Сейчас мы доставляем по Болгарии. Заказы свыше 50 EUR получают бесплатную доставку, а для заказов ниже этого порога фиксированная стоимость отображается на checkout до оплаты.",
    returnsTitle: "Возврат",
    returnsText: "Если вам нужна помощь с возвратом или возвратом средств, свяжитесь с нашей службой поддержки, и мы быстро подскажем следующие шаги.",
  },
  sv: {
    metadataTitle: "Frakt och returer | InnoVAherb",
    metadataDescription: "Las om frakt inom Bulgarien, support for bestallningar och returinformation for InnoVAherbs butik.",
    eyebrow: "Supportpolicy",
    title: "Frakt och returer",
    shippingTitle: "Frakt",
    shippingText: "Vi levererar for narvarande inom Bulgarien. Bestallningar over 50 EUR far fri frakt, medan bestallningar under den nivan visar en fast leveransavgift i checkout innan betalning.",
    returnsTitle: "Returer",
    returnsText: "Om du behober hjalp med en retur eller aterbetalning kontaktar du var support, sa guidar vi dig snabbt genom nasta steg.",
  },
};

export const privacyPolicyPageContent: Record<Locale, { metadataTitle: string; metadataDescription: string; title: string; paragraphs: string[] }> = {
  en: {
    metadataTitle: "Privacy Policy | InnoVAherb",
    metadataDescription: "Learn how InnoVAherb handles customer, checkout, and operational data for the e-commerce site.",
    title: "Privacy policy",
    paragraphs: [
      "InnoVAherb collects customer contact, shipping, and payment-related order metadata necessary to process orders and support customer service.",
      "Card details are processed by Stripe Checkout. The storefront stores only the order and payment references needed for fulfillment and operational history.",
      "Admin access is restricted to authenticated operations staff through Supabase Auth and role-controlled database access.",
    ],
  },
  bg: {
    metadataTitle: "Политика за поверителност | InnoVAherb",
    metadataDescription: "Научете как InnoVAherb обработва клиентски, checkout и оперативни данни за електронния магазин.",
    title: "Политика за поверителност",
    paragraphs: [
      "InnoVAherb събира данни за контакт, доставка и свързана с плащането информация, необходима за обработка на поръчки и обслужване на клиенти.",
      "Данните за картата се обработват чрез Stripe Checkout. Магазинът съхранява само референциите за поръчка и плащане, нужни за изпълнение и оперативна история.",
      "Административният достъп е ограничен до удостоверен оперативен екип чрез Supabase Auth и контрол на ролите в базата данни.",
    ],
  },
  ru: {
    metadataTitle: "Политика конфиденциальности | InnoVAherb",
    metadataDescription: "Узнайте, как InnoVAherb обрабатывает данные клиентов, checkout и операционные данные интернет-магазина.",
    title: "Политика конфиденциальности",
    paragraphs: [
      "InnoVAherb собирает контактные данные клиентов, данные о доставке и связанную с оплатой информацию о заказе, необходимую для обработки заказов и поддержки клиентов.",
      "Данные банковской карты обрабатываются через Stripe Checkout. Магазин хранит только ссылки на заказ и платеж, необходимые для исполнения заказа и операционной истории.",
      "Доступ администратора ограничен для авторизованных сотрудников через Supabase Auth и управление ролями в базе данных.",
    ],
  },
  sv: {
    metadataTitle: "Integritetspolicy | InnoVAherb",
    metadataDescription: "Las hur InnoVAherb hanterar kunddata, checkoutdata och operativ information for e-handeln.",
    title: "Integritetspolicy",
    paragraphs: [
      "InnoVAherb samlar in kunders kontaktuppgifter, leveransuppgifter och betalningsrelaterad ordermetadata som behovs for att hantera bestallningar och ge kundsupport.",
      "Kortuppgifter behandlas via Stripe Checkout. Butiken lagrar endast de order- och betalningsreferenser som behovs for leverans och operativ historik.",
      "Administrativ atkomst ar begransad till autentiserad driftpersonal via Supabase Auth och rollstyrd databasatkomst.",
    ],
  },
};

export const termsPageContent: Record<Locale, { metadataTitle: string; metadataDescription: string; title: string; paragraphs: string[] }> = {
  en: {
    metadataTitle: "Terms of Service | InnoVAherb",
    metadataDescription: "Read the storefront terms that govern orders, payments, and customer support for InnoVAherb.",
    title: "Terms of service",
    paragraphs: [
      "Orders placed on the InnoVAherb storefront are subject to product availability, payment confirmation, and review before dispatch.",
      "We currently ship within Bulgaria. Approved refunds are returned through the original payment method used at checkout.",
      "Customers receive email updates as their order moves from confirmation to dispatch and delivery support.",
    ],
  },
  bg: {
    metadataTitle: "Общи условия | InnoVAherb",
    metadataDescription: "Прочетете условията на магазина на InnoVAherb за поръчки, плащания и клиентска поддръжка.",
    title: "Общи условия",
    paragraphs: [
      "Поръчките в магазина на InnoVAherb зависят от наличността на продуктите, потвърждение на плащането и преглед преди изпращане.",
      "В момента доставяме в рамките на България. Одобрените възстановявания се връщат по първоначалния метод на плащане, използван при checkout.",
      "Клиентите получават имейл известия, докато поръчката преминава от потвърждение към изпращане и съдействие при доставка.",
    ],
  },
  ru: {
    metadataTitle: "Условия использования | InnoVAherb",
    metadataDescription: "Прочитайте условия интернет-магазина InnoVAherb, регулирующие заказы, оплату и клиентскую поддержку.",
    title: "Условия использования",
    paragraphs: [
      "Заказы, оформленные в магазине InnoVAherb, зависят от наличия товара, подтверждения оплаты и проверки перед отправкой.",
      "Сейчас мы доставляем в пределах Болгарии. Одобренные возвраты средств выполняются на исходный способ оплаты, использованный при checkout.",
      "Покупатели получают email-обновления по мере перехода заказа от подтверждения к отправке и поддержке по доставке.",
    ],
  },
  sv: {
    metadataTitle: "Anvandarvillkor | InnoVAherb",
    metadataDescription: "Las butiksvillkoren som reglerar bestallningar, betalningar och kundsupport hos InnoVAherb.",
    title: "Anvandarvillkor",
    paragraphs: [
      "Bestallningar som laggs i InnoVAherbs butik ar beroende av produkttillgang, betalningsbekraftelse och kontroll fore utskick.",
      "Vi skickar for narvarande inom Bulgarien. Godkanda aterbetalningar skickas tillbaka via den ursprungliga betalningsmetoden som anvandes i checkout.",
      "Kunder far uppdateringar via e-post nar bestallningen gar fran bekraftelse till utskick och leveranssupport.",
    ],
  },
};
