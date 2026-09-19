'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { journalPostsData } from '@/lib/teaData';
import { BookOpen, ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const JournalSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> The Agro-Tech Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-2">
              Science, Terroir & Botanical Wisdom
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              Delve into phytochemical research, regenerative soil microbiology, and the ancient art of mindful tea meditation.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-tea-800 hover:text-gold-700 transition-colors group"
          >
            <span>Read All Articles</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journalPostsData.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-tea-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-tea-900 backdrop-blur-sm shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
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
                  <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-tea-800 transition-colors line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
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
    </section>
  );
};
