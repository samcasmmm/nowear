'use client';

import React from 'react';
import {
  Truck,
  Zap,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  ArrowLeft,
  MapPin,
} from 'lucide-react';
import { DeliveryOption, ShippingAddress, deliveryOptions } from '@/data/checkoutData';

interface DeliveryMethodStepProps {
  selectedAddress: ShippingAddress;
  selectedOption: DeliveryOption;
  onSelectOption: (option: DeliveryOption) => void;
  onBack: () => void;
  onProceed: () => void;
}

export const DeliveryMethodStep: React.FC<DeliveryMethodStepProps> = ({
  selectedAddress,
  selectedOption,
  onSelectOption,
  onBack,
  onProceed,
}) => {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      {/* Address Recap Card */}
      <div className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-neutral-900">
                Delivering to: {selectedAddress.fullName}
              </span>
              <span className="px-1.5 py-0.5 bg-neutral-200 text-neutral-800 text-[10px] font-mono font-bold rounded">
                {selectedAddress.tag}
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              {selectedAddress.street}, {selectedAddress.city} - {selectedAddress.pincode}
            </p>
          </div>
        </div>

        <button
          onClick={onBack}
          className="text-xs font-bold text-neutral-900 underline hover:text-amber-600 transition-colors cursor-pointer shrink-0"
        >
          Change
        </button>
      </div>

      {/* Delivery Speed Options */}
      <div className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold flex items-center justify-center">
            2
          </span>
          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
            Select Delivery Speed
          </h3>
        </div>

        <div className="space-y-3">
          {deliveryOptions.map((opt) => {
            const isSelected = selectedOption.id === opt.id;

            return (
              <div
                key={opt.id}
                onClick={() => onSelectOption(opt)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-black bg-neutral-50/70 shadow-sm ring-2 ring-black/10'
                    : 'border-neutral-200 hover:border-neutral-400 bg-white'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 ${
                      opt.iconType === 'express'
                        ? 'bg-amber-50 border-amber-200 text-amber-600'
                        : opt.iconType === 'same-day'
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                        : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    {opt.iconType === 'express' && <Zap className="w-5 h-5" />}
                    {opt.iconType === 'same-day' && <Clock className="w-5 h-5" />}
                    {opt.iconType === 'standard' && <Truck className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                        {opt.title}
                      </h4>
                      {opt.badge && (
                        <span
                          className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                            opt.badge === 'RECOMMENDED'
                              ? 'bg-black text-[#f6b800]'
                              : opt.badge === 'FREE'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">{opt.description}</p>
                    <p className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {opt.eta}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                  <div className="text-right">
                    <span className="text-sm font-black text-neutral-900 font-mono">
                      {opt.price === 0 ? (
                        <span className="text-emerald-600">FREE</span>
                      ) : (
                        `₹${opt.price}`
                      )}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-300 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Vault Dispatch Guarantee */}
        <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs text-neutral-700">
            <strong className="text-black font-bold">100% Sealed Transit Guarantee:</strong> Every parcel is enclosed in moisture-resistant rip-proof packaging with tamper-evident security holographic tape.
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="px-5 py-3.5 border border-neutral-300 hover:border-neutral-900 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={onProceed}
            className="flex-1 py-3.5 bg-neutral-950 hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer active:scale-99"
          >
            <span>CONTINUE TO PAYMENT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethodStep;
