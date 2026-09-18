export interface TrackingMilestone {
  id: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
  title: string;
  description: string;
  timestamp: string;
  location: string;
  iconType: 'placed' | 'packed' | 'flight' | 'hub' | 'out_for_delivery' | 'delivered';
}

export interface DeliveryExecutive {
  name: string;
  phone: string;
  vehicle: string;
  rating: number;
  assignedTime: string;
}

export interface TrackedParcel {
  orderId: string;
  awbNumber: string;
  customerEmail: string;
  customerPhone: string;
  status: 'PLACED' | 'PACKED' | 'IN_TRANSIT' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'RETURNED';
  statusLabel: string;
  orderDate: string;
  estimatedDelivery: string;
  etaCountdown: string;
  courierName: string;
  courierTrackingUrl: string;
  serviceType: string;
  weight: string;
  packaging: string;
  shippingAddress: {
    name: string;
    tag: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  };
  deliveryInstructions?: string;
  deliveryExecutive?: DeliveryExecutive;
  items: {
    id: string;
    name: string;
    size: string;
    color: string;
    price: number;
    image: string;
    quantity: number;
    gsm?: string;
  }[];
  milestones: TrackingMilestone[];
}

export const trackedOrdersDataset: TrackedParcel[] = [
  {
    orderId: 'NW-98421',
    awbNumber: 'DEL-992014820',
    customerEmail: 'alex.rivera@studio.design',
    customerPhone: '+91 98765 43210',
    status: 'OUT_FOR_DELIVERY',
    statusLabel: 'Out for Doorstep Delivery',
    orderDate: '16 Sep 2026, 10:14 AM',
    estimatedDelivery: 'Today by 6:00 PM',
    etaCountdown: 'Arriving in approx 2 hrs 45 mins',
    courierName: 'Delhivery Air Express',
    courierTrackingUrl: 'https://www.delhivery.com/track/package/DEL-992014820',
    serviceType: 'Vault Air Priority (Guaranteed 24-hr)',
    weight: '1.45 kg',
    packaging: 'NWear Heavyweight Sealed Box (Tamper Evident)',
    shippingAddress: {
      name: 'Alex Rivera',
      tag: 'HOME',
      street: 'Flat 402, Skyline Highs, 100ft Road, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      phone: '+91 98765 43210',
    },
    deliveryInstructions: 'Ring doorbell or leave with concierge if unattended. OTP required upon delivery.',
    deliveryExecutive: {
      name: 'Ramesh Kumar',
      phone: '+91 98765 00123',
      vehicle: 'Electric Van (KA-01-EV-4819)',
      rating: 4.9,
      assignedTime: '09:30 AM Today',
    },
    items: [
      {
        id: 'item-1',
        name: 'Heavyweight 280 GSM Acid Wash Boxy Tee',
        size: 'L',
        color: 'Washed Charcoal',
        price: 999,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
        gsm: '280 GSM Combed Cotton',
      },
      {
        id: 'item-2',
        name: 'Tactical Parachute Cargo Joggers',
        size: '32',
        color: 'Olive Moss',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
        gsm: 'Ripstop Heavy Weave',
      },
      {
        id: 'item-3',
        name: 'Waffle Knit Oversized Co-ord Top',
        size: 'L',
        color: 'Desert Sand',
        price: 1399,
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
        gsm: '320 GSM Waffle Knit',
      },
    ],
    milestones: [
      {
        id: 'm-1',
        status: 'COMPLETED',
        title: 'Order Confirmed & Payment Verified',
        description: 'Order placed via UPI. Payment authorization confirmed by NWear Vault.',
        timestamp: '16 Sep, 10:14 AM',
        location: 'NW Studios Vault, BLR',
        iconType: 'placed',
      },
      {
        id: 'm-2',
        status: 'COMPLETED',
        title: 'QC Checked & Sealed in Heavyweight Box',
        description: 'Garments passed 14-point stitch & GSM inspection. Sealed with holographic tape.',
        timestamp: '16 Sep, 02:30 PM',
        location: 'Central Fulfillment Hub, Peenya',
        iconType: 'packed',
      },
      {
        id: 'm-3',
        status: 'COMPLETED',
        title: 'Dispatched via Express Air Gateway',
        description: 'Parcel boarded Priority Flight 6E-812 to Bengaluru East Gateway.',
        timestamp: '17 Sep, 04:00 AM',
        location: 'Kempegowda Int. Cargo Airside',
        iconType: 'flight',
      },
      {
        id: 'm-4',
        status: 'COMPLETED',
        title: 'Arrived at Local Destination Hub',
        description: 'Received at local Indiranagar distribution facility. Sorted for last-mile delivery.',
        timestamp: '17 Sep, 07:45 AM',
        location: 'Indiranagar Hub, 560038',
        iconType: 'hub',
      },
      {
        id: 'm-5',
        status: 'IN_PROGRESS',
        title: 'Out for Doorstep Delivery',
        description: 'Delivery executive Ramesh Kumar is currently en route with your package.',
        timestamp: '17 Sep, 09:30 AM (In Progress)',
        location: 'Bengaluru East Delivery Zone',
        iconType: 'out_for_delivery',
      },
      {
        id: 'm-6',
        status: 'PENDING',
        title: 'Delivered with Contactless OTP',
        description: 'Package will be handed over upon sharing the 4-digit verification code.',
        timestamp: 'Expected Today by 6:00 PM',
        location: 'Destination Address',
        iconType: 'delivered',
      },
    ],
  },
  {
    orderId: 'NW-98439',
    awbNumber: 'DEL-992015991',
    customerEmail: 'alex.rivera@studio.design',
    customerPhone: '+91 98765 43210',
    status: 'IN_TRANSIT',
    statusLabel: 'In Transit via Air Gateway',
    orderDate: '17 Sep 2026, 02:15 PM',
    estimatedDelivery: 'Tomorrow, Sep 19 by 2:00 PM',
    etaCountdown: 'Expected in 22 hours',
    courierName: 'Delhivery Air Express',
    courierTrackingUrl: 'https://www.delhivery.com/track/package/DEL-992015991',
    serviceType: 'NWear Express Air',
    weight: '0.85 kg',
    packaging: 'Recyclable Kraft Matte Box',
    shippingAddress: {
      name: 'Alex Rivera',
      tag: 'HOME',
      street: 'Flat 402, Skyline Highs, 100ft Road, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      phone: '+91 98765 43210',
    },
    items: [
      {
        id: 'item-1',
        name: 'Heavyweight Boxy Tee - Vintage Black',
        size: 'L',
        color: 'Washed Charcoal',
        price: 999,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
        quantity: 1,
        gsm: '280 GSM Cotton',
      },
    ],
    milestones: [
      {
        id: 'm-1',
        status: 'COMPLETED',
        title: 'Order Confirmed & Paid',
        description: 'Payment verified via UPI.',
        timestamp: '17 Sep, 02:15 PM',
        location: 'NW Studios Vault',
        iconType: 'placed',
      },
      {
        id: 'm-2',
        status: 'COMPLETED',
        title: 'Packed & Manifested',
        description: 'Assigned to Delhivery Air Express.',
        timestamp: '17 Sep, 06:00 PM',
        location: 'Central Fulfillment Hub',
        iconType: 'packed',
      },
      {
        id: 'm-3',
        status: 'IN_PROGRESS',
        title: 'In Flight Transit',
        description: 'Cargo is en route to local airport gateway.',
        timestamp: '18 Sep, 02:00 AM (In Progress)',
        location: 'Air Cargo Gateway',
        iconType: 'flight',
      },
      {
        id: 'm-4',
        status: 'PENDING',
        title: 'Local Hub Sorting & Dispatch',
        description: 'Will arrive at Indiranagar hub.',
        timestamp: 'Expected 19 Sep, 08:00 AM',
        location: 'Indiranagar Hub',
        iconType: 'hub',
      },
    ],
  },
  {
    orderId: 'NW-97103',
    awbNumber: 'BD-8819201',
    customerEmail: 'alex.rivera@studio.design',
    customerPhone: '+91 98765 43210',
    status: 'DELIVERED',
    statusLabel: 'Delivered with Signature',
    orderDate: '10 Sep 2026, 11:00 AM',
    estimatedDelivery: 'Delivered on 12 Sep 2026',
    etaCountdown: 'Delivered Successfully',
    courierName: 'BlueDart Air Express',
    courierTrackingUrl: 'https://www.bluedart.com/track/BD-8819201',
    serviceType: 'BlueDart Domestic Air',
    weight: '1.20 kg',
    packaging: 'NWear Vault Signature Box',
    shippingAddress: {
      name: 'Alex Rivera',
      tag: 'HOME',
      street: 'Flat 402, Skyline Highs, 100ft Road, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      phone: '+91 98765 43210',
    },
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
    milestones: [
      {
        id: 'm-1',
        status: 'COMPLETED',
        title: 'Order Confirmed',
        description: 'Order placed & payment verified.',
        timestamp: '10 Sep, 11:00 AM',
        location: 'NW Studios Vault',
        iconType: 'placed',
      },
      {
        id: 'm-2',
        status: 'COMPLETED',
        title: 'Packed & Dispatched',
        description: 'Handed over to BlueDart Air Express.',
        timestamp: '10 Sep, 05:00 PM',
        location: 'Bengaluru Central',
        iconType: 'packed',
      },
      {
        id: 'm-3',
        status: 'COMPLETED',
        title: 'Delivered with Signature',
        description: 'Signed and accepted by Alex Rivera. 100% Cotton Authenticity Verified.',
        timestamp: '12 Sep, 01:15 PM',
        location: 'Doorstep, Indiranagar',
        iconType: 'delivered',
      },
    ],
  },
];
