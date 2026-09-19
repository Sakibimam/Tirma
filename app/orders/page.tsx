'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@/context/UserContext';
import { useCart } from '@/context/CartContext';
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  ArrowRight,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';

export default function OrdersPage() {
  const { orders, isLoggedIn, user, setIsUserModalOpen } = useUser();
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <div className="bg-parchment-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700">
              Connoisseur Shipments
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-950 mt-1">
              Your Orders & Dispatch History
            </h1>
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => setIsUserModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-tea-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-tea-800 transition-colors shadow-sm self-start sm:self-auto"
            >
              Sign In to Your Account
            </button>
          )}
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center border border-gray-100 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-parchment-100 text-tea-800 mx-auto mb-4">
              <Package className="h-8 w-8 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900">
              No orders placed yet
            </h3>
            <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto">
              When you order from our seasonal harvest allocations, your shipment tracking and delivery timeline will appear here.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-tea-900 px-6 py-3 text-xs font-semibold text-white hover:bg-tea-800 transition-all shadow-md"
            >
              Browse Organic Teas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm hover:border-tea-200 transition-colors"
              >
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg font-bold text-tea-950">
                        Order #{order.orderNumber}
                      </span>
                      <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-green-800 border border-green-200">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Placed on {order.date} • Courier Tracking: {order.trackingNumber}
                    </p>
                  </div>

                  <div className="text-right sm:text-right">
                    <span className="text-xs text-gray-400 block">Total Billed</span>
                    <span className="font-serif text-lg font-bold text-tea-950">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Progress Status Bar */}
                <div className="py-6 border-b border-gray-100">
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-gray-400">
                    <div className="text-tea-900">
                      <div className="h-2 rounded-full bg-tea-700 mb-1.5" />
                      <span>Order Confirmed</span>
                    </div>
                    <div className="text-tea-900">
                      <div className="h-2 rounded-full bg-tea-700 mb-1.5" />
                      <span>Quality Inspection</span>
                    </div>
                    <div className="text-tea-900">
                      <div className="h-2 rounded-full bg-tea-700 mb-1.5" />
                      <span>Eco Dispatch</span>
                    </div>
                    <div className="text-tea-900">
                      <div className="h-2 rounded-full bg-tea-700 mb-1.5" />
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="py-6 space-y-4">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-tea-50 shrink-0 border border-tea-100">
                          <Image
                            src={item.product.mainImage}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="truncate">
                          <h4 className="font-serif text-sm font-bold text-gray-900 truncate">
                            {item.product.title}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {item.selectedSize} × {item.quantity}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs sm:text-sm font-semibold text-gray-800">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => {
                            addToCart(item.product, item.selectedSize, 1);
                            setIsCartOpen(true);
                          }}
                          className="rounded-lg bg-parchment-100 px-3 py-1.5 text-xs font-semibold text-tea-900 hover:bg-tea-900 hover:text-white transition-colors"
                        >
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Destination */}
                <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>
                    Shipped to: <strong>{order.shippingAddress.name}</strong>, {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.country}
                  </span>
                  <span className="text-tea-700 font-semibold flex items-center gap-1">
                    <Truck className="h-3.5 w-3.5" /> Carbon-Neutral Carrier
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
