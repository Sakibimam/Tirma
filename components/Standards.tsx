import React from 'react';
import Image from 'next/image';
import { standards } from '@/lib/teaData';

/**
 * Four plain claims, beside a photograph of the thing being claimed about.
 * Not named `Promise` — that would shadow the global in every importing module.
 */
export const Standards: React.FC = () => (
  <section className="bg-cream-100 py-20 lg:py-28">
    <div className="mx-auto grid max-w-shell items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
      <div className="relative aspect-[4/5] overflow-hidden rounded-plate lg:aspect-[4/4.6]">
        <Image
          src="/photos/plucking-hands.jpg"
          alt="Hands picking two leaves and a bud from a tea bush"
          fill
          sizes="(max-width: 1024px) 92vw, 46vw"
          className="object-cover"
        />
      </div>

      <div>
        <p className="eyebrow">What we promise</p>
        <h2 className="mt-3 font-display text-d-md">
          Four things we will put in writing.
        </h2>

        <ol className="mt-10 space-y-8">
          {standards.map((s) => (
            <li key={s.n} className="flex gap-5">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-garden-500 text-[0.8125rem] font-medium text-cream">
                {Number(s.n)}
              </span>
              <div>
                <h3 className="font-display text-[1.25rem] leading-snug">{s.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-[1.7] text-bark-70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
