import { Header, Navbar, Footer } from '@/components/layout';
import {
  MatchTheMood,
  ShopByCategory,
  ShopTheFullLook,
  BrandStory,
  AutumnEscapes,
  OurBestsellers,
  ExploreRange,
  CustomerReviews,
} from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Notification Bar */}
      <Header />

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Category Grids - Match The Mood */}
      <MatchTheMood />

      {/* Shop By Category Avatars */}
      <ShopByCategory />

      {/* Full Outfit Lookbook Showcase */}
      <ShopTheFullLook />

      {/* Brand Heritage & Quality Story */}
      <BrandStory />

      {/* Seasonal Carousel Spotlight - Autumn Escapes */}
      <AutumnEscapes />

      {/* Best Selling Products with Filtering */}
      <OurBestsellers />

      {/* Curated Product Silhouettes */}
      <ExploreRange />

      {/* Customer Community Reviews */}
      <CustomerReviews />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
