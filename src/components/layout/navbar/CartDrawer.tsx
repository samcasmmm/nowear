'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialItems: CartItem[] = [
  {
    id: 'cart-1',
    name: 'Heavyweight Boxy Tee - Vintage Black',
    size: 'L',
    color: 'Washed Charcoal',
    price: 999,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    quantity: 1,
  },
  {
    id: 'cart-2',
    name: 'Tactical Parachute Cargo Joggers',
    size: '32',
    color: 'Olive Moss',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80',
    quantity: 1,
  },
];

const FREE_SHIPPING_THRESHOLD = 2999;

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    if (
      promoCode.toUpperCase() === 'FIRST500' ||
      promoCode.toUpperCase() === 'NOWEAR500'
    ) {
      setDiscountApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "FIRST500"');
    }
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? 500 : 0;
  const progressToFreeShipping = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col z-50 bg-white">
        {/* Cart Drawer Header */}
        <SheetHeader className="p-4 sm:p-5 border-b border-neutral-200 flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-neutral-900" />
            <SheetTitle className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
              YOUR BAG ({items.reduce((sum, item) => sum + item.quantity, 0)})
            </SheetTitle>
          </div>
          <button
            onClick={onClose}
            aria-label="Close bag"
            className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </SheetHeader>

        {/* Free Shipping Meter */}
        <div className="bg-neutral-950 text-white px-5 py-3 border-b border-neutral-800">
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            {remainingForFreeShipping > 0 ? (
              <span className="flex items-center gap-1.5 text-neutral-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Add <span className="text-amber-400 font-mono font-black">₹{remainingForFreeShipping.toLocaleString('en-IN')}</span> for FREE Express Shipping
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Check className="w-3.5 h-3.5" />
                You unlocked FREE Express Air Shipping!
              </span>
            )}
            <span className="font-mono text-[11px] text-neutral-400">{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-black transition-all"
              >
                {/* Product Thumbnail */}
                <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-neutral-900 line-clamp-2">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                      <span>Size: <strong className="text-neutral-900 font-mono">{item.size}</strong></span>
                      <span>•</span>
                      <span>{item.color}</span>
                    </div>
                  </div>

                  {/* Pricing and Quantity */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-200/60">
                    <div className="flex items-center border border-neutral-300 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 text-neutral-600 hover:bg-neutral-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-bold font-mono text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 text-neutral-600 hover:bg-neutral-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-black text-neutral-900">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="block text-[10px] text-neutral-400 line-through">
                          ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-neutral-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900">Your bag is currently empty</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                Explore our latest street fits and oversize knits.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>

        {/* Promo Voucher Box */}
        {items.length > 0 && (
          <div className="p-4 border-t border-neutral-200 bg-neutral-50/70">
            {discountApplied ? (
              <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-300 rounded-lg text-xs font-bold text-emerald-800">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Coupon &apos;{promoCode.toUpperCase()}&apos; Applied (-₹500)</span>
                </div>
                <button
                  onClick={() => {
                    setDiscountApplied(false);
                    setPromoCode('');
                  }}
                  className="text-neutral-500 hover:text-black underline text-[11px]"
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
                    placeholder="Enter coupon (e.g. FIRST500)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 bg-white border border-neutral-300 rounded-lg text-xs font-medium text-neutral-900 placeholder-neutral-400 uppercase outline-none focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
            )}
            {promoError && (
              <span className="block mt-1 text-[11px] text-red-500 font-medium">
                {promoError}
              </span>
            )}
          </div>
        )}

        {/* Checkout Summary & CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-white space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-bold text-neutral-900">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600">
                  <span>Vault VIP Discount</span>
                  <span className="font-mono font-bold">-₹{discountAmount}</span>
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
              <div className="pt-2 border-t border-neutral-200 flex justify-between text-sm font-black text-neutral-900">
                <span>Estimated Total</span>
                <span className="font-mono text-base">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full py-3.5 bg-black hover:bg-neutral-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% ENCRYPTED CHECKOUT • COD AVAILABLE</span>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
