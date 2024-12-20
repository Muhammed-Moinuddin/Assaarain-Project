import React from 'react';
import logo from '../assets/assarainfoods.png'

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 md:px-10 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          
          className="h-8"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About Us</a>
        <a href="#" className="hover:text-blue-500">What We Do</a>
        <a href="#" className="hover:text-blue-500">Brands</a>
        <a href="#" className="hover:text-blue-500">News</a>
        <a href="#" className="hover:text-blue-500">Careers</a>
        <a href="#" className="hover:text-blue-500">Contact Us</a>
      </nav>

      {/* Request a Quote Button */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="#"
          className="px-4 py-2 text-sm font-semibold text-blue-500 bg-white hover:bg-blue-600 hover:text-white rounded border-solid border-2 border-blue-500"
        >
          Request a Quote
        </a>
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
              d="M15.75 15.75L21 21m-6.75-5.25a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
            />
          </svg>
        </button>
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
    </header>
  );
};

export default Header;
