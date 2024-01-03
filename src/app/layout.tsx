import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar  ";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Fln Dev",
    description: "Web Dev Content",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Navbar />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
