'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[#0C1712]/70 backdrop-blur-sm transition-all">
      <div className="w-full max-w-2xl bg-[#FAF7F2] border border-[#DDD2C0] shadow-2xl overflow-hidden animate-fade-in">
        {/* Search header */}
        <div className="relative flex items-center border-b border-[#EAE2D5] px-6 py-4 bg-[#F4EFE6]">
          <Search className="h-4 w-4 text-[#315442]" />
          <input
            type="text"
            placeholder="Search organic harvests, origins, botanicals (e.g. Saffron, Chamomile, Uji)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent px-4 py-1 text-sm font-serif text-[#182B22] placeholder-[#74A287] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#5C6E64] hover:text-[#182B22] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="bg-[#FAF7F2] px-6 py-2.5 border-b border-[#EAE2D5] flex flex-wrap items-center gap-2 text-xs font-serif">
          <span className="text-[#74A287] italic">Explore:</span>
          {['Matcha', 'Silver Needle', 'Jade Sencha', 'Kashmiri Kahwa', 'Darjeeling', 'Chamomile'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="border border-[#DDD2C0] bg-white px-2.5 py-0.5 text-[#182B22] hover:border-[#182B22] transition-colors text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim() === '' ? (
            <div className="text-center py-8">
              <p className="font-serif italic text-sm text-[#5C6E64]">
                Type above to discover single-estate harvests, ceremonial matcha, and botanical tisanes.
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-[#EAE2D5]">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-4 py-3 hover:bg-[#F4EFE6] px-3 transition-colors"
                >
                  <div className="relative h-14 w-14 overflow-hidden bg-[#FAF7F2] border border-[#DDD2C0] shrink-0">
                    <Image
                      src={product.mainImage}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#315442]">
                        {product.category}
                      </span>
                      <span className="text-xs font-serif italic text-[#74A287]">{product.origin}</span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#182B22] truncate group-hover:text-[#315442] transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs font-serif text-[#5C6E64] truncate italic">
                      {product.flavorNotes.join(' • ')}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-sm font-bold text-[#182B22]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#5C6E64] group-hover:text-[#182B22] group-hover:translate-x-1 transition-all ml-auto mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="font-serif text-[#182B22] text-sm">No botanicals found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs font-serif italic text-[#5C6E64] mt-1">
                Try searching for &quot;Matcha&quot;, &quot;Sencha&quot;, or &quot;Kahwa&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
