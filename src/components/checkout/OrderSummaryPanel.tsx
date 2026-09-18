'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ShoppingBag,
  Tag,
  Check,
  Sparkles,
  ShieldCheck,
  Coins,
  Trash2,
  Plus,
  Minus,
  RotateCcw,
  Leaf,
  Award,
} from 'lucide-react';
import { CheckoutItem, PromoCoupon, availableCoupons } from '@/data/checkoutData';

interface OrderSummaryPanelProps {
  items: CheckoutItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  appliedCoupon: PromoCoupon | null;
  onApplyCoupon: (coupon: PromoCoupon | null) => void;
  vaultCoinsApplied: boolean;
  onToggleVaultCoins: (apply: boolean) => void;
  shippingFee: number;
  subtotal: number;
  discountAmount: number;
  coinsDiscount: number;
  grandTotal: number;
}

export const OrderSummaryPanel: React.FC<OrderSummaryPanelProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  appliedCoupon,
  onApplyCoupon,
  vaultCoinsApplied,
  onToggleVaultCoins,
  shippingFee,
  subtotal,
  discountAmount,
  coinsDiscount,
  grandTotal,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const found = availableCoupons.find(
      (c) => c.code.toUpperCase() === promoInput.trim().toUpperCase()
    );

    if (found) {
      if (subtotal < found.minSpend) {
        setPromoError(`Min order value of ₹${found.minSpend.toLocaleString('en-IN')} required`);
        return;
      }
      onApplyCoupon(found);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try FIRST500 or VAULT500');
    }
  };

  const handleSelectQuickCoupon = (c: PromoCoupon) => {
    if (subtotal < c.minSpend) {
      setPromoError(`Min order value of ₹${c.minSpend.toLocaleString('en-IN')} required`);
      return;
    }
    setPromoInput(c.code);
    onApplyCoupon(c);
    setPromoError('');
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs space-y-5 lg:sticky lg:top-24">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-neutral-900" />
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight text-neutral-900">
            Order Summary ({items.reduce((sum, item) => sum + item.quantity, 0)} Items)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold text-neutral-500">NW-BAG</span>
      </div>

      {/* Cart Items List */}
      <div className="space-y-3 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 p-2.5 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
          >
            {/* Thumbnail */}
            <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-neutral-200 shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-1">
                  <h4 className="text-xs font-bold text-neutral-900 line-clamp-1">
                    {item.name}
                  </h4>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-neutral-400 hover:text-red-500 p-0.5 transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5 font-medium">
                  <span>Size: <strong className="font-mono text-neutral-900">{item.size}</strong></span>
                  <span>•</span>
                  <span className="line-clamp-1">{item.color}</span>
                </div>
                {item.gsm && (
                  <span className="inline-block mt-0.5 text-[9px] font-mono font-bold text-neutral-600 bg-neutral-200/60 px-1.5 py-0.2 rounded">
                    {item.gsm}
                  </span>
                )}
              </div>

              {/* Quantity and Price */}
              <div className="flex items-center justify-between pt-1 border-t border-neutral-200/50">
                <div className="flex items-center border border-neutral-200 rounded-md bg-white overflow-hidden scale-90 -ml-1">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-1 text-neutral-600 hover:bg-neutral-100"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-2 text-xs font-bold font-mono text-neutral-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-1 text-neutral-600 hover:bg-neutral-100"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-neutral-900 font-mono">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NWear Vault Coins Redemption Box */}
      <div className="p-3 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-black text-[#f6b800]">
            <Coins className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black uppercase text-neutral-900">
                NWear Vault Coins
              </span>
              <span className="text-[10px] font-mono font-bold bg-[#f6b800] text-black px-1.5 py-0.2 rounded">
                1,450 Available
              </span>
            </div>
            <p className="text-[11px] text-neutral-600">
              Redeem 500 Coins for <strong className="font-mono text-neutral-900">₹500 Instant Off</strong>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onToggleVaultCoins(!vaultCoinsApplied)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
            vaultCoinsApplied
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-neutral-900 text-white hover:bg-black'
          }`}
        >
          {vaultCoinsApplied ? 'Applied ✓' : 'Redeem'}
        </button>
      </div>

      {/* Promo Code Input & Quick Coupons */}
      <div className="space-y-2 pt-1 border-t border-neutral-200">
        {appliedCoupon ? (
          <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>
                Coupon <strong>&apos;{appliedCoupon.code}&apos;</strong> Applied (-₹{discountAmount})
              </span>
            </div>
            <button
              onClick={() => {
                onApplyCoupon(null);
                setPromoInput('');
              }}
              className="text-neutral-500 hover:text-black underline text-[11px] cursor-pointer"
            >
              Remove
            </button>
          </div>
        ) : (
          <form onSubmit={handleApplyPromo} className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Discount code / Gift card"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium uppercase outline-none focus:bg-white focus:border-black"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Apply
            </button>
          </form>
        )}

        {promoError && (
          <span className="block text-[11px] text-red-500 font-medium">
            {promoError}
          </span>
        )}

        {/* Quick Coupons List */}
        {!appliedCoupon && (
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1">
            {availableCoupons.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => handleSelectQuickCoupon(c)}
                className="shrink-0 px-2 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-[10px] font-mono font-bold text-neutral-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>{c.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Detailed Price Calculation */}
      <div className="space-y-2 pt-3 border-t border-neutral-200 text-xs text-neutral-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono font-bold text-neutral-900">
            ₹{subtotal.toLocaleString('en-IN')}
          </span>
        </div>

        {discountAmount > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span>Promo Coupon Discount</span>
            <span className="font-mono font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
          </div>
        )}

        {coinsDiscount > 0 && (
          <div className="flex justify-between text-amber-700">
            <span>NWear Vault Coins Redeemed</span>
            <span className="font-mono font-bold">-₹{coinsDiscount.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Estimated Shipping</span>
          <span className="font-mono font-bold text-neutral-900">
            {shippingFee === 0 ? (
              <span className="text-emerald-600 uppercase font-black">FREE</span>
            ) : (
              `₹${shippingFee}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-neutral-400 text-[11px]">
          <span>Goods & Services Tax (GST 12%)</span>
          <span className="font-mono">Included in price</span>
        </div>

        <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline text-neutral-900">
          <div>
            <span className="text-sm font-black uppercase">Grand Total</span>
            <span className="block text-[10px] text-neutral-500 font-mono">Includes all taxes</span>
          </div>
          <span className="text-xl font-black font-mono">
            ₹{grandTotal.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Trust & Guarantee Badges */}
      <div className="pt-3 border-t border-neutral-200 grid grid-cols-3 gap-2 text-center text-[10px] text-neutral-500 font-medium">
        <div className="p-2 rounded-lg bg-neutral-50 flex flex-col items-center justify-center gap-1">
          <Award className="w-3.5 h-3.5 text-neutral-800" />
          <span>100% Combed Heavy Cotton</span>
        </div>
        <div className="p-2 rounded-lg bg-neutral-50 flex flex-col items-center justify-center gap-1">
          <RotateCcw className="w-3.5 h-3.5 text-neutral-800" />
          <span>7-Day Easy Exchanges</span>
        </div>
        <div className="p-2 rounded-lg bg-neutral-50 flex flex-col items-center justify-center gap-1">
          <Leaf className="w-3.5 h-3.5 text-emerald-600" />
          <span>Carbon Neutral Transit</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPanel;
