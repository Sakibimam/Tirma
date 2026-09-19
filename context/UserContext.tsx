'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Order } from '@/types';
import { productsData } from '@/lib/teaData';

interface UserProfile {
  name: string;
  email: string;
  membershipTier: 'Tea Connoisseur' | 'First Flush Circle' | 'Estate Patron';
  loyaltyPoints: number;
}

interface UserContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  orders: Order[];
  isUserModalOpen: boolean;
  setIsUserModalOpen: (isOpen: boolean) => void;
  login: (email: string, name?: string) => void;
  logout: () => void;
  addOrder: (order: Order) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('tirma_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      const savedOrders = localStorage.getItem('tirma_orders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        const initialMockOrders: Order[] = [
          {
            id: 'ord-91428',
            orderNumber: 'TRM-91428',
            date: 'September 14, 2026',
            status: 'Dispatched',
            total: 4100, // ₹4,100
            trackingNumber: 'TRMA-91428-IND',
            shippingAddress: {
              name: 'Arjun Varma',
              street: '14/B Lavelle Road',
              city: 'Bengaluru',
              postalCode: '560001',
              country: 'India',
            },
            items: [
              {
                product: productsData[0],
                selectedSize: '30g Hand-Stamped Tin',
                quantity: 1,
              },
              {
                product: productsData[1],
                selectedSize: '50g Airtight Tin',
                quantity: 1,
              },
            ],
          },
        ];
        setOrders(initialMockOrders);
        localStorage.setItem('tirma_orders', JSON.stringify(initialMockOrders));
      }
    } catch (e) {
      console.error('Error loading user state', e);
    }
  }, []);

  const login = (email: string, name?: string) => {
    const displayName = name || email.split('@')[0] || 'Tea Connoisseur';
    const profile: UserProfile = {
      name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email: email,
      membershipTier: 'First Flush Circle',
      loyaltyPoints: 450,
    };
    setUser(profile);
    localStorage.setItem('tirma_user', JSON.stringify(profile));
    setIsUserModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tirma_user');
  };

  const addOrder = (order: Order) => {
    setOrders((prev) => {
      const updated = [order, ...prev];
      localStorage.setItem('tirma_orders', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        orders,
        isUserModalOpen,
        setIsUserModalOpen,
        login,
        logout,
        addOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
