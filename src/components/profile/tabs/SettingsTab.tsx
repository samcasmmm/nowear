'use client';

import React, { useState } from 'react';
import {
  User,
  Ruler,
  Bell,
  Lock,
  Smartphone,
  Mail,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';
import { FitProfile, UserProfile } from '@/data/profileData';

interface SettingsTabProps {
  user: UserProfile;
  fitProfile: FitProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onUpdateFitProfile: (updated: FitProfile) => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  user,
  fitProfile,
  onUpdateProfile,
  onUpdateFitProfile,
}) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    dob: '1998-06-15',
    gender: 'Male',
  });

  const [fitData, setFitData] = useState<FitProfile>(fitProfile);

  const [notifications, setNotifications] = useState({
    whatsappDrops: true,
    smsTracking: true,
    emailReceipts: true,
    vaultDiscounts: true,
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({ name: formData.name, email: formData.email, phone: formData.phone });
    onUpdateFitProfile(fitData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <form onSubmit={handleSaveAll} className="space-y-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-neutral-900">
            Account Preferences & Fit Profile
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Update your body measurements for custom size intelligence and notification channels.
          </p>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-in fade-in">
            <Check className="w-3.5 h-3.5" />
            <span>Saved Successfully!</span>
          </div>
        )}
      </div>

      {/* 1. Personal Details */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
          <User className="w-4 h-4 text-neutral-900" />
          <h3 className="text-xs sm:text-sm font-black uppercase text-neutral-900">
            Personal Information
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium outline-none focus:bg-white focus:border-black"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium outline-none focus:bg-white focus:border-black"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:bg-white focus:border-black"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Date of Birth (For Birthday Perks)
            </label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:bg-white focus:border-black"
            />
          </div>
        </div>
      </div>

      {/* 2. Fit Profile Measurements */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-neutral-900" />
            <h3 className="text-xs sm:text-sm font-black uppercase text-neutral-900">
              Streetwear Fit Profile
            </h3>
          </div>
          <span className="text-[10px] font-mono text-[#f6b800] bg-black px-2 py-0.5 rounded font-black uppercase">
            Auto-Selects Your Size
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Height
            </label>
            <input
              type="text"
              value={fitData.height}
              onChange={(e) => setFitData({ ...fitData, height: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              placeholder="e.g. 5' 11&quot;"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Weight
            </label>
            <input
              type="text"
              value={fitData.weight}
              onChange={(e) => setFitData({ ...fitData, weight: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              placeholder="e.g. 74 kg"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Chest Size
            </label>
            <input
              type="text"
              value={fitData.chest}
              onChange={(e) => setFitData({ ...fitData, chest: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              placeholder="e.g. 40 in"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Waist Size
            </label>
            <input
              type="text"
              value={fitData.waist}
              onChange={(e) => setFitData({ ...fitData, waist: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black"
              placeholder="e.g. 32 in"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Shoe Size
            </label>
            <input
              type="text"
              value={fitData.shoeSize}
              onChange={(e) => setFitData({ ...fitData, shoeSize: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:bg-white focus:border-black"
              placeholder="e.g. UK 9"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-neutral-500 mb-1">
              Preferred Fit Silhouette
            </label>
            <select
              value={fitData.preferredFit}
              onChange={(e) => setFitData({ ...fitData, preferredFit: e.target.value })}
              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs outline-none focus:bg-white focus:border-black font-medium"
            >
              <option value="Heavyweight Boxy / Oversized">Heavyweight Boxy / Oversized</option>
              <option value="Standard Regular Fit">Standard Regular Fit</option>
              <option value="Relaxed Baggy Fit">Relaxed Baggy Fit</option>
              <option value="Tailored Slim Fit">Tailored Slim Fit</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Notifications & Communication Channels */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
          <Bell className="w-4 h-4 text-neutral-900" />
          <h3 className="text-xs sm:text-sm font-black uppercase text-neutral-900">
            Drop Alerts & Notifications
          </h3>
        </div>

        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-neutral-900 block">
                WhatsApp VIP Secret Drop Alerts
              </span>
              <span className="text-[11px] text-neutral-500">
                Receive secret password links 2 hours before general drop launch
              </span>
            </div>
            <input
              type="checkbox"
              checked={notifications.whatsappDrops}
              onChange={(e) => setNotifications({ ...notifications, whatsappDrops: e.target.checked })}
              className="w-4 h-4 rounded text-black focus:ring-black"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-neutral-900 block">
                SMS Delivery Tracking & OTPs
              </span>
              <span className="text-[11px] text-neutral-500">
                Instant delivery milestone SMS and doorstep dispatch alerts
              </span>
            </div>
            <input
              type="checkbox"
              checked={notifications.smsTracking}
              onChange={(e) => setNotifications({ ...notifications, smsTracking: e.target.checked })}
              className="w-4 h-4 rounded text-black focus:ring-black"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-neutral-900 block">
                Email Receipts & Tax Invoices
              </span>
              <span className="text-[11px] text-neutral-500">
                Downloadable PDF receipts sent automatically upon order completion
              </span>
            </div>
            <input
              type="checkbox"
              checked={notifications.emailReceipts}
              onChange={(e) => setNotifications({ ...notifications, emailReceipts: e.target.checked })}
              className="w-4 h-4 rounded text-black focus:ring-black"
            />
          </label>
        </div>
      </div>

      {/* Save Trigger Button */}
      <button
        type="submit"
        className="w-full py-4 bg-neutral-950 hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-md cursor-pointer active:scale-99"
      >
        Save All Profile Preferences
      </button>
    </form>
  );
};

export default SettingsTab;
