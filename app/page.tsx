import React from 'react';
import {
  HeroBanner,
  PopularProducts,
  Benefits,
  MainProduct,
  RecipesSection,
  JournalSection,
  BrandReviews,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <PopularProducts />
      <Benefits />
      <MainProduct />
      <RecipesSection />
      <JournalSection />
      <BrandReviews />
    </div>
  );
}
