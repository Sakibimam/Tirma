'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const { addToCart } = useCart();
  const matcha = productsData[0];

  return (
    <section className="relative overflow-hidden bg-[#F4EFE6] border-b border-[#EAE2D5] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Delicate background paper texture accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Editorial Storytelling */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3D6A52]" />
              <span className="font-serif italic text-sm text-[#74A287]">
                Monograph No. 26 — The Mountain Spring Pluck
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#182B22] leading-[1.08]">
              From the quiet cloud line <br />
              <span className="italic font-light text-[#895237]">to your morning bowl.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475E52] max-w-xl font-serif leading-relaxed">
              We harvest unhurried, whole-leaf teas and wild restorative botanicals nurtured in living Himalayan and Shizuoka mountain soils. Grown without chemicals. Picked by hand in the dawn mist.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-none bg-[#182B22] px-8 py-4 text-xs uppercase tracking-widest-estate font-semibold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
              >
                <span>Explore The Harvests</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-b border-[#895237] py-3 text-xs uppercase tracking-widest-estate font-semibold text-[#895237] hover:text-[#182B22] hover:border-[#182B22] transition-colors"
              >
                <span>Read The Estate Story</span>
              </Link>
            </div>

            {/* Three quiet editorial credentials */}
            <div className="mt-14 pt-8 border-t border-[#DDD2C0] grid grid-cols-3 gap-6 text-[#243F32]">
              <div>
                <span className="font-serif text-2xl font-normal block text-[#182B22]">1,850m</span>
                <span className="text-[11px] uppercase tracking-wider text-[#74A287] font-medium">Cloud Elevation</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-normal block text-[#182B22]">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#74A287] font-medium">Living Organic Soil</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-normal block text-[#182B22]">Zero</span>
                <span className="text-[11px] uppercase tracking-wider text-[#74A287] font-medium">Microplastics</span>
              </div>
            </div>
          </div>

          {/* Right: Bespoke Botanical Showcase on Artisan Pedestal */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Soft circular wash */}
              <div className="absolute inset-4 rounded-full border border-[#DDD2C0] bg-[#EAE2D5]/40" />

              {/* Natural Pedestal */}
              <div className="absolute bottom-2 w-4/5 h-28 z-0">
                <Image
                  src="/images/podstawka.png"
                  alt="Tea Pedestal"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Fresh green tea leaf backdrop */}
              <div className="absolute -top-4 -right-4 w-32 h-32 z-5 opacity-80 pointer-events-none">
                <Image
                  src="/images/green-tea.png"
                  alt="Organic Tea Leaf"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Central Matcha Art */}
              <div className="relative z-10 w-3/4 h-3/4 drop-shadow-2xl">
                <Image
                  src={matcha.mainImage}
                  alt={matcha.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Hand-stamped Label Tag */}
              <div className="absolute bottom-4 left-2 z-20 bg-[#FAF7F2] border border-[#DDD2C0] p-4 shadow-sm max-w-[210px]">
                <span className="font-serif italic text-xs text-[#895237] block">Featured Pluck</span>
                <h4 className="font-serif text-sm font-bold text-[#182B22] leading-tight mt-0.5">
                  Imperial Ceremonial Matcha
                </h4>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-serif font-bold text-[#182B22] text-sm">
                    ₹{matcha.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => addToCart(matcha)}
                    className="text-[10px] uppercase tracking-wider font-bold text-[#315442] hover:text-[#182B22] underline"
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
