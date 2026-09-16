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
  ArrowUpRight,
  Flame,
  Layers,
} from 'lucide-react';
import { autumnEscapes, Product } from '@/data/storeData';

const availableSizes = ['S', 'M', 'L', 'XL'];

const itemColorVariants: Record<string, string[]> = {
  'olive-coord': ['#4a533c', '#d5cdbe', '#1f2421'],
  'jogger-pack': ['#1a1a1a', '#e3ded5', '#555850'],
  'lavender-coord': ['#7a6f8a', '#e6e1e8', '#2d2836'],
  'oatmeal-knit': ['#d9cebe', '#736b5e', '#1c1b18'],
};

export const AutumnEscapes: React.FC = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [activeColors, setActiveColors] = useState<Record<string, number>>({});

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
    const size = selectedSizes[product.id] || 'M';
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-900 text-white selection:bg-[#f6b800] selection:text-black relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 bg-[#f6b800] inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-amber-400">
                // SEASONAL CAPSULE DROP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
              Autumn Escapes
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-medium max-w-xl">
              Effortless co-ords and relaxed knits designed for the golden season with luxury waffle textures and heavy drape.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-800 text-amber-300 font-mono text-xs font-bold border border-neutral-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIMITED QUANTITY RUN</span>
            </span>
          </div>
        </div>

        {/* 4-Card Luxury Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {autumnEscapes.map((item) => {
            const isLiked = wishlist.includes(item.id);
            const isAdded = addedItems[item.id];
            const currentSize = selectedSizes[item.id] || 'M';
            const colors = itemColorVariants[item.id] || ['#4a533c', '#d5cdbe'];
            const activeColor = activeColors[item.id] || 0;

            return (
              <div
                key={item.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-[#f6b800] shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* 1. IMAGE CONTAINER */}
                <Link
                  href={item.href}
                  className="relative aspect-3/4 w-full overflow-hidden bg-neutral-900 block"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-80"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {item.tag && (
                      <span className="inline-block px-2.5 py-1 text-[9px] font-mono font-black uppercase tracking-wider text-black bg-[#f6b800] rounded-sm shadow-sm">
                        {item.tag}
                      </span>
                    )}
                    {item.pack && (
                      <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-black/80 rounded-sm border border-white/20">
                        {item.pack}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(item.id, e)}
                    aria-label="Add to wishlist"
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-red-500 hover:bg-black transition-all shadow-xs active:scale-90 cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform ${
                        isLiked ? 'fill-red-500 text-red-500 scale-110' : ''
                      }`}
                    />
                  </button>

                  {/* Rating Pill on Image */}
                  {item.rating && (
                    <div className="absolute bottom-3 left-3 z-10 bg-black/80 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-mono font-bold text-white border border-white/10 shadow-sm">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      {item.reviewsCount && (
                        <span className="text-neutral-400 font-normal">
                          ({item.reviewsCount})
                        </span>
                      )}
                    </div>
                  )}

                  {/* QUICK SIZE SELECTOR SLIDE-UP */}
                  <div className="hidden sm:flex absolute bottom-3 right-3 left-3 z-20 flex-col gap-1.5 p-2 rounded-xl bg-neutral-900/95 backdrop-blur-md border border-neutral-700 shadow-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between text-[9px] font-mono font-bold uppercase text-neutral-400 px-1">
                      <span>QUICK SIZE:</span>
                      <span className="text-amber-300 font-bold">RELAXED FIT</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={(e) => handleSelectSize(item.id, size, e)}
                          className={`py-1 text-[10px] font-mono font-black uppercase rounded border transition-all cursor-pointer ${
                            currentSize === size
                              ? 'bg-[#f6b800] text-black border-[#f6b800] shadow-sm'
                              : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700 hover:border-white'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* 2. CARD CONTENT */}
                <div className="p-4 flex flex-col justify-between grow space-y-3 bg-neutral-950">
                  <div>
                    {/* Swatches & Note */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1">
                        {colors.map((c, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveColors((prev) => ({ ...prev, [item.id]: cIdx }));
                            }}
                            aria-label={`Select color ${cIdx + 1}`}
                            className={`w-3 h-3 rounded-full border transition-all cursor-pointer ${
                              activeColor === cIdx
                                ? 'scale-125 border-white ring-1 ring-amber-400'
                                : 'border-neutral-700 hover:scale-110'
                            }`}
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>

                      {item.note && (
                        <span className="text-[10px] font-mono text-neutral-400 line-clamp-1">
                          {item.note}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <Link href={item.href} className="block group/title">
                      <h3 className="text-sm font-black text-white group-hover/title:text-amber-300 transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Price Breakdown */}
                    <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                      <span className="text-base font-black font-mono text-white">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono line-through">
                        ₹{item.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-black font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-1.5 py-0.2 rounded-sm">
                        {item.discount}% OFF
                      </span>
                    </div>
                  </div>

                  {/* Add To Cart CTA */}
                  <button
                    onClick={(e) => handleQuickAdd(item, e)}
                    className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 ${
                      isAdded
                        ? 'bg-emerald-500 text-black'
                        : 'bg-white hover:bg-[#f6b800] text-black font-black'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>ADDED ({currentSize})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>CLAIM SET ({currentSize})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Lookbook Ribbon */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-400 block">
              // COMPLETE CAPSULE ARCHIVE
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              The Golden Season Color Palette
            </h3>
            <p className="text-xs text-neutral-400 max-w-lg">
              Featuring Washed Olive, Golden Sand, Slate Charcoal, and Oat Heather knitwear.
            </p>
          </div>

          <Link
            href="/category/autumn-escapes"
            className="px-8 py-3.5 rounded-xl bg-[#f6b800] hover:bg-amber-300 text-black text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            <span>VIEW ALL AUTUMN FITS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AutumnEscapes;
