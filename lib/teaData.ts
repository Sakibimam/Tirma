import { Product, Recipe, JournalPost, Testimonial } from '@/types';

/* ------------------------------------------------------------------ *
 * The index teas carry the site's colour. Everything else in the
 * catalogue borrows the palette of whichever index tea it sits nearest.
 * ------------------------------------------------------------------ */

export const productsData: Product[] = [
  {
    id: 'tirma-darjeeling-delight',
    photo: '/photos/leaf-black-dry.jpg',
    extraPhotos: ['/photos/garden-hills.jpg', '/photos/garden-munnar.jpg'],
    slug: 'darjeeling-delight',
    index: '01',
    title: 'Darjeeling Delight',
    subtitle: 'High-grown orthodox leaf · Kurseong & Mirik ridges',
    botanicalName: 'Camellia sinensis var. sinensis',
    category: 'Black Tea',
    liquor: {
      name: 'Amber gold',
      base: '#784712',
      ink: '#FDF5E6',
      muted: '#DCBA7A',
      line: 'rgba(253, 245, 230, 0.22)',
      accent: '#F2B84B',
    },
    pitch: 'The champagne of teas. Himalayan mist, floral muscatel aromatics, and a natural wildflower honey finish.',
    price: 560,
    originalPrice: 650,
    baseWeight: '100 g',
    cupsPerPack: 40,
    rating: 4.96,
    reviewCount: 210,
    description:
      'Plucked from high-elevation Himalayan slopes in Kurseong and Mirik. Delicate whole orthodox leaves rolled gently by hand to preserve the golden tips. Pours an amber gold cup with complex notes of muscatel grape, dried apricot, and wildflower honey.',
    story:
      'Darjeeling is the true mountain tea. Growing between 1,400 and 1,800 metres in crisp Himalayan air, the bush grows slowly under shifting fog and sunlight. This slow metabolism produces volatile aroma compounds found nowhere else in the tea world. This is a contemplative tea — drink it clear, in a porcelain cup, with no milk or sugar to mask its nuances.',
    packageSizes: [
      { label: '100 g pouch', grams: 100, price: 560 },
      { label: '200 g tin', grams: 200, price: 1040 },
    ],
    origin: 'Kurseong & Mirik Ridges, Darjeeling',
    elevation: '1,400–1,800 m',
    harvest: 'Second flush · 2026',
    pluckingStandard: 'Fine plucking — two leaves and a bud',
    flavorNotes: ['Muscatel grape', 'Wildflower honey', 'Dried apricot', 'Floral orchid'],
    palateDescription:
      'Crisp, sparkling mouthfeel with a lingering sweetness. The muscatel grape character opens gently in the finish.',
    caffeineLevel: 'Medium',
    takesMilk: false,
    brewingGuide: {
      temp: '85–90°C — let boil settle 1 minute',
      ratio: '2.5 g to 200 ml',
      steepTime: '3 to 4 minutes',
      infusions: 2,
      vessel: 'Porcelain or glass teapot',
      withMilk:
        'Drink black. Milk coats the tongue and suppresses the delicate muscatel florals.',
    },
    ingredients: ['100% whole leaf orthodox Darjeeling black tea'],
    benefits: [
      'Authentic single-estate Himalayan harvest — not blended down',
      'Naturally complex aromatics without flavour oils',
      'Re-steeps beautifully for a softer second cup',
    ],
    inStock: true,
    inIndex: true,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'tirma-kadak-chai',
    photo: '/photos/chai-pour.jpg',
    extraPhotos: ['/photos/chai-kulhad.jpg', '/photos/garden-walk-india.jpg'],
    slug: 'kadak-chai',
    index: '02',
    title: 'Kadak Chai',
    subtitle: 'High-fire extra-bold CTC · Upper Assam',
    botanicalName: 'Camellia sinensis var. assamica',
    category: 'Black Tea',
    liquor: {
      name: 'Intense copper',
      base: '#4E1E09',
      ink: '#FDF1E6',
      muted: '#D09975',
      line: 'rgba(253, 241, 230, 0.22)',
      accent: '#E67E22',
    },
    pitch: 'Built for mornings when ordinary tea feels like hot water. High-fire roast with relentless strength.',
    price: 340,
    originalPrice: 390,
    baseWeight: '250 g',
    cupsPerPack: 100,
    rating: 4.93,
    reviewCount: 340,
    description:
      'An uncompromising, high-fire CTC selected for intense liquor density and immediate punch. Developed for tea drinkers who want deep colour and astringent bite within ninety seconds of hitting boiling milk.',
    story:
      'Kadak is not just an adjective in India; it is a standard. We select darker, more heavily fired CTC grains from the peak summer harvest in Upper Assam. The intense firing caramelizes the natural sugars and seals in a brisk, assertive strength that refuses to be diluted even with heavy buffalo milk.',
    packageSizes: [
      { label: '250 g pouch', grams: 250, price: 340 },
      { label: '500 g pouch', grams: 500, price: 620 },
      { label: '1 kg sack', grams: 1000, price: 1140 },
    ],
    origin: 'Upper Assam, Brahmaputra Valley',
    elevation: '45–120 m',
    harvest: 'Summer high-fire flush · 2026',
    flavorNotes: ['Intense malt', 'Dark molasses', 'Toasted cocoa', 'Brisk bite'],
    palateDescription:
      'Sharp, heavy-bodied, and deeply satisfying. Holds its pungency firmly through boiled milk and brown sugar.',
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: 'Rolling boil',
      ratio: '2 tsp to 150 ml water and 100 ml milk',
      steepTime: 'Boil vigorously 3 minutes in water, add milk, boil up twice',
      infusions: 1,
      vessel: 'Chai saucepan',
      withMilk:
        'Designed for strong, hot milk tea. Take it up to two rolls on the stove for maximum extraction.',
    },
    ingredients: ['High-fire Assam CTC black tea'],
    benefits: [
      'Extracts deep dark colour in under two minutes',
      'Cuts cleanly through whole milk or condensed milk',
      'Zero added artificial colouring or caramel',
    ],
    inStock: true,
    inIndex: true,
    isPopular: true,
  },
  {
    id: 'tirma-regular-ctc',
    photo: '/photos/chai-kulhad.jpg',
    extraPhotos: ['/photos/chai-pour.jpg', '/photos/leaf-black-dry.jpg'],
    slug: 'regular-everyday-assam-ctc',
    index: '03',
    title: 'Regular (Everyday Assam CTC)',
    subtitle: 'BOP grade · the daily milk tea · Upper Assam',
    botanicalName: 'Camellia sinensis var. assamica',
    category: 'Black Tea',
    liquor: {
      name: 'Deep copper',
      base: '#6E2C0C',
      ink: '#FBEFE2',
      muted: '#D8A87F',
      line: 'rgba(251, 239, 226, 0.22)',
      accent: '#F0A84E',
    },
    pitch: 'The one for four cups a day. Pure Upper Assam BOP leaf that holds its shape against hot milk.',
    price: 320,
    originalPrice: 360,
    baseWeight: '250 g',
    cupsPerPack: 100,
    rating: 4.88,
    reviewCount: 512,
    description:
      'Crush-tear-curl from the gardens of Upper Assam. Strong, quick and red in the cup. This is what you make at seven in the morning with milk and too little time: pure whole BOP leaf with zero sweepings or filler dust.',
    story:
      'There is a snobbery about CTC that we do not share. For daily milk tea it is the correct leaf: the tearing exposes far more surface, so it gives up color and strength in the two minutes a boiling pan allows. What separates good CTC from supermarket tea is whether the garden sold you fresh leaf or sold you sweepings.',
    packageSizes: [
      { label: '250 g pouch', grams: 250, price: 320 },
      { label: '500 g pouch', grams: 500, price: 590 },
      { label: '1 kg sack', grams: 1000, price: 1090 },
    ],
    origin: 'Upper Assam, Brahmaputra Valley',
    elevation: '45–120 m — river flats, not hills',
    harvest: 'Rolling harvest · packed monthly',
    pluckingStandard: 'BOP grade (Broken Orange Pekoe)',
    flavorNotes: ['Malty', 'Strong', 'Deep red', 'Clean brisk finish'],
    palateDescription:
      'Round and robust at the front, bold without harsh bitterness. Built specifically to carry boiled milk and sugar cleanly.',
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: 'Rolling boil',
      ratio: '1.5 tsp to 150 ml water and 100 ml milk',
      steepTime: 'Boil leaf in water 3 minutes, add milk, bring to boil',
      infusions: 1,
      vessel: 'Saucepan or tea pot',
      withMilk:
        'Boil the leaf in water first to extract the liquor, then add milk. Never add cold milk to unextracted tea.',
    },
    ingredients: ['Assam CTC black tea, BOP grade'],
    benefits: [
      'Roughly ₹3 a cup for unblended single-origin leaf',
      'BOP grade — no sweepings or filler dust',
      'Freshly packed in small lots every month',
    ],
    inStock: true,
    inIndex: true,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'tirma-green-tea',
    photo: '/photos/leaf-green-dry.jpg',
    extraPhotos: ['/photos/cup-green.jpg', '/photos/cup-green-table.jpg'],
    slug: 'green-tea',
    index: '04',
    title: 'Green Tea',
    subtitle: 'Pan-fired whole leaf · Upper Assam',
    botanicalName: 'Camellia sinensis var. assamica',
    category: 'Green Tea',
    liquor: {
      name: 'Pale jade',
      base: '#24503A',
      ink: '#EDF5EC',
      muted: '#9CC0A6',
      line: 'rgba(237, 245, 236, 0.20)',
      accent: '#93D6A4',
    },
    pitch: 'Green tea that forgives a rough pour. Sweet grass, melon rind, and almost no bite.',
    price: 420,
    originalPrice: 490,
    baseWeight: '100 g',
    cupsPerPack: 40,
    rating: 4.87,
    reviewCount: 184,
    description:
      'Pan-fired within hours of harvest to halt oxidation naturally. Unlike industrial steamed greens that taste like bitter grass, pan-firing gives a nutty, gentle, pale-jade liquor with low astringency.',
    story:
      'Most green tea in supermarket bags has been pulverized into dust, turning astringent the second hot water touches it. Ours is whole leaf, pan-fired in small wok batches. It leaves the liquor soft, sweet, and round — even if you forget the kettle or leave the leaf steeping an extra minute.',
    packageSizes: [
      { label: '100 g pouch', grams: 100, price: 420 },
      { label: '250 g tin', grams: 250, price: 920 },
    ],
    origin: 'Upper Assam, Brahmaputra Valley',
    elevation: '60–110 m',
    harvest: 'Early spring pluck · 2026',
    pluckingStandard: 'Bud and first leaf',
    flavorNotes: ['Sweet grass', 'Toasted sesame', 'Green almond', 'Clean honeydew'],
    palateDescription:
      'Light-bodied and naturally sweet on the mid-palate. Finishes clean with zero dry mouth coating.',
    caffeineLevel: 'Medium',
    takesMilk: false,
    brewingGuide: {
      temp: '75–80°C — off the boil',
      ratio: '3 g to 200 ml',
      steepTime: '2 to 3 minutes',
      infusions: 3,
      vessel: 'Glass or porcelain pot',
    },
    ingredients: ['Whole leaf pan-fired green tea'],
    benefits: [
      'Three sweet infusions from each measure',
      'Naturally low in bitterness — no sugar needed',
      'Rich in natural tea L-theanine and antioxidants',
    ],
    inStock: true,
    inIndex: true,
    isPopular: true,
  },
  {
    id: 'tirma-dhaba-mix',
    photo: '/photos/chai-spices.jpg',
    extraPhotos: ['/photos/chai-kulhad.jpg', '/photos/chai-pour.jpg'],
    slug: 'dhaba-mix',
    index: '05',
    title: 'Dhaba Mix',
    subtitle: 'Highway spiced CTC · hand-cracked ginger, cardamom & clove',
    category: 'Spiced Blend',
    liquor: {
      name: 'Spiced amber',
      base: '#5A260E',
      ink: '#FCF3E8',
      muted: '#D6A680',
      line: 'rgba(252, 243, 232, 0.22)',
      accent: '#E28743',
    },
    pitch: 'The highway dhaba recipe: bold CTC, sun-dried ginger heat, and cardamom cracked coarse so you can see it.',
    price: 360,
    originalPrice: 420,
    baseWeight: '200 g',
    cupsPerPack: 60,
    rating: 4.95,
    reviewCount: 288,
    description:
      'Inspired by the roadside dhabas lining the Grand Trunk Road. Bold Upper Assam CTC blended with coarse-cracked dry ginger, green cardamom pods, and aromatic cloves. Rich, fragrant, and fiery.',
    story:
      'Real dhaba chai is never gentle and never made with stale spice powder. It gets its reputation because spices are smashed fresh with a pestle right into the bubbling pan. We recreate that by hand-cracking sun-dried ginger root, Malabar cloves, and green cardamom so their essential oils stay intact until the boil.',
    packageSizes: [
      { label: '200 g pouch', grams: 200, price: 360 },
      { label: '500 g pouch', grams: 500, price: 820 },
    ],
    origin: 'Upper Assam leaf · Spices from Kerala & Western Ghats',
    elevation: '45–120 m',
    harvest: 'Small batch monthly blend',
    flavorNotes: ['Pungent ginger', 'Sweet green cardamom', 'Clove warmth', 'Malty chai'],
    palateDescription:
      'Spicy warmth hits the back of the throat followed by sweet aromatic cardamom. Heavy body with a satisfying long finish.',
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: 'Rolling boil',
      ratio: '2 tsp to 150 ml water and 100 ml milk',
      steepTime: 'Simmer leaf and spices in water 3 minutes, add milk, roll to the rim',
      infusions: 1,
      vessel: 'Heavy bottom saucepan',
      withMilk:
        'Boil vigorously with milk. Pour from a height (the aerated pull) for authentic dhaba texture.',
    },
    ingredients: [
      'Assam CTC black tea',
      'Sun-dried ginger (cracked)',
      'Green cardamom (cracked)',
      'Whole cloves',
    ],
    benefits: [
      'Whole cracked spices — visible chunks, no dusty sweepings',
      'Natural ginger and cardamom oils soothe digestion',
      'Authentic highway dhaba flavour without artificial essences',
    ],
    inStock: true,
    inIndex: false,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'tirma-masala-chai-whole-spice',
    photo: '/photos/chai-spices.jpg',
    extraPhotos: ['/photos/chai-pour.jpg', '/photos/chai-kulhad.jpg'],
    slug: 'masala-chai-whole-spice',
    index: '06',
    title: 'Masala Chai, Whole Spice',
    subtitle: 'Upper Assam CTC with hand-cracked spices · blended small batch',
    category: 'Spiced Blend',
    liquor: {
      name: 'Red-brown',
      base: '#6E2C0C',
      ink: '#FBEFE2',
      muted: '#D8A87F',
      line: 'rgba(251, 239, 226, 0.22)',
      accent: '#F0A84E',
    },
    pitch: 'Ground spice goes stale in a fortnight. Ours is cracked whole — you can see every pod and bark.',
    price: 440,
    baseWeight: '200 g',
    cupsPerPack: 60,
    rating: 4.91,
    reviewCount: 402,
    description:
      'Assam CTC — the right leaf for this job, because chai wants a tea that gives everything up fast into boiling milk. Blended with green cardamom, dried ginger, cinnamon bark, clove, and black pepper, all cracked rather than powdered.',
    story:
      'Almost every masala chai on a shelf uses powdered spice, and powdered spice has a shelf life measured in weeks: the volatile oils that carry the aroma are gone long before the best-before date. We crack the spice coarse and blend in small batches so the cardamom snaps and the cinnamon releases fragrant oils only in your pan.',
    packageSizes: [
      { label: '200 g pouch', grams: 200, price: 440 },
      { label: '500 g tin', grams: 500, price: 980 },
    ],
    origin: 'Upper Assam leaf · Whole spices from Kerala & Western Ghats',
    elevation: '45–120 m',
    harvest: 'Blended in small lots, monthly',
    flavorNotes: ['Green cardamom', 'Warm cinnamon', 'Fresh ginger heat', 'Clove & black pepper'],
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: 'Rolling boil',
      ratio: '2 tsp to 150 ml water and 100 ml milk',
      steepTime: 'Boil leaf and spice in water 3 minutes, add milk, roll to boil',
      infusions: 1,
      vessel: 'Chai saucepan',
      withMilk: 'Built for milk. Sugar is optional and goes in at the end.',
    },
    ingredients: [
      'Assam CTC black tea',
      'Green cardamom (cracked)',
      'Dried ginger',
      'Cinnamon bark',
      'Clove',
      'Black pepper',
    ],
    benefits: [
      'Whole cracked spice preserves essential oils for months',
      'Blended monthly in small batches rather than warehoused',
      'No added flavouring, no anti-caking agents, no powders',
    ],
    inStock: false,
    isUpcoming: true,
    inIndex: false,
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 'tirma-index-box',
    photo: '/photos/leaf-bowl.jpg',
    extraPhotos: ['/photos/chai-kulhad.jpg', '/photos/cup-green.jpg', '/photos/chai-spices.jpg'],
    slug: 'the-index-box',
    index: '00',
    title: 'The Index Box',
    subtitle: 'Four signature teas · 25 g each',
    category: 'Sets',
    liquor: {
      name: 'All four',
      base: '#171512',
      ink: '#F3EFE7',
      muted: '#A39A8B',
      line: 'rgba(243, 239, 231, 0.18)',
      accent: '#E0B15C',
    },
    pitch: 'The honest way to find your cup. Twenty-five grams each of our four distinct daily brews.',
    price: 1190,
    originalPrice: 1480,
    baseWeight: '100 g total',
    cupsPerPack: 40,
    rating: 4.96,
    reviewCount: 384,
    description:
      'Twenty-five grams each of Darjeeling Delight, Kadak Chai, Regular (Everyday Assam CTC), and Green Tea. Roughly ten cups apiece — enough to live with each tea rather than judging it on one cup.',
    story:
      'Most people arrive knowing they like tea and not knowing which one suits their daily routine. Four small pouches settles it in a fortnight, and the credit comes off your next full-size order.',
    packageSizes: [{ label: '4 × 25 g box', grams: 100, price: 1190 }],
    origin: 'Upper Assam & Darjeeling',
    elevation: '45 m to 1,800 m',
    harvest: 'Current season, all four',
    flavorNotes: ['Amber gold', 'Intense copper', 'Deep copper', 'Jade'],
    caffeineLevel: 'Medium',
    takesMilk: true,
    brewingGuide: {
      temp: 'Each pouch is printed with its own exact temperature',
      ratio: 'Brewing card enclosed',
      steepTime: 'Brewing card enclosed',
      infusions: 2,
    },
    ingredients: ['Darjeeling Delight', 'Kadak Chai', 'Regular (Everyday Assam CTC)', 'Green Tea'],
    benefits: [
      '₹290 off buying the four separately',
      '₹300 credit towards your next full-size order',
      'Brewing card for each tea with exact parameters',
    ],
    inStock: true,
    inIndex: false,
    isFeatured: true,
  },
];

