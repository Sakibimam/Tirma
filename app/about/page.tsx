import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { standards } from '@/lib/teaData';

export const metadata: Metadata = {
  title: 'Our gardens',
  description:
    'TIRMA buys pure leaf direct from Upper Assam and orthodox estates in Darjeeling, dates every pack by harvest month, and sells honest tea rather than mass commodity blends.',
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* ---- Opening ---- */}
      <header className="relative isolate min-h-[420px] overflow-hidden lg:min-h-[520px]">
        <Image
          src="/photos/garden-munnar.jpg"
          alt="Contour-planted tea rows running across a hillside"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="scrim absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto flex min-h-[420px] max-w-shell items-end px-6 pb-14 pt-24 sm:px-10 lg:min-h-[520px] lg:px-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-cream/70">About</p>
            <h1 className="mt-3 font-display text-d-lg text-cream">
              We sell seven teas.
              <br />
              <em className="font-normal italic">That is the whole business.</em>
            </h1>
          </div>
        </div>
      </header>

      {/* ---- Why ---- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
          <div className="lg:col-span-7">
            <p className="font-display text-[1.625rem] leading-[1.4]">
              Most tea sold in India is old, broken and anonymous. It left a
              garden nobody names, in a year nobody prints, and arrived as dust
              in a bag — because dust brews fast and hides what it used to be.
            </p>
            <p className="prose-measure mt-6 text-bark-70">
              None of that is a scandal. It is what happens when tea is bought
              on price by people who will never drink it. The leaf gets graded
              down, blended across seasons to keep a flavour consistent,
              warehoused, and sold two years later against a best-before date
              that tells you nothing about when it was picked.
            </p>
            <p className="prose-measure mt-4 text-bark-70">
              We started TIRMA because the fix is not complicated and nobody was
              bothering. Buy from gardens you can name. Buy the flush rather
              than the year. Print the month on the pack. Keep the list short
              enough that you can taste everything you sell before it ships.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-card bg-cream-100 p-7">
              <h2 className="font-display text-[1.375rem]">What we are not</h2>
              <ul className="mt-5 space-y-4 text-[0.9375rem] leading-[1.7] text-bark-70">
                <li>
                  We do not own a plantation. We buy directly from estates in
                  Upper Assam and heritage gardens in Darjeeling, and we say which.
                </li>
                <li>
                  We do not sell matcha, or anything we would have to import and
                  then pretend to understand.
                </li>
                <li>
                  We make no health claims. Tea is a good drink. That is enough
                  to be going on with.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ---- The two places ---- */}
      <section className="bg-garden-500 py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-2xl font-display text-d-md text-cream">
            Assam is a lowland tea. We say so on the pack.
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {[
              {
                img: '/photos/garden-walk-india.jpg',
                alt: 'A path running between tea bushes in an Indian garden',
                h: 'Upper Assam · 45–120 m',
                b: 'River flats, not hills. The heat and the silt are exactly what make assamica leaf thick and malty, and strong enough to take milk. Altitude would make it delicate — which is the opposite of what this tea is for.',
              },
              {
                img: '/photos/plucker-india.jpg',
                alt: 'A tea picker between rows of bushes',
                h: 'High-fire CTC · Fresh Leaf',
                b: 'Daily chai needs proper leaf, not sweepings. We select high-fire CTC grains packed monthly, so the leaf retains its malty vigour and extracts rich red colour without long simmering.',
              },
              {
                img: '/photos/garden-hills.jpg',
                alt: 'Tea terraces on a steep hillside in Darjeeling',
                h: 'Darjeeling · 1,400–1,800 m',
                b: 'Himalayan mist and steep mountain terraces slow down leaf growth, creating the muscatel notes and floral amber liquor unique to orthodox Darjeeling.',
              },
            ].map((c) => (
              <article key={c.h}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-[1.375rem] text-cream">{c.h}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-cream/75">{c.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Standards ---- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
          <p className="eyebrow">Our standards</p>
          <h2 className="mt-3 font-display text-d-md">Four things we will put in writing.</h2>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2">
            {standards.map((s) => (
              <li key={s.n} className="rounded-card bg-cream-100 p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-garden-500 text-[0.875rem] text-cream">
                  {Number(s.n)}
                </span>
                <h3 className="mt-5 font-display text-[1.375rem] leading-snug">{s.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.7] text-bark-70">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <Link href="/tea" className="btn btn-primary">
              See the seven
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
