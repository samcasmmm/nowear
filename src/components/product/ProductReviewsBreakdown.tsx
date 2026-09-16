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
  Sliders,
  Check,
  Zap,
  TrendingUp,
  Layers,
  ChevronLeft,
  ChevronRight,
  Search,
  Maximize2,
  X,
  Plus,
  Heart,
  Grid,
  List,
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
  fitVote: 'Runs Small' | 'True to Size' | 'Runs Large';
  heightWeight?: string;
}

const mockReviews: Review[] = [
  {
    id: 'r-1',
    name: 'Vikram S.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'Legitimately the best boxy tee in the Indian market.',
    reviewText:
      'The 280 GSM fabric weight is insane. It holds its structured drape even after 6 machine washes, zero collar baconing, and the acid wash tone is so subtle and high-end. I have already bought two more colorways.',
    verified: true,
    sizePurchased: 'Size L',
    heightWeight: '6\'0" • 80kg',
    colorPurchased: 'Vintage Washed Black',
    date: 'Reviewed in Mumbai • Sep 12, 2026',
    helpfulCount: 312,
    fitVote: 'True to Size',
    reviewImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'r-2',
    name: 'Ananya D.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'Drop shoulder silhouette is perfect. Zero see-through!',
    reviewText:
      'I was skeptical about unisex streetwear sizing, but the drop shoulder drape is so flattering. The ribbed neckline is tight and premium. Fast 24-hour delivery to Bengaluru too.',
    verified: true,
    sizePurchased: 'Size M',
    heightWeight: '5\'7" • 58kg',
    colorPurchased: 'Oatmeal Natural',
    date: 'Reviewed in Bengaluru • Sep 08, 2026',
    helpfulCount: 184,
    fitVote: 'True to Size',
    reviewImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'r-3',
    name: 'Kabir M.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'Feels like a $140 luxury designer piece for a fraction of the cost.',
    reviewText:
      'The interlock combed cotton feels super dense and smooth on skin. Perfect for layering under overshirts or rocking solo with parachute cargos.',
    verified: true,
    sizePurchased: 'Size XL',
    heightWeight: '6\'2" • 88kg',
    colorPurchased: 'Forest Sage',
    date: 'Reviewed in Delhi • Aug 29, 2026',
    helpfulCount: 142,
    fitVote: 'True to Size',
    reviewImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'r-4',
    name: 'Rohan P.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=85',
    rating: 4,
    title: 'Great heavy knit, intentionally boxy as promised.',
    reviewText:
      'Quality is top notch. It is intentionally boxy so if you want a snug fit definitely size down. Survives machine tumble wash without shrinking.',
    verified: true,
    sizePurchased: 'Size M',
    heightWeight: '5\'9" • 70kg',
    colorPurchased: 'Vintage Washed Black',
    date: 'Reviewed in Pune • Aug 15, 2026',
    helpfulCount: 89,
    fitVote: 'Runs Large',
    reviewImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'r-5',
    name: 'Devika S.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'The texture is next level. Zero shrinkage after wash.',
    reviewText:
      'Washed it twice on cold cycle and hung it to dry. Holds its collar line like day one. Best luxury streetwear brand in India by a mile.',
    verified: true,
    sizePurchased: 'Size S',
    heightWeight: '5\'5" • 52kg',
    colorPurchased: 'Acid Washed Blue',
    date: 'Reviewed in Hyderabad • Aug 10, 2026',
    helpfulCount: 67,
    fitVote: 'True to Size',
    reviewImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'r-6',
    name: 'Arjun N.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=85',
    rating: 5,
    title: 'The 280 GSM weight gives it that structured architectural drape.',
    reviewText:
      'I was looking for heavyweight boxy basics with proper sleeve length that terminates right above the elbow. NWear nailed the exact streetwear ratio.',
    verified: true,
    sizePurchased: 'Size L',
    heightWeight: '6\'1" • 82kg',
    colorPurchased: 'Vintage Washed Black',
    date: 'Reviewed in Chennai • Jul 28, 2026',
    helpfulCount: 115,
    fitVote: 'True to Size',
    reviewImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
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
  { label: '280 GSM Fabric Density', score: 4.9, benchmark: '98% Positive' },
  { label: 'Boxy Drop Shoulder Drape', score: 4.9, benchmark: '96% Positive' },
  { label: 'Anti-Sag Ribbed Collar', score: 4.8, benchmark: '95% Positive' },
  { label: 'Colorfastness & Value', score: 4.9, benchmark: '99% Positive' },
];

export const ProductReviewsBreakdown: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'helpful' | 'highest' | 'recent'>('helpful');
  const [reviewsList, setReviewsList] = useState<Review[]>(mockReviews);
  const [upvotedIds, setUpvotedIds] = useState<Record<string, boolean>>({});
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [activeLightboxReview, setActiveLightboxReview] = useState<Review | null>(null);
  const [showWriteModal, setShowWriteModal] = useState<boolean>(false);

  // New review form states
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewSize, setNewReviewSize] = useState('Size L');
  const [submittedReview, setSubmittedReview] = useState(false);

  const handleUpvote = (id: string) => {
    if (upvotedIds[id]) return;
    setUpvotedIds((prev) => ({ ...prev, [id]: true }));
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handlePostReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewTitle.trim() || !newReviewText.trim()) return;

    const newRev: Review = {
      id: `r-${Date.now()}`,
      name: newReviewName || 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=85',
      rating: newReviewRating,
      title: newReviewTitle,
      reviewText: newReviewText,
      verified: true,
      sizePurchased: newReviewSize,
      colorPurchased: 'Vintage Washed Black',
      date: 'Just now • Verified Fit Check',
      helpfulCount: 1,
      fitVote: 'True to Size',
      reviewImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85',
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setShowWriteModal(false);
      setNewReviewTitle('');
      setNewReviewText('');
    }, 1500);
  };

  // Filter & Search logic
  const filteredReviews = reviewsList
    .filter((r) => {
      if (selectedFilter === '5-star') return r.rating === 5;
      if (selectedFilter === 'with-images') return !!r.reviewImage;
      if (selectedFilter === 'verified') return r.verified;
      return true;
    })
    .filter((r) => {
      if (selectedSizeFilter === 'all') return true;
      return r.sizePurchased.toLowerCase().includes(selectedSizeFilter.toLowerCase());
    })
    .filter((r) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.reviewText.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'helpful') return b.helpfulCount - a.helpfulCount;
      if (sortBy === 'highest') return b.rating - a.rating;
      return b.id.localeCompare(a.id);
    });

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % Math.max(1, filteredReviews.length));
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredReviews.length) % Math.max(1, filteredReviews.length));
  };

  return (
    <section className="w-full my-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-xl selection:bg-[#f6b800] selection:text-black font-sans relative">
      
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-neutral-200 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
              // VERIFIED STREET ARCHIVE • 14,820+ GLOBAL RATINGS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950">
            The Community Verdict
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-medium max-w-xl">
            Real fit checks, wash durability audits, and honest feedback from verified streetwear enthusiasts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowWriteModal(true)}
            className="px-6 py-3 rounded-2xl bg-neutral-950 hover:bg-neutral-800 text-[#f6b800] font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 border border-neutral-900 shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>WRITE A FIT CHECK</span>
          </button>
        </div>
      </div>

      {/* 2. BALANCED 3-COLUMN FULL-WIDTH DASHBOARD (ZERO EMPTY SPACE) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-neutral-200">
        
        {/* COLUMN 1: OVERALL SCORE & STAR BARS (4 cols) */}
        <div className="md:col-span-4 p-5 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-xs font-mono font-black uppercase text-neutral-500">OVERALL SCORE</span>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">97% RECOMMEND</span>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-4xl font-black font-mono text-neutral-950">4.9</span>
              <div>
                <div className="flex items-center text-[#f6b800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-neutral-500 block mt-0.5">14,820 global ratings</span>
              </div>
            </div>

            {/* Star Bars */}
            <div className="space-y-1.5 mt-4">
              {ratingBreakdown.map((row) => (
                <button
                  key={row.star}
                  onClick={() => setSelectedFilter(selectedFilter === `${row.star}-star` ? 'all' : `${row.star}-star`)}
                  className={`w-full flex items-center gap-2 text-xs font-mono group p-1 rounded-lg transition-all cursor-pointer ${
                    selectedFilter === `${row.star}-star` ? 'bg-amber-100 ring-1 ring-[#f6b800]' : 'hover:bg-neutral-100'
                  }`}
                >
                  <span className="w-12 text-left text-neutral-700 font-bold flex items-center gap-0.5 text-[11px]">
                    <span>{row.star}</span>
                    <Star className="w-2.5 h-2.5 fill-current text-neutral-400 group-hover:text-[#f6b800]" />
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden">
                    <div className="h-full bg-[#f6b800] rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="w-9 text-right text-neutral-500 font-bold text-[10px]">{row.pct}%</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowWriteModal(true)}
            className="w-full py-2.5 rounded-xl border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-950 hover:text-white font-mono text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer"
          >
            Write a Verified Review
          </button>
        </div>

        {/* COLUMN 2: FEATURE AUDIT & FIT SPECTRUM (4 cols) */}
        <div className="md:col-span-4 p-5 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between space-y-4 shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-xs font-mono font-black uppercase text-neutral-500">FEATURE RATINGS</span>
              <span className="text-[10px] font-mono font-bold text-[#e84125]">LAB TESTED</span>
            </div>

            <div className="space-y-2.5 mt-3">
              {featureRatings.map((feat, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-mono py-1 border-b border-neutral-100 last:border-none">
                  <span className="text-neutral-700 font-medium truncate pr-2">{feat.label}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Star className="w-3 h-3 fill-[#f6b800] text-[#f6b800]" />
                    <span className="font-black text-black">{feat.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fit Spectrum Gauge */}
          <div className="p-3 rounded-2xl bg-white border border-neutral-200 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold">
              <span className="text-neutral-700">FIT OPINION:</span>
              <span className="text-emerald-700">89% TRUE TO FIT</span>
            </div>
            <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden flex">
              <div className="bg-neutral-300 h-full" style={{ width: '2%' }} />
              <div className="bg-[#f6b800] h-full" style={{ width: '89%' }} />
              <div className="bg-neutral-400 h-full" style={{ width: '9%' }} />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-neutral-500">
              <span>Small (2%)</span>
              <strong className="text-black">True to Boxy Cut (89%)</strong>
              <span>Large (9%)</span>
            </div>
          </div>
        </div>

        {/* COLUMN 3: VERIFIED FIT PHOTO GALLERY (4 cols) */}
        <div className="md:col-span-4 p-5 rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col justify-between space-y-3 shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#f6b800]" />
                <span className="text-xs font-mono font-black uppercase text-white">CUSTOMER FIT PICS</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">2.4K+ UPLOADS</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3">
              {reviewsList
                .filter((r) => !!r.reviewImage)
                .slice(0, 6)
                .map((rev) => (
                  <button
                    key={rev.id}
                    onClick={() => setActiveLightboxReview(rev)}
                    className="relative aspect-3/4 rounded-xl overflow-hidden border border-neutral-700 group hover:border-[#f6b800] transition-all cursor-pointer"
                  >
                    <Image
                      src={rev.reviewImage!}
                      alt={rev.name}
                      fill
                      sizes="120px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="absolute bottom-1 inset-x-1 bg-black/80 text-[8px] font-mono text-center text-amber-300 rounded py-0.5 truncate">
                      {rev.sizePurchased}
                    </span>
                  </button>
                ))}
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
            <span>Verified Customer Fits</span>
            <span className="text-[#f6b800] font-bold">CLICK TO EXPAND</span>
          </div>
        </div>

      </div>

      {/* 3. INTERACTIVE CONTROL BAR (SEARCH, SIZE FILTER, SORTING) */}
      <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Reviews Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords (e.g. collar, drape, wash)..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: '5-star', label: '5-Star (88%)' },
            { id: 'with-images', label: 'With Photos' },
            { id: 'verified', label: 'Verified Buyers' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setSelectedFilter(pill.id)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === pill.id
                  ? 'bg-neutral-950 text-[#f6b800] shadow-sm'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Size Dropdown & Sort Selector */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <select
            value={selectedSizeFilter}
            onChange={(e) => setSelectedSizeFilter(e.target.value)}
            className="px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs font-bold bg-white focus:border-neutral-900"
          >
            <option value="all">All Sizes</option>
            <option value="Size S">Size S</option>
            <option value="Size M">Size M</option>
            <option value="Size L">Size L</option>
            <option value="Size XL">Size XL</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'helpful' | 'highest' | 'recent')}
            className="px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs font-bold bg-white focus:border-neutral-900"
          >
            <option value="helpful">Most Helpful</option>
            <option value="highest">Highest Rating</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>

      </div>

      {/* 4. DYNAMIC INTERACTIVE SPOTLIGHT CAROUSEL + GRID CARDS */}
      <div className="pt-6 space-y-8">
        
        {/* Spotlight Featured Review Card */}
        {filteredReviews.length > 0 && (
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f6b800]" />
                <span className="text-xs font-mono font-black uppercase tracking-wider text-[#f6b800]">
                  COMMUNITY SPOTLIGHT // FIT CHECK 0{activeSlideIndex + 1} OF {filteredReviews.length}
                </span>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide Content */}
            {(() => {
              const currentSlide = filteredReviews[activeSlideIndex] || filteredReviews[0];
              return (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left: Review Text (8 cols) */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-700">
                        <Image src={currentSlide.avatar} alt={currentSlide.name} fill sizes="40px" className="object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-white">{currentSlide.name}</span>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified Owner
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {currentSlide.sizePurchased} {currentSlide.heightWeight ? `(${currentSlide.heightWeight})` : ''} • {currentSlide.colorPurchased}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-[#f6b800]">
                      {[...Array(currentSlide.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                      &ldquo;{currentSlide.title}&rdquo;
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      {currentSlide.reviewText}
                    </p>

                    <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{currentSlide.date}</span>
                      <button
                        onClick={() => handleUpvote(currentSlide.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                          upvotedIds[currentSlide.id]
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 font-bold'
                            : 'bg-neutral-800 border-neutral-700 text-white hover:border-[#f6b800]'
                        }`}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Found Helpful ({currentSlide.helpfulCount})</span>
                      </button>
                    </div>
                  </div>

                  {/* Right: Attached Photo (4 cols) */}
                  {currentSlide.reviewImage && (
                    <div className="md:col-span-4">
                      <div 
                        onClick={() => setActiveLightboxReview(currentSlide)}
                        className="relative aspect-3/4 rounded-2xl overflow-hidden border border-neutral-700 cursor-pointer group shadow-lg hover:border-[#f6b800] transition-colors"
                      >
                        <Image
                          src={currentSlide.reviewImage}
                          alt="Customer wear check"
                          fill
                          sizes="350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-[10px] font-mono">
                          <span className="bg-black/80 px-2 py-0.5 rounded">CLICK TO EXPAND</span>
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Multi-Column Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 hover:border-neutral-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200">
                      <Image src={rev.avatar} alt={rev.name} fill sizes="32px" className="object-cover" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-neutral-950 font-sans block leading-none">
                        {rev.name}
                      </span>
                      {rev.verified && (
                        <span className="text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
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

                {/* Sizing badges */}
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-neutral-600 mb-2">
                  <span className="px-2 py-0.5 rounded bg-neutral-200/80 font-bold text-black">
                    {rev.sizePurchased}
                  </span>
                  <span>•</span>
                  <span>{rev.colorPurchased}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold">{rev.fitVote}</span>
                </div>

                {/* Review Headline & Body */}
                <h4 className="text-sm font-bold text-neutral-950 mb-1 leading-snug">
                  {rev.title}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed font-normal line-clamp-3">
                  {rev.reviewText}
                </p>

                {/* Optional Attached photo preview */}
                {rev.reviewImage && (
                  <div 
                    onClick={() => setActiveLightboxReview(rev)}
                    className="relative w-24 h-32 rounded-xl overflow-hidden mt-3 border border-neutral-200 cursor-pointer group hover:border-neutral-900 transition-colors"
                  >
                    <Image src={rev.reviewImage} alt="User fit photo" fill sizes="100px" className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer row: Date & Helpful Action */}
              <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>{rev.date}</span>

                <button
                  onClick={() => handleUpvote(rev.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
                    upvotedIds[rev.id]
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-900'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-neutral-100 text-neutral-500 font-mono text-xs">
            No reviews match the current filter selection. Try adjusting your filters above.
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX UGC FIT CHECK MODAL */}
      {/* ========================================================= */}
      {activeLightboxReview && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="bg-neutral-950 text-white rounded-3xl max-w-3xl w-full border border-neutral-800 shadow-2xl overflow-hidden relative flex flex-col md:flex-row">
            <button
              onClick={() => setActiveLightboxReview(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-neutral-800 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Image */}
            <div className="relative aspect-3/4 md:aspect-auto md:w-1/2 bg-black">
              {activeLightboxReview.reviewImage && (
                <Image
                  src={activeLightboxReview.reviewImage}
                  alt={activeLightboxReview.name}
                  fill
                  sizes="500px"
                  className="object-cover"
                />
              )}
            </div>

            {/* Right Review Info */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-[#f6b800]">
                    {[...Array(activeLightboxReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{activeLightboxReview.date}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  &ldquo;{activeLightboxReview.title}&rdquo;
                </h3>
                <p className="text-xs text-neutral-300 font-mono leading-relaxed">
                  {activeLightboxReview.reviewText}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1 text-xs font-mono">
                  <div className="flex justify-between text-neutral-400">
                    <span>Verified Buyer:</span>
                    <strong className="text-white">{activeLightboxReview.name}</strong>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Size Purchased:</span>
                    <strong className="text-amber-300">{activeLightboxReview.sizePurchased}</strong>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Colorway:</span>
                    <strong className="text-white">{activeLightboxReview.colorPurchased}</strong>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Fit Feedback:</span>
                    <strong className="text-emerald-400">{activeLightboxReview.fitVote}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveLightboxReview(null)}
                className="w-full py-3 rounded-xl bg-white text-black font-mono text-xs font-black uppercase hover:bg-[#f6b800] transition-colors cursor-pointer"
              >
                CLOSE FIT CHECK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* WRITE A VERIFIED REVIEW MODAL */}
      {/* ========================================================= */}
      {showWriteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-neutral-200 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setShowWriteModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#e84125] block mb-1">
                // VERIFIED COMMUNITY FEEDBACK
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-neutral-950">
                Submit Your Fit Check
              </h3>
              <p className="text-xs text-neutral-600">
                Help fellow streetwear collectors get the perfect oversized drape and size.
              </p>
            </div>

            <form onSubmit={handlePostReview} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block font-bold text-neutral-900 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  value={newReviewName}
                  onChange={(e) => setNewReviewName(e.target.value)}
                  placeholder="e.g. Siddharth R."
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-900 uppercase mb-1">Overall Rating</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setNewReviewRating(s)}
                      className="cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          s <= newReviewRating ? 'fill-[#f6b800] text-[#f6b800]' : 'text-neutral-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 font-bold text-neutral-800">{newReviewRating} / 5 Stars</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-900 uppercase mb-1">Size Purchased</label>
                  <select
                    value={newReviewSize}
                    onChange={(e) => setNewReviewSize(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white focus:border-neutral-900"
                  >
                    <option value="Size S">Size S</option>
                    <option value="Size M">Size M</option>
                    <option value="Size L">Size L</option>
                    <option value="Size XL">Size XL</option>
                    <option value="Size XXL">Size XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-neutral-900 uppercase mb-1">Fit Type</label>
                  <input
                    type="text"
                    disabled
                    value="True to Boxy Fit"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-900 uppercase mb-1">Headline</label>
                <input
                  type="text"
                  value={newReviewTitle}
                  onChange={(e) => setNewReviewTitle(e.target.value)}
                  placeholder="e.g. 280 GSM fabric weight is insane..."
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-neutral-900 uppercase mb-1">Detailed Review</label>
                <textarea
                  rows={3}
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  placeholder="How does it feel? How did it survive washing? What is the drape like?"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-[#f6b800] font-mono text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-lg"
              >
                {submittedReview ? 'POSTED TO COMMUNITY!' : 'SUBMIT FIT CHECK'}
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default ProductReviewsBreakdown;