/* ------------------------------------------------------------------ */

export const indexTeas = productsData.filter((p) => p.inIndex);

export const getProductBySlug = (slug: string) => productsData.find((p) => p.slug === slug);

export const getProductById = (id: string) => productsData.find((p) => p.id === id);

/* ------------------------------------------------------------------ */

export const recipesData: Recipe[] = [
  {
    id: 'r1',
    slug: 'assam-milk-tea-properly',
    title: 'Milk Tea, Properly',
    subtitle: 'Why you boil the leaf in water first',
    prepTime: '7 minutes',
    difficulty: 'Simple',
    servings: 2,
    category: 'Hot',
    image: '/photos/chai-pour.jpg',
    description:
      'The single change that improves most people’s daily cup: extract in water, then add milk. Milk proteins bind the tannins and stop the leaf giving up its strength.',
    ingredients: [
      '3 tsp Regular (Everyday Assam CTC) or Kadak Chai',
      '300 ml water',
      '200 ml full-fat milk',
      'Sugar, at the end, if at all',
    ],
    steps: [
      'Bring the water to a rolling boil and add the leaf.',
      'Boil 3 minutes. The liquor should be dark red and slightly opaque.',
      'Add the milk and bring it back just to the point of rising. Do not let it boil hard — that is what makes chai taste flat and cooked.',
      'Take it off, rest 30 seconds, strain high so it aerates.',
    ],
    proTips: [
      'Adding milk at the start is the most common mistake. Casein binds tannin, and the tea stops extracting.',
      'Sugar last. Sweeten in the pan and you will always overdo it.',
      'Pour from high above the cup to create natural micro-foam.',
    ],
    pairedTeaId: 'tirma-regular-ctc',
    datePublished: '2026-07-02',
  },
  {
    id: 'r2',
    slug: 'dhaba-chai-method',
    title: 'Highway Dhaba Chai',
    subtitle: 'Open rolling boil, cracked ginger, poured from height',
    prepTime: '8 minutes',
    difficulty: 'Simple',
    servings: 2,
    category: 'Hot',
    image: '/photos/chai-kulhad.jpg',
    description:
      'The authentic highway tapri method: reduced milk, crushed aromatics, and aeration from height into clay kulhads.',
    ingredients: [
      '3 tsp Dhaba Mix',
      '250 ml water',
      '250 ml creamy milk',
      '1 to 2 tsp raw sugar or jaggery',
    ],
    steps: [
      'Boil water and Dhaba Mix for 3 minutes so the cracked ginger and cardamom release their oils.',
      'Pour in the milk and bring to a full rolling boil.',
      'Lower heat and allow it to rise and fall twice — this reduces the water content and creates that signature thick dhaba texture.',
      'Stir in sugar at the end, then strain from a height of 12 inches into cups.',
    ],
    proTips: [
      'Use a 1:1 water to milk ratio for authentic highway body.',
      'The high pour is not just theatrics; aeration softens astringency.',
      'Clay cups absorb extra moisture, further concentrating the brew.',
    ],
    pairedTeaId: 'tirma-dhaba-mix',
    datePublished: '2026-08-10',
  },
  {
    id: 'r3',
    slug: 'darjeeling-delight-steep',
    title: 'Darjeeling Orthodox, The Gentle Pot',
    subtitle: 'Three minutes at 90°C, amber cup, no milk ever',
    prepTime: '5 minutes',
    difficulty: 'Gentle',
    servings: 2,
    category: 'Hot',
    image: '/photos/garden-hills.jpg',
    description:
      'High-grown Himalayan orthodox tea requires gentleness. Never boiling water, never boiled in a pan, and never drowned in milk.',
    ingredients: [
      '5 g Darjeeling Delight',
      '450 ml water at 85–90°C',
    ],
    steps: [
      'Bring water to a boil and let it sit off the flame for 60 seconds.',
      'Warm your ceramic or glass pot with a splash of hot water, then discard it.',
      'Add the whole leaves and pour the hot water over them.',
      'Steep covered for 3 to 4 minutes. Strain completely into cups.',
    ],
    proTips: [
      'No milk. Milk fats coat the tongue and completely block the floral muscatel aromatics.',
      'A second steep for 4 minutes yields an even sweeter, softer cup.',
      'Glass teaware allows you to watch the delicate whole leaves unfurl.',
    ],
    pairedTeaId: 'tirma-darjeeling-delight',
    datePublished: '2026-06-19',
  },
  {
    id: 'r4',
    slug: 'cold-brew-green',
    title: 'Cold Brew Green, Overnight',
    subtitle: 'No heat, no bitterness, no timing to get wrong',
    prepTime: '2 minutes, then sleep',
    difficulty: 'Simple',
    servings: 4,
    category: 'Cold',
    image: '/photos/cup-green-table.jpg',
    description:
      'Cold water extracts the sweet amino acids and leaves most of the catechins behind, which is a technical way of saying it is impossible to make this bitter.',
    ingredients: ['10 g Green Tea', '1 litre cold filtered water'],
    steps: [
      'Put the leaf and the water in a jar. That is the whole method.',
      'Fridge, 8 to 12 hours.',
      'Strain. It keeps two days and gets rounder on the second.',
    ],
    proTips: [
      'Do not be tempted to use warm water to speed it up — you lose the entire advantage.',
      'The spent leaf is still good for one hot infusion afterwards.',
      'A strip of lemon peel in the jar, not juice.',
    ],
    pairedTeaId: 'tirma-green-tea',
    datePublished: '2026-05-28',
  },
];

