import type { Metadata } from 'next';
import { Nav } from '@/components/nav/Nav';
import { Providers } from './providers';
import { Footer } from '@/components/footer/Footer';
import { Toaster } from 'react-hot-toast';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'WebDevKalo',
    template: '%s | WebDevKalo',
  },
  description: 'Kaloyan Georgiev (aka. webdevkalo). A web developer dedicated to building web apps and sharing articles on IT related topics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>
          <Nav />
          <div className="min-h-svh md:min-h-screen">
            <main>{children}</main>
            <Toaster />
          </div>
          <div className="h-28" aria-hidden="true" />
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
