'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Home,
  Building2,
  Phone,
  Plus,
  Trash2,
  Check,
  Edit3,
} from 'lucide-react';
import { ShippingAddress, savedAddresses as initialAddresses } from '@/data/checkoutData';

interface AddressesTabProps {
  onOpenAddModal: () => void;
  addresses: ShippingAddress[];
  onSetDefault: (id: string) => void;
  onDeleteAddress: (id: string) => void;
}

export const AddressesTab: React.FC<AddressesTabProps> = ({
  onOpenAddModal,
  addresses,
  onSetDefault,
  onDeleteAddress,
}) => {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-neutral-900">
            Delivery Addresses ({addresses.length})
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Manage your residences, studios, and delivery locations for 1-click checkout.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="px-4 py-2.5 bg-neutral-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Address</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-5 rounded-3xl border transition-all bg-white flex flex-col justify-between space-y-4 ${
              addr.isDefault
                ? 'border-neutral-950 ring-2 ring-neutral-950/10 shadow-sm'
                : 'border-neutral-200 hover:border-neutral-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider flex items-center gap-1 ${
                      addr.tag === 'HOME'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {addr.tag === 'HOME' ? (
                      <Home className="w-3 h-3" />
                    ) : (
                      <Building2 className="w-3 h-3" />
                    )}
                    {addr.tag}
                  </span>

                  {addr.isDefault && (
                    <span className="text-[10px] font-mono font-bold bg-neutral-900 text-[#f6b800] px-2 py-0.5 rounded uppercase">
                      Default Delivery Hub
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  {!addr.isDefault && (
                    <button
                      onClick={() => onDeleteAddress(addr.id)}
                      className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                      title="Delete address"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <h4 className="text-sm font-bold text-neutral-900">{addr.fullName}</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                {addr.street}, {addr.apartment && `${addr.apartment}, `}
                {addr.city}, {addr.state} -{' '}
                <strong className="font-mono text-neutral-900">{addr.pincode}</strong>
              </p>
              <p className="text-xs font-mono text-neutral-500 mt-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                {addr.phone}
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
              {addr.isDefault ? (
                <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Selected for Fast Checkout</span>
                </span>
              ) : (
                <button
                  onClick={() => onSetDefault(addr.id)}
                  className="text-xs font-bold text-neutral-900 underline hover:text-amber-600 transition-colors cursor-pointer"
                >
                  Set as Default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressesTab;
