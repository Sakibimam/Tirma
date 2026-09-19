'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Leaf, Sparkles, Truck, RotateCcw } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-parchment-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
            Terms & Client Commitments
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-1">
            Organic Warranty & Shop Regulations
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Transparent commitments to bio-dynamic integrity, customer data privacy, and ethical trade.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 sm:p-14 shadow-sm border border-gray-100 space-y-10 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-tea-950 mb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-tea-700" /> § 1. 100% Certified Organic Harvest Guarantee
            </h2>
            <p>
              TIRMA Agro Tech guarantees that all whole-leaf teas, ceremonial matcha, and botanical tisanes sold through our platform originate exclusively from certified organic or bio-dynamic estates. Every seasonal harvest undergoes rigorous third-party phytochemical chromatography testing to verify 100% absence of synthetic pesticide residues, glyphosate, heavy metals, and ionizing radiation.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-tea-950 mb-3 flex items-center gap-2">
              <Truck className="h-5 w-5 text-tea-700" /> § 2. Carbon-Neutral Shipping & Dispatch
            </h2>
            <p>
              All orders are packaged within 24 hours of placement in climate-neutral, zero-plastic packaging using plant-derived cornstarch barriers. Orders exceeding $50.00 qualify for complimentary worldwide eco-shipping. Standard delivery times are 2-5 business days domestically, and 4-8 business days for international consignments.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-tea-950 mb-3 flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-tea-700" /> § 3. 30-Day Freshness Return & Replacement Policy
            </h2>
            <p>
              Your complete palate satisfaction is our paramount priority. If any tea or ceramic accessory does not meet your expectations for aroma, clarity, or craftsmanship, you are entitled to a full refund or exchange within 30 days of receipt. Simply contact our client concierge at <a href="mailto:concierge@tirma-tea.org" className="text-tea-800 font-semibold underline">concierge@tirma-tea.org</a>.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-tea-950 mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold-600" /> § 4. Data Privacy & Ethical Commerce
            </h2>
            <p>
              TIRMA Agro Tech maintains strict compliance with modern global data privacy standards (including GDPR and CCPA). We will never sell, rent, or distribute your personal details to advertising syndicates. Payment card transactions are processed through tokenized, PCI-DSS Level 1 compliant gateways with 256-bit SSL encryption.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">
              Last updated: September 2026 • TIRMA AGRO TECH
            </span>
            <Link
              href="/products"
              className="rounded-xl bg-tea-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-tea-800 transition-colors"
            >
              Return to Tea Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
