'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journalPostsData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

export const JournalSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-[#DDD2C0]">
          <div>
            <span className="font-serif italic text-sm text-[#74A287] block mb-1">
              Field Notes & Botany
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22]">
              The Estate Monographs
            </h2>
            <p className="mt-2 text-sm text-[#5C6E64] font-serif max-w-xl">
              Reflections on high-mountain terroir, mycorrhizal soil health, and the ancient calming chemistry of shade-grown green leaves.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-estate font-bold text-[#182B22] hover:text-[#74A287] transition-colors group"
          >
            <span>All Monographs</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journalPostsData.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4EFE6] border border-[#DDD2C0] mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2] border border-[#DDD2C0] px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-[#182B22]">
                    {post.chapter || 'Monograph'}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-serif italic text-[#74A287] mb-1">
                  <span>{post.publishDate}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/journal/${post.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-[#182B22] group-hover:text-[#315442] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="mt-2 text-xs sm:text-sm text-[#5C6E64] font-serif line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DDD2C0] flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#182B22]">
                  By {post.author.name}
                </span>

                <Link
                  href={`/journal/${post.slug}`}
                  className="text-xs uppercase tracking-widest-estate font-bold text-[#315442] hover:text-[#182B22] underline"
                >
                  Read Monograph →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
