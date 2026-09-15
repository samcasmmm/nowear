'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { exploreCards } from '@/data/storeData';

const ExploreRange: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Explore Range
          </h2>
          <p className="mt-1 text-xs md:text-sm text-neutral-500 font-medium">
            Discover tailored silhouettes crafted with high-grade utility
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:translate-x-1 transition-transform">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreRange;
