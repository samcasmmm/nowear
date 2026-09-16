'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
  MapPin,
  Clock,
  Sparkles,
  Check,
  Lock,
  Tag,
  Gift,
  HelpCircle,
  Share2,
  Heart,
  Flame,
  CheckCircle2,
} from 'lucide-react';

interface ProductBuyBoxProps {
  price: number;
  originalPrice: number;
  discount: number;
  productName: string;
  selectedSize: string;
  onSelectSize: (size: string) => void;
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const colorVariants = [
  { name: 'Vintage Washed Black', hex: '#1c1917', inStock: true },
  { name: 'Oatmeal Natural', hex: '#e7e5e4', inStock: true },
  { name: 'Forest Sage', hex: '#445145', inStock: true },
  { name: 'Acid Washed Blue', hex: '#3b82f6', inStock: false },
];

const sizeOptions = [
  { size: 'S', label: '38" Chest', stock: 'In Stock' },
  { size: 'M', label: '40" Chest', stock: 'Only 3 left' },
  { size: 'L', label: '42" Chest', stock: 'In Stock' },
  { size: 'XL', label: '44" Chest', stock: 'Only 2 left' },
  { size: 'XXL', label: '46" Chest', stock: 'In Stock' },
];

export const ProductBuyBox: React.FC<ProductBuyBoxProps> = ({
  price,
  originalPrice,
  discount,
  productName,
  selectedSize,
  onSelectSize,
  selectedColor,
  onSelectColor,
}) => {
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [pincode, setPincode] = useState<string>('400001');
  const [isCheckingPin, setIsCheckingPin] = useState<boolean>(false);
  const [pincodeValidated, setPincodeValidated] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [isGiftWrap, setIsGiftWrap] = useState<boolean>(false);
  const [showSizeModal, setShowSizeModal] = useState<boolean>(false);

  const couponDiscount = 150;
  const effectivePrice = couponApplied ? Math.max(price - couponDiscount, 0) : price;
  const totalSavings = originalPrice - effectivePrice;

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) return;
    setIsCheckingPin(true);
    setTimeout(() => {
      setIsCheckingPin(false);
      setPincodeValidated(true);
    }, 400);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-neutral-200/90 p-5 sm:p-6 shadow-xl relative ring-1 ring-black/5">
      
      {/* 1. PRICE & DEALS BLOCK */}
      <div className="pb-5 border-b border-neutral-200">
        
