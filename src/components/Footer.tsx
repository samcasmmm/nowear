'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import {
  ArrowUp,
  Mail,
  Check,
  ArrowUpRight,
} from 'lucide-react';

const collectionTags = [
  { label: '#OVERSIZED TEES', href: '/category/oversized-tshirts' },
  { label: '#CO-ORD SETS', href: '/category/coord-sets' },
  { label: '#CARGO JOGGERS', href: '/category/joggers' },
  { label: '#HEAVY HOODIES', href: '/category/hoodies' },
  { label: '#RESORT SHIRTS', href: '/category/casual-shirts' },
];

const careTags = [
  { label: '#TRACK ORDER', href: '/track-order' },
  { label: '#7-DAY RETURNS', href: '/returns' },
  { label: '#SIZE FINDER', href: '/size-guide' },
  { label: '#THE MANIFESTO', href: '/about' },
  { label: '#HELP & FAQS', href: '/faqs' },
];

const Footer: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      setSubmitted(true);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white text-neutral-950 border-t-2 border-black font-sans selection:bg-[#f6b800] selection:text-black">
      
      {/* 1. HIGH-ENERGY RUNWAY MARQUEE RIBBON */}
      <div className="w-full bg-[#f6b800] border-b-2 border-black py-3.5 overflow-hidden select-none">
        <Marquee speed={65} autoFill className="overflow-hidden">
          <span className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black mx-6 font-mono flex items-center gap-4">
            <span>NOWEAR STUDIO</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>2.000.000+ HUMANS STYLED</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>ZERO MID FITS</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
            <span>HEAVYWEIGHT KNITS ONLY</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
          </span>
        </Marquee>
      </div>

      {/* 2. MAIN EDITORIAL CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Drop Pass & Newsletter (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-3 h-3 bg-[#e84125] inline-block" />
                <span className="text-xs font-mono font-black uppercase tracking-widest text-[#e84125]">
                  // THE SECRET VAULT
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 mb-2">
                Don&apos;t Miss The Next Drop.
              </h3>
              <p className="text-xs text-neutral-600 mb-6 font-normal leading-relaxed max-w-sm">
                Join our private archive list. Get ₹500 off your first fit, midnight drop passwords, and secret restock invites.
              </p>
            </div>

            {submitted ? (
              <div className="p-4 border-2 border-black bg-emerald-50 text-xs font-bold text-neutral-900 flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You&apos;re in the Vault! Check your inbox for your ₹500 code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-800 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black font-medium transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-800 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black font-medium transition-colors"
                  />
                </div>

                {/* Email and Subscribe Button */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-7 relative">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-800 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black font-medium pr-8 transition-colors"
                    />
                    <Mail className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="sm:col-span-5 px-4 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-widest transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 active:scale-95 shadow-xs"
                  >
                    <span>JOIN VAULT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Agreement Checkbox */}
                <label className="flex items-center gap-2 pt-1 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-3.5 h-3.5 accent-black rounded-none border border-neutral-800 cursor-pointer"
                  />
                  <span className="text-[11px] text-neutral-600 font-medium">
                    I agree to the{' '}
                    <Link href="/terms" className="underline text-neutral-900 font-bold hover:text-black">
                      terms & privacy policy
                    </Link>
                  </span>
                </label>
              </form>
            )}
          </div>

          {/* Middle Column: Categorized Hashtags (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 pt-1">
            {/* Collections */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                // SILHOUETTES
              </span>
              <div className="space-y-2.5">
                {collectionTags.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block text-xs font-black text-neutral-900 hover:text-[#e84125] hover:translate-x-1 transition-all tracking-tight uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Client Care */}
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                // SERVICES
              </span>
              <div className="space-y-2.5">
                {careTags.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block text-xs font-black text-neutral-900 hover:text-[#e84125] hover:translate-x-1 transition-all tracking-tight uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Square Social & Community Buttons (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-start lg:items-end pt-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3">
              // CONNECT SQUAD
            </span>

            <div className="grid grid-cols-4 gap-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* Spotify */}
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.216.353-.672.464-1.025.248-2.806-1.715-6.338-2.102-10.499-1.152-.403.092-.808-.16-.9-.563-.092-.403.16-.808.563-.9 4.557-1.041 8.461-.599 11.613 1.332.353.216.464.672.248 1.035zm1.47-3.266c-.272.441-.85.579-1.291.307-3.212-1.975-8.11-2.546-11.91-1.392-.497.151-1.026-.134-1.177-.63-.151-.497.134-1.026.63-1.177 4.343-1.319 9.754-.683 13.441 1.585.441.272.579.85.307 1.307zm.126-3.41c-3.85-2.287-10.205-2.498-13.876-1.383-.591.18-1.222-.154-1.401-.745-.18-.591.154-1.222.745-1.401 4.227-1.284 11.238-1.036 15.672 1.597.531.315.705 1.004.39 1.535-.315.531-1.004.705-1.53.397z"/>
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="w-10 h-10 border-2 border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>

              {/* Accent Brand Emblem Badge */}
              <div className="w-10 h-10 border-2 border-black bg-[#f6b800] text-black font-black flex items-center justify-center text-xs tracking-tighter shadow-xs">
                NW
              </div>
            </div>
          </div>

        </div>

        {/* 3. BESPOKE MASSIVE GRAPHIC TYPOGRAPHY */}
        <div className="mt-14 mb-4 select-none pointer-events-none w-full overflow-hidden border-t-2 border-black pt-6">
          <div className="flex items-baseline justify-between font-black tracking-tighter uppercase leading-none text-[15vw] sm:text-[14vw] md:text-[13vw] whitespace-nowrap">
            <span className="text-[#e84125]">NOWEAR.</span>
            <span className="text-black">STUDIO</span>
          </div>
        </div>

        {/* 4. CLEAN BOTTOM BAR */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-900">
          
          {/* Copyright */}
          <div>
            <p>
              © 2018-{new Date().getFullYear()}{' '}
              <Link href="/" className="underline hover:text-[#e84125] transition-colors">
                NOWEAR STUDIO
              </Link>
            </p>
          </div>

          {/* Slogan */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#e84125] inline-block" />
            <span className="tracking-wider uppercase font-mono">#WEARLESSNOISE ;)</span>
          </div>

          {/* Payments & Scroll to top */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono hidden sm:inline">
              ALL RIGHTS RESERVED.
            </span>

            {/* Payment Tags */}
            <div className="flex items-center gap-1 font-mono text-[10px]">
              <span className="px-2 py-0.5 border border-neutral-300 font-bold">UPI</span>
              <span className="px-2 py-0.5 border border-neutral-300 font-bold">VISA</span>
              <span className="px-2 py-0.5 border border-neutral-300 font-bold">MASTERCARD</span>
              <span className="px-2 py-0.5 border border-neutral-300 font-bold">COD</span>
            </div>

            {/* Scroll-To-Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs active:scale-90"
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
