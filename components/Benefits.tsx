'use client';

import React from 'react';
import { estatePillars } from '@/lib/teaData';

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF7F2] border-b border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-serif italic text-sm text-[#74A287] block mb-2">
            The Botanical Ethos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22] leading-tight">
            How true tea should be made. <br />
            <span className="italic text-[#895237]">Without hurry, dust, or chemicals.</span>
          </h2>
        </div>

        {/* Narrative Chapter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {estatePillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border-t border-[#DDD2C0] pt-6 flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif text-3xl font-light text-[#B98E3F] block mb-4">
                  {pillar.number}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#182B22] mb-1 group-hover:text-[#315442] transition-colors">
                  {pillar.name}
                </h3>

                <span className="text-[11px] uppercase tracking-wider text-[#895237] font-semibold block mb-4">
                  {pillar.subtitle}
                </span>

                <p className="font-serif text-sm text-[#475E52] leading-relaxed">
                  {pillar.story}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EAE2D5] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#74A287]">
                <span>Tirma Botanical Principle</span>
                <span>•</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
