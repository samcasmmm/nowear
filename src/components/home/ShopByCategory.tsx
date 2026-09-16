'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Flame, Layers } from 'lucide-react';
import { shopCategories, Category } from '@/data/storeData';

// Extended category metadata with item count and trending tags
const categoryMeta: Record<string, { count: string; tag?: string; group: 'tops' | 'bottoms' | 'sets' }> = {
  cargo: { count: '18 Fits', tag: 'HOT', group: 'bottoms' },
  polos: { count: '12 Fits', group: 'tops' },
  'casual-shirts': { count: '24 Fits', tag: 'NEW', group: 'tops' },
  'coord-sets': { count: '16 Fits', tag: 'BESTSELLER', group: 'sets' },
  'oversized-tee': { count: '32 Fits', tag: '280 GSM', group: 'tops' },
  tshirts: { count: '28 Fits', group: 'tops' },
  'joggers-cat': { count: '14 Fits', group: 'bottoms' },
  jeans: { count: '10 Fits', group: 'bottoms' },
  shorts: { count: '16 Fits', group: 'bottoms' },
  'oversized-shirts': { count: '12 Fits', group: 'tops' },
  'printed-tees': { count: '20 Fits', tag: 'DROPS', group: 'tops' },
  'linen-pants': { count: '8 Fits', group: 'bottoms' },
};

const filterTabs = [
  { id: 'all', label: 'All Silhouettes' },
  { id: 'tops', label: 'Tops & Shirts' },
  { id: 'bottoms', label: 'Bottoms & Pants' },
  { id: 'sets', label: 'Co-ord Sets' },
];

export const ShopByCategory: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState('all');

  const filteredCategories =
    activeGroup === 'all'
      ? shopCategories
      : shopCategories.filter((cat) => {
          const meta = categoryMeta[cat.id];
          return meta?.group === activeGroup;
        });

  return (
    <section className="w-full py-14 md:py-20 bg-white border-b border-neutral-200/80 selection:bg-[#f6b800] selection:text-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-neutral-500">
                // WARDROBE DIRECTORY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase text-neutral-950">
              Shop By Categories
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Find exactly what your wardrobe needs. Curated streetwear essentials across 12 signature silhouettes.
            </p>
          </div>

          {/* Group Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGroup(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  activeGroup === tab.id
                    ? 'bg-neutral-950 text-[#f6b800] shadow-md border border-neutral-900'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. CATEGORY CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredCategories.map((category) => {
            const meta = categoryMeta[category.id] || { count: '10+ Fits', group: 'tops' };

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-400 p-3 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Thumbnail Image Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-200 mb-3">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Optional Tag Badge */}
                  {meta.tag && (
                    <div className="absolute top-2 left-2 z-10">
                      <span
                        className={`text-[8px] font-mono font-black uppercase px-1.5 py-0.5 rounded shadow-xs ${
                          meta.tag === 'HOT' || meta.tag === 'BESTSELLER'
                            ? 'bg-red-500 text-white'
                            : meta.tag === '280 GSM'
                            ? 'bg-[#f6b800] text-black'
                            : 'bg-black text-white'
                        }`}
                      >
                        {meta.tag}
                      </span>
                    </div>
                  )}

                  {/* Corner Arrow on Hover */}
                  <div className="absolute bottom-2 right-2 z-10 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Category Info */}
                <div className="flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-neutral-950 uppercase tracking-tight group-hover:text-blue-900 transition-colors line-clamp-1">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono font-medium text-neutral-500 mt-0.5 block">
                      {meta.count}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 3. POPULAR HASHTAG DISCOVERY MARQUEE */}
        <div className="mt-12 p-4 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-mono font-black uppercase tracking-wider text-neutral-500 text-[10px]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>POPULAR SILHOUETTE TAGS:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              '#OVERSIZED-TEES',
              '#PARACHUTE-CARGOS',
              '#WAFFLE-CO-ORDS',
              '#FRENCH-TERRY',
              '#RESORT-LINEN',
              '#280GSM-HEAVYWEIGHT',
            ].map((tag, idx) => (
              <Link
                key={idx}
                href="/category/oversized-tshirts"
                className="px-2.5 py-1 rounded-md bg-white border border-neutral-300 font-mono text-[10px] font-bold text-neutral-800 hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;
