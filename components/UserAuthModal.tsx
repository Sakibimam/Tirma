'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { X, User, Lock, Mail, Award, Package, LogOut, CheckCircle, ArrowRight } from 'lucide-react';

export const UserAuthModal: React.FC = () => {
  const { user, isLoggedIn, isUserModalOpen, setIsUserModalOpen, login, logout, orders } = useUser();
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  if (!isUserModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    login(email, name || undefined);
    setSuccessNotice(activeTab === 'signin' ? 'Welcome back!' : 'Account registered successfully!');
    setTimeout(() => {
      setSuccessNotice(null);
    }, 2000);
  };

  const handleDemoLogin = () => {
    login('connoisseur@tirma-tea.org', 'Eleanor Vance');
    setSuccessNotice('Signed in with Connoisseur Demo Account');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tea-950/70 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl border border-tea-100 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setIsUserModalOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {isLoggedIn && user ? (
          /* Logged In View */
          <div className="p-8">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tea-100 text-tea-800 font-serif text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                <p className="text-xs text-gray-500">{user.email}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 px-2.5 py-0.5 text-[11px] font-semibold text-gold-800">
                    <Award className="h-3 w-3 text-gold-600" />
                    {user.membershipTier}
                  </span>
                </div>
              </div>
            </div>

            {/* Loyalty Points Banner */}
            <div className="my-6 rounded-xl bg-gradient-to-br from-tea-900 to-tea-800 p-5 text-white shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-tea-200">
                    Organic Rewards Points
                  </span>
                  <div className="mt-1 text-2xl font-bold text-gold-300">
                    {user.loyaltyPoints} pts
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-tea-100 backdrop-blur-sm">
                  $15 Reward Available
                </div>
              </div>
              <p className="mt-2 text-xs text-tea-200/80">
                Earn 1 point per $1 spent on all single-origin harvests.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Link
                href="/orders"
                onClick={() => setIsUserModalOpen(false)}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-3.5 hover:bg-parchment-50 hover:border-tea-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-tea-700" />
                  <span className="text-sm font-semibold text-gray-800">
                    My Orders & Shipments
                  </span>
                </div>
                <span className="rounded-full bg-tea-50 px-2 py-0.5 text-xs font-bold text-tea-700">
                  {orders.length}
                </span>
              </Link>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-4">
              <button
                onClick={logout}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          /* Sign In / Register Tabs */
          <div className="p-8">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Tirma Agro Tech
              </span>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">
                Connoisseur Portal
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Sign in to track orders, earn rewards, and access limited harvest allocations.
              </p>
            </div>

            {successNotice && (
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-xs font-medium text-green-800 border border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                {successNotice}
              </div>
            )}

            {/* Tabs */}
            <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('signin')}
                className={`flex-1 rounded-md py-2 text-xs font-semibold transition-all ${
                  activeTab === 'signin'
                    ? 'bg-white text-tea-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                className={`flex-1 rounded-md py-2 text-xs font-semibold transition-all ${
                  activeTab === 'register'
                    ? 'bg-white text-tea-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Julian Montgomery"
                      className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:border-tea-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tea.lover@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:border-tea-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:border-tea-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-tea-800 py-3 text-sm font-semibold text-white shadow-md hover:bg-tea-900 transition-colors"
              >
                {activeTab === 'signin' ? 'Sign In' : 'Join The Tea Society'}
              </button>
            </form>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <span className="relative bg-white px-3 text-xs text-gray-400">or</span>
            </div>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold-400/50 bg-gold-50/50 py-2.5 text-xs font-semibold text-gold-900 hover:bg-gold-100 transition-colors"
            >
              <span>⚡ One-Click Demo Sign In</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
