import React from 'react';
import Link from 'next/link';
import { productsData } from '@/lib/teaData';
import { TeaCard } from './TeaCard';

/**
 * The shop, immediately below the hero. Someone who lands here and wants tea
 * should be able to buy it without scrolling past a manifesto first.
 */
export const ShopRange: React.FC = () => {
  const teas = productsData.filter((p) => p.category !== 'Sets').slice(0, 6);

  return (
    <section id="shop" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The range</p>
            <h2 className="mt-3 font-display text-d-md">Six teas, chosen slowly.</h2>
          </div>
          <Link href="/tea" className="link text-[0.9375rem] font-medium text-garden-500">
            See everything, with brewing notes →
          </Link>
        </header>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {teas.map((tea, i) => (
            <TeaCard key={tea.id} tea={tea} priority={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
};
