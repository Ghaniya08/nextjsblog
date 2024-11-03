import Image from 'next/image'
import React from 'react'
import nextjs1 from "../../../../public/nextjs1.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs 1.0.0</h1>
        <h1 className='flex lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> October 31 2024</span></h1>
        <Image src={nextjs1} alt='next1' className='rounded-lg lg:h-[350px] lg:w-[110250px] w-[300px]'/>
      <p  className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'>Next.js version 1 was a groundbreaking release, setting the foundation for future versions of the framework by introducing server-side rendering (SSR) and initial static export capabilities. Released on November 4, 2016, Next.js 1.0.1 laid out the essentials for streamlined, React-based development, enabling developers to render React applications on the server side easily. This feature was pivotal for SEO optimization and performance, making it a popular choice among developers looking to build fast and scalable React applications. This initial release also simplified routing by automatically creating routes based on the file structure, making navigation and page setup effortless for developers</p>
        </div>
    </div>
  )
}

export default page
