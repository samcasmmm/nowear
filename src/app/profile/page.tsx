'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header, Navbar, Footer } from '@/components/layout';
import {
  ProfileHeader,
  ProfileNav,
  ProfileTab,
  OverviewTab,
  OrdersTab,
  SavedFitsTab,
  AddressesTab,
  VaultWalletTab,
  SettingsTab,
  OrderTrackingModal,
  AddAddressModal,
  EditProfileModal,
} from '@/components/profile';
import {
  mockUserProfile,
  mockFitProfile,
  mockOrders,
  mockVaultVouchers,
  mockWishlistItems,
  Order,
  UserProfile,
  FitProfile,
} from '@/data/profileData';
import { ShippingAddress, savedAddresses as initialAddresses } from '@/data/checkoutData';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');
  const [user, setUser] = useState<UserProfile>(mockUserProfile);
  const [fitProfile, setFitProfile] = useState<FitProfile>(mockFitProfile);
  const [addresses, setAddresses] = useState<ShippingAddress[]>(initialAddresses);
  const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [referralCopied, setReferralCopied] = useState(false);

  const activeOrders = mockOrders.filter((o) => o.status === 'in-transit');

  const handleCopyReferral = () => {
    setReferralCopied(true);
    navigator.clipboard?.writeText(user.referralCode);
    setTimeout(() => setReferralCopied(false), 2000);
  };

  const handleSetDefaultAddress = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleAddAddress = (newAddr: ShippingAddress) => {
    if (newAddr.isDefault) {
      setAddresses((prev) => [
        newAddr,
        ...prev.map((a) => ({ ...a, isDefault: false })),
      ]);
    } else {
      setAddresses((prev) => [newAddr, ...prev]);
    }
  };

  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updated }));
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col antialiased selection:bg-black selection:text-[#f6b800]">
      {/* Top Header Bar */}
      <Header />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-700">Member Vault</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="font-bold text-neutral-900">{user.name}</span>
        </nav>

        {/* Profile Header Card */}
        <ProfileHeader
          user={user}
          activeOrdersCount={activeOrders.length}
          wishlistCount={mockWishlistItems.length}
          couponsCount={mockVaultVouchers.length}
          onEditProfile={() => setIsEditProfileModalOpen(true)}
          onCopyReferral={handleCopyReferral}
          referralCopied={referralCopied}
        />

        {/* Two-Column Nav & Tab Content */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <ProfileNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            activeOrdersCount={activeOrders.length}
            wishlistCount={mockWishlistItems.length}
          />

          <div className="flex-1 w-full min-w-0">
            {activeTab === 'overview' && (
              <OverviewTab
                user={user}
                fitProfile={fitProfile}
                recentOrder={mockOrders[0] || null}
                onTrackOrder={(order) => setTrackingOrder(order)}
                onNavigateToTab={setActiveTab}
              />
            )}

            {activeTab === 'orders' && (
              <OrdersTab
                onTrackOrder={(order) => setTrackingOrder(order)}
              />
            )}

            {activeTab === 'wishlist' && <SavedFitsTab />}

            {activeTab === 'addresses' && (
              <AddressesTab
                addresses={addresses}
                onOpenAddModal={() => setIsAddressModalOpen(true)}
                onSetDefault={handleSetDefaultAddress}
                onDeleteAddress={handleDeleteAddress}
              />
            )}

            {activeTab === 'wallet' && <VaultWalletTab user={user} />}

            {activeTab === 'settings' && (
              <SettingsTab
                user={user}
                fitProfile={fitProfile}
                onUpdateProfile={handleUpdateProfile}
                onUpdateFitProfile={setFitProfile}
              />
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <OrderTrackingModal
        order={trackingOrder}
        isOpen={!!trackingOrder}
        onClose={() => setTrackingOrder(null)}
      />

      <AddAddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onAddAddress={handleAddAddress}
      />

      <EditProfileModal
        user={user}
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSave={handleUpdateProfile}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
