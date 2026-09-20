import type { Metadata } from 'next';
import { Fraunces, Karla } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import { Masthead, Footer, NotificationToast } from '@/components';

// Fraunces has optical sizing and a "soft" axis — it reads warm and slightly
// handmade, which is the whole point. Karla is a humanist sans with a bit of
// character rather than another neutral grotesque.
// Variable font: `axes` requires the weight axis to stay variable, so no
// explicit weight list here. SOFT rounds the terminals and WONK swaps in the
// cursive-ish alternates — together they are what stop it reading as a stiff
// editorial serif.
const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tirma.tea'),
  title: {
    default: 'TIRMA — Hill-grown tea from Assam & Kashmir',
    template: '%s — TIRMA',
  },
  description:
    'Whole-leaf tea from the gardens of Assam and the Kashmir valley, with the harvest month printed on every pack. Assam black for chai, first-flush green, Kashmiri kahwa and caffeine-free blue pea.',
  keywords: [
    'Assam tea online',
    'Kashmiri kahwa',
    'blue pea flower tea',
    'butterfly pea tea India',
    'whole leaf tea',
    'masala chai whole spice',
    'buy loose leaf tea India',
  ],
  openGraph: {
    title: 'TIRMA — Hill-grown tea from Assam & Kashmir',
    description:
      'Whole-leaf tea with the harvest month on every pack. Shipped across India.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: { icon: '/logo.jpeg', apple: '/logo.jpeg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
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
