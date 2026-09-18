'use client';

import React from 'react';
import {
  LayoutDashboard,
  Package,
  Heart,
  MapPin,
  Coins,
  Settings,
  Sparkles,
  LogOut,
  ChevronRight,
} from 'lucide-react';

export type ProfileTab =
  | 'overview'
  | 'orders'
  | 'wishlist'
  | 'addresses'
  | 'wallet'
  | 'settings';

interface ProfileNavProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
  activeOrdersCount: number;
  wishlistCount: number;
}

export const ProfileNav: React.FC<ProfileNavProps> = ({
  activeTab,
  onTabChange,
  activeOrdersCount,
  wishlistCount,
}) => {
  const tabs = [
    {
      id: 'overview' as ProfileTab,
      label: 'Vault Overview',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'orders' as ProfileTab,
      label: 'Orders & Returns',
      icon: Package,
      badge: activeOrdersCount > 0 ? `${activeOrdersCount} Active` : null,
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      id: 'wishlist' as ProfileTab,
      label: 'Saved Fits',
      icon: Heart,
      badge: `${wishlistCount}`,
      badgeColor: 'bg-neutral-100 text-neutral-800',
    },
    {
      id: 'addresses' as ProfileTab,
      label: 'Delivery Addresses',
      icon: MapPin,
      badge: null,
    },
    {
      id: 'wallet' as ProfileTab,
      label: 'Vault Card & Coins',
      icon: Coins,
      badge: 'VIP',
      badgeColor: 'bg-black text-[#f6b800]',
    },
    {
      id: 'settings' as ProfileTab,
      label: 'Fit Profile & Security',
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-4">
      {/* Mobile Horizontal Scroll Switcher */}
      <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 custom-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:text-black'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#f6b800]' : 'text-neutral-400'}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-black ${tab.badgeColor}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Desktop Vertical Navigation Menu */}
      <div className="hidden lg:block bg-white rounded-2xl border border-neutral-200 p-2 shadow-xs space-y-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full px-3.5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer ${
                isActive
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#f6b800]' : 'text-neutral-400'}`} />
                <span>{tab.label}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {tab.badge && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-black ${tab.badgeColor}`}>
                    {tab.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
              </div>
            </button>
          );
        })}

        <div className="pt-2 border-t border-neutral-100">
          <button
            onClick={() => alert('Logged out successfully.')}
            className="w-full px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2.5 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProfileNav;
