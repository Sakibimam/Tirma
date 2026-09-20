export type TeaCategory =
  | 'Black Tea'
  | 'Green Tea'
  | 'Blue Tea'
  | 'Spiced Blend'
  | 'Sets';

/**
 * Every tea carries the colour it actually pours. The whole site is keyed off
 * these values — panel backgrounds, rules, type colour. See `LiquorIndex`.
 */
export interface Liquor {
  /** Plain-language name of the brewed colour, e.g. "Deep copper". */
  name: string;
  /** Panel background. */
  base: string;
  /** Primary type on that background. */
  ink: string;
  /** Secondary type on that background. */
  muted: string;
  /** Rules, underlines, small marks. */
  line: string;
  /** Single accent — used sparingly, usually one word or one number. */
  accent: string;
}

export interface Product {
  id: string;
  slug: string;
  /** Two-digit index number, e.g. "01". Used as the visual anchor everywhere. */
  index: string;
  title: string;
  /** One line of hard facts: leaf style, origin. No adjectives. */
  subtitle: string;
  botanicalName?: string;
  category: TeaCategory;
  liquor: Liquor;
  /** The one-sentence reason to buy this over anything else. */
  pitch: string;
  price: number; // INR
  originalPrice?: number; // INR
  /** Weight the base price buys, e.g. "100 g". */
  baseWeight: string;
  /** Roughly how many cups that weight makes — the honest unit price story. */
  cupsPerPack: number;
  rating: number;
  reviewCount: number;
  /** Real photography, once it exists. Unset -> the illustrated LiquorPlate. */
  photo?: string;
  extraPhotos?: string[];
  description: string;
  story: string;
  packageSizes: { label: string; grams: number; price: number }[];
  origin: string;
  /** Real elevation. Assam is lowland; say so. */
  elevation: string;
  harvest: string;
  pluckingStandard?: string;
  flavorNotes: string[];
  palateDescription?: string;
  caffeineLevel: 'None' | 'Low' | 'Medium' | 'High';
  /** Drinks well with milk? Decides the "for your chai" filter. */
  takesMilk: boolean;
  brewingGuide: {
    temp: string;
    ratio: string;
    steepTime: string;
    infusions: number;
    vessel?: string;
    /** Separate instruction when the tea is built into milk tea. */
    withMilk?: string;
  };
  ingredients: string[];
  /** Plain, defensible benefits. No medical claims. */
  benefits: string[];
  inStock: boolean;
  /** Appears as one of the four full-colour panels on the home page. */
  inIndex?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  prepTime: string;
  difficulty: 'Simple' | 'Gentle' | 'Ritual';
  servings: number;
  category: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
  proTips: string[];
  pairedTeaId?: string;
  datePublished: string;
}

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  chapter?: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
      quote?: string;
    }[];
    conclusion: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  productMentioned: string;
  avatar: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: CartItem[];
  total: number; // INR
  status: 'Order placed' | 'Packed at source' | 'In transit' | 'Delivered';
  trackingNumber: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
