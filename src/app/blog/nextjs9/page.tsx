import Image from 'next/image'
import React from 'react'
import nextjs9 from "../../../../public/nextjs9.jpg"
import { MdAccountCircle } from "react-icons/md";
const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black ">NextJs 9.0.0</h1>
        <h1 className="scroll-m-20 border-b pb-2 lg:text-3xl text-[20px] font-semibold text-center tracking-tight first:mt-0"> A Powerful Update for Modern Web Development</h1>
        <h1 className='flex mt-2 lg:mb-4'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 1 2024</span></h1>
        <Image src={nextjs9} alt='next2' className='rounded-lg lg:h-[350px] lg:w-[110250px] w-[300px]'/>
      <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Released on July 8, 2019, Next.js 9 brought a transformative set of features to the framework, focused on simplifying data handling, routing, and performance optimization. This version introduced major capabilities, including API routes and automatic static optimization, making it even easier for developers to build fast, scalable, and versatile applications with minimal configuration.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Key Features in Next.js 9</h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">API Routes: </span>One of the most notable additions in Next.js 9 was API routes. This feature allowed developers to create backend functionality within their Next.js app, making it possible to build RESTful endpoints without needing a separate server. API routes empowered developers to handle data requests, user authentication, and form submissions directly in Next.js, streamlining full-stack application development.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Automatic Static Optimization : </span> Next.js 9 introduced automatic static optimization, which allows pages to be automatically pre-rendered as static HTML if they dont rely on dynamic data fetching. This feature provides the performance benefits of static sites while still supporting dynamic routes, making apps load faster and enhancing user experience without requiring manual configuration.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3' > <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Dynamic Routing:  </span>Next.js 9 made it easier to set up dynamic routes with a file-based routing system, eliminating the need for complex configurations. Using the [param] syntax, developers could now create dynamic pages that adjust based on URL parameters, making it straightforward to build routes for blogs, e-commerce products, and more.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0">Improved Error Monitoring with getStaticProps and getServerSideProps </span>This version enhanced error monitoring by introducing getStaticProps and getServerSideProps, enabling developers to better manage how data is fetched for different pages. These new methods provided clearer control over when and how data is loaded, whether during build time or on each request, giving developers more flexibility for SEO and performance tuning.</p>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> <span className="scroll-m-20 border-b pb-2 text-[17px] font-semibold tracking-tight first:mt-0"> Internationalized Routing: </span>Next.js 9 also introduced experimental support for internationalized routing, making it easier to serve content in multiple languages. By enabling locale-based routing, this feature helped developers reach a broader, global audience without adding complex localization setups.</p>
      <h1 className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Why Next.js 9 Was a Game-Changer? </h1>
      <p className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'> Next.js 9 combined front-end and back-end capabilities in one framework, making it a standout choice for building full-stack applications. API routes, automatic static optimization, and improved dynamic routing simplified the development process, while internationalized routing support helped meet the needs of global audiences. By merging flexibility and performance with ease of use, Next.js 9 raised the bar for modern web development.</p> 
        </div>
    </div>
  )
}

export default page
