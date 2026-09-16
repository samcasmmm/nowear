'use client';

import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icon } from '@/components/ui/Icon';
import NavLinks from './NavLinks';
import Navigation from './Navigation';

export interface NavbarProps {}

const navLinks = [
  { href: '/men', label: 'Men' },
  { href: '/women', label: 'Women' },
  { href: '/summer-tee', label: 'Summer T-Shirt' },
  { href: '/oversized-tee', label: 'Oversized T-Shirt' },
];

const BrandLogo = () => (
  <Link href="/">
    <Image
      src="/images/logo_dark.png"
      alt="NoWear Logo"
      width={120}
      height={36}
      className="cursor-pointer object-contain"
    />
  </Link>
);

const SearchBar: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      'border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-400 focus-within:bg-white focus-within:border-neutral-900 flex items-center justify-center flex-row px-3 py-1.5 rounded-full transition-all duration-200 w-48 lg:w-64',
      className
    )}
  >
    <Search className="w-4 h-4 text-neutral-400" />
    <input
      type="text"
      placeholder="Search essentials..."
      className="outline-none pl-2 w-full text-xs text-neutral-900 bg-transparent placeholder-neutral-400"
    />
  </div>
);

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Sheet>
      <header className="border-b border-neutral-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-40">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-start gap-6 lg:gap-8 font-bold">
            <SheetTrigger className="inline-block sm:hidden cursor-pointer text-neutral-800 hover:text-black">
              <Icon name="Menu" />
            </SheetTrigger>
            <BrandLogo />
            <Navigation />
          </div>
          <div className="flex items-center justify-center gap-3.5 flex-row">
            <SearchBar className="hidden md:flex" />
            <button
              aria-label="User profile"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
            >
              <Icon name="User" />
            </button>
            <button
              aria-label="Shopping bag"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-neutral-900 rounded-full" />
            </button>
          </div>
        </div>
      </header>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <BrandLogo />
          </SheetTitle>
          <SheetDescription>
            <div className="flex sm:hidden items-start justify-center space-y-6 flex-col font-bold mt-4">
              {navLinks.map((link, index) => (
                <NavLinks
                  href={link.href}
                  label={link.label}
                  key={index}
                  className="border-b border-neutral-200 w-full text-left text-neutral-800 hover:text-neutral-950 py-2.5"
                />
              ))}
              <div className="flex items-start justify-between w-full pt-4 border-t border-neutral-200 text-xs text-neutral-600">
                <div className="flex flex-col space-y-3">
                  <Link href="/track-order" className="hover:text-neutral-950">
                    Track Order
                  </Link>
                  <Link href="/reviews" className="hover:text-neutral-950">
                    Customer Reviews
                  </Link>
                </div>
                <div className="flex flex-col space-y-3">
                  <Link href="/support" className="hover:text-neutral-950">
                    Help & Support
                  </Link>
                  <Link href="/returns" className="hover:text-neutral-950">
                    Return & Exchange
                  </Link>
                  <Link href="/contact" className="hover:text-neutral-950">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
