'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingBag,
  Trash2,
  Sparkles,
  ArrowRight,
  Star,
  Check,
} from 'lucide-react';
import { mockWishlistItems } from '@/data/profileData';

export const SavedFitsTab: React.FC = () => {
  const [items, setItems] = useState(mockWishlistItems);
  const [addedIds, setAddedIds] = useState<string[]>([]);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMoveToBag = (id: string) => {
    setAddedIds((prev) => [...prev, id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((i) => i !== id));
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-neutral-900">
            Saved Streetwear Fits ({items.length})
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Your personal archive of silhouettes, limited drops, and wanted items.
          </p>
        </div>

        <Link
          href="/checkout"
          className="text-xs font-bold text-neutral-900 underline hover:text-amber-600 transition-colors"
        >
          Go to Checkout
        </Link>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const isAdded = addedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-xs hover:border-black transition-all flex flex-col justify-between group"
              >
                {/* Image Showcase */}
                <div className="relative aspect-4/5 w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-black text-[#f6b800] text-[9px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                  )}
                  <button
                    onClick={() => handleRemove(item.id)}
                    aria-label="Remove fit"
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-neutral-400 hover:text-red-500 transition-colors cursor-pointer shadow-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1">
                      <span>{item.category}</span>
                      <span className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{item.rating}</span>
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-neutral-900 line-clamp-1">
                      {item.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-black font-mono text-neutral-900">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 line-through font-mono">
                        ₹{item.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <span className="inline-block mt-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.stockStatus}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-neutral-100">
                    <button
                      onClick={() => handleMoveToBag(item.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-neutral-950 hover:bg-black text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Bag!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Move to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200">
          <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-neutral-900">Your wishlist is empty</h3>
          <p className="text-xs text-neutral-500 mt-1">
            Tap the heart icon on any drop product to save your favorite fits here.
          </p>
        </div>
      )}
    </div>
  );
};

export default SavedFitsTab;
