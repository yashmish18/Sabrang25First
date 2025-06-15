'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../public/images/Logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-6 pb-4 px-4 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">

        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="Sabrang Logo" width={50} height={30} className="mr-2" />
          <h3 className="text-2xl font-bold text-white">Sabrang '25</h3>
        </div>

        {/* Demo Map - Minimized */}
        <div className="w-full max-w-xl">
          <h4 className="text-md font-semibold text-center text-gray-300 mb-2">Find Us</h4>
          <div className="relative w-full h-40 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900/80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12099.988296716075!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzQzLjEiTiA3NMKwMDEyJzQ5LjMiVw!5e0!3m2!1sen!2sus!4v1628000000000!5m2!1sen!2sus"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Demo Map Location"
            ></iframe>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-base font-semibold">
              DEMO MAP
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-2">
          <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-md transition-all duration-300 transform hover:scale-110"><FaFacebookF className="text-white w-4 h-4" /></a>
          <a href="#" className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md transition-all duration-300 transform hover:scale-110"><FaInstagram className="text-white w-4 h-4" /></a>
          <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 shadow-md transition-all duration-300 transform hover:scale-110"><FaTwitter className="text-white w-4 h-4" /></a>
          <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-md transition-all duration-300 transform hover:scale-110"><FaLinkedinIn className="text-white w-4 h-4" /></a>
        </div>

      </div>

      <div className="text-center text-gray-400 text-xs mt-6">
        &copy; {new Date().getFullYear()} Sabrang '25. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
