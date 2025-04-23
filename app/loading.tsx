import React from 'react'
import Image from 'next/image'
import loader from "@/assets/loader.gif"

const loading = () => {
  return (
    <div className='h-screen w-full flex-center'>
        <Image src={loader} alt="loader" height={150} width={150}/> 
    </div>
  )
}

export default loading