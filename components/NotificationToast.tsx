'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notificationMessage, clearNotification, setIsCartOpen } = useCart();

  if (!notificationMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-3 rounded-xl border border-gold-400/30 bg-tea-950/95 px-5 py-4 text-white shadow-2xl backdrop-blur-md">
        <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0" />
        <span className="text-sm font-medium pr-2">{notificationMessage}</span>
        <button
          onClick={() => {
            clearNotification();
            setIsCartOpen(true);
          }}
          className="rounded-lg bg-gold-500/20 px-2.5 py-1 text-xs font-semibold text-gold-300 hover:bg-gold-500/30 transition-colors"
        >
          View Bag
        </button>
        <button
          onClick={clearNotification}
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
