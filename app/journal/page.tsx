import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { journalPostsData } from '@/lib/teaData';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Notes from the valley: why Assam is a lowland tea, why highway dhaba chai tastes better, and what makes Darjeeling muscatel.',
};

export default function JournalPage() {
  return (
    <div className="bg-cream">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-shell px-6 pb-16 pt-20 sm:px-10 lg:px-16">
          <p className="eyebrow text-bark-50">Journal</p>
          <h1 className="mt-6 font-display text-d-md">
            Notes from <span className="italic">the valley.</span>
          </h1>
          <p className="prose-measure mt-8 text-bark-70">
            Written when there is something worth saying, which is not often. No
            wellness copy, no listicles — mostly the things we had to learn while
            buying this tea, and a few we got wrong first.
          </p>
        </div>
      </header>

      <ul className="mx-auto max-w-shell px-6 pb-24 sm:px-10 lg:px-16">
        {journalPostsData.map((post, i) => (
          <li key={post.id} className="border-b border-[color:var(--line)]">
            <Link
              href={`/journal/${post.slug}`}
              className="group grid items-start gap-x-16 gap-y-6 py-14 lg:grid-cols-12"
            >
              <span className="eyebrow text-bark-50 lg:col-span-1">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="lg:col-span-6">
                <span className="eyebrow text-bark-50">
                  {post.category} · {post.readTime}
                </span>
                <h2 className="mt-4 font-display text-[2rem] leading-[1.1]">
                  <span className="link">{post.title}</span>
                </h2>
                <p className="prose-measure mt-5 text-[0.975rem] leading-[1.7] text-bark-70">
                  {post.excerpt}
                </p>
                <span className="eyebrow mt-6 inline-block text-bark-50">
                  {new Date(post.publishDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:col-span-5">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
