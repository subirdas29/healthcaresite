import React from 'react';
import logo from '../../assets/logo/logo-dark.png';
import arrow from '../../assets/logo/Arrow-1.png';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
          <li>
            <a>Services</a>
           
          </li>
          <li><a>Blog</a></li>
          <li><a>About us</a></li>
        </ul>
      </div>
      <img src={logo} alt=""  className='ml-20'/>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
          <li>
            <a>Services</a>
           
          </li>
          <li><a>Blog</a></li>
          <li><a>About us</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <button className="outline outline-1 outline-offset-2 px-3 py-1 rounded mr-20 flex items-center">
        <p className='mr-2'>Appointment</p>
      
       <img src={arrow} className='w-3 h-3' alt="" />
      
    </button>
    </div>
  </div>
  )
}

export default Navbar
