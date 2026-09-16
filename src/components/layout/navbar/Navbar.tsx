'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  Sparkles,
  ArrowRight,
  Truck,
  MessageCircle,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Navigation from './Navigation';
import MegaMenu from './MegaMenu';
import SearchModal from './SearchModal';
import CartDrawer from './CartDrawer';
import NavLinks from './NavLinks';

export const Navbar: React.FC = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<'men' | 'women' | 'drops'>('men');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const BrandLogo = () => (
    <Link href="/" className="group flex items-center gap-2 select-none">
      <div className="relative flex items-center">
        <Image
          src="/images/logo_dark.png"
          alt="NWear Logo"
          width={120}
          height={34}
          className="cursor-pointer object-contain group-hover:opacity-80 transition-opacity"
          priority
        />
        <span className="hidden sm:inline-block ml-2 text-[9px] font-mono font-black uppercase tracking-widest bg-black text-[#f6b800] px-1.5 py-0.5 rounded-xs">
          STUDIO
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full border-b border-black/[0.07] bg-white/85 backdrop-blur-xl transition-all duration-300"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="w-full flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Left: Mobile Trigger & Brand Logo & Navigation */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Mobile Sheet Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-1.5 -ml-1.5 rounded-lg hover:bg-neutral-100 text-neutral-900 transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Brand Logo */}
            <BrandLogo />

            {/* Desktop Navigation Links */}
            <Navigation
              activeMegaMenu={activeMegaMenu}
              setActiveMegaMenu={setActiveMegaMenu}
            />
          </div>

          {/* Right: Search, Wishlist, Bag, Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Live Search Trigger Pill */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-neutral-400 text-neutral-500 hover:text-neutral-900 transition-all cursor-pointer text-xs group"
            >
              <Search className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              <span className="hidden sm:inline text-neutral-400 font-medium">Search drops...</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold text-neutral-500 bg-neutral-200/60 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Button */}
            <Link
              href="/category/bestsellers"
              aria-label="Saved wishlist"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-red-500 transition-colors cursor-pointer relative"
            >
              <Heart className="w-5 h-5" />
            </Link>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open shopping bag"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-900 transition-colors cursor-pointer relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-black text-[#f6b800] text-[9px] font-mono font-black rounded-full flex items-center justify-center shadow-xs">
                2
              </span>
            </button>

            {/* VIP Profile Avatar */}
            <button
              aria-label="Customer account"
              className="hidden sm:flex p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMegaMenu && (
          <MegaMenu
            activeKey={activeMegaMenu}
            onClose={() => setActiveMegaMenu(null)}
          />
        )}
      </header>

      {/* Live Search Overlay Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Slide-out Cart / Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Supercharged Mobile Navigation Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-full sm:max-w-md p-0 flex flex-col z-50 bg-white">
          <SheetHeader className="p-5 border-b border-neutral-200 flex flex-row items-center justify-between">
            <SheetTitle>
              <BrandLogo />
            </SheetTitle>
          </SheetHeader>

          {/* Mobile Tab Selector */}
          <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 text-xs font-black uppercase tracking-wider text-center">
            <button
              onClick={() => setMobileTab('men')}
              className={`py-3 transition-colors ${
                mobileTab === 'men'
                  ? 'bg-white border-b-2 border-neutral-950 text-black font-black'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              Men
            </button>
            <button
              onClick={() => setMobileTab('women')}
              className={`py-3 transition-colors ${
                mobileTab === 'women'
                  ? 'bg-white border-b-2 border-neutral-950 text-black font-black'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setMobileTab('drops')}
              className={`py-3 transition-colors flex items-center justify-center gap-1 ${
                mobileTab === 'drops'
                  ? 'bg-white border-b-2 border-neutral-950 text-black font-black'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Drops</span>
            </button>
          </div>

          {/* Mobile Links Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-2 custom-scrollbar">
            {mobileTab === 'men' && (
              <div className="space-y-1">
                <NavLinks href="/category/oversized-tshirts" label="Heavyweight Boxy Tees" badge="280 GSM" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/cargos" label="Parachute Cargo Pants" badge="HOT" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/coord-sets" label="Waffle Co-ord Sets" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/hoodies" label="French Terry Hoodies" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/casual-shirts" label="Resort & Casual Shirts" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/jeans" label="Wide Leg Denim" onClick={() => setMobileMenuOpen(false)} />
              </div>
            )}

            {mobileTab === 'women' && (
              <div className="space-y-1">
                <NavLinks href="/category/t-shirts" label="Boxy Crop Tees" badge="TRENDING" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/coord-sets" label="Waffle Knit Co-ords" badge="HOT" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/cargos" label="Parachute Pants" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/autumn-escapes" label="Autumn Escapes Edit" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/hoodies" label="Heavy Knit Loungewear" onClick={() => setMobileMenuOpen(false)} />
              </div>
            )}

            {mobileTab === 'drops' && (
              <div className="space-y-1">
                <NavLinks href="/category/autumn-escapes" label="Drop 06: Autumn Escapes" badge="JUST IN" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/hoodies" label="Drop 05: Acid Wash Knits" badge="LIMITED" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/category/bestsellers" label="The Secret Archive Restock" onClick={() => setMobileMenuOpen(false)} />
                <NavLinks href="/lookbook" label="Runway Lookbook 2026" onClick={() => setMobileMenuOpen(false)} />
              </div>
            )}

            {/* VIP Club Promo Card */}
            <div className="mt-6 p-4 rounded-2xl border border-amber-400 bg-[#f6b800] text-black shadow-md">
              <div className="flex items-center gap-1.5 font-mono font-black text-[10px] uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VAULT VIP PASS</span>
              </div>
              <h4 className="text-xs font-black uppercase">Get ₹500 Off Your First Fit</h4>
              <p className="text-[11px] font-medium mt-0.5 leading-tight">
                Use code <strong className="font-mono underline">FIRST500</strong> on checkout.
              </p>
            </div>

            {/* Customer Care Links */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 gap-3 text-xs font-bold text-neutral-600">
              <Link href="/track-order" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 hover:text-black">
                <Truck className="w-4 h-4 text-neutral-400" />
                <span>Track Order</span>
              </Link>
              <Link href="https://wa.me" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 hover:text-black">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp VIP</span>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
