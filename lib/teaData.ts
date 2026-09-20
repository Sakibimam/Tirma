import { Product, Recipe, JournalPost, Testimonial } from '@/types';

/* ------------------------------------------------------------------ *
 * The four index teas carry the site's colour. Everything else in the
 * catalogue borrows the palette of whichever index tea it sits nearest.
 * ------------------------------------------------------------------ */

export const productsData: Product[] = [
  {
    id: 'tirma-assam-second-flush',
    photo: '/photos/leaf-black-dry.jpg',
    extraPhotos: ['/photos/chai-pour.jpg', '/photos/garden-walk-india.jpg'],
    slug: 'second-flush-assam',
    index: '01',
    title: 'Second Flush Assam',
    subtitle: 'Orthodox whole leaf · Upper Assam',
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
    pitch: 'Strong enough to hold its shape against milk. Good enough to drink without it.',
    price: 480,
    originalPrice: 560,
    baseWeight: '100 g',
    cupsPerPack: 40,
    rating: 4.9,
    reviewCount: 218,
    description:
      'Plucked in June, when the heat off the Brahmaputra pushes the bush hardest and the leaf turns tippy and gold. Rolled orthodox, so it stays whole instead of being shredded into dust. The liquor comes up bright copper with malt sitting underneath it.',
    story:
      'Assam is not a hill tea, whatever the packaging elsewhere tells you. These gardens sit on river flats barely above sea level, and that is exactly the point — the heat and the silt are what make assamica leaf thick, malty and strong enough to take milk without disappearing into it. Second flush is the June pluck, the shortest window of the year and the only one that produces the golden tip.',
    packageSizes: [
      { label: '100 g pouch', grams: 100, price: 480 },
      { label: '250 g tin', grams: 250, price: 1080 },
      { label: '500 g refill', grams: 500, price: 1960 },
    ],
    origin: 'Upper Assam, Brahmaputra Valley',
    elevation: '45–120 m — river flats, not hills',
    harvest: 'Second flush · June 2026',
    pluckingStandard: 'Two leaves and a bud, golden tip retained',
    flavorNotes: ['Malt', 'Cocoa', 'Dried date', 'Brisk finish'],
    palateDescription:
      'Thick and round at the front, drying at the edges. The malt reads clearly through milk, which is the whole reason this grade exists.',
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: '95°C — just off the boil',
      ratio: '3 g to 200 ml',
      steepTime: '3 minutes black, 4 minutes if milk is going in',
      infusions: 2,
      vessel: 'Any pot. This tea is not precious.',
      withMilk:
        'Steep 4 minutes at full strength, then add hot milk to taste. Do not boil the leaf in milk — that is for CTC, and it flattens orthodox leaf.',
    },
    ingredients: ['Whole leaf orthodox Assam black tea'],
    benefits: [
      'Whole leaf, so it can be re-steeped — the second cup is softer and sweeter',
      'No fannings or dust, which is what makes supermarket tea bitter past three minutes',
      'Harvest month printed on every pack',
    ],
    inStock: true,
    inIndex: true,
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'tirma-assam-green-first-flush',
    photo: '/photos/leaf-green-dry.jpg',
    extraPhotos: ['/photos/cup-green.jpg', '/photos/garden-hills.jpg'],
    slug: 'first-flush-assam-green',
    index: '02',
    title: 'First Flush Assam Green',
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
    pitch: 'Green tea that forgives a rough pour. Almost no bite, even if you overshoot the timer.',
    price: 440,
    originalPrice: 510,
    baseWeight: '100 g',
    cupsPerPack: 40,
    rating: 4.85,
    reviewCount: 146,
    description:
      'The March pluck, taken before the rains arrive and thin the leaf out. Pan-fired within hours of leaving the garden — heat stops the leaf oxidising, which is why it stays green instead of turning brown. Pours pale jade, sweet, grassy, with very little astringency.',
    story:
      'Most green tea sold in India is imported, blended and old. This one is made a few hours from where it grew, from the same assamica bush that gives us the black — just stopped early. Firing in a pan rather than steaming leaves it rounder and less marine than a Japanese green, which is usually what people mean when they say they do not like green tea.',
    packageSizes: [
      { label: '100 g pouch', grams: 100, price: 440 },
      { label: '250 g tin', grams: 250, price: 980 },
    ],
    origin: 'Upper Assam, Brahmaputra Valley',
    elevation: '60–110 m',
    harvest: 'First flush · March 2026',
    pluckingStandard: 'Bud and first leaf',
    flavorNotes: ['Sweet grass', 'Green almond', 'Melon rind', 'Clean finish'],
    palateDescription:
      'Light-bodied and slightly sweet. The finish is clean rather than drying, which is unusual for a green at this price.',
    caffeineLevel: 'Medium',
    takesMilk: false,
    brewingGuide: {
      temp: '75–80°C — never boiling',
      ratio: '3 g to 200 ml',
      steepTime: '2 to 3 minutes',
      infusions: 3,
      vessel: 'Glass, so you can watch the leaf open',
    },
    ingredients: ['Whole leaf pan-fired Assam green tea'],
    benefits: [
      'Three good infusions from one measure, so the cost per cup is lower than it looks',
      'Low astringency — drinkable without sugar from the first cup',
      'Naturally lower in caffeine than the black from the same garden',
    ],
    inStock: true,
    inIndex: true,
    isPopular: true,
  },
  {
    id: 'tirma-kashmiri-kahwa',
    photo: '/photos/cup-saffron.jpg',
    extraPhotos: ['/photos/saffron-threads.jpg', '/photos/leaf-bowl.jpg'],
    slug: 'kashmiri-kahwa',
    index: '03',
    title: 'Kashmiri Kahwa',
    subtitle: 'Green leaf, saffron, cardamom, almond · Kashmir Valley',
    category: 'Spiced Blend',
    liquor: {
      name: 'Pale gold',
      base: '#7A5510',
      ink: '#FDF3DC',
      muted: '#D9B97A',
      line: 'rgba(253, 243, 220, 0.22)',
      accent: '#FFC94D',
    },
    pitch: 'Real saffron from Pampore, not colouring. Count the threads in the pack.',
    price: 720,
    originalPrice: 840,
    baseWeight: '100 g',
    cupsPerPack: 35,
    rating: 4.94,
    reviewCount: 173,
    description:
      'Made the way it is made in Srinagar homes: green leaf, a few threads of saffron, green cardamom cracked by hand rather than ground, and slivered almond. Pours pale gold. No milk, no sugar — it does not need either.',
    story:
      'Saffron is the most adulterated spice in the world, and kahwa is where most of the faking happens: safflower, dyed corn silk, turmeric. Ours comes from Pampore, the plateau south of Srinagar where Kashmiri saffron has been grown for roughly a thousand years, and it goes into the pack as whole threads so you can see exactly what you paid for. Cardamom is cracked, not powdered — ground cardamom loses most of its oil within a fortnight.',
    packageSizes: [
      { label: '100 g pouch', grams: 100, price: 720 },
      { label: '200 g gift tin', grams: 200, price: 1380 },
    ],
    origin: 'Kashmir Valley · saffron from Pampore',
    elevation: '1,600 m',
    harvest: 'Saffron October 2025 · leaf spring 2026',
    flavorNotes: ['Saffron', 'Green cardamom', 'Toasted almond', 'Dried rose'],
    palateDescription:
      'Warm and faintly honeyed without any sugar in it. The saffron arrives late, in the finish, rather than up front.',
    caffeineLevel: 'Low',
    takesMilk: false,
    brewingGuide: {
      temp: '85°C',
      ratio: '4 g to 250 ml',
      steepTime: '4 minutes, covered',
      infusions: 2,
      vessel: 'Traditionally a samovar. A covered pot is fine.',
    },
    ingredients: [
      'Green tea leaf',
      'Kashmiri saffron (Pampore)',
      'Green cardamom, hand-cracked',
      'Almond slivers',
      'Dried rose petal',
    ],
    benefits: [
      'Whole saffron threads, visible in the pack — nothing powdered or dyed',
      'No added sugar; the sweetness is from the almond and rose',
      'Low caffeine, so it works after dinner',
    ],
    inStock: true,
    inIndex: true,
    isFeatured: true,
  },
  {
    id: 'tirma-blue-pea-flower',
    photo: '/photos/cup-bluepea-lime.jpg',
    extraPhotos: ['/photos/bluepea-dry.jpg', '/photos/cup-bluepea-colour.jpg'],
    slug: 'blue-pea-flower',
    index: '04',
    title: 'Blue Pea Flower',
    subtitle: 'Whole shade-dried blossoms · Kamrup, Assam',
    botanicalName: 'Clitoria ternatea',
    category: 'Blue Tea',
    liquor: {
      name: 'Sapphire, turning violet',
      base: '#1B2660',
      ink: '#E9EAFB',
      muted: '#9FA6DC',
      line: 'rgba(233, 234, 251, 0.20)',
      accent: '#8E7BFF',
    },
    pitch: 'Add lime and it turns violet in front of you. Caffeine-free, so it is the one you can drink at ten at night.',
    price: 520,
    baseWeight: '40 g',
    cupsPerPack: 40,
    rating: 4.88,
    reviewCount: 261,
    description:
      'Whole aparajita blossoms, dried in shade so they keep their colour instead of browning in the sun. Steeps a deep sapphire in about ninety seconds. Barely sweet, no tannin, and nothing to go bitter on you.',
    story:
      'The colour change is not a trick. Blue pea is loaded with anthocyanins, the same pigment family that makes red cabbage and blueberries what they are, and anthocyanins shift with pH. Squeeze in lime and the liquor swings from blue through indigo to violet as the acid hits. Children work this out faster than adults do. It is also entirely caffeine-free, which is the practical reason most people keep buying it.',
    packageSizes: [
      { label: '40 g pouch', grams: 40, price: 520 },
      { label: '100 g jar', grams: 100, price: 1150 },
    ],
    origin: 'Kamrup, Lower Assam',
    elevation: '50–90 m',
    harvest: 'Rolling bloom · picked through the monsoon',
    pluckingStandard: 'Whole open blossoms, hand-picked at dawn',
    flavorNotes: ['Barely sweet', 'Soft pea shoot', 'Clean', 'No tannin at all'],
    palateDescription:
      'Very light. The point of this tea is colour and the absence of caffeine rather than a big flavour, and it is honest about that.',
    caffeineLevel: 'None',
    takesMilk: false,
    brewingGuide: {
      temp: '90°C',
      ratio: '8 to 10 blossoms to 250 ml',
      steepTime: '90 seconds for blue, 3 minutes for a deeper indigo',
      infusions: 2,
      vessel: 'Glass. Anything else wastes the colour.',
      withMilk: 'Not for milk. For the violet, add lime or lemon after steeping, never during.',
    },
    ingredients: ['100% whole dried blue pea blossoms'],
    benefits: [
      'Completely caffeine-free — safe last thing at night',
      'Naturally free of tannin, so it cannot turn bitter however long you leave it',
      'Holds colour cold, which makes it the best iced tea in the range',
    ],
    inStock: true,
    inIndex: true,
    isPopular: true,
  },

  /* ---------- Catalogue beyond the index ---------- */

  {
    id: 'tirma-masala-chai-whole-spice',
    photo: '/photos/chai-spices.jpg',
    extraPhotos: ['/photos/chai-pour.jpg', '/photos/chai-kulhad.jpg'],
    slug: 'masala-chai-whole-spice',
    index: '05',
    title: 'Masala Chai, Whole Spice',
    subtitle: 'Assam CTC with cracked spice · blended to order',
    category: 'Spiced Blend',
    liquor: {
      name: 'Red-brown',
      base: '#6E2C0C',
      ink: '#FBEFE2',
      muted: '#D8A87F',
      line: 'rgba(251, 239, 226, 0.22)',
      accent: '#F0A84E',
    },
    pitch: 'Ground spice is stale within a fortnight. Ours is cracked, so you can still see what it is.',
    price: 420,
    baseWeight: '200 g',
    cupsPerPack: 60,
    rating: 4.91,
    reviewCount: 402,
    description:
      'Assam CTC — the right leaf for this job, because chai wants a tea that gives everything up fast into boiling milk. Blended with green cardamom, ginger, cinnamon bark, clove and black pepper, all cracked rather than powdered.',
    story:
      'Almost every masala chai on a shelf is powdered spice, and powdered spice has a shelf life measured in weeks: the volatile oils that carry the smell are gone long before the best-before date. We crack the spice coarse and blend in small lots so the cardamom still snaps when you press it. You should be able to identify every ingredient by looking at the pack.',
    packageSizes: [
      { label: '200 g pouch', grams: 200, price: 420 },
      { label: '500 g tin', grams: 500, price: 940 },
    ],
    origin: 'Assam leaf · spice from Kerala and Kashmir',
    elevation: '45–120 m',
    harvest: 'Blended in small lots, monthly',
    flavorNotes: ['Green cardamom', 'Fresh ginger heat', 'Cinnamon', 'Pepper at the back'],
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: 'Rolling boil',
      ratio: '2 tsp to 150 ml water and 100 ml milk',
      steepTime: 'Boil the leaf and spice in water 3 minutes, add milk, bring back up, take it off',
      infusions: 1,
      vessel: 'A saucepan, honestly',
      withMilk: 'This one is built for milk. Sugar is optional and goes in at the end.',
    },
    ingredients: [
      'Assam CTC black tea',
      'Green cardamom, cracked',
      'Dried ginger',
      'Cinnamon bark',
      'Clove',
      'Black pepper',
    ],
    benefits: [
      'Whole cracked spice keeps its oils months longer than powder',
      'Blended monthly in small lots rather than warehoused',
      'No added sugar, no flavouring, no anti-caking agent',
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'tirma-everyday-assam-ctc',
    photo: '/photos/chai-kulhad.jpg',
    extraPhotos: ['/photos/chai-pour.jpg', '/photos/leaf-black-dry.jpg'],
    slug: 'everyday-assam-ctc',
    index: '06',
    title: 'Everyday Assam CTC',
    subtitle: 'BOP grade · the daily milk tea',
    category: 'Black Tea',
    liquor: {
      name: 'Red-brown',
      base: '#6E2C0C',
      ink: '#FBEFE2',
      muted: '#D8A87F',
      line: 'rgba(251, 239, 226, 0.22)',
      accent: '#F0A84E',
    },
    pitch: 'The one for four cups a day. Same gardens as the orthodox, a third of the price.',
    price: 320,
    baseWeight: '250 g',
    cupsPerPack: 100,
    rating: 4.79,
    reviewCount: 511,
    description:
      'Crush-tear-curl from the same Upper Assam gardens as our orthodox leaf. Strong, quick and red in the cup. This is not a contemplative tea and does not pretend to be — it is what you make at seven in the morning with milk and too little time.',
    story:
      'There is a snobbery about CTC that we do not share. For milk tea it is the correct leaf: the tearing exposes far more surface, so it gives up colour and strength in the two minutes a boiling pan allows. What separates good CTC from bad is not the process, it is whether the garden sold you leaf or sold you the sweepings.',
    packageSizes: [
      { label: '250 g pouch', grams: 250, price: 320 },
      { label: '500 g pouch', grams: 500, price: 590 },
      { label: '1 kg sack', grams: 1000, price: 1090 },
    ],
    origin: 'Upper Assam, Brahmaputra Valley',
    elevation: '45–120 m',
    harvest: 'Rolling · packed monthly',
    flavorNotes: ['Strong', 'Red', 'Malty', 'Takes sugar well'],
    caffeineLevel: 'High',
    takesMilk: true,
    brewingGuide: {
      temp: 'Rolling boil',
      ratio: '1.5 tsp to 150 ml water and 100 ml milk',
      steepTime: '3 minutes in water, then milk',
      infusions: 1,
      withMilk: 'Built for it. Boil the leaf in water first, then add milk — not the other way round.',
    },
    ingredients: ['Assam CTC black tea, BOP grade'],
    benefits: [
      'Roughly ₹3 a cup, which is less than a tea bag of far worse tea',
      'Graded BOP — no dust, no sweepings',
      'Same gardens as the orthodox second flush',
    ],
    inStock: true,
  },
  {
    id: 'tirma-index-box',
    photo: '/photos/leaf-bowl.jpg',
    extraPhotos: ['/photos/cup-green.jpg', '/photos/cup-bluepea-lime.jpg', '/photos/cup-saffron.jpg'],
    slug: 'the-index-box',
    index: '00',
    title: 'The Index Box',
    subtitle: 'All four index teas · 25 g each',
    category: 'Sets',
    liquor: {
      name: 'All four',
      base: '#171512',
      ink: '#F3EFE7',
      muted: '#A39A8B',
      line: 'rgba(243, 239, 231, 0.18)',
      accent: '#E0B15C',
    },
    pitch: 'The cheapest way to find out which one is yours. About ten cups of each.',
    price: 1190,
    originalPrice: 1480,
    baseWeight: '100 g total',
    cupsPerPack: 40,
    rating: 4.96,
    reviewCount: 384,
    description:
      'Twenty-five grams each of the Second Flush Assam, the First Flush Green, the Kashmiri Kahwa and the Blue Pea Flower. Roughly ten cups apiece — enough to actually live with a tea rather than judge it on one cup.',
    story:
      'Most people arrive knowing they like tea and not knowing what kind. Four small pouches settles it in a fortnight, and the credit comes off your next full-size order.',
    packageSizes: [{ label: '4 × 25 g box', grams: 100, price: 1190 }],
    origin: 'Assam and Kashmir',
    elevation: '45 m to 1,600 m',
    harvest: 'Current season, all four',
    flavorNotes: ['Copper', 'Jade', 'Gold', 'Sapphire'],
    caffeineLevel: 'Medium',
    takesMilk: true,
    brewingGuide: {
      temp: 'Each pouch is printed with its own',
      ratio: 'Card enclosed',
      steepTime: 'Card enclosed',
      infusions: 2,
    },
    ingredients: ['Second Flush Assam', 'First Flush Assam Green', 'Kashmiri Kahwa', 'Blue Pea Flower'],
    benefits: [
      '₹290 off buying the four separately',
      '₹300 credit against your next full-size order',
      'Brewing card for each tea, with temperatures that are not guesses',
    ],
    inStock: true,
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
    slug: 'the-violet-turn',
    title: 'The Violet Turn',
    subtitle: 'Blue pea, lime, one glass, ninety seconds of chemistry',
    prepTime: '5 minutes',
    difficulty: 'Simple',
    servings: 1,
    category: 'Cold',
    image: '/photos/cup-bluepea-colour.jpg',
    description:
      'The party trick that is not a trick. Brew the blossoms, pour over ice, then add lime at the table and watch the pH do the work.',
    ingredients: [
      '10 blue pea blossoms',
      '250 ml water at 90°C',
      'Half a lime',
      'Ice',
      'Honey, only if you want it',
    ],
    steps: [
      'Steep the blossoms 3 minutes for a deep indigo. Strain.',
      'Cool to room temperature, or straight over ice if you are impatient.',
      'Pour into a clear glass. Anything opaque wastes the whole point.',
      'Add the lime at the table, in front of whoever you are showing off to. It turns violet as the acid drops the pH.',
    ],
    proTips: [
      'Lime after steeping, never during — acid in hot water dulls the blue before it can shift.',
      'More lime means more violet, right through to a pink at the far end.',
      'It holds colour overnight in the fridge, so make a jug.',
    ],
    pairedTeaId: 'tirma-blue-pea-flower',
    datePublished: '2026-08-14',
  },
  {
    id: 'r2',
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
      '3 tsp Everyday Assam CTC, or 4 tsp Second Flush Assam',
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
      'Orthodox leaf wants 4 minutes and a gentler boil than CTC.',
    ],
    pairedTeaId: 'tirma-assam-second-flush',
    datePublished: '2026-07-02',
  },
  {
    id: 'r3',
    slug: 'kahwa-in-a-samovar',
    title: 'Kahwa, the Srinagar Way',
    subtitle: 'Covered pot, four minutes, no sugar',
    prepTime: '8 minutes',
    difficulty: 'Gentle',
    servings: 2,
    category: 'Hot',
    image: '/photos/cup-saffron.jpg',
    description:
      'Kahwa is usually ruined in one of two ways: water too hot, or sugar. Neither is traditional and both bury the saffron.',
    ingredients: [
      '8 g Kashmiri Kahwa',
      '500 ml water at 85°C',
      'A few extra almond slivers',
    ],
    steps: [
      'Heat the water and let it stand a minute off the boil. Boiling water scorches green leaf and turns it bitter.',
      'Add the blend, cover immediately. Covering matters — the cardamom oil leaves with the steam otherwise.',
      'Four minutes. Strain into small cups.',
      'Drop a few almond slivers into each cup rather than the pot.',
    ],
    proTips: [
      'No milk, ever. It flocculates against the saffron and kills the colour.',
      'The saffron shows up in the finish, not the first sip. Give it a moment.',
      'A second steep at 5 minutes is almost as good as the first.',
    ],
    pairedTeaId: 'tirma-kashmiri-kahwa',
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
    ingredients: ['10 g First Flush Assam Green', '1 litre cold filtered water'],
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
    pairedTeaId: 'tirma-assam-green-first-flush',
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
          body: 'Slow growth at altitude concentrates aromatics and gives you the muscatel and floral notes a Darjeeling is prized for. Fast growth in valley heat builds a thick leaf heavy in polyphenols, which oxidise into the thearubigins that give Assam its colour, its body and its malt. It is a bigger, blunter, more useful tea. It is also the only kind that survives being drowned in milk, which is why the Indian cup is built on it and a Darjeeling is not.',
        },
        {
          heading: 'Second flush, and why June',
          body: 'The bush pushes three main flushes. The first, in March, is lighter and goes to green. The second, in June, is the one worth paying for: the leaf comes with golden tip, the malt is at its peak, and the window is only a few weeks wide. After the monsoon the rains dilute everything and the autumn flush is thinner. When a pack says second flush and gives you the month, you can check it against this. When it says nothing, assume the cheapest available.',
        },
      ],
      conclusion:
        'We say 45 to 120 metres on the pack because it is true and because the alternative — borrowing a mountain we do not grow on — would mean the rest of what we tell you is worth less. Assam is a lowland tea. That is not an apology.',
    },
  },
  {
    id: 'j2',
    slug: 'how-saffron-gets-faked',
    title: 'How Saffron Gets Faked',
    chapter: 'Notes from the valley',
    excerpt:
      'Saffron is the most adulterated spice on earth, and kahwa is where most of it lands. Here is what the fakes look like and how to check the pack in your hand.',
    category: 'Sourcing',
    readTime: '7 min',
    publishDate: '2026-08-11',
    author: { name: 'TIRMA', role: 'Sourcing desk', avatar: '/images/logo.jpeg' },
    image: '/photos/saffron-threads.jpg',
    tags: ['Kashmir', 'Saffron', 'Adulteration'],
    content: {
      introduction:
        'At its real price, saffron costs more per gram than silver. That gap between what it costs and what people will pay is filled, reliably, with safflower petals, dyed corn silk, turmeric, and sometimes just red-dyed shredded paper. Kahwa is an ideal hiding place, because the threads are already loose among tea leaves and nobody is examining them.',
      sections: [
        {
          heading: 'The four common fakes',
          body: 'Safflower is the most frequent: flat, uniformly red-orange petals with no trumpet at one end. Dyed corn silk is stringy and too even in colour. Turmeric shows up in powdered kahwa blends, where it does the colouring job invisibly. And in ground form, almost anything goes — which is the single best argument for never buying powdered saffron, or a blend that hides it.',
          quote: 'If you cannot count the threads, you cannot know what you bought.',
        },
        {
          heading: 'What real Kashmiri saffron looks like',
          body: 'A genuine thread is a stigma: deep crimson, trumpet-shaped, flaring at one end and tapering to a pale point at the other. Kashmiri saffron in particular is short, thick and very dark — Pampore stock is graded mongra when the pale style is removed entirely. Drop a thread in warm water and the colour should bleed out slowly over several minutes while the thread itself stays red. Fakes release colour instantly and go pale.',
        },
        {
          heading: 'Pampore',
          body: 'Saffron has been grown on the Pampore plateau, south of Srinagar, for roughly a thousand years. The crop is small, the harvest is entirely by hand over about three weeks in late October, and each flower yields three stigmas. That arithmetic — around 150,000 flowers per kilogram — is the whole reason the price is what it is, and the whole reason faking it pays.',
        },
      ],
      conclusion:
        'We put whole threads in the pack rather than blending powder, because it is the only claim a customer can actually verify. Open the pouch, find the threads, look for the trumpet. If a brand will not let you do that, ask why.',
    },
  },
  {
    id: 'j3',
    slug: 'why-blue-tea-turns-violet',
    title: 'Why Blue Tea Turns Violet',
    chapter: 'Notes from the valley',
    excerpt:
      'The colour change is chemistry, not marketing. A short explanation of anthocyanins, pH, and why you must add the lime after brewing rather than during.',
    category: 'Science',
    readTime: '4 min',
    publishDate: '2026-07-20',
    author: { name: 'TIRMA', role: 'Sourcing desk', avatar: '/images/logo.jpeg' },
    image: '/photos/cup-bluepea-lime.jpg',
    tags: ['Blue tea', 'Chemistry', 'Caffeine-free'],
    content: {
      introduction:
        'Blue pea flower gets sold as magic often enough that people assume something has been added. Nothing has. The pigment is doing what that class of pigment always does.',
      sections: [
        {
          heading: 'Anthocyanins shift with pH',
          body: 'Clitoria ternatea is unusually rich in ternatins, a group of anthocyanins — the same pigment family behind red cabbage, blueberries and black rice. Anthocyanins change structure depending on how acidic their surroundings are, and each structure absorbs light differently. Near neutral they read blue. Push the pH down with acid and they shift through indigo to violet, and further still to pink.',
          quote: 'It is the same reason red cabbage water turns pink in vinegar. Tea is just a better stage for it.',
        },
        {
          heading: 'Why lime goes in afterwards',
          body: 'Acid present during a hot steep degrades some of the pigment before it has finished extracting, so you end up with a weaker blue to start from and a muddier violet to finish at. Brew clean, strain, then add the lime at the table. You get a stronger starting colour and the full transition happens where someone can see it.',
        },
        {
          heading: 'The part that actually sells it',
          body: 'For all the colour, the reason people reorder is that it has no caffeine and no tannin whatsoever. There is nothing in it to go bitter, so an over-steeped cup is simply a darker cup. It is the only tea in our range that a child can drink, that you can leave brewing and forget, and that will not keep you awake.',
        },
      ],
      conclusion:
        'Explaining the mechanism does not make it less good to watch. It just means you know what you are drinking.',
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
      'I switched from a supermarket brand I had bought for nine years. The difference is not subtle — the second flush still tastes like tea after four minutes instead of turning into tannin.',
    rating: 5,
    productMentioned: 'Second Flush Assam',
    avatar: '',
  },
  {
    id: 't2',
    name: 'Imran S.',
    role: 'Bought the Index Box first',
    location: 'Hyderabad',
    quote:
      'Bought the box expecting to like the Assam and ended up ordering the kahwa twice. You can actually see the saffron threads, which I did not expect at this price.',
    rating: 5,
    productMentioned: 'Kashmiri Kahwa',
    avatar: '',
  },
  {
    id: 't3',
    name: 'Meera K.',
    role: 'Drinks it at night',
    location: 'Pune',
    quote:
      'I wanted something for the evening that was not chamomile. The blue pea is now a nightly thing, and my daughter asks for the lime bit every single time.',
    rating: 5,
    productMentioned: 'Blue Pea Flower',
    avatar: '',
  },
  {
    id: 't4',
    name: 'Rohit D.',
    role: 'Sceptical about green tea',
    location: 'Delhi',
    quote:
      'I have never liked green tea and said so. This one is sweet and does not have that seaweed thing. The instruction not to use boiling water turned out to be the entire problem all along.',
    rating: 5,
    productMentioned: 'First Flush Assam Green',
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
    body: 'Saffron goes in as threads, cardamom cracked rather than ground. If an ingredient cannot be identified by looking at it, we have not earned your trust in it.',
  },
  {
    n: '04',
    title: 'Two valleys, named',
    body: 'Assam and Kashmir. We tell you the region, the elevation and the flush, and we do not borrow a mountain we do not grow on.',
  },
];
