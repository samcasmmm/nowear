'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { autumnEscapes } from '@/data/storeData';

const AutumnEscapes: React.FC = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-12 md:py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Autumn Escapes
          </h2>
          <p className="mt-1 text-xs md:text-sm text-neutral-500 font-medium">
            Effortless co-ords and relaxed knits designed for the golden season
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {autumnEscapes.map((item) => {
            const isLiked = wishlist.includes(item.id);
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {item.tag && (
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-neutral-900 bg-amber-400 rounded-sm shadow-xs">
                        {item.tag}
                      </span>
                    )}
                    {item.pack && (
                      <span className="inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-black/80 rounded-sm">
                        {item.pack}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(item.id, e)}
                    aria-label="Add to wishlist"
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-700 hover:text-red-500 hover:bg-white transition-colors shadow-xs"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isLiked ? 'fill-red-500 text-red-500' : ''
                      }`}
                    />
                  </button>

                  {/* Rating Badge */}
                  {item.rating && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-neutral-800 shadow-xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      {item.reviewsCount && (
                        <span className="text-neutral-400 font-normal">
                          ({item.reviewsCount})
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    
                    <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                      <span className="text-base font-extrabold text-neutral-900">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{item.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                        {item.discount}% OFF
                      </span>
                    </div>

                    {item.note && (
                      <p className="mt-1.5 text-[11px] text-neutral-500">
                        {item.note}
                      </p>
                    )}
                  </div>

                  <button className="mt-4 w-full py-2 bg-neutral-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs">
                    Add To Cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/category/autumn-escapes"
            className="inline-block px-8 py-3 rounded-lg border-2 border-neutral-900 text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-xs hover:shadow-md"
          >
            View All Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AutumnEscapes;
