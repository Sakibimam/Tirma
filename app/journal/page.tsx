'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journalPostsData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

export default function JournalPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-serif italic text-sm text-[#74A287] block mb-2">
            Field Notes & Botanical Botany
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#182B22]">
            The Estate Monographs
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#475E52] font-serif leading-relaxed">
            Essays on high-altitude cloud cover, living forest soils, the tranquil neuroscience of L-theanine, and the gentle art of mindful steeping.
          </p>
        </div>

        {/* Featured First Monograph */}
        {journalPostsData[0] && (
          <div className="border border-[#DDD2C0] bg-[#F4EFE6] mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2] border border-[#DDD2C0]">
              <Image
                src={journalPostsData[0].image}
                alt={journalPostsData[0].title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#182B22] text-[#FAF7F2] px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                {journalPostsData[0].chapter || 'Featured Thesis'}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-serif italic text-[#74A287] mb-2">
                  <span>{journalPostsData[0].publishDate}</span>
                  <span>•</span>
                  <span>{journalPostsData[0].readTime}</span>
                </div>

                <Link href={`/journal/${journalPostsData[0].slug}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#182B22] hover:text-[#315442] transition-colors leading-snug mb-4">
                    {journalPostsData[0].title}
                  </h2>
                </Link>

                <p className="font-serif text-sm text-[#475E52] leading-relaxed mb-6">
                  {journalPostsData[0].excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#DDD2C0] flex items-center justify-between">
                <span className="font-serif italic text-xs text-[#182B22]">
                  By {journalPostsData[0].author.name}
                </span>

                <Link
                  href={`/journal/${journalPostsData[0].slug}`}
                  className="text-xs uppercase tracking-widest-estate font-bold text-[#315442] hover:text-[#182B22] underline"
                >
                  Read Monograph →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Monographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPostsData.slice(1).map((post) => (
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
    </div>
  );
}
