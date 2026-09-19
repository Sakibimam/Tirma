'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import { Star, ShoppingBag, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { Product } from '@/types';

export const PopularProducts: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({});

  const categories = ['All', 'Matcha', 'Green Tea', 'Black Tea', 'Herbal & Tisane', 'Accessories'];

  const filteredProducts =
    activeCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Single-Estate Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-2">
              Featured Organic Harvests
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              Handpicked whole-leaf teas, ceremonial grade matcha, and restorative botanicals. Plucked at peak spring vitality.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-tea-800 hover:text-gold-700 transition-colors group"
          >
            <span>View All Teas</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-tea-900 text-white shadow-md'
                  : 'bg-parchment-100 text-gray-600 hover:bg-parchment-200 hover:text-tea-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.packageSizes[0];

            return (
              <div
                key={product.id}
                className="group relative flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-tea-50/40">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.mainImage}
                      alt={product.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.isFeatured && (
                      <span className="rounded-full bg-tea-900/90 text-white px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm shadow-sm">
                        Masterpiece
                      </span>
                    )}
                    <span className="rounded-full bg-white/90 text-tea-900 px-2.5 py-0.5 text-[10px] font-semibold backdrop-blur-sm shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 bg-tea-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Link
                      href={`/product/${product.slug}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-tea-900 shadow-lg hover:bg-gold-500 hover:text-white transition-colors"
                      title="Quick View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Rating & Origin */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                    <span className="truncate max-w-[60%]">{product.origin}</span>
                    <div className="flex items-center gap-1 text-gold-600 font-semibold">
                      <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                      <span>{product.rating}</span>
                      <span className="text-gray-300">({product.reviewCount})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="font-serif text-base font-bold text-gray-900 group-hover:text-tea-800 transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                    {product.subtitle}
                  </p>

                  {/* Flavor Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.flavorNotes.slice(0, 2).map((note) => (
                      <span
                        key={note}
                        className="rounded-md bg-parchment-100 px-2 py-0.5 text-[10px] font-medium text-tea-900"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Size Selector */}
                  {product.packageSizes.length > 1 && (
                    <div className="mt-4 flex gap-1.5">
                      {product.packageSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`rounded-md px-2 py-1 text-[10px] font-semibold transition-colors ${
                            currentSize === size
                              ? 'bg-tea-800 text-white'
                              : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Price & Add to Bag */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-base font-bold text-tea-950 font-serif">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-1.5 text-xs text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product, currentSize)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-tea-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-gold-600 transition-colors shadow-sm"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
