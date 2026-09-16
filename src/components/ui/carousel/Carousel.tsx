'use client';

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';

export interface CarouselSlide {
  image: string;
  alt: string;
}

export interface CarouselProps {
  data: CarouselSlide[];
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
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
      className="w-full h-full"
    >
      {data.map((item, index) => (
        <SwiperSlide className="h-full w-full" key={index}>
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
