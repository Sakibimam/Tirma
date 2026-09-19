'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { recipesData } from '@/lib/teaData';
import { Clock, ChefHat, ArrowRight, Sparkles } from 'lucide-react';

export const RecipesSection: React.FC = () => {
  return (
    <section className="py-24 bg-parchment-50 border-b border-tea-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Agro-Tech Rituals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-2">
              Artisanal Brewing Protocols
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-xl">
              Elevate your daily hydration. Master sommelier-tested recipes designed to maximize bioactive polyphenols and silky mouthfeel.
            </p>
          </div>

          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-tea-800 hover:text-gold-700 transition-colors group"
          >
            <span>Explore All Rituals</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <div
              key={recipe.id}
              className="group flex flex-col rounded-2xl bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-tea-50">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-tea-900 backdrop-blur-sm shadow-sm">
                  {recipe.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-gold-600" />
                    {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <ChefHat className="h-3.5 w-3.5 text-tea-600" />
                    {recipe.difficulty}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-tea-800 transition-colors mb-2">
                  {recipe.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                  {recipe.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-tea-700">
                    {recipe.ingredients.length} Botanical Ingredients
                  </span>

                  <Link
                    href={`/recipes/${recipe.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-tea-900 group-hover:text-gold-700 transition-colors"
                  >
                    <span>View Method</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
