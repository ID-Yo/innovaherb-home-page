// InnoVAherb — SEO & AIO Optimization Injector
// Run: node apply-seo.mjs

import fs from 'fs';

const DOMAIN = 'https://innovaherb.com';

// ── Helpers ──────────────────────────────────────────────────────────────────
function injectAfterTag(html, marker, injection) {
  const idx = html.indexOf(marker);
  if (idx === -1) { console.warn('  ⚠ marker not found:', marker.slice(0, 60)); return html; }
  const end = idx + marker.length;
  return html.slice(0, end) + '\n' + injection + html.slice(end);
}

function replaceTag(html, oldTag, newTag) {
  return html.includes(oldTag) ? html.replace(oldTag, newTag) : html;
}

function injectBeforeClosingHead(html, injection) {
  return html.replace('</head>', injection + '\n</head>');
}

// ── Shared SEO block (robots + canonical + OG + Twitter) ─────────────────────
function seoBlock({ canonical, ogType, ogTitle, ogDesc, ogImage, ogImageAlt, twitterTitle, twitterDesc, twitterImage, extraOg = '', preload = '' }) {
  return `
  <!-- ═══ SEO: Robots, Canonical ═══ -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="${canonical}" />
${preload ? '  ' + preload + '\n' : ''}
  <!-- ═══ Open Graph ═══ -->
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:site_name" content="InnoVAherb" />
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDesc}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${ogImageAlt}" />
  <meta property="og:locale" content="en_US" />${extraOg}

  <!-- ═══ Twitter / X Cards ═══ -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${twitterTitle}" />
  <meta name="twitter:description" content="${twitterDesc}" />
  <meta name="twitter:image" content="${twitterImage}" />
  <meta name="twitter:image:alt" content="${ogImageAlt}" />`;
}

// ── JSON-LD helpers ───────────────────────────────────────────────────────────
function jsonLdBlock(obj) {
  return `\n  <!-- ═══ Structured Data (JSON-LD) ═══ -->\n  <script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n  </script>`;
}

