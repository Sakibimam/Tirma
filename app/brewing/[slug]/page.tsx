import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { recipesData, getProductById } from '@/lib/teaData';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return recipesData.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = recipesData.find((x) => x.slug === slug);
  if (!r) return { title: 'Not found' };
  return { title: r.title, description: r.description };
}

export default async function BrewingMethodPage({ params }: Props) {
  const { slug } = await params;
  const recipe = recipesData.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const tea = recipe.pairedTeaId ? getProductById(recipe.pairedTeaId) : undefined;
  const accent = tea?.liquor.base ?? '#33291F';

  return (
    <article className="bg-cream">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-shell px-6 pb-16 pt-20 sm:px-10 lg:px-16">
          <Link href="/brewing" className="link eyebrow text-bark-50">
            ← Brewing
          </Link>

          <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow" style={{ color: accent }}>
                {recipe.category} · {recipe.difficulty} · {recipe.prepTime}
              </span>
              <h1 className="mt-6 font-display text-d-sm">{recipe.title}</h1>
              <p className="mt-6 font-display text-[1.5rem] italic leading-[1.4] text-bark-70">
                {recipe.subtitle}
              </p>
              <p className="prose-measure mt-8 text-bark-70">{recipe.description}</p>
            </div>

            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-plate">
                <Image src={recipe.image} alt="" fill priority sizes="(max-width: 1024px) 92vw, 40vw" className="object-cover" />
              </div>
            </figure>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-shell px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-x-16 gap-y-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <h2 className="eyebrow text-bark-50">
              You need · makes {recipe.servings}
            </h2>
            <ul className="mt-5">
              {recipe.ingredients.map((ing) => (
                <li
                  key={ing}
                  className="border-t border-[color:var(--line)] py-3.5 text-[0.95rem] last:border-b"
                >
                  {ing}
                </li>
              ))}
            </ul>

            {tea && (
              <Link
                href={`/tea/${tea.slug}`}
                className="mt-10 block border p-6 transition-colors duration-500"
                style={{ borderColor: accent }}
              >
                <span className="eyebrow" style={{ color: accent }}>
                  Brewed with
                </span>
                <span className="mt-2 block font-display text-[1.5rem]">{tea.title}</span>
                <span className="link eyebrow mt-4 inline-block text-bark-50">
                  ₹{tea.price.toLocaleString('en-IN')} / {tea.baseWeight}
                </span>
              </Link>
            )}
          </aside>

          <div className="lg:col-span-8">
            <h2 className="eyebrow text-bark-50">Method</h2>
            <ol className="mt-5">
              {recipe.steps.map((step, i) => (
                <li
                  key={step}
                  className="grid grid-cols-[3rem_1fr] gap-6 border-t border-[color:var(--line)] py-7 last:border-b"
                >
                  <span className="eyebrow pt-1" style={{ color: accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[1.0625rem] leading-[1.65]">{step}</p>
                </li>
              ))}
            </ol>

            <h2 className="eyebrow mt-16 text-bark-50">Where people go wrong</h2>
            <ul className="mt-5">
              {recipe.proTips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-6 border-t border-[color:var(--line)] py-5 last:border-b"
                >
                  <span className="eyebrow shrink-0 text-bark-30">—</span>
                  <p className="text-[0.975rem] leading-[1.7] text-bark-70">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
