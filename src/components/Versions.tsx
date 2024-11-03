import Image from 'next/image'
import React from 'react';
import nextjs1 from "../../public/nextjs1.jpg"
import nextjs2 from "../../public/NEXTJS2.jpg"
import nextjs3 from "../../public/nextjs3.jpg"
import nextsetup from "../../public/nextsetup.jpg"
import acc from "../../public/acc.jpg"
import Link from 'next/link';
const Versions = () => {
  return (
   <div>
    <h1 className="text-3xl mb-2 font-extrabold hidden lg:block text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black">Blog</h1> 
    <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href={"/blog/setupofnextjs"}>
      <div className="block relative h-48 overflow-hidden rounded-lg hover:scale-105 hover:duration-500">
            <Image src={nextsetup} alt=" "  className=" rounded-lg w-[330px] h-[230px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" title-font text-lg font-medium text-gray-900 mb-3">
           Setup of Nextjs
          </h3>
          <p className="mt-1 sm:text-sm  flex"> How to Set Up a Next.js Project: Step-by-Step Guide...</p>
          <h1 className='flex mt-2 mb-4'> <Image src={acc} alt="nextjs1" className='rounded-[50px] -mt-1 w-[28px] h-[30px] mr-2' />  Ghaniya Khan <span className='ml-4 '> October 31 2024</span></h1>
        </div>
      </Link> 
      </div>

   <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href={"/blog/nextjs1"}>
      <div className="block relative h-48 overflow-hidden rounded-lg hover:scale-105 hover:duration-500">
            <Image src={nextjs1} alt=" "  className=" rounded-lg w-[330px] h-[230px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" title-font text-lg font-medium text-gray-900 mb-3">
           Nextjs Version 1.0.0
          </h3>
          <p className="mt-1 sm:text-sm  flex"> Next.js version 1 was a groundbreaking release, setting the foundation for 
          future versions of the framework by introducing ...</p>
          <h1 className='flex mt-2 mb-4'> <Image src={acc} alt="nextjs1" className='rounded-[50px] -mt-1 w-[28px] h-[30px] mr-2' />  Ghaniya Khan <span className='ml-4 '> October 31 2024</span></h1>
        </div>
      </Link> 
      </div>
<div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href={"/blog/nextjs2"}>
      <div className="block relative h-48 overflow-hidden rounded-lg hover:scale-105 hover:duration-500">
            <Image src={nextjs2} alt=" " className=" rounded-lg w-[330px] h-[230px]  " width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" title-font text-lg font-medium text-gray-900 mb-3">
           Nextjs Version 2.0.0
          </h3>
          <p className="mt-1 sm:text-sm  flex">  Next.js 2.0.0, released on March 27, 2017, marked a major milestone in the evolution of 
          the Next.js framework. Building on the...</p>
          <h1 className='flex mt-2 mb-4'> <Image src={acc} alt="nextjs1" className='rounded-[50px] -mt-1 w-[28px] h-[30px] mr-2' />  Ghaniya Khan <span className='ml-4 '> October 31 2024</span></h1>
        </div>
      </Link>
      </div>
       <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href={"/blog/nextjs3"}>
      <div className="block relative h-48 overflow-hidden rounded-lg hover:scale-105 hover:duration-500">
            <Image src={nextjs3} alt=" " className=" rounded-lg w-[330px] h-[230px]  " width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" title-font text-lg font-medium text-gray-900 mb-3">
           Nextjs Version 3.0.0
          </h3>
          <p className="mt-1 sm:text-sm  flex"> Next.js 3.0.0, released on August 8, 2017, brought several practical updates
          that made it even more developer-friendly...</p>
          <h1 className='flex mt-2 mb-4'> <Image src={acc} alt="nextjs1" className='rounded-[50px] -mt-1 w-[28px] h-[30px] mr-2' />  Ghaniya Khan <span className='ml-4 '> October 31 2024</span></h1>
        </div>
      </Link>
      </div>
      {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href={"/blog/nestjs4"}>
      <div className="block relative h-48 overflow-hidden rounded-lg hover:scale-105 hover:duration-500">
            <Image src={nextjs4} alt=" " className=" rounded-lg w-[330px] h-[230px]  " width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" title-font text-lg font-medium text-gray-900 mb-3">
           Nextjs Version 4.0.0
          </h3>
          <p className="mt-1 sm:text-sm  flex">Next.js 4 is a robust update to the popular React framework, known for its
           capabilities in server-side rendering, static site...</p>
          <h1 className='flex mt-2 mb-4'> <Image src={acc} alt="nextjs1" className='rounded-[50px] -mt-1 w-[28px] h-[30px] mr-2' />  Ghaniya Khan <span className='ml-4 '> October 31 2024</span></h1>
        </div>
      </Link>
     </div> */}
    </div>
  </div>
</section>
    </div>
    
   </div>
  )
}

export default Versions
