'use client';

import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';
import { customerReviews } from '@/data/storeData';

const CustomerReviews: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Loved By Over 2M+ Humans
          </h2>
          <p className="mt-1 text-xs md:text-sm text-neutral-500 font-medium">
            Real feedback from verified buyers across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              {/* Photo on top (matching reference mockup) */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Review Body */}
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-2.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-neutral-700 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-neutral-900">
                      {review.name}
                    </span>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </div>
                  {review.date && (
                    <span className="text-[10px] text-neutral-400">
                      {review.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
