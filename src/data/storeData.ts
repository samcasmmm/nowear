export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface MoodCategory {
  id: string;
  title: string;
  image: string;
  tag: string;
  href: string;
}

export interface FullLook {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  note?: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  rating?: number;
  reviewsCount?: number;
  price: number;
  originalPrice: number;
  discount: number;
  tag?: string;
  pack?: string;
  category: string;
  note?: string;
  href: string;
}

export interface ExploreCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  verified: boolean;
  date?: string;
}

export const moodCategories: MoodCategory[] = [
  {
    id: 'hoodies',
    title: 'HEAVYWEIGHT HOODIES',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=85',
    tag: '380 GSM Warmth',
    href: '/category/hoodies',
  },
  {
    id: 'sweatshirts',
    title: 'ACID WASH DROPS',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=85',
    tag: 'Vintage Wash',
    href: '/category/sweatshirts',
  },
  {
    id: 'basics',
    title: '280 GSM BOXY BASICS',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
    tag: 'Combed Heavy Cotton',
    href: '/category/basics',
  },
  {
    id: 'joggers',
    title: 'TACTICAL CARGO JOGGERS',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85',
    tag: 'All-Day Transit',
    href: '/category/joggers',
  },
];

export const shopCategories: Category[] = [
  {
    id: 'cargo',
    name: 'Parachute Cargos',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=85',
    href: '/category/cargos',
  },
  {
    id: 'polos',
    name: 'Textured Knit Polos',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85',
    href: '/category/polos',
  },
  {
    id: 'casual-shirts',
    name: 'Resort Linen Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85',
    href: '/category/casual-shirts',
  },
  {
    id: 'coord-sets',
    name: 'Waffle Co-ord Sets',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85',
    href: '/category/coord-sets',
  },
  {
    id: 'oversized-tee',
    name: '280 GSM Boxy Tees',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85',
    href: '/category/oversized-tshirts',
  },
  {
    id: 'tshirts',
    name: 'Graphic Drop Tees',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=85',
    href: '/category/t-shirts',
  },
  {
    id: 'joggers-cat',
    name: 'Tailored Joggers',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=85',
    href: '/category/joggers',
  },
  {
    id: 'jeans',
    name: 'Wide-Leg Washed Denim',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=85',
    href: '/category/jeans',
  },
  {
    id: 'shorts',
    name: 'Transit Utility Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=85',
    href: '/category/shorts',
  },
  {
    id: 'oversized-shirts',
    name: 'Boxy Heavyweight Overshirts',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=85',
    href: '/category/oversized-shirts',
  },
  {
    id: 'printed-tees',
    name: 'Acid Washed Typography',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=85',
    href: '/category/printed-tees',
  },
  {
    id: 'linen-pants',
    name: 'Slub Linen Trousers',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
    href: '/category/linen-pants',
  },
];

export const fullLooks: FullLook[] = [
  {
    id: 'urban-nomad',
    title: 'Drop 01: Urban Nomad Utility Fit',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    note: 'Includes 280 GSM Tee + Parachute Cargo Pants',
    href: '/looks/urban-nomad',
  },
  {
    id: 'retro-dive',
    title: 'Drop 02: Retro Acid Wash Chill Fit',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1000&q=85',
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    note: 'Includes Acid Sweatshirt + Chino Shorts',
    href: '/looks/retro-dive',
  },
  {
    id: 'frost-dune',
    title: 'Drop 03: Frost Dune Waffle Knit Fit',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
    price: 2699,
    originalPrice: 4299,
    discount: 37,
    note: 'Includes Waffle Pullover + Tailored Joggers',
    href: '/looks/frost-dune',
  },
  {
    id: 'downtown-jam',
    title: 'Drop 04: Downtown Monochrome Fit',
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?auto=format&fit=crop&w=1000&q=85',
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    note: 'Includes Graphic Drop Tee + Street Bottoms',
    href: '/looks/downtown-jam',
  },
];

export const autumnEscapes: Product[] = [
  {
    id: 'olive-coord',
    name: 'Seamless Olive Waffle Co-ord Set',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=85',
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.9,
    reviewsCount: 142,
    tag: 'BESTSELLER',
    category: 'Coord Sets',
    note: 'Includes waffle top & tailored joggers',
    href: '/product/olive-coord',
  },
  {
    id: 'jogger-pack',
    name: 'Pack of 2 All-Day Relaxed Joggers',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.9,
    reviewsCount: 310,
    tag: 'PACK OF 2',
    pack: 'Washed Black & Cream',
    category: 'Joggers',
    note: '100% Supercombed Heavy Cotton',
    href: '/product/jogger-pack',
  },
  {
    id: 'lavender-coord',
    name: 'Lavender Chill-Wave Heavy Co-ord Set',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.8,
    reviewsCount: 98,
    tag: 'TRENDING',
    category: 'Coord Sets',
    note: 'Airy waffle texture & relaxed drape',
    href: '/product/lavender-coord',
  },
  {
    id: 'oatmeal-knit',
    name: 'Oatmeal Relaxed Textured Knit Set',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85',
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    rating: 4.9,
    reviewsCount: 220,
    tag: 'LIMITED DROP',
    category: 'Coord Sets',
    note: 'Premium textured cotton knit',
    href: '/product/oatmeal-knit',
  },
];

