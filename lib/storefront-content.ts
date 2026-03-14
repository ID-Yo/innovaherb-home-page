import { ProductSlug } from "@/lib/types";

export const homeReviews = [
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
];

export const homeTrustPoints = [
  "Lab tested",
  "100% natural",
  "Made in Bulgaria",
  "Satisfaction guarantee",
  "Vegan friendly",
];

export const homeConversionPoints = [
  {
    title: "Faster daily routine",
    text: "No capsules, no mixing, and no complicated stacks. Spray, hold, and go.",
  },
  {
    title: "Simple product matching",
    text: "Each formula is tied to one clear goal, so shoppers can decide quickly with confidence.",
  },
  {
    title: "Premium but accessible",
    text: "Every spray sits at the same price point, which makes comparison and bundling easier.",
  },
];

export const homeHowItWorks = [
  {
    step: "1",
    title: "Shake",
    text: "Activate the extract before each use.",
  },
  {
    step: "2",
    title: "Spray",
    text: "Use 3-4 sprays under the tongue.",
  },
  {
    step: "3",
    title: "Thrive",
    text: "Stay consistent for 2-4 weeks to feel the full routine.",
  },
];

type ProductSalesContent = {
  rating: number;
  reviewCount: number;
  volume: string;
  shortPitch: string;
  trustBadges: string[];
  quickBenefits: string[];
  usageTitle: string;
  ingredientHighlights: string[];
  fullIngredients: string;
  reviews: Array<{
    initials: string;
    name: string;
    text: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  pairsWith: ProductSlug[];
};

export const productSalesContent: Record<ProductSlug, ProductSalesContent> = {
  "lions-mane": {
    rating: 4.9,
    reviewCount: 142,
    volume: "30ml",
    shortPitch: "A premium Lion's Mane spray designed for focus, memory support, and sharper workday performance in a fast sublingual format.",
    trustBadges: ["Lab tested", "No capsules", "Fast oral spray", "30-day guarantee"],
    quickBenefits: [
      "Supports concentration and mental clarity",
      "Fits morning work and study routines",
      "Easy to keep at your desk or in your bag",
    ],
    usageTitle: "Best for high-focus mornings, study sessions, and mentally demanding days.",
    ingredientHighlights: ["Lion's Mane extract 10:1", "Purified water", "Vegetable glycerin", "Natural preservative"],
    fullIngredients: "Purified water, Lion's Mane extract 10:1, vegetable glycerin, natural preservative, citric acid.",
    reviews: [
      { initials: "MK", name: "Maria K., Sofia", text: "My concentration is noticeably better when I use Lion's Mane consistently before work." },
      { initials: "IP", name: "Ivan P., Ruse", text: "The spray format makes it easier to stay consistent than capsules ever did." },
      { initials: "NL", name: "Nina L., Burgas", text: "I use it before deep work blocks and it helps me stay on track much longer." },
    ],
    faq: [
      { question: "When should I use Lion's Mane?", answer: "Most customers use it in the morning or before work, study, or any task that needs better concentration." },
      { question: "How long does one bottle last?", answer: "At 3-4 sprays daily, one bottle lasts around 30 daily servings." },
      { question: "Can I combine Lion's Mane with other sprays?", answer: "Yes. Many customers pair it with Cordyceps for mornings or with the Mix spray for broader daily support." },
    ],
    pairsWith: ["cordyceps", "mix"],
  },
  "cordyceps": {
    rating: 4.9,
    reviewCount: 126,
    volume: "30ml",
    shortPitch: "Cordyceps delivers clean daily energy and stamina support in a compact spray that fits training days and demanding schedules.",
    trustBadges: ["Lab tested", "Natural energy", "Fast oral spray", "30-day guarantee"],
    quickBenefits: [
      "Supports natural energy without a harsh crash",
      "Ideal before training or long days",
      "Travel-friendly and easy to dose",
    ],
    usageTitle: "Best for mornings, active days, and pre-workout energy support.",
    ingredientHighlights: ["Cordyceps extract 10:1", "Purified water", "Vegetable glycerin", "Natural preservative"],
    fullIngredients: "Purified water, Cordyceps extract 10:1, vegetable glycerin, natural preservative, citric acid.",
    reviews: [
      { initials: "SD", name: "Stefan D., Plovdiv", text: "I use it before workouts and get steady energy without the caffeine crash." },
      { initials: "PV", name: "Petar V., Sofia", text: "Cordyceps has become my go-to on demanding workdays." },
      { initials: "RL", name: "Raya L., Varna", text: "I like how practical the format is. One bottle in my gym bag and I'm covered." },
    ],
    faq: [
      { question: "Is Cordyceps a stimulant?", answer: "No. It is positioned as natural stamina support, not a stimulant-heavy energy product." },
      { question: "When should I take it?", answer: "Morning use or 20-30 minutes before activity works best for most customers." },
      { question: "Can I use it every day?", answer: "Yes. It is designed for simple daily use as part of a consistent routine." },
    ],
    pairsWith: ["lions-mane", "mix"],
  },
  reishi: {
    rating: 4.9,
    reviewCount: 134,
    volume: "30ml",
    shortPitch: "Reishi is built for evening balance, calmer routines, and smoother recovery when stress starts to accumulate.",
    trustBadges: ["Lab tested", "Evening routine", "Fast oral spray", "30-day guarantee"],
    quickBenefits: [
      "Supports calm and daily balance",
      "Fits a wind-down routine before bed",
      "A premium alternative to evening capsules",
    ],
    usageTitle: "Best for late afternoons, evening routines, and recovery-focused days.",
    ingredientHighlights: ["Reishi extract 10:1", "Purified water", "Vegetable glycerin", "Natural preservative"],
    fullIngredients: "Purified water, Reishi extract 10:1, vegetable glycerin, natural preservative, citric acid.",
    reviews: [
      { initials: "EV", name: "Elena V., Sofia", text: "My evenings feel calmer and my sleep quality improved after making Reishi a routine." },
      { initials: "PS", name: "Petya S., Burgas", text: "It helps me transition out of work mode much more easily." },
      { initials: "AM", name: "Anna M., Plovdiv", text: "A few sprays before bed became one of the simplest changes in my wellness routine." },
    ],
    faq: [
      { question: "When should I use Reishi?", answer: "Most customers prefer it in the late afternoon or evening as part of a calmer routine." },
      { question: "Is it good for long-term daily use?", answer: "Yes. It is designed as a repeatable daily support product rather than an occasional use formula." },
      { question: "Can I pair it with a daytime spray?", answer: "Yes. Reishi pairs especially well with Lion's Mane or Cordyceps for a day-to-night stack." },
    ],
    pairsWith: ["lions-mane", "mix"],
  },
  shiitake: {
    rating: 4.8,
    reviewCount: 109,
    volume: "30ml",
    shortPitch: "Shiitake supports everyday vitality and makes a practical, no-fuss addition to a consistent wellness routine.",
    trustBadges: ["Lab tested", "Daily vitality", "Fast oral spray", "30-day guarantee"],
    quickBenefits: [
      "Supports everyday wellness and vitality",
      "Simple enough for all-day routines",
      "A good choice for first-time buyers",
    ],
    usageTitle: "Best for daily wellness support at any time of day.",
    ingredientHighlights: ["Shiitake extract 10:1", "Purified water", "Vegetable glycerin", "Natural preservative"],
    fullIngredients: "Purified water, Shiitake extract 10:1, vegetable glycerin, natural preservative, citric acid.",
    reviews: [
      { initials: "TM", name: "Tanya M., Sofia", text: "Shiitake feels like a reliable everyday support product that is easy to keep using." },
      { initials: "DB", name: "Daniel B., Varna", text: "I wanted one formula for daily use and this fit that role well." },
      { initials: "GV", name: "Gergana V., Pleven", text: "The spray makes the habit so much easier than supplement stacks." },
    ],
    faq: [
      { question: "Who is Shiitake best for?", answer: "It is best for customers who want one simple daily-support formula without a narrow use case." },
      { question: "Can I combine it with other products?", answer: "Yes. Many customers layer it with Lion's Mane, Chaga, or the Mix spray." },
      { question: "Is it beginner-friendly?", answer: "Yes. It is one of the easiest products in the range to understand and use consistently." },
    ],
    pairsWith: ["chaga", "mix"],
  },
  chaga: {
    rating: 4.8,
    reviewCount: 97,
    volume: "30ml",
    shortPitch: "Chaga is positioned for antioxidant-rich daily support and a more resilient wellness routine with simple morning use.",
    trustBadges: ["Lab tested", "Antioxidant support", "Fast oral spray", "30-day guarantee"],
    quickBenefits: [
      "Supports antioxidant-focused routines",
      "Designed for steady daily use",
      "Compact and easy to keep close",
    ],
    usageTitle: "Best for morning routines focused on resilience and everyday support.",
    ingredientHighlights: ["Chaga extract 10:1", "Purified water", "Vegetable glycerin", "Natural preservative"],
    fullIngredients: "Purified water, Chaga extract 10:1, vegetable glycerin, natural preservative, citric acid.",
    reviews: [
      { initials: "KD", name: "Kalin D., Sofia", text: "Chaga feels like a strong anchor product in my morning wellness routine." },
      { initials: "BL", name: "Bistra L., Varna", text: "I like the no-fuss format and the grounded feel of the product." },
      { initials: "MV", name: "Mira V., Plovdiv", text: "It is easy to stay consistent when the dosing takes seconds." },
    ],
    faq: [
      { question: "When should I take Chaga?", answer: "Morning use is the most common pattern, especially as part of a regular routine." },
      { question: "What kind of customer chooses Chaga?", answer: "Usually customers looking for antioxidant-rich, resilience-oriented support." },
      { question: "Can I stack it with other sprays?", answer: "Yes. Chaga pairs well with Shiitake or the 5-Mushroom Mix." },
    ],
    pairsWith: ["shiitake", "mix"],
  },
  mix: {
    rating: 4.9,
    reviewCount: 158,
    volume: "30ml",
    shortPitch: "The 5-Mushroom Mix is the simplest all-in-one option for shoppers who want full-spectrum support without choosing just one role.",
    trustBadges: ["Lab tested", "Best seller", "Fast oral spray", "30-day guarantee"],
    quickBenefits: [
      "Broadest formula in the range",
      "Ideal first purchase for undecided shoppers",
      "Great option for all-day routines",
    ],
    usageTitle: "Best for first-time buyers who want one bottle that covers multiple goals.",
    ingredientHighlights: [
      "Lion's Mane extract",
      "Cordyceps extract",
      "Reishi extract",
      "Shiitake extract",
      "Chaga extract",
    ],
    fullIngredients: "Purified water, Lion's Mane extract, Cordyceps extract, Reishi extract, Shiitake extract, Chaga extract, vegetable glycerin, natural preservative, citric acid.",
    reviews: [
      { initials: "AK", name: "Alex K., Sofia", text: "The Mix was the easiest way to start. I did not need to overthink which bottle to choose first." },
      { initials: "DV", name: "Diana V., Plovdiv", text: "It feels like the most versatile option when I want one product for everyday use." },
      { initials: "SP", name: "Simeon P., Burgas", text: "If someone is new to the brand, this is the formula I would recommend first." },
    ],
    faq: [
      { question: "Who should buy the Mix spray?", answer: "It is best for customers who want broad daily support or do not want to choose one narrow goal first." },
      { question: "Is it a good first order?", answer: "Yes. It is the most straightforward starting point for new customers." },
      { question: "Can I still use single-mushroom sprays later?", answer: "Yes. Many customers start with Mix and then add a focused formula later." },
    ],
    pairsWith: ["lions-mane", "cordyceps"],
  },
};