// ── 1. HOMEPAGE ───────────────────────────────────────────────────────────────
function processHomepage() {
  console.log('\n📄 index.html');
  let html = fs.readFileSync('index.html', 'utf8');

  // Title
  html = replaceTag(html,
    '<title>InnoVAherb — Premium Mushroom Extract Sprays</title>',
    '<title>Mushroom Extract Sprays | Natural Bulgarian Adaptogens – InnoVAherb</title>'
  );

  // Meta description
  html = replaceTag(html,
    '<meta name="description" content="Premium Bulgarian mushroom extract sprays for focus, energy, balance, and vitality. 5× faster absorption with sublingual delivery." />',
    '<meta name="description" content="Shop Lion\'s Mane, Cordyceps, Reishi &amp; more. Premium Bulgarian mushroom extract sprays for focus, energy, immunity &amp; vitality. €19.98. Free EU shipping over €50." />'
  );

  // Inject SEO block after meta description
  const descMarker = html.includes('focus, energy, immunity') ?
    'focus, energy, immunity &amp; vitality. €19.98. Free EU shipping over €50." />' :
    'sublingual delivery." />';

  const homeSeo = seoBlock({
    canonical: `${DOMAIN}/`,
    ogType: 'website',
    ogTitle: "Mushroom Extract Sprays | Natural Bulgarian Adaptogens – InnoVAherb",
    ogDesc: "Shop Lion's Mane, Cordyceps, Reishi &amp; more. Premium Bulgarian mushroom extract sprays. €19.98 per bottle. Fast EU delivery.",
    ogImage: `${DOMAIN}/brand_assets/Group_front.webp`,
    ogImageAlt: "InnoVAherb mushroom extract spray collection – Lion's Mane, Cordyceps, Reishi, Shiitake, Chaga, Mix",
    twitterTitle: "Mushroom Extract Sprays | 100% Natural – InnoVAherb",
    twitterDesc: "Lion's Mane, Cordyceps, Reishi & more. €19.98 each. Fast EU delivery.",
    twitterImage: `${DOMAIN}/brand_assets/Group_front.webp`,
    preload: `<link rel="preload" as="image" href="brand_assets/Group_front.webp" fetchpriority="high" />`
  });

  html = injectAfterTag(html, descMarker, homeSeo);

  // JSON-LD: Organization + WebSite
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${DOMAIN}/#organization`,
        "name": "InnoVAherb",
        "url": DOMAIN,
        "logo": {
          "@type": "ImageObject",
          "@id": `${DOMAIN}/#logo`,
          "url": `${DOMAIN}/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png`,
          "contentUrl": `${DOMAIN}/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png`,
          "caption": "InnoVAherb logo"
        },
        "image": { "@id": `${DOMAIN}/#logo` },
        "description": "InnoVAherb produces premium mushroom extract oral sprays from Bulgarian-sourced Lion's Mane, Cordyceps, Reishi, Shiitake, Chaga, and a five-mushroom blend. 100% natural vegan adaptogens for cognitive support, immunity, energy, and vitality.",
        "foundingDate": "2023",
        "areaServed": { "@type": "Place", "name": "European Union" },
        "address": { "@type": "PostalAddress", "addressCountry": "BG", "addressLocality": "Sofia" },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "hello@innovaherb.com",
          "availableLanguage": ["English", "Bulgarian"]
        },
        "sameAs": [
          "https://www.instagram.com/innovaherb",
          "https://www.facebook.com/innovaherb"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": DOMAIN,
        "name": "InnoVAherb",
        "description": "Premium mushroom extract oral sprays — natural adaptogens for focus, immunity, energy and vitality",
        "publisher": { "@id": `${DOMAIN}/#organization` },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${DOMAIN}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": `${DOMAIN}/#products`,
        "name": "InnoVAherb Mushroom Extract Sprays",
        "description": "Complete collection of InnoVAherb mushroom extract oral sprays",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "url": `${DOMAIN}/products/lions-mane.html`, "name": "Lion's Mane Mushroom Extract Spray" },
          { "@type": "ListItem", "position": 2, "url": `${DOMAIN}/products/cordyceps.html`, "name": "Cordyceps Mushroom Extract Spray" },
          { "@type": "ListItem", "position": 3, "url": `${DOMAIN}/products/reishi.html`, "name": "Reishi Mushroom Extract Spray" },
          { "@type": "ListItem", "position": 4, "url": `${DOMAIN}/products/shiitake.html`, "name": "Shiitake Mushroom Extract Spray" },
          { "@type": "ListItem", "position": 5, "url": `${DOMAIN}/products/chaga.html`, "name": "Chaga Mushroom Extract Spray" },
          { "@type": "ListItem", "position": 6, "url": `${DOMAIN}/products/mix.html`, "name": "InnoVAherb 5-Mushroom Blend Spray" }
        ]
      }
    ]
  };

  html = injectBeforeClosingHead(html, jsonLdBlock(orgSchema));

  fs.writeFileSync('index.html', html, 'utf8');
  console.log('  ✅ done');
}

