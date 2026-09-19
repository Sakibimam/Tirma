'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import { Order } from '@/types';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  CreditCard,
  Sparkles,
  ArrowRight,
  Lock,
  Package,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, subtotal, shipping, discountAmount, discountCode, finalTotal, clearCart } = useCart();
  const { user, addOrder } = useUser();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    street: '74 Primrose Hill Road',
    city: 'London',
    postalCode: 'NW3 3DH',
    country: 'United Kingdom',
    packaging: 'eco',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '09/28',
    cardCvc: '•••',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsProcessing(true);

    setTimeout(() => {
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#cb9b44', '#286b4f', '#ffffff', '#e6cb85'],
        });
      } catch (e) {
        console.error(e);
      }

      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const newOrder: Order = {
        id: `ord-${randomNum}`,
        orderNumber: `TRM-${randomNum}`,
        date: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
        status: 'Processing',
        total: finalTotal,
        trackingNumber: `TRMA-${randomNum}-ECO`,
        shippingAddress: {
          name: formData.name || 'Tea Connoisseur',
          street: formData.street,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        items: [...cartItems],
      };

      addOrder(newOrder);
      setCompletedOrder(newOrder);
      clearCart();
      setIsProcessing(false);
    }, 1500);
  };

  if (completedOrder) {
    return (
      <div className="bg-parchment-50 min-h-screen py-16 lg:py-24 flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-4">
          <div className="rounded-3xl bg-white p-8 sm:p-12 text-center border border-tea-100 shadow-luxury animate-fade-in">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-tea-50 text-tea-700 mx-auto mb-6 border border-tea-200">
              <CheckCircle className="h-10 w-10 text-tea-600" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
              Allocation Confirmed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-1">
              Thank You for Your Order
            </h1>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Your single-origin organic tea allocation has been received. Our agro-tech packaging artisans are carefully preparing your fresh airtight tins.
            </p>

            {/* Order Details Card */}
            <div className="my-8 rounded-2xl bg-parchment-50 p-6 text-left border border-gray-200 text-xs space-y-2.5">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Number:</span>
                <span className="font-bold text-gray-900">{completedOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tracking Reference:</span>
                <span className="font-mono text-tea-800 font-semibold">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Destination:</span>
                <span className="text-gray-800 font-medium">
                  {completedOrder.shippingAddress.name}, {completedOrder.shippingAddress.city}
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 text-sm font-bold text-tea-950">
                <span>Amount Billed:</span>
                <span className="font-serif text-base">${completedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <Link
                href="/orders"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-tea-900 px-6 py-3.5 text-xs font-bold text-white hover:bg-tea-800 transition-colors shadow-md"
              >
                <Package className="h-4 w-4" />
                <span>Track Your Shipment</span>
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-parchment-50 min-h-screen py-20 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="font-serif text-2xl font-bold text-tea-950">Your bag is empty</h2>
          <p className="text-xs text-gray-500 mt-2">
            Please add some organic teas to your bag before proceeding to checkout.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-tea-900 px-6 py-3 text-xs font-semibold text-white hover:bg-tea-800 transition-colors shadow-md"
          >
            Explore Teas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-parchment-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
            Encrypted Checkout
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-1">
            Complete Your Organic Allocation
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Delivery & Payment Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Delivery Address */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-lg font-bold text-tea-950 mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-tea-700" /> Shipping Destination
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Julian Montgomery"
                    className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email for Shipment Updates
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tea.connoisseur@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    required
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="12 High Mountain Way"
                    className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-800 focus:border-tea-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Packaging Preference */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-lg font-bold text-tea-950 mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-gold-600" /> Eco-Packaging Preference
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    formData.packaging === 'eco'
                      ? 'bg-tea-50/50 border-tea-500 text-tea-950'
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="packaging"
                    value="eco"
                    checked={formData.packaging === 'eco'}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <div>
                    <span className="text-xs font-bold block">100% Zero-Plastic Eco Box</span>
                    <span className="text-[11px] text-gray-500 leading-tight block">
                      Recycled plant paper with water-based soy ink sealing.
                    </span>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    formData.packaging === 'gift'
                      ? 'bg-tea-50/50 border-tea-500 text-tea-950'
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={formData.packaging === 'gift'}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <div>
                    <span className="text-xs font-bold block">Deluxe Gold-Embossed Gift Box</span>
                    <span className="text-[11px] text-gray-500 leading-tight block">
                      Washi paper wrapping with wax seal and handwritten note.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method Simulation */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="font-serif text-lg font-bold text-tea-950 mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-tea-700" /> Secure Payment
              </h2>

              <div className="rounded-2xl border border-tea-200 bg-tea-50/30 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-tea-950">Credit / Debit Card (Stripe-Ready)</span>
                  <div className="flex items-center gap-1 text-[10px] text-tea-700 font-semibold bg-white px-2 py-0.5 rounded border border-tea-200">
                    <Lock className="h-3 w-3" /> 256-bit SSL
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] text-gray-500 mb-1">Card Number</label>
                    <input
                      type="text"
                      disabled
                      value={formData.cardNumber}
                      className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-700 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-gray-500 mb-1">Expiration</label>
                      <input
                        type="text"
                        disabled
                        value={formData.cardExp}
                        className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-700 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-500 mb-1">CVC</label>
                      <input
                        type="text"
                        disabled
                        value={formData.cardCvc}
                        className="w-full rounded-xl border border-gray-200 bg-white p-2.5 text-xs text-gray-700 font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>Simulated instant checkout mode enabled. No real charges made.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Placement */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-luxury border border-gray-100 sticky top-28">
              <h3 className="font-serif text-xl font-bold text-tea-950 mb-4 pb-4 border-b border-gray-100">
                Allocation Summary ({cartItems.length} items)
              </h3>

              {/* Items preview list */}
              <div className="max-h-64 overflow-y-auto space-y-3 pr-1 mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-tea-50 shrink-0 border border-tea-100">
                      <Image src={item.product.mainImage} alt={item.product.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 truncate">
                        {item.product.title}
                      </h4>
                      <span className="text-[11px] text-gray-400">
                        {item.selectedSize} × {item.quantity}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-tea-950 shrink-0">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>Discount ({discountCode})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Carbon-Neutral Courier</span>
                  <span className="font-semibold text-gray-900">
                    {shipping === 0 ? <strong className="text-green-600">FREE</strong> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-bold text-tea-950">
                  <span>Total Investment</span>
                  <span className="font-serif text-xl text-tea-950">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-tea-900 py-4 text-sm font-bold text-white hover:bg-gold-600 transition-all shadow-lg disabled:opacity-70"
              >
                {isProcessing ? (
                  <span>Securing Harvest Allocation...</span>
                ) : (
                  <>
                    <span>Confirm & Authorize Order</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-gray-400">
                  Backed by our 30-Day Freshness Guarantee and Direct Ethical Trade Promise
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
