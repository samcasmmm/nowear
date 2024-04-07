'use client';
import Marquee from 'react-fast-marquee';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='w-full overflow-hidden bg-AstronautBlue-500 p-1'>
      <Marquee className='text-white text-sm'>
        Over 2 Million Satisfied Customers Trust Us. Enjoy Hassle-Free Shopping
      </Marquee>
    </div>
  );
};

export default Header;
