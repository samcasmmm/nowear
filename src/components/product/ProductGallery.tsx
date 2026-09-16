'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Maximize2,
  Play,
  RotateCw,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  tag?: string;
  gsm?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  tag = 'BESTSELLER',
  gsm = '280 GSM',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<'photos' | 'video' | '360'>('photos');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const galleryImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85',
  ];

  const currentImage = galleryImages[selectedIndex] || galleryImages[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
      
      {/* 1. THUMBNAILS LIST (Left on desktop, bottom on mobile) */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[620px] scrollbar-none py-1 lg:py-0 shrink-0">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedIndex(idx);
              setActiveMediaTab('photos');
            }}
            className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-200 ${
              selectedIndex === idx && activeMediaTab === 'photos'
                ? 'border-black shadow-md ring-2 ring-[#f6b800]'
                : 'border-neutral-200 hover:border-neutral-400 opacity-80 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
            {idx === 0 && (
              <span className="absolute bottom-0 inset-x-0 bg-black/80 text-white text-[8px] font-mono font-bold text-center py-0.5">
                FRONT
              </span>
            )}
            {idx === 1 && (
              <span className="absolute bottom-0 inset-x-0 bg-black/80 text-white text-[8px] font-mono font-bold text-center py-0.5">
                FIT
              </span>
            )}
            {idx === 2 && (
              <span className="absolute bottom-0 inset-x-0 bg-black/80 text-white text-[8px] font-mono font-bold text-center py-0.5">
                TEXTURE
              </span>
            )}
            {idx === 3 && (
              <span className="absolute bottom-0 inset-x-0 bg-black/80 text-white text-[8px] font-mono font-bold text-center py-0.5">
                STREET
              </span>
            )}
          </button>
        ))}

        {/* Media Preview Tabs */}
        <button
          onClick={() => setActiveMediaTab('video')}
          className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl shrink-0 border-2 flex flex-col items-center justify-center gap-1 transition-all ${
            activeMediaTab === 'video'
              ? 'border-black bg-neutral-900 text-white shadow-md'
              : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          <Play className="w-5 h-5 text-[#e84125] fill-current" />
          <span className="text-[9px] font-mono font-black uppercase">VIDEO</span>
        </button>

        <button
          onClick={() => setActiveMediaTab('360')}
          className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl shrink-0 border-2 flex flex-col items-center justify-center gap-1 transition-all ${
            activeMediaTab === '360'
              ? 'border-black bg-neutral-900 text-white shadow-md'
              : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          <RotateCw className="w-5 h-5 text-[#f6b800]" />
          <span className="text-[9px] font-mono font-black uppercase">360° SPIN</span>
        </button>
      </div>

      {/* 2. MAIN INTERACTIVE VIEWER CONTAINER */}
      <div className="relative flex-1 rounded-3xl overflow-hidden border-2 border-neutral-200/80 bg-neutral-50 shadow-lg aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-[620px]">
        
        {activeMediaTab === 'photos' && (
          <div
            className="relative w-full h-full cursor-crosshair overflow-hidden group"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Standard Image */}
            <Image
              src={currentImage}
              alt={productName}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 650px"
              className={`object-cover transition-opacity duration-200 ${
                isZoomed ? 'opacity-0 lg:opacity-0' : 'opacity-100'
              }`}
            />

            {/* Hover Magnifier Loupe Zoom (Amazon Style) */}
            <div
              className={`absolute inset-0 bg-no-repeat transition-opacity duration-150 pointer-events-none hidden lg:block ${
                isZoomed ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${currentImage})`,
                backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                backgroundSize: '250%',
              }}
            />

            {/* Mobile Fallback for non-hover touch devices */}
            <div className="lg:hidden absolute inset-0">
              <Image
                src={currentImage}
                alt={productName}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Top Overlay Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <span className="px-3 py-1 rounded-lg bg-[#e84125] text-white text-[10px] font-mono font-black uppercase tracking-wider shadow">
                #1 BESTSELLER
              </span>
              <span className="px-3 py-1 rounded-lg bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                {gsm}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur border border-neutral-300 text-neutral-900 text-[10px] font-mono font-bold shadow flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-neutral-600" />
                <span className="hidden sm:inline">HOVER TO ZOOM</span>
              </div>
            </div>

            {/* Navigation Arrows for fast scrolling */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-neutral-300 shadow-md flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-neutral-300 shadow-md flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Indicator Pill */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center z-10 pointer-events-none">
              <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur text-white font-mono text-[10px] font-bold">
                {selectedIndex + 1} / {galleryImages.length} VIEWS
              </div>
            </div>
          </div>
        )}

        {/* Video Tab Preview */}
        {activeMediaTab === 'video' && (
          <div className="relative w-full h-full bg-neutral-950 flex flex-col items-center justify-center p-8 text-white text-center">
            <div className="w-16 h-16 rounded-full bg-[#e84125] flex items-center justify-center mb-4 shadow-xl animate-pulse">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight mb-1">
              Studio Runway &amp; Fit Check
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm font-mono mb-4">
              Model is 6&apos;1&quot; (185 cm) wearing Size L. 280 GSM Structured Drop-Shoulder Weave.
            </p>
            <button
              onClick={() => setActiveMediaTab('photos')}
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-200"
            >
              Back to Gallery
            </button>
          </div>
        )}

        {/* 360 Spin Tab Preview */}
        {activeMediaTab === '360' && (
          <div className="relative w-full h-full bg-neutral-900 flex flex-col items-center justify-center p-8 text-white text-center">
            <RotateCw className="w-12 h-12 text-[#f6b800] animate-spin mb-4" />
            <h4 className="text-lg font-black uppercase tracking-tight mb-1">
              Interactive 360° Silhouette
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm font-mono mb-4">
              Drag horizontally to inspect precision seam construction and drape angles.
            </p>
            <div className="flex gap-2">
              <button
                onClick={prevImage}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 text-xs font-mono font-bold hover:bg-neutral-700"
              >
                Rotate Left
              </button>
              <button
                onClick={nextImage}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 text-xs font-mono font-bold hover:bg-neutral-700"
              >
                Rotate Right
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProductGallery;
