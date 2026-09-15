import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import MatchTheMood from '@/components/home/MatchTheMood';
import ShopByCategory from '@/components/home/ShopByCategory';
import ShopTheFullLook from '@/components/home/ShopTheFullLook';
import BrandStory from '@/components/home/BrandStory';
import AutumnEscapes from '@/components/home/AutumnEscapes';
import OurBestsellers from '@/components/home/OurBestsellers';
import ExploreRange from '@/components/home/ExploreRange';
import CustomerReviews from '@/components/home/CustomerReviews';
import Footer from '@/components/Footer';

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
