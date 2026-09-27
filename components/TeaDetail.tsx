'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { TeaCard } from './TeaCard';
import type { Product } from '@/types';

interface Props {
  tea: Product;
  related: Product[];
}

export const TeaDetail: React.FC<Props> = ({ tea, related }) => {
  const { addToCart } = useCart();
  const [size, setSize] = useState(tea.packageSizes[0]);
  const [qty, setQty] = useState(1);
  const [shot, setShot] = useState(tea.photo ?? '');

  const baseGrams = tea.packageSizes[0]?.grams ?? size.grams;
  const cups = Math.max(1, Math.round(tea.cupsPerPack * (size.grams / baseGrams)));
  const perCup = Math.round(size.price / cups);

  const gallery = [tea.photo, ...(tea.extraPhotos ?? [])].filter(Boolean) as string[];

  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-shell px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <nav aria-label="Breadcrumb" className="text-[0.875rem] text-bark-50">
          <Link href="/tea" className="link">
            Shop tea
          </Link>
          <span className="mx-2">/</span>
          <span>{tea.title}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ---- Gallery ---- */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-plate bg-cream-200">
              {shot && (
                <Image
                  src={shot}
                  alt={tea.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                />
              )}
            </div>
            {gallery.length > 1 && (
              <div className="mt-3 flex gap-3">
                {gallery.map((src) => (
                  <button
                    key={src}
                    onClick={() => setShot(src)}
                    aria-label="Show this photograph"
                    aria-pressed={shot === src}
                    className={`relative h-20 w-20 overflow-hidden rounded-soft transition-all duration-300 ${
                      shot === src ? 'ring-2 ring-garden-500 ring-offset-2 ring-offset-cream' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ---- Buy ---- */}
          <div>
            <div className="flex items-center gap-3">
              <p className="eyebrow">{tea.category}</p>
              {tea.isUpcoming && (
                <span className="rounded-full bg-clay-500 px-3 py-0.5 text-[0.75rem] font-medium text-cream shadow-sm">
                  Upcoming
                </span>
              )}
            </div>
            <h1 className="mt-2.5 font-display text-d-sm">{tea.title}</h1>
            <p className="mt-2 text-[0.9375rem] text-bark-50">{tea.subtitle}</p>

            <p className="mt-6 font-display text-[1.375rem] italic leading-[1.45] text-garden-500">
              {tea.pitch}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {tea.flavorNotes.map((n) => (
                <span
                  key={n}
                  className="rounded-full bg-cream-200/80 px-3.5 py-1.5 text-[0.8125rem] text-bark-70"
                >
                  {n}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-[0.9375rem] font-medium">Size</h2>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {tea.packageSizes.map((s) => {
                  const on = s.label === size.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => setSize(s)}
                      aria-pressed={on}
                      className={`rounded-soft border px-4 py-3 text-left transition-colors duration-300 ${
                        on
                          ? 'border-garden-500 bg-garden-500 text-cream'
                          : 'border-[color:var(--line)] hover:border-garden-300'
                      }`}
                    >
                      <span className="block text-[0.875rem]">{s.label}</span>
                      <span className="mt-0.5 block font-display text-[1.125rem]">
                        ₹{s.price.toLocaleString('en-IN')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-card bg-cream-100 p-5">
              <div>
                <span className="font-display text-[2rem] leading-none">
                  ₹{(size.price * qty).toLocaleString('en-IN')}
                </span>
                <p className="mt-1 text-[0.8125rem] text-bark-50">
                  about ₹{perCup} a cup · {size.grams} g
                </p>
              </div>

              <div className="flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-cream px-1">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-bark-50 transition-colors hover:text-bark"
                  aria-label="One fewer"
                >
                  −
                </button>
                <span className="min-w-[1.5rem] text-center text-[0.9375rem] tabular-nums">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 text-bark-50 transition-colors hover:text-bark"
                  aria-label="One more"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(tea, size.label, qty)}
                disabled={!tea.inStock || tea.isUpcoming}
                className="btn btn-primary ml-auto disabled:cursor-not-allowed disabled:opacity-50"
              >
                {tea.isUpcoming ? 'Upcoming blend' : tea.inStock ? 'Add to bag' : 'Out of stock'}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {[
                ['Origin', tea.origin],
                ['Elevation', tea.elevation],
                ['Harvest', tea.harvest],
                ['Caffeine', tea.caffeineLevel === 'None' ? 'None at all' : tea.caffeineLevel],
                ['Takes milk', tea.takesMilk ? 'Yes' : 'No'],
                ['Re-steeps', `${tea.brewingGuide.infusions}`],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.75rem] uppercase tracking-[0.12em] text-bark-30">{k}</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-snug">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-[0.875rem] text-bark-50">
              Free delivery over ₹1,499 · dispatched in two working days
            </p>
          </div>
        </div>
      </div>

      {/* ---- Story ---- */}
      <section className="bg-cream-100 py-16 lg:py-20">
        <div className="mx-auto grid max-w-shell gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">The leaf</p>
            <p className="mt-4 font-display text-[1.5rem] leading-[1.4]">{tea.description}</p>
            <p className="prose-measure mt-6 text-bark-70">{tea.story}</p>
            {tea.palateDescription && (
              <p className="prose-measure mt-4 text-bark-70">{tea.palateDescription}</p>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-card bg-white/70 p-7 shadow-lift">
              <h2 className="font-display text-[1.375rem]">How to brew it</h2>
              <dl className="mt-5 space-y-3.5">
                {[
                  ['Water', tea.brewingGuide.temp],
                  ['Leaf', tea.brewingGuide.ratio],
                  ['Time', tea.brewingGuide.steepTime],
                  ...(tea.brewingGuide.vessel ? [['Vessel', tea.brewingGuide.vessel]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4">
                    <dt className="text-[0.8125rem] uppercase tracking-[0.1em] text-bark-30">
                      {k}
                    </dt>
                    <dd className="col-span-2 text-[0.9375rem] leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>

              {tea.brewingGuide.withMilk && (
                <div className="mt-6 rounded-soft bg-clay-100 p-5">
                  <h3 className="text-[0.875rem] font-medium text-clay-500">
                    {tea.takesMilk ? 'With milk' : 'One warning'}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.7] text-bark-70">
                    {tea.brewingGuide.withMilk}
                  </p>
                </div>
              )}

              <h3 className="mt-7 text-[0.8125rem] uppercase tracking-[0.12em] text-bark-30">
                In the pack
              </h3>
              <ul className="mt-2.5 space-y-1.5">
                {tea.ingredients.map((ing) => (
                  <li key={ing} className="text-[0.9375rem] text-bark-70">
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Why this one ---- */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
          <h2 className="font-display text-d-sm">Why this one</h2>
          <ul className="mt-8 grid gap-7 md:grid-cols-3">
            {tea.benefits.map((b, i) => (
              <li key={b} className="rounded-card bg-cream-100 p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-garden-500 text-[0.8125rem] text-cream">
                  {i + 1}
                </span>
                <p className="mt-4 text-[0.9375rem] leading-[1.7] text-bark-70">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-100 py-16 lg:py-20">
          <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
            <h2 className="font-display text-d-sm">You might also like</h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <TeaCard key={r.id} tea={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
