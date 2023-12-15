import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div className='grid place-content-center place-items-cente w-[100%] h-[60vh]'>
        <Image src="/Home/loader3.gif" alt='logo' width={500} height={500} />
    </div>
  )
}

export default Loader