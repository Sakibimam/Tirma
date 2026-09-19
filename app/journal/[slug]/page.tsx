'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { journalPostsData } from '@/lib/teaData';
import {
  Calendar,
  BookOpen,
  Quote,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  Share2,
  CheckCircle,
} from 'lucide-react';

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
      text: 'Fascinating breakdown of the L-Theanine and EGCG synergy. The shade-grown data corresponds directly with our clinical findings on alpha wave brain synchrony.',
    },
    {
      id: 'c2',
      name: 'Claire Beauchamp',
      date: 'Sep 16, 2026',
      text: 'I switched my morning routine from cold brew coffee to the TIRMA Ceremonial Matcha three weeks ago. The sustained focus without cardiovascular palpitations is remarkable.',
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
    <div className="bg-parchment-50 min-h-screen py-10 lg:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tea-800 hover:text-gold-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to The Journal
          </Link>

          <div className="flex items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-tea-900 border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 bg-gold-50 border border-gold-200/60 px-3.5 py-1 rounded-full inline-block mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-tea-950 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-gray-600 leading-relaxed font-serif italic">
            {post.excerpt}
          </p>

          {/* Author info & date bar */}
          <div className="mt-8 pt-6 border-t border-gray-200/70 flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 rounded-full overflow-hidden bg-tea-100 border border-gold-400/40">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <span className="font-semibold text-gray-800">{post.author.name}</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-luxury border border-gray-100 mb-14">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>

        {/* Article Body Content */}
        <div className="rounded-3xl bg-white p-8 sm:p-14 shadow-sm border border-gray-100 mb-16 space-y-8">
          {/* Introduction */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-tea-900">
            {post.content.introduction}
          </p>

          {/* Sections */}
          {post.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl font-bold text-tea-950">
                {sec.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {sec.body}
              </p>

              {sec.quote && (
                <div className="my-6 rounded-2xl bg-parchment-100/70 border-l-4 border-gold-500 p-6 italic font-serif text-base text-tea-950 relative">
                  <Quote className="h-6 w-6 text-gold-400 absolute top-4 right-4 stroke-[1.5]" />
                  {sec.quote}
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-serif text-xl font-bold text-tea-950 mb-3">
              Closing Perspective
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>
        </div>

        {/* Interactive Comments & Dialogue */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-gray-100 mb-16">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="h-5 w-5 text-tea-700" />
            <h3 className="font-serif text-2xl font-bold text-tea-950">
              Connoisseur Discussion ({comments.length})
            </h3>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="mb-10 rounded-2xl bg-parchment-50 p-6 border border-gray-200">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-700 mb-3">
              Leave a Reflection or Query
            </h4>

            {commentSubmitted && (
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-green-50 p-3 text-xs font-semibold text-green-800 border border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Your comment has been published to the journal discussion!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email (Optional)"
                value={commentEmail}
                onChange={(e) => setCommentEmail(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
              />
            </div>

            <textarea
              required
              rows={3}
              placeholder="Share your perspective on this research..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white p-3.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none mb-4"
            />

            <button
              type="submit"
              className="rounded-xl bg-tea-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-tea-800 transition-colors shadow-sm"
            >
              Post Reflection
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-900">{item.name}</span>
                  <span className="text-gray-400">{item.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
