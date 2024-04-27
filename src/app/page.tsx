'use client';

import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';

export default function Home() {
  const [width, height] = useDeviceSize();
  return <main></main>;
}
