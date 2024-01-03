import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/navbar/Navbar  ';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Fln Dev',
    description: 'Web Dev Content',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Providers>
                    {/* <div className="container mx-auto px-4">
                    </div> */}
                    <Nav />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
