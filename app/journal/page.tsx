'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journalPostsData } from '@/lib/teaData';
import { Calendar, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function JournalPage() {
  return (
    <div className="bg-parchment-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Phytochemical Research & Agronomy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-tea-950 mt-2">
            The Agro-Tech Journal
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Exploring the frontiers of regenerative tea agronomy, neuroscience of amino acids, and the thermodynamics of mindful brewing.
          </p>
        </div>

        {/* Featured First Article */}
        {journalPostsData[0] && (
          <div className="rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-luxury mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
            <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-tea-50">
              <Image
                src={journalPostsData[0].image}
                alt={journalPostsData[0].title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 rounded-full bg-tea-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                Featured Thesis
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between py-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{journalPostsData[0].publishDate}</span>
                  <span>•</span>
                  <span>{journalPostsData[0].readTime}</span>
                </div>

                <Link href={`/journal/${journalPostsData[0].slug}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 hover:text-tea-800 transition-colors leading-snug mb-4">
                    {journalPostsData[0].title}
                  </h2>
                </Link>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {journalPostsData[0].excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden bg-tea-100">
                    <Image
                      src={journalPostsData[0].author.avatar}
                      alt={journalPostsData[0].author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      {journalPostsData[0].author.name}
                    </h4>
                    <p className="text-[10px] text-gray-400">{journalPostsData[0].author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/journal/${journalPostsData[0].slug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-tea-900 px-4 py-2 text-xs font-bold text-white hover:bg-gold-600 transition-colors shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPostsData.slice(1).map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-tea-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-tea-900 backdrop-blur-sm shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/journal/${post.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-tea-800 transition-colors line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-7 w-7 rounded-full overflow-hidden bg-tea-100">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/journal/${post.slug}`}
                    className="text-xs font-bold text-tea-900 hover:text-gold-700 transition-colors flex items-center gap-1"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
