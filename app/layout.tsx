import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import { Navbar, Footer, NotificationToast } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TIRMA AGRO TECH | Technology Rooted In Nature | Organic Tea & Matcha',
  description:
    'Single-estate certified organic whole leaf teas, stone-ground ceremonial matcha, and botanical tisanes. Precision agro-tech cultivation meeting generational artisan craftsmanship.',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-parchment-50 text-tea-950 antialiased selection:bg-gold-400 selection:text-tea-950">
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
