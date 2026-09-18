'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Check,
  Plus,
  Building2,
  Home,
  User,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ShippingAddress, savedAddresses as initialAddresses } from '@/data/checkoutData';

interface ContactAndAddressStepProps {
  onComplete: (address: ShippingAddress, contact: { email: string; phone: string }) => void;
  selectedAddress: ShippingAddress | null;
  initialContact: { email: string; phone: string };
}

export const ContactAndAddressStep: React.FC<ContactAndAddressStepProps> = ({
  onComplete,
  selectedAddress: currentSelected,
  initialContact,
}) => {
  const [addresses, setAddresses] = useState<ShippingAddress[]>(initialAddresses);
  const [selectedId, setSelectedId] = useState<string>(
    currentSelected?.id || initialAddresses[0]?.id || 'addr-1'
  );
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isVipMember, setIsVipMember] = useState(true);

  const [contact, setContact] = useState(initialContact);
  const [newAddr, setNewAddr] = useState<Omit<ShippingAddress, 'id' | 'isDefault'>>({
    tag: 'HOME',
    fullName: 'Alex Rivera',
    phone: '+91 98765 43210',
    street: '',
    apartment: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSelectAddress = (addr: ShippingAddress) => {
    setSelectedId(addr.id);
    setIsAddingNew(false);
  };

  const handleSaveNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!newAddr.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!newAddr.phone.trim()) newErrors.phone = 'Phone is required';
    if (!newAddr.street.trim()) newErrors.street = 'Street address is required';
    if (!newAddr.pincode.trim() || newAddr.pincode.length < 6)
      newErrors.pincode = 'Valid 6-digit PIN code required';
    if (!newAddr.city.trim()) newErrors.city = 'City is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const created: ShippingAddress = {
      ...newAddr,
      id: `addr-${Date.now()}`,
      isDefault: addresses.length === 0,
    };

    setAddresses((prev) => [created, ...prev]);
    setSelectedId(created.id);
    setIsAddingNew(false);
    setErrors({});
  };

  const handleProceed = () => {
    const activeAddress = addresses.find((a) => a.id === selectedId) || addresses[0];
    if (!activeAddress) return;
    onComplete(activeAddress, contact);
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      {/* 1. Contact & Member Info Banner */}
      <div className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold flex items-center justify-center">
              1
            </span>
            <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
              Contact Information
            </h3>
          </div>
          {isVipMember && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-black text-[#f6b800] rounded-full text-[10px] font-mono font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#f6b800]" />
              <span>VAULT ICON MEMBER</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-900 focus:bg-white focus:border-black outline-none transition-all"
                placeholder="you@domain.com"
              />
            </div>
            <span className="text-[10px] text-neutral-400 mt-1 block">
              Order confirmation & tax invoice sent here
            </span>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Phone Number (For Delivery SMS & WhatsApp)
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono font-medium text-neutral-900 focus:bg-white focus:border-black outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
            <span className="text-[10px] text-neutral-400 mt-1 block">
              Live transit updates & OTP delivery verification
            </span>
          </div>
        </div>
      </div>

      {/* 2. Shipping Address Selection */}
      <div className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold flex items-center justify-center">
              2
            </span>
            <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
              Shipping Destination
            </h3>
          </div>
          {!isAddingNew && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Address</span>
            </button>
          )}
        </div>

        {/* Existing Addresses Grid */}
        {!isAddingNew ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {addresses.map((addr) => {
              const isSelected = addr.id === selectedId;

              return (
                <div
                  key={addr.id}
                  onClick={() => handleSelectAddress(addr)}
                  className={`relative p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-neutral-950 bg-neutral-50/70 shadow-sm ring-2 ring-neutral-950/10'
                      : 'border-neutral-200 hover:border-neutral-400 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-wider flex items-center gap-1 ${
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
                          <span className="text-[10px] font-mono text-neutral-400">
                            DEFAULT
                          </span>
                        )}
                      </div>

                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-neutral-900">{addr.fullName}</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {addr.street}, {addr.apartment && `${addr.apartment}, `}
                      {addr.city}, {addr.state} -{' '}
                      <strong className="font-mono text-neutral-900">{addr.pincode}</strong>
                    </p>
                    <p className="text-[11px] font-mono text-neutral-500 mt-2 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {addr.phone}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Add New Address Form */
          <form onSubmit={handleSaveNewAddress} className="p-4 rounded-xl border border-neutral-300 bg-neutral-50/50 space-y-3.5">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold uppercase text-neutral-900">
                New Address Details
              </span>
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                className="text-xs text-neutral-500 hover:text-black underline cursor-pointer"
              >
                Cancel
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(['HOME', 'WORK', 'STUDIO'] as const).map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setNewAddr({ ...newAddr, tag })}
                  className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
                    newAddr.tag === tag
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={newAddr.fullName}
                  onChange={(e) => setNewAddr({ ...newAddr, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs outline-none focus:border-black"
                />
                {errors.fullName && (
                  <span className="text-[10px] text-red-500">{errors.fullName}</span>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="10-Digit Mobile Number *"
                  value={newAddr.phone}
                  onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-mono outline-none focus:border-black"
                />
                {errors.phone && (
                  <span className="text-[10px] text-red-500">{errors.phone}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="House / Flat No., Building, Street Area *"
                  value={newAddr.street}
                  onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs outline-none focus:border-black"
                />
                {errors.street && (
                  <span className="text-[10px] text-red-500">{errors.street}</span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Landmark / Locality (Optional)"
                  value={newAddr.apartment}
                  onChange={(e) => setNewAddr({ ...newAddr, apartment: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs outline-none focus:border-black"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="6-Digit PIN Code *"
                  value={newAddr.pincode}
                  onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-mono outline-none focus:border-black"
                />
                {errors.pincode && (
                  <span className="text-[10px] text-red-500">{errors.pincode}</span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="City *"
                  value={newAddr.city}
                  onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs outline-none focus:border-black"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="State *"
                  value={newAddr.state}
                  onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs outline-none focus:border-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-neutral-900 hover:bg-black text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Save & Deliver Here
            </button>
          </form>
        )}

        {/* Action Button */}
        {!isAddingNew && (
          <div className="pt-2">
            <button
              onClick={handleProceed}
              className="w-full py-3.5 bg-neutral-950 hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer active:scale-99"
            >
              <span>CONTINUE TO DELIVERY SPEED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAndAddressStep;
