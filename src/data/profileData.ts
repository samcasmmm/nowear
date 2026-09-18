export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  memberTier: string;
  tierLevel: number;
  memberSince: string;
  memberId: string;
  nwearCoins: number;
  lifetimeSavings: number;
  referralCode: string;
  nextTierThreshold: number;
  currentSpent: number;
}

export interface FitProfile {
  height: string;
  weight: string;
  chest: string;
  waist: string;
  preferredFit: string;
  shoeSize: string;
  bodyType: string;
}

export interface OrderItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
}

export interface TrackingStep {
  step: string;
  date: string;
  completed: boolean;
  current?: boolean;
  location?: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'in-transit' | 'delivered' | 'returned' | 'cancelled';
  statusText: string;
  trackingId: string;
  courier: string;
  expectedDelivery: string;
  total: number;
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
  trackingSteps: TrackingStep[];
}

export interface VaultVoucher {
  id: string;
  code: string;
  discount: string;
  title: string;
  description: string;
  expiry: string;
  minSpend: number;
  type: 'discount' | 'shipping' | 'access' | 'birthday';
}

export interface CoinTransaction {
  id: string;
  date: string;
  description: string;
  type: 'credit' | 'debit';
  amount: number;
  orderRef?: string;
}

export const mockUserProfile: UserProfile = {
  id: 'usr_88294',
  name: 'Alex Rivera',
  email: 'alex.rivera@studio.design',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  memberTier: 'VAULT ICON',
  tierLevel: 3,
  memberSince: 'October 2024',
  memberId: 'NW-88294',
  nwearCoins: 1450,
  lifetimeSavings: 4200,
  referralCode: 'NW-ALEX-VIP',
  nextTierThreshold: 50000,
  currentSpent: 38500,
};

export const mockFitProfile: FitProfile = {
  height: `5' 11" (180 cm)`,
  weight: '74 kg',
  chest: '40 in (101 cm)',
  waist: '32 in (81 cm)',
  preferredFit: 'Heavyweight Boxy / Oversized',
  shoeSize: 'UK 9 / EU 43',
  bodyType: 'Athletic Street Fit',
};

export const mockOrders: Order[] = [
  {
    id: 'NW-98421',
    date: '17 Sep 2026',
    status: 'in-transit',
    statusText: 'Out for Delivery',
    trackingId: 'DEL-992014820',
    courier: 'Delhivery Express Air',
    expectedDelivery: 'Today by 6:00 PM',
    total: 4298,
    shippingAddress: 'Flat 402, Skyline Highs, Indiranagar, Bengaluru, 560038',
    paymentMethod: 'UPI (Google Pay)',
    items: [
      {
        id: 'item-1',
        name: 'Heavyweight 280 GSM Acid Wash Boxy Tee',
        size: 'L',
        color: 'Washed Charcoal',
        price: 999,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
      },
      {
        id: 'item-2',
        name: 'Tactical Parachute Cargo Joggers',
        size: '32',
        color: 'Olive Moss',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
      },
      {
        id: 'item-3',
        name: 'Waffle Knit Oversized Co-ord Top',
        size: 'L',
        color: 'Desert Sand',
        price: 1399,
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
      },
    ],
    trackingSteps: [
      { step: 'Order Confirmed & Paid', date: '16 Sep, 10:14 AM', completed: true, location: 'NW Studios Vault' },
      { step: 'Quality Checked & Packed in Sealed Box', date: '16 Sep, 02:30 PM', completed: true, location: 'Bengaluru Hub' },
      { step: 'Dispatched via Express Flight', date: '17 Sep, 04:00 AM', completed: true, location: 'BLR Air Gateway' },
      { step: 'Out for Doorstep Delivery', date: '17 Sep, 09:30 AM', completed: true, current: true, location: 'Indiranagar Hub' },
    ],
  },
  {
    id: 'NW-97103',
    date: '10 Sep 2026',
    status: 'delivered',
    statusText: 'Delivered',
    trackingId: 'BD-8819201',
    courier: 'BlueDart Air Express',
    expectedDelivery: 'Delivered on 12 Sep 2026',
    total: 2499,
    shippingAddress: 'Flat 402, Skyline Highs, Indiranagar, Bengaluru, 560038',
    paymentMethod: 'Credit Card (•••• 8820)',
    items: [
      {
        id: 'item-4',
        name: 'Seamless Forest Waffle Co-ord Set',
        size: 'L',
        color: 'Deep Forest Green',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
      },
    ],
    trackingSteps: [
      { step: 'Order Confirmed', date: '10 Sep, 11:00 AM', completed: true },
      { step: 'Packed & Dispatched', date: '10 Sep, 05:00 PM', completed: true },
      { step: 'Delivered with Signature', date: '12 Sep, 01:15 PM', completed: true },
    ],
  },
  {
    id: 'NW-94119',
    date: '24 Aug 2026',
    status: 'returned',
    statusText: 'Refund Completed (₹1,899)',
    trackingId: 'RET-492019',
    courier: 'Delhivery Reverse Pickup',
    expectedDelivery: 'Refund Credited on 27 Aug',
    total: 1899,
    shippingAddress: 'Flat 402, Skyline Highs, Indiranagar, Bengaluru, 560038',
    paymentMethod: 'UPI (PhonePe)',
    items: [
      {
        id: 'item-5',
        name: 'Boxy Drop-Shoulder Oversized Tee Pack',
        size: 'M',
        color: 'Vintage Bone',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
      },
    ],
    trackingSteps: [
      { step: 'Return Initiated', date: '25 Aug', completed: true },
      { step: 'Item Picked Up', date: '26 Aug', completed: true },
      { step: 'Inspection Passed & ₹1,899 Refunded to Source', date: '27 Aug', completed: true },
    ],
  },
];

