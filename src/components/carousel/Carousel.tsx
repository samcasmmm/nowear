'use client';

import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

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
  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={
        {
          // delay: 1500,
        }
      }
      modules={[Navigation, Pagination, Autoplay]}
      className='w-full h-full'
    >
      {data.map((item, index) => (
        <SwiperSlide className='bg-red-400 h-full w-full' key={index}>
          <Image
            src={item.image}
            alt={item.alt}
            width={window.screen.width}
            height={window.screen.height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
