import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import { Masthead, Footer, NotificationToast } from '@/components';

export const metadata: Metadata = {
  metadataBase: new URL('https://tirma.tea'),
  title: {
    default: 'TIRMA — Pure Indian tea from Upper Assam & Darjeeling',
    template: '%s — TIRMA',
  },
  description:
    'Whole-leaf tea and bold chai from Upper Assam and the misty slopes of Darjeeling, with the harvest month printed on every pack. Everyday Assam CTC, Kadak chai, highway Dhaba mix, Darjeeling delight, and soft green tea.',
  keywords: [
    'Assam tea online',
    'Darjeeling tea',
    'kadak chai online',
    'dhaba chai mix',
    'whole leaf tea',
    'everyday assam ctc',
    'buy loose leaf tea India',
  ],
  openGraph: {
    title: 'TIRMA — Pure Indian tea from Upper Assam & Darjeeling',
    description:
      'Whole-leaf tea with the harvest month on every pack. Shipped across India.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: { icon: '/logo.jpeg', apple: '/logo.jpeg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&family=Karla:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-bark antialiased">
        <UserProvider>
          <CartProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:z-[300] focus:m-4 focus:rounded-full focus:bg-garden-500 focus:px-5 focus:py-2.5 focus:text-cream"
            >
              Skip to content
            </a>
            <Masthead />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <NotificationToast />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
