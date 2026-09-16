'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Flame, Zap } from 'lucide-react';

export interface MegaMenuItem {
  title: string;
  href: string;
  badge?: string;
}

export interface MegaMenuColumn {
  heading: string;
  items: MegaMenuItem[];
}

export interface MegaMenuSpotlight {
  tag: string;
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
}

export interface MegaMenuCategory {
  id: string;
  columns: MegaMenuColumn[];
  spotlight: MegaMenuSpotlight;
}

export const megaMenuData: Record<string, MegaMenuCategory> = {
  men: {
    id: 'men',
    columns: [
      {
        heading: 'TOPS & TEES',
        items: [
          { title: 'Heavyweight Boxy Tees', href: '/category/oversized-tshirts', badge: '280 GSM' },
          { title: 'Graphic Drop Tees', href: '/category/t-shirts' },
          { title: 'Resort & Textured Shirts', href: '/category/casual-shirts', badge: 'NEW' },
          { title: 'Minimalist Polos', href: '/category/polos' },
          { title: 'French Terry Hoodies', href: '/category/hoodies' },
          { title: 'Acid Wash Sweatshirts', href: '/category/sweatshirts' },
        ],
      },
      {
        heading: 'BOTTOMS & SETS',
        items: [
          { title: 'Parachute Cargo Pants', href: '/category/cargos', badge: 'HOT' },
          { title: 'Relaxed Street Joggers', href: '/category/joggers' },
          { title: 'Waffle Knit Co-ord Sets', href: '/category/coord-sets' },
          { title: 'Wide-Leg Washed Jeans', href: '/category/jeans' },
          { title: 'Heavy Sweat Shorts', href: '/category/shorts' },
        ],
      },
    ],
    spotlight: {
      tag: 'EDITORIAL LOOKBOOK',
      title: 'DROP 05: SHADOW ARCHIVE',
      description: 'Heavyweight silhouettes crafted from 280 GSM combed cotton. Built for the streets.',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      href: '/category/oversized-tshirts',
      cta: 'Explore The Drop',
    },
  },
  women: {
    id: 'women',
    columns: [
      {
        heading: 'STREET SILHOUETTES',
        items: [
          { title: 'Boxy Crop Tees', href: '/category/t-shirts', badge: 'TRENDING' },
          { title: 'Oversized Boyfriend Fits', href: '/category/oversized-tshirts' },
          { title: 'Waffle Knit Lounge Sets', href: '/category/coord-sets', badge: 'HOT' },
          { title: 'Parachute Pants & Cargos', href: '/category/cargos' },
          { title: 'Luxury Terry Hoodies', href: '/category/hoodies' },
        ],
      },
      {
        heading: 'CURATED EDITS',
        items: [
          { title: 'Autumn Escapes Edit', href: '/category/autumn-escapes' },
          { title: 'Minimalist Monochrome', href: '/category/basics' },
          { title: 'Resort & Sunset Fits', href: '/category/casual-shirts' },
          { title: 'Everyday Essentials', href: '/category/basics' },
        ],
      },
    ],
    spotlight: {
      tag: 'SEASONAL SPOTLIGHT',
      title: 'AUTUMN ESCAPES CO-ORDS',
      description: 'Relaxed luxury knits and earthy tones made for effortless layering.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
      href: '/category/autumn-escapes',
      cta: 'View Collection',
    },
  },
  collections: {
    id: 'collections',
    columns: [
      {
        heading: 'CURATED ARCHIVES',
        items: [
          { title: '280 GSM Heavyweight Edition', href: '/category/oversized-tshirts', badge: 'SIGNATURE' },
          { title: 'Midnight Acid Wash Drop', href: '/category/hoodies', badge: 'LIMITED' },
          { title: 'Autumn Escapes Lookbook', href: '/category/autumn-escapes' },
          { title: 'Monochrome Street Vault', href: '/category/basics' },
          { title: 'Luxury Co-ord Sets', href: '/category/coord-sets' },
        ],
      },
      {
        heading: 'BY FIT & FABRIC',
        items: [
          { title: 'Boxy & Drop Shoulder Fits', href: '/category/oversized-tshirts' },
          { title: '100% Combed Heavy Cotton', href: '/category/basics' },
          { title: 'French Terry Outerwear', href: '/category/hoodies' },
          { title: 'Structured Cargo Silhouettes', href: '/category/cargos' },
        ],
      },
    ],
    spotlight: {
      tag: 'SIGNATURE FABRIC',
      title: 'THE 280 GSM STANDARD',
      description: 'Zero see-through, custom high-density knit, engineered collar rib that never sags.',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
      href: '/category/oversized-tshirts',
      cta: 'Shop Heavyweight',
    },
  },
  drops: {
    id: 'drops',
    columns: [
      {
        heading: 'LATEST RELEASES',
        items: [
          { title: 'Drop 06: Acid Washed Knits', href: '/category/hoodies', badge: 'JUST IN' },
          { title: 'Drop 05: Raw Earth Co-ords', href: '/category/coord-sets' },
          { title: 'Drop 04: Heavyweight Monochrome', href: '/category/oversized-tshirts' },
          { title: 'The Secret Archive Restock', href: '/category/bestsellers', badge: 'RESTOCKED' },
        ],
      },
      {
        heading: 'CAMPAIGNS',
        items: [
          { title: 'Runway Lookbook 2026', href: '/lookbook' },
          { title: 'Creator Squad Gallery', href: '/reviews' },
          { title: 'Behind The Stitch Manifesto', href: '/about' },
        ],
      },
    ],
    spotlight: {
      tag: 'NEW THIS WEEK',
      title: 'DROP 06: ACID WASH RESTOCK',
      description: 'Individually dyed streetwear essentials with raw hems and vintage undertones.',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
      href: '/category/hoodies',
      cta: 'Explore Drop 06',
    },
  },
};

interface MegaMenuProps {
  activeKey: string;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeKey, onClose }) => {
  const data = megaMenuData[activeKey];
  if (!data) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-neutral-200/90 shadow-2xl py-8 px-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2 z-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-12 gap-8 items-start">
        {/* Navigation Columns (8 cols) */}
        <div className="col-span-7 lg:col-span-8 grid grid-cols-2 gap-8 pr-6 border-r border-neutral-200/80">
          {data.columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neutral-900 inline-block" />
                <h4 className="text-[11px] font-mono font-black uppercase tracking-widest text-neutral-400">
                  {col.heading}
                </h4>
              </div>
              <ul className="space-y-2.5">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-xs font-bold text-neutral-800 hover:text-black transition-all"
                    >
                      <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-sm tracking-wider ${
                            item.badge === 'HOT' || item.badge === 'LIMITED'
                              ? 'bg-red-500 text-white'
                              : item.badge === 'NEW' || item.badge === 'JUST IN'
                              ? 'bg-[#f6b800] text-black'
                              : 'bg-neutral-100 text-neutral-800'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual Spotlight Card (4-5 cols) */}
        <div className="col-span-5 lg:col-span-4">
          <Link
            href={data.spotlight.href}
            onClick={onClose}
            className="group block relative rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-900 text-white shadow-md hover:shadow-xl transition-all"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={data.spotlight.image}
                alt={data.spotlight.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-85 group-hover:brightness-75"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-amber-300 font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>{data.spotlight.tag}</span>
              </div>
            </div>

            <div className="p-4 bg-neutral-950/95 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  {data.spotlight.title}
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 font-normal leading-relaxed line-clamp-2">
                  {data.spotlight.description}
                </p>
              </div>

              <div className="mt-3.5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                <span className="uppercase tracking-wider font-mono text-[11px]">{data.spotlight.cta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
