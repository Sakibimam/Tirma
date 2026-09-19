'use client';

import React from 'react';
import { ShieldCheck, Leaf, Sparkles, HeartHandshake } from 'lucide-react';
import { benefitsList } from '@/lib/teaData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
};

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-parchment-50 border-b border-tea-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
            The Tirma Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-2">
            Why Discerning Palates Choose Tirma Agro Tech
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            We reject the shortcuts of industrial mass agriculture. By harmonizing nature&apos;s natural bio-intelligence with ecological precision telemetry, we deliver uncompromised vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsList.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Leaf;
            return (
              <div
                key={benefit.id}
                className="group relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:border-tea-300 hover:shadow-luxury transition-all duration-300 flex flex-col"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tea-50 text-tea-700 group-hover:bg-tea-800 group-hover:text-gold-300 transition-colors mb-6 shadow-inner">
                  <IconComponent className="h-7 w-7 stroke-[1.5]" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 mb-1">
                  {benefit.subtitle}
                </span>

                <h3 className="font-serif text-lg font-bold text-tea-950 mb-3 group-hover:text-tea-800 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-auto">
                  {benefit.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-tea-800">
                  <span>Pillar 0{index + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
