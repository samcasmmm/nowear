'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header, Navbar, Footer } from '@/components/layout';
import {
  TrackingSearchBox,
  TrackingStatusBanner,
  TrackingTimeline,
  DeliveryDetailsCard,
  PackageManifest,
  TrackingFaq,
} from '@/components/tracking';
import { TrackedParcel, trackedOrdersDataset } from '@/data/trackingData';
import { ChevronRight, PackageSearch, AlertCircle, Sparkles } from 'lucide-react';

export default function TrackOrderPage() {
  const [currentParcel, setCurrentParcel] = useState<TrackedParcel | null>(
    trackedOrdersDataset[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundQuery, setNotFoundQuery] = useState<string | null>(null);

  const handleSearch = (query: { orderId?: string; awb?: string; contact?: string }) => {
    setIsLoading(true);
    setNotFoundQuery(null);

    setTimeout(() => {
      setIsLoading(false);

      let found: TrackedParcel | undefined;

      if (query.orderId) {
        const normalized = query.orderId.replace('#', '').trim().toUpperCase();
        found = trackedOrdersDataset.find((p) => p.orderId.toUpperCase() === normalized);
      } else if (query.awb) {
        const normalized = query.awb.trim().toUpperCase();
        found = trackedOrdersDataset.find((p) => p.awbNumber.toUpperCase() === normalized);
      }

      if (found) {
        setCurrentParcel(found);
        setNotFoundQuery(null);
      } else {
        setCurrentParcel(null);
        setNotFoundQuery(query.orderId || query.awb || 'Query');
      }
    }, 600);
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col antialiased selection:bg-black selection:text-[#f6b800]">
      {/* Top Banner & Main Nav */}
      <Header />
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-700">Logistics & Tracking</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="font-bold text-neutral-900">
            {currentParcel ? `Order #${currentParcel.orderId}` : 'Search'}
          </span>
        </nav>

        {/* Hero Title & Search Card */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-[#f6b800] rounded-full text-[10px] font-mono font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NWEAR SATELLITE DISPATCH RADAR</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
              Live Order & Waybill Tracking
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500">
              Track your heavyweight streetwear dispatches in real-time with step-by-step milestone telemetry.
            </p>
          </div>

          <TrackingSearchBox
            onSearch={handleSearch}
            isLoading={isLoading}
            currentOrderId={currentParcel?.orderId || 'NW-98421'}
          />
        </div>

        {/* Results Container */}
        {currentParcel ? (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            {/* Status Hero Banner */}
            <TrackingStatusBanner parcel={currentParcel} />

            {/* 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left 7 Columns: Timeline & Package Manifest */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                <TrackingTimeline milestones={currentParcel.milestones} />
                <PackageManifest parcel={currentParcel} />
              </div>

              {/* Right 5 Columns: Delivery Details & FAQ */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-6">
                <DeliveryDetailsCard parcel={currentParcel} />
                <TrackingFaq />
              </div>
            </div>
          </div>
        ) : (
          /* Not Found State */
          <div className="bg-white rounded-3xl p-10 text-center border border-neutral-200 max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                No active parcel found for &apos;{notFoundQuery}&apos;
              </h3>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Please double-check your Order ID or Waybill Number. If you just placed your order, please allow 10 to 15 minutes for satellite indexing.
              </p>
            </div>
            <button
              onClick={() => handleSearch({ orderId: 'NW-98421' })}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase rounded-xl transition-colors cursor-pointer"
            >
              Load Demo Order #NW-98421
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
