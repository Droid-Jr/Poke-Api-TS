import Image from 'next/image';
import React from 'react';

function NavBar() {
  return (
    <nav className='w-full h-[70px] bg-[red] relative'>
      <div className='w-full h-[40px] bg-[black] absolute top-16'></div>
      <div className="absolute top-6 sm:top-5 left-3 md:left-16">
        <Image
          src={"/Home/pokedes.png"}
          alt='pokedex'
          width={300}
          height={300}
          loading='lazy'
          style={{ width: '70%', height: 'auto' }} 
        />
      </div>
      <div className="absolute top-10 right-0 md:top-7 md:right-5">
        <Image
          src={"/Home/loader.png"}
          alt='loader'
          width={70}
          height={70}
          loading='lazy'
          style={{ width: '70%', height: '70%' }} 
        />
      </div>
    </nav>
  );
}

export default NavBar;
