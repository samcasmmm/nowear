'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Plus,
  Check,
  CheckCircle2,
  ShoppingBag,
  Sparkles,
  Tag,
  ShieldCheck,
  ArrowRight,
  Layers,
} from 'lucide-react';

interface BundleItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
  price: number;
  originalPrice: number;
  checked: boolean;
  selectedSize: string;
  sizes: string[];
}

interface FrequentlyBoughtTogetherProps {
  currentProduct: {
    name: string;
    image: string;
    price: number;
    originalPrice: number;
  };
}

export const FrequentlyBoughtTogether: React.FC<FrequentlyBoughtTogetherProps> = ({
  currentProduct,
}) => {
  const [items, setItems] = useState<BundleItem[]>([
    {
      id: 'item-main',
      name: currentProduct.name,
      category: 'Primary Piece',
      badge: 'THIS ITEM',
      image: currentProduct.image,
      price: currentProduct.price,
      originalPrice: currentProduct.originalPrice,
      checked: true,
      selectedSize: 'L',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 'item-joggers',
      name: 'Transit Parachute Cargo Joggers',
      category: 'Streetwear Bottoms',
      badge: 'MATCHING FIT',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=85',
      price: 1399,
      originalPrice: 2199,
      checked: true,
      selectedSize: '32 (M)',
      sizes: ['30 (S)', '32 (M)', '34 (L)', '36 (XL)'],
    },
    {
      id: 'item-socks',
      name: 'Pack of 3 Heavy French Terry Tube Socks',
      category: 'Street Accessories',
      badge: 'COMBO ADDON',
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=85',
      price: 499,
      originalPrice: 799,
      checked: true,
      selectedSize: 'Free Size',
      sizes: ['Free Size'],
    },
  ]);

  React.useEffect(() => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === 'item-main'
          ? {
              ...it,
              name: currentProduct.name,
              image: currentProduct.image,
              price: currentProduct.price,
              originalPrice: currentProduct.originalPrice,
            }
          : it
      )
    );
  }, [currentProduct.name, currentProduct.image, currentProduct.price, currentProduct.originalPrice]);

  const [addedBundle, setAddedBundle] = useState<boolean>(false);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  const updateSize = (id: string, size: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, selectedSize: size } : it))
    );
  };

  const selectedItems = items.filter((it) => it.checked);
  const totalPrice = selectedItems.reduce((acc, it) => acc + it.price, 0);
  const totalOriginal = selectedItems.reduce((acc, it) => acc + it.originalPrice, 0);
  const bundleDiscount = selectedItems.length === 3 ? 350 : selectedItems.length === 2 ? 150 : 0;
  const finalPrice = Math.max(totalPrice - bundleDiscount, 0);
  const totalSaved = totalOriginal - finalPrice;

  const handleAddBundle = () => {
    setAddedBundle(true);
    setTimeout(() => setAddedBundle(false), 2500);
  };

  return (
    <section className="w-full my-12 p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl font-sans selection:bg-[#f6b800] selection:text-black">
      
      {/* 1. HEADER ROW */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-neutral-800 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
              // CURATED FIT COMBOS • BUNDLE ARCHIVE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
            Frequently Bought Together
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-medium max-w-xl">
            Complete the aesthetic with handpicked pieces engineered to match in fabric drape, tone, and silhouette.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 font-mono text-xs font-black text-[#f6b800] flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>SAVE EXTRA ₹350 ON 3-PIECE BUNDLE</span>
          </div>
        </div>
      </div>

      {/* 2. BALANCED EQUAL-HEIGHT GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
        
        {/* LEFT: 3-CARD PRODUCT GRID WITH EQUAL HEIGHT (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            {items.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 bg-neutral-950 p-3.5 flex flex-col justify-between group ${
                  item.checked
                    ? 'border-[#f6b800] shadow-xl ring-1 ring-[#f6b800]/40'
                    : 'border-neutral-800 opacity-40 hover:opacity-75'
                }`}
              >
                {/* Top Item Badge & Checkbox */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[9px] font-mono font-black uppercase tracking-wider text-black bg-[#f6b800] px-2 py-0.5 rounded shadow-xs">
                      {item.badge}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                        item.checked
                          ? 'bg-[#f6b800] border-[#f6b800] text-black shadow'
                          : 'border-neutral-600 bg-neutral-900 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-3 bg-neutral-900 border border-neutral-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 250px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Product Meta */}
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase block truncate">
                    {item.category}
                  </span>
                  <h3 className="text-xs font-black uppercase tracking-tight text-white line-clamp-2 mt-0.5 leading-snug">
                    {item.name}
                  </h3>
                </div>

                {/* Bottom Pricing & Size Selector */}
                <div className="mt-3 pt-3 border-t border-neutral-800 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-black font-mono text-white">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 line-through">
                      ₹{item.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Size Dropdown */}
                  {item.sizes.length > 1 && (
                    <div onClick={(e) => e.stopPropagation()} className="pt-1">
                      <select
                        value={item.selectedSize}
                        onChange={(e) => updateSize(item.id, e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-mono text-[10px] font-bold focus:border-[#f6b800] focus:outline-none"
                      >
                        {item.sizes.map((s) => (
                          <option key={s} value={s}>
                            Size: {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: BUNDLE SUMMARY BOX WITH EXACT EQUAL HEIGHT (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col justify-between space-y-6">
          
          {/* Top Bundle Header */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-mono font-black uppercase text-neutral-400">
                BUNDLE SUMMARY
              </span>
              <span className="text-[10px] font-mono font-bold text-[#f6b800] bg-[#f6b800]/10 px-2 py-0.5 rounded border border-[#f6b800]/30">
                {selectedItems.length} OF {items.length} SELECTED
              </span>
            </div>

            {/* Checkbox Breakdown List */}
            <div className="space-y-3 mt-4">
              {items.map((it) => (
                <label
                  key={it.id}
                  className="flex items-start gap-3 cursor-pointer select-none text-xs text-neutral-300 hover:text-white transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={it.checked}
                    onChange={() => toggleItem(it.id)}
                    className="mt-0.5 w-4 h-4 rounded text-[#f6b800] focus:ring-[#f6b800] border-neutral-700 bg-neutral-900"
                  />
                  <div className="flex-1 leading-tight">
                    <span className="font-bold text-white block text-xs truncate">
                      {it.name}
                    </span>
                    <div className="text-[11px] font-mono text-neutral-400 mt-0.5 flex items-center justify-between">
                      <span>{it.selectedSize}</span>
                      <span className="font-bold text-white">₹{it.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Pricing & 1-Click CTA */}
          <div className="pt-4 border-t border-neutral-800 space-y-4">
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  Total Bundle Price:
                </span>
                <div className="text-right">
                  <span className="text-3xl font-black font-mono text-[#f6b800]">
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 line-through ml-2">
                    ₹{totalOriginal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {bundleDiscount > 0 && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20 mt-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Combo Perk Applied: Save Extra ₹{bundleDiscount}!</span>
                </div>
              )}

              <div className="text-[11px] font-mono text-neutral-400 mt-2 flex items-center justify-between">
                <span>Total Bundle Savings:</span>
                <strong className="text-white font-black">₹{totalSaved.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* 1-Click Add Action */}
            <button
              onClick={handleAddBundle}
              disabled={selectedItems.length === 0}
              className="w-full py-4 rounded-xl bg-[#f6b800] hover:bg-[#ffc21a] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
            >
              {addedBundle ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>ADDED {selectedItems.length} ITEMS TO BAG!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-black" />
                  <span>ADD {selectedItems.length} ITEMS TO BAG • ₹{finalPrice.toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FrequentlyBoughtTogether;
