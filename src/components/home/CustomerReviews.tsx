'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  Sparkles,
  Quote,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { customerReviews } from '@/data/storeData';

interface ExtendedReview {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  highlight: string;
  fitItem: string;
  size: string;
  verified: boolean;
  date: string;
  helpfulCount: number;
  category: string;
}

const communityReviews: ExtendedReview[] = [
  {
    id: 'rev-1',
    name: 'Siddharth R.',
    location: 'Mumbai, IN',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    highlight: 'Fabric quality is unreal.',
    text: 'The joggers feel so lightweight yet keep their boxy structure all day long. Survived 15+ machine washes and still looks brand new. Definitely picking up the cream color next!',
    fitItem: 'Versatile Transit Cargo Joggers',
    size: 'Size 32',
    verified: true,
    date: '2 days ago',
    helpfulCount: 64,
    category: 'Joggers',
  },
  {
    id: 'rev-2',
    name: 'Aarav K.',
    location: 'Bangalore, IN',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    highlight: 'Drape of a $150 designer tee.',
    text: 'Best oversized tee in the Indian market. The thick ribbed neck collar never sags or gets wavy after washing. The 280 GSM combed cotton feels substantial and high-fashion.',
    fitItem: 'Mount Fuji Oversized Graphic Tee',
    size: 'Size XL',
    verified: true,
    date: '1 week ago',
    helpfulCount: 89,
    category: 'T-Shirts',
  },
  {
    id: 'rev-3',
    name: 'Tanya M.',
    location: 'Delhi, IN',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    highlight: 'Turned heads across Goa.',
    text: 'I ordered the waffle co-ord set for our vacation. Breathable, luxury texture, and effortless to style with sneakers or sandals. 10/10 fit recommendation.',
    fitItem: 'Seamless Olive Co-ord Set',
    size: 'Size M',
    verified: true,
    date: '2 weeks ago',
    helpfulCount: 41,
    category: 'Coord Sets',
  },
  {
    id: 'rev-4',
    name: 'Rohan P.',
    location: 'Pune, IN',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    highlight: 'Unbeatable value for money.',
    text: 'The 2-pack shorts have deep tactical pockets that actually hold an iPhone 15 Pro Max without sagging. Perfect for gym, coffee runs, and flights.',
    fitItem: 'Pack of 2 Utility Cargo Shorts',
    size: 'Size L',
    verified: true,
    date: '3 weeks ago',
    helpfulCount: 52,
    category: 'Shorts',
  },
];

const reviewFilters = ['All Reviews', 'T-Shirts', 'Joggers', 'Coord Sets', 'Shorts'];

export const CustomerReviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Reviews');
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [votedSet, setVotedSet] = useState<Set<string>>(new Set());

  const handleHelpful = (id: string) => {
    if (votedSet.has(id)) return;
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setVotedSet((prev) => new Set(prev).add(id));
  };

  const filteredList =
    activeFilter === 'All Reviews'
      ? communityReviews
      : communityReviews.filter((r) => r.category === activeFilter);

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-neutral-200/80 selection:bg-[#f6b800] selection:text-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* 1. SECTION HEADER & HERO SCOREBOARD */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
              <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#e84125]">
                // COMMUNITY VERDICT & SOCIAL PROOF
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-neutral-950">
              Loved By Over 2M+ Humans
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
              Real unfiltered feedback, street fit checks, and durability reviews from verified buyers across India.
            </p>
          </div>

          {/* Live Rating Scoreboard Box */}
          <div className="p-4 sm:p-5 rounded-3xl border border-neutral-200/90 bg-neutral-50/80 shadow-sm flex flex-wrap items-center gap-4 sm:gap-6 shrink-0">
            {/* Rating Average */}
            <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-neutral-200">
              <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-950">
                4.9
              </span>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase mt-0.5 block">
                  14,820+ VERIFIED RATINGS
                </span>
              </div>
            </div>

            {/* Quality Metrics */}
            <div className="flex items-center gap-4 text-xs font-bold text-neutral-800 font-mono">
              <div className="text-center">
                <span className="block text-emerald-600 font-black text-sm">98.6%</span>
                <span className="text-[9px] text-neutral-500 uppercase">TRUE TO FIT</span>
              </div>
              <div className="text-center">
                <span className="block text-emerald-600 font-black text-sm">99.1%</span>
                <span className="text-[9px] text-neutral-500 uppercase">FABRIC GRADE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {reviewFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-neutral-950 text-[#f6b800] shadow-md border border-neutral-900'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3. REDESIGNED REVIEWS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredList.map((review) => {
            const hasVoted = votedSet.has(review.id);
            const totalHelpful = review.helpfulCount + (helpfulVotes[review.id] || 0);

            return (
              <div
                key={review.id}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-neutral-200/90 shadow-sm hover:shadow-2xl hover:border-neutral-400 transition-all duration-300 relative"
              >
                {/* Visual Fit Photo */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Overlaid Verified Fit Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-white/90 bg-black/80 backdrop-blur-xs px-2 py-0.5 rounded border border-white/15 truncate max-w-[70%]">
                      {review.fitItem}
                    </span>
                    <span className="text-[9px] font-mono font-black text-amber-300 bg-black/90 px-1.5 py-0.5 rounded border border-amber-300/30">
                      {review.size}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between grow space-y-4 bg-white">
                  <div>
                    {/* Stars and Highlight */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">{review.date}</span>
                    </div>

                    {/* Bold Highlight Phrase */}
                    <h4 className="text-xs sm:text-sm font-black text-neutral-950 uppercase tracking-tight mb-1.5 line-clamp-1">
                      &ldquo;{review.highlight}&rdquo;
                    </h4>

                    {/* Review text */}
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal line-clamp-3">
                      {review.text}
                    </p>
                  </div>

                  {/* Author & Helpful Action Footer */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-neutral-950">{review.name}</span>
                        {review.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 block">
                        {review.location}
                      </span>
                    </div>

                    <button
                      onClick={() => handleHelpful(review.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                        hasVoted
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      <ThumbsUp className={`w-3 h-3 ${hasVoted ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                      <span>{totalHelpful}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. COMMUNITY LOOKBOOK & UGC BANNER */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-amber-400 bg-[#f6b800] text-black flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-mono font-black text-lg shrink-0 shadow-xs">
              #NW
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-black/80">
                <Flame className="w-3.5 h-3.5 text-red-600" />
                <span>INSTAGRAM & TIKTOK CREATOR SQUAD</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
                Tag @NWEAR.STUDIO to Win ₹2,500 Store Credits
              </h3>
              <p className="text-xs text-neutral-800 font-medium mt-0.5">
                Post your weekly outfit fit check with hashtag #WearLessNoise to get featured on the global lookbook feed.
              </p>
            </div>
          </div>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>JOIN THE SQUAD</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
