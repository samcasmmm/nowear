import Image from 'next/image';
import React from 'react';

type Props = {};

const BrandLogo = () => (
  <Image src={'/images/logo_light.png'} width={100} height={50} alt='Logo' />
);

const index = (props: Props) => {
  return (
    <div>
      index
      <BrandLogo />
    </div>
  );
};

export default index;
