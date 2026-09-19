'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { recipesData, productsData } from '@/lib/teaData';
import { useCart } from '@/context/CartContext';
import { CheckCircle } from 'lucide-react';

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
    <div className="bg-[#FAF7F2] min-h-screen py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-serif text-[#74A287] mb-8">
          <Link href="/" className="hover:text-[#182B22] transition-colors">
            Garden
          </Link>
          <span>/</span>
          <Link href="/recipes" className="hover:text-[#182B22] transition-colors">
            Brewing Rituals
          </Link>
          <span>/</span>
          <span className="text-[#182B22] font-semibold italic truncate">{recipe.title}</span>
        </nav>

        {/* Recipe Header */}
        <div className="border border-[#DDD2C0] bg-[#F4EFE6] p-8 sm:p-12 mb-10">
          <span className="font-serif italic text-xs text-[#895237] block mb-2">
            {recipe.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22] leading-tight">
            {recipe.title}
          </h1>

          <p className="mt-2 text-base text-[#5C6E64] font-serif italic">
            {recipe.subtitle}
          </p>

          <p className="mt-6 text-sm sm:text-base text-[#475E52] font-serif leading-relaxed">
            {recipe.description}
          </p>

          {/* Meta Line */}
          <div className="mt-8 pt-6 border-t border-[#DDD2C0] grid grid-cols-3 gap-4 text-center font-serif text-xs text-[#182B22]">
            <div>
              <span className="text-[#7A8E82] block text-[10px] uppercase font-sans">Steep Time</span>
              <span className="font-bold text-sm">{recipe.prepTime}</span>
            </div>
            <div>
              <span className="text-[#7A8E82] block text-[10px] uppercase font-sans">Ceremony Level</span>
              <span className="font-bold text-sm">{recipe.difficulty}</span>
            </div>
            <div>
              <span className="text-[#7A8E82] block text-[10px] uppercase font-sans">Yield</span>
              <span className="font-bold text-sm">{recipe.servings} Servings</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full border border-[#DDD2C0] mb-12">
          <Image src={recipe.image} alt={recipe.title} fill priority className="object-cover" />
        </div>

        {/* Ingredients Checklist */}
        <div className="border border-[#DDD2C0] bg-white p-8 sm:p-10 mb-10">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EAE2D5]">
            <h2 className="font-serif text-2xl font-bold text-[#182B22]">
              Botanical Ingredients
            </h2>
            <span className="text-xs font-serif italic text-[#74A287]">Tap to check off items</span>
          </div>

          <div className="space-y-3">
            {recipe.ingredients.map((ing, idx) => {
              const isChecked = checkedIngredients[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-[#F4EFE6] border-[#DDD2C0] text-[#7A8E82] line-through'
                      : 'bg-[#FAF7F2] border-[#DDD2C0] text-[#182B22] hover:border-[#182B22]'
                  }`}
                >
                  <div
                    className={`flex h-4 w-4 items-center justify-center border ${
                      isChecked
                        ? 'bg-[#315442] border-[#315442] text-white'
                        : 'border-[#74A287] bg-white'
                    }`}
                  >
                    {isChecked && <CheckCircle className="h-3 w-3" />}
                  </div>
                  <span className="text-xs sm:text-sm font-serif">{ing}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step by Step Method */}
        <div className="border border-[#DDD2C0] bg-white p-8 sm:p-10 mb-10">
          <h2 className="font-serif text-2xl font-bold text-[#182B22] mb-6 pb-4 border-b border-[#EAE2D5]">
            The Step-by-Step Ceremony
          </h2>

          <div className="space-y-6 font-serif">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="font-serif text-2xl font-light text-[#B98E3F] shrink-0 w-8">
                  0{idx + 1}.
                </span>
                <p className="text-sm sm:text-base text-[#475E52] leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        {recipe.proTips.length > 0 && (
          <div className="border border-[#DEC284] bg-[#F4EFE6] p-8 sm:p-10 mb-12">
            <h3 className="font-serif text-xl font-bold text-[#895237] mb-4">
              Sommelier Notes & Gentle Guidance
            </h3>
            <ul className="space-y-3 font-serif text-sm text-[#475E52] leading-relaxed">
              {recipe.proTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#895237] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Paired Tea Harvest Card in INR */}
        {pairedTea && (
          <div className="border border-[#243F32] bg-[#182B22] text-[#FAF7F2] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 bg-white/10 shrink-0 border border-[#DEC284]">
                <Image src={pairedTea.mainImage} alt={pairedTea.title} fill className="object-cover" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#DEC284]">
                  Recommended Garden Pluck
                </span>
                <h4 className="font-serif text-xl font-bold text-[#FAF7F2] mt-0.5">
                  {pairedTea.title}
                </h4>
                <p className="font-serif text-xs text-[#C7DBD0]">
                  ₹{pairedTea.price.toLocaleString('en-IN')} • {pairedTea.origin}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/product/${pairedTea.slug}`}
                className="flex-1 sm:flex-none text-center border border-[#DEC284] px-4 py-2.5 text-xs font-serif text-[#DEC284] hover:bg-[#DEC284] hover:text-[#182B22] transition-colors"
              >
                Inspect Pluck
              </Link>
              <button
                onClick={() => {
                  addToCart(pairedTea);
                  setIsCartOpen(true);
                }}
                className="flex-1 sm:flex-none bg-[#DEC284] text-[#182B22] px-5 py-2.5 text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors"
              >
                + Add to Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
