'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Package,
  Truck,
  CheckCircle2,
  RotateCcw,
  Download,
  Star,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Order, mockOrders } from '@/data/profileData';

interface OrdersTabProps {
  onTrackOrder: (order: Order) => void;
}

export const OrdersTab: React.FC<OrdersTabProps> = ({ onTrackOrder }) => {
  const [filter, setFilter] = useState<'all' | 'in-transit' | 'delivered' | 'returned'>('all');
  const [orders] = useState<Order[]>(mockOrders);

  const filteredOrders = orders.filter((order) => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      {/* Header & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-neutral-900">
            Your Orders & Returns
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Track live dispatches, request exchanges, or download official GST tax invoices.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl self-start sm:self-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Orders' },
            { id: 'in-transit', label: 'In Transit' },
            { id: 'delivered', label: 'Delivered' },
            { id: 'returned', label: 'Returns' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const isInTransit = order.status === 'in-transit';
            const isDelivered = order.status === 'delivered';
            const isReturned = order.status === 'returned';

            return (
              <div
                key={order.id}
                className="bg-white border border-neutral-200 rounded-3xl p-5 sm:p-6 shadow-xs hover:border-neutral-300 transition-all space-y-4"
              >
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isInTransit
                          ? 'bg-blue-50 text-blue-700'
                          : isDelivered
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {isInTransit && <Truck className="w-5 h-5" />}
                      {isDelivered && <CheckCircle2 className="w-5 h-5" />}
                      {isReturned && <RotateCcw className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-neutral-900">
                          Order #{order.id}
                        </span>
                        <span
                          className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded ${
                            isInTransit
                              ? 'bg-blue-100 text-blue-800 animate-pulse'
                              : isDelivered
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {order.statusText}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 font-mono">
                        Placed on {order.date} • {order.paymentMethod}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {isInTransit && (
                      <button
                        onClick={() => onTrackOrder(order)}
                        className="px-3.5 py-2 bg-neutral-950 hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Truck className="w-3.5 h-3.5 text-[#f6b800]" />
                        <span>Track Live</span>
                      </button>
                    )}

                    <button
                      onClick={() => alert(`Downloading GST Tax Invoice for Order #${order.id}...`)}
                      className="p-2 border border-neutral-200 hover:border-neutral-900 rounded-xl text-neutral-700 hover:text-black transition-colors cursor-pointer"
                      title="Download Tax Invoice"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Items in this Order */}
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 p-2.5 rounded-2xl bg-neutral-50 border border-neutral-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-18 rounded-xl overflow-hidden bg-neutral-200 shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5 font-medium">
                            <span>Size: <strong className="font-mono text-neutral-900">{item.size}</strong></span>
                            <span>•</span>
                            <span>{item.color}</span>
                            <span>•</span>
                            <span>Qty: {item.quantity}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs sm:text-sm font-black text-neutral-900 font-mono">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Details & Quick Action Buttons */}
                <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-neutral-500">
                    <span>Total Paid: <strong className="font-mono text-neutral-900 text-sm">₹{order.total.toLocaleString('en-IN')}</strong></span>
                    <span className="mx-2">•</span>
                    <span className="font-mono text-[11px]">{order.expectedDelivery}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isDelivered && (
                      <>
                        <button
                          onClick={() => alert(`Review submitted! 100 NW Coins credited to your vault.`)}
                          className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:border-black text-neutral-700 hover:text-black font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>Review (+100 Coins)</span>
                        </button>
                        <Link
                          href="/checkout"
                          className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-black text-white font-bold transition-colors"
                        >
                          Buy Again
                        </Link>
                      </>
                    )}

                    {isInTransit && (
                      <span className="text-neutral-500 font-mono text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>Dispatched via {order.courier}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200">
          <Package className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-neutral-900">No orders found</h3>
          <p className="text-xs text-neutral-500 mt-1">
            You do not have any orders matching this status filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrdersTab;