        {/* Limited Time Deal Banner */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="px-2.5 py-1 rounded bg-[#e84125] text-white text-[10px] font-mono font-black uppercase tracking-wider">
            LIMITED TIME DEAL
          </span>
          <span className="text-xs font-mono font-bold text-red-600 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Ends in 04h 18m 32s
          </span>
        </div>

        {/* Primary Pricing */}
        <div className="flex items-baseline gap-3">
          <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-950">
            ₹{effectivePrice.toLocaleString('en-IN')}
          </span>
          <span className="text-lg font-mono text-neutral-400 line-through">
            ₹{originalPrice.toLocaleString('en-IN')}
          </span>
          <span className="text-sm font-black font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
            {discount}% OFF
          </span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500 font-mono">
          <span>Inclusive of all taxes</span>
          <span>•</span>
          <span className="text-emerald-700 font-bold">You save ₹{totalSavings.toLocaleString('en-IN')}</span>
        </div>

        {/* 1-Click Coupon Checkbox */}
        <div className="mt-4 p-3 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between">
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={couponApplied}
              onChange={(e) => setCouponApplied(e.target.checked)}
              className="w-4 h-4 rounded text-[#e84125] focus:ring-[#e84125] border-neutral-400"
            />
            <div>
              <span className="text-xs font-bold text-neutral-900 block">
                Apply ₹150 Coupon
              </span>
              <span className="text-[10px] text-neutral-600 font-mono">
                Instant ₹150 discount applied at checkout
              </span>
            </div>
          </label>
          <span className="text-[10px] font-mono font-black text-amber-900 uppercase bg-amber-200/80 px-2 py-0.5 rounded">
            COUPON: FIRST150
          </span>
        </div>
      </div>

      {/* 2. COLOR SWATCHES SELECTOR */}
      <div className="py-4 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-mono font-bold uppercase text-neutral-600">
            Color: <strong className="text-neutral-950 font-sans">{selectedColor}</strong>
          </span>
          <span className="text-[10px] font-mono text-neutral-500">4 Shades Available</span>
        </div>

        <div className="flex items-center gap-2.5">
          {colorVariants.map((col) => (
            <button
              key={col.name}
              onClick={() => onSelectColor(col.name)}
              title={col.name}
              className={`w-9 h-9 rounded-full border transition-all relative flex items-center justify-center ${
                selectedColor === col.name
                  ? 'border-neutral-900 ring-2 ring-[#f6b800] scale-110 shadow-sm'
                  : 'border-neutral-300 hover:border-neutral-600'
              }`}
              style={{ backgroundColor: col.hex }}
            >
              {selectedColor === col.name && (
                <Check className={`w-4 h-4 ${col.hex === '#e7e5e4' ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. SIZE SELECTOR WITH LIVE STOCK METER */}
      <div className="py-4 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-mono font-bold uppercase text-neutral-600">
            Select Size: <strong className="text-neutral-950 font-sans">{selectedSize}</strong>
          </span>
          <button
            onClick={() => setShowSizeModal(true)}
            className="text-xs font-mono font-bold text-[#e84125] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Size Guide
          </button>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {sizeOptions.map((opt) => (
            <button
              key={opt.size}
              onClick={() => onSelectSize(opt.size)}
              className={`py-2.5 rounded-xl border font-mono text-xs font-black transition-all flex flex-col items-center justify-center cursor-pointer ${
                selectedSize === opt.size
                  ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                  : 'border-neutral-200 bg-neutral-50/80 text-neutral-800 hover:border-neutral-400 hover:bg-white'
              }`}
            >
              <span>{opt.size}</span>
              <span className={`text-[8px] font-normal truncate mt-0.5 ${selectedSize === opt.size ? 'text-amber-300' : 'text-neutral-500'}`}>
                {opt.stock}
              </span>
            </button>
          ))}
        </div>

        {/* Fit Confidence Badge */}
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-neutral-600 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#f6b800]" />
          <span>Fit: <strong>89% say fits true to size</strong> (Boxy drop cut)</span>
        </div>
      </div>

      {/* 4. PINCODE DELIVERY ESTIMATOR */}
      <div className="py-4 border-b border-neutral-200">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-900 mb-2">
          <MapPin className="w-4 h-4 text-[#e84125]" />
          <span>DELIVER TO:</span>
        </div>

        <form onSubmit={handlePincodeCheck} className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
            placeholder="Enter 6-digit Pincode"
            className="flex-1 px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs font-bold focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
          />
          <button
            type="submit"
            disabled={isCheckingPin}
            className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
          >
            {isCheckingPin ? '...' : 'Check'}
          </button>
        </form>

        {pincodeValidated && (
          <div className="mt-3 space-y-1.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-start gap-2 text-xs">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900">
                  FREE Express Delivery <strong className="text-emerald-700">Tomorrow by 2 PM</strong>
                </span>
                <span className="text-[11px] text-neutral-500 block font-mono">
                  Order within <strong>03 hrs 24 mins</strong>
                </span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-neutral-500 pl-6">
              Delivering to Mumbai 400001 • Cash On Delivery Available
            </div>
          </div>
        )}
      </div>

      {/* 5. STOCK URGENCY & QUANTITY SELECTOR */}
      <div className="py-4 border-b border-neutral-200 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-mono font-black text-red-600 uppercase">
              ONLY 3 LEFT IN STOCK
            </span>
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">High demand • 18 people viewing</span>
        </div>

        {/* Quantity dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-600 font-bold">Qty:</span>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="px-2.5 py-1.5 rounded-lg border border-neutral-300 font-mono text-xs font-black bg-white focus:border-neutral-900"
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 6. GIFT WRAP CHECKBOX */}
      <div className="py-3 border-b border-neutral-200">
        <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-neutral-700 font-medium">
          <input
            type="checkbox"
            checked={isGiftWrap}
            onChange={(e) => setIsGiftWrap(e.target.checked)}
            className="w-3.5 h-3.5 rounded text-[#e84125]"
          />
          <Gift className="w-3.5 h-3.5 text-neutral-500" />
          <span>Add Luxury Streetwear Gift Packaging (+₹49)</span>
        </label>
      </div>

      {/* 7. ACTION BUTTONS (ADD TO CART & BUY NOW) */}
      <div className="pt-5 space-y-3">
        <button
          onClick={handleAddToCart}
          className="w-full py-4 rounded-2xl bg-[#f6b800] hover:bg-[#ffc21a] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all active:scale-[0.98] border border-black/10"
        >
          {addedToCart ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>ADDED TO BAG (QTY: {quantity})</span>
            </>
          ) : (
            <>
              <Tag className="w-4 h-4 text-black" />
              <span>ADD TO BAG • ₹{(effectivePrice * quantity).toLocaleString('en-IN')}</span>
            </>
          )}
        </button>

        <button
          onClick={handleAddToCart}
          className="w-full py-4 rounded-2xl bg-[#e84125] hover:bg-[#d0351b] text-white font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/20 transition-all active:scale-[0.98] border border-black/10"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>BUY NOW (1-CLICK CHECKOUT)</span>
        </button>

        {/* Wishlist & Share row */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-600 hover:text-red-500 transition-colors"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: productName, url: window.location.href });
              }
            }}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-600 hover:text-black transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* 8. TRUST GUARANTEES & SELLER INFO */}
      <div className="mt-6 pt-5 border-t border-neutral-200 grid grid-cols-2 gap-3 text-[11px] text-neutral-600 font-mono">
        <div className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-neutral-800 shrink-0" />
          <span>7-Day Free Returns &amp; Exchange</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
          <span>100% Cotton Authenticity</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-neutral-800 shrink-0" />
          <span>Secure Encrypted Payment</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#f6b800] shrink-0" />
          <span>NWear Prime Assured</span>
        </div>
      </div>

      {/* Seller Credentials */}
      <div className="mt-4 pt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-500 flex items-center justify-between">
        <span>Ships from: <strong>NWear Fulfillment Center</strong></span>
        <span>Sold by: <strong>NWear Studio Official</strong></span>
      </div>

      {/* SIZE CHART MODAL POPUP */}
      {showSizeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-neutral-300 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
              <h3 className="text-lg font-black uppercase">NWear Boxy Fit Size Chart</h3>
              <button
                onClick={() => setShowSizeModal(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="bg-neutral-100 text-left">
                    <th className="p-2.5 font-black">SIZE</th>
                    <th className="p-2.5 font-black">CHEST (IN)</th>
                    <th className="p-2.5 font-black">LENGTH (IN)</th>
                    <th className="p-2.5 font-black">SHOULDER (IN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr><td className="p-2.5 font-bold">S</td><td className="p-2.5">38 - 40</td><td className="p-2.5">27.5</td><td className="p-2.5">20.5</td></tr>
                  <tr className="bg-neutral-50"><td className="p-2.5 font-bold">M</td><td className="p-2.5">41 - 42</td><td className="p-2.5">28.5</td><td className="p-2.5">21.5</td></tr>
                  <tr><td className="p-2.5 font-bold">L</td><td className="p-2.5">43 - 44</td><td className="p-2.5">29.5</td><td className="p-2.5">22.5</td></tr>
                  <tr className="bg-neutral-50"><td className="p-2.5 font-bold">XL</td><td className="p-2.5">45 - 46</td><td className="p-2.5">30.5</td><td className="p-2.5">23.5</td></tr>
                  <tr><td className="p-2.5 font-bold">XXL</td><td className="p-2.5">47 - 48</td><td className="p-2.5">31.5</td><td className="p-2.5">24.5</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
              <strong>Fit Tip:</strong> Our silhouettes feature an oversized, drop-shoulder design. If you prefer a regular classic fit, choose one size down.
            </div>

            <button
              onClick={() => setShowSizeModal(false)}
              className="mt-5 w-full py-3 rounded-xl bg-black text-white font-mono text-xs font-bold uppercase"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductBuyBox;
