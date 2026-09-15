'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { shopCategories } from '@/data/storeData';

const ShopByCategory: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
            Shop By Categories
          </h2>
          <p className="mt-1 text-xs md:text-sm text-neutral-500">
            Find exactly what your wardrobe needs
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {shopCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white shadow-xs border border-neutral-200/80 group-hover:border-neutral-900 group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100px, 150px"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <span className="mt-2.5 text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-black transition-colors line-clamp-1">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
