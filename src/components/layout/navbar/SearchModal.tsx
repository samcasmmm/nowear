'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, TrendingUp, Sparkles, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { bestsellers, autumnEscapes, moodCategories } from '@/data/storeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingSearches = [
  'Heavyweight Boxy Tee',
  'Acid Wash Hoodie',
  'Parachute Cargo Pants',
  'Waffle Knit Co-ord',
  'Oversized Resort Shirt',
  'French Terry Joggers',
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Combine products for search catalog
  const catalog = useMemo(() => {
    const all = [
      ...bestsellers.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        originalPrice: p.originalPrice,
        image: p.image,
        category: p.category,
        href: p.href,
        badge: p.tag || 'Bestseller',
      })),
      ...autumnEscapes.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        originalPrice: p.originalPrice,
        image: p.image,
        category: 'Autumn Collection',
        href: p.href,
        badge: p.tag || 'New Drop',
      })),
    ];
    // Deduplicate by ID
    const seen = new Set();
    return all.filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return catalog.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, catalog]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 px-4 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200/80 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-6 py-4.5 border-b border-neutral-200 bg-neutral-50/70">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search fits, silhouettes, acid wash, cargos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-neutral-900 placeholder-neutral-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-300 transition-colors shrink-0 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 custom-scrollbar">
          {/* If Search Query is Active */}
          {query.trim() ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  {searchResults.length} {searchResults.length === 1 ? 'RESULT FOUND' : 'RESULTS FOUND'}
                </span>
                <span className="text-xs text-neutral-500">Searching for &quot;{query}&quot;</span>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {searchResults.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-3.5 p-2.5 rounded-xl border border-neutral-200/80 hover:border-black hover:bg-neutral-50 transition-all duration-200"
                    >
                      <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[10px] font-mono font-black uppercase text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded-xs mb-1">
                          {item.badge}
                        </span>
                        <h4 className="text-xs font-bold text-neutral-900 group-hover:text-blue-900 truncate">
                          {item.name}
                        </h4>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs font-black text-neutral-900">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-neutral-400 line-through">
                            ₹{item.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all mr-2 shrink-0" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-3 text-neutral-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">No matching fits found</h4>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                    Try searching for &quot;T-Shirts&quot;, &quot;Cargos&quot;, or &quot;Hoodies&quot;
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Default State when Query is Empty */
            <div className="space-y-6">
              {/* Trending Searches */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-500" />
                  <span>TRENDING NOW</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-700 hover:border-black hover:bg-neutral-900 hover:text-white transition-all cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Categories Grid */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>EXPLORE SILHOUETTES</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {moodCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      onClick={onClose}
                      className="group relative h-24 rounded-xl overflow-hidden border border-neutral-200 flex flex-col justify-end p-2.5 text-white"
                    >
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75 group-hover:brightness-60"
                      />
                      <div className="relative z-10">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-amber-300 block">
                          {cat.tag}
                        </span>
                        <h5 className="text-[11px] font-black uppercase tracking-tight leading-tight line-clamp-1">
                          {cat.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Instant Bestsellers Spotlight */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  <span>TOP PICK OF THE WEEK</span>
                  <Link
                    href="/category/bestsellers"
                    onClick={onClose}
                    className="text-[11px] font-bold text-neutral-900 hover:underline flex items-center gap-1"
                  >
                    View All <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {bestsellers.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      className="group rounded-xl border border-neutral-200 overflow-hidden bg-white hover:border-black transition-all"
                    >
                      <div className="relative aspect-3/4 bg-neutral-100 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2">
                        <h6 className="text-[11px] font-bold text-neutral-900 truncate">
                          {item.name}
                        </h6>
                        <span className="text-xs font-black text-neutral-900 mt-0.5 block">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50/90 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>⚡ FREE SHIPPING OVER ₹999</span>
          <span>PRESS ↵ TO SELECT</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
