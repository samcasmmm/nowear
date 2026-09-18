'use client';

import React, { useState } from 'react';
import { Search, Sparkles, Truck, Package, ArrowRight } from 'lucide-react';

interface TrackingSearchBoxProps {
  onSearch: (query: { orderId?: string; awb?: string; contact?: string }) => void;
  isLoading: boolean;
  currentOrderId: string;
}

export const TrackingSearchBox: React.FC<TrackingSearchBoxProps> = ({
  onSearch,
  isLoading,
  currentOrderId,
}) => {
  const [searchMode, setSearchMode] = useState<'order' | 'awb'>('order');
  const [orderIdInput, setOrderIdInput] = useState(currentOrderId || 'NW-98421');
  const [contactInput, setContactInput] = useState('');
  const [awbInput, setAwbInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (searchMode === 'order') {
      if (!orderIdInput.trim()) {
        setError('Please enter your Order ID (e.g. NW-98421)');
        return;
      }
      onSearch({ orderId: orderIdInput.trim().toUpperCase(), contact: contactInput.trim() });
    } else {
      if (!awbInput.trim()) {
        setError('Please enter your Waybill / AWB Number (e.g. DEL-992014820)');
        return;
      }
      onSearch({ awb: awbInput.trim().toUpperCase() });
    }
  };

  const handleQuickSelect = (orderId: string, awb?: string) => {
    setError('');
    if (searchMode === 'order' || !awb) {
      setOrderIdInput(orderId);
      onSearch({ orderId });
    } else {
      setAwbInput(awb);
      onSearch({ awb });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-5">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-neutral-900 text-white">
            <Truck className="w-4 h-4 text-[#f6b800]" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
              Live Shipment Lookup
            </h2>
            <p className="text-[11px] text-neutral-500">
              Real-time synchronization with Delhivery & BlueDart satellite hubs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setSearchMode('order')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              searchMode === 'order'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Order ID
          </button>
          <button
            type="button"
            onClick={() => setSearchMode('awb')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              searchMode === 'awb'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            AWB / Waybill
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {searchMode === 'order' ? (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-7">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Order ID *
              </label>
              <div className="relative">
                <Package className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. NW-98421"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono font-bold uppercase outline-none focus:bg-white focus:border-black"
                />
              </div>
            </div>

            <div className="sm:col-span-5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Phone / Email (Optional)
              </label>
              <input
                type="text"
                placeholder="Mobile or email"
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
              Courier Waybill / AWB Number *
            </label>
            <div className="relative">
              <Truck className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. DEL-992014820 or BD-8819201"
                value={awbInput}
                onChange={(e) => setAwbInput(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono font-bold uppercase outline-none focus:bg-white focus:border-black"
              />
            </div>
          </div>
        )}

        {error && <span className="text-[11px] text-red-500 font-medium block">{error}</span>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-neutral-950 hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer disabled:opacity-60"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>SYNCING SATELLITE DISPATCH...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#f6b800]" />
              <span>TRACK SHIPMENT LIVE</span>
            </div>
          )}
        </button>
      </form>

      {/* Quick Demo Search Chips */}
      <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-mono text-neutral-400 uppercase">Try Sample Orders:</span>
        <button
          type="button"
          onClick={() => handleQuickSelect('NW-98421', 'DEL-992014820')}
          className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-[10px] font-mono font-bold text-neutral-700 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>#NW-98421 (Out for Delivery)</span>
        </button>
        <button
          type="button"
          onClick={() => handleQuickSelect('NW-98439', 'DEL-992015991')}
          className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-[10px] font-mono font-bold text-neutral-700 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span>#NW-98439 (Air Transit)</span>
        </button>
        <button
          type="button"
          onClick={() => handleQuickSelect('NW-97103', 'BD-8819201')}
          className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-[10px] font-mono font-bold text-neutral-700 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>#NW-97103 (Delivered)</span>
        </button>
      </div>
    </div>
  );
};

export default TrackingSearchBox;
