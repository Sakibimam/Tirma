'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import {
  Star,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Sparkles,
  Thermometer,
  Clock,
  RotateCcw,
  Truck,
  Check,
  Minus,
  Plus,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();

  const product = productsData.find(
    (p) => p.slug === resolvedParams.slug || p.id === resolvedParams.slug
  );

  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState(product.packageSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'story' | 'ingredients' | 'benefits' | 'shipping'>('story');

  const allImages = [product.mainImage, ...product.extraPhotos];
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    router.push('/checkout');
  };

  return (
    <div className="bg-parchment-50 min-h-screen py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-tea-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-tea-900 transition-colors">
            Collection
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-tea-900 transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-tea-950 font-semibold truncate">{product.title}</span>
        </nav>

        {/* Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Visual Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-luxury p-8 flex items-center justify-center">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                priority
                className="object-contain p-6 hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="rounded-full bg-tea-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {product.category}
                </span>
                <span className="rounded-full bg-gold-100 text-gold-900 border border-gold-300 px-3 py-1 text-[10px] font-semibold">
                  {product.harvest}
                </span>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden bg-white border-2 transition-all ${
                    activeImage === img
                      ? 'border-gold-500 shadow-md scale-105'
                      : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Agro-Tech Terroir Highlight Card */}
            <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm mt-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-tea-900 mb-3 flex items-center gap-1.5">
                <Leaf className="h-4 w-4 text-tea-600" /> Single-Estate Provenance
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 block">Origin Micro-Valley</span>
                  <span className="font-semibold text-gray-800">{product.origin}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Altitude / Elevation</span>
                  <span className="font-semibold text-gray-800">{product.elevation}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Harvest Pluck Date</span>
                  <span className="font-semibold text-gray-800">{product.harvest}</span>
                </div>
                <div>
                  <span className="text-gray-400 block">Caffeine Classification</span>
                  <span className="font-semibold text-gold-700">{product.caffeineLevel} Caffeine</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Commercial Details, Stepper & Purchase */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Title & Subtitle */}
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 mb-1">
              TIRMA Agro Tech Reserve
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-tea-950 leading-tight">
              {product.title}
            </h1>
            <p className="mt-2 text-base text-gray-500 font-serif italic">
              {product.subtitle}
            </p>

            {/* Rating and Reviews Counter */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-500 text-gold-500'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-800">{product.rating}</span>
              <span className="text-xs text-gray-400">
                ({product.reviewCount} Verified Sommelier Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3 border-y border-gray-100 py-4">
              <span className="font-serif text-3xl font-bold text-tea-950">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 border border-green-200 ml-auto">
                In Stock • Fresh Agro Harvest
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Flavor Notes Badges */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-700 block mb-2">
                Aromatic & Flavor Spectrum:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-xl bg-white border border-gray-200 px-3 py-1.5 text-xs font-medium text-tea-900 shadow-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Package Size Picker */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider font-bold text-gray-700 block mb-2">
                Select Package Format:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {product.packageSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-tea-900 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-tea-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Bag Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              {/* Stepper */}
              <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm w-full sm:w-auto justify-between sm:justify-normal">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-5 text-sm font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={() => {
                  addToCart(product, selectedSize, quantity);
                  setIsCartOpen(true);
                }}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-tea-900 py-4 px-6 text-sm font-semibold text-white hover:bg-tea-800 shadow-md hover:shadow-lg transition-all"
              >
                <ShoppingBag className="h-4 w-4 text-gold-400" />
                <span>Add {quantity} to Bag • ${(product.price * quantity).toFixed(2)}</span>
              </button>

              {/* Buy Now CTA */}
              <button
                onClick={handleBuyNow}
                className="w-full sm:w-auto rounded-xl bg-gold-500 py-4 px-6 text-sm font-bold text-tea-950 hover:bg-gold-400 shadow-md transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Guarantees row */}
            <div className="mt-6 flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-tea-700" /> Free Eco-Shipping Over $50
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="h-4 w-4 text-tea-700" /> 30-Day Freshness Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-tea-700" /> 100% Certified Organic
              </span>
            </div>

            {/* Brewing Guide Card */}
            <div className="mt-8 rounded-2xl bg-tea-950 text-white p-6 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-gold-500/10 blur-xl pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold-400" /> Sommelier Brewing Protocol
                </h3>
                <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
                  Optimal Extraction
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="rounded-xl bg-white/5 p-3 text-center border border-white/5">
                  <Thermometer className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                  <span className="block text-[10px] text-tea-200">Water Temp</span>
                  <span className="font-bold text-white">{product.brewingGuide.temp}</span>
                </div>

                <div className="rounded-xl bg-white/5 p-3 text-center border border-white/5">
                  <Leaf className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                  <span className="block text-[10px] text-tea-200">Leaf Ratio</span>
                  <span className="font-bold text-white truncate">{product.brewingGuide.ratio}</span>
                </div>

                <div className="rounded-xl bg-white/5 p-3 text-center border border-white/5">
                  <Clock className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                  <span className="block text-[10px] text-tea-200">Steep Time</span>
                  <span className="font-bold text-white">{product.brewingGuide.steepTime}</span>
                </div>

                <div className="rounded-xl bg-white/5 p-3 text-center border border-white/5">
                  <RotateCcw className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                  <span className="block text-[10px] text-tea-200">Infusions</span>
                  <span className="font-bold text-white">{product.brewingGuide.infusions} Steeps</span>
                </div>
              </div>
            </div>

            {/* Accordion Tabs */}
            <div className="mt-8 space-y-3">
              {/* Tab 1: Story */}
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === 'story' ? ('' as any) : 'story')}
                  className="w-full flex items-center justify-between p-4 text-left font-serif text-sm font-bold text-gray-900"
                >
                  <span>Agro-Tech Cultivation & Terroir</span>
                  {activeTab === 'story' ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                </button>
                {activeTab === 'story' && (
                  <div className="p-4 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-50">
                    {product.story || product.description}
                  </div>
                )}
              </div>

              {/* Tab 2: Ingredients */}
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === 'ingredients' ? ('' as any) : 'ingredients')}
                  className="w-full flex items-center justify-between p-4 text-left font-serif text-sm font-bold text-gray-900"
                >
                  <span>Certified Organic Ingredients</span>
                  {activeTab === 'ingredients' ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                </button>
                {activeTab === 'ingredients' && (
                  <div className="p-4 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-50">
                    <ul className="list-disc list-inside space-y-1">
                      {product.ingredients.map((ing) => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tab 3: Benefits */}
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveTab(activeTab === 'benefits' ? ('' as any) : 'benefits')}
                  className="w-full flex items-center justify-between p-4 text-left font-serif text-sm font-bold text-gray-900"
                >
                  <span>Phytochemical Wellness Benefits</span>
                  {activeTab === 'benefits' ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                </button>
                {activeTab === 'benefits' && (
                  <div className="p-4 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-50">
                    <ul className="space-y-1.5">
                      {product.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-tea-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Teas Recommendation */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold-700">
                You May Also Enjoy
              </span>
              <h3 className="font-serif text-2xl font-bold text-tea-950 mt-1">
                Complementary Harvests
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs uppercase font-bold text-tea-800 hover:text-gold-700 flex items-center gap-1"
            >
              View Full Collection <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-luxury transition-all p-4 flex flex-col"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-tea-50 mb-3">
                  <Image
                    src={rel.mainImage}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold text-tea-600 tracking-wider">
                  {rel.category}
                </span>
                <Link href={`/product/${rel.slug}`}>
                  <h4 className="font-serif text-sm font-bold text-gray-900 group-hover:text-tea-800 transition-colors line-clamp-1 mt-0.5">
                    {rel.title}
                  </h4>
                </Link>
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-tea-950 font-serif">
                    ${rel.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(rel)}
                    className="rounded-lg bg-tea-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gold-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