export const journalPostsData: JournalPost[] = [
  {
    id: 'j1',
    slug: 'assam-is-not-a-hill-tea',
    title: 'Assam Is Not a Hill Tea',
    chapter: 'Notes from the valley',
    excerpt:
      'Almost every premium tea brand claims altitude, because altitude sounds like quality. Assam sits barely above sea level, and that is precisely why it tastes the way it does.',
    category: 'Origin',
    readTime: '6 min',
    publishDate: '2026-09-02',
    author: { name: 'TIRMA', role: 'Sourcing desk', avatar: '/images/logo.jpeg' },
    image: '/photos/garden-walk-india.jpg',
    tags: ['Assam', 'Terroir', 'Sourcing'],
    content: {
      introduction:
        'Read enough tea packaging and you will conclude that every good leaf grows on a mountain. High-grown, mist-shrouded, eighteen hundred metres. It is a useful shorthand for quality and it is often true — for Darjeeling, for Nilgiri, for Ceylon. It is not true for Assam, and pretending otherwise misunderstands the tea entirely.',
      sections: [
        {
          heading: 'Forty-five metres',
          body: 'The Brahmaputra valley gardens sit between roughly 45 and 120 metres above sea level. Flat, hot, humid, and flooded often enough that the silt keeps renewing itself. By the logic of the packaging, this should be poor tea country. It is instead the largest contiguous tea-growing region on earth, and the reason is that Camellia sinensis var. assamica — a different variety from the Chinese bush, with a leaf two or three times the size — evolved for exactly these conditions.',
          quote: 'Altitude makes a leaf delicate. Heat and silt make it strong. Those are different goals.',
        },
        {
          heading: 'What the heat does',
          body: 'Slow growth at altitude concentrates aromatics and gives you the muscatel and floral notes a Darjeeling is prized for. Fast growth in valley heat builds a thick leaf heavy in polyphenols, which oxidise into the thearubigins that give Assam its colour, its body and its malt. It is a bigger, blunter, more useful tea. It is also the only kind that survives being boiled in milk, which is why the Indian morning cup is built on it.',
        },
        {
          heading: 'CTC vs Orthodox',
          body: 'For milk tea, CTC (Crush, Tear, Curl) is the honest workhorse: it breaks down cell walls to extract rapid strength and red colour in minutes. When sourced from proper estate leaf rather than dust and factory sweepings, an Assam CTC provides a rich, malty foundation that supermarket tea bags can never match.',
        },
      ],
      conclusion:
        'We say 45 to 120 metres on the pack because it is true and because the alternative — borrowing a mountain we do not grow on — would mean the rest of what we tell you is worth less. Assam is a lowland tea. That is not an apology.',
    },
  },
  {
    id: 'j2',
    slug: 'why-dhaba-chai-tastes-better',
    title: 'Why Highway Dhaba Chai Tastes Better',
    chapter: 'Notes from the road',
    excerpt:
      'It is not secret syrups or dirty vessels. It is the physics of milk reduction, coarse-cracked spices, and pouring from height.',
    category: 'Craft',
    readTime: '5 min',
    publishDate: '2026-08-11',
    author: { name: 'TIRMA', role: 'Sourcing desk', avatar: '/images/logo.jpeg' },
    image: '/photos/chai-kulhad.jpg',
    tags: ['Chai', 'Dhaba Mix', 'Brewing'],
    content: {
      introduction:
        'Everyone who has driven on an Indian highway knows the experience: a nondescript shack by the road makes a cup of chai that puts upscale urban tea bars to shame. There is actual science behind why.',
      sections: [
        {
          heading: 'The milk reduction boil',
          body: 'At home, people are in a hurry and turn off the gas the moment milk starts to rise. A dhaba wallah lets the chai roll up and down several times. This gentle reduction evaporates excess water from the milk, caramelizes trace lactose sugars, and binds tea tannins into a velvety, thick mouthfeel.',
          quote: 'Chai is an emulsion. The heat and boiling time are what bind the fats and liquor together.',
        },
        {
          heading: 'Coarse cracked ginger vs fine powder',
          body: 'Powdered ginger and cardamom burn easily and create bitter sediment. A dhaba uses whole spices smashed right into the pot. Coarse chunks release their volatile oils steadily into the liquid without breaking into powdery grit.',
        },
        {
          heading: 'The aerated pull',
          body: 'Poured from eighteen inches above the glass, the long cascade forces air into the liquid. It creates a head of tiny bubbles, cools the tea to drinking temperature instantly, and exposes aromatic compounds to the air right as it reaches your nose.',
        },
      ],
      conclusion:
        'We blended Dhaba Mix with high-fire CTC and cracked whole spices so you can reproduce that exact road-trip comfort on your kitchen stove.',
    },
  },
  {
    id: 'j3',
    slug: 'what-makes-darjeeling-muscatel',
    title: 'What Actually Makes Darjeeling Muscatel?',
    chapter: 'Notes from the hills',
    excerpt:
      'The spicy, grape-like muscatel note of high-grown Darjeeling is not an added flavouring. It is Himalayan mist, elevation, and ecology at work.',
    category: 'Terroir',
    readTime: '6 min',
    publishDate: '2026-07-20',
    author: { name: 'TIRMA', role: 'Sourcing desk', avatar: '/images/logo.jpeg' },
    image: '/photos/garden-hills.jpg',
    tags: ['Darjeeling', 'Orthodox', 'Terroir'],
    content: {
      introduction:
        'Darjeeling tea has been called the champagne of teas for over a century. The core of its reputation is "muscatel" — a distinct aroma reminiscent of sweet Muscat grapes and warm mountain honey.',
      sections: [
        {
          heading: 'Altitude and slow growth',
          body: 'At 1,400 to 1,800 metres in the eastern Himalayas, temperatures drop sharply at night while rolling mists shield the tea bushes from direct scorching sun. This cold and low light slows cellular growth, giving the plant weeks longer to synthesize complex aromatic terpenes.',
          quote: 'When a plant has to struggle against cold mountain mist, it builds character rather than mass.',
        },
        {
          heading: 'The leafhopper connection',
          body: 'During early summer, tiny green leafhopper insects feed on the tender tea buds. In response, the tea bush produces defensive volatile phytochemicals — specifically geraniol and linalool. When orthodox leaves are gently withered and rolled, these defense compounds develop into the celebrated muscatel note.',
        },
        {
          heading: 'Why water temperature matters',
          body: 'Boiling water at 100°C destroys delicate floral esters in seconds. Darjeeling leaf should be steeped at 85 to 90°C. That slight step-down keeps the astringency low and lets the honeyed finish shine.',
        },
      ],
      conclusion:
        'Understanding how nature produces muscatel is why we never blend Darjeeling with lowland filler teas. When you taste it clear, the mountains speak for themselves.',
    },
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya R.',
    role: 'Reordered four times',
    location: 'Bengaluru',
    quote:
      'I switched from a supermarket brand I had bought for nine years. The difference is not subtle — the Darjeeling Delight has that genuine floral muscatel finish without a trace of harshness.',
    rating: 5,
    productMentioned: 'Darjeeling Delight',
    avatar: '',
  },
  {
    id: 't2',
    name: 'Imran S.',
    role: 'Daily morning ritual',
    location: 'Hyderabad',
    quote:
      'Bought the Index Box first and ended up reordering Kadak Chai in the 1 kg sack. It actually cuts through milk at seven in the morning without needing three scoops.',
    rating: 5,
    productMentioned: 'Kadak Chai',
    avatar: '',
  },
  {
    id: 't3',
    name: 'Meera K.',
    role: 'Weekend chai maker',
    location: 'Pune',
    quote:
      'The Dhaba Mix is the closest thing to highway chai I have ever made at home. The cracked ginger and cardamom are whole and visible in the pack.',
    rating: 5,
    productMentioned: 'Dhaba Mix',
    avatar: '',
  },
  {
    id: 't4',
    name: 'Rohit D.',
    role: 'Sceptical about green tea',
    location: 'Delhi',
    quote:
      'I have never liked green tea and said so. This one is sweet and does not have that seaweed thing. The instruction not to use boiling water turned out to be the entire secret.',
    rating: 5,
    productMentioned: 'Green Tea',
    avatar: '',
  },
];

/** The four claims we are prepared to be held to. */
export const standards = [
  {
    n: '01',
    title: 'The harvest month is on the pack',
    body: 'Not a best-before two years out. The month it was plucked, so you can work out how old your tea actually is.',
  },
  {
    n: '02',
    title: 'Whole leaf, or the right grade for the job',
    body: 'Orthodox leaf where it matters, honest CTC where CTC is genuinely better. Never dust, never fannings, never sweepings sold as something else.',
  },
  {
    n: '03',
    title: 'Nothing is powdered to hide it',
    body: 'Spices cracked coarse rather than ground into dust. If an ingredient cannot be identified by looking at it, we have not earned your trust in it.',
  },
  {
    n: '04',
    title: 'Two terroirs, named',
    body: 'Upper Assam and Darjeeling. We tell you the region, the elevation and the harvest, and we do not borrow a mountain we do not grow on.',
  },
];
