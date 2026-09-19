'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import { Search, ArrowUpDown, RotateCcw } from 'lucide-react';

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
    <div className="bg-[#FAF7F2] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-serif italic text-sm text-[#74A287] block mb-2">
            The Garden Collection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#182B22]">
            Single-Estate Harvests & Botanicals
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#475E52] font-serif leading-relaxed">
            Plucked from cloud-shrouded elevations in Darjeeling, Shizuoka, Uji, and the Western Ghats. All lots are sealed directly at the estate gardens.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="border-y border-[#DDD2C0] py-6 mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#74A287]" />
              <input
                type="text"
                placeholder="Search harvests, tasting notes, origins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[#DDD2C0] bg-white py-2 pl-9 pr-3 text-xs font-serif text-[#182B22] placeholder-[#74A287] focus:border-[#182B22] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-[10px] text-[#7A8E82] hover:text-[#182B22]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs font-serif text-[#5C6E64] flex items-center gap-1">
                <ArrowUpDown className="h-3 w-3 text-[#182B22]" /> Order By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-[#DDD2C0] bg-white px-3 py-2 text-xs font-serif text-[#182B22] focus:border-[#182B22] focus:outline-none"
              >
                <option value="featured">Curated & Seasonal</option>
                <option value="price-asc">Price: Low to High (₹)</option>
                <option value="price-desc">Price: High to Low (₹)</option>
                <option value="rating">Highest Sommelier Rating</option>
              </select>
            </div>
          </div>

          {/* Category Tabs & Caffeine Selector */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4 border-t border-[#EAE2D5]">
            <div className="flex items-center gap-4 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-widest-estate py-1 font-medium whitespace-nowrap transition-colors relative ${
                    selectedCategory === cat
                      ? 'text-[#182B22] font-bold'
                      : 'text-[#7A8E82] hover:text-[#182B22]'
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#315442]" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-end lg:self-auto text-xs font-serif">
              <span className="text-[#7A8E82] italic">Caffeine:</span>
              {['All', 'None', 'Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  onClick={() => setCaffeineFilter(level)}
                  className={`px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold border transition-colors ${
                    caffeineFilter === level
                      ? 'bg-[#182B22] text-[#FAF7F2] border-[#182B22]'
                      : 'bg-white text-[#5C6E64] border-[#DDD2C0] hover:border-[#182B22]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 text-xs font-serif text-[#5C6E64]">
          <span>
            Displaying <strong className="text-[#182B22]">{filteredProducts.length}</strong> single-estate harvests
          </span>
          {(selectedCategory !== 'All' || caffeineFilter !== 'All' || searchQuery !== '') && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#895237] hover:underline"
            >
              <RotateCcw className="h-3 w-3" /> Reset filters
            </button>
          )}
        </div>

        {/* Products Grid in INR */}
        {filteredProducts.length === 0 ? (
          <div className="border border-[#DDD2C0] bg-white p-12 text-center my-8">
            <h3 className="font-serif text-xl font-normal text-[#182B22]">
              No matching harvests found
            </h3>
            <p className="text-xs font-serif text-[#5C6E64] mt-2 max-w-sm mx-auto">
              Please adjust your botanical filters or clear your search term.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 bg-[#182B22] px-6 py-2.5 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => {
              const currentSize = selectedSizes[product.id] || product.packageSizes[0];

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between"
                >
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

                    <div className="flex items-center justify-between text-[11px] font-serif italic text-[#74A287] mb-1">
                      <span>{product.origin}</span>
                      <span>{product.elevation}</span>
                    </div>

                    <Link href={`/product/${product.slug}`}>
                      <h3 className="font-serif text-lg font-bold text-[#182B22] group-hover:text-[#315442] transition-colors leading-snug">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="mt-1 text-xs text-[#5C6E64] font-serif line-clamp-1 italic">
                      Notes of {product.flavorNotes.join(', ')}
                    </p>

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
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-16 text-center font-serif italic text-sm text-[#5C6E64]">Gathering garden harvests...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
