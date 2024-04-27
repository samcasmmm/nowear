import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';
import { Header, Navbar } from '@/components';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
    </main>
  );
}
