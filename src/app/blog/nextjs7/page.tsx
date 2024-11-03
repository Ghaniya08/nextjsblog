import Image from 'next/image'
import React from 'react';
import nextjs7 from "../../../../public/nextjss7.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs 7.0.0</h1>
        <h1 className='flex mt-2 lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 1 2024</span></h1>
        <Image src={nextjs7} alt='next2' className='rounded-lg lg:h-[350px] lg:w-[110250px] w-[300px]'/>
      <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Released on August 28, 2018, Next.js 7 continued to evolve as a powerful framework for React, bringing enhancements focused on developer experience, better handling of assets, and layout improvements. With more flexibility and efficiency built into each update, Next.js 7 made it even easier to create high-performance applications.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Key Features in Next.js 7</h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Native Support for getInitialProps in _app.js </span>Next.js 7 introduced native support for getInitialProps in _app.js, allowing global data to be fetched and passed to all pages in an application. This simplified data fetching for global needs, such as user authentication or theme preferences, making it easier to handle state across multiple pages.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Improved Static Export Capabilities </span>Static export features in Next.js 7 were further enhanced, enabling better handling of assets, images, and files for exportable static sites. With this update, developers could rely on a more streamlined static export process, ideal for building fast-loading, SEO-friendly sites.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3' > <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> {` Built-In < Link > Prefetching `}</span>{`The Next.js <Link> component in version 7 gained built-in prefetching capabilities, improving page-to-page navigation by preloading assets in the background. As a result, pages load almost instantly when users navigate through the site, enhancing the overall user experience.`}</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Webpack 4 Integration </span>With Next.js 7, the framework upgraded to Webpack 4, bringing improvements in build speed, smaller bundle sizes, and better code splitting. This upgrade helped reduce loading times and optimized the performance of applications.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Better Error Reporting and Debugging</span>Error handling and reporting received a boost in Next.js 7, with clearer error messages and stack traces. Developers could quickly identify issues, enabling faster debugging and a more efficient development experience.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Why Choose Next.js 7?</h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> Next.js 7 delivered significant improvements to both developer experience and application performance. With better asset management, enhanced prefetching, and streamlined data handling, it made building and optimizing React applications easier than ever, solidifying Next.js as a top choice for modern web development.</p>
        </div>
    </div>
  )
}
export default page;