import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import local from 'next/font/local';
import './globals.css';

const inter = Montserrat({ weight: ['200'], subsets: ['latin'] });

const deacon = local({
  src: [
    {
      path: '../../public/fonts/Family.otf',
      weight: '18',
    },
  ],
  variable: '--font-deacon',
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
    <html lang='en'>
      <link rel='icon' href='/images/favicon.png' sizes='any' />
      <body className={deacon.variable}>{children}</body>
    </html>
  );
}
