'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import {
  Minus,
  Plus,
  ChevronDown,
  ChevronUp,
  Check,
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
    <div className="bg-[#FAF7F2] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-serif text-[#74A287] mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#182B22] transition-colors">
            Garden
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#182B22] transition-colors">
            Harvests
          </Link>
          <span>/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#182B22] transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#182B22] font-semibold italic">{product.title}</span>
        </nav>

        {/* Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Visual Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-[#F4EFE6] border border-[#DDD2C0] p-8 flex items-center justify-center">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                priority
                className="object-contain p-6"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="bg-[#182B22] text-[#FAF7F2] px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-bold">
                  {product.category}
                </span>
                <span className="bg-[#FAF7F2] text-[#895237] border border-[#DDD2C0] px-2.5 py-0.5 text-[9px] font-serif italic">
                  {product.harvest}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-20 w-20 shrink-0 border transition-all ${
                    activeImage === img
                      ? 'border-[#182B22] opacity-100'
                      : 'border-[#DDD2C0] opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Provenance Box */}
            <div className="border border-[#DDD2C0] bg-[#F4EFE6] p-6 font-serif text-xs">
              <span className="text-[10px] uppercase tracking-widest-estate font-sans font-bold text-[#74A287] block mb-3">
                Estate Provenance & Plucking
              </span>
              <div className="grid grid-cols-2 gap-4 text-[#182B22]">
                <div>
                  <span className="text-[#7A8E82] block text-[11px]">Origin Garden:</span>
                  <span className="font-bold">{product.origin}</span>
                </div>
                <div>
                  <span className="text-[#7A8E82] block text-[11px]">Altitude:</span>
                  <span className="font-bold">{product.elevation}</span>
                </div>
                <div>
                  <span className="text-[#7A8E82] block text-[11px]">Harvest Pluck:</span>
                  <span className="font-bold">{product.harvest}</span>
                </div>
                <div>
                  <span className="text-[#7A8E82] block text-[11px]">Botanical Species:</span>
                  <span className="italic">{product.botanicalName || 'Camellia sinensis'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial & Purchase Details in INR */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-serif italic text-sm text-[#74A287] block mb-1">
              TIRMA Single-Estate Release
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22] leading-tight">
              {product.title}
            </h1>

            <p className="mt-2 text-base text-[#5C6E64] font-serif italic">
              {product.subtitle}
            </p>

            {/* Price in INR */}
            <div className="mt-6 flex items-baseline gap-3 border-y border-[#DDD2C0] py-4">
              <span className="font-serif text-3xl font-bold text-[#182B22]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="font-serif text-base text-[#895237] line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="ml-auto text-xs font-serif italic text-[#315442]">
                In Stock • Fresh Pluck
              </span>
            </div>

            {/* Story description */}
            <p className="mt-6 text-sm sm:text-base text-[#475E52] font-serif leading-relaxed">
              {product.description}
            </p>

            {/* Sensory Organoleptic Notes */}
            <div className="mt-6 p-4 bg-[#F4EFE6] border border-[#DDD2C0] font-serif text-xs text-[#243F32] space-y-2">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#895237] block">
                  Aromatics & Palate:
                </span>
                <span className="italic leading-relaxed">{product.palateDescription || product.flavorNotes.join(' • ')}</span>
              </div>
              {product.liquorColor && (
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#895237] block">
                    Liquor Appearance:
                  </span>
                  <span>{product.liquorColor}</span>
                </div>
              )}
            </div>

            {/* Package Size Picker */}
            <div className="mt-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#182B22] block mb-2">
                Select Package Format:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {product.packageSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs font-serif transition-all border ${
                      selectedSize === size
                        ? 'bg-[#182B22] text-[#FAF7F2] border-[#182B22] font-semibold'
                        : 'bg-white text-[#5C6E64] border-[#DDD2C0] hover:border-[#182B22]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Bag in INR */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center border border-[#DDD2C0] bg-white p-1 justify-between sm:justify-normal w-full sm:w-auto">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-[#5C6E64] hover:text-[#182B22]"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="px-4 text-xs font-serif font-bold text-[#182B22]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-[#5C6E64] hover:text-[#182B22]"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart(product, selectedSize, quantity);
                  setIsCartOpen(true);
                }}
                className="w-full sm:flex-1 bg-[#182B22] py-3.5 px-6 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
              >
                Add {quantity} to Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full sm:w-auto bg-[#DEC284] py-3.5 px-6 text-xs uppercase tracking-widest-estate font-bold text-[#182B22] hover:bg-[#FAF7F2] border border-[#DEC284] transition-colors"
              >
                Instant Buy
              </button>
            </div>

            {/* Brewing Guide Box */}
            <div className="mt-8 bg-[#182B22] text-[#FAF7F2] p-6 border border-[#243F32]">
              <span className="font-serif italic text-xs text-[#DEC284] block mb-2">
                The Recommended Ceremony
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-serif text-[#C7DBD0]">
                <div>
                  <span className="text-[#74A287] block text-[10px] uppercase font-sans">Water Heat</span>
                  <span className="text-[#FAF7F2] font-bold">{product.brewingGuide.temp}</span>
                </div>
                <div>
                  <span className="text-[#74A287] block text-[10px] uppercase font-sans">Leaf Ratio</span>
                  <span className="text-[#FAF7F2] font-bold">{product.brewingGuide.ratio}</span>
                </div>
                <div>
                  <span className="text-[#74A287] block text-[10px] uppercase font-sans">Steep Time</span>
                  <span className="text-[#FAF7F2] font-bold">{product.brewingGuide.steepTime}</span>
                </div>
                <div>
                  <span className="text-[#74A287] block text-[10px] uppercase font-sans">Subsequent Steeps</span>
                  <span className="text-[#FAF7F2] font-bold">{product.brewingGuide.infusions} Steeps</span>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-6 border-t border-[#DDD2C0] divide-y divide-[#DDD2C0] font-serif">
              {/* Tab 1 */}
              <div>
                <button
                  onClick={() => setActiveTab(activeTab === 'story' ? ('' as any) : 'story')}
                  className="w-full flex items-center justify-between py-4 text-left font-serif text-sm font-bold text-[#182B22]"
                >
                  <span>The Story of This Garden Pluck</span>
                  {activeTab === 'story' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {activeTab === 'story' && (
                  <div className="pb-4 text-xs sm:text-sm text-[#5C6E64] leading-relaxed">
                    {product.story || product.description}
                  </div>
                )}
              </div>

              {/* Tab 2 */}
              <div>
                <button
                  onClick={() => setActiveTab(activeTab === 'ingredients' ? ('' as any) : 'ingredients')}
                  className="w-full flex items-center justify-between py-4 text-left font-serif text-sm font-bold text-[#182B22]"
                >
                  <span>Botanical Ingredients (Zero Additives)</span>
                  {activeTab === 'ingredients' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {activeTab === 'ingredients' && (
                  <div className="pb-4 text-xs sm:text-sm text-[#5C6E64] leading-relaxed">
                    <ul className="list-disc list-inside space-y-1">
                      {product.ingredients.map((ing) => (
                        <li key={ing}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tab 3 */}
              <div>
                <button
                  onClick={() => setActiveTab(activeTab === 'benefits' ? ('' as any) : 'benefits')}
                  className="w-full flex items-center justify-between py-4 text-left font-serif text-sm font-bold text-[#182B22]"
                >
                  <span>Wellness & Mindful Benefits</span>
                  {activeTab === 'benefits' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {activeTab === 'benefits' && (
                  <div className="pb-4 text-xs sm:text-sm text-[#5C6E64] leading-relaxed">
                    <ul className="space-y-1.5">
                      {product.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-[#315442] shrink-0" />
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

        {/* Related Harvests */}
        <div className="mt-24 pt-16 border-t border-[#DDD2C0]">
          <span className="font-serif italic text-sm text-[#74A287] block mb-1">
            Complementary Leaves
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#182B22] mb-8">
            You May Also Enjoy from This Harvest
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFE6] border border-[#DDD2C0] mb-3">
                    <Link href={`/product/${rel.slug}`}>
                      <Image
                        src={rel.mainImage}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                  </div>
                  <span className="text-[10px] uppercase font-serif italic text-[#74A287]">
                    {rel.origin}
                  </span>
                  <Link href={`/product/${rel.slug}`}>
                    <h4 className="font-serif text-base font-bold text-[#182B22] group-hover:text-[#315442] transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                  </Link>
                </div>
                <div className="mt-4 pt-2 border-t border-[#DDD2C0] flex items-center justify-between">
                  <span className="font-serif text-sm font-bold text-[#182B22]">
                    ₹{rel.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => addToCart(rel)}
                    className="text-xs uppercase tracking-wider font-bold text-[#315442] underline"
                  >
                    + Add
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
