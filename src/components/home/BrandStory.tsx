'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Compass,
  Award,
} from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: '280 GSM Heavy Standard',
    desc: 'High-density combed cotton with substantial weight, zero see-through, and a structured drape that never sags.',
    icon: Layers,
    accent: '#f6b800',
  },
  {
    num: '02',
    title: 'Vintage Acid Micro-Dye',
    desc: 'Individually pigment-dyed for rich depth of color that naturally softens and looks better after every wash.',
    icon: Sparkles,
    accent: '#38bdf8',
  },
  {
    num: '03',
    title: 'Precision Drop Shoulder',
    desc: 'Engineered boxy silhouettes designed to flatter all body types with effortless streetwear aesthetics.',
    icon: Zap,
    accent: '#4ade80',
  },
];

const stats = [
  { label: 'HUMANS STYLED', value: '2M+' },
  { label: 'PINCODES COVERED', value: '19,000+' },
  { label: '5-STAR RATINGS', value: '14.8K+' },
  { label: 'SYNTHETIC FILLERS', value: '0%' },
];

export const BrandStory: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white text-neutral-900 border-b border-neutral-200/80 relative overflow-hidden selection:bg-[#f6b800] selection:text-black">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STORY & MANIFESTO PILLARS (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Header Eyebrow & Title */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
                <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#e84125]">
                  // THE NWEAR MANIFESTO • EST. 2018
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] text-neutral-950">
                Engineered For Modern Living.
              </h2>
              
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-mono font-black tracking-widest text-black bg-[#f6b800] px-2 py-0.5 rounded">
                  #WEARLESSNOISE
                </span>
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase">
                  • ZERO MID FITS GUARANTEED
                </span>
              </div>
            </div>

            {/* Core Story Paragraph */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal max-w-2xl">
              NWear was founded with a single obsession: to eliminate low-quality, paper-thin fast fashion and replace it with heavyweight, luxury-crafted streetwear for everyday humans.
              From our custom 280 GSM combed cotton knits to our reinforced anti-sag collar ribbing, every detail is engineered to look stunning and last years.
            </p>

            {/* 3 Core Pillars (Tri-Standard) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="p-4 rounded-2xl bg-neutral-50 border-2 border-black hover:bg-amber-50/40 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-black text-neutral-400">
                          {pillar.num}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" style={{ color: pillar.accent }} />
                        </div>
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-tight text-neutral-950 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-neutral-950 text-white border border-neutral-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left border-r border-neutral-800 last:border-none pr-2">
                  <span className="block text-xl sm:text-2xl font-black font-mono text-[#f6b800]">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider block mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: DUAL-LAYERED EDITORIAL VISUAL COLLAGE (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-black bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=85"
                alt="NWear Lifestyle & Streetwear Craft"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Quality Stamp Top Right */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md text-white px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2">
                <Award className="w-4 h-4 text-[#f6b800]" />
                <div className="text-left">
                  <span className="text-[9px] font-mono font-black uppercase text-amber-300 block">
                    CERTIFIED STANDARD
                  </span>
                  <span className="text-[10px] font-bold">100% Combed Cotton</span>
                </div>
              </div>

              {/* Floating Bottom Quote Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-black shadow-xl text-neutral-900">
                <div className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-[#e84125] mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>THE VERDICT</span>
                </div>
                <p className="text-xs font-bold leading-snug">
                  &ldquo;Clothes that actually feel as heavy and luxurious as they look on camera.&rdquo;
                </p>
                <div className="mt-2 pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <span>VERIFIED FIT ARCHIVE</span>
                  <span className="font-bold text-black">2M+ MEMBERS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandStory;
