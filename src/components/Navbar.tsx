'use client';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Baby, Search, ShoppingBag, ShoppingBasket } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

const NavLinks: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <Link
    href={href}
    className='hover:opacity-100 opacity-60 transition-opacity duration-300'
  >
    {label}
  </Link>
);

const SearchBar: React.FC = () => (
  <div className='border flex items-center justify-center flex-row p-2 rounded-sm'>
    <Icon name='Search' />
    <input type='text' className=' outline-none pl-2 w-full h-full' />
  </div>
);

const Navbar = (props: Props) => {
  return (
    <div className='border-b border-b-gray-100 flex items-center justify-center'>
      <div className='fluid flex items-center justify-between py-4'>
        <div className='flex items-center justify-start p-2 gap-10 font-bold'>
          <BrandLogo />
          {navLinks.map((link, index) => (
            <NavLinks href={link.href} label={link.label} key={index} />
          ))}
        </div>
        <div className='flex items-center justify-center gap-4 flex-row'>
          <SearchBar />
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
  );
};

export default Navbar;
