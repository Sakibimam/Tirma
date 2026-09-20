'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import { Order } from '@/types';
import {
  CheckCircle,
  Truck,
  ArrowRight,
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
    street: '14/B Lavelle Road, Shanthala Nagar',
    city: 'Bengaluru',
    postalCode: '560001',
    state: 'Karnataka',
    country: 'India',
    packaging: 'eco',
    paymentMethod: 'upi',
    upiId: 'patron@okhdfcbank',
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
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#dec284', '#5C5043', '#FBF7F0', '#B5643C'],
        });
      } catch (e) {
        console.error(e);
      }

      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const newOrder: Order = {
        id: `ord-${randomNum}`,
        orderNumber: `TRM-${randomNum}`,
        date: new Date().toLocaleDateString('en-IN', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
        status: 'Order placed',
        total: finalTotal,
        trackingNumber: `TRMA-${randomNum}-IND`,
        shippingAddress: {
          name: formData.name || 'Customer',
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
    }, 1200);
  };

  if (completedOrder) {
    return (
      <div className="bg-[#FBF7F0] min-h-screen py-16 lg:py-24 flex items-center justify-center font-display">
        <div className="max-w-xl w-full mx-auto px-4">
          <div className="border border-[#E3D6C0] bg-white p-8 sm:p-12 text-center">
            <span className="font-display text-5xl text-[#5C5043] block mb-2">~</span>

            <span className="italic text-xs text-[#B5643C] block mb-1">
              Consignment Authorized
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-normal text-[#33291F]">
              Thank You for Your Order
            </h1>
            <p className="mt-3 text-sm text-[#5C6E64] leading-relaxed">
              Your seasonal harvest allocation has been registered with the garden. We are hand-packing your airtight tins in zero-plastic eco-wrapping.
            </p>

            {/* Order Details Card in INR */}
            <div className="my-8 bg-[#F4EFE6] border border-[#E3D6C0] p-6 text-left text-xs space-y-2.5 text-[#33291F]">
              <div className="flex justify-between">
                <span className="text-[#7A8E82]">Consignment Reference:</span>
                <span className="font-bold">{completedOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A8E82]">Dispatch Courier Ref:</span>
                <span className="text-[#5C5043]">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A8E82]">Destination:</span>
                <span>
                  {completedOrder.shippingAddress.name}, {completedOrder.shippingAddress.city}
                </span>
              </div>
              <div className="flex justify-between border-t border-[#E3D6C0] pt-2 text-base font-bold text-[#33291F]">
                <span>Total Investment:</span>
                <span>₹{completedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <Link
                href="/orders"
                className="w-full sm:w-auto bg-[#33291F] px-6 py-3 text-xs uppercase tracking-[0.12em] font-bold text-[#FBF7F0] hover:bg-[#5C5043] transition-colors"
              >
                Track Consignment
              </Link>
              <Link
                href="/tea"
                className="w-full sm:w-auto border border-[#E3D6C0] bg-white px-6 py-3 text-xs uppercase tracking-[0.12em] font-bold text-[#33291F] hover:bg-[#FBF7F0] transition-colors"
              >
                Return to Garden
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#FBF7F0] min-h-screen py-20 flex items-center justify-center font-display">
        <div className="text-center p-8">
          <h2 className="font-display text-2xl font-normal text-[#33291F]">Your bag is currently empty</h2>
          <p className="text-xs text-[#5C6E64] mt-2">
            Please add tea harvests to your bag before proceeding to consignment checkout.
          </p>
          <Link
            href="/tea"
            className="mt-6 inline-flex items-center gap-2 bg-[#33291F] px-6 py-3 text-xs uppercase tracking-[0.12em] font-bold text-[#FBF7F0] hover:bg-[#5C5043] transition-colors"
          >
            Browse the tea <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF7F0] min-h-screen py-10 lg:py-16 font-display">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-[#E3D6C0]">
          <span className="italic text-xs text-[#7A6D5D]">
            Review your order
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-normal text-[#33291F] mt-1">
            Complete Your Consignment
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Delivery Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-[#E3D6C0] bg-white p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-[#33291F] mb-4 pb-2 border-b border-[#E3D6C0]">
                Shipping Destination (India)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#33291F] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Arjun Varma"
                    className="w-full border border-[#E3D6C0] bg-[#FBF7F0] p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#33291F] mb-1">
                    Email for Shipment Notifications
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="arjun@tirma-tea.org"
                    className="w-full border border-[#E3D6C0] bg-[#FBF7F0] p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#33291F] mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    required
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full border border-[#E3D6C0] bg-[#FBF7F0] p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#33291F] mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-[#E3D6C0] bg-[#FBF7F0] p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#33291F] mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full border border-[#E3D6C0] bg-[#FBF7F0] p-2.5 text-xs text-[#33291F] focus:border-[#33291F] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Packaging Preference */}
            <div className="border border-[#E3D6C0] bg-white p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-[#33291F] mb-3 pb-2 border-b border-[#E3D6C0]">
                Packing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label
                  className={`p-3.5 border cursor-pointer ${
                    formData.packaging === 'eco'
                      ? 'bg-[#F4EFE6] border-[#33291F]'
                      : 'border-[#E3D6C0]'
                  }`}
                >
                  <input
                    type="radio"
                    name="packaging"
                    value="eco"
                    checked={formData.packaging === 'eco'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <strong className="text-[#33291F]">Zero-Plastic Eco Box</strong>
                  <p className="text-[#5C6E64] text-[11px] mt-1">Recycled pulp cartons sealed with natural water gum.</p>
                </label>

                <label
                  className={`p-3.5 border cursor-pointer ${
                    formData.packaging === 'gift'
                      ? 'bg-[#F4EFE6] border-[#33291F]'
                      : 'border-[#E3D6C0]'
                  }`}
                >
                  <input
                    type="radio"
                    name="packaging"
                    value="gift"
                    checked={formData.packaging === 'gift'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <strong className="text-[#33291F]">Washi Wrapped Gift Box</strong>
                  <p className="text-[#5C6E64] text-[11px] mt-1">Hand-wrapped in handmade washi paper with seal.</p>
                </label>
              </div>
            </div>

            {/* Payment Method in INR */}
            <div className="border border-[#E3D6C0] bg-white p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-[#33291F] mb-3 pb-2 border-b border-[#E3D6C0]">
                Payment Authorization
              </h2>

              <div className="bg-[#F4EFE6] border border-[#E3D6C0] p-4 text-xs text-[#33291F] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold">UPI / NetBanking / Cards (Indian Gateways)</span>
                  <span className="text-[10px] text-[#5C5043] font-semibold bg-white px-2 py-0.5 border border-[#E3D6C0]">
                    256-bit SSL Secure
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] text-[#5C6E64] mb-1">UPI ID or Virtual Address</label>
                  <input
                    type="text"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleChange}
                    className="w-full border border-[#E3D6C0] bg-white p-2 text-xs text-[#33291F]"
                  />
                </div>
              </div>

              <p className="mt-3 text-[11px] text-[#7A8E82] italic">
                Simulated allocation testing active. No real debits occur on checkout.
              </p>
            </div>
          </div>

          {/* Right Column: Order Summary in INR */}
          <div className="lg:col-span-5">
            <div className="border border-[#E3D6C0] bg-white p-6 sm:p-8 sticky top-28">
              <h3 className="font-display text-xl font-normal text-[#33291F] mb-4 pb-3 border-b border-[#E3D6C0]">
                Consignment Summary ({cartItems.length})
              </h3>

              <div className="max-h-64 overflow-y-auto space-y-3 pr-1 mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden bg-[#F4EFE6] border border-[#E3D6C0] shrink-0">
                      {item.product.photo && (
                        <Image src={item.product.photo} alt="" fill sizes="80px" className="object-cover" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#33291F] truncate">
                        {item.product.title}
                      </h4>
                      <span className="text-[10px] text-[#7A6D5D] italic">
                        {item.selectedSize} × {item.quantity}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#33291F] shrink-0">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Calculations in INR */}
              <div className="space-y-2 text-xs text-[#5C6E64] border-t border-[#E3D6C0] pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#33291F]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#B5643C]">
                    <span>Voucher ({discountCode})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-bold text-[#33291F]">
                    {shipping === 0 ? <strong className="text-[#5C5043]">COMPLIMENTARY</strong> : `₹${shipping.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <div className="border-t border-[#E3D6C0] pt-3 flex justify-between text-base font-bold text-[#33291F]">
                  <span>Total Amount</span>
                  <span className="font-display text-xl">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#33291F] py-4 text-xs uppercase tracking-[0.12em] font-bold text-[#FBF7F0] hover:bg-[#5C5043] transition-colors disabled:opacity-60"
              >
                {isProcessing ? (
                  <span>Securing Harvest Lot...</span>
                ) : (
                  <span>Confirm & Authorize Consignment</span>
                )}
              </button>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-[#7A8E82] font-display italic">
                  Protected by the 30-Day Tirma Freshness Guarantee
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
