'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { moodCategories } from '@/data/storeData';

const MatchTheMood: React.FC = () => {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Match The Mood
          </h2>
          <p className="mt-2 text-xs md:text-sm text-neutral-500 font-medium tracking-widest uppercase">
            Curated fits engineered for every moment
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {moodCategories.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-100 shadow-xs hover:shadow-xl transition-all duration-500 ease-out"
            >
              <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/40 group-hover:from-black/80 transition-colors duration-500" />
                
                {/* Mood Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full uppercase border border-white/30">
                    {item.tag}
                  </span>
                </div>

                {/* Mood Title */}
                <div className="absolute top-10 left-3 right-3 text-center">
                  <h3 className="text-sm md:text-lg font-black tracking-wider text-white uppercase drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Action Icon */}
                <div className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 text-neutral-900 backdrop-blur-xs group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchTheMood;
