'use client';

import React, { useState } from 'react';
import {
  Truck,
  Zap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  RotateCw,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { TrackedParcel } from '@/data/trackingData';

interface TrackingStatusBannerProps {
  parcel: TrackedParcel;
}

export const TrackingStatusBanner: React.FC<TrackingStatusBannerProps> = ({ parcel }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSync, setLastSync] = useState('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastSync('Just now');
    }, 800);
  };

  const isDelivered = parcel.status === 'DELIVERED';
  const isOutForDelivery = parcel.status === 'OUT_FOR_DELIVERY';
  const isInTransit = parcel.status === 'IN_TRANSIT';

  return (
    <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl relative overflow-hidden space-y-6">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-2xl ${
              isDelivered
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : isOutForDelivery
                ? 'bg-amber-500/10 text-[#f6b800] border border-amber-500/20'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            {isDelivered && <CheckCircle2 className="w-6 h-6" />}
            {isOutForDelivery && <Truck className="w-6 h-6 animate-pulse" />}
            {isInTransit && <Zap className="w-6 h-6" />}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm sm:text-base font-black uppercase tracking-tight text-white">
                Order #{parcel.orderId}
              </span>
              <span
                className={`text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full ${
                  isDelivered
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : isOutForDelivery
                    ? 'bg-[#f6b800] text-black shadow-sm font-black'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}
              >
                {parcel.statusLabel}
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              Waybill: <strong className="text-neutral-200">{parcel.awbNumber}</strong> • {parcel.courierName}
            </p>
          </div>
        </div>

        {/* Sync Status & Refresh */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-neutral-400 font-mono block uppercase">Satellite Radar</span>
            <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Synced {lastSync}</span>
            </span>
          </div>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
            title="Refresh satellite telemetry"
          >
            <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main ETA Countdown */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#f6b800]" />
            <span>Estimated Delivery Schedule</span>
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            {parcel.estimatedDelivery}
          </h1>
          <p className="text-xs text-[#f6b800] font-mono font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{parcel.etaCountdown}</span>
          </p>
        </div>

        <div className="md:col-span-5 bg-neutral-900/90 border border-neutral-800 p-4 rounded-2xl space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>SERVICE LEVEL</span>
            <span className="text-white font-bold">{parcel.serviceType}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>TOTAL WEIGHT</span>
            <span className="text-white font-bold">{parcel.weight}</span>
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>PACKAGING</span>
            <span className="text-emerald-400 font-bold">100% Sealed Vault Box</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingStatusBanner;
