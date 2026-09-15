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
    title: 'HOODIES & JACKETS',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    tag: 'Winter Warmth',
    href: '/category/hoodies',
  },
  {
    id: 'sweatshirts',
    title: 'TRENDY SWEATSHIRTS',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80',
    tag: 'Graphic Drops',
    href: '/category/sweatshirts',
  },
  {
    id: 'basics',
    title: 'EVERYDAY BASICS',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    tag: 'Premium Cotton',
    href: '/category/basics',
  },
  {
    id: 'joggers',
    title: 'BEST SELLING JOGGERS',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
    tag: 'All-Day Ease',
    href: '/category/joggers',
  },
];

export const shopCategories: Category[] = [
  {
    id: 'cargo',
    name: 'Cargo Pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80',
    href: '/category/cargos',
  },
  {
    id: 'polos',
    name: 'Polos',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80',
    href: '/category/polos',
  },
  {
    id: 'casual-shirts',
    name: 'Casual Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
    href: '/category/casual-shirts',
  },
  {
    id: 'coord-sets',
    name: 'Co-ord Sets',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    href: '/category/coord-sets',
  },
  {
    id: 'oversized-tee',
    name: 'Oversized T-Shirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80',
    href: '/category/oversized-tshirts',
  },
  {
    id: 'tshirts',
    name: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=400&q=80',
    href: '/category/t-shirts',
  },
  {
    id: 'joggers-cat',
    name: 'Joggers',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=400&q=80',
    href: '/category/joggers',
  },
  {
    id: 'jeans',
    name: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=400&q=80',
    href: '/category/jeans',
  },
  {
    id: 'shorts',
    name: 'Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=400&q=80',
    href: '/category/shorts',
  },
  {
    id: 'oversized-shirts',
    name: 'Oversized Shirts',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    href: '/category/oversized-shirts',
  },
  {
    id: 'printed-tees',
    name: 'Printed T-Shirts',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80',
    href: '/category/printed-tees',
  },
  {
    id: 'linen-pants',
    name: 'Linen Pants',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    href: '/category/linen-pants',
  },
];

export const fullLooks: FullLook[] = [
  {
    id: 'urban-nomad',
    title: 'Urban Nomad Look',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    note: 'Lowest price in last 30 days',
    href: '/looks/urban-nomad',
  },
  {
    id: 'retro-dive',
    title: 'Retro Dive Chill Look',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    note: 'Lowest price in last 30 days',
    href: '/looks/retro-dive',
  },
  {
    id: 'frost-dune',
    title: 'Frost Dune Look',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    price: 2699,
    originalPrice: 4299,
    discount: 37,
    note: 'Lowest price in last 30 days',
    href: '/looks/frost-dune',
  },
  {
    id: 'downtown-jam',
    title: 'Downtown Jam Look',
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?auto=format&fit=crop&w=800&q=80',
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    note: 'Lowest price in last 30 days',
    href: '/looks/downtown-jam',
  },
];

export const autumnEscapes: Product[] = [
  {
    id: 'olive-coord',
    name: 'Seamless Olive Co-ord Set',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.8,
    reviewsCount: 142,
    tag: 'BESTSELLER',
    category: 'Coord Sets',
    note: 'Includes top & tailored joggers',
    href: '/product/olive-coord',
  },
  {
    id: 'jogger-pack',
    name: 'Pack of 2 All-Day Relaxed Joggers',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.9,
    reviewsCount: 310,
    tag: 'PACK OF 2',
    pack: 'Black & Cream',
    category: 'Joggers',
    note: '100% Supercombed Cotton',
    href: '/product/jogger-pack',
  },
  {
    id: 'lavender-coord',
    name: 'Lavender Chill-Wave Co-ord Set',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    rating: 4.7,
    reviewsCount: 98,
    tag: 'TRENDING',
    category: 'Coord Sets',
    note: 'Airy waffle texture',
    href: '/product/lavender-coord',
  },
  {
    id: 'oatmeal-knit',
    name: 'Oatmeal Relaxed Knit Co-ord Set',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80',
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
    name: 'Aero Classic Polo Shirt',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
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
    name: 'Versatile Transit Cargo Joggers',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
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
    name: 'Mount Fuji Oversized Graphic Tee',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    price: 899,
    originalPrice: 1299,
    discount: 30,
    rating: 4.7,
    category: 'T-Shirts',
    tag: 'OVERSIZED',
    href: '/product/mount-fuji-tee',
  },
  {
    id: 'transit-shorts',
    name: '24/7 Essential Transit Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    price: 799,
    originalPrice: 1199,
    discount: 33,
    rating: 4.6,
    category: 'Shorts',
    tag: 'HOT',
    href: '/product/transit-shorts',
  },
  {
    id: 'club-heavyweight',
    name: 'Club Graphic Heavyweight T-Shirt',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.8,
    category: 'T-Shirts',
    tag: 'HEAVYWEIGHT',
    href: '/product/club-heavyweight',
  },
  {
    id: 'minimalist-navy-tee',
    name: 'Everyday Minimalist Navy Tee',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
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
    name: 'Pack of 2 Hybrid Chino Shorts',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
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
    name: 'Pack of 2 Utility Cargo Shorts',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
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
    title: 'Utility Cargo Shorts',
    subtitle: 'Engineered with 4-way stretch & deep gear pockets',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80',
    href: '/category/shorts',
  },
  {
    id: 'resort-shirts-range',
    title: 'Resort Open-Collar Shirts',
    subtitle: 'Breathable linen blends crafted for sunset strolls',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    href: '/category/casual-shirts',
  },
  {
    id: 'active-shorts-range',
    title: 'Active Gym-to-Street Shorts',
    subtitle: 'Moisture-wicking, anti-odor performance technology',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
    href: '/category/shorts',
  },
  {
    id: 'terry-breeze-range',
    title: 'Pastel Terry Breeze Shorts',
    subtitle: 'French terry loops for supreme cloud-like comfort',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    href: '/category/shorts',
  },
];

export const customerReviews: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Siddharth R.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'The fabric quality is unreal. The joggers feel so lightweight yet keep their shape all day long. Definitely buying more colors!',
    verified: true,
    date: '2 days ago',
  },
  {
    id: 'rev-2',
    name: 'Aarav K.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Best oversized tee in the market. The drape, neck ribbing, and heavy GSM make it look like a $100 designer piece.',
    verified: true,
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    name: 'Tanya M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'I ordered the Co-ord set for our Goa trip. Super stylish, breathable, and super easy to care for.',
    verified: true,
    date: '3 weeks ago',
  },
  {
    id: 'rev-4',
    name: 'Rohan P.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    text: 'Packs of 2 are unbeatable value for money. Fits true to size and survived several machine washes looking crisp.',
    verified: true,
    date: '1 month ago',
  },
];
