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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[#0C1712]/70 transition-all">
      <div className="w-full max-w-2xl bg-[#FBF7F0] border border-[#E3D6C0] overflow-hidden animate-fade-in">
        {/* Search header */}
        <div className="relative flex items-center border-b border-[#E3D6C0] px-6 py-4 bg-[#F4EFE6]">
          <Search className="h-4 w-4 text-[#5C5043]" />
          <input
            type="text"
            placeholder="Search whole leaf harvests, CTC, origins (e.g. Assam, Darjeeling, Dhaba)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent px-4 py-1 text-sm text-[#33291F] placeholder-[#7A6D5D] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#5C6E64] hover:text-[#33291F] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="bg-[#FBF7F0] px-6 py-2.5 border-b border-[#E3D6C0] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#7A6D5D] italic">Explore:</span>
          {['Darjeeling', 'Kadak', 'Assam', 'Green', 'Dhaba', 'Chai'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="border border-[#E3D6C0] bg-white px-2.5 py-0.5 text-[#33291F] hover:border-[#33291F] transition-colors text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim() === '' ? (
            <div className="text-center py-8">
              <p className="italic text-sm text-[#5C6E64]">
                Search by tea, region or what you want it to taste like.
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-[#E3D6C0]">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/tea/${product.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-4 py-3 hover:bg-[#F4EFE6] px-3 transition-colors"
                >
                  <div className="relative h-14 w-14 overflow-hidden bg-[#FBF7F0] border border-[#E3D6C0] shrink-0">
                    {product.photo && (
                      <Image src={product.photo} alt="" fill sizes="64px" className="object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-[#5C5043]">
                        {product.category}
                      </span>
                      <span className="text-xs italic text-[#7A6D5D]">{product.origin}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#33291F] truncate group-hover:text-[#5C5043] transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs text-[#5C6E64] truncate italic">
                      {product.flavorNotes.join(' • ')}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-[#33291F]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#5C6E64] group-hover:text-[#33291F] group-hover:translate-x-1 transition-all ml-auto mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-[#33291F] text-sm">No teas found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs italic text-[#5C6E64] mt-1">
                Try &quot;Assam&quot;, &quot;Darjeeling&quot; or &quot;Kadak&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
