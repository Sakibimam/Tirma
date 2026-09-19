'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { productsData } from '@/lib/teaData';
import { Product } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = productsData.filter((product) => {
      return (
        product.title.toLowerCase().includes(q) ||
        product.subtitle.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.origin.toLowerCase().includes(q) ||
        product.flavorNotes.some((n) => n.toLowerCase().includes(q))
      );
    });
    setResults(filtered);
  }, [query]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-tea-950/70 backdrop-blur-md transition-all">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-tea-100 overflow-hidden animate-fade-in">
        {/* Search header */}
        <div className="relative flex items-center border-b border-gray-100 px-6 py-4">
          <Search className="h-5 w-5 text-tea-700" />
          <input
            type="text"
            placeholder="Search organic teas, matcha, origins, or flavor notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent px-4 py-2 text-base text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="bg-parchment-50 px-6 py-3 border-b border-gray-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-gray-400 flex items-center gap-1 font-medium">
            <Sparkles className="h-3 w-3 text-gold-500" /> Popular:
          </span>
          {['Matcha', 'Sencha', 'Silver Needle', 'Oolong', 'L-Theanine', 'Floral'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="rounded-full bg-white px-3 py-1 text-tea-800 border border-gray-200 hover:border-tea-500 hover:text-tea-900 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim() === '' ? (
            <div className="text-center py-8">
              <p className="text-sm text-gray-500">
                Type above to discover organic single-estate teas, ceremonial matcha, and botanical infusions.
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-4 py-3 hover:bg-parchment-50 px-3 rounded-xl transition-colors"
                >
                  <div className="relative h-14 w-14 rounded-lg overflow-hidden bg-tea-50 shrink-0 border border-tea-100">
                    <Image
                      src={product.mainImage}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-tea-600 bg-tea-50 px-2 py-0.5 rounded">
                        {product.category}
                      </span>
                      <span className="text-xs text-gray-400">{product.origin}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 truncate group-hover:text-tea-700 transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {product.flavorNotes.join(' • ')}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-semibold text-tea-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-tea-700 group-hover:translate-x-1 transition-all ml-auto mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600 font-medium">No teas found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-gray-400 mt-1">
                Try searching for &quot;Matcha&quot;, &quot;Sencha&quot;, or &quot;Oolong&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
