'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';

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
  const [discountMsg, setDiscountMsg] = useState<{ success: boolean; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyDiscountCode(inputCode);
    setDiscountMsg({ success: res.success, text: res.message });
    if (res.success) {
      setInputCode('');
    }
  };

  const freeShippingProgress = Math.min(
    100,
    ((freeShippingThreshold - amountNeededForFreeShipping) / freeShippingThreshold) * 100
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-tea-950/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 bg-parchment-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-tea-800" />
              <h2 className="font-serif text-lg font-bold text-gray-900">
                Your Organic Tea Bag
              </h2>
              <span className="rounded-full bg-tea-100 px-2.5 py-0.5 text-xs font-semibold text-tea-800">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 text-gray-400 hover:bg-white hover:text-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="border-b border-gray-100 bg-tea-50/50 px-6 py-3">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-xs text-tea-800">
                Add <span className="font-bold text-tea-900">${amountNeededForFreeShipping.toFixed(2)}</span> more to unlock <span className="font-semibold text-gold-600">Free Worldwide Shipping</span>.
              </p>
            ) : (
              <p className="flex items-center gap-1.5 text-xs font-semibold text-tea-700">
                <Sparkles className="h-3.5 w-3.5 text-gold-500" />
                Congratulations! You&apos;ve unlocked Free Eco-Shipping!
              </p>
            )}
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-tea-500 to-gold-500 transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-parchment-100 text-tea-700 mb-4">
                  <ShoppingBag className="h-10 w-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">Your bag is empty</h3>
                <p className="mt-2 text-xs text-gray-500 max-w-xs">
                  Discover our certified single-origin teas, stone-milled ceremonial matcha, and botanical tisanes.
                </p>
                <Link
                  href="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-tea-800 px-6 py-3 text-xs font-semibold text-white hover:bg-tea-900 transition-all shadow-md"
                >
                  Explore Organic Harvest <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm hover:border-tea-200 transition-colors"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-tea-50 border border-tea-100">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 truncate">
                          {item.product.title}
                        </h4>
                        <span className="text-xs text-gray-500">{item.selectedSize}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-gray-300 hover:text-red-500 transition-colors ml-2"
                        title="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2.5 py-1 text-gray-600 hover:text-black transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2.5 py-1 text-gray-600 hover:text-black transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold text-tea-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-gray-400">
                            ${item.product.price.toFixed(2)} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Calculations & Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 bg-parchment-50 p-6 space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. ORGANIC10)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs uppercase placeholder-gray-400 focus:border-tea-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-tea-800 px-4 py-2 text-xs font-semibold text-white hover:bg-tea-900 transition-colors"
                >
                  Apply
                </button>
              </form>

              {discountMsg && (
                <p
                  className={`text-[11px] ${
                    discountMsg.success ? 'text-green-600 font-medium' : 'text-red-500'
                  }`}
                >
                  {discountMsg.text}
                </p>
              )}

              {discountCode && (
                <div className="flex items-center justify-between rounded-lg bg-green-50 px-3 py-1.5 text-xs text-green-800 border border-green-200">
                  <span className="flex items-center gap-1 font-semibold">
                    <Check className="h-3.5 w-3.5" /> Code &ldquo;{discountCode}&rdquo; Applied
                  </span>
                  <button
                    onClick={removeDiscountCode}
                    className="text-gray-400 hover:text-red-600 text-xs"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-700 font-medium">
                    <span>Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Eco-Packaging & Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {shipping === 0 ? (
                      <span className="text-green-600 font-bold">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-sm font-bold text-gray-900">
                  <span>Estimated Total</span>
                  <span className="text-tea-900 font-serif text-lg">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Link Button */}
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-tea-800 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-tea-900 transition-all"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
                <span>256-bit Encrypted Organic Guarantee • 30-Day Freshness Return</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
