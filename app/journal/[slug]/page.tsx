import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { journalPostsData, productsData } from '@/lib/teaData';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journalPostsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPostsData.find((p) => p.slug === slug);
  if (!post) return { title: 'Not found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = journalPostsData.find((p) => p.slug === slug);
  if (!post) notFound();

  // Tie each piece back to the tea it is about, by tag.
  const relatedTea = productsData.find((p) =>
    post.tags.some((t) => p.title.toLowerCase().includes(t.toLowerCase()))
  );

  const others = journalPostsData.filter((p) => p.slug !== post.slug);

  return (
    <article className="bg-cream">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-shell px-6 pb-16 pt-20 sm:px-10 lg:px-16">
          <Link href="/journal" className="link eyebrow text-bark-50">
            ← Journal
          </Link>

          <p className="eyebrow mt-12 text-bark-50">
            {post.category} · {post.readTime} ·{' '}
            {new Date(post.publishDate).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          <h1 className="mt-6 max-w-4xl font-display text-d-md">{post.title}</h1>
          <p className="prose-measure mt-8 font-display text-[1.375rem] italic leading-[1.45] text-bark-70">
            {post.excerpt}
          </p>
        </div>
      </header>

      <figure className="relative aspect-[21/9] w-full overflow-hidden">
        <Image src={post.image} alt="" fill priority sizes="100vw" className="object-cover" />
      </figure>

      <div className="mx-auto max-w-shell px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Running head, in the margin where a printed page would put it. */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-bark-50">{post.chapter}</p>
              <ul className="mt-5 space-y-2">
                {post.content.sections.map((s, i) => (
                  <li key={s.heading} className="flex gap-3 text-[0.875rem] text-bark-50">
                    <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                    <span>{s.heading}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-4">
            <p className="font-display text-[1.625rem] leading-[1.4]">
              {post.content.introduction}
            </p>

            {post.content.sections.map((section, i) => (
              <section key={section.heading} className="mt-16">
                <h2 className="flex items-baseline gap-5 font-display text-[1.875rem] leading-tight">
                  <span className="eyebrow text-bark-30">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </h2>
                <p className="mt-6 max-w-measure text-[1.0625rem] leading-[1.75] text-bark-70">
                  {section.body}
                </p>
                {section.quote && (
                  <blockquote className="my-12 border-l-2 border-[color:var(--line)] pl-8 font-display text-[1.75rem] leading-[1.35]">
                    {section.quote}
                  </blockquote>
                )}
              </section>
            ))}

            <p className="mt-16 max-w-measure border-t border-[color:var(--line)] pt-10 text-[1.0625rem] leading-[1.75]">
              {post.content.conclusion}
            </p>

            {relatedTea && (
              <Link
                href={`/tea/${relatedTea.slug}`}
                className="mt-16 flex flex-wrap items-center gap-6 p-8 transition-opacity duration-500 hover:opacity-90"
                style={{ backgroundColor: relatedTea.liquor.base, color: relatedTea.liquor.ink }}
              >
                <span className="eyebrow" style={{ color: relatedTea.liquor.muted }}>
                  The tea this is about
                </span>
                <span className="font-display text-[1.75rem]">{relatedTea.title}</span>
                <span className="eyebrow ml-auto">
                  ₹{relatedTea.price.toLocaleString('en-IN')} →
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <section className="border-t border-[color:var(--line)]">
          <div className="mx-auto max-w-shell px-6 py-16 sm:px-10 lg:px-16">
            <h2 className="eyebrow text-bark-50">Also in the journal</h2>
            <ul className="mt-6">
              {others.map((o) => (
                <li key={o.id} className="border-t border-[color:var(--line)] last:border-b">
                  <Link
                    href={`/journal/${o.slug}`}
                    className="flex flex-wrap items-baseline gap-x-8 gap-y-2 py-6"
                  >
                    <span className="link font-display text-[1.5rem]">{o.title}</span>
                    <span className="eyebrow ml-auto text-bark-50">{o.readTime}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
