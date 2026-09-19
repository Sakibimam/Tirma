'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { estatePillars } from '@/lib/teaData';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border border-[#DEC284] mb-6 bg-white">
            <Image src="/images/logo.jpeg" alt="TIRMA AGRO TECH" fill className="object-cover" />
          </div>

          <span className="font-serif italic text-sm text-[#74A287] block mb-2">
            The Estate Monograph
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#182B22] leading-tight">
            Technology Rooted in Nature.
          </h1>
          <p className="mt-4 text-lg text-[#5C6E64] font-serif italic max-w-2xl leading-relaxed">
            &ldquo;We do not attempt to force nature with synthetic haste; we listen intently to the quiet rhythms of mountain mist, living soil, and sunlight.&rdquo;
          </p>
        </div>

        {/* Story Section */}
        <div className="border border-[#DDD2C0] bg-white p-8 sm:p-14 mb-16 space-y-6 font-serif">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#182B22]">
            The Synthesis of Earth & Mind
          </h2>
          <p className="text-sm sm:text-base text-[#475E52] leading-relaxed">
            Founded on the conviction that pure whole-leaf tea is the finest daily restorative medicine for modern consciousness, TIRMA brings together multi-generational tea masters in Darjeeling and Shizuoka with natural ecological precision.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Industrial commercial agriculture strips tea gardens of their biodiversity, drenching bushes in petrochemical nitrogen to force artificial yield. The result is bitter, water-heavy, lifeless leaves. At TIRMA, our high-altitude cloud terraces are preserved as diverse, thriving sanctuaries where native birds, beneficial insects, mountain spring streams, and wild forest mulch nourish deep root systems.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-bold text-[#182B22] mb-8 pb-3 border-b border-[#DDD2C0]">
            The Four Botanical Commitments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {estatePillars.map((p) => (
              <div key={p.number} className="border border-[#DDD2C0] bg-[#F4EFE6] p-8">
                <span className="font-serif text-3xl text-[#B98E3F] block mb-2">{p.number}</span>
                <h4 className="font-serif text-lg font-bold text-[#182B22] mb-1">{p.name}</h4>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#895237] block mb-3 font-sans">
                  {p.subtitle}
                </span>
                <p className="font-serif text-xs sm:text-sm text-[#475E52] leading-relaxed">
                  {p.story}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery & Guarantees in INR */}
        <div id="shipping" className="border border-[#243F32] bg-[#182B22] text-[#FAF7F2] p-8 sm:p-14 mb-16 font-serif">
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#DEC284] block mb-2">
            Complimentary Indian Delivery & Guarantee
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-6">
            Sealed Fresh at the Garden
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-[#C7DBD0] leading-relaxed">
            <p>
              • <strong className="text-white">Complimentary Delivery Across India:</strong> All orders of ₹1,499 and above qualify for complimentary courier delivery directly to your doorstep in insulated, zero-plastic compostable packaging. Standard delivery is ₹120 for orders below ₹1,499.
            </p>
            <p>
              • <strong className="text-white">30-Day Freshness Guarantee:</strong> If a harvest fails to delight your palate with fragrance and clarity, write to us at <a href="mailto:concierge@tirma-tea.org" className="text-[#DEC284] underline">concierge@tirma-tea.org</a> within 30 days for a quiet replacement or refund.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#DEC284] text-[#182B22] px-6 py-3 text-xs uppercase tracking-widest-estate font-bold hover:bg-white transition-colors"
            >
              <span>Explore The Harvests</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