export const bestsellers: Product[] = [
  {
    id: 'aero-polo',
    name: 'Aero Textured Knit Polo Shirt',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.8,
    category: 'Polos',
    tag: 'NEW ARRIVAL',
    href: '/product/aero-polo',
  },
  {
    id: 'travel-jogger',
    name: 'Transit Multi-Pocket Cargo Joggers',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85',
    price: 1399,
    originalPrice: 2199,
    discount: 36,
    rating: 4.9,
    category: 'Joggers',
    tag: 'TOP RATED',
    href: '/product/travel-jogger',
  },
  {
    id: 'mount-fuji-tee',
    name: 'Mount Fuji 280 GSM Graphic Boxy Tee',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85',
    price: 899,
    originalPrice: 1299,
    discount: 30,
    rating: 4.9,
    category: 'T-Shirts',
    tag: 'HEAVYWEIGHT',
    href: '/product/mount-fuji-tee',
  },
  {
    id: 'transit-shorts',
    name: '24/7 Essential Transit Sweat Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.7,
    category: 'Shorts',
    tag: 'HOT',
    href: '/product/transit-shorts',
  },
  {
    id: 'club-heavyweight',
    name: 'NWear Club Heavyweight Graphic Tee',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.9,
    category: 'T-Shirts',
    tag: '280 GSM',
    href: '/product/club-heavyweight',
  },
  {
    id: 'minimalist-navy-tee',
    name: 'Everyday Minimalist Boxy Navy Tee',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
    price: 749,
    originalPrice: 1099,
    discount: 31,
    rating: 4.9,
    category: 'T-Shirts',
    tag: 'ESSENTIAL',
    href: '/product/minimalist-navy-tee',
  },
  {
    id: 'pack-chino-shorts',
    name: 'Pack of 2 Hybrid Stretch Chino Shorts',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=85',
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.8,
    category: 'Shorts',
    tag: 'PACK OF 2',
    href: '/product/pack-chino-shorts',
  },
  {
    id: 'pack-cargo-shorts',
    name: 'Pack of 2 Tactical Utility Cargo Shorts',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=85',
    price: 1599,
    originalPrice: 2399,
    discount: 33,
    rating: 4.9,
    category: 'Shorts',
    tag: 'PACK OF 2',
    href: '/product/pack-cargo-shorts',
  },
];

export const exploreCards: ExploreCard[] = [
  {
    id: 'cargo-shorts-range',
    title: 'Tactical Cargo Shorts',
    subtitle: 'Engineered with 4-way stretch & deep gear pockets',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85',
    href: '/category/shorts',
  },
  {
    id: 'resort-shirts-range',
    title: 'Resort Cuban-Collar Shirts',
    subtitle: 'Breathable linen blends crafted for sunset strolls',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=85',
    href: '/category/casual-shirts',
  },
  {
    id: 'active-shorts-range',
    title: 'Active Gym-to-Street Shorts',
    subtitle: 'Moisture-wicking, anti-odor performance technology',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=85',
    href: '/category/shorts',
  },
  {
    id: 'terry-breeze-range',
    title: 'French Terry Cloud Shorts',
    subtitle: 'Heavy loopback cotton for supreme all-day comfort',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    href: '/category/shorts',
  },
];

export const customerReviews: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Siddharth R.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
    rating: 5,
    text: 'The fabric quality is unreal. The joggers feel so lightweight yet keep their shape all day long. Definitely buying more colors!',
    verified: true,
    date: '2 days ago',
  },
  {
    id: 'rev-2',
    name: 'Aarav K.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
    rating: 5,
    text: 'Best oversized tee in the market. The drape, neck ribbing, and heavy GSM make it look like a $150 designer piece.',
    verified: true,
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    name: 'Tanya M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85',
    rating: 5,
    text: 'I ordered the Co-ord set for our Goa trip. Super stylish, breathable, and super easy to care for.',
    verified: true,
    date: '2 weeks ago',
  },
  {
    id: 'rev-4',
    name: 'Rohan P.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
    rating: 5,
    text: 'Packs of 2 are unbeatable value for money. Fits true to size and survived several machine washes looking crisp.',
    verified: true,
    date: '3 weeks ago',
  },
];
