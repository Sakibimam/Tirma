import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import { Navbar, Footer, NotificationToast } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TIRMA — Pure Single-Estate Organic & Herbal Teas',
  description:
    'Artisanal whole-leaf teas, stone-ground ceremonial matcha, and botanical tisanes harvested from mist-shrouded high-elevation mountain gardens. Rooted in living soil and mindful brewing rituals.',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#16261E] antialiased selection:bg-[#3D6A52] selection:text-[#FAF7F2]">
        <UserProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <NotificationToast />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
