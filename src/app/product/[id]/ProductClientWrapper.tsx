'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';

interface ProductClientWrapperProps {
  product: Product;
}

export const ProductClientWrapper: React.FC<ProductClientWrapperProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [selectedColor, setSelectedColor] = useState<string>('Vintage Washed Black');

  // Curate 4-5 high-res lifestyle shots for this product
  const galleryImages = [
    product.image,
    'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
      
      {/* 1. BREADCRUMBS & TOP PRODUCT METADATA */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-xs font-mono text-neutral-500 border-b border-neutral-200">
        <div className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/category/oversized-tshirts" className="hover:text-black transition-colors">
            Streetwear
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-black transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-900 font-bold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-neutral-400">SKU: NW-280-BOX-2026</span>
          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-950 text-[10px] font-bold">
            #1 IN MEN&apos;S STREETWEAR
          </span>
        </div>
      </div>

      {/* 2. MAIN 3-COLUMN / 2-COLUMN HERO ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-6">
        
        {/* LEFT COLUMN: MULTI-IMAGE GALLERY WITH HOVER LOUPE ZOOM (6 cols) */}
        <div className="lg:col-span-6 xl:col-span-6">
          <ProductGallery
            images={galleryImages}
            productName={product.name}
            tag={product.tag || 'BESTSELLER'}
            gsm="280 GSM"
          />
        </div>

        {/* CENTER & RIGHT COLUMN: PRODUCT INFO & STICKY BUY BOX (6 cols) */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-6">
          
          {/* Header Info Block */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Link
                href="/"
                className="text-xs font-mono font-black uppercase text-[#e84125] hover:underline flex items-center gap-1"
              >
                <span>VISIT THE NWEAR OFFICIAL STORE</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </Link>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
              {product.name}
            </h1>

            {/* Subtitle spec */}
            <p className="mt-1 text-xs font-mono text-neutral-600 font-bold">
              280 GSM Combed Compact Cotton • Precision Drop Shoulder • Anti-Sag Neckband
            </p>

            {/* Ratings & Q&A counter */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-1 text-[#f6b800]">
                <span className="font-black text-black mr-1">{product.rating || 4.9}</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-neutral-400">|</span>
              <a href="#reviews" className="text-neutral-700 hover:text-black font-bold hover:underline">
                14,820 ratings
              </a>
              <span className="text-neutral-400">|</span>
              <a href="#qa" className="text-neutral-700 hover:text-black font-bold hover:underline">
                340+ answered questions
              </a>
            </div>
          </div>

          {/* Key Product Specification Bullets */}
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
            <h4 className="font-mono font-black uppercase tracking-wider text-neutral-900 text-[11px]">
              About This Item:
            </h4>
            <ul className="space-y-1.5 text-neutral-700 leading-snug">
              <li className="flex items-start gap-2">
                <span className="text-[#e84125] font-black">•</span>
                <span><strong>280 GSM Heavyweight Weave:</strong> Custom double-interlock combed cotton with substantial structured drape and zero sheer transparency.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e84125] font-black">•</span>
                <span><strong>Anti-Sag Collar Construction:</strong> 2.5cm ribbed collar with 5% Lycra core engineered to retain shape across 100+ wash cycles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e84125] font-black">•</span>
                <span><strong>Architectural Drop Shoulder:</strong> 4.2cm calibrated shoulder offset providing an effortless streetwear aesthetic.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e84125] font-black">•</span>
                <span><strong>Pre-Shrunk &amp; Micro-Pigment Dyed:</strong> Vapor steamed to restrict dimensional variance under 0.8%.</span>
              </li>
            </ul>
          </div>

          {/* Sticky Buy Box Component */}
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
          image: product.image,
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
