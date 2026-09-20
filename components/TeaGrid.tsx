'use client';

import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { productsData } from '@/lib/teaData';
import { TeaCard } from './TeaCard';
import type { TeaCategory } from '@/types';

const FILTERS: { label: string; value: TeaCategory | 'All' }[] = [
  { label: 'Everything', value: 'All' },
  { label: 'Black & chai', value: 'Black Tea' },
  { label: 'Green', value: 'Green Tea' },
  { label: 'Blue', value: 'Blue Tea' },
  { label: 'Spiced', value: 'Spiced Blend' },
  { label: 'Sets', value: 'Sets' },
];

export const TeaGrid: React.FC = () => {
  const params = useSearchParams();
  const [filter, setFilter] = useState<TeaCategory | 'All'>(
    (params.get('c') as TeaCategory | null) ?? 'All'
  );
  const [milkOnly, setMilkOnly] = useState(false);
  const [noCaffeine, setNoCaffeine] = useState(false);

  const teas = useMemo(
    () =>
      productsData.filter(
        (p) =>
          (filter === 'All' || p.category === filter) &&
          (!milkOnly || p.takesMilk) &&
          (!noCaffeine || p.caffeineLevel === 'None')
      ),
    [filter, milkOnly, noCaffeine]
  );

  return (
    <div className="mx-auto max-w-shell px-6 pb-24 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 border-b border-[color:var(--line)] pb-6">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`rounded-full px-4 py-2 text-[0.875rem] transition-colors duration-300 ${
              filter === f.value
                ? 'bg-garden-500 text-cream'
                : 'bg-cream-200/70 text-bark-70 hover:bg-cream-300'
            }`}
          >
            {f.label}
          </button>
        ))}

        <span className="ml-auto flex flex-wrap items-center gap-2">
          <button
            onClick={() => setMilkOnly((v) => !v)}
            aria-pressed={milkOnly}
            className={`rounded-full border px-4 py-2 text-[0.875rem] transition-colors duration-300 ${
              milkOnly
                ? 'border-clay-400 bg-clay-400 text-cream'
                : 'border-[color:var(--line)] text-bark-70 hover:border-clay-300'
            }`}
          >
            Takes milk
          </button>
          <button
            onClick={() => setNoCaffeine((v) => !v)}
            aria-pressed={noCaffeine}
            className={`rounded-full border px-4 py-2 text-[0.875rem] transition-colors duration-300 ${
              noCaffeine
                ? 'border-clay-400 bg-clay-400 text-cream'
                : 'border-[color:var(--line)] text-bark-70 hover:border-clay-300'
            }`}
          >
            Caffeine-free
          </button>
        </span>
      </div>

      {teas.length > 0 ? (
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {teas.map((tea, i) => (
            <TeaCard key={tea.id} tea={tea} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-16 font-display text-[1.5rem] text-bark-50">
          Nothing matches that combination.
        </p>
      )}
    </div>
  );
};
