'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Lock, ChevronRight, ShoppingBag } from 'lucide-react';

interface CheckoutHeaderProps {
  currentStep: number;
}

export const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({ currentStep }) => {
  const steps = [
    { num: 1, label: 'Shipping' },
    { num: 2, label: 'Delivery' },
    { num: 3, label: 'Payment' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2 select-none">
            <div className="relative flex items-center">
              <Image
                src="/images/logo_dark.png"
                alt="NWear Logo"
                width={110}
                height={30}
                className="cursor-pointer object-contain group-hover:opacity-80 transition-opacity"
                priority
              />
              <span className="hidden sm:inline-block ml-2 text-[9px] font-mono font-black uppercase tracking-widest bg-black text-[#f6b800] px-1.5 py-0.5 rounded-xs">
                CHECKOUT
              </span>
            </div>
          </Link>
        </div>

        {/* Step Progress Bar (Desktop & Tablet) */}
        <nav aria-label="Checkout Progress" className="hidden md:flex items-center gap-2">
          {steps.map((step, idx) => {
            const isDone = currentStep > step.num;
            const isCurrent = currentStep === step.num;

            return (
              <React.Fragment key={step.num}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-neutral-950 text-white ring-4 ring-neutral-200'
                        : 'bg-neutral-100 text-neutral-400'
                    }`}
                  >
                    {isDone ? '✓' : step.num}
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isCurrent
                        ? 'text-neutral-950'
                        : isDone
                        ? 'text-neutral-600'
                        : 'text-neutral-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-300 mx-1" />
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Security Seals & Cart Return */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono font-bold">256-BIT SSL ENCRYPTED</span>
            <span className="sm:hidden font-mono font-bold">SECURE</span>
          </div>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-black transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Store</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
