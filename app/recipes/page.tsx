'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { recipesData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

export default function RecipesPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-serif italic text-sm text-[#74A287] block mb-2">
            The Tea Ceremonies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#182B22]">
            The Botanical Brewing Library
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#475E52] font-serif leading-relaxed">
            Quiet, meditative brewing guides designed to protect fragile amino acids, draw sweet aromatic terpenes, and transform hydration into a grounding ceremony.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <div
              key={recipe.id}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4EFE6] border border-[#DDD2C0] mb-4">
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
                  {recipe.ingredients.length} Botanicals • {recipe.steps.length} Steps
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
    </div>
  );
}
