import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400">
        About Us
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center">
        Learn more about Sabrang '25, its vision, and its mission.
      </p>
      {/* Add About Us content here */}
    </div>
  );
};

export default AboutUs; 