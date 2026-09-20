import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * A photograph of a hill garden, and one clear sentence about what is for sale.
 *
 * The scrim runs from the left on wide screens and from the bottom on narrow
 * ones, so the type always sits on the darkest part of the frame rather than
 * on whatever the crop happens to expose.
 */
export const Hero: React.FC = () => (
  <section className="relative isolate min-h-[560px] overflow-hidden lg:min-h-[calc(100svh-var(--masthead))]">
    <Image
      src="/photos/garden-valley.jpg"
      alt="Tea bushes on a hillside in the Western Ghats, with cloud sitting in the valley beyond"
      fill
      priority
      sizes="100vw"
      className="-z-10 object-cover object-center"
    />
    <div className="scrim absolute inset-0 -z-10 lg:hidden" aria-hidden="true" />
    <div className="scrim-side absolute inset-0 -z-10 hidden lg:block" aria-hidden="true" />

    <div className="mx-auto flex min-h-[560px] max-w-shell items-end px-6 pb-14 pt-24 sm:px-10 lg:min-h-[calc(100svh-var(--masthead))] lg:items-center lg:px-16 lg:pb-16">
      <div className="max-w-xl text-cream">
        <p className="eyebrow rise text-cream/75">Assam &amp; the Kashmir valley</p>

        <h1
          className="rise mt-5 font-display text-d-lg font-normal text-cream"
          style={{ animationDelay: '80ms' }}
        >
          Tea from the hills,
          <br />
          <em className="font-normal italic">picked this season.</em>
        </h1>

        <p
          className="rise mt-6 max-w-lg text-[1.0625rem] leading-[1.7] text-cream/85"
          style={{ animationDelay: '160ms' }}
        >
          Whole-leaf Assam for your morning chai, a soft first-flush green,
          Kashmiri kahwa with real Pampore saffron, and caffeine-free blue pea.
          Every pack carries the month its leaf was picked.
        </p>

        <div
          className="rise mt-9 flex flex-wrap items-center gap-3.5"
          style={{ animationDelay: '240ms' }}
        >
          <Link href="/tea" className="btn btn-light">
            Shop the tea
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/tea/the-index-box" className="btn btn-ghost border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-garden-600">
            Try all four · ₹1,190
          </Link>
        </div>

        <ul
          className="rise mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.875rem] text-cream/70"
          style={{ animationDelay: '320ms' }}
        >
          {['Harvest month on every pack', 'Free delivery over ₹1,499', 'Shipped across India'].map(
            (t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
                {t}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </section>
);
