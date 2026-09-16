'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  Camera,
  Filter,
  Sparkles,
  MessageSquare,
  Award,
} from 'lucide-react';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  title: string;
  reviewText: string;
  verified: boolean;
  sizePurchased: string;
  colorPurchased: string;
  date: string;
  helpfulCount: number;
  reviewImage?: string;
}

const mockReviews: Review[] = [
  {
    id: 'r-1',
    name: 'Vikram S.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'Legitimately the best boxy tee I have ever worn in India.',
    reviewText:
      'The 280 GSM fabric weight is insane. It holds its structured shape even after 6 machine washes, zero collar baconing, and the acid wash tone is so subtle and high-end. I have already bought two more colorways.',
    verified: true,
    sizePurchased: 'Size L (6\'0" / 80kg)',
    colorPurchased: 'Vintage Washed Black',
    date: 'Reviewed in India on September 12, 2026',
    helpfulCount: 312,
    reviewImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'r-2',
    name: 'Ananya D.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'Drop shoulder silhouette is perfect. Zero see-through!',
    reviewText:
      'I was skeptical about ordering unisex streetwear, but the drop shoulder drape is so flattering. The ribbed neckline is tight and premium. Fast 24-hour delivery to Bengaluru too.',
    verified: true,
    sizePurchased: 'Size M (5\'7" / 58kg)',
    colorPurchased: 'Oatmeal Natural',
    date: 'Reviewed in India on September 08, 2026',
    helpfulCount: 184,
  },
  {
    id: 'r-3',
    name: 'Kabir M.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'Feels like a $120 Fear of God piece for a fraction of the cost.',
    reviewText:
      'The interlock combed cotton feels super dense and smooth on skin. Perfect for layering under overshirts or rocking solo with parachute cargos.',
    verified: true,
    sizePurchased: 'Size XL (6\'2" / 88kg)',
    colorPurchased: 'Forest Sage',
    date: 'Reviewed in India on August 29, 2026',
    helpfulCount: 142,
    reviewImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=85',
  },
  {
    id: 'r-4',
    name: 'Rohan P.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=85',
    rating: 4,
    title: 'Great heavy knit, slightly oversized as promised.',
    reviewText:
      'Quality is top notch. It is intentionally boxy so if you want a snug fit definitely size down. Survives machine tumble wash without shrinking.',
    verified: true,
    sizePurchased: 'Size M',
    colorPurchased: 'Vintage Washed Black',
    date: 'Reviewed in India on August 15, 2026',
    helpfulCount: 89,
  },
];

const ratingBreakdown = [
  { star: 5, pct: 88, count: '13,041' },
  { star: 4, pct: 9, count: '1,334' },
  { star: 3, pct: 2, count: '296' },
  { star: 2, pct: 1, count: '148' },
  { star: 1, pct: 0, count: '0' },
];

const featureRatings = [
  { label: 'Fabric GSM & Density', score: 4.9 },
  { label: 'Boxy Drape & Fit', score: 4.9 },
  { label: 'Collar Anti-Sag Ribbing', score: 4.8 },
  { label: 'Value for Money', score: 4.9 },
];

