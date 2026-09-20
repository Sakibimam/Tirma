'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import { SearchModal } from './SearchModal';
import { UserAuthModal } from './UserAuthModal';
import { ShoppingCartDrawer } from './ShoppingCartDrawer';

const NAV = [
  { name: 'Shop tea', href: '/tea' },
  { name: 'Brewing', href: '/brewing' },
  { name: 'Journal', href: '/journal' },
  { name: 'Our gardens', href: '/about' },
];

/**
 * Transparent over the hero photograph, cream once you scroll past it, so the
 * home page opens on the garden rather than on a bar.
 */
export const Masthead: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const { isLoggedIn, setIsUserModalOpen, user } = useUser();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const overHero = pathname === '/' && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <div className="bg-garden-600 py-2.5 text-center text-[0.8125rem] text-cream/85">
        Harvest month on every pack · Free delivery over ₹1,499
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-500 ease-soft ${
          overHero
            ? 'bg-transparent text-cream'
            : 'border-b border-[color:var(--line)] bg-cream/95 text-bark backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-shell items-center justify-between gap-8 px-6 sm:px-10 lg:px-16">
          <Link href="/" className="flex items-baseline gap-2.5">
            <span className="font-display text-[1.625rem] font-medium leading-none tracking-[0.01em]">
              TIRMA
            </span>
            <span
              className={`hidden text-[0.75rem] tracking-[0.12em] sm:inline ${
                overHero ? 'text-cream/65' : 'text-bark-50'
              }`}
            >
              ASSAM &amp; KASHMIR
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`link text-[0.9375rem] ${
                    overHero
                      ? 'text-cream/85 hover:text-cream'
                      : active
                        ? 'font-medium text-garden-500'
                        : 'text-bark-70'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden text-[0.9375rem] opacity-80 transition-opacity hover:opacity-100 sm:inline"
            >
              Search
            </button>
            <button
              onClick={() => setIsUserModalOpen(true)}
              className="hidden text-[0.9375rem] opacity-80 transition-opacity hover:opacity-100 sm:inline"
            >
              {isLoggedIn && user ? user.name.split(' ')[0] : 'Account'}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[0.875rem] font-medium transition-colors duration-300 ${
                overHero
                  ? 'bg-cream/15 text-cream hover:bg-cream/25'
                  : 'bg-garden-500 text-cream hover:bg-garden-600'
              }`}
              aria-label={`Bag, ${totalItems} item${totalItems === 1 ? '' : 's'}`}
            >
              Bag
              <span className="tabular-nums">{totalItems}</span>
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-[0.9375rem] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Primary, mobile"
            className="border-t border-[color:var(--line)] bg-cream lg:hidden"
          >
            <ul className="mx-auto max-w-shell px-6 py-2 sm:px-10">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-[color:var(--line)] last:border-0">
                  <Link href={item.href} className="block py-4 font-display text-[1.5rem] text-bark">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex gap-6 py-4">
                <button onClick={() => setSearchOpen(true)} className="text-bark-70">
                  Search
                </button>
                <button onClick={() => setIsUserModalOpen(true)} className="text-bark-70">
                  Account
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <UserAuthModal />
      <ShoppingCartDrawer />
    </>
  );
};
