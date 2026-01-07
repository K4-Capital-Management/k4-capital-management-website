import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "K4 Capital Management | Real Asset Investing",
  description: "A disciplined approach to private credit investing across the real estate capital stack.",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'K4 Capital Management',
    description: 'A disciplined approach to private credit investing across the real estate capital stack.',
    url: 'https://k4capitalmanagement.com',
    siteName: 'K4 Capital Management',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'K4 Capital Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K4 Capital Management',
    description: 'A disciplined approach to private credit investing across the real estate capital stack.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
