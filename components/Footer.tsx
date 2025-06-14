'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-purple-400">Sabrang '25</h3>
          <p className="text-gray-400 text-sm mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;