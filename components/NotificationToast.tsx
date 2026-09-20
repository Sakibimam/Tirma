'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notificationMessage, clearNotification, setIsCartOpen } = useCart();

  if (!notificationMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-3 rounded-soft border border-[#C9962B]/30 bg-[#33291F]/95 px-5 py-4 text-white">
        <CheckCircle2 className="h-5 w-5 text-[#C9962B] shrink-0" />
        <span className="text-sm font-medium pr-2">{notificationMessage}</span>
        <button
          onClick={() => {
            clearNotification();
            setIsCartOpen(true);
          }}
          className="rounded-soft bg-[#C9962B]/20 px-2.5 py-1 text-xs font-semibold text-[#A89B89] hover:bg-[#C9962B]/30 transition-colors"
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
