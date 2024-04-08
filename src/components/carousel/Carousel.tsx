'use client';

import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SliderButtons from './SliderButtons';
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
      modules={[Navigation, Pagination]}
      className='w-full h-full'
    >
      {data.map((item, index) => (
        <SwiperSlide className='bg-red-400 h-full w-full'>
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
