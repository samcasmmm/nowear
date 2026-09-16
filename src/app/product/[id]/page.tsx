import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Navbar, Footer } from '@/components/layout';
import {
  ProductGallery,
  ProductBuyBox,
  FrequentlyBoughtTogether,
  ProductComparisonTable,
  ProductQA,
  ProductReviewsBreakdown,
} from '@/components/product';
import { OurBestsellers } from '@/components/home';
import {
  bestsellers,
  autumnEscapes,
  Product,
} from '@/data/storeData';
import {
  Star,
  ShieldCheck,
  Award,
  ChevronRight,
  Share2,
  Heart,
  CheckCircle2,
  Sparkles,
  Zap,
} from 'lucide-react';
import ProductClientWrapper from './ProductClientWrapper';

// Combine all products to find matching product by ID
const allProducts: Product[] = [
  ...bestsellers,
  ...autumnEscapes,
  // Additional fallback product entries if needed
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
];

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    id: p.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  const product =
    allProducts.find((p) => p.id === productId) ||
    bestsellers[0] || {
      id: 'default-tee',
      name: 'NWear 280 GSM Heavyweight Boxy Tee',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85',
      price: 999,
      originalPrice: 1499,
      discount: 33,
      rating: 4.9,
      reviewsCount: 14820,
      tag: 'BESTSELLER',
      category: 'T-Shirts',
      href: `/product/${productId}`,
    };

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col antialiased selection:bg-[#f6b800] selection:text-black">
      {/* Top Notification Marquee */}
      <Header />

      {/* Main Glassmorphic Navigation */}
      <Navbar />

      {/* Product Content Wrapper */}
      <ProductClientWrapper product={product} />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
