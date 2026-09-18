'use client';

import React from 'react';
import Image from 'next/image';
import {
  X,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Package,
} from 'lucide-react';
import { Order } from '@/data/profileData';

interface OrderTrackingModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50 duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl space-y-5 p-6 custom-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-neutral-900 text-white">
              <Truck className="w-4 h-4 text-[#f6b800]" />
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900">
                Live Shipment Tracking
              </h3>
              <span className="text-[11px] font-mono text-neutral-500">
                Waybill #{order.trackingId}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Courier & ETA Pill */}
        <div className="p-4 rounded-2xl bg-neutral-950 text-white space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-400 uppercase font-mono">
              Partner: <strong className="text-white">{order.courier}</strong>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-bold">
              LIVE SATELLITE SYNC
            </span>
          </div>
          <div className="text-sm font-bold text-white">
            Estimated Delivery: <span className="text-[#f6b800] font-mono">{order.expectedDelivery}</span>
          </div>
        </div>

        {/* Step-by-Step Progress Timeline */}
        <div className="space-y-4 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Shipment Milestone History
          </h4>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200">
            {order.trackingSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Milestone Dot */}
                <div
                  className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    step.current
                      ? 'bg-amber-400 border-black ring-4 ring-amber-100 text-black'
                      : step.completed
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-neutral-300'
                  }`}
                >
                  {step.completed && !step.current && (
                    <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                  )}
                  {step.current && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-bold ${
                        step.current
                          ? 'text-neutral-950 font-black'
                          : step.completed
                          ? 'text-neutral-800'
                          : 'text-neutral-400'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">{step.date}</span>
                  </div>
                  {step.location && (
                    <span className="text-[11px] text-neutral-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {step.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parcel Items Thumbnail */}
        <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
          <span className="text-[11px] font-bold uppercase text-neutral-600 block">
            Items Inside This Package
          </span>
          <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-10 rounded bg-neutral-200 overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <span className="font-medium text-neutral-800 line-clamp-1">{item.name}</span>
                </div>
                <span className="font-mono font-bold text-neutral-900">
                  Size {item.size} • Qty {item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
        >
          Close Tracker
        </button>
      </div>
    </div>
  );
};

export default OrderTrackingModal;
