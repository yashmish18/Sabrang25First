'use client';

import React from 'react';

const Team = ({ className }: { className?: string }) => {
  return (
    <div className={`min-h-screen text-white font-sans flex flex-col items-center justify-center px-4 py-20 ${className}`}>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400">
        Our Team
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center">
        Meet the incredible individuals who make Sabrang '25 possible.
      </p>
      {/* Add team member profiles here */}
    </div>
  );
}
export default Team;