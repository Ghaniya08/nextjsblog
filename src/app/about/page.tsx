import React from 'react'

const page = () => {
  return (
    <div className='mt-[50px] mb-[100px]'>
        <div className='lg:w-[800px] px-9 lg:px-12 lg:ml-72'>
        <h1 className="text-3xl lg:mb-[50px] font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black">About NextJS</h1>
        <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js, developed by  
         <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-xl text-black'>
         Guillermo Rauch and released by Vercel 
        </span>(formerly ZEIT), has grown significantly since its inception in 
        <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-xl text-black '> 2016</span>.
        Designed to enhance React applications, Next.js enables developers to implement server-side rendering and static site generation out of the box. This innovation has streamlined performance and SEO optimization in React applications, making it popular for both enterprise-level and individual projects.
        Since its initial release, Next.js has evolved through multiple versions, each bringing substantial enhancements. For instance, Next.js 9 introduced API routes and incremental static regeneration (ISR), while version 10 added built-in image optimization. Next.js 11 focused on developer experience improvements, including live collaboration tools, and version 12 integrated support for React 18 features and server components, making Next.js even more versatile. The latest version, Next.js 13, advances this with Turbopack, a fast bundler and development server.
        This progressive roadmap has established Next.js as a go-to framework for modern web development, particularly with its robust ecosystem supporting both static and dynamic content handling. The framework’s regular updates and extensive documentation continue to support a thriving community around it For a comprehensive list of versions and release notes, Vercel’s official documentation is an excellent resource. Next.js is a powerful and flexible React framework that has quickly become popular among developers for building server-side rendered and static web applications. Created by Vercel, Next.js simplifies the process of developing modern web applications with its robust feature set. In this article, we’ll explore the key concepts of Next.js, its features, and how to get started.        </p>
        <h1 className="croll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0">Development History of NextJS</h1>
        <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3'>Next.js was first released as an open-source project on GitHub on October 25, 2016.[3] It was originally developed based on six principles: out-of-the-box functionality requiring no setup, JavaScript everywhere, all functions are written in JavaScript, automatic code-splitting and server-rendering, configurable data-fetching, anticipating requests, and simplifying deployment.[17]
        Next.js 2.0 was announced in March 2017 including several improvements that made it easier to work with small websites. It also increased the build efficiency and improved the scalability of the hot-module replacement feature.[18]
        Version 7.0 was released in September 2018 with improved error handling and support for React's context API for improved dynamic route handling. This was also the first version to upgrade to Webpack 4.[19]
        Version 8.0 was released in February 2019 and was the first version to offer serverless deployment of applications, in which the code is split up into lambda functions that are run on demand. The version also reduced the time and resources required for static exports and improved prefetch performance.[20]
        Version 9.3, announced in March 2020, included various optimizations and global Sass and CSS module support.[21]
        On July 27, 2020 Next.js version 9.5 was announced, adding new capabilities including incremental static regeneration, rewrites, and redirect support.[22]
        On June 15, 2021 Next.js version 11 was released, introducing among others: Webpack 5 support, preview of real-time collaborative coding functionality "Next.js Live", and experimental function of automatic conversion from Create React App to Next.js compatible form "Create React App Migration".[23]
        On October 26, 2021, Next.js 12 was released, adding a Rust compiler, making the compilation faster, AVIF support, Edge Functions & Middleware, and Native ESM & URL Imports.[24]
        On October 26, 2022, Vercel released Next.js 13. This major release brought about a new routing pattern in beta, with the addition of the App Router that includes support for layouts, React Server Components, streaming, and a new set of data fetching methods. Furthermore, Vercel announced a new toolchain for front-end development called Turbo, including Turbopack as a successor to Webpack, Turborepo for incremental build systems.[25]
        In May 2023, Vercel released Next.js 13.4. This brought with it the stable version of App Router, which allows developers to use it in production.[26]
        In October 2023, Vercel released Next.js 14, which comes with improved memory management with using edge runtime.[27]</p>
        <h1  className="scroll-m-20 border-b lg:pb-2 lg:text-2xl text-xl font-semibold tracking-tight first:mt-0"> Releases Date of all Versions</h1>
        <p  className='lg:leading-7 lg:text-[16px] text-[12px] lg:[&:not(:first-child)]:mt-6 mb-3 '>
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 1.0.1 </span>Released on November 4 , 2016 < br/>
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 2.0.0 </span>Released on March 27 , 2017 < br/>
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 3.0.1 </span>Released on August 8 , 2017 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 4.0.0 </span>Released on September 28 , 2017 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 5.0.0 </span>Released on February 6 , 2018 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 6.0.0 </span>Released on March 31 , 2018 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 7.0.0 </span>Released on August 28 , 2018 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> 8.0.0 </span>Released on January 2 , 2019 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v9.0.0</span> Released on July 8 , 2019 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v10.0.0</span> Released on October 27 , 2020 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v11.0.0</span> Released on June 15 , 2021 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v12.0.0</span> Released on October 26 , 2021 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v13.0.0</span> Released on October 27 , 2022 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v14.0.0</span> Released on October 26 , 2023 < br/> 
            Nextjs <span className='text-xl mb-2 font-extrabold text-center text-myverydarkpink dark:text-white md:text-xl lg:text-[13px] text-black'> v15.0.0</span> Released on May 29 , 2024 < br/> 

   {/* Nextjs 1.0.2 Released date November 4 , 2016 < br/>
            Nextjs 1.1.0 Released date November 5 , 2016 < br/>
            Nextjs 1.1.1 Released date November 6 , 2016 < br/>
            Nextjs 1.1.2 Released date November 18 , 2016 < br/>
            Nextjs 1.2.0 Released date December 2 , 2016 < br/>
            Nextjs 1.2.1 Released date December 2 , 2016 < br/>
            Nextjs 1.2.2 Released date December 2 , 2016 < br/>
            Nextjs 1.2.3 Released date December 21 , 2016 < br/> */}
  {/* Nextjs 2.0.1 Released date March 31 , 2017 < br/>
            Nextjs 2.1.0 Released date April 6 , 2017 < br/>
            Nextjs 2.1.1 Released date April 8 , 2017 < br/>
            Nextjs 2.2.0 Released date April 24 , 2017 < br/>
            Nextjs 2.3.0 Released date May 4 , 2017 < br/>
            Nextjs 2.3.1 Released date May 5 , 2017 < br/>
            Nextjs 2.3.2 Released date May 17 , 2017 < br/>
            Nextjs 2.4.0 Released date May 17 , 2017 < br/>
            Nextjs 2.4.1 Released date June 2 , 2017 < br/>
            Nextjs 2.4.2 Released date June 6 , 2017 < br/>
            Nextjs 2.4.3 Released date June 7 , 2017 < br/> 
            Nextjs 2.4.4 Released date June 16 , 2017 < br/> 
            Nextjs 2.4.5 Released date June 26 , 2017 < br/> 
            Nextjs 2.4.6 Released date June 29 , 2017 < br/> 
            Nextjs 2.4.7 Released date July 9 , 2017 < br/> 
            Nextjs 2.4.8 Released date July 24 , 2017 < br/> 
            Nextjs 2.4.9 Released date July 28 , 2017 < br/>  */}
 {/* Nextjs 3.0.3 Released date August 8 , 2017 < br/> 
            Nextjs 3.0.4 Released date August 16 , 2017 < br/> 
            Nextjs 3.0.5 Released date August 17 , 2017 < br/> 
            Nextjs 3.0.6 Released date August 17 , 2017 < br/> 
            Nextjs 3.1.0 Released date August 30 , 2017 < br/> 
            Nextjs 3.2.0 Released date August 30 , 2017 < br/>  */}
        </p>
        </div>
    </div>
  )
}

export default page
