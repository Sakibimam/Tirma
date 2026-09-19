'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { recipesData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

export const RecipesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-[#DDD2C0]">
          <div>
            <span className="font-serif italic text-sm text-[#74A287] block mb-1">
              Mindful Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22]">
              The Art of the Silent Steep
            </h2>
            <p className="mt-2 text-sm text-[#5C6E64] font-serif max-w-xl">
              Water temperature, gentle pours, and the patience of letting dry leaves unfurl. Three ceremonies to anchor your day.
            </p>
          </div>

          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest-estate font-bold text-[#182B22] hover:text-[#74A287] transition-colors group"
          >
            <span>All Brewing Rituals</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <div
              key={recipe.id}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2] border border-[#DDD2C0] mb-4">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2] border border-[#DDD2C0] px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-[#182B22]">
                    {recipe.category}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-serif italic text-[#74A287] mb-1">
                  <span>{recipe.prepTime}</span>
                  <span>•</span>
                  <span>{recipe.difficulty} Preparation</span>
                </div>

                <Link href={`/recipes/${recipe.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-[#182B22] group-hover:text-[#315442] transition-colors leading-snug">
                    {recipe.title}
                  </h3>
                </Link>

                <p className="mt-2 text-xs sm:text-sm text-[#5C6E64] font-serif line-clamp-2 leading-relaxed">
                  {recipe.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DDD2C0] flex items-center justify-between">
                <span className="text-[11px] font-serif text-[#74A287]">
                  {recipe.ingredients.length} Whole Botanicals
                </span>

                <Link
                  href={`/recipes/${recipe.slug}`}
                  className="text-xs uppercase tracking-widest-estate font-bold text-[#315442] hover:text-[#182B22] underline"
                >
                  View Method →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
