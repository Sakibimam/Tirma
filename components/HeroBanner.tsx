'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, Award, Clock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';

export const HeroBanner: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProduct = productsData.find((p) => p.isBanner) || productsData[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parchment-100 via-parchment-50 to-white pt-8 pb-16 lg:py-24 border-b border-tea-100/60">
      {/* Subtle organic leaf background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-tea-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gold-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Organic Harvest Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50/80 px-4 py-1.5 text-xs font-semibold text-gold-900 shadow-sm backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-tea-600 animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-tea-800">
                Spring 2026 First Flush
              </span>
              <span className="text-gold-500">•</span>
              <span className="text-gray-600">Bio-Dynamic Agro-Tech Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-tea-950 leading-[1.15]">
              Technology Rooted in Nature.
              <span className="block italic text-gold-700 font-normal mt-1">
                Elevate Your Daily Tea Ritual.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Cultivated with IoT soil telemetry and generational Japanese & Himalayan artisan mastery.
              Single-origin whole leaf teas and stone-ground ceremonial matcha brimming with natural L-theanine and clean vitality.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-tea-900 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-tea-800 hover:shadow-xl transition-all group"
              >
                <span>Explore Organic Harvest</span>
                <ArrowRight className="h-4 w-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/product/${featuredProduct.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-tea-200 bg-white/80 px-7 py-4 text-sm font-semibold text-tea-900 hover:bg-white hover:border-tea-400 transition-all backdrop-blur-sm"
              >
                <span>View Featured Matcha</span>
              </Link>
            </div>

            {/* Key Trust Highlights */}
            <div className="mt-12 pt-8 border-t border-gray-200/70 grid grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-tea-100/80 text-tea-800 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">100% Organic</h4>
                  <p className="text-[11px] text-gray-500">USDA & EU Bio Certified</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-100 text-gold-800 shrink-0">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Single Origin</h4>
                  <p className="text-[11px] text-gray-500">Unblended High Terroir</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-tea-100/80 text-tea-800 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Zero Plastic</h4>
                  <p className="text-[11px] text-gray-500">Biodegradable Packaging</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Artwork & Pedestal */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Circular Ambient Aura */}
              <div className="absolute inset-0 rounded-full border border-gold-300/30 bg-gradient-to-tr from-tea-100/50 via-gold-100/30 to-transparent animate-pulse-subtle" />

              {/* Wooden / Natural Pedestal from Reference */}
              <div className="absolute bottom-4 w-4/5 h-28 z-0">
                <Image
                  src="/images/podstawka.png"
                  alt="Artisan Pedestal"
                  fill
                  className="object-contain opacity-95"
                />
              </div>

              {/* Central Hero Product Floating Image */}
              <div className="relative z-10 w-3/4 h-3/4 animate-float-slow drop-shadow-2xl">
                <Image
                  src={featuredProduct.mainImage}
                  alt={featuredProduct.title}
                  fill
                  priority
                  className="object-contain rounded-2xl"
                />
              </div>

              {/* Floating Badge 1: Agro-Tech Microclimate */}
              <div className="absolute -top-2 -left-2 sm:left-4 z-20 rounded-xl bg-white/90 p-3 shadow-xl backdrop-blur-md border border-tea-100 animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-tea-50 text-tea-700">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Agro-Tech Terroir
                    </span>
                    <span className="text-xs font-bold text-tea-950">
                      Uji Highlands, 450m
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Tasting Notes & Quick Add */}
              <div className="absolute -bottom-2 -right-2 sm:right-4 z-20 rounded-xl bg-white/95 p-3.5 shadow-xl backdrop-blur-md border border-gold-200/80 max-w-[210px]">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold-700">
                    Flavor Profile
                  </span>
                  <span className="text-xs font-bold text-tea-900">${featuredProduct.price.toFixed(2)}</span>
                </div>
                <p className="text-[11px] text-gray-600 truncate mb-2">
                  {featuredProduct.flavorNotes.slice(0, 2).join(' • ')}
                </p>
                <button
                  onClick={() => addToCart(featuredProduct)}
                  className="w-full rounded-lg bg-tea-900 py-1.5 text-[11px] font-semibold text-white hover:bg-tea-800 transition-colors"
                >
                  Quick Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
