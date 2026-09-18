'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Package,
  Truck,
  ArrowRight,
  Download,
  Share2,
  Sparkles,
  MapPin,
  CreditCard,
  ExternalLink,
} from 'lucide-react';
import { CheckoutItem, DeliveryOption, ShippingAddress } from '@/data/checkoutData';

interface OrderSuccessModalProps {
  orderId: string;
  items: CheckoutItem[];
  address: ShippingAddress;
  delivery: DeliveryOption;
  paymentMethod: { method: string; identifier?: string };
  grandTotal: number;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  orderId,
  items,
  address,
  delivery,
  paymentMethod,
  grandTotal,
}) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-10 px-4 animate-in fade-in-50 duration-500">
      <div className="max-w-2xl w-full bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        {/* Animated Celebration Icon */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50 animate-bounce">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
          </div>

          <div>
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-black uppercase tracking-widest text-[#f6b800] bg-black px-3 py-1 rounded-full w-max mx-auto mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#f6b800]" />
              <span>PAYMENT CONFIRMED • VAULT DISPATCH INITIATED</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
              Thank You for Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Your order <strong className="font-mono text-neutral-900">{orderId}</strong> is confirmed. A receipt and tracking link have been dispatched to your email & WhatsApp.
            </p>
          </div>
        </div>

        {/* Live Delivery Status Card */}
        <div className="p-4 rounded-2xl bg-neutral-950 text-white space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span className="font-mono font-bold uppercase text-neutral-200">
                {delivery.title}
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              PRIORITY DISPATCH
            </span>
          </div>

          <div className="text-sm font-bold text-neutral-100">
            Estimated Delivery:{' '}
            <span className="text-[#f6b800] font-mono">{delivery.eta}</span>
          </div>

          <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full w-1/4 rounded-full" />
          </div>

          <div className="flex justify-between text-[10px] font-mono text-neutral-400">
            <span>Order Placed ✓</span>
            <span>Packaging & QC</span>
            <span>Air Transit</span>
            <span>Delivered</span>
          </div>
        </div>

        {/* Order Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Shipping To */}
          <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50 space-y-1">
            <div className="flex items-center gap-1.5 font-bold uppercase text-neutral-900">
              <MapPin className="w-3.5 h-3.5 text-neutral-600" />
              <span>Delivery Address</span>
            </div>
            <p className="text-neutral-700 font-medium">{address.fullName}</p>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              {address.street}, {address.city}, {address.state} - {address.pincode}
            </p>
            <p className="text-neutral-500 font-mono text-[10px]">{address.phone}</p>
          </div>

          {/* Payment Method */}
          <div className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50 space-y-1">
            <div className="flex items-center gap-1.5 font-bold uppercase text-neutral-900">
              <CreditCard className="w-3.5 h-3.5 text-neutral-600" />
              <span>Payment Details</span>
            </div>
            <p className="text-neutral-700 font-medium">
              {paymentMethod.method} ({paymentMethod.identifier})
            </p>
            <p className="text-neutral-500 text-[11px]">
              Total Paid: <strong className="font-mono text-neutral-900">₹{grandTotal.toLocaleString('en-IN')}</strong>
            </p>
            <span className="inline-block text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
              Payment Verified
            </span>
          </div>
        </div>

        {/* Ordered Items List */}
        <div className="space-y-2 border-t border-neutral-200 pt-4">
          <span className="text-xs font-bold uppercase text-neutral-900 block">
            Items in This Shipment ({items.length})
          </span>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 border border-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-neutral-200 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-neutral-900 line-clamp-1">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-neutral-500">
                      Size: <strong className="font-mono">{item.size}</strong> • Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-black text-neutral-900">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/profile"
            className="flex-1 py-3.5 bg-neutral-950 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Package className="w-4 h-4" />
            <span>Track in Member Profile</span>
          </Link>

          <Link
            href="/"
            className="flex-1 py-3.5 border border-neutral-300 hover:border-black text-neutral-900 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
