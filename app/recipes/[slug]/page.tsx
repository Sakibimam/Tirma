'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { recipesData, productsData } from '@/lib/teaData';
import { useCart } from '@/context/CartContext';
import {
  Clock,
  ChefHat,
  Users,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function RecipeDetailPage({ params }: RecipePageProps) {
  const resolvedParams = use(params);
  const { addToCart, setIsCartOpen } = useCart();

  const recipe = recipesData.find((r) => r.slug === resolvedParams.slug || r.id === resolvedParams.slug);

  if (!recipe) {
    notFound();
  }

  const pairedTea = recipe.pairedTeaId
    ? productsData.find((p) => p.id === recipe.pairedTeaId)
    : null;

  const [checkedIngredients, setCheckedIngredients] = useState<{ [idx: number]: boolean }>({});

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="bg-parchment-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-tea-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/recipes" className="hover:text-tea-900 transition-colors">
            Brewing Rituals
          </Link>
          <span>/</span>
          <span className="text-tea-950 font-semibold truncate">{recipe.title}</span>
        </nav>

        {/* Recipe Header Card */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-gray-100 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-3 py-1 rounded-full mb-4">
            <Sparkles className="h-3 w-3" /> {recipe.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-tea-950 leading-tight">
            {recipe.title}
          </h1>

          <p className="mt-3 text-base text-gray-500 font-serif italic">
            {recipe.subtitle}
          </p>

          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
            {recipe.description}
          </p>

          {/* Quick Meta Pills */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl bg-parchment-50 p-4 border border-gray-100">
              <Clock className="h-5 w-5 text-gold-600 mx-auto mb-1.5" />
              <span className="text-[11px] text-gray-400 block">Preparation Time</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">{recipe.prepTime}</span>
            </div>

            <div className="rounded-2xl bg-parchment-50 p-4 border border-gray-100">
              <ChefHat className="h-5 w-5 text-tea-700 mx-auto mb-1.5" />
              <span className="text-[11px] text-gray-400 block">Technique Level</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">{recipe.difficulty}</span>
            </div>

            <div className="rounded-2xl bg-parchment-50 p-4 border border-gray-100">
              <Users className="h-5 w-5 text-gold-600 mx-auto mb-1.5" />
              <span className="text-[11px] text-gray-400 block">Yield</span>
              <span className="text-xs sm:text-sm font-bold text-gray-900">{recipe.servings} Servings</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-luxury border border-gray-100 mb-12">
          <Image src={recipe.image} alt={recipe.title} fill priority className="object-cover" />
        </div>

        {/* Ingredients Checklist */}
        <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-tea-950">
              Botanical Ingredients
            </h2>
            <span className="text-xs text-gray-400">Click to check off items</span>
          </div>

          <div className="space-y-3">
            {recipe.ingredients.map((ing, idx) => {
              const isChecked = checkedIngredients[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-tea-50/50 border-tea-200 text-tea-900 line-through opacity-70'
                      : 'bg-white border-gray-200 text-gray-800 hover:border-tea-300'
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
                      isChecked
                        ? 'bg-tea-700 border-tea-700 text-white'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {isChecked && <CheckCircle className="h-3.5 w-3.5" />}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{ing}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step by step method */}
        <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-gray-100 mb-10">
          <h2 className="font-serif text-2xl font-bold text-tea-950 mb-6">
            Step-by-Step Brewing Protocol
          </h2>

          <div className="space-y-6">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tea-900 text-gold-300 font-bold text-xs shadow-sm">
                  0{idx + 1}
                </div>
                <div className="pt-1.5 flex-1">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Barista Tips */}
        {recipe.proTips.length > 0 && (
          <div className="rounded-3xl bg-gradient-to-br from-gold-50 to-parchment-100 p-8 sm:p-10 border border-gold-200 shadow-sm mb-12">
            <h3 className="font-serif text-xl font-bold text-gold-900 flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-gold-600" /> Sommelier Masterclass Tips
            </h3>
            <ul className="space-y-3">
              {recipe.proTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <span className="text-gold-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Paired Tea Harvest Card */}
        {pairedTea && (
          <div className="rounded-3xl bg-tea-950 text-white p-8 sm:p-10 shadow-2xl border border-tea-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-2xl overflow-hidden bg-white/10 shrink-0 border border-gold-400/30">
                <Image src={pairedTea.mainImage} alt={pairedTea.title} fill className="object-cover" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
                  Recommended Tea Harvest
                </span>
                <h4 className="font-serif text-lg font-bold text-white mt-0.5">
                  {pairedTea.title}
                </h4>
                <p className="text-xs text-tea-200">
                  ${pairedTea.price.toFixed(2)} • {pairedTea.origin}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/product/${pairedTea.slug}`}
                className="flex-1 sm:flex-none text-center rounded-xl bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
              >
                View Tea
              </Link>
              <button
                onClick={() => {
                  addToCart(pairedTea);
                  setIsCartOpen(true);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-gold-500 px-5 py-3 text-xs font-bold text-tea-950 hover:bg-gold-400 transition-colors shadow-md"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Bag</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