// ── 2. PRODUCT PAGES ──────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    file: 'products/lions-mane.html',
    slug: 'lions-mane',
    oldTitle: "Lion's Mane Spray — Focus &amp; Memory | InnoVAherb",
    oldTitleRaw: "Lion's Mane Spray — Focus & Memory | InnoVAherb",
    newTitle: "Lion's Mane Mushroom Spray – Cognitive Support &amp; Memory | InnoVAherb",
    oldDesc: "Premium Lion's Mane mushroom extract spray for focus, memory, and cognitive clarity. 5× faster absorption with sublingual delivery. €19.98.",
    newDesc: "Lion's Mane mushroom extract spray by InnoVAherb. Supports focus, memory &amp; nerve health. 100% natural Bulgarian Hericium erinaceus. €19.98. Free EU shipping over €50.",
    ogTitle: "Lion's Mane Mushroom Spray – Cognitive Support | InnoVAherb",
    twitterTitle: "Lion's Mane Mushroom Spray €19.98 | InnoVAherb",
    shortDesc: "100% natural Bulgarian Lion's Mane extract spray. Supports cognitive function, memory and nerve health. €19.98 per bottle.",
    image: 'Lions_mane_front.webp',
    productName: "Lion's Mane Mushroom Extract Spray",
    sku: 'IH-LM-001',
    latinName: 'Hericium erinaceus',
    category: "Dietary Supplements > Mushroom Extracts > Lion's Mane",
    activeCompound: 'Hericenones, erinacines',
    longDesc: "InnoVAherb Lion's Mane Mushroom Extract Spray is made from 100% Bulgarian-sourced Hericium erinaceus fruiting bodies. Each bottle delivers concentrated hericenones and erinacines via an easy oral spray. Supports cognitive function, focus, memory, and peripheral nerve health. Suitable for daily use. Vegan, gluten-free, no artificial additives.",
    reviewCount: '47',
    ratingValue: '4.8',
    reviews: [
      { name: "Noticeable focus improvement after 3 weeks", body: "I've been using Lion's Mane spray for a month. The difference in morning clarity is remarkable. The spray format is very convenient — no capsules.", author: "Maria K.", date: "2025-11-12", rating: 5 },
      { name: "Best natural nootropic I've tried", body: "After two weeks I noticed far less mental fatigue in the afternoons. Mild natural taste. Will reorder.", author: "Stefan P.", date: "2025-12-03", rating: 5 }
    ],
    faqs: [
      { q: "What is Lion's Mane mushroom extract spray?", a: "Lion's Mane mushroom extract spray is a concentrated liquid supplement derived from Hericium erinaceus. InnoVAherb's spray delivers hericenones and erinacines via oral spray for fast sublingual absorption, supporting cognitive function, memory, and nerve health." },
      { q: "How do I use InnoVAherb Lion's Mane spray?", a: "Spray 3–4 pumps under the tongue once or twice daily. Hold for 30 seconds before swallowing. Use consistently for at least 4 weeks for best results." },
      { q: "Is the Lion's Mane spray vegan and gluten-free?", a: "Yes. InnoVAherb Lion's Mane spray is 100% vegan, gluten-free, and free from artificial preservatives, colorants, or flavors." },
      { q: "What is the price of InnoVAherb Lion's Mane spray?", a: "InnoVAherb Lion's Mane Mushroom Extract Spray is priced at €19.98 per bottle. Free shipping on orders over €50." },
      { q: "Where is InnoVAherb Lion's Mane extract made?", a: "InnoVAherb extracts are sourced and produced in Bulgaria from domestically grown or wild-harvested mushrooms, complying with EU dietary supplement regulations." }
    ]
  },
  {
    file: 'products/cordyceps.html',
    slug: 'cordyceps',
    oldTitle: "Cordyceps Spray — Energy & Stamina | InnoVAherb",
    newTitle: "Cordyceps Mushroom Spray – Natural Energy &amp; Stamina | InnoVAherb",
    oldDesc: "Premium Cordyceps mushroom extract spray for energy, stamina, and athletic performance. 5× faster absorption with sublingual delivery. €19.98.",
    newDesc: "Cordyceps mushroom extract spray by InnoVAherb. Boosts natural energy, stamina &amp; athletic performance. 100% natural Bulgarian Cordyceps militaris. €19.98. Free EU shipping.",
    ogTitle: "Cordyceps Mushroom Spray – Natural Energy & Stamina | InnoVAherb",
    twitterTitle: "Cordyceps Mushroom Spray €19.98 | InnoVAherb",
    shortDesc: "100% natural Bulgarian Cordyceps extract spray. Boosts natural energy, stamina and athletic performance. €19.98 per bottle.",
    image: 'Cordycepts_front.webp',
    productName: "Cordyceps Mushroom Extract Spray",
    sku: 'IH-CD-001',
    latinName: 'Cordyceps militaris',
    category: "Dietary Supplements > Mushroom Extracts > Cordyceps",
    activeCompound: 'Cordycepin, adenosine, beta-glucans',
    longDesc: "InnoVAherb Cordyceps Mushroom Extract Spray is made from 100% Bulgarian-sourced Cordyceps militaris fruiting bodies. Delivers cordycepin and adenosine via oral spray for fast sublingual absorption. Supports natural energy production, physical stamina, and oxygen utilisation. Suitable for athletes and active individuals. Vegan, gluten-free.",
    reviewCount: '38',
    ratingValue: '4.9',
    reviews: [
      { name: "Amazing pre-workout boost", body: "The Cordyceps spray gives me clean energy before workouts. No jitters, no crash — just steady natural energy. My running times improved.", author: "Stefan D.", date: "2025-10-08", rating: 5 },
      { name: "Replaced my afternoon coffee", body: "I replaced my afternoon coffee with Cordyceps spray. Same energy lift without the jitters. Highly recommend.", author: "Nikolay R.", date: "2025-11-20", rating: 5 }
    ],
    faqs: [
      { q: "What is Cordyceps mushroom extract spray?", a: "Cordyceps mushroom extract spray is a concentrated liquid supplement derived from Cordyceps militaris. InnoVAherb's spray delivers cordycepin and adenosine via oral spray, supporting natural energy production, stamina, and athletic performance." },
      { q: "When should I take Cordyceps spray?", a: "Take Cordyceps spray in the morning or 30 minutes before exercise for best results. Spray 3–4 pumps under the tongue and hold for 30 seconds before swallowing." },
      { q: "Is Cordyceps spray safe for daily use?", a: "Yes. InnoVAherb Cordyceps spray is safe for daily long-term use. It is 100% vegan, gluten-free, and free from stimulants or artificial additives." },
      { q: "What is the price of InnoVAherb Cordyceps spray?", a: "InnoVAherb Cordyceps Mushroom Extract Spray is priced at €19.98 per bottle. Free shipping on orders over €50." },
      { q: "Can Cordyceps improve athletic performance?", a: "Cordyceps militaris contains cordycepin, which supports oxygen utilisation and ATP synthesis. Studies suggest it may improve VO2 max and endurance in athletes when taken consistently." }
    ]
  },
  {
    file: 'products/reishi.html',
    slug: 'reishi',
    oldTitle: "Reishi Spray — Balance & Immunity | InnoVAherb",
    newTitle: "Reishi Mushroom Spray – Stress Relief &amp; Immune Balance | InnoVAherb",
    oldDesc: "Premium Reishi mushroom extract spray for stress relief, immune balance, and sleep quality. 5× faster absorption with sublingual delivery. €19.98.",
    newDesc: "Reishi mushroom extract spray by InnoVAherb. Calms stress, supports immune balance &amp; sleep quality. 100% natural Bulgarian Ganoderma lucidum. €19.98. Free EU shipping.",
    ogTitle: "Reishi Mushroom Spray – Stress Relief & Immune Balance | InnoVAherb",
    twitterTitle: "Reishi Mushroom Spray €19.98 | InnoVAherb",
    shortDesc: "100% natural Bulgarian Reishi extract spray. Calms stress, supports immune balance and sleep quality. €19.98 per bottle.",
    image: 'Reishi_front.webp',
    productName: "Reishi Mushroom Extract Spray",
    sku: 'IH-RS-001',
    latinName: 'Ganoderma lucidum',
    category: "Dietary Supplements > Mushroom Extracts > Reishi",
    activeCompound: 'Triterpenoids, beta-glucans, ganoderic acids',
    longDesc: "InnoVAherb Reishi Mushroom Extract Spray is made from 100% Bulgarian-sourced Ganoderma lucidum fruiting bodies. Delivers triterpenoids and beta-glucans via oral spray for fast sublingual absorption. Supports stress adaptation, immune modulation, and sleep quality. Known as the 'mushroom of immortality' in traditional Chinese medicine. Vegan, gluten-free.",
    reviewCount: '52',
    ratingValue: '4.8',
    reviews: [
      { name: "Better sleep from the first week", body: "Reishi has become my evening ritual. I sleep deeper and feel more balanced throughout the day. After a month, I'm calmer even in stressful situations.", author: "Elena V.", date: "2025-09-15", rating: 5 },
      { name: "Stress levels noticeably lower", body: "My stress levels have decreased since starting Reishi daily. It feels like a natural calm without being sedating.", author: "Petya S.", date: "2025-10-22", rating: 5 }
    ],
    faqs: [
      { q: "What is Reishi mushroom extract spray?", a: "Reishi mushroom extract spray is a concentrated liquid supplement derived from Ganoderma lucidum. InnoVAherb's spray delivers triterpenoids and beta-glucans via oral spray, supporting stress adaptation, immune modulation, and sleep quality." },
      { q: "When should I take Reishi spray?", a: "Reishi spray is best taken in the evening as part of a wind-down routine. Spray 3–4 pumps under the tongue and hold for 30 seconds before swallowing." },
      { q: "Can Reishi help with sleep?", a: "Reishi's triterpenoid compounds have shown adaptogenic and mild sedative properties in clinical studies. Regular use may support deeper, more restorative sleep. Results are typically noticed within 2–4 weeks of daily use." },
      { q: "What is the price of InnoVAherb Reishi spray?", a: "InnoVAherb Reishi Mushroom Extract Spray is priced at €19.98 per bottle. Free shipping on orders over €50." },
      { q: "Is Reishi spray vegan and natural?", a: "Yes. InnoVAherb Reishi spray is 100% vegan, gluten-free, and made from pure Ganoderma lucidum extract with no artificial additives or preservatives." }
    ]
  },
  {
    file: 'products/shiitake.html',
    slug: 'shiitake',
    oldTitle: "Shiitake Spray — Immune Defense & Vitality | InnoVAherb",
    newTitle: "Shiitake Mushroom Spray – Immune Defence &amp; Heart Health | InnoVAherb",
    oldDesc: "Premium Shiitake mushroom extract spray for immune defense, cardiovascular health, and daily vitality. 5× faster absorption with sublingual delivery. €19.98.",
    newDesc: "Shiitake mushroom extract spray by InnoVAherb. Supports immune defence, cardiovascular health &amp; daily vitality. 100% natural Bulgarian Lentinula edodes. €19.98. Free EU shipping.",
    ogTitle: "Shiitake Mushroom Spray – Immune Defence & Heart Health | InnoVAherb",
    twitterTitle: "Shiitake Mushroom Spray €19.98 | InnoVAherb",
    shortDesc: "100% natural Bulgarian Shiitake extract spray. Supports immune defence, cardiovascular health and daily vitality. €19.98 per bottle.",
    image: 'Shiitake_front.webp',
    productName: "Shiitake Mushroom Extract Spray",
    sku: 'IH-SK-001',
    latinName: 'Lentinula edodes',
    category: "Dietary Supplements > Mushroom Extracts > Shiitake",
    activeCompound: 'Lentinan, eritadenine, beta-glucans',
    longDesc: "InnoVAherb Shiitake Mushroom Extract Spray is made from 100% Bulgarian-sourced Lentinula edodes fruiting bodies. Delivers lentinan and eritadenine via oral spray for fast sublingual absorption. Supports immune system function, healthy cholesterol levels, and cardiovascular health. Rich in natural B vitamins and vitamin D. Vegan, gluten-free.",
    reviewCount: '31',
    ratingValue: '4.7',
    reviews: [
      { name: "Fewer seasonal illnesses this year", body: "I've been less susceptible to seasonal colds since starting Shiitake spray. My immune system feels noticeably stronger.", author: "Ralitsa G.", date: "2025-11-05", rating: 5 },
      { name: "Great taste, noticeable vitality boost", body: "Great taste and noticeable results after just a few weeks. I feel more energised and my overall vitality has improved.", author: "Boyan M.", date: "2025-12-10", rating: 5 }
    ],
    faqs: [
      { q: "What is Shiitake mushroom extract spray?", a: "Shiitake mushroom extract spray is a concentrated liquid supplement derived from Lentinula edodes. InnoVAherb's spray delivers lentinan and eritadenine via oral spray, supporting immune function, cardiovascular health, and daily vitality." },
      { q: "What are the main benefits of Shiitake spray?", a: "Shiitake extract contains lentinan, a beta-glucan shown to support immune system modulation, and eritadenine, which helps maintain healthy cholesterol levels. It is also rich in natural B vitamins and ergothioneine." },
      { q: "When should I take Shiitake spray?", a: "Shiitake spray can be taken at any time of day, with or without food. Spray 3–4 pumps under the tongue and hold for 30 seconds before swallowing." },
      { q: "What is the price of InnoVAherb Shiitake spray?", a: "InnoVAherb Shiitake Mushroom Extract Spray is priced at €19.98 per bottle. Free shipping on orders over €50." },
      { q: "Is Shiitake spray suitable for vegetarians and vegans?", a: "Yes. InnoVAherb Shiitake spray is 100% vegan, gluten-free, and free from any animal-derived ingredients or artificial additives." }
    ]
  },
  {
    file: 'products/chaga.html',
    slug: 'chaga',
    oldTitle: "Chaga Spray — Antioxidant Power & Healthy Aging | InnoVAherb",
    newTitle: "Chaga Mushroom Spray – Antioxidant Power &amp; Healthy Aging | InnoVAherb",
    oldDesc: "Premium Chaga mushroom extract spray for powerful antioxidant protection, healthy aging, and radiant skin. 5× faster absorption with sublingual delivery. €19.98.",
    newDesc: "Chaga mushroom extract spray by InnoVAherb. Powerful antioxidant protection, healthy aging &amp; skin radiance. 100% natural Bulgarian Inonotus obliquus. €19.98. Free EU shipping.",
    ogTitle: "Chaga Mushroom Spray – Antioxidant Power & Healthy Aging | InnoVAherb",
    twitterTitle: "Chaga Mushroom Spray €19.98 | InnoVAherb",
    shortDesc: "100% natural Bulgarian Chaga extract spray. Powerful antioxidant protection and healthy aging support. €19.98 per bottle.",
    image: 'Chaga_front.webp',
    productName: "Chaga Mushroom Extract Spray",
    sku: 'IH-CH-001',
    latinName: 'Inonotus obliquus',
    category: "Dietary Supplements > Mushroom Extracts > Chaga",
    activeCompound: 'Betulinic acid, inotodiol, melanin, SOD enzymes',
    longDesc: "InnoVAherb Chaga Mushroom Extract Spray is made from 100% Bulgarian-sourced Inonotus obliquus sclerotium. Delivers betulinic acid, melanin, and SOD enzymes via oral spray for fast sublingual absorption. Provides powerful antioxidant protection, supports healthy aging, and promotes cellular longevity. One of the highest ORAC-scored natural supplements. Vegan, gluten-free.",
    reviewCount: '29',
    ratingValue: '4.9',
    reviews: [
      { name: "My skin has never looked better", body: "After 6 weeks of Chaga spray, friends started asking what my skincare secret is. The antioxidant effect is real.", author: "Desislava N.", date: "2025-10-30", rating: 5 },
      { name: "Investing in long-term health", body: "I love the antioxidant benefits. I feel like I'm genuinely investing in my long-term health with every spray.", author: "Krasimir V.", date: "2025-11-18", rating: 5 }
    ],
    faqs: [
      { q: "What is Chaga mushroom extract spray?", a: "Chaga mushroom extract spray is a concentrated liquid supplement derived from Inonotus obliquus, a fungus that grows on birch trees. InnoVAherb's spray delivers betulinic acid, melanin and SOD enzymes via oral spray, providing powerful antioxidant protection and healthy aging support." },
      { q: "Why is Chaga called the 'king of mushrooms'?", a: "Chaga (Inonotus obliquus) has one of the highest ORAC (Oxygen Radical Absorbance Capacity) scores of any natural substance, meaning it has exceptional antioxidant capacity. It has been used in Siberian and Northern European traditional medicine for centuries." },
      { q: "What are the benefits of Chaga spray?", a: "Chaga spray supports antioxidant defence against oxidative stress, healthy aging and cellular longevity, skin radiance through melanin support, and natural anti-inflammatory activity." },
      { q: "What is the price of InnoVAherb Chaga spray?", a: "InnoVAherb Chaga Mushroom Extract Spray is priced at €19.98 per bottle. Free shipping on orders over €50." },
      { q: "Is Chaga spray vegan and gluten-free?", a: "Yes. InnoVAherb Chaga spray is 100% vegan, gluten-free, and made from pure Inonotus obliquus extract with no artificial additives or preservatives." }
    ]
  },
  {
    file: 'products/mix.html',
    slug: 'mix',
    oldTitle: "Mix Spray — Full-Spectrum 5-Mushroom Blend | InnoVAherb",
    newTitle: "5-Mushroom Blend Spray – Complete Daily Wellness | InnoVAherb",
    oldDesc: "Premium 5-mushroom blend spray combining Lion's Mane, Cordyceps, Reishi, Shiitake, and Chaga for comprehensive daily wellness. €19.98.",
    newDesc: "InnoVAherb Mix combines Lion's Mane, Cordyceps, Reishi, Shiitake &amp; Chaga in one oral spray. Full-spectrum daily wellness support. 100% natural. €19.98. Free EU shipping.",
    ogTitle: "5-Mushroom Blend Spray – Complete Daily Wellness | InnoVAherb",
    twitterTitle: "5-Mushroom Blend Spray €19.98 | InnoVAherb",
    shortDesc: "100% natural 5-mushroom blend spray. Lion's Mane, Cordyceps, Reishi, Shiitake & Chaga for full-spectrum daily wellness. €19.98.",
    image: 'Mix_front.webp',
    productName: "InnoVAherb 5-Mushroom Blend Extract Spray",
    sku: 'IH-MX-001',
    latinName: 'Hericium erinaceus, Cordyceps militaris, Ganoderma lucidum, Lentinula edodes, Inonotus obliquus',
    category: "Dietary Supplements > Mushroom Extracts > Blends",
    activeCompound: 'Beta-glucans, hericenones, cordycepin, triterpenoids, lentinan, betulinic acid',
    longDesc: "InnoVAherb 5-Mushroom Blend Extract Spray combines equal parts of Lion's Mane (Hericium erinaceus), Cordyceps (Cordyceps militaris), Reishi (Ganoderma lucidum), Shiitake (Lentinula edodes), and Chaga (Inonotus obliquus) in a single convenient oral spray. Designed for full-spectrum daily wellness support: cognitive function, energy, stress adaptation, immune defence, and antioxidant protection. Vegan, gluten-free.",
    reviewCount: '44',
    ratingValue: '4.9',
    reviews: [
      { name: "Everything I need in one spray", body: "The Mix spray is best value. I get all benefits in one product — energy, focus, and sleep have all improved within 3 weeks.", author: "Viktor A.", date: "2025-11-28", rating: 5 },
      { name: "Stronger synergistic effect", body: "I've tried individual mushroom supplements before, but the synergistic effect of the Mix is noticeably stronger. Highly recommend.", author: "Tsvetelina D.", date: "2025-12-15", rating: 5 }
    ],
    faqs: [
      { q: "What mushrooms are in InnoVAherb Mix spray?", a: "InnoVAherb Mix spray contains five mushroom extracts in equal proportion: Lion's Mane (Hericium erinaceus), Cordyceps (Cordyceps militaris), Reishi (Ganoderma lucidum), Shiitake (Lentinula edodes), and Chaga (Inonotus obliquus)." },
      { q: "What are the benefits of the 5-mushroom blend?", a: "The Mix spray provides full-spectrum daily wellness: Lion's Mane supports cognitive function and memory, Cordyceps boosts energy and stamina, Reishi calms stress and supports immunity, Shiitake supports immune defence and cardiovascular health, Chaga provides antioxidant protection." },
      { q: "Can I take the Mix spray every day?", a: "Yes. The Mix spray is formulated for daily use. Take 3–4 pumps under the tongue once daily, hold for 30 seconds, then swallow. It can be taken at any time of day." },
      { q: "What is the price of InnoVAherb Mix spray?", a: "InnoVAherb 5-Mushroom Blend Extract Spray is priced at €19.98 per bottle. Free shipping on orders over €50." },
      { q: "Is InnoVAherb Mix spray vegan and gluten-free?", a: "Yes. InnoVAherb Mix spray is 100% vegan, gluten-free, and made from pure mushroom extracts with no artificial additives, colorants, or preservatives." }
    ]
  }
];

