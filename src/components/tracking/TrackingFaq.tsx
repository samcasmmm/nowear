'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, PhoneCall } from 'lucide-react';

export const TrackingFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does NWear Express Air shipping take?',
      a: 'All orders placed with Air Express are dispatched from our central fulfillment hub within 4 hours. Metro deliveries arrive in 1 to 2 business days, while non-metro locations take 2 to 3 days.',
    },
    {
      q: 'Can I change my delivery address while the shipment is in transit?',
      a: 'If your parcel has not yet reached the local destination city hub, you can request an address update via our WhatsApp VIP concierge (+91 98765 00123) or directly through Delhivery/BlueDart tracking portal using your AWB number.',
    },
    {
      q: 'What happens if I miss the delivery attempt?',
      a: 'Our courier partners attempt delivery up to 3 times on consecutive business days. You will also receive an SMS and WhatsApp message to reschedule delivery to your preferred date and time slot.',
    },
    {
      q: 'How do 7-day doorstep returns & exchanges work?',
      a: 'You can initiate an instant size exchange or return within 7 days of delivery directly from your Member Profile (Orders tab). A reverse courier will pick up the item from your doorstep at zero charge.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-neutral-900" />
          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h3>
        </div>
        <span className="text-[11px] font-mono text-neutral-500">Dispatch Assistance</span>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className="border border-neutral-200/80 rounded-2xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 bg-neutral-50/50 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-bold text-neutral-900">
                  {faq.q}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="p-4 pt-2 text-xs text-neutral-600 bg-white leading-relaxed border-t border-neutral-100 animate-in fade-in-50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Support hotline */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-neutral-950 text-white rounded-2xl">
        <div>
          <span className="text-xs font-bold block">Need immediate dispatch support?</span>
          <span className="text-[11px] text-neutral-400">Our VIP logistics team is active 24/7.</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackingFaq;
