'use client';

import React, { useState } from 'react';
import {
  Coins,
  Sparkles,
  Award,
  Tag,
  Copy,
  Check,
  ArrowUpRight,
  ArrowDownLeft,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import { UserProfile, mockVaultVouchers, mockCoinTransactions } from '@/data/profileData';

interface VaultWalletTabProps {
  user: UserProfile;
}

export const VaultWalletTab: React.FC<VaultWalletTabProps> = ({ user }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      {/* 1. Digital VIP Membership Card */}
      <div className="relative w-full max-w-lg mx-auto bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-7 border border-amber-400/40 shadow-2xl overflow-hidden group">
        {/* Holographic Sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-48 sm:h-52">
          {/* Top Card Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-xs tracking-widest text-[#f6b800] bg-black px-2 py-0.5 rounded border border-amber-500/40">
                NWEAR VAULT
              </span>
              <span className="text-[10px] font-mono text-neutral-400">MEMBERSHIP</span>
            </div>
            <Sparkles className="w-5 h-5 text-[#f6b800]" />
          </div>

          {/* Middle Card Row */}
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
              MEMBER TIER LEVEL 3
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white font-mono mt-0.5">
              {user.memberTier}
            </h3>
          </div>

          {/* Bottom Card Row */}
          <div className="flex items-end justify-between pt-2 border-t border-neutral-800">
            <div>
              <span className="text-[10px] text-neutral-400 font-mono block">CARDHOLDER</span>
              <span className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                {user.name}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-neutral-400 font-mono block">MEMBER ID</span>
              <span className="text-xs font-mono font-bold text-[#f6b800]">
                {user.memberId}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NWear Coins Balance Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Available Coins Balance
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black font-mono text-neutral-900">
              {user.nwearCoins.toLocaleString('en-IN')}
            </span>
            <span className="text-xs font-mono text-emerald-600 font-bold">
              (₹{user.nwearCoins} Value)
            </span>
          </div>
          <p className="text-[11px] text-neutral-400">
            1 Coin = ₹1 at instant checkout
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Lifetime Vault Savings
          </span>
          <div className="text-2xl font-black font-mono text-neutral-900">
            ₹{user.lifetimeSavings.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-neutral-400">
            Saved via exclusive member drop perks
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Tier Progression Status
          </span>
          <div className="text-2xl font-black font-mono text-amber-600">
            77% Complete
          </div>
          <p className="text-[11px] text-neutral-400">
            To unlock Tier 4 Diamond status
          </p>
        </div>
      </div>

      {/* 3. Available Vault Coupons */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900">
            Exclusive Vault Vouchers & Perks ({mockVaultVouchers.length})
          </h3>
          <span className="text-[11px] font-mono text-neutral-500">1-Click Apply at Checkout</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockVaultVouchers.map((voucher) => {
            const isCopied = copiedCode === voucher.code;

            return (
              <div
                key={voucher.id}
                className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-black transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black uppercase text-neutral-900 font-mono">
                      {voucher.discount}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {voucher.expiry}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-neutral-800">{voucher.title}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">{voucher.description}</p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-neutral-900 bg-neutral-100 px-2.5 py-1 rounded-md">
                    {voucher.code}
                  </span>

                  <button
                    onClick={() => handleCopyCode(voucher.code)}
                    className="text-xs font-bold text-neutral-900 hover:text-amber-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Vault Coins Activity Ledger */}
      <div className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-3">
        <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900">
          Coins Transaction Ledger
        </h3>

        <div className="space-y-2.5">
          {mockCoinTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    tx.type === 'credit'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {tx.type === 'credit' ? (
                    <ArrowDownLeft className="w-4 h-4" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">{tx.description}</span>
                  <span className="text-[10px] font-mono text-neutral-400">{tx.date}</span>
                </div>
              </div>

              <span
                className={`font-mono font-black text-sm ${
                  tx.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {tx.type === 'credit' ? `+${tx.amount}` : `-${tx.amount}`} Coins
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaultWalletTab;
