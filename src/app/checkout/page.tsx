'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckoutHeader,
  ContactAndAddressStep,
  DeliveryMethodStep,
  PaymentMethodStep,
  OrderSummaryPanel,
  OrderSuccessModal,
} from '@/components/checkout';
import {
  CheckoutItem,
  DeliveryOption,
  PromoCoupon,
  ShippingAddress,
  deliveryOptions,
  initialCheckoutItems,
  savedAddresses,
} from '@/data/checkoutData';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [items, setItems] = useState<CheckoutItem[]>(initialCheckoutItems);
  const [selectedAddress, setSelectedAddress] = useState<ShippingAddress>(savedAddresses[0]);
  const [contactInfo, setContactInfo] = useState({
    email: 'alex.rivera@studio.design',
    phone: '+91 98765 43210',
  });
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryOption>(deliveryOptions[1]); // Express by default
  const [appliedCoupon, setAppliedCoupon] = useState<PromoCoupon | null>({
    code: 'FIRST500',
    discountType: 'fixed',
    discountValue: 500,
    minSpend: 1999,
    description: '₹500 flat discount on your first order',
  });
  const [vaultCoinsApplied, setVaultCoinsApplied] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [confirmedPayment, setConfirmedPayment] = useState<{ method: string; identifier?: string }>({
    method: 'UPI',
    identifier: 'Google Pay',
  });
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('NW-98439');

  // Quantity Adjuster
  const handleUpdateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CheckoutItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minSpend) {
    if (appliedCoupon.discountType === 'fixed') {
      discountAmount = appliedCoupon.discountValue;
    } else {
      discountAmount = Math.min(1000, Math.round((subtotal * appliedCoupon.discountValue) / 100));
    }
  }

  const coinsDiscount = vaultCoinsApplied ? 500 : 0;
  const shippingFee = selectedDelivery.price;
  const grandTotal = Math.max(0, subtotal - discountAmount - coinsDiscount + shippingFee);

  // Address step done -> move to step 2
  const handleAddressStepComplete = (
    address: ShippingAddress,
    contact: { email: string; phone: string }
  ) => {
    setSelectedAddress(address);
    setContactInfo(contact);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delivery step done -> move to step 3
  const handleDeliveryStepProceed = () => {
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Final Order Place
  const handlePlaceOrder = (paymentDetails: { method: string; identifier?: string }) => {
    setIsProcessing(true);
    setConfirmedPayment(paymentDetails);

    // Simulate secure transaction handshake
    setTimeout(() => {
      setIsProcessing(false);
      setConfirmedOrderId(`NW-${Math.floor(10000 + Math.random() * 90000)}`);
      setOrderComplete(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-neutral-100 text-neutral-900 antialiased">
        <CheckoutHeader currentStep={4} />
        <OrderSuccessModal
          orderId={confirmedOrderId}
          items={items}
          address={selectedAddress}
          delivery={selectedDelivery}
          paymentMethod={confirmedPayment}
          grandTotal={grandTotal}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 antialiased pb-16">
      {/* Distraction-Free Header */}
      <CheckoutHeader currentStep={currentStep} />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-neutral-200">
            <h2 className="text-base font-bold text-neutral-900">Your bag is empty</h2>
            <p className="text-xs text-neutral-500 mt-1">
              Add items from the store before proceeding to checkout.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block px-6 py-3 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              Shop Heavyweight Drops
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Checkout Steps */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              {currentStep === 1 && (
                <ContactAndAddressStep
                  onComplete={handleAddressStepComplete}
                  selectedAddress={selectedAddress}
                  initialContact={contactInfo}
                />
              )}

              {currentStep === 2 && (
                <DeliveryMethodStep
                  selectedAddress={selectedAddress}
                  selectedOption={selectedDelivery}
                  onSelectOption={setSelectedDelivery}
                  onBack={() => setCurrentStep(1)}
                  onProceed={handleDeliveryStepProceed}
                />
              )}

              {currentStep === 3 && (
                <PaymentMethodStep
                  grandTotal={grandTotal}
                  vaultCoinsApplied={vaultCoinsApplied}
                  onToggleVaultCoins={setVaultCoinsApplied}
                  selectedAddress={selectedAddress}
                  selectedDelivery={selectedDelivery}
                  onBack={() => setCurrentStep(2)}
                  onPlaceOrder={handlePlaceOrder}
                  isProcessing={isProcessing}
                />
              )}
            </div>

            {/* Right Column: Sticky Order Summary & Coupon Panel */}
            <div className="lg:col-span-5 xl:col-span-4">
              <OrderSummaryPanel
                items={items}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                appliedCoupon={appliedCoupon}
                onApplyCoupon={setAppliedCoupon}
                vaultCoinsApplied={vaultCoinsApplied}
                onToggleVaultCoins={setVaultCoinsApplied}
                shippingFee={shippingFee}
                subtotal={subtotal}
                discountAmount={discountAmount}
                coinsDiscount={coinsDiscount}
                grandTotal={grandTotal}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
