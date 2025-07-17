import React from 'react'
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 z-50 rounded-xl fixed top-5 w-[95%] px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='/products'>Products</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img className='h-6' src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li className='px-2'><a href='/'>Home</a></li>
        <li className='px-2'><a href='#about'>About</a></li>
        <li className='px-2'><a href='/products'>Products</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='#contact' className="btn bg-[#46C70090] hover:bg-[#46C70060]">Contact Us!</a>
  </div>
</div>
  )
}

export default Navbar