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
    <div className="bg-black min-h-screen text-white px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
      >
        Discover Our Events
      </motion.h1>

      <p className="text-center text-lg mt-4 mb-10 text-gray-300">
        25+ Events | <span className="text-green-400">Prize Pool INR 3,00,000+</span>
      </p>

      {categories.map((category, i) => (
        <section key={i} className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 inline-block px-4">
            {category.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {category.events.gold.map((event, index) => (
              <EventCard key={index} event={event} glow="gold" />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.events.silver.map((event, index) => (
              <EventCard key={index} event={event} glow="silver" />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
