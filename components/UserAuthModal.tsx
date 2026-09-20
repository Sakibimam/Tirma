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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C1712]/70 transition-all">
      <div className="relative w-full max-w-md bg-[#FBF7F0] border border-[#E3D6C0] p-8 sm:p-10 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setIsUserModalOpen(false)}
          className="absolute right-4 top-4 p-1 text-[#7A8E82] hover:text-[#33291F] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {isLoggedIn && user ? (
          /* Logged In Patron Profile */
          <div>
            <div className="flex items-center gap-4 border-b border-[#E3D6C0] pb-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#33291F] text-[#FBF7F0] font-display text-xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#33291F]">{user.name}</h3>
                <p className="text-xs text-[#5C6E64] italic">{user.email}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B5643C]">
                    {user.membershipTier}
                  </span>
                </div>
              </div>
            </div>

            {/* Loyalty Points Banner in INR */}
            <div className="my-6 bg-[#33291F] p-5 text-[#FBF7F0] border border-[#243A2A]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#7A6D5D]">
                    Points
                  </span>
                  <div className="mt-1 font-display text-2xl font-bold text-[#DEC284]">
                    {user.loyaltyPoints} pts
                  </div>
                </div>
                <div className="border border-[#DEC284] px-2.5 py-1 text-[11px] text-[#DEC284] font-display">
                  ₹350 Credit Available
                </div>
              </div>
              <p className="mt-2 text-xs text-[#A89B89]">
                One point per ₹10 spent. Points come off your next order.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Link
                href="/orders"
                onClick={() => setIsUserModalOpen(false)}
                className="flex items-center justify-between border border-[#E3D6C0] bg-white p-3 hover:border-[#33291F] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Package className="h-4 w-4 text-[#5C5043]" />
                  <span className="text-sm font-semibold text-[#33291F]">
                    My Shipments & Orders
                  </span>
                </div>
                <span className="text-xs font-bold text-[#5C5043]">
                  {orders.length}
                </span>
              </Link>
            </div>

            <div className="mt-6 border-t border-[#E3D6C0] pt-4">
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
              <span className="italic text-xs text-[#B5643C]">
                Tirma Tea Society
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#33291F] mt-1">
                Patron Portal
              </h3>
              <p className="text-xs text-[#5C6E64] mt-1">
                Sign in to track garden dispatches and reserve seasonal spring allocations.
              </p>
            </div>

            {successNotice && (
              <div className="mb-4 flex items-center gap-2 bg-[#E4EFE8] p-3 text-xs text-[#33291F] border border-[#7A6D5D]">
                <CheckCircle className="h-4 w-4 text-[#5C5043] shrink-0" />
                {successNotice}
              </div>
            )}

            {/* Tabs */}
            <div className="flex border-b border-[#E3D6C0] mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('signin')}
                className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeTab === 'signin'
                    ? 'border-b-2 border-[#33291F] text-[#33291F]'
                    : 'text-[#7A8E82] hover:text-[#33291F]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeTab === 'register'
                    ? 'border-b-2 border-[#33291F] text-[#33291F]'
                    : 'text-[#7A8E82] hover:text-[#33291F]'
                }`}
              >
                Inscribe
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'register' && (
                <div>
                  <label className="block text-xs text-[#33291F] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Arjun Varma"
                    className="w-full border border-[#E3D6C0] bg-white p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs text-[#33291F] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@tirma-tea.org"
                  className="w-full border border-[#E3D6C0] bg-white p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-[#33291F] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-[#E3D6C0] bg-white p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#33291F] py-3 text-xs uppercase tracking-[0.12em] font-bold text-[#FBF7F0] hover:bg-[#5C5043] transition-colors"
              >
                {activeTab === 'signin' ? 'Enter Patron Portal' : 'Join The Society'}
              </button>
            </form>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E3D6C0]" />
              </div>
              <span className="relative bg-[#FBF7F0] px-3 italic text-xs text-[#7A8E82]">or</span>
            </div>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full border border-[#B5643C] py-2.5 text-xs italic text-[#B5643C] hover:bg-[#E3D6C0] transition-colors"
            >
              1-Click Patron Demo Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
