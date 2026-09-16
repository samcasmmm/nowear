'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { fullLooks } from '@/data/storeData';

const ShopTheFullLook: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? fullLooks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === fullLooks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Complete Outfits</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Shop The Full Look
          </h2>
          <p className="mt-1 text-xs md:text-sm text-neutral-500">
            Coordinated styling ready to wear out of the box
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous looks"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-neutral-800 shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next looks"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-neutral-800 shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Grid / Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fullLooks.map((look) => (
              <div
                key={look.id}
                className="group/card flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Outfit Image */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover/card:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-xs text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    Head to Toe
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-neutral-900 line-clamp-1">
                      {look.title}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                      <span className="text-base md:text-lg font-extrabold text-neutral-900">
                        ₹{look.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs md:text-sm text-neutral-400 line-through">
                        ₹{look.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                        {look.discount}% OFF
                      </span>
                    </div>
                  </div>

                  {look.note && (
                    <p className="mt-2 text-[11px] text-indigo-600 font-medium">
                      {look.note}
                    </p>
                  )}

                  <Link
                    href={look.href}
                    className="mt-3 w-full py-2 text-center text-xs font-bold uppercase tracking-wider rounded-lg border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-200"
                  >
                    Quick Shop
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {fullLooks.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-neutral-900'
                    : 'w-1.5 bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link
            href="/looks"
            className="inline-block px-8 py-3 rounded-lg border-2 border-neutral-900 text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-xs hover:shadow-md"
          >
            View All Looks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopTheFullLook;
