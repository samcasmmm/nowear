'use client';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Baby, Search, ShoppingBag, ShoppingBasket } from 'lucide-react';
import { motion } from 'framer-motion';
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

type Props = {};

const navLinks = [
  { href: '/men', label: 'Men' },
  { href: '/women', label: 'Women' },
  { href: '/summer-tee', label: 'Summer T-Shirt' },
  { href: '/oversized-tee', label: 'Oversized T-Shirt' },
];

const BrandLogo = () => (
  <Link href={'/'}>
    <Image
      src={'/images/logo_light.png'}
      alt='Logo'
      width={120}
      height={100}
      className='cursor-pointer'
    />
  </Link>
);

type NavLinksProps = { href: string; label: string };
const NavLinks: React.FC<NavLinksProps> = ({ href, label }) => (
  <Link
    href={href}
    className='hover:opacity-100 opacity-60 transition-opacity duration-300'
  >
    {label}
  </Link>
);

const LeftPane = () => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const SearchBar: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      'border flex items-center justify-center flex-row p-2 rounded-sm',
      className
    )}
  >
    <Icon name='Search' />
    <input type='text' className=' outline-none pl-2 w-full h-full' />
  </div>
);

const Navbar = (props: Props) => {
  return (
    <Sheet>
      <div className='border-b border-b-gray-100 flex items-center justify-center px-3'>
        <div className='fluid flex items-center justify-between py-5'>
          <div className='flex items-center justify-between md:justify-start p-2 gap-10 font-bold w-4/6'>
            <SheetTrigger className='inline-block sm:hidden'>Open</SheetTrigger>
            <BrandLogo />
            <div className='hidden sm:flex items-center justify-center space-x-4'>
              {navLinks.map((link, index) => (
                <NavLinks href={link.href} label={link.label} key={index} />
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center gap-4 flex-row'>
            <SearchBar className='hidden md:flex' />
            <Icon
              name='User'
              className='hover:opacity-100 opacity-60 transition-opacity duration-300'
            />
            <Icon
              name='ShoppingBag'
              className='hover:opacity-100 opacity-60 transition-opacity duration-300'
            />
          </div>
        </div>
      </div>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
