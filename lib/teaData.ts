import { Product, Recipe, JournalPost, Testimonial } from '@/types';

export const productsData: Product[] = [
  {
    id: 'tirma-ceremonial-matcha-ujikyo',
    slug: 'imperial-ceremonial-matcha',
    title: 'Imperial Ceremonial Matcha',
    subtitle: 'First-Flush Stone-Ground Uji Tencha',
    category: 'Matcha',
    price: 38.00,
    originalPrice: 45.00,
    rating: 4.96,
    reviewCount: 142,
    mainImage: '/images/products/matcha.jpg',
    extraPhotos: [
      '/images/products/matcha2.webp',
      '/images/products/matcha3.jpg',
      '/images/products/matcha5.jpg',
    ],
    description: 'Ultra-vibrant, silky green ceremonial matcha stone-milled from spring-harvested tencha leaves. Boasts deep umami sweetness, zero bitterness, and a velvety froth.',
    story: 'Cultivated in shaded volcanic misty micro-valleys. Agro-tech microclimate sensors monitor ambient moisture and shade levels for 28 days before picking, maximizing chlorophyll and pure L-theanine density.',
    packageSizes: ['30g Tin', '80g Pouch', '150g Master Tin'],
    origin: 'Uji Highlands, Kyoto Prefecture',
    elevation: '450m Above Sea Level',
    harvest: 'Spring 2026 First Flush',
    flavorNotes: ['Sweet Umami', 'Creamy Spinach', 'Young Bamboo', 'Melted White Chocolate'],
    caffeineLevel: 'High',
    tastingProfile: {
      umami: 5,
      sweetness: 4.5,
      astringency: 1.2,
      aroma: 4.8,
    },
    brewingGuide: {
      temp: '80°C / 175°F',
      ratio: '2g (1 bamboo scoop) to 70ml water',
      steepTime: 'Whisk vigorously for 40 seconds with chasen',
      infusions: 1,
    },
    ingredients: ['100% Certified Organic Stone-Ground Green Tea (Camellia Sinensis)'],
    benefits: [
      'Sustained calm focus via natural L-theanine synergy',
      'Rich in potent EGCG catechins and antioxidants',
      'Boosts cellular metabolism naturally without jitters',
      'Promotes radiant skin tone and gut wellness'
    ],
    inStock: true,
    isFeatured: true,
    isPopular: true,
    isBanner: true,
  },
  {
    id: 'tirma-silver-needle-cloud-mist',
    slug: 'himalayan-silver-needle-white-tea',
    title: 'Himalayan Silver Needle',
    subtitle: 'Sun-Dried Downy Spring Buds',
    category: 'Herbal & Tisane',
    price: 34.00,
    originalPrice: 40.00,
    rating: 4.92,
    reviewCount: 98,
    mainImage: '/images/products/tea1.jpg',
    extraPhotos: [
      '/images/products/tea2.jpg',
      '/images/products/tea3.jpg',
    ],
    description: 'Plucked exclusively before dawn, these pristine silvery unfurled tea tips yield a delicate nectar liquor infused with honeysuckle, wild melon, and white peach notes.',
    story: 'Grown on untouched glacial runoff slopes where high UV light stimulates dense protective trichomes (white hairs) brimming with bio-active micronutrients.',
    packageSizes: ['50g Tin', '100g Artisan Bag', '200g Tin'],
    origin: 'Eastern Himalayan Foothills',
    elevation: '1,850m Mountain Cloudbelt',
    harvest: 'Spring 2026 Dawn Pluck',
    flavorNotes: ['Wild Honeysuckle', 'Fresh Melon', 'Sweet Nectar', 'Morning Dew'],
    caffeineLevel: 'Low',
    tastingProfile: {
      umami: 3.2,
      sweetness: 4.8,
      astringency: 1.0,
      aroma: 4.9,
    },
    brewingGuide: {
      temp: '82°C / 180°F',
      ratio: '3.5g per 200ml spring water',
      steepTime: '4 - 5 minutes',
      infusions: 4,
    },
    ingredients: ['100% Certified Organic White Tea Tips'],
    benefits: [
      'Highest concentration of polyphenol antioxidants',
      'Exceptionally gentle on sensitive stomachs',
      'Deep cellular hydration and anti-inflammatory properties'
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'tirma-jade-sencha-fukamushi',
    slug: 'organic-fukamushi-jade-sencha',
    title: 'Deep-Steamed Jade Sencha',
    subtitle: 'Vibrant Fukamushi Green Tea',
    category: 'Green Tea',
    price: 29.00,
    originalPrice: 35.00,
    rating: 4.89,
    reviewCount: 84,
    mainImage: '/images/products/tea2.jpg',
    extraPhotos: [
      '/images/products/tea1.jpg',
      '/images/products/matcha2.webp',
    ],
    description: 'Deeply steamed according to traditional Japanese Fukamushi methods. Produces an intoxicating emerald-green infusion with sweet vegetal richness and smooth finish.',
    story: 'Harvested from agro-tech balanced loam enriched with organic composted mountain tea mulch. Preserves heat-sensitive vitamin C and rejuvenating plant enzymes.',
    packageSizes: ['75g Tin', '150g Pouch'],
    origin: 'Shizuoka Volcanic Valley',
    elevation: '620m Terraced Slopes',
    harvest: 'First Flush Early May',
    flavorNotes: ['Steamed Edamame', 'Sea Breeze', 'Fresh Grass', 'Crisp Pine'],
    caffeineLevel: 'Medium',
    tastingProfile: {
      umami: 4.4,
      sweetness: 4.0,
      astringency: 2.1,
      aroma: 4.5,
    },
    brewingGuide: {
      temp: '75°C / 167°F',
      ratio: '4g per 200ml water',
      steepTime: '60 seconds',
      infusions: 3,
    },
    ingredients: ['100% Pure Organic Deep-Steamed Green Tea'],
    benefits: [
      'Promotes calm concentration during focused work',
      'Packed with natural chlorophyll for body purification',
      'Supports healthy heart and lipid balance'
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'tirma-golden-yunnan-reserve',
    slug: 'golden-yunnan-dian-hong-reserve',
    title: 'Golden Yunnan Dian Hong',
    subtitle: 'Wild Arbor Amber Black Tea',
    category: 'Black Tea',
    price: 32.00,
    originalPrice: 38.00,
    rating: 4.95,
    reviewCount: 116,
    mainImage: '/images/products/tea3.jpg',
    extraPhotos: [
      '/images/products/tea4.jpg',
      '/images/products/tea1.jpg',
    ],
    description: 'Resplendent golden buds shimmering with amber liquor. Exudes intoxicating aromas of warm blossom honey, baked sweet potato, cacao nibs, and dry plum.',
    story: 'Hand-plucked from 80-year-old organic tea trees nurtured without synthetic inputs. Solar-wilted and slowly fermented in bamboo pavilions.',
    packageSizes: ['60g Tin', '120g Craft Bag'],
    origin: 'Yunnan Ancient Highlands',
    elevation: '1,600m Misty Ridge',
    harvest: 'Autumn 2025 Reserve Selection',
    flavorNotes: ['Wild Honey', 'Cacao Nibs', 'Roasted Sweet Potato', 'Dried Fig'],
    caffeineLevel: 'High',
    tastingProfile: {
      umami: 3.5,
      sweetness: 4.7,
      astringency: 2.4,
      aroma: 4.8,
    },
    brewingGuide: {
      temp: '95°C / 203°F',
      ratio: '4g per 220ml filtered water',
      steepTime: '3 - 4 minutes',
      infusions: 4,
    },
    ingredients: ['100% Certified Organic Black Tea Tips'],
    benefits: [
      'Warming digestive comfort and gut microbiome support',
      'Clean invigorating energy without caffeine crash',
      'Promotes circulatory vitality and stamina'
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'tirma-oriental-beauty-oolong',
    slug: 'imperial-oriental-beauty-oolong',
    title: 'Imperial Oriental Beauty Oolong',
    subtitle: 'Bug-Bitten Honey Muscatel Oolong',
    category: 'Oolong Tea',
    price: 42.00,
    rating: 4.98,
    reviewCount: 76,
    mainImage: '/images/products/tea4.jpg',
    extraPhotos: [
      '/images/products/tea2.jpg',
      '/images/products/tea3.jpg',
    ],
    description: 'Nature’s most enchanting collaboration. Tiny green tea jassids bite the living leaves, triggering the plant to release exquisite honey and ripe muscatel aromatic terpene defense compounds.',
    story: 'Strict zero-pesticide agro-tech habitat required to sustain the beneficial ecosystem. Only the top tip and two leaves are hand-plucked during humid summer mornings.',
    packageSizes: ['50g Luxury Tin', '100g Pouch'],
    origin: 'Hsinchu Mountain Terraces',
    elevation: '800m Hilltops',
    harvest: 'Summer Solstice 2025',
    flavorNotes: ['Wild Honey', 'Muscat Grape', 'Orchid Bloom', 'Peach Nectar'],
    caffeineLevel: 'Medium',
    tastingProfile: {
      umami: 3.8,
      sweetness: 4.9,
      astringency: 1.8,
      aroma: 5.0,
    },
    brewingGuide: {
      temp: '88°C / 190°F',
      ratio: '5g per 180ml gaiwan',
      steepTime: '45 seconds (Gongfu style)',
      infusions: 6,
    },
    ingredients: ['100% Biodynamic Bug-Bitten Oolong Tea'],
    benefits: [
      'Deep aromatic relaxation and tension relief',
      'Supports healthy metabolic digestion after meals',
      'Natural euphoric calming effect'
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'tirma-chamomile-lavender-calm',
    slug: 'restorative-botanical-calm-tisane',
    title: 'Restorative Botanical Tisane',
    subtitle: 'Whole Chamomile Flowers & French Lavender',
    category: 'Herbal & Tisane',
    price: 24.00,
    rating: 4.91,
    reviewCount: 63,
    mainImage: '/images/products/matcha5.jpg',
    extraPhotos: [
      '/images/products/tea1.jpg',
      '/images/products/matcha3.jpg',
    ],
    description: 'A sovereign evening brew uniting whole golden Egyptian chamomile blossoms, hand-stripped Provence lavender buds, organic lemon balm, and valerian root.',
    story: 'Ethically harvested at the height of floral bloom to capture soothing essential oils. Completely caffeine-free and naturally sweet.',
    packageSizes: ['50g Tin', '100g Refill Bag'],
    origin: 'Mediterranean Organic Valley',
    elevation: '400m Sun Valley',
    harvest: 'Summer 2025 Floral Harvest',
    flavorNotes: ['Crisp Green Apple', 'Sweet Lavender', 'Lemon Verbena', 'Warm Straw'],
    caffeineLevel: 'None',
    tastingProfile: {
      umami: 1.0,
      sweetness: 4.2,
      astringency: 0.8,
      aroma: 4.9,
    },
    brewingGuide: {
      temp: '98°C / 208°F',
      ratio: '3g per 250ml freshly boiled water',
      steepTime: '6 - 8 minutes covered',
      infusions: 2,
    },
    ingredients: [
      'Organic Whole Chamomile Blossoms',
      'Organic Lavender Buds',
      'Organic Lemon Balm Leaves',
      'Organic Peppermint'
    ],
    benefits: [
      'Naturally promotes deep, restorative REM sleep',
      'Soothes evening nervous tension and digestive spasms',
      '100% caffeine-free safe for whole family'
    ],
    inStock: true,
  },
  {
    id: 'tirma-bamboo-matcha-ceremonial-set',
    slug: 'artisan-bamboo-matcha-ceremony-set',
    title: 'Master Ceremonial Matcha Kit',
    subtitle: '100-Prong Golden Bamboo Whisk & Chawan Bowl',
    category: 'Accessories',
    price: 68.00,
    originalPrice: 85.00,
    rating: 4.97,
    reviewCount: 52,
    mainImage: '/images/zestaw.png',
    extraPhotos: [
      '/images/podstawka.png',
      '/images/products/matcha2.webp',
    ],
    description: 'Complete heirloom matcha ceremony set handcrafted by master artisans. Includes hand-carved golden bamboo whisk (chasen), curved scoop (chashaku), porcelain whisk stand, and glazed ceramic bowl.',
    story: 'Designed to unlock the micro-aeration necessary for thick, cloud-like matcha crema without scorching delicate green tea amino acids.',
    packageSizes: ['Complete 4-Piece Set'],
    origin: 'Takayama, Nara Prefecture',
    elevation: 'Handcrafted Atelier',
    harvest: 'Artisan Wood & Ceramics',
    flavorNotes: ['Aerated Crema Perfection', 'Heirloom Craftsmanship'],
    caffeineLevel: 'None',
    tastingProfile: {
      umami: 5,
      sweetness: 5,
      astringency: 1,
      aroma: 5,
    },
    brewingGuide: {
      temp: 'Hand-wash only with warm water',
      ratio: 'Rest whisk on porcelain holder to preserve curve',
      steepTime: 'Pre-warm bowl before whisking',
      infusions: 999,
    },
    ingredients: ['Natural Mountain Bamboo', 'Handcrafted Stoneware Porcelain'],
    benefits: [
      'Produces micro-foam texture impossible with electric frothers',
      'Authentic mindful mindfulness ritual in your daily routine',
      'Sustainable natural biodegradable materials'
    ],
    inStock: true,
  },
  {
    id: 'tirma-porcelain-whisk-stand',
    slug: 'ceramic-chasen-whisk-holder',
    title: 'Celadon Glaze Whisk Stand',
    subtitle: 'Preserves Bamboo Chasen Tines',
    category: 'Accessories',
    price: 18.00,
    rating: 4.88,
    reviewCount: 41,
    mainImage: '/images/podstawka.png',
    extraPhotos: [
      '/images/zestaw.png',
    ],
    description: 'An essential accessory for matcha connoisseurs. Rest your damp bamboo chasen on this smooth celadon stoneware stand to retain its bell shape and air-dry evenly.',
    story: 'Kiln-fired at 1,280°C with an authentic matte botanical celadon glaze inspired by freshly unfurled spring tea shoots.',
    packageSizes: ['Single Stand'],
    origin: 'Kyoto Ceramic Studios',
    elevation: 'Artisanal Studio',
    harvest: 'High-fire Stoneware',
    flavorNotes: ['Enduring Elegance'],
    caffeineLevel: 'None',
    tastingProfile: {
      umami: 1,
      sweetness: 1,
      astringency: 1,
      aroma: 1,
    },
    brewingGuide: {
      temp: 'Rinse with warm water',
      ratio: 'Invert chasen onto cone post-use',
      steepTime: 'Air dry in ventilated space',
      infusions: 999,
    },
    ingredients: ['100% High-Fire Glazed Ceramic'],
    benefits: [
      'Extends the lifespan of your bamboo whisk tenfold',
      'Prevents mold buildup by elevating delicate tines',
      'Stunning aesthetic centerpiece on your tea table'
    ],
    inStock: true,
  }
];

export const recipesData: Recipe[] = [
  {
    id: 'recipe-velvet-ceremonial-matcha-latte',
    slug: 'velvet-ceremonial-matcha-latte',
    title: 'Velvet Ceremonial Matcha Latte',
    subtitle: 'Silky microfoam with raw wildflower honey and warm oat milk',
    prepTime: '4 Minutes',
    difficulty: 'Easy',
    servings: 1,
    category: 'Matcha Rituals',
    image: '/images/products/matcha2.webp',
    description: 'The definitive morning elixir. Combines stone-ground ceremonial matcha, warmed creamy oat milk, and a touch of raw wildflower honey to provide 4-6 hours of jitter-free sustained vitality.',
    ingredients: [
      '2.5g (1.25 tsp) TIRMA Imperial Ceremonial Matcha',
      '60ml (2 oz) 80°C (175°F) filtered water',
      '180ml (6 oz) barista-grade creamy oat milk',
      '1 tsp raw organic clover or wildflower honey (optional)',
      'Pinch of fine ground Madagascar vanilla (optional)'
    ],
    steps: [
      'Sift the matcha powder through a fine sieve into your chawan bowl to remove electrostatic clumps.',
      'Pour 60ml of water heated to 80°C (do not use boiling water, which scorches the umami amino acids).',
      'Vigorously whisk with a bamboo chasen in a "W" or "M" motion from your wrist until dense, micro-fine green foam covers the surface.',
      'Steam or gently froth oat milk until silky and warm (approx 65°C / 150°F).',
      'Pour the frothed milk gently into a heatproof glass, and slowly pour the whisked matcha on top for a layered aesthetic.'
    ],
    proTips: [
      'Pre-warm your ceramic bowl with hot water for 30 seconds beforehand to maintain perfect temperature.',
      'Use water with low mineral hardness (under 50ppm) to let the natural sweetness shine.'
    ],
    pairedTeaId: 'tirma-ceremonial-matcha-ujikyo',
    datePublished: 'September 2026',
  },
  {
    id: 'recipe-cold-brew-jade-sencha',
    slug: 'slow-cold-brew-jade-sencha-citrus',
    title: 'Slow Cold-Brew Jade Sencha & Citrus',
    subtitle: '12-hour chilled steep unlocking pure sweet umami and low tannins',
    prepTime: '12 Hours (Cold Steep)',
    difficulty: 'Easy',
    servings: 4,
    category: 'Chilled Infusions',
    image: '/images/products/tea2.jpg',
    description: 'Cold steeping prevents tannin release while pulling maximum L-theanine and sweet amino acids into the liquor. The result is pure, refreshing liquid jade with hints of candied yuzu.',
    ingredients: [
      '12g TIRMA Deep-Steamed Jade Sencha',
      '1 Liter chilled mountain spring water',
      'Thin slices of organic Meyer lemon or yuzu peel',
      'Fresh garden mint sprig for garnish',
      'Ice spheres'
    ],
    steps: [
      'Place 12g of whole leaf Sencha into a glass carafe or cold brew pitcher.',
      'Pour 1 Liter of cold filtered water directly over the leaves.',
      'Add 2 thin twists of organic lemon peel to infuse subtle citrus oils.',
      'Cover and place in the refrigerator for 8 to 12 hours.',
      'Strain through a fine mesh strainer into glasses filled with clear ice spheres, garnishing with fresh mint.'
    ],
    proTips: [
      'The spent tea leaves can be cold-steeped a second time for 6 hours with exceptional flavor.',
      'Zero astringency makes this the ultimate hydrating post-workout antioxidant drink.'
    ],
    pairedTeaId: 'tirma-jade-sencha-fukamushi',
    datePublished: 'September 2026',
  },
  {
    id: 'recipe-restorative-evening-tisane',
    slug: 'golden-calm-bedtime-tisane',
    title: 'Golden Calm Bedtime Elixir',
    subtitle: 'Nourishing botanical infusion for restorative deep REM sleep',
    prepTime: '7 Minutes',
    difficulty: 'Easy',
    servings: 2,
    category: 'Wellness & Sleep',
    image: '/images/products/tea1.jpg',
    description: 'A calming floral ceremony designed to signal to your nervous system that the day is complete. Packed with apigenin flavonoids from whole chamomile blossoms.',
    ingredients: [
      '5g TIRMA Restorative Botanical Tisane',
      '400ml spring water at rolling boil (98°C)',
      '1 slice fresh organic ginger root',
      '1 cinnamon stick',
      '1 tsp raw buckwheat honey'
    ],
    steps: [
      'Place the whole chamomile, lavender, and bruised ginger into a glass teapot.',
      'Pour rolling boiling water over the botanicals.',
      'Cover with lid to trap the aromatic essential oils from evaporating.',
      'Allow to steep undisturbed for 7 full minutes.',
      'Strain into porcelain teacups, stir in buckwheat honey, and inhale the aromatics before sipping.'
    ],
    proTips: [
      'Drink 45 minutes before sleep without blue light or screens nearby for maximum calming effect.',
      'The aromatics activate the parasympathetic nervous system within 3 minutes of inhalation.'
    ],
    pairedTeaId: 'tirma-chamomile-lavender-calm',
    datePublished: 'September 2026',
  }
];

export const journalPostsData: JournalPost[] = [
  {
    id: 'post-science-of-l-theanine',
    slug: 'the-science-of-l-theanine-and-alpha-waves',
    title: 'The Science of L-Theanine: How Shaded Agro-Tech Teas Induce Flow State',
    excerpt: 'Discover why shade-grown green teas provide profound mental clarity and calm alertness without the jitters and crash of coffee.',
    category: 'Agronomy & Neuroscience',
    readTime: '5 Min Read',
    publishDate: 'Sep 14, 2026',
    author: {
      name: 'Dr. Elena Vance, PhD',
      role: 'Head of Phytochemical Research',
      avatar: '/images/products/matcha3.jpg',
    },
    image: '/images/products/matcha.jpg',
    tags: ['Neuroscience', 'L-Theanine', 'Organic Farming', 'Agro-Tech'],
    content: {
      introduction: 'For centuries, Zen monks relied on shaded green tea to sustain motionless meditation for hours without drowsiness. Today, modern neuroimaging confirms what ancient practitioners knew intuitively: green tea alters electrical brainwave oscillations in profound ways.',
      sections: [
        {
          heading: 'Shading Technology and Amino Acid Preservation',
          body: 'When tea bushes are exposed to harsh direct sunlight, the plant naturally converts sweet L-theanine into bitter polyphenolic catechins via photosynthesis. By employing precision agro-tech canopy shading 3-4 weeks before harvest, our agronomists block 90% of direct UV rays. This forces the plant to concentrate immense chlorophyll and preserve exceptionally high L-theanine levels in the fresh bud.',
        },
        {
          heading: 'Alpha Waves and The Synergy with Natural Caffeine',
          body: 'L-theanine crosses the blood-brain barrier effortlessly, stimulating inhibitory neurotransmitters like GABA and promoting alpha wave activity (8-12 Hz) — the exact brain state associated with effortless creative focus, calm alertness, and reduced cognitive fatigue.',
          quote: '“The synergy between caffeine and L-theanine is nature’s most sophisticated cognitive cocktail: razor-sharp focus without peripheral autonomic stimulation.”'
        },
        {
          heading: 'Whole Leaf Purity vs. Commercial Extracts',
          body: 'Synthetic isolated L-theanine pills fail to replicate the complex biochemical entourage effect of whole stone-ground tea leaves, where amino acids interact with EGCG, trace minerals, and bioflavonoids for gradual sustained bloodstream absorption.',
        }
      ],
      conclusion: 'By marrying precision organic soil telemetry with generational Japanese shading wisdom, TIRMA delivers whole-leaf teas that fuel deep mental work while respecting the body’s circadian harmony.'
    }
  },
  {
    id: 'post-regenerative-agro-tech-soil',
    slug: 'regenerative-agro-tech-soil-microbiome-tea-flavor',
    title: 'Technology Rooted in Nature: How Living Soil Chemistry Shapes Tea Terroir',
    excerpt: 'How multi-sensor telemetry, mycorrhizal fungi, and organic biodynamic compost create unmatched floral aromatic terpenes in high mountain teas.',
    category: 'Sustainable Agronomy',
    readTime: '6 Min Read',
    publishDate: 'Sep 08, 2026',
    author: {
      name: 'Marcus Thorne',
      role: 'Master Agronomist & Tea Master',
      avatar: '/images/products/tea3.jpg',
    },
    image: '/images/products/tea2.jpg',
    tags: ['Regenerative Farming', 'Terroir', 'Eco-Tech', 'Sustainability'],
    content: {
      introduction: 'True flavor is not manufactured in a laboratory; it is born deep within the dark, moist crumb of living soil. At TIRMA Agro Tech, our mission is proving that cutting-edge sensor technology should serve natural biology, never replace it.',
      sections: [
        {
          heading: 'The Underground Network of Mycorrhizal Fungi',
          body: 'Conventional commercial tea plantations drench soil in synthetic nitrogen fertilizers, destroying natural soil mycelium and creating bitter, watery infusions. Our mountain micro-estates rely entirely on living organic mulch and beneficial mycorrhizal networks that exchange deep minerals for plant sugars.',
        },
        {
          heading: 'IoT Microclimate Soil Telemetry',
          body: 'We deploy solar-powered micro-sensors across mountain terraces to track soil moisture tension, microbial respiration, and atmospheric dew points. Instead of calendar-based plucking, we harvest only when cellular turgor pressure inside the tender tea leaf reaches optimal biochemical sweetness.',
          quote: '“Technology does not force nature; it listens intently to nature’s quietest whispers so we harvest at the pinnacle of life force.”'
        }
      ],
      conclusion: 'Every cup of TIRMA tea is a direct celebration of intact mountain ecology, regenerative carbon sequestration, and pure organic craftsmanship.'
    }
  },
  {
    id: 'post-the-art-of-temperature-steeping',
    slug: 'temperature-steeping-guide-tea-sommelier',
    title: 'The Temperature Paradox: Why Boiling Water Destroys Premium Green Tea',
    excerpt: 'Master the physics of water temperature, dissolved oxygen, and steeping ratios to extract sublime sweetness instead of harsh astringency.',
    category: 'Brewing Guide',
    readTime: '4 Min Read',
    publishDate: 'Aug 29, 2026',
    author: {
      name: 'Dr. Elena Vance, PhD',
      role: 'Head of Phytochemical Research',
      avatar: '/images/products/matcha3.jpg',
    },
    image: '/images/products/tea4.jpg',
    tags: ['Brewing Guide', 'Sommelier', 'Water Chemistry'],
    content: {
      introduction: 'If you have ever brewed a green tea and found it unpalatably bitter, the fault was not the tea leaf — it was the temperature of your water. Understanding the thermodynamic release rates of tea compounds transforms every cup you brew.',
      sections: [
        {
          heading: 'The Extraction Curves: Catechins vs. Amino Acids',
          body: 'Amino acids (the source of savory umami and sweet broth-like richness) dissolve readily in cool or warm water (60°C - 75°C). In contrast, bitter catechins and astringent tannins remain largely locked in leaf vacuoles until water exceeds 85°C.',
        },
        {
          heading: 'The Golden Rule of Water Quality',
          body: 'Never re-boil water multiple times, as prolonged boiling depletes dissolved oxygen necessary to carry delicate aromatic terpenes to your olfactory receptors. Aim for spring water with neutral pH and total dissolved solids between 30 and 70 ppm.',
          quote: '“Water is the mother of tea, the teapot is its father, and fire is its teacher.”'
        }
      ],
      conclusion: 'Invest in a variable-temperature kettle or let boiling water rest for 4 minutes before pouring over tender green tea leaves. The exquisite silky sweetness will astonish you.'
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Julian Montgomery',
    role: 'Certified Tea Sommelier & Author',
    location: 'London, UK',
    quote: 'TIRMA’s Imperial Ceremonial Matcha has the cleanest, most unadulterated umami finish I have encountered in a decade of tasting. You can genuinely taste the precision of their organic agro-tech soil stewardship.',
    rating: 5,
    productMentioned: 'Imperial Ceremonial Matcha',
    avatar: '/images/products/matcha.jpg',
  },
  {
    id: '2',
    name: 'Clara Lin',
    role: 'Wellness Director & Holistic Nutritionist',
    location: 'San Francisco, CA',
    quote: 'Replacing my morning espresso with TIRMA Jade Sencha eliminated afternoon brain fog completely. Smooth, vibrant green, and gentle on the stomach. The packaging is pure understated luxury.',
    rating: 5,
    productMentioned: 'Deep-Steamed Jade Sencha',
    avatar: '/images/products/tea2.jpg',
  },
  {
    id: '3',
    name: 'Henrik Vestergaard',
    role: 'Michelin Star Beverage Curator',
    location: 'Copenhagen, Denmark',
    quote: 'The Oriental Beauty Oolong from TIRMA is a masterclass in terroir. Natural muscatel grape and wild honeysuckle notes that develop through six subsequent infusions. Simply sensational.',
    rating: 5,
    productMentioned: 'Imperial Oriental Beauty Oolong',
    avatar: '/images/products/tea4.jpg',
  }
];

export const benefitsList = [
  {
    id: '1',
    title: '100% Certified Organic',
    subtitle: 'Zero Synthetic Chemicals',
    description: 'Every harvest is strictly certified USDA Organic and EU Bio. Cultivated without synthetic pesticides, fungicides, or petrochemical fertilizers.',
    icon: 'ShieldCheck',
  },
  {
    id: '2',
    title: 'Precision Agro-Tech Terroir',
    subtitle: 'Microclimate Soil Telemetry',
    description: 'We deploy solar IoT soil moisture and ambient humidity sensors to pick tea leaves exclusively at their absolute peak nutrient and polyphenol density.',
    icon: 'Leaf',
  },
  {
    id: '3',
    title: 'Zero Plastic & Eco Packaged',
    subtitle: '100% Biodegradable & Recyclable',
    description: 'Our luxury embossed tins are infinitely recyclable. Our pyramid tea infusers are woven from non-GMO plant-derived cornstarch — zero microplastics in your cup.',
    icon: 'Sparkles',
  },
  {
    id: '4',
    title: 'Direct-From-Estate Fair Trade',
    subtitle: 'Generational Craftsmanship',
    description: 'By partnering directly with multi-generational mountain tea growers, we pay 300% above conventional commodity market rates to empower farming communities.',
    icon: 'HeartHandshake',
  }
];
