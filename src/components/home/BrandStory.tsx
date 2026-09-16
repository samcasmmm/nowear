'use client';

import React from 'react';
import Image from 'next/image';
import {
  Zap,
  Plane,
  Sparkles,
  Feather,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Performance',
    desc: '4-way stretch fabrics',
  },
  {
    icon: Plane,
    title: 'Travel-Friendly',
    desc: 'Packs light & compact',
  },
  {
    icon: Sparkles,
    title: 'Ultra-Soft Touch',
    desc: 'Micro-brushed cotton',
  },
  {
    icon: Feather,
    title: 'Lightweight',
    desc: 'Featherlight breathing',
  },
  {
    icon: ShieldCheck,
    title: 'Wrinkle-Resistant',
    desc: 'Ready to wear out of bag',
  },
];

const BrandStory: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-b from-neutral-50/70 via-white to-neutral-50/70 text-neutral-900 border-y border-neutral-200/80 relative overflow-hidden">
      {/* Background subtle radial ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/70 text-neutral-800 text-xs font-bold uppercase tracking-widest mb-4 w-fit">
              <span>Engineered For Modern Living</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-neutral-900 mb-6">
              Our Story
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-8 max-w-2xl">
              NWear is all about modern clothes for modern humans. We aim to merge
              high-fashion aesthetics with effortless ease and comfort into every
              piece. From our custom-crafted fabrics to our curated seasonal drops,
              you get the absolute pinnacle in style without sacrificing feel.
              Wear less noise, live more story. You&apos;ll never go back once you
              experience NWear.
            </p>

            {/* Feature Badges List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-6 border-t border-neutral-200">
              {features.map((feat, index) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-neutral-900 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-2.5 shadow-xs">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 tracking-wide">
                      {feat.title}
                    </span>
                    <span className="text-[10px] text-neutral-500 mt-0.5 hidden sm:block">
                      {feat.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden shadow-xl border border-neutral-200/90 bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=80"
                alt="NWear Lifestyle & Couple Outfits"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-neutral-900">
                <p className="text-xs font-bold">
                  &ldquo;Clothes that actually feel as good as they look.&rdquo;
                </p>
                <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wider font-semibold">
                  Verified Fit Community &bull; 2M+ Strong
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
