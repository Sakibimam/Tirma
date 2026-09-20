'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '@/types';

/**
 * Each pack size carries its own price, so a 500 g refill is not billed at the
 * 100 g rate. Falls back to the product's base price if a size goes missing
 * (e.g. an old cart restored from localStorage after a catalogue change).
 */
export const unitPrice = (product: Product, sizeLabel: string): number =>
  product.packageSizes.find((s) => s.label === sizeLabel)?.price ?? product.price;

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  discountCode: string;
  discountAmount: number;
  applyDiscountCode: (code: string) => { success: boolean; message: string };
  removeDiscountCode: () => void;
  finalTotal: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  notificationMessage: string | null;
  clearNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 1499; // ₹1,499 for free delivery across India
const STANDARD_SHIPPING_FEE = 120; // ₹120 standard eco-parcel delivery

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('tirma_cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
      const savedDiscount = localStorage.getItem('tirma_discount');
      if (savedDiscount) {
        const parsed = JSON.parse(savedDiscount);
        setDiscountCode(parsed.code);
        setDiscountPercentage(parsed.percentage);
      }
    } catch (e) {
      console.error('Error loading cart from localStorage', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tirma_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cartItems]);

  const showNotification = (msg: string) => {
    setNotificationMessage(msg);
    setTimeout(() => {
      setNotificationMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const clearNotification = () => setNotificationMessage(null);

  const addToCart = (product: Product, size?: string, quantity: number = 1) => {
    const selectedSize = size || product.packageSizes[0]?.label || 'Standard';

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prevItems, { product, selectedSize, quantity }];
      }
    });

    showNotification(`${product.title} — ${selectedSize} added`);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscountCode('');
    setDiscountPercentage(0);
    localStorage.removeItem('tirma_cart');
    localStorage.removeItem('tirma_discount');
  };

  const applyDiscountCode = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'FIRSTFLUSH' || cleanCode === 'TIRMA10') {
      setDiscountCode(cleanCode);
      setDiscountPercentage(10);
      localStorage.setItem('tirma_discount', JSON.stringify({ code: cleanCode, percentage: 10 }));
      return { success: true, message: '10% off applied to your order.' };
    } else if (cleanCode === 'HARVEST20') {
      setDiscountCode(cleanCode);
      setDiscountPercentage(20);
      localStorage.setItem('tirma_discount', JSON.stringify({ code: cleanCode, percentage: 20 }));
      return { success: true, message: '20% off applied to your order.' };
    } else {
      return { success: false, message: 'That code is not recognised.' };
    }
  };

  const removeDiscountCode = () => {
    setDiscountCode('');
    setDiscountPercentage(0);
    localStorage.removeItem('tirma_discount');
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + unitPrice(item.product, item.selectedSize) * item.quantity;
  }, 0);

  const discountAmount = Math.round((subtotal * discountPercentage) / 100);
  const subtotalAfterDiscount = subtotal - discountAmount;
  const shipping = subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : STANDARD_SHIPPING_FEE;
  const finalTotal = subtotalAfterDiscount + shipping;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotalAfterDiscount);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        shipping,
        discountCode,
        discountAmount,
        applyDiscountCode,
        removeDiscountCode,
        finalTotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        notificationMessage,
        clearNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
