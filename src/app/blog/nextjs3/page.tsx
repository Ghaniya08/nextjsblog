
import Image from 'next/image'
import React from 'react'
import nextjs3 from "../../../../public/nextjs3.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs 3.0.0</h1>
        <h1 className="scroll-m-20 border-b pb-2 lg:text-3xl text-[20px] font-semibold text-center tracking-tight first:mt-0">Usability & Performance Boost</h1>
        <h1 className='flex mt-2 lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> October 31 2024</span></h1>
        <Image src={nextjs3} alt='next2' className='rounded-lg lg:h-[350px] lg:w-[110250px] w-[300px]'/>
      <p  className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'>Next.js 3.0.0, released on August 8, 2017, brought several practical updates that made it even more developer-friendly. Here are some highlights:</p>
      <p className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Static Export:</span> One of the most significant updates was the introduction of static export. With this, Next.js could export a site as static HTML files, enabling it to function like a static site generator. This feature allowed developers to use Next.js for static sites and blogs, broadening its use cases.</p>
      <p className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Webpack 3 Integration: </span> Next.js 3 incorporated Webpack 3, bringing enhanced performance and better tree-shaking, which made apps smaller and faster. This integration further optimized page loads and reduced bundle sizes, directly impacting user experience.</p>
      <p className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]' > <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Multi-Zone Support: </span>Version 3 introduced multi-zone support, allowing developers to split large applications into smaller, independent Next.js applications that could still work as one. This was ideal for teams managing different parts of large websites and needed separate codebases for easier maintenance.</p>
      <p className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Code Splitting Improvements: </span> Next.js 3 expanded code-splitting capabilities, meaning the framework loaded only the necessary JavaScript for each page. This led to faster initial page loads, especially for complex applications.</p>
      <p className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'> <span className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Why It Mattered: </span> Next.js 3 focused on versatility and performance. With static export and multi-zone support, it became a more flexible framework suitable for both dynamic applications and static websites, appealing to a wider audience of developers and startups. These changes solidified its reputation as a go-to framework for building performant, scalable web applications.</p>
      <p className='lg:leading-7 [&:not(:first-child)]:mt-6 mb-3 lg:text-[16px] text-[12px]'> This release took Next.js another step toward becoming an all-in-one React framework, and its evolution didn’t stop here!</p>
        </div>
    </div>
  )
}

export default page