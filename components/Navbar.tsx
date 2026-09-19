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
  ArrowRight,
} from 'lucide-react';
import { SearchModal } from './SearchModal';
import { UserAuthModal } from './UserAuthModal';
import { ShoppingCartDrawer } from './ShoppingCartDrawer';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, subtotal, setIsCartOpen } = useCart();
  const { isLoggedIn, setIsUserModalOpen, user } = useUser();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Garden', href: '/' },
    { name: 'Harvests', href: '/products' },
    { name: 'The Ritual', href: '/recipes' },
    { name: 'Monographs', href: '/journal' },
    { name: 'The Estate', href: '/about' },
    { name: 'Shipments', href: '/orders' },
  ];

  return (
    <>
      {/* Top Quiet Estate Ribbon */}
      <div className="bg-[#182B22] text-[#DCD4C7] text-[11px] font-medium tracking-widest-estate uppercase py-2 px-4 text-center border-b border-[#243F32]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="text-[#B98E3F]">Spring Harvest 2026</span>
          <span className="text-[#3D6A52]">•</span>
          <span>Complimentary Estate Delivery Across India on Orders Above ₹1,499</span>
          <span className="hidden md:inline text-[#3D6A52]">•</span>
          <span className="hidden md:inline text-[#DEC284]">
            Voucher: <span className="font-semibold underline">ORGANIC10</span> (10% Off)
          </span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE2D5] shadow-sm py-3'
            : 'bg-[#FAF7F2] border-b border-[#EAE2D5] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Editorial Title */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#DEC284] shadow-sm bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.jpeg"
                alt="TIRMA AGRO TECH"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#182B22] group-hover:text-[#315442] transition-colors">
                TIRMA
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#74A287] font-medium -mt-1">
                Organic & Herbal Teas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors relative py-1.5 ${
                    isActive
                      ? 'text-[#182B22] font-bold'
                      : 'text-[#5C6E64] hover:text-[#182B22]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#315442]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search teas"
              className="p-2 text-[#475E52] hover:text-[#182B22] hover:bg-[#EAE2D5]/50 rounded-full transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Account */}
            <button
              onClick={() => setIsUserModalOpen(true)}
              aria-label="Account"
              className="p-2 text-[#475E52] hover:text-[#182B22] hover:bg-[#EAE2D5]/50 rounded-full transition-colors relative"
            >
              <UserIcon className="h-4 w-4" />
              {isLoggedIn && (
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#3D6A52]" />
              )}
            </button>

            {/* Shopping Bag with INR Subtotal */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
              className="flex items-center gap-2.5 rounded-full bg-[#182B22] px-4 py-2 text-white hover:bg-[#243F32] transition-all shadow-sm"
            >
              <ShoppingBag className="h-4 w-4 text-[#DEC284]" />
              <span className="hidden sm:inline text-xs font-serif tracking-wider font-semibold">
                ₹{subtotal > 0 ? subtotal.toLocaleString('en-IN') : '0'}
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3D6A52] text-[10px] font-bold text-white">
                {totalItems}
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#182B22] hover:bg-[#EAE2D5] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[108px] bottom-0 bg-[#FAF7F2] z-50 flex flex-col p-8 border-t border-[#EAE2D5] overflow-y-auto">
            <div className="space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 font-serif text-xl border-b border-[#EAE2D5] ${
                      isActive ? 'text-[#182B22] font-bold italic' : 'text-[#5C6E64]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDD2C0]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsUserModalOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-xl bg-[#EAE2D5] p-4 text-xs uppercase tracking-widest font-bold text-[#182B22]"
              >
                <span>{isLoggedIn ? `Patron Account (${user?.name})` : 'Join The Tea Society'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-auto pt-8 text-center text-xs text-[#7A8E82] font-serif italic">
              <p>TIRMA AGRO TECH • Technology Rooted in Nature</p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-widest not-italic">
                Pure Single-Estate Organic & Herbal Teas
              </p>
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
