export interface CheckoutItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  gsm?: string;
}

export interface ShippingAddress {
  id: string;
  tag: 'HOME' | 'WORK' | 'STUDIO' | 'OTHER';
  fullName: string;
  phone: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface DeliveryOption {
  id: string;
  title: string;
  description: string;
  eta: string;
  price: number;
  badge?: string;
  iconType: 'standard' | 'express' | 'same-day';
}

export interface PaymentOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface PromoCoupon {
  code: string;
  discountType: 'fixed' | 'percentage';
  discountValue: number;
  minSpend: number;
  description: string;
}

export const initialCheckoutItems: CheckoutItem[] = [
  {
    id: 'cart-1',
    name: 'Heavyweight Boxy Tee - Vintage Black',
    size: 'L',
    color: 'Washed Charcoal',
    price: 999,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    quantity: 1,
    gsm: '280 GSM Cotton',
  },
  {
    id: 'cart-2',
    name: 'Tactical Parachute Cargo Joggers',
    size: '32',
    color: 'Olive Moss',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80',
    quantity: 1,
    gsm: 'Ripstop Weave',
  },
  {
    id: 'cart-3',
    name: 'Waffle Knit Oversized Co-ord Top',
    size: 'L',
    color: 'Desert Sand',
    price: 1399,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
    quantity: 1,
    gsm: '320 GSM Waffle',
  },
];

export const savedAddresses: ShippingAddress[] = [
  {
    id: 'addr-1',
    tag: 'HOME',
    fullName: 'Alex Rivera',
    phone: '+91 98765 43210',
    street: 'Flat 402, Skyline Highs, 100ft Road',
    apartment: 'Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    isDefault: true,
  },
  {
    id: 'addr-2',
    tag: 'STUDIO',
    fullName: 'Alex Rivera (NW Studios)',
    phone: '+91 98765 43210',
    street: '3rd Floor, Design Loft, 4th Block',
    apartment: 'Koramangala',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560034',
    isDefault: false,
  },
];

export const deliveryOptions: DeliveryOption[] = [
  {
    id: 'standard',
    title: 'Standard Surface Dispatch',
    description: 'Eco-friendly ground transit via Delhivery Express',
    eta: '3 - 5 Business Days (Estimated Sep 22 - Sep 24)',
    price: 0,
    badge: 'FREE',
    iconType: 'standard',
  },
  {
    id: 'express',
    title: 'NWear Vault Air Express',
    description: 'Priority flight dispatch + Tamper-evident secure box',
    eta: '1 - 2 Business Days (Estimated Sep 20)',
    price: 99,
    badge: 'RECOMMENDED',
    iconType: 'express',
  },
  {
    id: 'sameday',
    title: 'Same-Day Ultra Metro',
    description: 'Dedicated courier delivery directly to your doorstep by 9 PM',
    eta: 'Today by 9:00 PM (Orders before 4 PM)',
    price: 199,
    badge: 'METRO ONLY',
    iconType: 'same-day',
  },
];

export const availableCoupons: PromoCoupon[] = [
  {
    code: 'FIRST500',
    discountType: 'fixed',
    discountValue: 500,
    minSpend: 1999,
    description: '₹500 flat discount on your first order',
  },
  {
    code: 'VAULT500',
    discountType: 'fixed',
    discountValue: 500,
    minSpend: 2499,
    description: 'Exclusive NWear Vault VIP member discount',
  },
  {
    code: 'DROP20',
    discountType: 'percentage',
    discountValue: 20,
    minSpend: 3499,
    description: '20% off on drop apparel (max ₹1,000)',
  },
];
