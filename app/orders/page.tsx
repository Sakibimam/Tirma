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
    <div className="bg-[#FAF7F2] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#DDD2C0]">
          <div>
            <span className="font-serif italic text-sm text-[#74A287]">
              Patron Consignments
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#182B22] mt-1">
              Your Garden Shipments
            </h1>
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => setIsUserModalOpen(true)}
              className="bg-[#182B22] px-5 py-2 text-xs uppercase tracking-widest font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors self-start sm:self-auto"
            >
              Sign In to Your Account
            </button>
          )}
        </div>

        {/* Orders List in INR */}
        {orders.length === 0 ? (
          <div className="border border-[#DDD2C0] bg-white p-12 text-center">
            <span className="font-serif text-4xl text-[#B98E3F] block mb-2">~</span>
            <h3 className="font-serif text-xl font-normal text-[#182B22]">
              No shipments registered yet
            </h3>
            <p className="text-xs font-serif text-[#5C6E64] mt-2 max-w-sm mx-auto">
              When you reserve garden harvests, your dispatch status and tracking details will be archived here.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 bg-[#182B22] px-6 py-3 text-xs uppercase tracking-widest-estate font-bold text-[#FAF7F2] hover:bg-[#315442] transition-colors"
            >
              Browse Organic Teas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-[#DDD2C0] bg-white p-6 sm:p-8"
              >
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#EAE2D5] gap-4 font-serif">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-[#182B22]">
                        Consignment #{order.orderNumber}
                      </span>
                      <span className="bg-[#E4EFE8] text-[#182B22] px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#7A8E82] mt-0.5">
                      Reserved on {order.date} • Courier Ref: {order.trackingNumber}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#7A8E82] block">Amount Billed</span>
                    <span className="text-lg font-bold text-[#182B22]">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Progress Status Bar */}
                <div className="py-6 border-b border-[#EAE2D5]">
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-sans uppercase tracking-widest text-[#7A8E82]">
                    <div className="text-[#182B22] font-semibold">
                      <div className="h-1 bg-[#315442] mb-1.5" />
                      <span>Order Received</span>
                    </div>
                    <div className="text-[#182B22] font-semibold">
                      <div className="h-1 bg-[#315442] mb-1.5" />
                      <span>Leaves Selected</span>
                    </div>
                    <div className="text-[#182B22] font-semibold">
                      <div className="h-1 bg-[#315442] mb-1.5" />
                      <span>Garden Dispatched</span>
                    </div>
                    <div className="text-[#182B22] font-semibold">
                      <div className="h-1 bg-[#315442] mb-1.5" />
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>

                {/* Order Items in INR */}
                <div className="py-6 space-y-4 font-serif">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="relative h-14 w-14 overflow-hidden bg-[#FAF7F2] border border-[#DDD2C0] shrink-0">
                          <Image
                            src={item.product.mainImage}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="truncate">
                          <h4 className="text-sm font-bold text-[#182B22] truncate">
                            {item.product.title}
                          </h4>
                          <span className="text-xs text-[#7A8E82] italic">
                            {item.selectedSize} × {item.quantity}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-sm font-bold text-[#182B22]">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => {
                            addToCart(item.product, item.selectedSize, 1);
                            setIsCartOpen(true);
                          }}
                          className="border border-[#DDD2C0] px-3 py-1 text-xs text-[#182B22] hover:bg-[#FAF7F2] transition-colors"
                        >
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Destination */}
                <div className="pt-4 border-t border-[#EAE2D5] text-xs font-serif text-[#5C6E64] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>
                    Destination: <strong>{order.shippingAddress.name}</strong>, {order.shippingAddress.street}, {order.shippingAddress.city} {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                  </span>
                  <span className="text-[#315442] italic">
                    Climate-Neutral Eco-Courier
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
