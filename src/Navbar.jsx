// src/components/Navbar.js

import React, { useState } from 'react';
import logo from './assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1b236d] absolute top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
                    <img src={logo} className='w-12' alt="" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 font-head flex items-baseline space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Services</a>
                <a href="#" className="text-white">Contact</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block ' : 'hidden'} md:hidden `}>
        <div className="px-2 pt-2 pb-3 text-center font-head space-y-1 sm:px-3">
          <a href="#" className="text-white block">Home</a>
          <a href="#" className="text-white block">About</a>
          <a href="#" className="text-white block">Services</a>
          <a href="#" className="text-white block">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
