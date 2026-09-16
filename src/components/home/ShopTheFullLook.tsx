'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ShoppingBag,
  Check,
  ArrowUpRight,
  Plus,
  Layers,
  Flame,
  Shirt,
  Scissors,
  Eye,
  X,
  ShieldCheck,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { fullLooks, FullLook } from '@/data/storeData';

interface LookDetails {
  pieces: string[];
  vibe: string;
  palette: string[];
  hotspots: { top: string; left: string; label: string; price: number }[];
}

const lookBreakdown: Record<string, LookDetails> = {
  'urban-nomad': {
    pieces: ['Heavyweight Boxy Tee (280 GSM)', 'Tactical Cargo Pants', 'Raw Edge Overlay'],
    vibe: 'Earth Tones • Street Utility',
    palette: ['#49523f', '#1c1b18', '#c9bfab'],
    hotspots: [
      { top: '35%', left: '48%', label: 'Heavyweight Boxy Tee', price: 999 },
      { top: '70%', left: '52%', label: 'Tactical Cargo Pants', price: 1500 },
    ],
  },
  'retro-dive': {
    pieces: ['Vintage Washed Sweatshirt', 'Relaxed Fit Chino Shorts', 'Heavy Knit Socks'],
    vibe: 'Vintage Acid • Weekend Chill',
    palette: ['#283547', '#dfdbd2', '#141416'],
    hotspots: [
      { top: '38%', left: '50%', label: 'Vintage Acid Sweatshirt', price: 1399 },
      { top: '68%', left: '45%', label: 'Transit Chino Shorts', price: 800 },
    ],
  },
  'frost-dune': {
    pieces: ['Oatmeal Waffle Knit Pullover', 'Tailored Relaxed Joggers', 'Woven Cord'],
    vibe: 'Minimal Luxury • Golden Dune',
    palette: ['#d7cec1', '#6f6759', '#1e1d1b'],
    hotspots: [
      { top: '36%', left: '46%', label: 'Waffle Knit Pullover', price: 1499 },
      { top: '72%', left: '54%', label: 'Tailored Relaxed Joggers', price: 1200 },
    ],
  },
  'downtown-jam': {
    pieces: ['Club Graphic Drop Tee', 'Parachute Street Joggers', 'Branded Metal Hardware'],
    vibe: 'Monochrome • After-Dark',
    palette: ['#171717', '#e8e4db', '#383838'],
    hotspots: [
      { top: '32%', left: '52%', label: 'Club Graphic Drop Tee', price: 899 },
      { top: '66%', left: '48%', label: 'Parachute Street Joggers', price: 1100 },
    ],
  },
};

const lookSizes = ['S (30)', 'M (32)', 'L (34)', 'XL (36)'];

