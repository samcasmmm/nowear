'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/storeData';
import {
  ProductGallery,
  ProductBuyBox,
  FrequentlyBoughtTogether,
  ProductComparisonTable,
  ProductQA,
  ProductReviewsBreakdown,
} from '@/components/product';
import {
  Star,
  ShieldCheck,
  Award,
  ChevronRight,
  Share2,
  Heart,
  CheckCircle2,
  Sparkles,
  Zap,
  Tag,
  Truck,
  Check,
  Eye,
  Copy,
  Layers,
  Ruler,
  Scissors,
  Droplets,
  ArrowUpRight,
  Flame,
  MessageSquare,
  ExternalLink,
  SlidersHorizontal,
  RefreshCw,
  BadgeCheck,
  Building2,
  Store,
  Compass,
  Activity,
} from 'lucide-react';

interface ProductClientWrapperProps {
  product: Product;
}

export const ProductClientWrapper: React.FC<ProductClientWrapperProps> = ({ product }) => {
  const isOatmeal = product.name?.toLowerCase().includes('oatmeal') || product.id?.includes('oatmeal');
  
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [selectedColor, setSelectedColor] = useState<string>(
    isOatmeal ? 'Oatmeal Natural' : 'Vintage Washed Black'
  );
  const [activeTab, setActiveTab] = useState<'specs' | 'fit' | 'styling' | 'care'>('specs');
  const [skuCopied, setSkuCopied] = useState<boolean>(false);
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  const skuCode = `NW-${(product.id || 'ITEM').toUpperCase().slice(0, 8)}-2026`;

  const handleCopySku = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(skuCode);
      setSkuCopied(true);
      setTimeout(() => setSkuCopied(false), 2000);
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({ title: product.name, url: window.location.href });
      } else {
        navigator.clipboard.writeText(window.location.href);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      }
    }
  };

  // High-res curated lifestyle & product imagery tailored to Oatmeal Knit or generic product
  const galleryImages = isOatmeal
    ? [
        product.image || 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=85',
      ]
    : [
        product.image,
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      ];

  const gsmValue = isOatmeal ? '340 GSM' : '280 GSM';

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 selection:bg-[#f6b800] selection:text-black font-sans">
      
      {/* ========================================================= */}
      {/* 1. BREADCRUMBS & TECHNICAL ARCHIVE BAR */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 text-xs font-mono text-neutral-500 border-b border-neutral-200">
        
        {/* Breadcrumb path */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/category/coord-sets" className="hover:text-black transition-colors font-medium">
            Streetwear Archive
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href={`/category/${(product.category || 'coord-sets').toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-black transition-colors font-medium">
            {product.category || 'Coord Sets'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
            {product.name}
          </span>
        </div>

        {/* Right Info: SKU Copy Button & Official Badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleCopySku}
            title="Click to copy SKU"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-mono text-[11px] font-bold transition-all border border-neutral-200/80 cursor-pointer"
          >
            <span>SKU: {skuCode}</span>
            {skuCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-neutral-400" />}
          </button>

          <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#e84125]" />
            <span>#1 IN {(product.category || 'COORD SETS').toUpperCase()}</span>
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN HERO SECTION (BALANCED DUAL-COLUMN WITH STICKY BUY BOX) */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-6 items-start">
        
        {/* LEFT COLUMN: MULTI-IMAGE GALLERY + MODEL FIT PROFILE + ENGINEERING BLUEPRINT (7 cols) */}
        <div className="lg:col-span-7 xl:col-span-7 space-y-6">
          
          {/* 2.1 INTERACTIVE PRODUCT GALLERY */}
          <ProductGallery
            images={galleryImages}
            productName={product.name}
            tag={product.tag || 'NEW DROP'}
            gsm={gsmValue}
          />

          {/* 2.2 ATELIER MODEL FIT PROFILE & SILHOUETTE GUIDE */}
          <div className="p-4 sm:p-5 rounded-3xl bg-neutral-50/90 border border-neutral-200/90 shadow-sm space-y-3 font-mono">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e84125]" />
                <span className="text-xs font-black uppercase tracking-wider text-neutral-900">
                  ATELIER MODEL &amp; FIT SPECIFICATIONS
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                98.6% FIT ACCURACY
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[10px] text-neutral-500 block uppercase">MODEL HEIGHT</span>
                <span className="font-black text-neutral-900 text-xs mt-0.5 block">6&apos;1&quot; (185 CM)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[10px] text-neutral-500 block uppercase">SIZE WORN</span>
                <span className="font-black text-[#e84125] text-xs mt-0.5 block">SIZE L (BOXY)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[10px] text-neutral-500 block uppercase">CHEST STAT</span>
                <span className="font-black text-neutral-900 text-xs mt-0.5 block">39.5 INCHES</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-neutral-200">
                <span className="text-[10px] text-neutral-500 block uppercase">DRAPE PROFILE</span>
                <span className="font-black text-neutral-900 text-xs mt-0.5 block">RELAXED DROP</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-600 font-sans leading-relaxed pt-1">
              <strong>Stylist Note:</strong> Tailored with dropped shoulder seams and relaxed body volume. Select your standard size for the intended modern streetwear aesthetic, or size down for a classic fitted silhouette.
            </p>
          </div>

          {/* 2.3 TECHNICAL GARMENT ENGINEERING MATRIX (ABOUT THIS ITEM) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-neutral-50/90 border border-neutral-200/90 shadow-sm space-y-4">
            
            {/* Blueprint Header with Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
                <h3 className="font-mono font-black uppercase tracking-wider text-neutral-950 text-xs">
                  // GARMENT ENGINEERING BLUEPRINT
                </h3>
              </div>

              {/* Interactive Spec Mode Switcher */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-neutral-200 text-[10px] font-mono font-bold">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'specs' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  SPECS
                </button>
                <button
                  onClick={() => setActiveTab('fit')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'fit' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  FIT METRICS
                </button>
                <button
                  onClick={() => setActiveTab('styling')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'styling' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  STYLING
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'care' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  CARE
                </button>
              </div>
            </div>

            {/* Tab 1: Engineering Specs Matrix */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-neutral-950 font-black font-mono text-[11px] uppercase">
                    <Layers className="w-3.5 h-3.5 text-[#e84125]" />
                    <span>{gsmValue} Knit Density</span>
                  </div>
                  <p className="text-neutral-600 text-[11px] leading-relaxed">
                    {isOatmeal
                      ? 'Textured waffle-weave interlock combed yarn. Breathable thermal insulation with zero sheer under bright lighting.'
                      : 'Custom double-interlock combed cotton. Substantial structured drape with zero sheer transparency under daylight.'}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-neutral-950 font-black font-mono text-[11px] uppercase">
                    <Scissors className="w-3.5 h-3.5 text-[#f6b800]" />
                    <span>Anti-Sag Collar &amp; Cuffs</span>
                  </div>
                  <p className="text-neutral-600 text-[11px] leading-relaxed">
                    Double-layer 2.5cm ribbed trims reinforced with micro-elastic core to prevent neck blowout and sleeve flare over 100+ wears.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-neutral-950 font-black font-mono text-[11px] uppercase">
                    <Ruler className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Drop Shoulder Cut</span>
                  </div>
                  <p className="text-neutral-600 text-[11px] leading-relaxed">
                    Calibrated 4.5cm shoulder seam drop with relaxed chest circumference for effortless modern streetwear layering.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-neutral-950 font-black font-mono text-[11px] uppercase">
                    <Droplets className="w-3.5 h-3.5 text-blue-600" />
                    <span>Pre-Shrunk Steamed</span>
                  </div>
                  <p className="text-neutral-600 text-[11px] leading-relaxed">
                    Micro-pigment dye treated and high-pressure vapor steamed to restrict dimensional shrinkage variance strictly under 0.8%.
                  </p>
                </div>

              </div>
            )}

            {/* Tab 2: Fit Metrics & Fabric Performance */}
            {activeTab === 'fit' && (
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 space-y-3 text-xs">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">FIT TYPE</div>
                    <div className="text-xs font-black text-neutral-900 mt-0.5">RELAXED BOXY</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">DRAPE WEIGHT</div>
                    <div className="text-xs font-black text-[#e84125] mt-0.5">HEAVYWEIGHT</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase">STRETCH RECOVERY</div>
                    <div className="text-xs font-black text-emerald-600 mt-0.5">99.2%</div>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-600">Fabric Breathability Index</span>
                    <span className="font-bold text-neutral-900">9.4 / 10</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                    <span className="text-neutral-600">Anti-Pilling Yarn Rating</span>
                    <span className="font-bold text-neutral-900">Grade 4.8 (ISO 12945)</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f6b800] rounded-full w-[96%]" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Styling Tips & Pairings */}
            {activeTab === 'styling' && (
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neutral-900">
                  <span>SUGGESTED OUTFIT COORDINATES:</span>
                  <span className="text-[#e84125]">STUDIO LOOK 04</span>
                </div>
                <p className="text-neutral-600 leading-relaxed text-[11px]">
                  {isOatmeal
                    ? 'Style the Oatmeal Knit pullover with matching textured joggers or high-waisted wide denim and retro runners for a cohesive luxury lounge silhouette.'
                    : 'Pair with NWear Parachute Cargo Pants in Olive/Obsidian and chunky low-profile sneakers for a high-contrast architectural streetwear silhouette.'}
                </p>
                <div className="pt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono text-neutral-400">BEST WORN:</span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-black text-[10px] font-mono font-bold rounded">Unisex Relaxed</span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-black text-[10px] font-mono font-bold rounded">All-Season Layer</span>
                  <span className="px-2 py-0.5 bg-neutral-100 text-black text-[10px] font-mono font-bold rounded">Airport &amp; Travel Ready</span>
                </div>
              </div>
            )}

            {/* Tab 4: Longevity & Care Instructions */}
            {activeTab === 'care' && (
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neutral-900">
                  <span>WASH &amp; PRESERVATION INSTRUCTIONS:</span>
                  <span className="text-emerald-700 font-bold">100+ WASH LIFE</span>
                </div>
                <ul className="text-neutral-600 space-y-1 text-[11px] font-mono">
                  <li>• Machine wash cold at 30°C inside out with like colors.</li>
                  <li>• Use mild liquid detergent; avoid bleach or harsh fabric softeners.</li>
                  <li>• Reshape while damp and lay flat to dry to preserve textured knit gauge.</li>
                  <li>• Cool iron inside out if needed; do not dry clean.</li>
                </ul>
              </div>
            )}

          </div>

          {/* 2.4 TEXTILE LAB PURITY GUARANTEE */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-center gap-3 text-xs font-mono text-amber-950">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
            <div className="text-[11px] leading-snug">
              <strong>100% Supercombed Compact Yarn Guarantee:</strong> Milled without synthetic fillers or regenerated scrap fibers. Tested for color-fastness and skin compatibility.
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: STICKY ATELIER BANNER + TITLE + BUY BOX (5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-20 space-y-5">
          
          {/* 2.5 BESPOKE OFFICIAL STORE BANNER & ATELIER PROVENANCE */}
          <div className="p-4 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl relative overflow-hidden group">
            {/* Ambient Background Glow Effect */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#f6b800]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#f6b800]/15 transition-all duration-500" />

            <div className="relative z-10 flex items-center justify-between gap-3">
              
              {/* Left Atelier Brand Seal */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f6b800] to-[#d97706] text-black font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  NW
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      NWEAR OFFICIAL STORE
                    </span>
                    <BadgeCheck className="w-4 h-4 text-[#f6b800] fill-[#f6b800]/20 shrink-0" />
                  </div>
                  <p className="text-[10px] font-mono text-neutral-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Direct Mumbai &amp; Berlin Atelier</span>
                  </p>
                </div>
              </div>

              {/* Right: Visit Flagship Store CTA */}
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-white text-black hover:bg-[#f6b800] hover:text-black text-[11px] font-mono font-black uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer shadow-md active:scale-95"
              >
                <span>STORE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 2.6 PRODUCT TITLE & SIGNATURE STREETWEAR HEADER */}
          <div className="space-y-2.5">
            
            {/* Top Collection Tags Row */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-[#e84125] text-white text-[10px] font-mono font-black uppercase tracking-wider">
                {product.tag || 'LIMITED DROP'}
              </span>
              <span className="px-2 py-0.5 rounded bg-neutral-900 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                DROP 06 // 2026 ARCHIVE
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider border border-amber-200 flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#e84125]" />
                <span>42 VIEWING</span>
              </span>
            </div>

            {/* Main Product Title */}
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 leading-tight">
              {product.name}
            </h1>

            {/* Ratings, Q&A & Fast Navigation Stats Bar */}
            <div className="pt-1 pb-1 flex flex-wrap items-center gap-2.5 text-xs font-mono border-b border-neutral-200">
              <div className="flex items-center gap-1 text-[#f6b800]">
                <span className="font-black text-black text-sm">{product.rating || 4.9}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <span className="text-neutral-300">•</span>

              <a
                href="#reviews"
                className="text-neutral-700 hover:text-black font-bold hover:underline transition-colors text-xs"
              >
                {product.reviewsCount || 14820} Ratings
              </a>

              <span className="text-neutral-300">•</span>

              <a
                href="#qa"
                className="text-neutral-700 hover:text-black font-bold hover:underline transition-colors text-xs"
              >
                340+ Q&amp;As
              </a>

              <span className="text-neutral-300">•</span>

              <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[10px]">
                98.6% TRUE FIT
              </span>
            </div>
          </div>

          {/* 2.7 STICKY BUY BOX COMPONENT */}
          <ProductBuyBox
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            productName={product.name}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />

        </div>

      </div>

      {/* ========================================================= */}
      {/* 3. FREQUENTLY BOUGHT TOGETHER (BUNDLE ARCHIVE) */}
      {/* ========================================================= */}
      <FrequentlyBoughtTogether
        currentProduct={{
          name: product.name,
          image: galleryImages[0],
          price: product.price,
          originalPrice: product.originalPrice,
        }}
      />

      {/* ========================================================= */}
      {/* 4. TECHNICAL SPECIFICATIONS & COMPARISON TABLE */}
      {/* ========================================================= */}
      <ProductComparisonTable
        productName={product.name}
        price={product.price}
      />

      {/* ========================================================= */}
      {/* 5. CUSTOMER QUESTIONS & ANSWERS (Q&A) */}
      {/* ========================================================= */}
      <div id="qa">
        <ProductQA />
      </div>

      {/* ========================================================= */}
      {/* 6. RATINGS & REVIEWS BREAKDOWN */}
      {/* ========================================================= */}
      <div id="reviews">
        <ProductReviewsBreakdown />
      </div>

    </div>
  );
};

export default ProductClientWrapper;
