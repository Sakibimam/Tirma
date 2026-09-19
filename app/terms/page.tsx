'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 lg:py-20 font-serif">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 pb-4 border-b border-[#DDD2C0]">
          <span className="font-serif italic text-sm text-[#74A287]">
            The Estate Commitments
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22] mt-1">
            Organic Warranty & Shop Regulations
          </h1>
          <p className="mt-2 text-sm text-[#5C6E64] font-serif">
            Quiet, honest commitments to bio-dynamic soil integrity, patron data privacy, and ethical trade.
          </p>
        </div>

        <div className="border border-[#DDD2C0] bg-white p-8 sm:p-14 space-y-10 text-xs sm:text-sm text-[#475E52] leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-[#182B22] mb-3">
              § 1. 100% Certified Organic Harvest Guarantee
            </h2>
            <p>
              TIRMA Agro Tech guarantees that all whole-leaf teas, ceremonial matcha, and botanical tisanes sold through our platform originate exclusively from certified organic or bio-dynamic mountain estates. Every seasonal harvest is independently tested to verify 100% absence of synthetic pesticide residues, glyphosate, heavy metals, and radiation.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-[#182B22] mb-3">
              § 2. Carbon-Neutral Indian & Global Dispatch
            </h2>
            <p>
              All orders are hand-packed within 24 hours of garden allocation in zero-plastic, compostable packaging. Consignments exceeding ₹1,499 qualify for complimentary delivery across India. Standard delivery is ₹120 for orders below ₹1,499. Standard delivery timeline across India is 2-4 business days.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-[#182B22] mb-3">
              § 3. 30-Day Freshness Return & Replacement Policy
            </h2>
            <p>
              Your palate satisfaction is our paramount priority. If any tea, tisane, or handcrafted bamboo accessory does not meet your expectations for fragrance, clarity, or mouthfeel, you are entitled to a quiet full refund or replacement within 30 days of receipt. Contact our concierge at <a href="mailto:concierge@tirma-tea.org" className="text-[#182B22] font-bold underline">concierge@tirma-tea.org</a>.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-[#182B22] mb-3">
              § 4. Patron Privacy & Ethical Commerce
            </h2>
            <p>
              TIRMA maintains strict compliance with modern global data privacy principles. We never monetize or distribute your personal details to marketing brokers. Payment transactions are secured with 256-bit SSL encryption.
            </p>
          </div>

          <div className="pt-6 border-t border-[#DDD2C0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7A8E82] italic">
              Archived: September 2026 • TIRMA AGRO TECH
            </span>
            <Link
              href="/products"
              className="bg-[#182B22] px-6 py-2.5 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
            >
              Return to Harvests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
