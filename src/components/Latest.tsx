import Image from 'next/image'
import React from 'react';
import next15 from "../../public/next15.jpg"
import Link from 'next/link';
const Latest = () => {
  return (
    <div className='lg:flex lg:gap-28 lg:px-0 px-5 mt-[150px] mb-[100px]'>
      <div className=''>
      <h1 className="text-4xl lg:hidden block mb-10 font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black">Latest Version</h1>
       <Image src={next15} alt='next15' className='h-[200px] w-[340px] rounded-lg lg:hidden block'/>
     </div>
      <div className='lg:w-[500px] '>
        <h1 className="text-3xl mb-2 font-extrabold hidden lg:block text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black">Latest Version</h1>
        <p className='lg:w-[450px] w-[290px]  justify-center mt-4 items-center font-semibold lg:h-[185px] lg:text-[15px] text-[13px] line-clamp-[8]'>Next.js 15, released on Thursday, May 23rd, 2024, is the latest version of the popular React framework by Vercel. Known for its ease of use and powerful features, Next.js 15 focuses on improving performance, security, and developer experience. Key features include Optimized Routing for faster page loads and navigation, Automatic Caching to enhance loading speeds, and Dynamic API Routing for more flexible API handling. It also offers Enhanced TypeScript Support, simplifying coding for developers who prefer static typing. With SEO and image optimization tools, Next.js 15 helps websites rank better and load faster. Additionally, Edge Function Integration delivers globally distributed content quickly, making it a strong choice for modern web applications.</p>
        <Link href={"/blog/nextjs15"}><button className='bg-black text-white w-[100px] h-[30px] rounded-lg my-6 lg:ml-40 ml-28'>Read more</button></Link>
      </div>
      <div className='w-[500px] '>
        <Image src={next15} alt='next15' className='h-[300px] w-[550px] rounded-lg lg:block hidden'/>
      </div>
    </div>
  )
}

export default Latest
