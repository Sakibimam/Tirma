'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Order } from '@/types';

interface UserProfile {
  name: string;
  email: string;
  membershipTier: 'Tea Connoisseur' | 'First Flush Member' | 'Master Sommelier';
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
        // Initial mock order for demo
        const initialMockOrders: Order[] = [
          {
            id: 'ord-88319',
            orderNumber: 'TRM-88319',
            date: 'September 12, 2026',
            status: 'Delivered',
            total: 72.0,
            trackingNumber: 'TRMA-7749-ECO',
            shippingAddress: {
              name: 'Alexander Wright',
              street: '42 Kensington Gardens',
              city: 'London',
              postalCode: 'W8 4PX',
              country: 'United Kingdom',
            },
            items: [
              {
                product: {
                  id: 'tirma-ceremonial-matcha-ujikyo',
                  slug: 'imperial-ceremonial-matcha',
                  title: 'Imperial Ceremonial Matcha',
                  subtitle: 'First-Flush Stone-Ground Uji Tencha',
                  category: 'Matcha',
                  price: 38.0,
                  rating: 4.96,
                  reviewCount: 142,
                  mainImage: '/images/products/matcha.jpg',
                  extraPhotos: [],
                  description: 'Ceremonial stone-milled matcha',
                  story: '',
                  packageSizes: ['30g Tin'],
                  origin: 'Uji Highlands, Kyoto',
                  elevation: '450m',
                  harvest: 'Spring 2026',
                  flavorNotes: ['Sweet Umami'],
                  caffeineLevel: 'High',
                  tastingProfile: { umami: 5, sweetness: 4.5, astringency: 1.2, aroma: 4.8 },
                  brewingGuide: { temp: '80C', ratio: '2g', steepTime: '40s', infusions: 1 },
                  ingredients: ['Stone-Ground Green Tea'],
                  benefits: ['Mental focus'],
                  inStock: true,
                },
                selectedSize: '30g Tin',
                quantity: 1,
              },
              {
                product: {
                  id: 'tirma-silver-needle-cloud-mist',
                  slug: 'himalayan-silver-needle-white-tea',
                  title: 'Himalayan Silver Needle',
                  subtitle: 'Sun-Dried Downy Spring Buds',
                  category: 'Herbal & Tisane',
                  price: 34.0,
                  rating: 4.92,
                  reviewCount: 98,
                  mainImage: '/images/products/tea1.jpg',
                  extraPhotos: [],
                  description: 'Silvery tea tips',
                  story: '',
                  packageSizes: ['50g Tin'],
                  origin: 'Himalayan Foothills',
                  elevation: '1,850m',
                  harvest: 'Spring 2026',
                  flavorNotes: ['Honeysuckle'],
                  caffeineLevel: 'Low',
                  tastingProfile: { umami: 3.2, sweetness: 4.8, astringency: 1.0, aroma: 4.9 },
                  brewingGuide: { temp: '82C', ratio: '3.5g', steepTime: '4m', infusions: 4 },
                  ingredients: ['White Tea Tips'],
                  benefits: ['Antioxidants'],
                  inStock: true,
                },
                selectedSize: '50g Tin',
                quantity: 1,
              },
            ],
          },
        ];
        setOrders(initialMockOrders);
        localStorage.setItem('tirma_orders', JSON.stringify(initialMockOrders));
      }
    } catch (e) {
      console.error('Error loading user state from localStorage', e);
    }
  }, []);

  const login = (email: string, name?: string) => {
    const displayName = name || email.split('@')[0] || 'Tea Connoisseur';
    const profile: UserProfile = {
      name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email: email,
      membershipTier: 'First Flush Member',
      loyaltyPoints: 320,
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
