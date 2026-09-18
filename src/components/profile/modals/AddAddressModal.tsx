'use client';

import React, { useState } from 'react';
import { X, MapPin, Building2, Home } from 'lucide-react';
import { ShippingAddress } from '@/data/checkoutData';

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAddress: (newAddress: ShippingAddress) => void;
}

export const AddAddressModal: React.FC<AddAddressModalProps> = ({
  isOpen,
  onClose,
  onAddAddress,
}) => {
  const [tag, setTag] = useState<'HOME' | 'WORK' | 'STUDIO' | 'OTHER'>('HOME');
  const [fullName, setFullName] = useState('Alex Rivera');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [state, setState] = useState('Karnataka');
  const [pincode, setPincode] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street.trim() || !pincode.trim()) {
      setError('Please fill in required fields (Street, PIN code)');
      return;
    }

    const newAddr: ShippingAddress = {
      id: `addr-${Date.now()}`,
      tag,
      fullName,
      phone,
      street,
      apartment,
      city,
      state,
      pincode,
      isDefault,
    };

    onAddAddress(newAddr);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-50 duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-neutral-200 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-900" />
            <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900">
              Add New Delivery Hub
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-3 gap-2">
            {(['HOME', 'WORK', 'STUDIO'] as const).map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setTag(t)}
                className={`py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  tag === t
                    ? 'bg-neutral-950 text-white border-neutral-950'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                Recipient Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:bg-white focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
              Street Address & Building *
            </label>
            <input
              type="text"
              placeholder="e.g. Flat 301, Heights, 80ft Road"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                PIN Code *
              </label>
              <input
                type="text"
                placeholder="560001"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:bg-white focus:border-black"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                State
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)}
              className="rounded border-neutral-300 text-black focus:ring-black"
            />
            <span>Make this my default shipping address</span>
          </label>

          {error && <span className="text-[11px] text-red-500 block">{error}</span>}

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-neutral-300 rounded-xl text-xs font-bold uppercase cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-neutral-950 hover:bg-black text-white rounded-xl text-xs font-bold uppercase cursor-pointer"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAddressModal;
