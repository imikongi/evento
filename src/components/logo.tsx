import React from 'react';
import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={'/rb_2228.png'} alt={'logo'} width={50} height={50}/>
  );
};

export default Logo;