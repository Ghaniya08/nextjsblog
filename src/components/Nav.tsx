import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div>
      <div className="navbar bg-black text-white hover:text-white after:text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black hover:text-black after:text-black ">
        <li><Link href={"/"}>Home</Link></li>
        <li>
        <Link href={"/blog"}>Blog</Link>
        </li>
        <li><Link href={"/about"}>About</Link></li>
      </ul>
    </div>
    <h1 className="btn btn-ghost w-9 h-4 fontstyle text-white hover:text-white after:text-white pl-20 text-2xl">
        {/* <Image src={logo} alt='logo'/> */}
        Nextjs
    </h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white hover:text-white after:text-white">
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/blog"}>Blog</Link></li>
      <li><Link href={"/about"}>About</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
<Link href={"/contact"}>  <button className="btn">Contact me</button></Link>  </div>
</div>
    </div>
  )
}

export default Nav
