'use client';

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wider">
          SABRANG
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">Home</a>
          <a href="/Events" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">Events</a>
          <a href="/FlagshipEvent" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">Flagship Event</a>
          <a href="/Gallery" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">Gallery</a>
          <a href="/Team" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">Team</a>
          <a href="/AboutUs" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">About Us</a>
          <a href="/Contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out text-lg font-medium">Contact</a>
          <a href="/Login" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">Login</a>
          <a href="/Signup" className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-cyan-400 hover:to-green-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
            Register
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg pb-4">
          <a href="/" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">Home</a>
          <a href="/Events" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">Events</a>
          <a href="/FlagshipEvent" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">Flagship Event</a>
          <a href="/Gallery" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">Gallery</a>
          <a href="/Team" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">Team</a>
          <a href="/AboutUs" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">About Us</a>
          <a href="/Contact" className="block text-gray-300 hover:text-white px-4 py-2 text-lg font-medium">Contact</a>
          <div className="flex flex-col items-center mt-4 space-y-3">
            <a href="/Login" className="w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Login
            </a>
            <a href="/Signup" className="w-3/4 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-cyan-400 hover:to-green-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;