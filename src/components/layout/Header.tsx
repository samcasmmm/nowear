'use client';

import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Sparkles, Truck, ShieldCheck, RefreshCw, Copy, Check, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText('FIRST500');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-[#11162d] text-white border-b border-white/10 text-xs font-semibold tracking-wider selection:bg-amber-400 selection:text-black">
      <div className="flex items-center justify-between">
        
        {/* Left Ticker / Announcement Marquee */}
        <div className="flex-1 overflow-hidden py-2 px-2 sm:px-4">
          <Marquee speed={45} pauseOnHover autoFill className="overflow-hidden">
            <span className="inline-flex items-center gap-2 mx-6 text-[11px] font-bold tracking-wider">
              <Truck className="w-3.5 h-3.5 text-blue-300" />
              <span>FREE EXPRESS AIR SHIPPING ON ORDERS OVER ₹999</span>
            </span>

            <span className="inline-flex items-center gap-2 mx-6 text-[11px] font-bold tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DROP 06 IS LIVE: 280 GSM ACID WASH KNITS</span>
            </span>

            <span className="inline-flex items-center gap-2 mx-6 text-[11px] font-bold tracking-wider">
              <RefreshCw className="w-3.5 h-3.5 text-blue-300" />
              <span>7-DAY HASSLE-FREE RETURNS & DOORSTEP EXCHANGES</span>
            </span>

            <span className="inline-flex items-center gap-2 mx-6 text-[11px] font-bold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>COD AVAILABLE ACROSS ALL 19,000+ PINCODES</span>
            </span>
          </Marquee>
        </div>

        {/* Right Utility Quick Action: Coupon & Country */}
        <div className="hidden lg:flex items-center gap-4 px-6 border-l border-white/15 shrink-0 py-2">
          {/* Promo code quick copier */}
          <button
            onClick={copyCoupon}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-amber-300 transition-all cursor-pointer group"
          >
            <span>CODE: FIRST500 (₹500 OFF)</span>
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-neutral-300 group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Currency Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 hover:text-white cursor-pointer select-none">
            <span>🇮🇳 INR (₹)</span>
            <ChevronDown className="w-3 h-3 text-neutral-400" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
