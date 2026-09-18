'use client';

import React from 'react';
import {
  CheckCircle2,
  Package,
  Plane,
  Building,
  Truck,
  MapPin,
  Clock,
  CircleDot,
  Radio,
} from 'lucide-react';
import { TrackingMilestone } from '@/data/trackingData';

interface TrackingTimelineProps {
  milestones: TrackingMilestone[];
}

export const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ milestones }) => {
  const getIcon = (type: TrackingMilestone['iconType']) => {
    switch (type) {
      case 'placed':
        return <Package className="w-4 h-4" />;
      case 'packed':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'flight':
        return <Plane className="w-4 h-4" />;
      case 'hub':
        return <Building className="w-4 h-4" />;
      case 'out_for_delivery':
        return <Truck className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <CircleDot className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <div>
          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
            Shipment Transit Milestones
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Step-by-step dispatch audit trail with GPS check-ins
          </p>
        </div>

        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold flex items-center gap-1">
          <Radio className="w-3 h-3 animate-pulse text-emerald-600" />
          <span>LIVE TRACK</span>
        </span>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-7 sm:pl-9 space-y-7 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-200">
        {milestones.map((step) => {
          const isDone = step.status === 'COMPLETED';
          const isCurrent = step.status === 'IN_PROGRESS';
          const isPending = step.status === 'PENDING';

          return (
            <div key={step.id} className="relative group">
              {/* Milestone Icon Bullet */}
              <div
                className={`absolute -left-7 sm:-left-9 top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-neutral-950 text-[#f6b800] ring-4 ring-amber-100 shadow-md'
                    : isDone
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-400 border border-neutral-200'
                }`}
              >
                {getIcon(step.iconType)}
              </div>

              {/* Milestone Card Body */}
              <div
                className={`p-4 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-amber-500/5 border-amber-300 ring-1 ring-amber-300/40'
                    : isDone
                    ? 'bg-neutral-50/70 border-neutral-200/80 hover:bg-neutral-50'
                    : 'bg-neutral-50/30 border-dashed border-neutral-200 opacity-60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4
                    className={`text-xs sm:text-sm font-bold ${
                      isCurrent
                        ? 'text-neutral-950 font-black'
                        : isDone
                        ? 'text-neutral-900'
                        : 'text-neutral-500'
                    }`}
                  >
                    {step.title}
                  </h4>

                  <span className="text-[11px] font-mono text-neutral-500">
                    {step.timestamp}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {step.description}
                </p>

                {step.location && (
                  <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium mt-2 pt-2 border-t border-neutral-200/50">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Location: <strong className="text-neutral-800">{step.location}</strong></span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackingTimeline;
