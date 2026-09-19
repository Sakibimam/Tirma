'use client';

import React from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/teaData';
import { Star, Quote, Award, Sparkles } from 'lucide-react';

export const BrandReviews: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-parchment-50 to-white border-b border-tea-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 flex items-center justify-center gap-1.5">
            <Award className="h-3.5 w-3.5" /> Connoisseur Perspectives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-2">
            Praised by Certified Tea Sommeliers & Chefs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            From Michelin-starred dining rooms to mindful morning desks, discover what makes TIRMA Agro Tech teas exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-luxury hover:border-tea-200 transition-all duration-300"
            >
              <div>
                <Quote className="h-8 w-8 text-gold-300 mb-4 stroke-[1.5]" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-4 inline-block rounded-md bg-tea-50 px-2.5 py-1 text-[11px] font-semibold text-tea-800">
                  Tasting: {item.productMentioned}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3.5">
                <div className="relative h-11 w-11 rounded-full overflow-hidden bg-tea-100 border border-gold-300 shrink-0">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                  <p className="text-[11px] text-gray-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