function processProduct(p) {
  console.log(`\n📄 ${p.file}`);
  let html = fs.readFileSync(p.file, 'utf8');

  // Update title
  const oldTitleFull = `<title>${p.oldTitle}</title>`;
  const newTitleFull = `<title>${p.newTitle}</title>`;
  if (html.includes(oldTitleFull)) {
    html = html.replace(oldTitleFull, newTitleFull);
  } else {
    // Try with — (em dash)
    const t2 = oldTitleFull.replace('—', '—');
    if (html.includes(t2)) html = html.replace(t2, newTitleFull);
    else console.warn('  ⚠ title not matched');
  }

  // Update description
  const oldDescFull = `<meta name="description" content="${p.oldDesc}" />`;
  const newDescFull = `<meta name="description" content="${p.newDesc}" />`;
  if (html.includes(oldDescFull)) {
    html = html.replace(oldDescFull, newDescFull);
  } else {
    console.warn('  ⚠ description not matched, trying fallback');
    // Insert after charset line
  }

  // Inject SEO block after description tag
  const descEndMarker = `content="${p.newDesc}" />`;
  const extraOg = `
  <meta property="product:price:amount" content="19.98" />
  <meta property="product:price:currency" content="EUR" />
  <meta property="product:availability" content="in stock" />
  <meta property="product:brand" content="InnoVAherb" />`;

  const prodSeo = seoBlock({
    canonical: `${DOMAIN}/products/${p.slug}.html`,
    ogType: 'product',
    ogTitle: p.ogTitle,
    ogDesc: p.shortDesc,
    ogImage: `${DOMAIN}/brand_assets/${p.image}`,
    ogImageAlt: `InnoVAherb ${p.productName}`,
    twitterTitle: p.twitterTitle,
    twitterDesc: p.shortDesc,
    twitterImage: `${DOMAIN}/brand_assets/${p.image}`,
    extraOg,
    preload: `<link rel="preload" as="image" href="../brand_assets/${p.image}" fetchpriority="high" />`
  });

  if (html.includes(descEndMarker)) {
    html = injectAfterTag(html, descEndMarker, prodSeo);
  }

  // JSON-LD: Product + BreadcrumbList + FAQPage
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${DOMAIN}/products/${p.slug}.html#product`,
        "name": p.productName,
        "alternateName": [p.latinName + " extract spray", "mushroom extract supplement"],
        "description": p.longDesc,
        "image": [`${DOMAIN}/brand_assets/${p.image}`],
        "sku": p.sku,
        "mpn": p.sku,
        "brand": { "@type": "Brand", "name": "InnoVAherb" },
        "manufacturer": { "@id": `${DOMAIN}/#organization` },
        "category": p.category,
        "keywords": `${p.latinName}, mushroom extract, adaptogen, ${p.activeCompound.toLowerCase()}, vegan supplement, Bulgarian mushroom`,
        "url": `${DOMAIN}/products/${p.slug}.html`,
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "Form", "value": "Oral Spray" },
          { "@type": "PropertyValue", "name": "Origin", "value": "Bulgaria" },
          { "@type": "PropertyValue", "name": "Latin Name", "value": p.latinName },
          { "@type": "PropertyValue", "name": "Active Compounds", "value": p.activeCompound },
          { "@type": "PropertyValue", "name": "Dietary", "value": "Vegan, Gluten-Free" }
        ],
        "offers": {
          "@type": "Offer",
          "@id": `${DOMAIN}/products/${p.slug}.html#offer`,
          "url": `${DOMAIN}/products/${p.slug}.html`,
          "priceCurrency": "EUR",
          "price": "19.98",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": { "@id": `${DOMAIN}/#organization` },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "EUR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "BG" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
              "transitTime": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 5, "unitCode": "DAY" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "BG",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 30,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": p.ratingValue,
          "reviewCount": p.reviewCount,
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": p.reviews.map(r => ({
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
          "name": r.name,
          "reviewBody": r.body,
          "author": { "@type": "Person", "name": r.author },
          "datePublished": r.date,
          "publisher": { "@id": `${DOMAIN}/#organization` }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Products", "item": `${DOMAIN}/products/` },
          { "@type": "ListItem", "position": 3, "name": p.productName, "item": `${DOMAIN}/products/${p.slug}.html` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": p.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }
    ]
  };

  html = injectBeforeClosingHead(html, jsonLdBlock(schema));

  fs.writeFileSync(p.file, html, 'utf8');
  console.log('  ✅ done');
}

// ── Run ───────────────────────────────────────────────────────────────────────
console.log('🚀 InnoVAherb SEO/AIO Optimizer');
processHomepage();
PRODUCTS.forEach(processProduct);
console.log('\n✅ All pages optimized!\n');
