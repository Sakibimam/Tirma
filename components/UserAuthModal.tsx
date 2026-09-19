'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { X, User, Lock, Mail, Award, Package, LogOut, CheckCircle } from 'lucide-react';

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
    setSuccessNotice(activeTab === 'signin' ? 'Welcome back to the Tea Society.' : 'Patron account established.');
    setTimeout(() => {
      setSuccessNotice(null);
    }, 2000);
  };

  const handleDemoLogin = () => {
    login('arjun.varma@tirma-tea.org', 'Arjun Varma');
    setSuccessNotice('Signed in with Patron Demo Account');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C1712]/70 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-md bg-[#FAF7F2] border border-[#DDD2C0] shadow-2xl p-8 sm:p-10 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setIsUserModalOpen(false)}
          className="absolute right-4 top-4 p-1 text-[#7A8E82] hover:text-[#182B22] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {isLoggedIn && user ? (
          /* Logged In Patron Profile */
          <div>
            <div className="flex items-center gap-4 border-b border-[#EAE2D5] pb-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#182B22] text-[#FAF7F2] font-serif text-xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#182B22]">{user.name}</h3>
                <p className="text-xs text-[#5C6E64] font-serif italic">{user.email}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#895237]">
                    {user.membershipTier}
                  </span>
                </div>
              </div>
            </div>

            {/* Loyalty Points Banner in INR */}
            <div className="my-6 bg-[#182B22] p-5 text-[#FAF7F2] border border-[#243F32]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#74A287]">
                    Harvest Allocation Points
                  </span>
                  <div className="mt-1 font-serif text-2xl font-bold text-[#DEC284]">
                    {user.loyaltyPoints} pts
                  </div>
                </div>
                <div className="border border-[#DEC284] px-2.5 py-1 text-[11px] text-[#DEC284] font-serif">
                  ₹350 Credit Available
                </div>
              </div>
              <p className="mt-2 text-xs text-[#C7DBD0] font-serif">
                Earn 1 point per ₹10 spent on single-estate releases.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Link
                href="/orders"
                onClick={() => setIsUserModalOpen(false)}
                className="flex items-center justify-between border border-[#DDD2C0] bg-white p-3 hover:border-[#182B22] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Package className="h-4 w-4 text-[#315442]" />
                  <span className="font-serif text-sm font-semibold text-[#182B22]">
                    My Shipments & Orders
                  </span>
                </div>
                <span className="font-serif text-xs font-bold text-[#315442]">
                  {orders.length}
                </span>
              </Link>
            </div>

            <div className="mt-6 border-t border-[#EAE2D5] pt-4">
              <button
                onClick={logout}
                className="flex w-full items-center justify-center gap-2 border border-red-200 py-2.5 text-xs uppercase tracking-wider font-bold text-red-700 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          /* Sign In / Register */
          <div>
            <div className="text-center mb-6">
              <span className="font-serif italic text-xs text-[#895237]">
                Tirma Tea Society
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#182B22] mt-1">
                Patron Portal
              </h3>
              <p className="text-xs text-[#5C6E64] font-serif mt-1">
                Sign in to track garden dispatches and reserve seasonal spring allocations.
              </p>
            </div>

            {successNotice && (
              <div className="mb-4 flex items-center gap-2 bg-[#E4EFE8] p-3 text-xs font-serif text-[#182B22] border border-[#74A287]">
                <CheckCircle className="h-4 w-4 text-[#315442] shrink-0" />
                {successNotice}
              </div>
            )}

            {/* Tabs */}
            <div className="flex border-b border-[#DDD2C0] mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('signin')}
                className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeTab === 'signin'
                    ? 'border-b-2 border-[#182B22] text-[#182B22]'
                    : 'text-[#7A8E82] hover:text-[#182B22]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeTab === 'register'
                    ? 'border-b-2 border-[#182B22] text-[#182B22]'
                    : 'text-[#7A8E82] hover:text-[#182B22]'
                }`}
              >
                Inscribe
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'register' && (
                <div>
                  <label className="block text-xs font-serif text-[#182B22] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Arjun Varma"
                    className="w-full border border-[#DDD2C0] bg-white p-2.5 text-xs text-[#182B22] focus:border-[#182B22] focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-serif text-[#182B22] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@tirma-tea.org"
                  className="w-full border border-[#DDD2C0] bg-white p-2.5 text-xs text-[#182B22] focus:border-[#182B22] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-serif text-[#182B22] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-[#DDD2C0] bg-white p-2.5 text-xs text-[#182B22] focus:border-[#182B22] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#182B22] py-3 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
              >
                {activeTab === 'signin' ? 'Enter Patron Portal' : 'Join The Society'}
              </button>
            </form>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#DDD2C0]" />
              </div>
              <span className="relative bg-[#FAF7F2] px-3 font-serif italic text-xs text-[#7A8E82]">or</span>
            </div>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full border border-[#895237] py-2.5 text-xs font-serif italic text-[#895237] hover:bg-[#EAE2D5] transition-colors"
            >
              1-Click Patron Demo Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
