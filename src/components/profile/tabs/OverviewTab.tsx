'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Truck,
  ArrowRight,
  Sparkles,
  Award,
  Ruler,
  Clock,
  ShieldCheck,
  ChevronRight,
  Heart,
  ShoppingBag,
} from 'lucide-react';
import { FitProfile, Order, UserProfile } from '@/data/profileData';

interface OverviewTabProps {
  user: UserProfile;
  fitProfile: FitProfile;
  recentOrder: Order | null;
  onTrackOrder: (order: Order) => void;
  onNavigateToTab: (tab: any) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  user,
  fitProfile,
  recentOrder,
  onTrackOrder,
  onNavigateToTab,
}) => {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      {/* 1. Live Active Shipment Tracker Card */}
      {recentOrder && recentOrder.status === 'in-transit' && (
        <div className="p-5 sm:p-6 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-lg space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <Truck className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-emerald-400 block">
                  ACTIVE SHIPMENT IN TRANSIT
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Order #{recentOrder.id} • {recentOrder.statusText}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onTrackOrder(recentOrder)}
              className="px-4 py-2 bg-[#f6b800] hover:bg-amber-400 text-black rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>TRACK LIVE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono block">Estimated Arrival</span>
              <span className="text-xs font-bold text-neutral-100 mt-0.5 block">
                {recentOrder.expectedDelivery}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono block">Courier & Waybill</span>
              <span className="text-xs font-bold font-mono text-neutral-100 mt-0.5 block">
                {recentOrder.courier} ({recentOrder.trackingId})
              </span>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono block">Delivery Destination</span>
              <span className="text-xs font-bold text-neutral-100 mt-0.5 block line-clamp-1">
                {recentOrder.shippingAddress}
              </span>
            </div>
          </div>

          {/* Item Thumbnails */}
          <div className="flex items-center gap-3 pt-2 border-t border-neutral-800/80 overflow-x-auto custom-scrollbar">
            <span className="text-[11px] font-mono text-neutral-400 shrink-0">Items:</span>
            {recentOrder.items.map((item) => (
              <div key={item.id} className="flex items-center gap-2 shrink-0 bg-neutral-900/80 px-2.5 py-1.5 rounded-lg border border-neutral-800">
                <div className="relative w-7 h-9 rounded bg-neutral-800 overflow-hidden shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="text-[11px]">
                  <span className="text-neutral-200 font-bold block max-w-[120px] truncate">{item.name}</span>
                  <span className="text-neutral-400 font-mono text-[10px]">Size {item.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Grid: Fit Profile Snapshot + Vault VIP Perk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fit Profile Card */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-neutral-100 text-neutral-900">
                  <Ruler className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-neutral-900">
                    Your Fit Profile
                  </h3>
                  <span className="text-[10px] text-neutral-500 font-mono">Smart Size Predictor</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('settings')}
                className="text-xs font-bold text-neutral-900 underline hover:text-amber-600 transition-colors cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block">Height & Weight</span>
                <span className="font-bold text-neutral-900 mt-0.5 block">{fitProfile.height} • {fitProfile.weight}</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block">Chest / Waist</span>
                <span className="font-bold text-neutral-900 mt-0.5 block">{fitProfile.chest} • {fitProfile.waist}</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/60 col-span-2">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block">Recommended Street Silhouette</span>
                <span className="font-bold text-neutral-900 mt-0.5 block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{fitProfile.preferredFit} (Top Size: L • Bottom: 32)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span>Accuracy Rate: 98.4%</span>
            <span className="text-emerald-700 font-bold font-mono">Zero Size Returns</span>
          </div>
        </div>

        {/* Vault VIP Perks Showcase */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-neutral-900 to-black text-white border border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#f6b800] text-black">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-white">
                    Vault VIP Privileges
                  </h3>
                  <span className="text-[10px] text-[#f6b800] font-mono">Tier 3 Active</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('wallet')}
                className="text-xs font-mono font-bold text-[#f6b800] underline hover:text-white transition-colors cursor-pointer"
              >
                View Vault Card
              </button>
            </div>

            <div className="space-y-2.5 mt-4 text-xs">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-800/60 border border-neutral-700/60">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Unlimited 24-Hour Free Air Express Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-800/60 border border-neutral-700/60">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span>2-Hour Secret Pre-Access to All Drop Releases</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-800/60 border border-neutral-700/60">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Double Coins Cashback on Every Streetwear Order</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>VIP Hotline Access</span>
            <span className="text-emerald-400 font-bold">24/7 Dedicated Concierge</span>
          </div>
        </div>
      </div>

      {/* 3. Quick Navigation Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => onNavigateToTab('orders')}
          className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-black transition-all text-left group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-neutral-900">Order History</span>
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            View past streetwear orders, returns, and downloadable invoices.
          </p>
        </button>

        <button
          onClick={() => onNavigateToTab('wishlist')}
          className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-black transition-all text-left group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-neutral-900">Saved Wishlist</span>
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Revisit curated streetwear fits, stock alerts, and instant bag checkout.
          </p>
        </button>

        <button
          onClick={() => onNavigateToTab('addresses')}
          className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-black transition-all text-left group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-neutral-900">Address Book</span>
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Manage your home, studio, and workplace shipping destinations.
          </p>
        </button>
      </div>
    </div>
  );
};

export default OverviewTab;
