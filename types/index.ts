export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Green Tea' | 'Matcha' | 'Black Tea' | 'Oolong Tea' | 'Herbal & Tisane' | 'Accessories';
  price: number;
  originalPrice?: number;
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
  flavorNotes: string[];
  caffeineLevel: 'None' | 'Low' | 'Medium' | 'High';
  tastingProfile: {
    umami: number;
    sweetness: number;
    astringency: number;
    aroma: number;
  };
  brewingGuide: {
    temp: string;
    ratio: string;
    steepTime: string;
    infusions: number;
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
  difficulty: 'Easy' | 'Intermediate' | 'Artisanal';
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
  total: number;
  status: 'Processing' | 'Quality Check' | 'Dispatched' | 'Delivered';
  trackingNumber: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
