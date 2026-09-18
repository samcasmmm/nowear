'use client';

import React, { useState } from 'react';
import {
  MapPin,
  User,
  Phone,
  MessageSquare,
  ShieldCheck,
  Star,
  FileText,
  KeyRound,
  Check,
} from 'lucide-react';
import { TrackedParcel } from '@/data/trackingData';

interface DeliveryDetailsCardProps {
  parcel: TrackedParcel;
}

export const DeliveryDetailsCard: React.FC<DeliveryDetailsCardProps> = ({ parcel }) => {
  const [called, setCalled] = useState(false);

  const handleCallExecutive = () => {
    setCalled(true);
    setTimeout(() => setCalled(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* 1. Destination Address Card */}
      <div className="bg-white rounded-3xl border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
          <MapPin className="w-4 h-4 text-neutral-900" />
          <h3 className="text-xs sm:text-sm font-black uppercase text-neutral-900">
            Delivery Destination
          </h3>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-neutral-900">
              {parcel.shippingAddress.name}
            </h4>
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-800 text-[10px] font-mono font-bold rounded">
              {parcel.shippingAddress.tag}
            </span>
          </div>

          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
            {parcel.shippingAddress.street}, {parcel.shippingAddress.city}, {parcel.shippingAddress.state} -{' '}
            <strong className="font-mono text-neutral-900">{parcel.shippingAddress.pincode}</strong>
          </p>

          <p className="text-xs font-mono text-neutral-500 mt-2 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            {parcel.shippingAddress.phone}
          </p>
        </div>

        {parcel.deliveryInstructions && (
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/70 text-xs text-neutral-600 flex items-start gap-2">
            <FileText className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-neutral-800 block text-[11px] uppercase">
                Special Delivery Instructions:
              </span>
              <span>{parcel.deliveryInstructions}</span>
            </div>
          </div>
        )}
      </div>

      {/* 2. Delivery Executive Assigned Card */}
      {parcel.deliveryExecutive && (
        <div className="bg-white rounded-3xl border border-neutral-200 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-neutral-900" />
              <h3 className="text-xs sm:text-sm font-black uppercase text-neutral-900">
                Assigned Delivery Partner
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ON ROUTE
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-neutral-900">
                {parcel.deliveryExecutive.name}
              </h4>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                {parcel.deliveryExecutive.vehicle}
              </p>
              <div className="flex items-center gap-1 text-[11px] text-amber-600 font-bold mt-1">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>{parcel.deliveryExecutive.rating} Rating (1,200+ deliveries)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCallExecutive}
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
                title="Call Executive"
              >
                {called ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4" />}
              </button>
              <a
                href={`https://wa.me/919876500123`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
                title="WhatsApp Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {called && (
            <span className="text-[11px] font-mono text-emerald-600 block text-center animate-in fade-in">
              Connecting masked call to {parcel.deliveryExecutive.name}...
            </span>
          )}
        </div>
      )}

      {/* 3. Doorstep OTP Security Shield */}
      <div className="p-4 rounded-3xl bg-neutral-950 text-white border border-neutral-800 space-y-2">
        <div className="flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-[#f6b800]" />
          <span className="text-xs font-bold uppercase font-mono text-[#f6b800]">
            Contactless OTP Handover
          </span>
        </div>
        <p className="text-xs text-neutral-300 leading-relaxed">
          For your protection, share your 4-digit verification code with the executive only after physical handover of the intact, sealed package.
        </p>
      </div>
    </div>
  );
};

export default DeliveryDetailsCard;
