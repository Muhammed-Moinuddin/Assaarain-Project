import React from 'react';
import logo from '../assets/assarainfoods.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    // <header className="w-full flex items-center justify-between px-4 py-3 md:px-14 bg-white shadow-md border border-b-customGrey">
    <header className="flex flex-col justify-between sticky top-0 bg-white">

      {/* Logo Section */}
      <div className='flex md:flex-row justify-between w-full py-2 px-12 md:px-4 gap-4 border-b border-customGrey/40'>
        <div className="flex items-center">
          <img
            src={logo}
            className="h-16"
          />
        </div>
                {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div className=" hidden md:flex items-center space-x-4">
                {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-sm font-medium text-customGrey font-openSans px-6">
            <a href="#" className="hover:text-customLightblue">For Suppliers</a>
            <a href="#" className="hover:text-customLightblue">For Retailer</a>
            <a href="#" className="hover:text-customLightblue">Location</a>
          </nav>
          <button className='border border-customLightblue text-sm text-customLightblue px-8 py-2 font-openSans font-bold hover:text-white hover:bg-customLightblue'>
            REQUEST A QUOTE
          </button>
        </div>
      </div>
      <div className='hidden md:flex flex-col md:flex-row justify-between w-full lg:px-12 gap-4 md:px-4'>
      <div>
        <nav className="hidden md:flex lg:space-x-10 md:space-x-6 text-sm font-normal text-customGrey font-openSans px-6">
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            Home
          </a>
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            About Us
          </a>
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            What We Do
          </a>
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            Brands
          </a>
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            News
          </a>
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            Careers
          </a>
          <a
            href="#"
            className="py-4 border-b-4 border-transparent hover:border-customLightblue hover:font-bold hover:text-customDarkblue active:border-customLightblue"
          >
            Contact Us
          </a>
        </nav>
      </div>
      <div className='my-auto'>
        <MagnifyingGlassIcon className='h-8 w-8 text-gray-500' />
      </div>
    </div>
    </header>
  );
};

export default Header;
