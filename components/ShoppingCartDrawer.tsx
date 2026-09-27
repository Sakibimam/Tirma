'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart, unitPrice } from '@/context/CartContext';
import Image from 'next/image';

export const ShoppingCartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    discountCode,
    discountAmount,
    applyDiscountCode,
    removeDiscountCode,
    finalTotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [discountMsg, setDiscountMsg] = useState<{ success: boolean; text: string } | null>(
    null
  );

  // Close on Escape, and stop the page scrolling behind the drawer.
  useEffect(() => {
    if (!isCartOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsCartOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyDiscountCode(inputCode);
    setDiscountMsg({ success: res.success, text: res.message });
    if (res.success) setInputCode('');
  };

  const progress = Math.min(
    100,
    ((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100
  );

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Your bag">
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-garden-500/50"
        aria-hidden="true"
      />

      <div className="absolute inset-y-0 right-0 flex w-screen max-w-md flex-col border-l border-[color:var(--line)] bg-cream">
        <header className="flex items-center justify-between border-b border-[color:var(--line)] px-6 py-5">
          <h2 className="font-display text-2xl">Your bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="link eyebrow text-bark-70">
            Close
          </button>
        </header>

        {/* Free-delivery progress. A single honest line. */}
        <div className="border-b border-[color:var(--line)] px-6 py-4">
          <p className="eyebrow text-bark-70">
            {amountNeededForFreeShipping > 0
              ? `₹${amountNeededForFreeShipping.toLocaleString('en-IN')} more for free delivery`
              : 'Free delivery applied'}
          </p>
          <div className="mt-3 h-px w-full bg-garden-500/15">
            <div
              className="h-px bg-garden-500 transition-[width] duration-700 ease-soft"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl">Nothing in the bag yet.</p>
              <p className="prose-measure mt-3 text-[0.925rem] text-bark-70">
                Teas from Upper Assam and Darjeeling. If you are not sure where to
                begin, the Index Box has all four of the main ones.
              </p>
              <Link
                href="/tea/the-index-box"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary mt-8"
              >
                The Index Box
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          ) : (
            <ul>
              {cartItems.map((item) => {
                const line = unitPrice(item.product, item.selectedSize) * item.quantity;
                return (
                  <li
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="flex gap-5 border-b border-[color:var(--line)] py-6"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-soft bg-cream-200">
                      {item.product.photo && (
                        <Image
                          src={item.product.photo}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      )}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-[1.125rem] leading-tight">
                            {item.product.title}
                          </h3>
                          <button
                            onClick={() =>
                              removeFromCart(item.product.id, item.selectedSize)
                            }
                            className="link eyebrow shrink-0 text-bark-50"
                            aria-label={`Remove ${item.product.title}`}
                          >
                            Remove
                          </button>
                        </div>
                        <p className="eyebrow mt-1.5 text-bark-50">{item.selectedSize}</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-[color:var(--line)]">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.selectedSize, -1)
                            }
                            className="px-3 py-1 text-bark-70 hover:text-bark"
                            aria-label="One fewer"
                          >
                            −
                          </button>
                          <span className="tabular-nums px-2 text-[0.85rem]">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.selectedSize, 1)
                            }
                            className="px-3 py-1 text-bark-70 hover:text-bark"
                            aria-label="One more"
                          >
                            +
                          </button>
                        </div>
                        <span className="tabular-nums font-display text-lg">
                          ₹{line.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className="border-t border-[color:var(--line)] px-6 py-6">
            <form onSubmit={handleApplyCode} className="flex items-center border-b border-[color:var(--line)]">
              <input
                type="text"
                placeholder="Discount code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="w-full bg-transparent py-2.5 text-[0.8rem] uppercase tracking-[0.1em] outline-none placeholder:text-bark-30"
              />
              <button type="submit" className="link eyebrow shrink-0 pl-4">
                Apply
              </button>
            </form>

            {discountMsg && (
              <p
                className="eyebrow mt-2.5"
                style={{ color: discountMsg.success ? '#2F4A36' : '#B5643C' }}
              >
                {discountMsg.text}
              </p>
            )}

            {discountCode && (
              <div className="mt-3 flex items-center justify-between">
                <span className="eyebrow text-bark-70">{discountCode} applied</span>
                <button onClick={removeDiscountCode} className="link eyebrow text-bark-50">
                  Remove
                </button>
              </div>
            )}

            <dl className="mt-5 space-y-2 text-[0.875rem]">
              <div className="flex justify-between">
                <dt className="text-bark-70">Subtotal</dt>
                <dd className="tabular-nums">₹{subtotal.toLocaleString('en-IN')}</dd>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between" style={{ color: '#B5643C' }}>
                  <dt>Discount</dt>
                  <dd className="tabular-nums">−₹{discountAmount.toLocaleString('en-IN')}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-bark-70">Delivery</dt>
                <dd className="tabular-nums">
                  {shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-[color:var(--line)] pt-3">
                <dt className="eyebrow">Total</dt>
                <dd className="tabular-nums font-display text-2xl">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </dd>
              </div>
            </dl>

            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary mt-6 w-full justify-between"
            >
              Checkout
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>

            <p className="eyebrow mt-4 text-center text-bark-50">
              Dispatched in two working days
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};
