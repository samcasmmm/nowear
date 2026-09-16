'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Check, CheckCircle2, ShoppingBag, Sparkles, Tag } from 'lucide-react';

interface BundleItem {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice: number;
  checked: boolean;
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
      category: 'This Item',
      image: currentProduct.image,
      price: currentProduct.price,
      originalPrice: currentProduct.originalPrice,
      checked: true,
    },
    {
      id: 'item-joggers',
      name: 'Transit Parachute Cargo Joggers',
      category: 'Streetwear Bottoms',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=85',
      price: 1399,
      originalPrice: 2199,
      checked: true,
    },
    {
      id: 'item-socks',
      name: 'Pack of 3 Heavy French Terry Tube Socks',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=600&q=85',
      price: 499,
      originalPrice: 799,
      checked: true,
    },
  ]);

  const [addedBundle, setAddedBundle] = useState<boolean>(false);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, checked: !it.checked } : it))
    );
  };

  const selectedItems = items.filter((it) => it.checked);
  const totalPrice = selectedItems.reduce((acc, it) => acc + it.price, 0);
  const totalOriginal = selectedItems.reduce((acc, it) => acc + it.originalPrice, 0);
  const bundleDiscount = selectedItems.length === 3 ? 250 : 0;
  const finalPrice = Math.max(totalPrice - bundleDiscount, 0);
  const totalSaved = totalOriginal - finalPrice;

  const handleAddBundle = () => {
    setAddedBundle(true);
    setTimeout(() => setAddedBundle(false), 2500);
  };

  return (
    <section className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-neutral-50 border-2 border-black shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 bg-[#e84125] inline-block rotate-45" />
        <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
          // AMAZON STYLE BUNDLE BUILDER
        </span>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 mb-6">
        Frequently Bought Together
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Interactive Visual Bundle Collage (7 cols) */}
        <div className="lg:col-span-7 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4">
          {items.map((item, idx) => (
            <React.Fragment key={item.id}>
              <div 
                onClick={() => toggleItem(item.id)}
                className={`relative w-28 sm:w-36 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-200 bg-white p-2 text-center group ${
                  item.checked
                    ? 'border-black shadow-md ring-2 ring-[#f6b800]'
                    : 'border-neutral-200 opacity-40 hover:opacity-70'
                }`}
              >
                <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden mb-2 bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.checked && (
                    <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shadow">
                      <Check className="w-3 h-3 text-[#f6b800]" />
                    </div>
                  )}
                </div>

                <span className="text-[9px] font-mono font-black uppercase text-[#e84125] block truncate">
                  {item.category}
                </span>
                <p className="text-[11px] font-bold text-neutral-900 truncate mt-0.5">
                  {item.name}
                </p>
                <div className="mt-1 flex items-center justify-center gap-1.5 text-xs font-mono font-black">
                  <span className="text-black">₹{item.price.toLocaleString('en-IN')}</span>
                  <span className="text-neutral-400 line-through text-[10px]">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {idx < items.length - 1 && (
                <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center shrink-0 font-mono font-bold">
                  <Plus className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Pricing Calculator & 1-Click Action (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-white border-2 border-neutral-200 shadow-sm flex flex-col justify-between space-y-4">
          
          {/* Checkboxes List */}
          <div className="space-y-2">
            {items.map((item) => (
              <label
                key={item.id}
                className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-neutral-800"
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem(item.id)}
                  className="mt-0.5 w-4 h-4 rounded text-[#e84125] focus:ring-[#e84125] border-neutral-300"
                />
                <span className="font-medium leading-tight">
                  <strong className="text-black font-semibold">{item.category}:</strong> {item.name} (
                  <span className="font-mono font-bold text-black">₹{item.price.toLocaleString('en-IN')}</span>)
                </span>
              </label>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="pt-3 border-t border-neutral-100">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-xs font-mono font-bold text-neutral-600 uppercase">
                Bundle Total ({selectedItems.length} items):
              </span>
              <div className="text-right">
                <span className="text-2xl font-black font-mono text-black">
                  ₹{finalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-mono text-neutral-400 line-through ml-2">
                  ₹{totalOriginal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {bundleDiscount > 0 && (
              <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bundle Combo Discount Applied: -₹{bundleDiscount}</span>
              </div>
            )}

            <div className="text-[11px] font-mono text-neutral-500 mt-1">
              Total Savings: <strong className="text-black">₹{totalSaved.toLocaleString('en-IN')}</strong>
            </div>
          </div>

          {/* 1-Click Action */}
          <button
            onClick={handleAddBundle}
            disabled={selectedItems.length === 0}
            className="w-full py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50"
          >
            {addedBundle ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#f6b800]" />
                <span>ADDED {selectedItems.length} ITEMS TO CART!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#f6b800]" />
                <span>ADD ALL {selectedItems.length} ITEMS TO CART</span>
              </>
            )}
          </button>

        </div>

      </div>
    </section>
  );
};

export default FrequentlyBoughtTogether;
