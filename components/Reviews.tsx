import React from 'react';
import { testimonialsData } from '@/lib/teaData';

/**
 * The line that persuades is the context under the name — "reordered four
 * times", "sceptical about green tea" — so that carries more weight here
 * than a row of stars.
 */
export const Reviews: React.FC = () => (
  <section className="bg-cream-100 py-20 lg:py-28">
    <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
      <header className="max-w-2xl">
        <p className="eyebrow">In use</p>
        <h2 className="mt-3 font-display text-d-md">From people who bought it twice.</h2>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonialsData.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col rounded-card bg-white/70 p-6 shadow-lift"
          >
            <div className="flex gap-0.5 text-saffron" aria-label={`${t.rating} out of 5`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-[1.7] text-bark-70">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-[color:var(--line)] pt-4">
              <span className="block font-display text-[1.0625rem]">{t.name}</span>
              <span className="mt-0.5 block text-[0.8125rem] text-bark-50">
                {t.role} · {t.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
