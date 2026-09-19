'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';

export default function PasswordRecoveryPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-parchment-50 min-h-screen py-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-luxury border border-gray-100">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-800 hover:text-gold-700 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
          Account Access
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-tea-950 mt-1 mb-2">
          Reset Password
        </h1>
        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          Enter your registered email address to receive a secure login key and password recovery link.
        </p>

        {submitted ? (
          <div className="rounded-2xl bg-green-50 p-6 border border-green-200 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-serif text-base font-bold text-green-900">
              Recovery Link Dispatched
            </h3>
            <p className="text-xs text-green-700 mt-1">
              We have dispatched recovery instructions to <strong>{email}</strong>. Please check your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Account Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="connoisseur@tirma-tea.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-gray-800 focus:border-tea-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-tea-900 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-tea-800 transition-colors shadow-md"
            >
              Send Recovery Instructions
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
