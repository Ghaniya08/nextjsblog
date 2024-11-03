import Link from 'next/link'
import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-black'>
     <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <h1 className='btn btn-ghost w-9 h-4 fontstyle text-white pl-20 text-2xl'>Nextjs</h1>
      <p className="mt-2 text-sm text-gray-300">
      This blog is written by Ghaniya Khan, a 17-year-old Web Developer and student at GIAIC.      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <li>
            <Link href={"/setupof"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Setup blog Of Nextjs</Link> 
            </li>        
          <li>
            <Link href={"/blog/nextjs1"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 1.0.0 blog</Link>
          </li>
          <li>
            <Link href={"/blog/nextjs2"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 2.0.0 blog</Link>
          </li>
          <li>
            <Link href={"/blog/nextjs3"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 3.0.0 blog</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <li>
            <Link href={"/blog/nestjs4"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 4.0.0 blog</Link>
          </li>
          <li>
            <Link href={"/blog/nextjs5"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 5.0.0 blog</Link>
          </li>
          <li>
            <Link href={"/blog/nextjs6"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 6.0.0 blog</Link>
          </li>
          <li>
            <Link href={"/blog/nestjs7"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 7.0.0 blog</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <li><Link href={"/blog/nextjs8"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 8.0.0 blog</Link></li>
          <li><Link href={"/blog/nextjs9"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 9.0.0 blog</Link></li>
          <li><Link href={"/blog/nextjs10"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 10.0.0 blog</Link></li>
          <li><Link href={"/blog/nextjs11"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 11.0.0 blog</Link></li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10">
          <li><Link href={"/blog/nextjs12"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 12.0.0 blog</Link></li>
          <li><Link href={"/blog/nextjs13"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 13.0.0 blog</Link></li>
          <li> <Link href={"/blog/nestja14"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 14.0.0 blog</Link></li>
          <li><Link href={"/blog/nextjs15"} className="text-gray-300 hover:text-gray-400 decoration-5 cursor-pointer">Nextjs 15.0.0 blog</Link></li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">
       NextJs Blog by Ghaniya Khan
      </p>
      <span className="inline-flex text-white sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-2xl font-semibold gap-4">
      <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
        <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
          <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
       
        
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
