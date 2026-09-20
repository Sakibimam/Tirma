import React from 'react';
import {
  Hero,
  ShopRange,
  Gardens,
  Standards,
  StarterBox,
  Reviews,
  JournalTeaser,
} from '@/components';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Shop sits directly under the hero: someone who wants tea should not
          have to scroll past a manifesto to buy any. */}
      <ShopRange />
      <Gardens />
      <Standards />
      <StarterBox />
      <Reviews />
      <JournalTeaser />
    </>
  );
}
