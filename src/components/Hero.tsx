import React from 'react'
import Image from 'next/image'
import nextpic from "../../public/nextforlogo.png"
const Hero = () => {
  return (
    <div className='mt-[50px] mb-[100px] px-12 '>
      <Image src={nextpic} alt='nextimg' className='rounded-lg h-[500px] w-[1250px]'/>
    </div>
  )
}

export default Hero
