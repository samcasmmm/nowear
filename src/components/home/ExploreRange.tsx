'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Wind,
  Zap,
} from 'lucide-react';
import { exploreCards } from '@/data/storeData';

// Technical specs mapped per range item for high-fashion utility aesthetic
const rangeSpecs: Record<
  string,
  {
    code: string;
    badge: string;
    fabric: string;
    features: string[];
    accent: string;
  }
> = {
  'cargo-shorts-range': {
    code: 'SPEC-01',
    badge: 'TACTICAL UTILITY',
    fabric: '280 GSM 4-Way Ripstop',
    features: ['6 Deep Gear Pockets', 'Reinforced YKK Zips', 'Water-Repellent DWR'],
    accent: '#f6b800',
  },
  'resort-shirts-range': {
    code: 'SPEC-02',
    badge: 'AIR-BREATHABLE',
    fabric: 'Slub Linen & Cotton Blend',
    features: ['Camp Cuban Collar', 'Pre-washed Softness', 'Zero Cling Weave'],
    accent: '#38bdf8',
  },
  'active-shorts-range': {
    code: 'SPEC-03',
    badge: 'PERFORMANCE FIT',
    fabric: 'Micro-Poly Flex Knit',
    features: ['Anti-Odor Ion Finish', 'Sweat-Wicking DryTech', 'Zip Phone Pocket'],
    accent: '#4ade80',
  },
  'terry-breeze-range': {
    code: 'SPEC-04',
    badge: 'HEAVYWEIGHT TERRY',
    fabric: '100% French Loopback Cotton',
    features: ['Plush Cloud Handfeel', 'Drawcord Waistband', 'Anti-Pilling Knit'],
    accent: '#f472b6',
  },
};

export const ExploreRange: React.FC = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-white border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-neutral-500">
                // TECHNICAL CRAFTSMANSHIP
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase text-neutral-950">
              Explore Range
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Discover tailored silhouettes crafted with high-grade utility, functional pockets, and breathable luxury fabrics.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-neutral-500 bg-neutral-50 px-4 py-2 rounded-xl border border-neutral-200">
            <Layers className="w-4 h-4 text-neutral-900" />
            <span>4 CORE UTILITY SILHOUETTES</span>
          </div>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreCards.map((card, index) => {
            const spec = rangeSpecs[card.id] || {
              code: `SPEC-0${index + 1}`,
              badge: 'STREET UTILITY',
              fabric: 'High-Density Combed Cotton',
              features: ['Tailored Fit', 'Deep Pockets', 'Anti-Sag Collar'],
              accent: '#f6b800',
            };

            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-neutral-950 text-white border border-neutral-850 shadow-sm hover:shadow-2xl hover:border-neutral-600 transition-all duration-500"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-75"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                  {/* Top Technical Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="font-mono text-[10px] font-black tracking-widest text-neutral-300 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-white/10">
                      {spec.code}
                    </span>
                    <span
                      className="text-[9px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-sm bg-black/80 text-white backdrop-blur-xs border border-white/15"
                      style={{ color: spec.accent }}
                    >
                      {spec.badge}
                    </span>
                  </div>

                  {/* Image Overlay Bottom Title & Fabric */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      {spec.fabric}
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Specs Drawer */}
                <div className="p-4 bg-neutral-950 flex flex-col justify-between grow space-y-4 border-t border-neutral-800">
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {card.subtitle}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-neutral-900">
                    {spec.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-[11px] font-medium text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-2 flex items-center justify-between text-xs font-black uppercase tracking-wider text-amber-300 group-hover:text-white transition-colors">
                    <span>EXPLORE COLLECTION</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExploreRange;
