'use client';
import Marquee from 'react-fast-marquee';
import { Sparkles, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full bg-[#242F66] py-2 px-4 overflow-hidden">
      <Marquee speed={40} pauseOnHover className="text-white text-xs font-semibold tracking-wider">
        <span className="inline-flex items-center gap-2 mx-8">
          <Truck className="w-3.5 h-3.5 text-blue-200" />
          FREE EXPRESS SHIPPING ON ALL ORDERS OVER ₹999
        </span>
        <span className="inline-flex items-center gap-2 mx-8">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          OVER 2 MILLION HAPPY CUSTOMERS
        </span>
        <span className="inline-flex items-center gap-2 mx-8">
          <RefreshCw className="w-3.5 h-3.5 text-blue-200" />
          7-DAY HASSLE-FREE RETURNS & EXCHANGES
        </span>
        <span className="inline-flex items-center gap-2 mx-8">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
          COD AVAILABLE ACROSS ALL PINCODES
        </span>
      </Marquee>
    </div>
  );
};

export default Header;

