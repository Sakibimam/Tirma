'use client';

import React from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/teaData';

export const BrandReviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4EFE6] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-serif italic text-sm text-[#74A287] block mb-1">
            Words from the Table
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#182B22]">
            Reflections from Connoisseurs & Sommeliers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="border-t border-[#DDD2C0] pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl text-[#B98E3F] block leading-none mb-4">
                  &ldquo;
                </span>

                <p className="font-serif text-base text-[#243F32] leading-relaxed italic mb-6">
                  {item.quote}
                </p>

                <span className="text-[11px] uppercase tracking-wider text-[#895237] font-semibold block mb-4">
                  Tasting: {item.productMentioned}
                </span>
              </div>

              <div className="pt-4 border-t border-[#DDD2C0] flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-[#FAF7F2] border border-[#DDD2C0] shrink-0">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#182B22] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#5C6E64] font-serif">{item.role}</p>
                  <p className="text-[10px] text-[#7A8E82] uppercase tracking-wider">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
