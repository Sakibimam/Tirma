'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { recipesData } from '@/lib/teaData';
import { Clock, ChefHat, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function RecipesPage() {
  return (
    <div className="bg-parchment-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Agro-Tech Rituals
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-tea-950 mt-2">
            The Botanical Brewing Library
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Step-by-step methods engineered to protect sensitive L-theanine amino acids, optimize bioflavonoid extraction, and elevate your daily ceremony.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipesData.map((recipe) => (
            <div
              key={recipe.id}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-tea-50">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-tea-900 backdrop-blur-sm shadow-sm">
                  {recipe.category}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1.5 font-medium text-gray-600">
                    <Clock className="h-3.5 w-3.5 text-gold-600" />
                    {recipe.prepTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-medium text-gray-600">
                    <ChefHat className="h-3.5 w-3.5 text-tea-600" />
                    {recipe.difficulty}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-tea-800 transition-colors mb-3">
                  {recipe.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                  {recipe.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-tea-800">
                    {recipe.ingredients.length} Ingredients • {recipe.steps.length} Steps
                  </span>

                  <Link
                    href={`/recipes/${recipe.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-tea-900 px-4 py-2 text-xs font-bold text-white hover:bg-gold-600 transition-colors shadow-sm"
                  >
                    <span>View Method</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
