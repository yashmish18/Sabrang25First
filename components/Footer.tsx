'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../public/images/Logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/5  backdrop-blur-xs border border-white/20 text-white pt-6 pb-4 px-4 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto flex justify-between items-start">

        <div className="flex flex-col items-end space-y-30">
          {/* Logo */}
          <div className="flex items-center justify-end mr-[25px]">
            <Image src={Logo} alt="Sabrang Logo" width={70} height={70} className="mr-2" />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2 justify-end mt-[10px]">
            <a href="#" className="text-white hover:text-[#3b5998]"><FaFacebookF className="w-3 h-6" /></a>
            <a href="#" className="text-white hover:text-[#C13584]"><FaInstagram className="w-5 h-6" /></a>
            <a href="#" className="text-white hover:text-[#1DA1F2]"><FaTwitter className="w-5 h-6" /></a>
            <a href="#" className="text-white hover:text-[#0077B5]"><FaLinkedinIn className="w-5 h-6" /></a>
          </div>
        </div>
        {/* Left Section: Location Map */}
        <div className="w-full max-w-xl">
          <div className="relative w-full h-60 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900/80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.105288737097!2d75.64772927553119!3d26.836603276692568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1749983502958!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JK Lakshmipat University Location"
            ></iframe>
          </div>
        </div>

        {/* Right Section: Logo and Social Icons */}

      </div>

      <div className="text-center text-gray-400 text-xs mt-6">
        &copy; {new Date().getFullYear()} Sabrang '25. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
