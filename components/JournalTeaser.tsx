import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journalPostsData } from '@/lib/teaData';

export const JournalTeaser: React.FC = () => (
  <section className="bg-cream py-20 lg:py-28">
    <div className="mx-auto max-w-shell px-6 sm:px-10 lg:px-16">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Journal</p>
          <h2 className="mt-3 font-display text-d-md">Notes from the valley.</h2>
        </div>
        <Link href="/journal" className="link text-[0.9375rem] font-medium text-garden-500">
          Read all →
        </Link>
      </header>

      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {journalPostsData.map((post) => (
          <article key={post.id} className="card group">
            <Link href={`/journal/${post.slug}`}>
              <div className="card-media aspect-[3/2]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 92vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.8125rem] text-bark-50">
                  {post.category} · {post.readTime}
                </p>
                <h3 className="mt-2 font-display text-[1.25rem] leading-snug">{post.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-bark-70">
                  {post.excerpt.slice(0, 118)}…
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
