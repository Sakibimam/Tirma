import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { recipesData, getProductById } from '@/lib/teaData';

export const metadata: Metadata = {
  title: 'Brewing',
  description:
    'How to brew it: milk tea done properly, highway dhaba chai, cold-brew green, and Darjeeling orthodox steep.',
};

export default function BrewingPage() {
  return (
    <div className="bg-cream">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-shell px-6 pb-16 pt-20 sm:px-10 lg:px-16">
          <p className="eyebrow text-bark-50">Brewing</p>
          <h1 className="mt-6 font-display text-d-md">
            Four methods worth <span className="italic">getting right.</span>
          </h1>
          <p className="prose-measure mt-8 text-bark-70">
            Good tea is mostly ruined at the last step. Water too hot, milk in too
            early, leaf left in too long. These four fix the mistakes we see most,
            and none of them need equipment you do not own.
          </p>
        </div>
      </header>

      <ul className="mx-auto grid max-w-shell gap-x-16 px-6 pb-24 sm:px-10 md:grid-cols-2 lg:px-16">
        {recipesData.map((r, i) => {
          const tea = r.pairedTeaId ? getProductById(r.pairedTeaId) : undefined;
          return (
            <li key={r.id} className="border-b border-[color:var(--line)]">
              <Link href={`/brewing/${r.slug}`} className="group block py-12">
                <div className="card-media aspect-[3/2] rounded-card">
                  <Image
                    src={r.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 92vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-baseline gap-4">
                  <span className="eyebrow text-bark-50">{String(i + 1).padStart(2, '0')}</span>
                  <span className="eyebrow text-bark-50">
                    {r.category} · {r.prepTime}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-[1.875rem] leading-tight">
                  <span className="link">{r.title}</span>
                </h2>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-bark-70">
                  {r.subtitle}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
