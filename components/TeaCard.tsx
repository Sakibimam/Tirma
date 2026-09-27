'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

interface Props {
  tea: Product;
  priority?: boolean;
}

/**
 * The product card. Photograph first, then the thing people actually decide
 * on — what it tastes like, whether it takes milk, and what a cup costs.
 */
export const TeaCard: React.FC<Props> = ({ tea, priority = false }) => {
  const { addToCart } = useCart();
  const perCup = Math.round(tea.price / tea.cupsPerPack);

  return (
    <article className="card group flex flex-col">
      <Link href={`/tea/${tea.slug}`} className="card-media block aspect-[4/5]">
        {tea.photo && (
          <Image
            src={tea.photo}
            alt={tea.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover"
          />
        )}
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[0.75rem] font-medium text-cream backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(26,42,31,0.55)' }}
        >
          {tea.caffeineLevel === 'None' ? 'Caffeine-free' : tea.category}
        </span>
        {tea.takesMilk && (
          <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[0.75rem] font-medium text-garden-600">
            Takes milk
          </span>
        )}
        {tea.isUpcoming && (
          <span className="absolute bottom-3 left-3 rounded-full bg-clay-500 px-3 py-1 text-[0.75rem] font-medium text-cream shadow-sm">
            Upcoming
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.375rem] leading-tight">
          <Link href={`/tea/${tea.slug}`} className="link">
            {tea.title}
          </Link>
        </h3>

        <p className="mt-1.5 text-[0.875rem] text-bark-50">{tea.origin}</p>

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-bark-70">
          {tea.flavorNotes.slice(0, 3).join(' · ')}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4 pt-4 border-t border-[color:var(--line)]">
          <div>
            <span className="font-display text-[1.5rem] leading-none">
              ₹{tea.price.toLocaleString('en-IN')}
            </span>
            <span className="ml-1.5 text-[0.8125rem] text-bark-50">/ {tea.baseWeight}</span>
            <p className="mt-1 text-[0.8125rem] text-bark-50">about ₹{perCup} a cup</p>
          </div>

          {tea.isUpcoming ? (
            <span className="rounded-full bg-cream-200 px-4 py-2 text-[0.8125rem] font-medium text-bark-50">
              Upcoming
            </span>
          ) : (
            <button
              onClick={() => addToCart(tea)}
              className="btn btn-primary px-5 py-2.5 text-[0.875rem]"
              aria-label={`Add ${tea.title} to bag`}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
