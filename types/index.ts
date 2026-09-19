export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  botanicalName?: string;
  category: 'Green Tea' | 'Matcha' | 'Black Tea' | 'Oolong Tea' | 'Herbal & Tisane' | 'Accessories';
  price: number; // In INR (₹)
  originalPrice?: number; // In INR (₹)
  rating: number;
  reviewCount: number;
  mainImage: string;
  extraPhotos: string[];
  description: string;
  story: string;
  packageSizes: string[];
  origin: string;
  elevation: string;
  harvest: string;
  pluckingStandard?: string;
  liquorColor?: string;
  flavorNotes: string[];
  palateDescription?: string;
  caffeineLevel: 'None' | 'Low' | 'Medium' | 'High';
  brewingGuide: {
    temp: string;
    ratio: string;
    steepTime: string;
    infusions: number;
    vessel?: string;
  };
  ingredients: string[];
  benefits: string[];
  inStock: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  isBanner?: boolean;
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
  total: number; // In INR (₹)
  status: 'Received at Estate' | 'Leaves Selected' | 'Hand-Packaged' | 'Dispatched';
  trackingNumber: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
