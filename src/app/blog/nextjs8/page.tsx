import Image from 'next/image'
import React from 'react'
import nextjs8 from "../../../../public/nextjs8.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs 8.0.0</h1>
        <h1 className='flex mt-2 lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 1 2024</span></h1>
        <Image src={nextjs8} alt='next2' className='rounded-lg lg:h-[350px] lg:w-[110250px] w-[300px]'/>
      <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js 8, released on January 2, 2019, brought several performance-oriented features to the Next.js framework. With improvements in serverless functions, optimized builds, and a focus on scalability, Next.js 8 continued to cater to the needs of modern web applications. This version was all about enhancing flexibility and performance for developers creating large-scale applications.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Key Features in Next.js 8</h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Serverless Functions Support: </span> Next.js 8 introduced serverless functions, allowing each page to be deployed as an independent serverless function. This feature made scaling applications much easier and enabled efficient resource management, as serverless functions run only when requested and scale automatically.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">   Incremental Static Generation: </span>This version improved support for static generation by allowing content to be generated incrementally. Developers could specify which pages should be built during the initial build and which should be generated on demand, improving build times and allowing content to stay fresh.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3' > <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Enhanced Dynamic Imports: </span>Dynamic imports received optimizations in Next.js 8, with a focus on better performance and quicker loading times. By loading only the necessary code when it’s needed, dynamic imports in this version helped reduce initial load times, leading to faster, smoother user experiences.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Improved Build and Dev Performance: </span> Next.js 8 brought enhancements to both build and development speeds. With more efficient bundling and minimized reloading times, developers experienced a faster, more productive workflow. This version also improved support for multi-threaded builds, allowing for faster compilation on multi-core machines.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Configurable Build Directory: </span>Next.js 8 introduced the ability to configure the build directory, allowing developers to specify custom build output locations. This feature made it easier to manage complex deployments, especially in multi-project environments.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Why Upgrade to Next.js 8? </h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js 8 offered robust tools for creating scalable, high-performance applications. Serverless function support, improved dynamic imports, and better build processes made it a well-rounded upgrade for teams and individuals alike. This release demonstrated Next.js’s commitment to keeping up with modern, serverless-ready application architecture.</p>
        </div>
    </div>
  )
}
export default page;