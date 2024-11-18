import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={'/rb_2228.png'} alt={'logo'} width={50} height={50}/>
    </Link>
  );
};

export default Logo;