export const ProductReviewsBreakdown: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [reviewsList, setReviewsList] = useState<Review[]>(mockReviews);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});

  const handleUpvote = (id: string) => {
    if (upvotedIds[id]) return;
    setUpvotedIds((prev) => ({ ...prev, [id]: true }));
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const filteredReviews = reviewsList.filter((r) => {
    if (selectedFilter === '5-star') return r.rating === 5;
    if (selectedFilter === 'with-images') return !!r.reviewImage;
    if (selectedFilter === 'verified') return r.verified;
    return true;
  });

  return (
    <section className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-black shadow-lg">
      
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
        <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
          // AMAZON STYLE RATINGS &amp; REVIEWS
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT: AMAZON 4.9 SCOREBOARD & STAR BARS (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950">
              Customer Reviews
            </h3>
            
            {/* Overall Score Banner */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-4xl sm:text-5xl font-black font-mono text-neutral-950">
                4.9
              </span>
              <div>
                <div className="flex items-center text-[#f6b800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-mono text-neutral-500 font-bold block mt-0.5">
                  14,820 global ratings
                </span>
              </div>
            </div>
          </div>

          {/* Star Distribution Breakdown Bars */}
          <div className="space-y-2 pt-2">
            {ratingBreakdown.map((row) => (
              <button
                key={row.star}
                onClick={() => setSelectedFilter(selectedFilter === `${row.star}-star` ? 'all' : `${row.star}-star`)}
                className="w-full flex items-center gap-2 text-xs font-mono group hover:text-black transition-colors"
              >
                <span className="w-12 text-left text-neutral-600 font-bold">
                  {row.star} star
                </span>
                <div className="flex-1 h-3 rounded-full bg-neutral-100 overflow-hidden border border-neutral-200">
                  <div
                    className="h-full bg-[#f6b800] rounded-full transition-all group-hover:bg-amber-500"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-10 text-right text-neutral-500 font-bold">
                  {row.pct}%
                </span>
              </button>
            ))}
          </div>

          {/* Feature Rating Scorecards */}
          <div className="pt-4 border-t border-neutral-200 space-y-2.5">
            <h4 className="text-xs font-mono font-black uppercase tracking-wider text-neutral-900">
              By Feature
            </h4>
            {featureRatings.map((f, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-600">{f.label}</span>
                <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                  <Star className="w-3.5 h-3.5 fill-[#f6b800] text-[#f6b800]" />
                  <span>{f.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Write a Review Button */}
          <div className="pt-4 border-t border-neutral-200">
            <button className="w-full py-3 rounded-xl border-2 border-black hover:bg-neutral-100 font-mono text-xs font-bold uppercase tracking-wider transition-colors">
              Write a Verified Review
            </button>
          </div>
        </div>

        {/* RIGHT: REVIEWS WITH IMAGES & FILTERABLE FEED (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Customer Photos Gallery strip */}
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#e84125]" />
                Customer Fit Photos (2,400+)
              </span>
              <button
                onClick={() => setSelectedFilter('with-images')}
                className="text-[11px] font-mono text-[#e84125] font-bold hover:underline"
              >
                View all photos
              </button>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
              {[
                'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=85',
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=85',
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=85',
                'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=85',
              ].map((img, idx) => (
                <div key={idx} className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0 border border-neutral-300">
                  <Image src={img} alt="Customer wear check" fill sizes="100px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: '5-star', label: '5 Star Only' },
              { id: 'with-images', label: 'With Images' },
              { id: 'verified', label: 'Verified Buyers' },
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setSelectedFilter(pill.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${
                  selectedFilter === pill.id
                    ? 'bg-black text-white shadow'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Review Cards Feed */}
          <div className="space-y-4">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200 transition-all hover:border-neutral-300"
              >
                {/* Author row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-300">
                      <Image src={rev.avatar} alt={rev.name} fill sizes="32px" className="object-cover" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-950 font-sans block leading-none">
                        {rev.name}
                      </span>
                      {rev.verified && (
                        <span className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified Purchase
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-[#f6b800]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Purchase specs */}
                <div className="text-[11px] font-mono text-neutral-500 mb-2">
                  <span>{rev.sizePurchased}</span>
                  <span> • </span>
                  <span>{rev.colorPurchased}</span>
                </div>

                {/* Review Headline & Body */}
                <h4 className="text-sm font-bold text-neutral-950 mb-1">
                  {rev.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {rev.reviewText}
                </p>

                {/* Review attached photo */}
                {rev.reviewImage && (
                  <div className="relative w-28 h-36 rounded-xl overflow-hidden mt-3 border border-neutral-300">
                    <Image src={rev.reviewImage} alt="User fit photo" fill sizes="120px" className="object-cover" />
                  </div>
                )}

                {/* Date & Helpful Counter */}
                <div className="mt-3 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>{rev.date}</span>

                  <button
                    onClick={() => handleUpvote(rev.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-mono transition-colors ${
                      upvotedIds[rev.id]
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                        : 'bg-white border-neutral-300 text-neutral-700 hover:border-black'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({rev.helpfulCount})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductReviewsBreakdown;
