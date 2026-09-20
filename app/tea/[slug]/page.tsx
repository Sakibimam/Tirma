import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData, getProductBySlug } from '@/lib/teaData';
import { TeaDetail } from '@/components/TeaDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tea = getProductBySlug(slug);
  if (!tea) return { title: 'Not found' };

  return {
    title: tea.title,
    description: `${tea.pitch} ${tea.origin}, ${tea.harvest}. ₹${tea.price} for ${tea.baseWeight}.`,
    openGraph: {
      title: `${tea.title} — TIRMA`,
      description: tea.pitch,
      ...(tea.photo ? { images: [{ url: tea.photo }] } : {}),
    },
  };
}

export default async function TeaPage({ params }: Props) {
  const { slug } = await params;
  const tea = getProductBySlug(slug);
  if (!tea) notFound();

  const related = productsData.filter((p) => p.id !== tea.id).slice(0, 3);

  // Product schema, so the price and rating can surface in search results.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tea.title,
    description: tea.description,
    ...(tea.photo ? { image: tea.photo } : {}),
    brand: { '@type': 'Brand', name: 'TIRMA' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tea.rating,
      reviewCount: tea.reviewCount,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: tea.price,
      availability: tea.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeaDetail tea={tea} related={related} />
    </>
  );
}