export const ShopTheFullLook: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [claimedLooks, setClaimedLooks] = useState<Record<string, boolean>>({});
  const [activePin, setActivePin] = useState<{ lookId: string; pinIdx: number } | null>(null);
  const [quickViewLook, setQuickViewLook] = useState<FullLook | null>(null);

  const handleSelectSize = (lookId: string, size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSizes((prev) => ({ ...prev, [lookId]: size }));
  };

  const handleClaimLook = (look: FullLook, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const size = selectedSizes[look.id] || 'M (32)';
    setClaimedLooks((prev) => ({ ...prev, [look.id]: true }));
    setTimeout(() => {
      setClaimedLooks((prev) => ({ ...prev, [look.id]: false }));
    }, 2500);
  };

  const handleOpenQuickView = (look: FullLook, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewLook(look);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-50/70 border-b border-neutral-200/80 selection:bg-[#f6b800] selection:text-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-neutral-500">
                // HEAD-TO-TOE OUTFIT CURATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-neutral-950">
              Shop The Full Look
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Coordinated styling ready to wear out of the box. Curated tops, bottoms, and outerwear with built-in bundle savings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 text-[#f6b800] font-mono text-xs font-black border border-neutral-800 shadow-xs">
              <Sparkles className="w-4 h-4" />
              <span>SAVE UP TO 37% ON FULL BUNDLES</span>
            </span>
          </div>
        </div>

        {/* 2. LOOKBOOK CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fullLooks.map((look, index) => {
            const isClaimed = claimedLooks[look.id];
            const currentSize = selectedSizes[look.id] || 'M (32)';
            const details = lookBreakdown[look.id] || {
              pieces: ['Oversized Tee', 'Cargo Bottoms'],
              vibe: 'Modern Streetwear',
              palette: ['#171717', '#e8e4db'],
              hotspots: [],
            };

            return (
              <div
                key={look.id}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-neutral-200/90 shadow-sm hover:shadow-2xl hover:border-neutral-400 transition-all duration-300"
              >
                {/* Visual Image with Interactive Hotspots & Quick View Eye Button */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[9px] font-mono font-black uppercase tracking-wider text-black bg-[#f6b800] px-2.5 py-1 rounded-md shadow-xs">
                      LOOK 0{index + 1}
                    </span>
                    
                    {/* Top Right: Quick View Eye Icon Button */}
                    <button
                      onClick={(e) => handleOpenQuickView(look, e)}
                      title="Quick Inspect Outfit"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/85 hover:bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 backdrop-blur-xs transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer group/eye"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#f6b800] group-hover/eye:scale-110 transition-transform" />
                      <span>QUICK VIEW</span>
                    </button>
                  </div>

                  {/* Center Hover Eye Button Pill */}
                  <div className="absolute inset-0 flex items-center justify-center z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button
                      onClick={(e) => handleOpenQuickView(look, e)}
                      className="pointer-events-auto px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-2xl border border-neutral-200 hover:border-neutral-900 hover:bg-[#f6b800] hover:text-black transition-all transform -translate-y-2 group-hover:translate-y-0 duration-300 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#e84125]" />
                      <span>INSPECT OUTFIT</span>
                    </button>
                  </div>

                  {/* Interactive Hotspot Pins */}
                  {details.hotspots.map((pin, pinIdx) => {
                    const isPinActive =
                      activePin?.lookId === look.id && activePin?.pinIdx === pinIdx;
                    return (
                      <div
                        key={pinIdx}
                        style={{ top: pin.top, left: pin.left }}
                        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                        onMouseEnter={() => setActivePin({ lookId: look.id, pinIdx })}
                        onMouseLeave={() => setActivePin(null)}
                      >
                        <button
                          onClick={(e) => handleOpenQuickView(look, e)}
                          aria-label={`View ${pin.label}`}
                          className="w-6 h-6 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shadow-lg border border-neutral-900 hover:scale-125 transition-transform cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        {isPinActive && (
                          <div className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-xl border border-white/20 animate-in fade-in z-30">
                            <span>{pin.label} (₹{pin.price})</span>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Bottom Image Overlay Vibe Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-neutral-200 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded">
                      {details.vibe}
                    </span>
                    {/* Palette Dots */}
                    <div className="flex items-center gap-1">
                      {details.palette.map((color, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-2.5 h-2.5 rounded-full border border-white/40 shadow-xs"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content & Included Pieces */}
                <div className="p-4 sm:p-5 flex flex-col justify-between grow space-y-4 bg-white">
                  <div>
                    {/* Title with Eye link */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-black text-neutral-950 uppercase tracking-tight line-clamp-1 flex-1">
                        {look.title}
                      </h3>
                      <button
                        onClick={(e) => handleOpenQuickView(look, e)}
                        title="View look details"
                        className="p-1 rounded-md text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Pricing */}
                    <div className="mt-1.5 flex items-baseline gap-2 flex-wrap">
                      <span className="text-lg font-black font-mono text-neutral-950">
                        ₹{look.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono line-through">
                        ₹{look.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded">
                        {look.discount}% BUNDLE SAVINGS
                      </span>
                    </div>

                    {/* Pieces Breakdown Box */}
                    <div className="mt-3.5 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                      <span className="text-[9px] font-mono font-black uppercase tracking-widest text-neutral-400 block">
                        WHAT&apos;S IN THE BOX:
                      </span>
                      {details.pieces.map((piece, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-center gap-2 text-[11px] font-medium text-neutral-800"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span className="line-clamp-1">{piece}</span>
                        </div>
                      ))}
                    </div>

                    {/* Size Selector */}
                    <div className="mt-3.5 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-neutral-500">
                        <span>SELECT BUNDLE SIZE:</span>
                        <span className="text-black font-black">{currentSize}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {lookSizes.map((size) => (
                          <button
                            key={size}
                            onClick={(e) => handleSelectSize(look.id, size, e)}
                            className={`py-1 text-[10px] font-mono font-black uppercase rounded border transition-all cursor-pointer ${
                              currentSize === size
                                ? 'bg-neutral-950 text-[#f6b800] border-neutral-900 shadow-xs'
                                : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 1-Click Claim Bundle CTA */}
                  <button
                    onClick={(e) => handleClaimLook(look, e)}
                    className={`w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 shadow-sm cursor-pointer active:scale-95 ${
                      isClaimed
                        ? 'bg-emerald-600 text-white'
                        : 'bg-black hover:bg-neutral-800 text-[#f6b800]'
                    }`}
                  >
                    {isClaimed ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>CLAIMED FULL LOOK ({currentSize})</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>CLAIM FULL LOOK ({currentSize})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* QUICK VIEW OUTFIT MODAL */}
        {/* ========================================================= */}
        {quickViewLook && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-3xl w-full border border-neutral-200 shadow-2xl overflow-hidden relative flex flex-col md:flex-row">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setQuickViewLook(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Big Look Image with Hotspots (5 cols) */}
              <div className="relative aspect-3/4 md:aspect-auto md:w-1/2 bg-neutral-100">
                <Image
                  src={quickViewLook.image}
                  alt={quickViewLook.title}
                  fill
                  sizes="500px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#f6b800] bg-black/80 px-2.5 py-1 rounded inline-block mb-1">
                    COMPLETE STREETWEAR COORDINATE
                  </span>
                  <h4 className="text-lg font-black uppercase leading-tight">
                    {quickViewLook.title}
                  </h4>
                </div>
              </div>

              {/* Right Column: Outfit Breakdown & Fast Add (5 cols) */}
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#e84125]">
                    <Eye className="w-4 h-4" />
                    <span>OUTFIT ARCHIVE INSPECTOR</span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-neutral-950">
                    {quickViewLook.title}
                  </h3>

                  {/* Pricing */}
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-3xl font-black font-mono text-black">
                      ₹{quickViewLook.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm font-mono text-neutral-400 line-through">
                      ₹{quickViewLook.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-black font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {quickViewLook.discount}% OFF
                    </span>
                  </div>

                  {/* Items Included */}
                  <div className="mt-4 p-3 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <span className="text-[10px] font-mono font-black uppercase text-neutral-400 block">
                      INCLUDED IN THIS BUNDLE:
                    </span>
                    {(lookBreakdown[quickViewLook.id]?.pieces || ['Tee', 'Pants']).map((p, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e84125] shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>

                  {/* Size Selector in Modal */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-500 block">
                      CHOOSE SIZE:
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {lookSizes.map((s) => {
                        const currentS = selectedSizes[quickViewLook.id] || 'M (32)';
                        return (
                          <button
                            key={s}
                            onClick={(e) => handleSelectSize(quickViewLook.id, s, e)}
                            className={`py-2 text-xs font-mono font-black uppercase rounded-xl border transition-all ${
                              currentS === s
                                ? 'bg-neutral-950 text-[#f6b800] border-neutral-900 shadow-sm'
                                : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-900'
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={(e) => {
                      handleClaimLook(quickViewLook, e);
                      setQuickViewLook(null);
                    }}
                    className="w-full py-3.5 rounded-2xl bg-[#f6b800] hover:bg-[#ffc21a] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border border-black/10 shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>CLAIM FULL LOOK ({selectedSizes[quickViewLook.id] || 'M (32)'})</span>
                  </button>

                  <Link
                    href={`/product/olive-coord`}
                    onClick={() => setQuickViewLook(null)}
                    className="w-full py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Product Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Bottom Editorial Lookbook Ribbon */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-neutral-800 bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#f6b800] block">
              // NEED CUSTOM STYLING?
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              Connect With Our WhatsApp VIP Stylist
            </h3>
            <p className="text-xs text-neutral-400 max-w-lg">
              Get personalized size matching, custom outfit coordination, and early access to unreleased drops.
            </p>
          </div>

          <Link
            href="https://wa.me"
            target="_blank"
            className="px-8 py-3.5 rounded-xl bg-[#f6b800] hover:bg-amber-300 text-black text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            <span>CHAT WITH STYLIST</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ShopTheFullLook;
