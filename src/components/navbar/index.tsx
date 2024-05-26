import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const BrandLogo = () => (
  <Image src={'/images/logo_light.png'} width={120} height={60} alt='Logo' />
);

const NavLink = ({ label, path }: { label: string; path: string }) => (
  <li className='mx-2 cursor-pointer px-2 text-gray-400 font-semibold hover:text-[#202020] duration-300'>
    <Link href={path}>{label}</Link>
  </li>
);

const Index = (props: Props) => {
  return (
    <div className='p-4 border-b border-b-gray-100'>
      <div className=' flex items-center justify-between flex-row'>
        <BrandLogo />
        <ul className='flex items-center justify-center gap-4'>
          <NavLink label='Home' path='/' />
          <NavLink label='Mens' path='/mens' />
          <NavLink label='Womens' path='/womens' />
          <NavLink label='Oversized T-Shirts' path='/Oversized-t-shirt' />
        </ul>
        <ul className='flex items-center justify-center gap-4'>
          {/* <li className='cursor-pointer text-gray-400 font-semibold hover:text-[#202020] duration-300'>
            <input
              type='text'
              className='outline-gray-400 border-gray-400 border-2 rounded-md px-2 py-1 w-40'
            />
          </li> */}
          <li className='cursor-pointer  text-gray-400 font-semibold hover:text-[#202020] duration-300'>
            cart
          </li>
          <li className='cursor-pointer text-gray-400 font-semibold hover:text-[#202020] duration-300'>
            account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
