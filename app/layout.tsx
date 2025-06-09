import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bazaaro - Find What You Need, Right Now',
  description: 'Connect instantly with local stores that have exactly what you\'re looking for. Search, compare prices, and get directions — all in real-time.',
  keywords: 'local shopping, store finder, price comparison, mobile app, local business',
  authors: [{ name: 'Bazaaro Team' }],
  openGraph: {
    title: 'Bazaaro - Find What You Need, Right Now',
    description: 'Connect instantly with local stores that have exactly what you\'re looking for.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bazaaro - Find What You Need, Right Now',
    description: 'Connect instantly with local stores that have exactly what you\'re looking for.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}