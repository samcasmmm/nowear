import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';

type Props = {
  className?: string;
};

const navLinks = [
  { href: '/men', label: 'Men' },
  { href: '/women', label: 'Women' },
  { href: '/summer-tee', label: 'Summer T-Shirt' },
  { href: '/oversized-tee', label: 'Oversized T-Shirt' },
];

function Navigation({ className }: Props) {
  return (
    <div className=''>
      <div
        className={cn(
          'sm:flex hidden items-start justify-center space-x-6 flex-row font-bold',
          className
        )}
      >
        {navLinks.map((link, index) => (
          <NavLinks
            href={link.href}
            label={link.label}
            key={index}
            className=''
          />
        ))}
      </div>
    </div>
  );
}

export default Navigation;
