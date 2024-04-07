'use client';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Baby } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {};

const Navbar = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnEnter = () => {
    setIsHovered(true);
  };

  const handleOnLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='border-b border-b-gray-100'>
      <div
        className='p-4 flex items-center'
        onMouseEnter={handleOnEnter}
        onMouseLeave={handleOnLeave}
      >
        <Icon name={'AArrowDown'} />
        <Baby />
      </div>
      <div className=''>asdasd</div>

      <motion.div
        onMouseEnter={handleOnEnter}
        className='bg-red-400 w-full'
        animate={{ height: isHovered ? 80 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default Navbar;
