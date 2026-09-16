import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NWear - Wear For Everywhere',
  description: 'NWear - Modern Streetwear, Heavyweight Knits & Minimal Essentials',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