export const mockVaultVouchers: VaultVoucher[] = [
  {
    id: 'vouch-1',
    code: 'VAULT500',
    discount: '₹500 OFF',
    title: 'VIP Vault Tier Exclusive',
    description: 'Flat ₹500 off on any cart value above ₹2,499',
    expiry: 'Valid till 30 Oct 2026',
    minSpend: 2499,
    type: 'discount',
  },
  {
    id: 'vouch-2',
    code: 'DROPACCESS',
    discount: 'EARLY PASS',
    title: 'Drop 07 Midnight Knits Pass',
    description: '2-hour priority checkout pass before public release',
    expiry: 'Opens 25 Sep 2026',
    minSpend: 0,
    type: 'access',
  },
  {
    id: 'vouch-3',
    code: 'FREESHIP',
    discount: 'FREE AIR SHIP',
    title: 'Zero-Fee Express Delivery',
    description: 'Unlimited free 24-hr air express courier shipping pass',
    expiry: 'Active Tier Perk',
    minSpend: 0,
    type: 'shipping',
  },
  {
    id: 'vouch-4',
    code: 'BIRTHDAY20',
    discount: '20% OFF',
    title: 'NWear Birthday Special Perk',
    description: 'Get 20% discount on entire cart during your birthday month',
    expiry: 'Unlocks in Nov 2026',
    minSpend: 1500,
    type: 'birthday',
  },
];

export const mockCoinTransactions: CoinTransaction[] = [
  {
    id: 'tx-1',
    date: '17 Sep 2026',
    description: 'Cashback reward for Order #NW-98421',
    type: 'credit',
    amount: 250,
    orderRef: 'NW-98421',
  },
  {
    id: 'tx-2',
    date: '12 Sep 2026',
    description: 'Reviewed Seamless Forest Co-ord Set with photo',
    type: 'credit',
    amount: 100,
  },
  {
    id: 'tx-3',
    date: '10 Sep 2026',
    description: 'Redeemed on Order #NW-97103 checkout',
    type: 'debit',
    amount: 500,
    orderRef: 'NW-97103',
  },
  {
    id: 'tx-4',
    date: '01 Sep 2026',
    description: 'Vault VIP Monthly Loyalty Tier Perk',
    type: 'credit',
    amount: 500,
  },
];

export const mockWishlistItems = [
  {
    id: 'w-1',
    name: 'Heavyweight Ribbed Zip Cardigan',
    category: 'Knits & Sweaters',
    price: 2699,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'Only 2 Left in Size L',
    rating: 4.9,
    badge: 'LIMITED DROP',
  },
  {
    id: 'w-2',
    name: 'Washed Charcoal Wide Skate Denim',
    category: 'Bottoms',
    price: 2899,
    originalPrice: 3599,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'In Stock',
    rating: 4.8,
    badge: 'BESTSELLER',
  },
  {
    id: 'w-3',
    name: 'Tactical Matte Crossbody Bag',
    category: 'Accessories',
    price: 1199,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    stockStatus: 'Back in Stock',
    rating: 4.9,
    badge: 'HOT',
  },
];
