'use client';

import Carousel from '@/components/carousel/Carousel';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import carouselData from '@/data/coursel.json';
import NewCarousel from '@/components/carousel/NewCarousel';
import useDeviceSize from '@/hooks/useDeviceSize';

const imgs = [
  { image: '/images/image1.png', alt: 'asd' },
  { image: '/images/image2.png', alt: 'asd' },
];

export default function Home() {
  const [width, height] = useDeviceSize();
  return (
    <main>
      <Header />
      <Navbar />
      <div className='w-full h-full sm:container sm:py-6'>
        <NewCarousel>
          {imgs.map((img) => (
            <Image src={img.image} width={width} height={height} alt='banner' />
          ))}
        </NewCarousel>
      </div>
    </main>
  );
}
