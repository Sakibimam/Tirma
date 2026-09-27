'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { name: 'All tea', href: '/tea' },
      { name: 'Black & chai', href: '/tea?c=Black+Tea' },
      { name: 'Green tea', href: '/tea?c=Green+Tea' },
      { name: 'Spiced blends', href: '/tea?c=Spiced+Blend' },
      { name: 'The Index Box', href: '/tea/the-index-box' },
    ],
  },
  {
    title: 'Read',
    links: [
      { name: 'Brewing guides', href: '/brewing' },
      { name: 'Journal', href: '/journal' },
      { name: 'Our gardens', href: '/about' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Track an order', href: '/orders' },
      { name: 'Delivery & returns', href: '/terms' },
      { name: 'Terms', href: '/terms' },
    ],
  },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
  };

  return (
    <footer className="bg-garden-600 text-cream">
      <div className="mx-auto max-w-shell px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-display text-[1.75rem] font-medium">TIRMA</span>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-[1.75] text-cream/75">
              We send one note when a flush lands and nothing else. No offers,
              no weekly letter — roughly four emails a year, which is how many
              harvests there are.
            </p>

            <form onSubmit={submit} className="mt-7 max-w-md">
              <label htmlFor="harvest-email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2.5">
                <input
                  id="harvest-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-cream/25 bg-cream/10 px-5 py-3 text-[0.9375rem] text-cream outline-none transition-colors placeholder:text-cream/45 focus:border-cream/60"
                />
                <button type="submit" className="btn btn-light shrink-0 px-6 py-3">
                  Sign up
                </button>
              </div>
              {sent && (
                <p className="mt-3 text-[0.875rem] text-cream/75">
                  Noted. We&rsquo;ll write when the next flush is picked.
                </p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-[0.8125rem] uppercase tracking-[0.14em] text-cream/55">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="link text-[0.9375rem] text-cream/80 hover:text-cream"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-7 text-[0.8125rem] text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TIRMA · Upper Assam &amp; Darjeeling</p>
          <p>Prices in ₹ · Shipped across India</p>
        </div>
      </div>
    </footer>
  );
};
