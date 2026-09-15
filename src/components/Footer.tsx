'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Truck,
  RotateCcw,
  CreditCard,
  ShieldCheck,
  Mail,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#242F66] text-white">
      {/* 1. Value Features Bar */}
      <div className="border-b border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Truck className="w-5 h-5 text-blue-200 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold">Free Shipping</h4>
                <p className="text-[11px] text-blue-200/70">On all prepaid orders over ₹999</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <RotateCcw className="w-5 h-5 text-blue-200 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold">7-Day Easy Returns</h4>
                <p className="text-[11px] text-blue-200/70">Doorstep pickup & quick refund</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <CreditCard className="w-5 h-5 text-blue-200 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold">Cash On Delivery</h4>
                <p className="text-[11px] text-blue-200/70">Pay easily at your doorstep</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <ShieldCheck className="w-5 h-5 text-blue-200 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold">100% Genuine Apparel</h4>
                <p className="text-[11px] text-blue-200/70">Premium combed cotton knits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Need Help? */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Need Help?
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/75">
              <li>
                <Link href="/track-order" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Return & Exchange
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  FAQs & Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Shop Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/75">
              <li>
                <Link href="/category/oversized-tshirts" className="hover:text-white transition-colors">
                  Oversized T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/category/coord-sets" className="hover:text-white transition-colors">
                  Co-ord Sets
                </Link>
              </li>
              <li>
                <Link href="/category/joggers" className="hover:text-white transition-colors">
                  Transit Joggers
                </Link>
              </li>
              <li>
                <Link href="/category/hoodies" className="hover:text-white transition-colors">
                  Hoodies & Sweatshirts
                </Link>
              </li>
              <li>
                <Link href="/category/casual-shirts" className="hover:text-white transition-colors">
                  Casual & Linen Shirts
                </Link>
              </li>
              <li>
                <Link href="/category/shorts" className="hover:text-white transition-colors">
                  Chino & Cargo Shorts
                </Link>
              </li>
              <li>
                <Link href="/category/polos" className="hover:text-white transition-colors">
                  Aero Classic Polos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: About Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              About NoWear
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/75">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 & 5: Stay Updated & Contact (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Stay In The Loop
              </h4>
              <p className="text-xs text-blue-100/75 mb-4 leading-relaxed font-light">
                Sign up for exclusive drops, early sale access, and a ₹500 discount on your first order.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-lg bg-white/10 border border-white/20 text-xs text-emerald-300 font-medium">
                  Thank you for subscribing! Check your email for your welcome discount code.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative grow">
                    <Mail className="w-4 h-4 text-blue-300 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white placeholder-blue-200/60 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-white text-[#242F66] text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact & Socials */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-blue-100/80">
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <span>•</span>
                <a
                  href="tel:+918000000000"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-300" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#242F66] flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#242F66] flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#242F66] flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#242F66] flex items-center justify-center transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal & Payment Row */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <p>© {new Date().getFullYear()} NoWear Apparel. All rights reserved.</p>

          <div className="flex items-center gap-3 text-[11px] font-medium text-blue-100/80">
            <span>UPI</span>
            <span>•</span>
            <span>Visa</span>
            <span>•</span>
            <span>Mastercard</span>
            <span>•</span>
            <span>RuPay</span>
            <span>•</span>
            <span>NetBanking</span>
            <span>•</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
