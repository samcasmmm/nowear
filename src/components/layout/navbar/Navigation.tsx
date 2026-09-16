'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavigationProps {
  activeMegaMenu: string | null;
  setActiveMegaMenu: (key: string | null) => void;
  className?: string;
}

export const navItems = [
  { key: 'men', label: 'Men', href: '/category/oversized-tshirts', hasMega: true },
  { key: 'women', label: 'Women', href: '/category/coord-sets', hasMega: true },
  { key: 'collections', label: 'Collections', href: '/category/autumn-escapes', hasMega: true },
  { key: 'drops', label: 'New Drops', href: '/category/bestsellers', hasMega: true, badge: 'HOT' },
  { key: 'lookbook', label: 'Lookbook', href: '/lookbook', hasMega: false },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeMegaMenu,
  setActiveMegaMenu,
  className,
}) => {
  return (
    <nav className={cn('hidden md:flex items-center gap-1 lg:gap-2', className)}>
      {navItems.map((item) => {
        const isActive = activeMegaMenu === item.key;
        return (
          <div
            key={item.key}
            className="relative py-2"
            onMouseEnter={() => {
              if (item.hasMega) setActiveMegaMenu(item.key);
              else setActiveMegaMenu(null);
            }}
          >
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase tracking-widest font-black transition-all duration-200 select-none',
                isActive
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              )}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[9px] font-mono font-black text-black bg-[#f6b800] px-1.5 py-0.2 rounded-xs">
                  {item.badge}
                </span>
              )}
              {item.hasMega && (
                <ChevronDown
                  className={cn(
                    'w-3 h-3 transition-transform duration-200',
                    isActive ? 'rotate-180 text-amber-300' : 'text-neutral-400'
                  )}
                />
              )}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
