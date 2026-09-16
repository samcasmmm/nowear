'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface NavLinksProps {
  href: string;
  label: string;
  badge?: string;
  className?: string;
  onClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  href,
  label,
  badge,
  className,
  onClick,
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      'flex items-center justify-between text-sm uppercase tracking-wider font-black text-neutral-800 hover:text-black transition-colors duration-200 py-3 border-b border-neutral-100',
      className
    )}
  >
    <span>{label}</span>
    {badge && (
      <span className="text-[9px] font-mono font-black uppercase text-black bg-[#f6b800] px-2 py-0.5 rounded-sm">
        {badge}
      </span>
    )}
  </Link>
);

export default NavLinks;
