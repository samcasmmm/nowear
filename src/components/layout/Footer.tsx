'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import {
  ArrowUp,
  Mail,
  Check,
  ArrowUpRight,
  Truck,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Copy,
  Search,
  MessageCircle,
  Clock,
  Radio,
} from 'lucide-react';

const silhouettes = [
  { label: 'Heavyweight Boxy Tees (280 GSM)', href: '/category/oversized-tshirts' },
  { label: 'Parachute Cargo Pants', href: '/category/cargos' },
  { label: 'Waffle Knit Co-ord Sets', href: '/category/coord-sets' },
  { label: 'French Terry Hoodies', href: '/category/hoodies' },
  { label: 'Resort & Textured Shirts', href: '/category/casual-shirts' },
  { label: 'Minimalist Knit Polos', href: '/category/polos' },
];

const archiveDrops = [
  { label: 'Autumn Escapes \'26 Collection', href: '/category/autumn-escapes' },
  { label: 'Midnight Acid Wash Drop', href: '/category/hoodies' },
  { label: 'Monochrome Essentials Vault', href: '/category/basics' },
  { label: 'Runway Lookbook & Gallery', href: '/lookbook' },
  { label: 'Customer Street Style Feed', href: '/reviews' },
];

const clientConcierge = [
  { label: 'Track Live Order', href: '/track-order' },
  { label: '7-Day Return & Exchange Portal', href: '/returns' },
  { label: 'Interactive Size Recommender', href: '/size-guide' },
  { label: 'Fabric Quality & Care Guide', href: '/care' },
  { label: 'WhatsApp VIP Stylist Concierge', href: 'https://wa.me' },
  { label: 'Help Desk & FAQs', href: '/faqs' },
];

const studioLinks = [
  { label: 'The NWEAR Manifesto', href: '/about' },
  { label: 'Sustainable Sourcing & Mills', href: '/about' },
  { label: 'Creator Squad & Affiliates', href: '/creators' },
  { label: 'Flagship Stores & Pop-ups', href: '/stores' },
  { label: 'Studio Careers & Open Roles', href: '/careers' },
];

