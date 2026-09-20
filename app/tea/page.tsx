import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { TeaGrid } from '@/components/TeaGrid';

export const metadata: Metadata = {
  title: 'Shop tea',
  description:
    'Seven whole-leaf teas from Assam and Kashmir — second flush Assam, first flush green, Kashmiri kahwa, blue pea flower, masala chai and everyday CTC.',
};

export default function TeaPage() {
  return (
    <div className="bg-cream">
      <header className="relative isolate overflow-hidden">
        <Image
          src="/photos/garden-hills.jpg"
          alt="Rolling hills planted with tea"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="scrim absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-shell px-6 pb-14 pt-20 sm:px-10 lg:px-16">
          <p className="eyebrow text-cream/70">Shop</p>
          <h1 className="mt-3 max-w-2xl font-display text-d-md text-cream">
            Seven teas, nothing filler.
          </h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.7] text-cream/85">
            We would rather sell a short list well than a long one badly. Every
            tea below names its region and the month it was picked, and says
            plainly whether it takes milk.
          </p>
        </div>
      </header>

      <div className="pt-10">
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <TeaGrid />
        </Suspense>
      </div>
    </div>
  );
}
