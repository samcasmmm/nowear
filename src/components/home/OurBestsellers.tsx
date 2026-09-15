'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { bestsellers } from '@/data/storeData';

const categories = ['All', 'T-Shirts', 'Joggers', 'Shorts', 'Polos'];

const OurBestsellers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filteredProducts =
    activeCategory === 'All'
      ? bestsellers
      : bestsellers.filter((p) => p.category === activeCategory);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Our Bestsellers
          </h2>
          <p className="mt-1 text-xs md:text-sm text-neutral-500 font-medium">
            Handpicked customer favorites that define modern comfort
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => {
            const isLiked = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                    {product.tag && (
                      <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-neutral-900 bg-amber-400 rounded-sm">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Wishlist"
                    className="absolute top-2.5 right-2.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-700 hover:text-red-500 hover:bg-white transition-colors shadow-xs"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isLiked ? 'fill-red-500 text-red-500' : ''
                      }`}
                    />
                  </button>

                  {/* Rating Badge */}
                  {product.rating && (
                    <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-neutral-800 shadow-xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-3.5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="mt-1.5 flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-extrabold text-neutral-900">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] sm:text-xs text-neutral-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded-xs">
                        {product.discount}% OFF
                      </span>
                    </div>
                  </div>

                  <button className="mt-3 w-full py-1.5 sm:py-2 bg-neutral-900 text-white rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors">
                    <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/bestsellers"
            className="inline-block px-8 py-3 rounded-lg border-2 border-neutral-900 text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-xs hover:shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBestsellers;
