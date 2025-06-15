'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/images/Logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 z-50 flex items-center justify-between pl-25 pr-0">
      {/* Left: Logo */}
      <div className="flex items-center ml-14">
        <Image src={Logo} alt="Logo" width={70} height={70} />
      </div>

      {/* Center: Main Navbar Links */}
      <div className="flex items-center justify-center left">
        <div className="flex items-center justify-between w-fit px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-lg">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white font-medium hover:text-yellow-300 transition">Home</a>
            <a href="/Events" className="text-white font-medium hover:text-yellow-300 transition">Events</a>
            
            <a href="/Gallery" className="text-white font-medium hover:text-yellow-300 transition">Gallery</a>
            <a href="/Team" className="text-white font-medium hover:text-yellow-300 transition">Team</a>
            <a href="/FAQ" className="text-white font-medium hover:text-yellow-300 transition">FAQ</a>
            <a href="/Contact" className="text-white font-medium hover:text-yellow-300 transition">Contact</a>
          </div>

          {/* Hamburger: Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="md:hidden mt-20 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-4 shadow-lg w-11/12 absolute right-0 left-0 mx-auto">
            <a href="/" className="block text-white py-2 hover:text-yellow-300">Home</a>
            <a href="/Events" className="block text-white py-2 hover:text-yellow-300">Events</a>
           
            <a href="/Gallery" className="block text-white py-2 hover:text-yellow-300">Gallery</a>
            <a href="/Team" className="block text-white py-2 hover:text-yellow-300">Team</a>
            <a href="/FAQ" className="block text-white py-2 hover:text-yellow-300">FAQ</a>
            <a href="/Contact" className="block text-white py-2 hover:text-yellow-300">Contact</a>
            <a href="/Login" className="block mt-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 rounded-full">Login</a>
            <a href="/Signup" className="block mt-2 bg-gradient-to-r from-green-400 to-cyan-400 text-white text-center py-2 rounded-full">Register</a>
          </div>
        )}
      </div>

      {/* Right: Login/Register Buttons */}
      <div className="flex items-center space-x-4 mr-14">
        <a href="/Login" className="inline-block bg-white hover:bg-[#333333] text-black hover:text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">Login</a>
        <a href="/Signup" className="inline-block bg-white hover:bg-[#333333] text-black hover:text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
