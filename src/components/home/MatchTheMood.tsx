'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Flame, Compass, Music, Zap } from 'lucide-react';
import { moodCategories } from '@/data/storeData';

// Enhanced mood details for high-fashion editorial feel
const moodDetails: Record<
  string,
  {
    index: string;
    description: string;
    vibe: string;
    specs: string;
    colorAccent: string;
  }
> = {
  hoodies: {
    index: 'MOOD // 01',
    description: '380 GSM Heavy French Terry with double-lined structure',
    vibe: 'Winter Warmth • Oversized Fit',
    specs: 'Heavy Knits',
    colorAccent: '#f6b800',
  },
  sweatshirts: {
    index: 'MOOD // 02',
    description: 'Raw acid washes, vintage hand-feel & drop shoulders',
    vibe: 'Graphic Drops • Street Culture',
    specs: 'Acid Washed',
    colorAccent: '#38bdf8',
  },
  basics: {
    index: 'MOOD // 03',
    description: 'Zero see-through, 100% supercombed luxury cotton',
    vibe: 'Clean Minimal • All-Day Staple',
    specs: '280 GSM Cotton',
    colorAccent: '#4ade80',
  },
  joggers: {
    index: 'MOOD // 04',
    description: 'Tactical zip pockets & engineered anti-sag ankle ribbing',
    vibe: 'All-Day Ease • Transit Utility',
    specs: 'Tailored Rib',
    colorAccent: '#fb7185',
  },
};

export const MatchTheMood: React.FC = () => {
  const [hoveredMood, setHoveredMood] = useState<string | null>(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-neutral-200/80 selection:bg-[#f6b800] selection:text-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-neutral-500">
                // MOOD CAPSULES & AESTHETIC
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-neutral-950">
              Match The Mood
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Curated fits engineered for every moment — from airport transit to midnight streetwear sessions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 font-mono text-xs font-bold border border-neutral-200">
              <Compass className="w-3.5 h-3.5 text-neutral-600" />
              <span>4 SIGNATURE VIBES</span>
            </span>
          </div>
        </div>

        {/* 2. 4-CARD HERO MOOD MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moodCategories.map((item) => {
            const detail = moodDetails[item.id] || {
              index: 'MOOD // 01',
              description: 'Engineered streetwear silhouette',
              vibe: 'Signature Aesthetic',
              specs: 'Luxury Drape',
              colorAccent: '#f6b800',
            };

            const isHovered = hoveredMood === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredMood(item.id)}
                onMouseLeave={() => setHoveredMood(null)}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-950 border-2 border-black shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-85 group-hover:brightness-75"
                  />

                  {/* High-fashion Cinematic Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-black tracking-widest text-neutral-300 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                      {detail.index}
                    </span>
                    <span
                      className="text-[9px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 backdrop-blur-xs border border-white/15"
                      style={{ color: detail.colorAccent }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Center / Lower Content */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-300 block">
                      {detail.vibe}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-300 font-normal leading-relaxed line-clamp-2">
                      {detail.description}
                    </p>

                    {/* Bottom Action Pill */}
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase bg-white/10 px-2 py-0.5 rounded">
                        {detail.specs}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-black uppercase tracking-wider text-amber-300 group-hover:text-white group-hover:translate-x-1 transition-all">
                        <span>EXPLORE FITS</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 3. STUDIO MOOD SOUNDTRACK FOOTER BAR */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-black text-[#f6b800] flex items-center justify-center shrink-0">
              <Music className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-neutral-400 block">
                // STUDIO SOUNDTRACK
              </span>
              <span className="text-xs font-bold text-neutral-900">
                NWear Tokyo Streetwear Session • 14 Heavy Lo-Fi Beats
              </span>
            </div>
          </div>

          <Link
            href="https://spotify.com"
            target="_blank"
            className="px-4 py-2 bg-white hover:bg-black hover:text-white text-neutral-900 border border-neutral-300 font-mono text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs shrink-0"
          >
            <span>LISTEN ON SPOTIFY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MatchTheMood;
