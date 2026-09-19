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
        className="fixed inset-0 bg-[#0C1712]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#DDD2C0]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EAE2D5] px-6 py-5 bg-[#F4EFE6]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="h-4 w-4 text-[#182B22]" />
              <h2 className="font-serif text-xl font-normal text-[#182B22]">
                Your Tea Bag
              </h2>
              <span className="font-serif text-xs italic text-[#74A287]">
                ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-[#5C6E64] hover:text-[#182B22] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Free Delivery Bar in INR */}
          <div className="border-b border-[#EAE2D5] bg-[#EAE2D5]/40 px-6 py-3">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-xs font-serif text-[#182B22]">
                Add <span className="font-bold">₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</span> more to receive <span className="text-[#895237] font-semibold">Complimentary Estate Delivery across India</span>.
              </p>
            ) : (
              <p className="text-xs font-serif font-bold text-[#315442]">
                Complimentary Estate Eco-Delivery Unlocked!
              </p>
            )}
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[#DDD2C0]">
              <div
                className="h-full bg-[#315442] transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <span className="font-serif text-5xl text-[#B98E3F] block mb-3">~</span>
                <h3 className="font-serif text-xl font-normal text-[#182B22]">Your bag is currently empty</h3>
                <p className="mt-2 text-xs text-[#5C6E64] font-serif max-w-xs">
                  Discover small-batch ceremonial matcha, Himalayan white needle, and wild floral infusions.
                </p>
                <Link
                  href="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 bg-[#182B22] px-6 py-3 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
                >
                  Explore Harvests <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-4 border-b border-[#EAE2D5] pb-4 bg-transparent"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#F4EFE6] border border-[#DDD2C0]">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-bold text-[#182B22] truncate">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-[#99A8A0] hover:text-red-700 transition-colors ml-2"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] font-serif italic text-[#74A287]">
                        {item.selectedSize}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {/* Stepper */}
                      <div className="flex items-center border border-[#DDD2C0] bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2 py-0.5 text-xs text-[#182B22] hover:bg-[#EAE2D5]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2.5 text-xs font-serif font-bold text-[#182B22]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2 py-0.5 text-xs text-[#182B22] hover:bg-[#EAE2D5]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif text-sm font-bold text-[#182B22]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer in INR */}
          {cartItems.length > 0 && (
            <div className="border-t border-[#DDD2C0] bg-[#F4EFE6] p-6 space-y-4">
              {/* Voucher Form */}
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <input
                  type="text"
                  placeholder="VOUCHER (e.g. ORGANIC10)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 border border-[#DDD2C0] bg-white px-3 py-2 text-xs uppercase font-mono placeholder-[#74A287] focus:border-[#182B22] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#182B22] px-4 py-2 text-xs uppercase tracking-wider font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
                >
                  Apply
                </button>
              </form>

              {discountMsg && (
                <p
                  className={`text-[11px] font-serif italic ${
                    discountMsg.success ? 'text-green-800' : 'text-red-700'
                  }`}
                >
                  {discountMsg.text}
                </p>
              )}

              {discountCode && (
                <div className="flex items-center justify-between bg-[#EAE2D5] px-3 py-1.5 text-xs text-[#182B22]">
                  <span className="font-serif italic font-semibold">
                    Voucher &ldquo;{discountCode}&rdquo; Applied
                  </span>
                  <button
                    onClick={removeDiscountCode}
                    className="text-xs text-[#895237] underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown in INR */}
              <div className="space-y-1.5 text-xs text-[#475E52] font-serif">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#182B22]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#895237]">
                    <span>Voucher Deduction</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Eco-Courier Delivery (India)</span>
                  <span className="font-bold text-[#182B22]">
                    {shipping === 0 ? (
                      <span className="text-[#315442] font-bold">COMPLIMENTARY</span>
                    ) : (
                      `₹${shipping.toLocaleString('en-IN')}`
                    )}
                  </span>
                </div>
                <div className="border-t border-[#DDD2C0] pt-2 flex justify-between text-base font-bold text-[#182B22]">
                  <span>Total Amount</span>
                  <span className="font-serif text-lg">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout link */}
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#182B22] py-3.5 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
              >
                <span>Proceed to Allocation Checkout</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <p className="text-center text-[10px] text-[#74A287] font-serif italic">
                30-Day Freshness Guarantee • Sealed Fresh at the Garden
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
