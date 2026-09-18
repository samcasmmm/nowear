'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { TrackedParcel } from '@/data/trackingData';

interface PackageManifestProps {
  parcel: TrackedParcel;
}

export const PackageManifest: React.FC<PackageManifestProps> = ({ parcel }) => {
  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-neutral-900" />
          <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900">
            Package Contents ({parcel.items.reduce((s, i) => s + i.quantity, 0)} Items)
          </h3>
        </div>

        <span className="text-xs font-mono font-bold text-neutral-500">
          QC VERIFIED
        </span>
      </div>

      <div className="space-y-3">
        {parcel.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-18 rounded-xl overflow-hidden bg-neutral-200 shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 line-clamp-1">
                  {item.name}
                </h4>

                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                  <span>Size: <strong className="font-mono text-neutral-900">{item.size}</strong></span>
                  <span>•</span>
                  <span>{item.color}</span>
                  <span>•</span>
                  <span>Qty: {item.quantity}</span>
                </div>

                {item.gsm && (
                  <span className="inline-block mt-1 text-[10px] font-mono font-bold text-neutral-600 bg-neutral-200/60 px-2 py-0.5 rounded">
                    {item.gsm}
                  </span>
                )}
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

      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
        <div className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-neutral-800" />
          <span>Heavyweight Streetwear Quality Standard</span>
        </div>
        <span className="font-mono text-emerald-700 font-bold">100% Genuine</span>
      </div>
    </div>
  );
};

export default PackageManifest;
