'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#14241C] text-[#FAF7F2] pt-20 pb-12 border-t border-[#243F32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Gazette Box */}
        <div className="border-b border-[#243F32] pb-16 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="font-serif italic text-sm text-[#DEC284] block mb-1">
              The Harvest Gazette
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF7F2]">
              Receive private harvest allocations & estate monographs.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#C7DBD0] font-serif max-w-md">
              We send occasional quiet dispatches when small-batch mountain leaves are plucked, sealed, and ready for dispatch. Includes a 10% voucher code (<span className="text-[#DEC284]">ORGANIC10</span>).
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-[#1B3026] p-4 border border-[#2F4D3D] text-left">
                <span className="font-serif text-sm font-bold text-[#DEC284] block">
                  You are inscribed in the Gazette.
                </span>
                <span className="text-xs text-[#C7DBD0] font-serif mt-0.5 block">
                  Use code <strong className="text-[#FAF7F2]">ORGANIC10</strong> at checkout for 10% off your inaugural order.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your personal email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#1B3026] border border-[#2F4D3D] px-4 py-3 text-xs text-[#FAF7F2] placeholder-[#74A287] focus:border-[#DEC284] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#DEC284] text-[#14241C] px-6 py-3 text-xs uppercase tracking-widest-estate font-bold hover:bg-[#FAF7F2] transition-colors shrink-0"
                >
                  Inscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 font-serif">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3.5 mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#DEC284] bg-white shrink-0">
                <Image src="/images/logo.jpeg" alt="Tirma" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF7F2]">
                  TIRMA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#DEC284] font-medium font-sans -mt-1">
                  Agro Tech • Organic
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#C7DBD0] leading-relaxed max-w-sm font-serif mb-4">
              Cultivating living soils, honoring centuries of Japanese and Himalayan artisan craft, and delivering whole-leaf purity to your daily ritual.
            </p>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#74A287] block">
              Bengaluru • Darjeeling • Shizuoka
            </span>
          </div>

          {/* Col 2: The Harvests */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#DEC284] font-bold mb-4">
              The Harvests
            </h4>
            <ul className="space-y-2 text-xs text-[#C7DBD0]">
              <li>
                <Link href="/products?category=Matcha" className="hover:text-white transition-colors">
                  Ceremonial Uji Matcha
                </Link>
              </li>
              <li>
                <Link href="/products?category=Green+Tea" className="hover:text-white transition-colors">
                  Fukamushi Jade Sencha
                </Link>
              </li>
              <li>
                <Link href="/products?category=Black+Tea" className="hover:text-white transition-colors">
                  Royal Darjeeling First Flush
                </Link>
              </li>
              <li>
                <Link href="/products?category=Herbal+%26+Tisane" className="hover:text-white transition-colors">
                  Himalayan Silver Needle
                </Link>
              </li>
              <li>
                <Link href="/products?category=Herbal+%26+Tisane" className="hover:text-white transition-colors">
                  Kashmiri Saffron Kahwa
                </Link>
              </li>
              <li>
                <Link href="/products?category=Accessories" className="hover:text-white transition-colors">
                  Bamboo Chasen Tea Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: The Rituals */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#DEC284] font-bold mb-4">
              Brewing Rituals
            </h4>
            <ul className="space-y-2 text-xs text-[#C7DBD0]">
              <li>
                <Link href="/recipes/velvet-ceremonial-matcha-latte" className="hover:text-white transition-colors">
                  The Morning Usucha Bowl
                </Link>
              </li>
              <li>
                <Link href="/recipes/slow-cold-brew-jade-sencha-citrus" className="hover:text-white transition-colors">
                  The 12-Hour Silent Steep
                </Link>
              </li>
              <li>
                <Link href="/recipes/golden-calm-bedtime-tisane" className="hover:text-white transition-colors">
                  The Golden Evening Elixir
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  The Estate Monographs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Patron Concierge */}
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#DEC284] font-bold mb-4">
              Patron Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#C7DBD0]">
              <li>
                <Link href="/orders" className="hover:text-white transition-colors">
                  Track Fresh Shipment
                </Link>
              </li>
              <li>
                <Link href="/about#shipping" className="hover:text-white transition-colors">
                  Packaging & Eco-Delivery (₹)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Freshness Guarantee & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of the Estate
                </Link>
              </li>
              <li>
                <a href="mailto:concierge@tirma-tea.org" className="hover:text-white transition-colors underline">
                  concierge@tirma-tea.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#243F32] pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#74A287] gap-4">
          <p>
            © {new Date().getFullYear()} TIRMA AGRO TECH. Technology Rooted in Nature. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-[#FAF7F2] transition-colors">
              Regulations & Guarantee
            </Link>
            <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">
              The Estate Story
            </Link>
            <span>All pricing in Indian Rupee (₹)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