export const Footer: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [fitPreference, setFitPreference] = useState<'men' | 'women' | 'unisex'>('unisex');
  const [agreed, setAgreed] = useState(true);
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);

  // Quick Order Tracking State
  const [trackQuery, setTrackQuery] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setVaultUnlocked(true);
    }
  };

  const copyVoucher = () => {
    navigator.clipboard.writeText('NWEAR-VAULT500');
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2500);
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackQuery.trim()) return;
    setTrackingResult(
      `Order #${trackQuery.toUpperCase()} is in transit via BlueDart Express. Estimated Delivery: Tomorrow by 4:00 PM.`
    );
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white text-neutral-950 border-t-2 border-black font-sans selection:bg-[#f6b800] selection:text-black">
      
      {/* 1. HIGH-ENERGY RUNWAY MARQUEE RIBBON */}
      <div className="w-full bg-[#f6b800] border-b-2 border-black py-3 overflow-hidden select-none">
        <Marquee speed={65} autoFill className="overflow-hidden">
          <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black mx-6 font-mono flex items-center gap-4">
            <span>NWEAR STUDIO</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>2.000.000+ HUMANS STYLED</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>ZERO MID FITS</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>280 GSM HEAVYWEIGHT COMBED COTTON</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>EST. 2018</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
          </span>
        </Marquee>
      </div>

      {/* 2. QUALITY GUARANTEE BADGES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-xl border-2 border-black bg-neutral-50 hover:bg-amber-50/60 transition-colors shadow-xs group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black text-[#f6b800] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-tight text-neutral-950">
                  48-Hour Air Dispatch
                </h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">
                  Free express shipping on orders over ₹999 across all India.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border-2 border-black bg-neutral-50 hover:bg-blue-50/60 transition-colors shadow-xs group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black text-blue-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-tight text-neutral-950">
                  7-Day Hassle-Free Returns
                </h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">
                  Doorstep exchange pickup with instant wallet credit.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border-2 border-black bg-neutral-50 hover:bg-amber-50/60 transition-colors shadow-xs group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black text-[#f6b800] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-tight text-neutral-950">
                  280 GSM Heavyweight
                </h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">
                  Pre-shrunk combed cotton with anti-sag ribbed collars.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border-2 border-black bg-neutral-50 hover:bg-emerald-50/60 transition-colors shadow-xs group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-tight text-neutral-950">
                  Secure Checkout & COD
                </h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">
                  256-bit SSL encrypted checkout with cash on delivery.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. MAIN EDITORIAL CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: The Secret Vault (VIP Drop Club) & Live Order Tracking (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Vault Card */}
            <div className="p-6 rounded-2xl border-2 border-black bg-neutral-50 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#e84125] inline-block rotate-45" />
                <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#e84125]">
                  // THE SECRET VAULT VIP PASS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 mb-1">
                Unlock ₹500 Off Your First Fit
              </h3>
              <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-4">
                Join our private streetwear archive list. Get secret restock alerts, midnight drop passwords, and VIP event invites.
              </p>

              {vaultUnlocked ? (
                <div className="p-4 border-2 border-black bg-emerald-50 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>You&apos;re officially on the Secret Vault List!</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-emerald-300 rounded-lg">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">YOUR ₹500 VOUCHER:</span>
                      <span className="font-mono font-black text-sm tracking-wider text-black">NWEAR-VAULT500</span>
                    </div>
                    <button
                      onClick={copyVoucher}
                      className="px-3 py-1.5 bg-black text-white text-xs font-bold rounded flex items-center gap-1.5 hover:bg-neutral-800 transition-all cursor-pointer"
                    >
                      {couponCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{couponCopied ? 'COPIED!' : 'COPY'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  {/* Fit Preference Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    {(['men', 'women', 'unisex'] as const).map((fit) => (
                      <button
                        key={fit}
                        type="button"
                        onClick={() => setFitPreference(fit)}
                        className={`py-1.5 px-2 text-[10px] font-mono font-black uppercase rounded-lg border transition-all cursor-pointer ${
                          fitPreference === fit
                            ? 'bg-black text-white border-black shadow-xs'
                            : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-800'
                        }`}
                      >
                        {fit === 'unisex' ? 'All Fits' : fit}
                      </button>
                    ))}
                  </div>

                  {/* Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="sm:col-span-4 px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black font-medium"
                    />
                    <div className="sm:col-span-8 relative">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black font-medium pr-8"
                      />
                      <Mail className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-black hover:bg-neutral-800 text-[#f6b800] text-xs font-black uppercase tracking-widest rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 active:scale-98 shadow-sm"
                  >
                    <span>JOIN VAULT & GET ₹500 OFF</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-3.5 h-3.5 accent-black rounded border border-neutral-400"
                    />
                    <span className="text-[11px] text-neutral-500 font-medium">
                      Receive VIP drop alerts & accept{' '}
                      <Link href="/terms" className="underline text-neutral-900 font-bold hover:text-black">
                        terms
                      </Link>
                    </span>
                  </label>
                </form>
              )}
            </div>

            {/* Quick Order Tracking Fast-Widget */}
            <div className="p-4.5 rounded-xl border border-neutral-300 bg-white shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-neutral-900" />
                <h4 className="text-xs font-black uppercase tracking-tight text-neutral-900">
                  Instant Order Lookup
                </h4>
              </div>
              <form onSubmit={handleTrackOrder} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Order ID (e.g. NW-84920)"
                  value={trackQuery}
                  onChange={(e) => setTrackQuery(e.target.value)}
                  className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs uppercase font-mono font-medium text-neutral-900 placeholder-neutral-400 outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer"
                >
                  Track
                </button>
              </form>
              {trackingResult && (
                <div className="mt-2.5 p-2.5 bg-neutral-900 text-amber-300 rounded-lg text-xs font-mono flex items-start gap-2 animate-in fade-in">
                  <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" />
                  <span>{trackingResult}</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Comprehensive Editorial Directory (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            
            {/* Silhouettes */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3.5">
                // SILHOUETTES
              </span>
              <ul className="space-y-2.5">
                {silhouettes.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block text-xs font-bold text-neutral-800 hover:text-[#e84125] hover:translate-x-1 transition-all leading-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Archives & Drops */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3.5">
                // DROPS & EDITS
              </span>
              <ul className="space-y-2.5">
                {archiveDrops.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block text-xs font-bold text-neutral-800 hover:text-[#e84125] hover:translate-x-1 transition-all leading-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Concierge */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3.5">
                // CONCIERGE
              </span>
              <ul className="space-y-2.5">
                {clientConcierge.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block text-xs font-bold text-neutral-800 hover:text-[#e84125] hover:translate-x-1 transition-all leading-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio HQ */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3.5">
                // STUDIO HQ
              </span>
              <ul className="space-y-2.5">
                {studioLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block text-xs font-bold text-neutral-800 hover:text-[#e84125] hover:translate-x-1 transition-all leading-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* 4. LIVE STUDIO ACTIVITY & SOCIAL SQUAD BAR */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Live System Status Indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold text-neutral-900">STUDIO HQ MUMBAI</span>
            <span>•</span>
            <span>ALL SYSTEMS OPERATIONAL</span>
            <span>•</span>
            <span className="text-neutral-900 font-bold">2,840 ONLINE</span>
          </div>

          {/* Social Media Squad Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mr-1">
              CONNECT:
            </span>
            
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="w-8 h-8 rounded-lg border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Spotify */}
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
              className="w-8 h-8 rounded-lg border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-2xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.216.353-.672.464-1.025.248-2.806-1.715-6.338-2.102-10.499-1.152-.403.092-.808-.16-.9-.563-.092-.403.16-.808.563-.9 4.557-1.041 8.461-.599 11.613 1.332.353.216.464.672.248 1.035zm1.47-3.266c-.272.441-.85.579-1.291.307-3.212-1.975-8.11-2.546-11.91-1.392-.497.151-1.026-.134-1.177-.63-.151-.497.134-1.026.63-1.177 4.343-1.319 9.754-.683 13.441 1.585.441.272.579.85.307 1.307zm.126-3.41c-3.85-2.287-10.205-2.498-13.876-1.383-.591.18-1.222-.154-1.401-.745-.18-.591.154-1.222.745-1.401 4.227-1.284 11.238-1.036 15.672 1.597.531.315.705 1.004.39 1.535-.315.531-1.004.705-1.53.397z"/>
              </svg>
            </a>

            {/* Accent Badge */}
            <div className="w-8 h-8 rounded-lg border-2 border-black bg-[#f6b800] text-black font-mono font-black flex items-center justify-center text-[10px]">
              NW
            </div>
          </div>

        </div>

        {/* 5. BESPOKE MASSIVE GRAPHIC TYPOGRAPHY */}
        <div className="mt-10 mb-2 select-none pointer-events-none w-full overflow-hidden border-t-2 border-black pt-4">
          <div className="flex items-baseline justify-between font-black tracking-tighter uppercase leading-none text-[15vw] sm:text-[14vw] md:text-[13vw] whitespace-nowrap">
            <span className="text-[#e84125]">NWEAR.</span>
            <span className="text-black">STUDIO</span>
          </div>
        </div>

        {/* 6. CLEAN BOTTOM BAR */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-900">
          
          {/* Copyright */}
          <div>
            <p>
              © 2018-{new Date().getFullYear()}{' '}
              <Link href="/" className="underline hover:text-[#e84125] transition-colors">
                NWEAR STUDIO INC.
              </Link>{' '}
              ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Slogan */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#e84125] inline-block" />
            <span className="tracking-wider uppercase font-mono">#WEARLESSNOISE ;)</span>
          </div>

          {/* Payments & Scroll to top */}
          <div className="flex items-center gap-4">
            {/* Payment Tags */}
            <div className="flex items-center gap-1 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-neutral-300 font-bold rounded">UPI</span>
              <span className="px-2 py-0.5 border border-neutral-300 font-bold rounded">VISA</span>
              <span className="px-2 py-0.5 border border-neutral-300 font-bold rounded">MASTERCARD</span>
              <span className="px-2 py-0.5 border border-neutral-300 font-bold rounded">COD</span>
            </div>

            {/* Scroll-To-Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs active:scale-90"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
