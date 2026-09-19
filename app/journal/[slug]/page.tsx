'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { journalPostsData } from '@/lib/teaData';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface JournalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface CommentItem {
  id: string;
  name: string;
  date: string;
  text: string;
}

export default function JournalArticlePage({ params }: JournalPageProps) {
  const resolvedParams = use(params);
  const post = journalPostsData.find((p) => p.slug === resolvedParams.slug || p.id === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      name: 'Dr. Arthur Sterling',
      date: 'Sep 15, 2026',
      text: 'Fascinating reflection on L-Theanine and shade-grown tencha. The high-altitude data corresponds directly with our clinical findings on alpha wave brain synchrony.',
    },
    {
      id: 'c2',
      name: 'Ananya Raghavan',
      date: 'Sep 16, 2026',
      text: 'I switched my morning routine from dark coffee to the TIRMA Ceremonial Matcha three weeks ago. The sustained peaceful focus without midday jitters is remarkable.',
    },
  ]);

  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentText) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: commentName,
      date: 'Just now',
      text: commentText,
    };

    setComments([newComment, ...comments]);
    setCommentSubmitted(true);
    setCommentName('');
    setCommentEmail('');
    setCommentText('');
    setTimeout(() => setCommentSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 lg:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE2D5]">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-serif italic text-[#74A287] hover:text-[#182B22] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Monographs
          </Link>

          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F4EFE6] px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-[#182B22] border border-[#DDD2C0]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title Header */}
        <div className="mb-12">
          <span className="font-serif italic text-sm text-[#895237] block mb-2">
            {post.chapter || 'Monograph'} • {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#182B22] leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5C6E64] font-serif italic leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 pt-4 border-t border-[#DDD2C0] flex items-center gap-4 text-xs font-serif text-[#74A287]">
            <span className="font-bold text-[#182B22]">By {post.author.name}</span>
            <span>•</span>
            <span>{post.publishDate}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full border border-[#DDD2C0] mb-14">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>

        {/* Article Body Content */}
        <div className="border border-[#DDD2C0] bg-white p-8 sm:p-14 mb-16 space-y-8 font-serif">
          {/* Introduction */}
          <p className="text-base sm:text-lg text-[#243F32] leading-relaxed first-letter:text-5xl first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:text-[#182B22]">
            {post.content.introduction}
          </p>

          {/* Sections */}
          {post.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl font-bold text-[#182B22]">
                {sec.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#475E52] leading-relaxed">
                {sec.body}
              </p>

              {sec.quote && (
                <div className="my-8 border-l-2 border-[#895237] pl-6 py-2 italic font-serif text-lg text-[#182B22]">
                  {sec.quote}
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-[#EAE2D5]">
            <h3 className="font-serif text-xl font-bold text-[#182B22] mb-3">
              Closing Perspective
            </h3>
            <p className="text-sm sm:text-base text-[#475E52] leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>
        </div>

        {/* Reader Reflections Form */}
        <div className="border border-[#DDD2C0] bg-white p-8 sm:p-12 mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#182B22] mb-2">
            Reader Reflections ({comments.length})
          </h3>
          <p className="text-xs font-serif text-[#5C6E64] mb-8">
            Share your perspective on this botanical monograph.
          </p>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="mb-10 bg-[#FAF7F2] p-6 border border-[#DDD2C0]">
            {commentSubmitted && (
              <div className="mb-4 flex items-center gap-2 bg-[#E4EFE8] p-3 text-xs font-serif text-[#182B22] border border-[#74A287]">
                <CheckCircle className="h-4 w-4 text-[#315442]" />
                Your reflection has been recorded.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="border border-[#DDD2C0] bg-white px-3.5 py-2 text-xs font-serif text-[#182B22] focus:border-[#182B22] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email (Optional)"
                value={commentEmail}
                onChange={(e) => setCommentEmail(e.target.value)}
                className="border border-[#DDD2C0] bg-white px-3.5 py-2 text-xs font-serif text-[#182B22] focus:border-[#182B22] focus:outline-none"
              />
            </div>

            <textarea
              required
              rows={3}
              placeholder="Your reflection on the text..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full border border-[#DDD2C0] bg-white p-3 text-xs font-serif text-[#182B22] focus:border-[#182B22] focus:outline-none mb-4"
            />

            <button
              type="submit"
              className="bg-[#182B22] px-6 py-2.5 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
            >
              Post Reflection
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((item) => (
              <div
                key={item.id}
                className="border-b border-[#EAE2D5] pb-4 font-serif space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#182B22]">{item.name}</span>
                  <span className="text-[#7A8E82] italic">{item.date}</span>
                </div>
                <p className="text-sm text-[#475E52] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
