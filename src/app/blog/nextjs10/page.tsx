import Image from 'next/image'
import React from 'react'
import nextjs10 from "../../../../public/nextjs10.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs v10.0.0</h1>
        <h1 className="scroll-m-20 border-b pb-2 lg:text-3xl text-[20px] font-semibold text-center tracking-tight first:mt-0"> A New Era of Web Development </h1>
        <h1 className='flex mt-2 lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 2 2024</span></h1>
        <Image src={nextjs10} alt='next2' className='rounded-lg h-[350px] w-[110250px]'/>
      <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js 10, released on October 27, 2020, introduced a wave of powerful tools aimed at enhancing productivity, performance, and user experience. With significant new features like built-in image optimization, internationalization support, and a preview mode, Next.js 10 made it easier for developers to build modern, highly optimized applications.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Key Features in Next.js 10</h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Built-In Image Optimization: </span>One of the standout features of Next.js 10 was the addition of the next/image component. This built-in image optimization feature allows developers to automatically resize, optimize, and serve images in the most efficient format. By optimizing images on-demand, Next.js 10 drastically improved page load speeds and performance without extra configuration.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Internationalized Routing: </span> Next.js 10 brought first-class support for internationalization, enabling developers to create multi-language applications with minimal setup. This feature allowed routing based on user locale, making it easier to serve content in multiple languages and reach a global audience.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3' > <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">  Preview Mode for Draft Content:  </span>Preview mode in Next.js 10 was introduced to allow real-time previewing of draft content, which is especially useful for headless CMS integrations. By previewing draft changes before they go live, developers and content creators can collaboratively ensure that everything appears correctly before publication.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Automatic Webpack 5 Support (Experimental): </span>Next.js 10 introduced experimental support for Webpack 5, promising faster build times and smaller bundles. With better code-splitting and tree-shaking, this update laid the groundwork for enhanced performance and build efficiency.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Improved Static and Dynamic Imports: </span>The update also brought improvements to static and dynamic imports, allowing developers to load only what’s necessary. These optimizations led to smaller initial bundles and faster navigation between pages, providing a smoother experience for users.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Why Next.js 10 Was a Major Leap Forward? </h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js 10 brought significant upgrades that changed how developers handled images, internationalization, and content previews. By integrating built-in tools that addressed essential performance and user experience needs, Next.js 10 solidified its role as a versatile, production-ready framework for building high-performance applications at scale.</p> 
        </div>
    </div>
  )
}

export default page