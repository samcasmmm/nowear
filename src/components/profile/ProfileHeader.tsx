'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Coins,
  Package,
  Heart,
  Tag,
  Share2,
  Edit3,
  Copy,
  Check,
} from 'lucide-react';
import { UserProfile } from '@/data/profileData';

interface ProfileHeaderProps {
  user: UserProfile;
  activeOrdersCount: number;
  wishlistCount: number;
  couponsCount: number;
  onEditProfile: () => void;
  onCopyReferral: () => void;
  referralCopied: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user,
  activeOrdersCount,
  wishlistCount,
  couponsCount,
  onEditProfile,
  onCopyReferral,
  referralCopied,
}) => {
  const tierProgress = Math.min(100, (user.currentSpent / user.nextTierThreshold) * 100);
  const remainingForNextTier = Math.max(0, user.nextTierThreshold - user.currentSpent);

  return (
    <div className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* User Identity & Avatar */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative group shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#f6b800] ring-4 ring-neutral-900 shadow-lg">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <button
              onClick={onEditProfile}
              aria-label="Edit Profile"
              className="absolute -bottom-1 -right-1 p-1.5 bg-[#f6b800] text-black rounded-lg hover:scale-105 transition-transform cursor-pointer shadow-md"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                {user.name}
              </h1>
              <div className="flex items-center gap-1 bg-[#f6b800] text-black px-2 py-0.5 rounded-sm text-[10px] font-mono font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>{user.memberTier}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <span>ID: <strong className="text-neutral-200">{user.memberId}</strong></span>
              <span>•</span>
              <span>Joined {user.memberSince}</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onCopyReferral}
                className="px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-[11px] font-mono font-bold text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {referralCopied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Referral Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Invite: {user.referralCode}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* VIP Tier Progress & Perks */}
        <div className="lg:max-w-xs w-full bg-neutral-900/80 border border-neutral-800 p-4 rounded-2xl backdrop-blur-sm space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-[#f6b800] uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>Next: Vault Diamond</span>
            </span>
            <span className="font-mono text-[11px] text-neutral-400">
              {Math.round(tierProgress)}%
            </span>
          </div>

          <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-400 to-[#f6b800] h-full rounded-full transition-all duration-500"
              style={{ width: `${tierProgress}%` }}
            />
          </div>

          <p className="text-[11px] text-neutral-400 leading-tight">
            Spend <strong className="font-mono text-white">₹{remainingForNextTier.toLocaleString('en-IN')}</strong> more to unlock Lifetime Free Air Shipping & Drop Pre-access.
          </p>
        </div>
      </div>

      {/* Metrics Quick Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-neutral-800/80">
        <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 text-[#f6b800] rounded-lg">
            <Coins className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-black font-mono text-white">
              {user.nwearCoins.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Vault Coins (₹{user.nwearCoins})
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
            <Package className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-black font-mono text-white">
              {activeOrdersCount} Active
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Orders In Transit
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-lg">
            <Heart className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-black font-mono text-white">
              {wishlistCount} Fits
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Saved Wishlist
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800 flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
            <Tag className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-black font-mono text-white">
              {couponsCount} Available
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Vault Vouchers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
