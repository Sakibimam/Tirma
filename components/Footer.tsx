'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Leaf,
  Sparkles,
  ArrowRight,
  Mail,
  CheckCircle,
} from 'lucide-react';

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
    <footer className="bg-tea-950 text-white pt-20 pb-12 border-t border-tea-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Harvest Dispatch */}
        <div className="rounded-3xl bg-gradient-to-r from-tea-900 to-tea-800 p-8 sm:p-12 border border-gold-400/20 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-gold-400/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-300 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> First Flush Allocation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                Join the Tirma Tea Society
              </h3>
              <p className="mt-2 text-sm text-tea-200/90 max-w-xl">
                Subscribe to receive private harvest releases, seasonal agro-tech soil reports, and an exclusive <strong className="text-gold-300">15% discount</strong> on your inaugural order.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="rounded-xl bg-tea-950/80 p-4 border border-gold-400/40 text-center">
                  <CheckCircle className="h-6 w-6 text-gold-400 mx-auto mb-1.5" />
                  <p className="text-sm font-bold text-white">Welcome to the Tea Society!</p>
                  <p className="text-xs text-gold-300 mt-1">Use voucher code <span className="font-mono font-bold bg-white/10 px-2 py-0.5 rounded">HARVEST20</span> at checkout for 20% off.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-tea-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-tea-700 bg-tea-950/90 py-3 pl-10 pr-4 text-sm text-white placeholder-tea-400 focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-xl bg-gold-500 px-6 py-3 text-sm font-bold text-tea-950 hover:bg-gold-400 transition-colors shrink-0 shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gold-400/50 bg-white">
                <Image src="/images/logo.jpeg" alt="Tirma Agro Tech" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  TIRMA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-semibold -mt-1">
                  Agro Tech • Organic
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-tea-200/80 max-w-sm leading-relaxed mb-6">
              Pioneering the synthesis of ecological precision agronomy and centuries-old artisanal tea mastery. 100% certified organic, non-GMO, and plastic-free.
            </p>

            {/* Certifications row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-tea-300">
              <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400" /> USDA Organic
              </span>
              <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                <Leaf className="h-3.5 w-3.5 text-tea-400" /> EU Bio-Dynamic
              </span>
              <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" /> Plastic-Free
              </span>
            </div>
          </div>

          {/* Quick Links 1: Organic Teas */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300 mb-4">
              Our Harvests
            </h4>
            <ul className="space-y-2.5 text-xs text-tea-200/80">
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
                  Golden Yunnan Dian Hong
                </Link>
              </li>
              <li>
                <Link href="/products?category=Oolong+Tea" className="hover:text-white transition-colors">
                  Oriental Beauty Oolong
                </Link>
              </li>
              <li>
                <Link href="/products?category=Herbal+%26+Tisane" className="hover:text-white transition-colors">
                  Himalayan Silver Needle
                </Link>
              </li>
              <li>
                <Link href="/products?category=Accessories" className="hover:text-white transition-colors">
                  Bamboo Chasen Ceremonial Kits
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Rituals & Knowledge */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300 mb-4">
              Agro-Tech Wisdom
            </h4>
            <ul className="space-y-2.5 text-xs text-tea-200/80">
              <li>
                <Link href="/recipes" className="hover:text-white transition-colors">
                  Barista Brewing Protocols
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  The Phytochemical Journal
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Microclimate Soil Telemetry
                </Link>
              </li>
              <li>
                <Link href="/recipes/velvet-ceremonial-matcha-latte" className="hover:text-white transition-colors">
                  Matcha Latte Masterclass
                </Link>
              </li>
              <li>
                <Link href="/journal/the-science-of-l-theanine-and-alpha-waves" className="hover:text-white transition-colors">
                  The Science of L-Theanine
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 3: Connoisseur Care */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300 mb-4">
              Client Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-tea-200/80">
              <li>
                <Link href="/orders" className="hover:text-white transition-colors">
                  Track Fresh Shipment
                </Link>
              </li>
              <li>
                <Link href="/about#shipping" className="hover:text-white transition-colors">
                  Eco-Packaging & Shipping
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Organic Warranty & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service & Privacy
                </Link>
              </li>
              <li>
                <a href="mailto:concierge@tirma-tea.org" className="hover:text-white transition-colors">
                  concierge@tirma-tea.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-tea-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tea-400">
          <p>
            © {new Date().getFullYear()} TIRMA AGRO TECH. Technology Rooted In Nature. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-tea-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-tea-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-tea-200 transition-colors">
              Agro-Tech Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
