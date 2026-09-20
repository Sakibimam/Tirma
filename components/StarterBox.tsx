'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getProductBySlug } from '@/lib/teaData';

/**
 * The conversion block. Most people arrive knowing they like tea and not
 * which kind, so the cheapest honest answer is all four in small pouches.
 */
export const StarterBox: React.FC = () => {
  const { addToCart } = useCart();
  const box = getProductBySlug('the-index-box');
  if (!box) return null;

  const saving = (box.originalPrice ?? box.price) - box.price;

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
        <div className="overflow-hidden rounded-plate bg-clay-100">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[440px]">
              <Image
                src="/photos/leaf-bowl.jpg"
                alt="Loose tea leaves in a ceramic bowl beside a strainer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-8 sm:p-12 lg:p-14">
              <p className="eyebrow text-clay-500">Not sure where to start</p>
              <h2 className="mt-3 font-display text-d-sm">
                Try all four for a fortnight.
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-bark-70">
                Twenty-five grams each of the Assam, the green, the kahwa and
                the blue pea — about ten cups apiece. Enough to live with a tea
                rather than judge it on one cup.
              </p>

              <ul className="mt-7 space-y-2.5">
                {box.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.9375rem] text-bark-70">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-clay-400" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <div>
                  <span className="font-display text-[2.25rem] leading-none">
                    ₹{box.price.toLocaleString('en-IN')}
                  </span>
                  {box.originalPrice && (
                    <span className="ml-2.5 text-[0.9375rem] text-bark-30 line-through">
                      ₹{box.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <p className="mt-1 text-[0.8125rem] text-bark-50">
                    ₹{saving.toLocaleString('en-IN')} less than buying them separately
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button onClick={() => addToCart(box)} className="btn btn-clay">
                    Add the box
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                  <Link href={`/tea/${box.slug}`} className="btn btn-ghost">
                    What&rsquo;s inside
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
