'use client';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const categories = [
  {
    name: 'Cultural',
    events: {
      gold: [
        { title: 'Panache', image: '/events/panache.jpg' },
        { title: 'Band Jam', image: '/events/bandjam.jpg' },
      ],
      silver: [
        { title: 'Dance Battle', image: '/events/dancebattle.jpg' },
        { title: 'Nukkad Natak', image: '/events/nukkadnatak.jpg' },
      ],
    },
  },
  {
    name: 'Technical',
    events: {
      gold: [
        { title: 'Hackathon', image: '/events/hackathon.jpg' },
        { title: 'Tech Quiz', image: '/events/techquiz.jpg' },
      ],
      silver: [
        { title: 'Code Golf', image: '/events/codegolf.jpg' },
        { title: 'Robo Race', image: '/events/roborace.jpg' },
      ],
    },
  },
  // Add Management, Design, Literary, etc. similarly
];

export default function EventsPage() {
  return (
    <div className="min-h-screen text-white font-sans flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400">
        Our Events
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center">
        Explore the diverse range of events at Sabrang '25.
      </p>
      {/* Add event listings here */}
    </div>
  );
}
