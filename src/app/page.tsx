"use client"
import Image from 'next/image';
import React from 'react';
import useUserName from '@/store/home.Zuntas';
import { useRouter } from 'next/navigation';
import { type } from 'os';


function Page() {

  const { setNameUser } = useUserName();

  const router = useRouter();

  const changeInput = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const inputValue = e.currentTarget['inputs'].value;

    if (typeof inputValue === 'string' && inputValue.trim() !== "" && /^[a-zA-Z]+$/.test(inputValue.trim())) {

      setNameUser(inputValue);

      router.push('/pages/pokemon');
    }
  };
  
  return (
    <section className="w-full h-screen bg-[url('/Home/pikachu.gif')] bg-cover bg-center flex flex-col justify-center  gap-5 relative">
    <div className='flex flex-col justify-center items-center gap-3'>
    <Image src={"/Home/pokedes.png"} alt='logo' width={800} height={800}/>
     <article className='flex flex-col items-center gap-3'>
      <h1 className='text-center text-[red] font-extrabold [font-size:_clamp(2em,7vw,4em)] drop-shadow-[2px_4px_1px_black]'>¡Hola Entrenador!</h1>
      <p className='text-[red] font-extrabold [font-size:_clamp(1em,3vw,1.5em)] drop-shadow-[2px_4px_1px_black]'>Para poder comenzar, dame tu nombre</p>
      <form onSubmit={changeInput} className='flex shadow-[3px_3px_4px_black]'>
        <input id='inputs' type="text" className='outline-none text-center font-semibold' placeholder='Mario'/>
        <button className='bg-[red] text-white font-extrabold py-2 px-5 '>Comenzar</button>
      </form>
     </article>
    </div>

    <footer className='w-full h-[50px] md:h-[100px] z-10 bg-[#000000] bottom-0 absolute '>

      <div className='w-full h-[50px] md:h-[80px] absolute bottom-10 md:bottom-16 bg-[red]'></div>

    </footer>
    
    </section>
  );
}

export default Page;
