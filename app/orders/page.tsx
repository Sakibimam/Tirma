'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@/context/UserContext';
import { useCart } from '@/context/CartContext';
import { ArrowRight } from 'lucide-react';

export default function OrdersPage() {
  const { orders, isLoggedIn, user, setIsUserModalOpen } = useUser();
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <div className="bg-[#FBF7F0] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E3D6C0]">
          <div>
            <span className="italic text-sm text-[#7A6D5D]">
              Patron Consignments
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-normal text-[#33291F] mt-1">
              Your Garden Shipments
            </h1>
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => setIsUserModalOpen(true)}
              className="bg-[#33291F] px-5 py-2 text-xs uppercase tracking-widest font-bold text-[#FBF7F0] hover:bg-[#5C5043] transition-colors self-start sm:self-auto"
            >
              Sign In to Your Account
            </button>
          )}
        </div>

        {/* Orders List in INR */}
        {orders.length === 0 ? (
          <div className="border border-[#E3D6C0] bg-white p-12 text-center">
            <span className="font-display text-4xl text-[#B98E3F] block mb-2">~</span>
            <h3 className="font-display text-xl font-normal text-[#33291F]">
              No shipments registered yet
            </h3>
            <p className="text-xs text-[#5C6E64] mt-2 max-w-sm mx-auto">
              When you reserve garden harvests, your dispatch status and tracking details will be archived here.
            </p>
            <Link
              href="/tea"
              className="mt-6 inline-flex items-center gap-2 bg-[#33291F] px-6 py-3 text-xs uppercase tracking-[0.12em] font-bold text-[#FBF7F0] hover:bg-[#5C5043] transition-colors"
            >
              Browse Organic Teas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-[#E3D6C0] bg-white p-6 sm:p-8"
              >
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E3D6C0] gap-4 font-display">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-[#33291F]">
                        Consignment #{order.orderNumber}
                      </span>
                      <span className="bg-[#E4EFE8] text-[#33291F] px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#7A8E82] mt-0.5">
                      Reserved on {order.date} • Courier Ref: {order.trackingNumber}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#7A8E82] block">Amount Billed</span>
                    <span className="text-lg font-bold text-[#33291F]">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Progress Status Bar */}
                <div className="py-6 border-b border-[#E3D6C0]">
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-sans uppercase tracking-widest text-[#7A8E82]">
                    <div className="text-[#33291F] font-semibold">
                      <div className="h-1 bg-[#5C5043] mb-1.5" />
                      <span>Order Received</span>
                    </div>
                    <div className="text-[#33291F] font-semibold">
                      <div className="h-1 bg-[#5C5043] mb-1.5" />
                      <span>Packed at source</span>
                    </div>
                    <div className="text-[#33291F] font-semibold">
                      <div className="h-1 bg-[#5C5043] mb-1.5" />
                      <span>In transit</span>
                    </div>
                    <div className="text-[#33291F] font-semibold">
                      <div className="h-1 bg-[#5C5043] mb-1.5" />
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>

                {/* Order Items in INR */}
                <div className="py-6 space-y-4 font-display">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="relative h-14 w-14 overflow-hidden bg-[#FBF7F0] border border-[#E3D6C0] shrink-0">
                          {item.product.photo && (
                        <Image src={item.product.photo} alt="" fill sizes="80px" className="object-cover" />
                      )}
                        </div>
                        <div className="truncate">
                          <h4 className="text-sm font-bold text-[#33291F] truncate">
                            {item.product.title}
                          </h4>
                          <span className="text-xs text-[#7A8E82] italic">
                            {item.selectedSize} × {item.quantity}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-sm font-bold text-[#33291F]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => {
                            addToCart(item.product, item.selectedSize, 1);
                            setIsCartOpen(true);
                          }}
                          className="border border-[#E3D6C0] px-3 py-1 text-xs text-[#33291F] hover:bg-[#FBF7F0] transition-colors"
                        >
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Destination */}
                <div className="pt-4 border-t border-[#E3D6C0] text-xs text-[#5C6E64] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>
                    Destination: <strong>{order.shippingAddress.name}</strong>, {order.shippingAddress.street}, {order.shippingAddress.city} {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                  </span>
                  <span className="text-[#5C5043] italic">
                    Tracked courier
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
