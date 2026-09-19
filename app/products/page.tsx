'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import {
  Star,
  ShoppingBag,
  SlidersHorizontal,
  Search,
  Sparkles,
  ArrowUpDown,
  Eye,
  RotateCcw,
} from 'lucide-react';
import { Product } from '@/types';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [caffeineFilter, setCaffeineFilter] = useState<string>('All');
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({});

  const categories = [
    'All',
    'Matcha',
    'Green Tea',
    'Black Tea',
    'Oolong Tea',
    'Herbal & Tisane',
    'Accessories',
  ];

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;
        const matchesCaffeine =
          caffeineFilter === 'All' || product.caffeineLevel === caffeineFilter;
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          !q ||
          product.title.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q) ||
          product.flavorNotes.some((n) => n.toLowerCase().includes(q)) ||
          product.origin.toLowerCase().includes(q);

        return matchesCategory && matchesCaffeine && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [selectedCategory, caffeineFilter, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setCaffeineFilter('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="bg-parchment-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Certified Bio-Dynamic
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-tea-950 mt-2">
            The Organic Tea Collection
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Single-origin high mountain harvests, shade-grown ceremonial matcha, and restorative botanicals. Plucked by hand, packaged without plastics.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10 space-y-6">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search teas, tasting notes, origins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-parchment-50/50 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:border-tea-500 focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs text-gray-500 flex items-center gap-1 font-medium whitespace-nowrap">
                <ArrowUpDown className="h-3.5 w-3.5 text-tea-700" /> Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-xl border border-gray-200 bg-parchment-50/50 px-3.5 py-2 text-xs font-semibold text-gray-800 focus:border-tea-500 focus:outline-none"
              >
                <option value="featured">Curated & Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Pills & Caffeine Selector */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4 border-t border-gray-100">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-tea-900 text-white shadow-sm'
                      : 'bg-parchment-100 text-gray-600 hover:bg-parchment-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Caffeine Level */}
            <div className="flex items-center gap-2 self-end lg:self-auto">
              <span className="text-xs text-gray-400">Caffeine:</span>
              {['All', 'None', 'Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  onClick={() => setCaffeineFilter(level)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                    caffeineFilter === level
                      ? 'bg-gold-500 text-tea-950 font-bold'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span>
            Showing <strong className="text-gray-900">{filteredProducts.length}</strong> organic teas & accessories
          </span>
          {(selectedCategory !== 'All' || caffeineFilter !== 'All' || searchQuery !== '') && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-tea-700 hover:text-tea-900"
            >
              <RotateCcw className="h-3 w-3" /> Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center border border-gray-100 shadow-sm my-8">
            <h3 className="font-serif text-xl font-bold text-gray-900">
              No matching harvests found
            </h3>
            <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto">
              We couldn&apos;t find any teas matching your current filters. Try changing category or clearing your search term.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 rounded-xl bg-tea-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-tea-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const currentSize = selectedSizes[product.id] || product.packageSizes[0];

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-tea-50/40">
                    <Link href={`/product/${product.slug}`}>
                      <Image
                        src={product.mainImage}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {product.isFeatured && (
                        <span className="rounded-full bg-tea-900/90 text-white px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                          Flagship
                        </span>
                      )}
                      <span className="rounded-full bg-white/90 text-tea-900 px-2.5 py-0.5 text-[10px] font-semibold backdrop-blur-sm shadow-sm">
                        {product.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-tea-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link
                        href={`/product/${product.slug}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-tea-900 shadow-lg hover:bg-gold-500 hover:text-white transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                      <span className="truncate max-w-[60%]">{product.origin}</span>
                      <div className="flex items-center gap-1 text-gold-600 font-semibold">
                        <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                        <span>{product.rating}</span>
                        <span className="text-gray-300">({product.reviewCount})</span>
                      </div>
                    </div>

                    <Link href={`/product/${product.slug}`}>
                      <h3 className="font-serif text-base font-bold text-gray-900 group-hover:text-tea-800 transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {product.subtitle}
                    </p>

                    {/* Flavor Notes */}
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

                    {/* Bottom Price & Add */}
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
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Loading Organic Harvests...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
