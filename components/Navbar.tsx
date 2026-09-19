'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import {
  ShoppingBag,
  Search,
  User as UserIcon,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Package,
} from 'lucide-react';
import { SearchModal } from './SearchModal';
import { UserAuthModal } from './UserAuthModal';
import { ShoppingCartDrawer } from './ShoppingCartDrawer';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const { isLoggedIn, setIsUserModalOpen, user } = useUser();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/products' },
    { name: 'Brewing Rituals', href: '/recipes' },
    { name: 'The Journal', href: '/journal' },
    { name: 'Our Philosophy', href: '/about' },
    { name: 'Orders', href: '/orders' },
  ];

  return (
    <>
      {/* Top Eco Announcement Bar */}
      <div className="bg-tea-950 text-tea-100 text-[11px] font-medium tracking-wide py-2 px-4 text-center border-b border-tea-900/60 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-gold-300">
            <Sparkles className="h-3 w-3 text-gold-400" /> 100% Certified Organic Harvest 2026
          </span>
          <span className="hidden md:inline text-tea-600">•</span>
          <span className="hidden sm:inline">
            Free Worldwide Eco-Shipping on orders over $50
          </span>
          <span className="hidden lg:inline text-tea-600">•</span>
          <span className="hidden lg:inline text-gold-400">
            Use code <span className="underline font-semibold">ORGANIC10</span> for 10% off
          </span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-tea-100/80 py-3'
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gold-400/40 shadow-sm group-hover:border-gold-500 transition-colors bg-white">
              <Image
                src="/images/logo.jpeg"
                alt="TIRMA AGRO TECH"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-tea-950 group-hover:text-gold-700 transition-colors">
                TIRMA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-tea-600 font-semibold -mt-1">
                Agro Tech • Organic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors relative py-1 ${
                    isActive
                      ? 'text-tea-900 font-bold'
                      : 'text-gray-600 hover:text-tea-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search teas"
              className="p-2.5 rounded-full text-gray-600 hover:text-tea-900 hover:bg-parchment-100 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* User Profile / Login */}
            <button
              onClick={() => setIsUserModalOpen(true)}
              aria-label="Account"
              className="p-2.5 rounded-full text-gray-600 hover:text-tea-900 hover:bg-parchment-100 transition-colors relative"
            >
              <UserIcon className="h-5 w-5" />
              {isLoggedIn && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-tea-600" />
              )}
            </button>

            {/* Shopping Cart Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
              className="group relative flex items-center gap-2 rounded-full bg-tea-900 px-4 py-2 text-white hover:bg-tea-800 transition-all shadow-sm"
            >
              <ShoppingBag className="h-4 w-4 text-gold-300" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">
                Bag
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-tea-950">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-white z-50 flex flex-col p-6 animate-fade-in border-t border-gray-100 overflow-y-auto">
            <div className="space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 text-lg font-serif font-semibold border-b border-gray-100 ${
                      isActive ? 'text-tea-900 font-bold' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsUserModalOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-xl bg-parchment-100 p-4 text-sm font-semibold text-tea-900"
              >
                <span>{isLoggedIn ? `Account (${user?.name})` : 'Sign In / Register'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-auto pt-8 text-center text-xs text-gray-400">
              <p>TIRMA AGRO TECH • Technology Rooted in Nature</p>
              <p className="mt-1">100% Certified Organic Specialty Teas</p>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals & Drawers */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <UserAuthModal />
      <ShoppingCartDrawer />
    </>
  );
};
