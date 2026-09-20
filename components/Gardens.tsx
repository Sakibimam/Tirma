import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Where it comes from. Two places, two photographs, and the honest detail
 * that Assam is a lowland tea — which is the opposite of what most brands
 * claim, and the reason people believe the rest.
 */
export const Gardens: React.FC = () => (
  <section className="bg-garden-500 py-20 text-cream lg:py-28">
    <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
      <header className="max-w-2xl">
        <p className="eyebrow text-cream/60">Where it grows</p>
        <h2 className="mt-3 font-display text-d-md text-cream">
          Two valleys, and no borrowed mountains.
        </h2>
        <p className="mt-5 text-[1.0625rem] leading-[1.75] text-cream/80">
          Almost every tea brand claims altitude, because altitude sounds like
          quality. We will tell you the truth in both directions.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
        {[
          {
            img: '/photos/plucker-india.jpg',
            alt: 'A tea picker working between rows of tea bushes in an Indian garden',
            place: 'Upper Assam',
            height: '45–120 m above sea level',
            title: 'Heat and river silt, not height',
            body: 'The Brahmaputra gardens sit on flat river land that floods often enough to keep renewing itself. That heat is exactly what makes assamica leaf thick and malty — strong enough to take milk without vanishing into it. It is why the Indian cup is built on this leaf.',
          },
          {
            img: '/photos/saffron-threads.jpg',
            alt: 'Saffron threads',
            place: 'Pampore, Kashmir',
            height: '1,600 m',
            title: 'Three weeks, picked by hand',
            body: 'Saffron has grown on the plateau south of Srinagar for a thousand years. The harvest runs about three weeks in late October and every flower is picked by hand, three threads apiece — roughly 150,000 flowers to the kilogram. Ours goes in whole so you can see it.',
          },
        ].map((g) => (
          <article key={g.place}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-plate">
              <Image
                src={g.img}
                alt={g.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-display text-[1.625rem] text-cream">{g.place}</h3>
              <span className="text-[0.875rem] text-saffron">{g.height}</span>
            </div>
            <p className="mt-3 font-display text-[1.25rem] italic text-cream/90">{g.title}</p>
            <p className="mt-3 text-[1rem] leading-[1.75] text-cream/75">{g.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <Link href="/about" className="btn btn-light">
          More about how we buy
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </div>
  </section>
);
