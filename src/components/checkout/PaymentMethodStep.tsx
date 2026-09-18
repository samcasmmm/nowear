'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  QrCode,
  Smartphone,
  Building,
  Banknote,
  ShieldCheck,
  Lock,
  Check,
  Sparkles,
  ArrowLeft,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { DeliveryOption, ShippingAddress } from '@/data/checkoutData';

interface PaymentMethodStepProps {
  grandTotal: number;
  vaultCoinsApplied: boolean;
  onToggleVaultCoins: (apply: boolean) => void;
  selectedAddress: ShippingAddress;
  selectedDelivery: DeliveryOption;
  onBack: () => void;
  onPlaceOrder: (paymentDetails: { method: string; identifier?: string }) => void;
  isProcessing: boolean;
}

export const PaymentMethodStep: React.FC<PaymentMethodStepProps> = ({
  grandTotal,
  vaultCoinsApplied,
  onToggleVaultCoins,
  selectedAddress,
  selectedDelivery,
  onBack,
  onPlaceOrder,
  isProcessing,
}) => {
  const [activeMethod, setActiveMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod' | 'emi'>('upi');

  // UPI State
  const [upiOption, setUpiOption] = useState<'gpay' | 'phonepe' | 'paytm' | 'custom' | 'qr'>('gpay');
  const [customUpiId, setCustomUpiId] = useState('');
  const [upiVerified, setUpiVerified] = useState(false);

  // Card State
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('Alex Rivera');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(true);

  // Netbanking State
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');

  // Format Card Number
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    val = val.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(val);
  };

  // Format Expiry
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) {
      val = val.substring(0, 2) + '/' + val.substring(2, 4);
    }
    setExpiry(val);
  };

  const getCardBrand = () => {
    const raw = cardNumber.replace(/\s/g, '');
    if (raw.startsWith('4')) return 'VISA';
    if (raw.startsWith('5')) return 'MASTERCARD';
    if (raw.startsWith('6')) return 'RUPAY';
    if (raw.startsWith('3')) return 'AMEX';
    return null;
  };

  const handleVerifyUpi = () => {
    if (customUpiId.includes('@')) {
      setUpiVerified(true);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    let methodLabel = 'UPI';
    let identifier = 'Google Pay';

    if (activeMethod === 'upi') {
      if (upiOption === 'gpay') identifier = 'Google Pay (Instant)';
      else if (upiOption === 'phonepe') identifier = 'PhonePe (Instant)';
      else if (upiOption === 'paytm') identifier = 'Paytm UPI';
      else if (upiOption === 'qr') identifier = 'Dynamic UPI QR Code';
      else identifier = customUpiId || 'alex@okhdfcbank';
      methodLabel = 'UPI';
    } else if (activeMethod === 'card') {
      methodLabel = 'Card';
      identifier = `${getCardBrand() || 'Card'} Ending in ${cardNumber.slice(-4) || '8820'}`;
    } else if (activeMethod === 'netbanking') {
      methodLabel = 'NetBanking';
      identifier = selectedBank;
    } else if (activeMethod === 'cod') {
      methodLabel = 'Cash on Delivery';
      identifier = 'Pay on Doorstep Receipt';
    } else if (activeMethod === 'emi') {
      methodLabel = 'Pay Later (Simpl 3-Split)';
      identifier = '3 x ₹' + Math.round(grandTotal / 3).toLocaleString('en-IN');
    }

    onPlaceOrder({ method: methodLabel, identifier });
  };

  const popularBanks = [
    { name: 'HDFC Bank', code: 'HDFC' },
    { name: 'ICICI Bank', code: 'ICICI' },
    { name: 'State Bank of India', code: 'SBI' },
    { name: 'Axis Bank', code: 'AXIS' },
    { name: 'Kotak Mahindra', code: 'KOTAK' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      {/* Order Recap Mini Bar */}
      <div className="p-4 rounded-2xl border border-neutral-200 bg-neutral-50 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-neutral-900">
              Shipment Speed: {selectedDelivery.title}
            </span>
            <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold rounded">
              {selectedDelivery.price === 0 ? 'FREE' : `+₹${selectedDelivery.price}`}
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-0.5">
            Deliver to: {selectedAddress.fullName} ({selectedAddress.city})
          </p>
        </div>

        <button
          onClick={onBack}
          className="text-xs font-bold text-neutral-900 underline hover:text-amber-600 transition-colors cursor-pointer shrink-0"
        >
          Change
        </button>
      </div>

      {/* Main Payment Container */}
      <div className="p-5 rounded-2xl border border-neutral-200 bg-white shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-mono font-bold flex items-center justify-center">
              3
            </span>
            <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-neutral-900">
              Select Payment Method
            </h3>
          </div>
          <span className="text-xs font-mono font-black text-neutral-900 bg-neutral-100 px-2.5 py-1 rounded-lg">
            Payable: ₹{grandTotal.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Payment Methods Tabs Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Method Switcher */}
          <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            {[
              { id: 'upi', label: 'UPI / Instant', icon: Smartphone, badge: 'FAST' },
              { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, badge: 'OFFERS' },
              { id: 'netbanking', label: 'Net Banking', icon: Building },
              { id: 'emi', label: 'Pay Later / EMI', icon: Clock, badge: '0% EMI' },
              { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
            ].map((m) => {
              const Icon = m.icon;
              const isSelected = activeMethod === m.id;

              return (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setActiveMethod(m.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#f6b800]' : 'text-neutral-500'}`} />
                    <span className="text-xs font-bold whitespace-nowrap">{m.label}</span>
                  </div>
                  {m.badge && (
                    <span
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-white/20 text-[#f6b800]'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {m.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Method Interactive Panel */}
          <div className="md:col-span-8 p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 min-h-[300px] flex flex-col justify-between">
            {/* 1. UPI Tab */}
            {activeMethod === 'upi' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Express UPI Instant Pay
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    Zero Surcharge
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'gpay', name: 'Google Pay', logo: 'GPay' },
                    { id: 'phonepe', name: 'PhonePe', logo: 'PhonePe' },
                    { id: 'paytm', name: 'Paytm UPI', logo: 'Paytm' },
                    { id: 'qr', name: 'Scan QR Code', logo: 'QR Code' },
                    { id: 'custom', name: 'Other UPI ID', logo: 'ID' },
                  ].map((app) => (
                    <button
                      type="button"
                      key={app.id}
                      onClick={() => setUpiOption(app.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        upiOption === app.id
                          ? 'bg-white border-neutral-950 shadow-sm ring-2 ring-neutral-950/10'
                          : 'bg-white/60 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold font-mono text-neutral-900">
                        {app.logo}
                      </div>
                      <div className="text-[10px] text-neutral-500 font-medium mt-0.5">
                        {app.name}
                      </div>
                    </button>
                  ))}
                </div>

                {upiOption === 'qr' && (
                  <div className="p-4 bg-white rounded-xl border border-neutral-200 text-center space-y-2">
                    <div className="w-32 h-32 mx-auto bg-neutral-100 rounded-xl border border-dashed border-neutral-400 flex flex-col items-center justify-center p-2">
                      <QrCode className="w-20 h-20 text-neutral-900" />
                      <span className="text-[9px] font-mono text-neutral-500">Scan via any UPI App</span>
                    </div>
                    <p className="text-xs text-neutral-600 font-medium">
                      Scan and pay <strong className="font-mono text-neutral-900">₹{grandTotal.toLocaleString('en-IN')}</strong> from GPay, PhonePe, Paytm, or CRED.
                    </p>
                  </div>
                )}

                {upiOption === 'custom' && (
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase text-neutral-600">
                      Enter UPI ID / VPA
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. yourname@okhdfcbank"
                        value={customUpiId}
                        onChange={(e) => {
                          setCustomUpiId(e.target.value);
                          setUpiVerified(false);
                        }}
                        className="flex-1 px-3 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-mono outline-none focus:border-black"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyUpi}
                        className="px-3 py-2 bg-neutral-900 text-white rounded-lg text-xs font-bold uppercase cursor-pointer"
                      >
                        {upiVerified ? 'Verified ✓' : 'Verify'}
                      </button>
                    </div>
                    {upiVerified && (
                      <span className="text-[11px] text-emerald-600 font-bold block">
                        ✓ UPI ID Verified for Alex Rivera
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* 2. Card Tab */}
            {activeMethod === 'card' && (
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Credit / Debit Card
                  </span>
                  <div className="flex items-center gap-1.5">
                    {['VISA', 'MASTERCARD', 'RUPAY', 'AMEX'].map((brand) => (
                      <span
                        key={brand}
                        className="px-1.5 py-0.5 bg-neutral-200/80 rounded text-[9px] font-mono font-bold text-neutral-700"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="4000 1234 5678 9010"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full pl-9 pr-14 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-mono font-medium text-neutral-900 outline-none focus:border-black"
                    />
                    {getCardBrand() && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-black text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                        {getCardBrand()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={handleExpiryChange}
                      className="w-full px-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:border-black text-center"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-bold uppercase text-neutral-600">
                        CVV / CVC
                      </label>
                      <span className="text-[10px] text-neutral-400">3 or 4 digits</span>
                    </div>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="•••"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-mono outline-none focus:border-black text-center"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-medium text-neutral-900 outline-none focus:border-black"
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-neutral-600 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className="rounded border-neutral-300 text-black focus:ring-black"
                  />
                  <span>Secure this card according to RBI guidelines for 1-click checkout</span>
                </label>
              </div>
            )}

            {/* 3. NetBanking */}
            {activeMethod === 'netbanking' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                  Select Your Bank
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {popularBanks.map((b) => (
                    <button
                      type="button"
                      key={b.code}
                      onClick={() => setSelectedBank(b.name)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedBank === b.name
                          ? 'bg-white border-neutral-950 shadow-sm ring-2 ring-neutral-950/10'
                          : 'bg-white/60 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold text-neutral-900">{b.name}</div>
                      <div className="text-[10px] font-mono text-neutral-400">{b.code}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="block text-[11px] font-bold uppercase text-neutral-600 mb-1">
                    Or Choose Another Bank
                  </label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs font-medium outline-none focus:border-black"
                  >
                    <option value="HDFC Bank">HDFC Bank</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="State Bank of India">State Bank of India</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                    <option value="IndusInd Bank">IndusInd Bank</option>
                    <option value="Federal Bank">Federal Bank</option>
                    <option value="Bank of Baroda">Bank of Baroda</option>
                    <option value="Punjab National Bank">Punjab National Bank</option>
                  </select>
                </div>
              </div>
            )}

            {/* 4. Pay Later / EMI */}
            {activeMethod === 'emi' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Split Into 3 Interest-Free Payments
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                    0% Interest
                  </span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-neutral-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>Pay Today (1st Split):</span>
                    <span className="font-mono text-neutral-900">
                      ₹{Math.round(grandTotal / 3).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>In 30 Days (2nd Split):</span>
                    <span className="font-mono">
                      ₹{Math.round(grandTotal / 3).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>In 60 Days (3rd Split):</span>
                    <span className="font-mono">
                      ₹{Math.round(grandTotal / 3).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-500">
                  Powered by <strong className="text-neutral-900">Simpl & ZestPay</strong>. Instant 30-second approval with OTP without paperwork.
                </p>
              </div>
            )}

            {/* 5. Cash on Delivery */}
            {activeMethod === 'cod' && (
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                  Cash on Delivery
                </span>
                <div className="p-4 bg-white rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                    <Banknote className="w-4 h-4 text-emerald-600" />
                    <span>Pay in Cash / UPI to Courier on Delivery</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Please keep the exact amount of <strong className="font-mono text-neutral-900">₹{grandTotal.toLocaleString('en-IN')}</strong> or digital UPI ready when our courier partner arrives.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Doorstep Open-Box Inspection available</span>
                </div>
              </div>
            )}

            {/* Security note */}
            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>PCI-DSS Level 1 Certified</span>
              </span>
              <span className="font-mono text-[10px]">NWear Vault Encryption</span>
            </div>
          </div>
        </div>

        {/* Buttons & Trigger */}
        <div className="flex items-center gap-3 pt-3">
          <button
            type="button"
            onClick={onBack}
            disabled={isProcessing}
            className="px-5 py-4 border border-neutral-300 hover:border-neutral-900 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={handleSubmitOrder}
            disabled={isProcessing}
            className="flex-1 py-4 bg-black hover:bg-neutral-900 text-[#f6b800] font-mono text-xs font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer active:scale-99 disabled:opacity-75"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2 text-white">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>PROCESSING PAYMENT ENCRYPTION...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#f6b800]" />
                <span>PAY ₹{grandTotal.toLocaleString('en-IN')} & PLACE ORDER</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodStep;
