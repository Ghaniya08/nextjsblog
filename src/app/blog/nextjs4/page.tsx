import Image from 'next/image'
import React from 'react'
import nextjs4 from "../../../../public/nextjs4.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs 4.0.0</h1>
        <h1 className='flex mt-2 lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 1 2024</span></h1>
        <Image src={nextjs4} alt='next2' className='rounded-lg lg:h-[350px] lg:w-[110250px] w-[300px]'/>
      <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js 4 is a robust update to the popular React framework, known for its capabilities in server-side rendering, static site generation, and overall performance optimization for web applications. In this article, we’ll explore the main features of Next.js 4, understand what sets it apart, and guide you through building your first project with it. Whether you're a beginner or looking to upgrade, this blog will give you a solid foundation.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Key Features of Next.js 4.0.0</h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Optimized Build Performance</span>Next.js 4 offers faster builds due to enhanced webpack optimizations. This results in quicker development and build times, saving developers valuable time during production.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Enhanced Static Site Generation (SSG) </span>With improved static generation, developers can pre-render pages at build time, allowing faster load times and improved SEO. Next.js 4 allows you to generate static pages for specific routes, making it a great choice for blogs, e-commerce sites, and other content-heavy applications.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3' > <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Automatic Code Splitting</span>One of the core features of Next.js 4 is automatic code splitting, which helps optimize loading times. Only the code required for the specific page is loaded, improving user experience by reducing load times.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">API Routes </span> Next.js 4 introduces improved API routes, allowing you to create serverless functions directly in your application. This feature lets you handle backend functionality such as form handling or data processing without relying on an external server.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Improved Developer Experience</span>With hot reloading and detailed error reporting, Next.js 4 provides a smooth development experience. It enables real-time feedback on changes, making the development process much more efficient.</p>

        </div>
    </div>
  )
}

export default page