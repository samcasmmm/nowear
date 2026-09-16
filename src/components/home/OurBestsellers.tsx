'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Heart,
  ShoppingBag,
  Check,
  Sparkles,
  Flame,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import { bestsellers, Product } from '@/data/storeData';

const categories = [
  { id: 'All', label: 'All Fits' },
  { id: 'T-Shirts', label: 'Heavy Tees' },
  { id: 'Joggers', label: 'Cargo & Pants' },
  { id: 'Shorts', label: 'Shorts' },
  { id: 'Polos', label: 'Knit Polos' },
];

const availableSizes = ['S', 'M', 'L', 'XL', 'XXL'];

// Color palette options per product for visual realism
const productColors: Record<string, string[]> = {
  'aero-polo': ['#1b2434', '#dfdcd5', '#4a5b48'],
  'travel-jogger': ['#3b4238', '#1c1c1e', '#a29584'],
  'mount-fuji-tee': ['#222222', '#eae6df', '#27384a'],
  'transit-shorts': ['#2e3328', '#18181b', '#9c9182'],
  'club-heavyweight': ['#171717', '#dcd8cf', '#382f2d'],
  'minimalist-navy-tee': ['#1a243a', '#171717', '#f2ede4'],
};

export const OurBestsellers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [activeColorIdx, setActiveColorIdx] = useState<Record<string, number>>({});

  const filteredProducts =
    activeCategory === 'All'
      ? bestsellers
      : bestsellers.filter((p) => p.category === activeCategory);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectSize = (productId: string, size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const size = selectedSizes[product.id] || 'L';
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="w-full py-14 md:py-20 bg-neutral-50/60 border-y border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-neutral-500">
                // VERIFIED ARCHIVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase text-neutral-950">
              Our Bestsellers
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Handpicked customer favorites engineered with 280 GSM heavyweight cotton and all-day ease.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat.id === 'All'
                  ? bestsellers.length
                  : bestsellers.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-sm ${
                      activeCategory === cat.id
                        ? 'bg-neutral-800 text-amber-300'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const isLiked = wishlist.includes(product.id);
            const isAdded = addedItems[product.id];
            const currentSize = selectedSizes[product.id] || 'L';
            const colors = productColors[product.id] || ['#1c1c1e', '#e5e1d8'];
            const activeColor = activeColorIdx[product.id] || 0;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-neutral-200/90 shadow-2xs hover:shadow-2xl hover:border-neutral-400 transition-all duration-300"
              >
                {/* 1. PRODUCT IMAGE CONTAINER */}
                <Link
                  href={product.href}
                  className="relative aspect-3/4 w-full overflow-hidden bg-neutral-100 block"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Badges (Left) */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
                    {product.tag && (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 text-[9px] font-mono font-black uppercase tracking-wider rounded-md shadow-xs ${
                          product.tag === 'TOP RATED' || product.tag === 'HOT'
                            ? 'bg-red-500 text-white'
                            : product.tag === 'OVERSIZED' || product.tag === 'HEAVYWEIGHT'
                            ? 'bg-[#f6b800] text-black'
                            : 'bg-black text-white'
                        }`}
                      >
                        {product.tag === 'HOT' && <Flame className="w-2.5 h-2.5" />}
                        {product.tag === 'HEAVYWEIGHT' && <Zap className="w-2.5 h-2.5" />}
                        <span>{product.tag}</span>
                      </span>
                    )}
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[8px] font-mono font-bold uppercase bg-white/90 text-neutral-800 rounded-md backdrop-blur-xs shadow-2xs">
                      280 GSM
                    </span>
                  </div>

                  {/* Wishlist Button (Top Right) */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Add to wishlist"
                    className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-700 hover:text-red-500 hover:bg-white transition-all shadow-xs active:scale-90 cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform ${
                        isLiked ? 'fill-red-500 text-red-500 scale-110' : ''
                      }`}
                    />
                  </button>

                  {/* Rating Pill (Bottom Left on Image) */}
                  {product.rating && (
                    <div className="absolute bottom-2.5 left-2.5 z-10 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold text-neutral-900 shadow-2xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="font-mono">{product.rating}</span>
                      <span className="text-neutral-400 text-[9px]">(1.2k)</span>
                    </div>
                  )}

                  {/* QUICK ADD SIZE SELECTOR (Slide-up on Desktop Hover) */}
                  <div className="hidden sm:flex absolute bottom-2.5 right-2.5 left-2.5 z-20 flex-col gap-1.5 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-neutral-500 px-1">
                      <span>SELECT SIZE:</span>
                      <span className="text-black font-black font-mono">FITS TRUE TO SIZE</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={(e) => handleSelectSize(product.id, size, e)}
                          className={`py-1 text-[10px] font-mono font-black uppercase rounded border transition-all cursor-pointer ${
                            currentSize === size
                              ? 'bg-neutral-950 text-[#f6b800] border-neutral-900 shadow-xs'
                              : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* 2. PRODUCT DETAILS */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between grow space-y-3">
                  <div>
                    {/* Category & Color Swatches */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                        {product.category}
                      </span>
                      {/* Color Dots */}
                      <div className="flex items-center gap-1">
                        {colors.map((c, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveColorIdx((prev) => ({ ...prev, [product.id]: cIdx }));
                            }}
                            aria-label={`Select color variant ${cIdx + 1}`}
                            className={`w-3 h-3 rounded-full border transition-all cursor-pointer ${
                              activeColor === cIdx
                                ? 'scale-125 border-neutral-900 ring-2 ring-[#f6b800]'
                                : 'border-neutral-300 hover:scale-110'
                            }`}
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Product Name */}
                    <Link href={product.href} className="block group/title">
                      <h3 className="text-xs sm:text-sm font-black text-neutral-950 group-hover/title:text-blue-900 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Price Breakdown */}
                    <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-black font-mono text-neutral-950">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-sm">
                        {product.discount}% OFF
                      </span>
                    </div>
                  </div>

                  {/* 3. QUICK ADD TO CART ACTION BUTTON */}
                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs cursor-pointer active:scale-95 ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-neutral-900 hover:bg-black text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>ADDED ({currentSize})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-neutral-300" />
                        <span>ADD TO BAG ({currentSize})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Collection Banner CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 font-mono text-[10px] font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE COMPLETE 2026 ARCHIVE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              Looking For More Streetwear Silhouettes?
            </h3>
            <p className="text-xs text-neutral-400 font-normal">
              Explore 120+ boxy tees, parachute cargos, and luxury heavy knits.
            </p>
          </div>

          <Link
            href="/category/oversized-tshirts"
            className="px-8 py-3.5 rounded-xl bg-[#f6b800] hover:bg-amber-300 text-black text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            <span>VIEW ALL 120+ FITS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OurBestsellers;
