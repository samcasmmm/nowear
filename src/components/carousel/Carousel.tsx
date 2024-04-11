'use client';

import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';

interface Slide {
  // id: number;
  // title: string;
  // tagline: string;
  image: string;
  alt: string;
  // buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface CarouselProps {
  data: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [width, height] = useDeviceSize();
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[Pagination, Autoplay]}
      className='w-full h-full'
    >
      {data.map((item, index) => (
        <SwiperSlide className='bg-red-400 h-full w-full' key={index}>
          <Image
            src={item.image}
            alt={item.alt}
            width={width}
            height={height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
