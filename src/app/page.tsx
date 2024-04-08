import Carousel from '@/components/carousel/Carousel';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import carouselData from '@/data/coursel.json';

const imgs = [
  { image: '/images/image1.png', alt: 'asd' },
  { image: '/images/image2.png', alt: 'asd' },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className='container py-6'>
        <Carousel data={imgs} />
      </div>
    </main>
  );
}
