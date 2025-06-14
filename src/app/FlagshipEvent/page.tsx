import React from 'react';

const FlagshipEvent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400">
        Flagship Event
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center">
        Details about the main event of Sabrang '25.
      </p>
      {/* Add flagship event details here */}
    </div>
  );
};

export default FlagshipEvent; 