'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#DDD2C0]">
          <div>
            <span className="font-serif italic text-sm text-[#74A287] block mb-1">
              Seasonal Releases
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22]">
              Small-Batch Spring Harvests
            </h2>
            <p className="mt-2 text-sm text-[#5C6E64] font-serif max-w-xl">
              Plucked at peak seasonal vigor. Sealed immediately at the garden in airtight tins to lock in fragrance and natural L-theanine.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-estate font-bold text-[#182B22] hover:text-[#74A287] transition-colors group"
          >
            <span>Complete Catalogue</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filters in Serif Typography */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-12 border-b border-[#EAE2D5] no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest-estate py-1 font-medium whitespace-nowrap transition-colors relative ${
                activeCategory === cat
                  ? 'text-[#182B22] font-bold'
                  : 'text-[#7A8E82] hover:text-[#182B22]'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#315442]" />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.packageSizes[0];

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between"
              >
                {/* Image Stage */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFE6] border border-[#DDD2C0] mb-4">
                    <Link href={`/product/${product.slug}`}>
                      <Image
                        src={product.mainImage}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>

                    <div className="absolute top-3 left-3 bg-[#FAF7F2] border border-[#DDD2C0] px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-[#182B22]">
                      {product.category}
                    </div>
                  </div>

                  {/* Terroir & Origin Line */}
                  <div className="flex items-center justify-between text-[11px] font-serif italic text-[#74A287] mb-1">
                    <span>{product.origin}</span>
                    <span>{product.elevation}</span>
                  </div>

                  {/* Title */}
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="font-serif text-lg font-bold text-[#182B22] group-hover:text-[#315442] transition-colors leading-snug">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Sensory notes */}
                  <p className="mt-1 text-xs text-[#5C6E64] font-serif line-clamp-1 italic">
                    Notes of {product.flavorNotes.join(', ')}
                  </p>

                  {/* Package Size Picker */}
                  {product.packageSizes.length > 1 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.packageSizes.slice(0, 2).map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`px-2 py-0.5 text-[10px] font-medium border transition-colors ${
                            currentSize === size
                              ? 'bg-[#182B22] text-[#FAF7F2] border-[#182B22]'
                              : 'bg-white text-[#5C6E64] border-[#DDD2C0] hover:border-[#182B22]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Add to Bag in INR */}
                <div className="mt-5 pt-3 border-t border-[#DDD2C0] flex items-center justify-between">
                  <div>
                    <span className="font-serif text-lg font-bold text-[#182B22]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 font-serif text-xs text-[#895237] line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product, currentSize)}
                    className="text-xs uppercase tracking-widest-estate font-bold text-[#315442] hover:text-[#182B22] underline transition-colors"
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
