'use client';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Baby } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  const [bool, setbool] = useState(false);
  const handleOnEnter = () => {
    console.log('Enter');
    setbool(true);
  };
  const handleOnMouseLeave = () => {
    console.log('Leave');
    setbool(false);
  };
  return (
    <div className='border-b border-b-gray-100'>
      <div
        className='p-4'
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <Icon name={'AArrowDown'} />

        <Baby />
      </div>
      <div className=''>asdasd</div>

      {bool && <div className='bg-red-400 w-full p-4'></div>}
    </div>
  );
};

export default Navbar;
