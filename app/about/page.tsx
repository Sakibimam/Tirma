'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Leaf,
  Sparkles,
  Truck,
  RotateCcw,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-parchment-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative h-20 w-20 mx-auto rounded-full overflow-hidden border-2 border-gold-400 shadow-md mb-6 bg-white">
            <Image src="/images/logo.jpeg" alt="TIRMA AGRO TECH" fill className="object-cover" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
            Our Founding Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-tea-950 mt-2">
            Technology Rooted in Nature
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-serif italic">
            &ldquo;We do not seek to master nature through synthetic shortcuts; we deploy precision telemetry to listen deeply to her rhythm.&rdquo;
          </p>
        </div>

        {/* Brand Story Hero Card */}
        <div className="rounded-3xl bg-white p-8 sm:p-14 shadow-luxury border border-gray-100 mb-16 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-950">
            The Synthesis of High-Tech Agronomy and Ancient Craft
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Founded on the conviction that high-grade whole-leaf tea is the supreme botanical medicine for the modern mind, TIRMA Agro Tech unites generational Japanese and Himalayan tea masters with solar IoT microclimate soil monitoring.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Conventional modern commercial plantations degrade soil with chemical nitrogen fertilizers, stripping tea leaves of their natural sweet amino acids and complex floral terpenes. At TIRMA, our mountain terraces are biodiverse sanctuaries where beneficial fungi, native insects, and solar sensors co-exist in regenerative equilibrium.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tea-50 text-tea-700 mb-6">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-tea-950 mb-2">
              Microclimate Soil Telemetry
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Solar-powered micro-sensors across mountain slopes monitor root zone moisture tension and ambient transpiration, allowing our cultivators to harvest exclusively at the exact hour of peak chlorophyll density.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-700 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-tea-950 mb-2">
              100% Certified Organic Purity
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Dual-certified under USDA Organic and European Union Eco-Cert standards. Every batch is independently tested for zero pesticide residue, heavy metals, and radiation.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tea-50 text-tea-700 mb-6">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-tea-950 mb-2">
              Zero-Plastic Cornstarch Packaging
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We completely eliminate petroleum microplastics. Our pyramid infusers are woven from biodegradable non-GMO plant starch, and our airtight gold-stamped tins are infinitely recyclable.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-700 mb-6">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-tea-950 mb-2">
              Direct-From-Estate Fair Trade
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We bypass commodity auction brokers, paying over 300% above standard market prices to multi-generational farming families, fostering sustainable community prosperity.
            </p>
          </div>
        </div>

        {/* Shipping & Delivery Standards */}
        <div id="shipping" className="rounded-3xl bg-tea-950 text-white p-8 sm:p-14 shadow-2xl border border-tea-800 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-400">
              Freshness & Concierge Delivery
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-2 mb-6">
              Climate-Neutral Worldwide Shipping
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-tea-100/90 leading-relaxed">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Free Express Eco-Shipping</strong>
                  <span>Orders over $50 qualify for complimentary, carbon-neutral courier dispatch in insulated compostable parcels.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">30-Day Freshness Guarantee</strong>
                  <span>If an organic harvest does not meet your discerning standard, contact our concierge within 30 days for an effortless refund or exchange.</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-xs font-bold text-tea-950 hover:bg-gold-400 transition-colors shadow-md"
              >
                <span>Browse The 2026 Collection</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
