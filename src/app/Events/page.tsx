'use client';
import { useState } from 'react';
import Image from 'next/image';
import EventCard from './EventCard';

const categories = [
  {
    name: 'Cultural',
    events: [
      { title: 'Panache', image: '/events/panache.jpg', description: 'A grand fashion show showcasing creativity and style.', date: 'March 15, 2025', prize: '₹50,000', registration: 'Team of 4-6' },
      { title: 'Band Jam', image: '/events/bandjam.jpg', description: 'Battle of the bands - rock, metal, and fusion.', date: 'March 16, 2025', prize: '₹40,000', registration: 'Team of 4-8' },
      { title: 'Fashion Show', image: '/events/fashionshow.jpg', description: 'Showcase your unique style and creativity.', date: 'March 17, 2025', prize: '₹35,000', registration: 'Team of 3-5' },
      { title: 'Street Play', image: '/events/streetplay.jpg', description: 'Express social issues through street theater.', date: 'March 18, 2025', prize: '₹30,000', registration: 'Team of 8-12' },
      { title: 'Dance Battle', image: '/events/dancebattle.jpg', description: 'Show your moves in this electrifying dance competition.', date: 'March 19, 2025', prize: '₹25,000', registration: 'Solo/Duo' },
      { title: 'Nukkad Natak', image: '/events/nukkadnatak.jpg', description: 'Street play competition with social messages.', date: 'March 20, 2025', prize: '₹20,000', registration: 'Team of 6-10' },
      { title: 'Solo Singing', image: '/events/solosinging.jpg', description: 'Showcase your vocal talent in this solo competition.', date: 'March 21, 2025', prize: '₹15,000', registration: 'Individual' },
      { title: 'Group Dance', image: '/events/groupdance.jpg', description: 'Synchronized group dance performance.', date: 'March 22, 2025', prize: '₹20,000', registration: 'Team of 6-12' },
    ],
  },
  {
    name: 'Technical',
    events: [
      { title: 'Hackathon', image: '/events/hackathon.jpg', description: '24-hour coding competition to solve real-world problems.', date: 'March 15, 2025', prize: '₹1,00,000', registration: 'Team of 2-4' },
      { title: 'Tech Quiz', image: '/events/techquiz.jpg', description: 'Test your knowledge in technology and science.', date: 'March 16, 2025', prize: '₹50,000', registration: 'Team of 2' },
      { title: 'Robo Wars', image: '/events/robowars.jpg', description: 'Battle of the robots in an epic arena.', date: 'March 17, 2025', prize: '₹75,000', registration: 'Team of 3-4' },
      { title: 'Circuit Design', image: '/events/circuitdesign.jpg', description: 'Design and implement innovative circuits.', date: 'March 18, 2025', prize: '₹40,000', registration: 'Team of 2-3' },
      { title: 'Code Golf', image: '/events/codegolf.jpg', description: 'Write the shortest possible code to solve problems.', date: 'March 19, 2025', prize: '₹25,000', registration: 'Individual' },
      { title: 'Robo Race', image: '/events/roborace.jpg', description: 'Race your autonomous robot through obstacles.', date: 'March 20, 2025', prize: '₹30,000', registration: 'Team of 2-3' },
      { title: 'Web Dev', image: '/events/webdev.jpg', description: 'Build innovative web applications.', date: 'March 21, 2025', prize: '₹35,000', registration: 'Team of 2-3' },
      { title: 'App Dev', image: '/events/appdev.jpg', description: 'Create mobile applications for real-world problems.', date: 'March 22, 2025', prize: '₹40,000', registration: 'Team of 2-3' },
    ],
  },
  {
    name: 'Management',
    events: [
      { title: 'Business Plan', image: '/events/businessplan.jpg', description: 'Present your innovative business ideas to industry experts.', date: 'March 15, 2025', prize: '₹60,000', registration: 'Team of 3-4' },
      { title: 'Case Study', image: '/events/casestudy.jpg', description: 'Analyze and solve real business case studies.', date: 'March 16, 2025', prize: '₹45,000', registration: 'Team of 2-3' },
      { title: 'Startup Pitch', image: '/events/startuppitch.jpg', description: 'Pitch your startup idea to potential investors.', date: 'March 17, 2025', prize: '₹55,000', registration: 'Team of 2-4' },
      { title: 'Stock Trading', image: '/events/stocktrading.jpg', description: 'Virtual stock market trading competition.', date: 'March 18, 2025', prize: '₹40,000', registration: 'Individual' },
      { title: 'Stock Market', image: '/events/stockmarket.jpg', description: 'Learn and compete in stock market analysis.', date: 'March 19, 2025', prize: '₹25,000', registration: 'Team of 2' },
      { title: 'Marketing', image: '/events/marketing.jpg', description: 'Create innovative marketing campaigns.', date: 'March 20, 2025', prize: '₹30,000', registration: 'Team of 3-4' },
      { title: 'HR Challenge', image: '/events/hrchallenge.jpg', description: 'Solve real HR management challenges.', date: 'March 21, 2025', prize: '₹20,000', registration: 'Team of 2-3' },
      { title: 'Business Quiz', image: '/events/businessquiz.jpg', description: 'Test your business and management knowledge.', date: 'March 22, 2025', prize: '₹25,000', registration: 'Team of 2' },
    ],
  },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('Cultural');

  return (
    <div className="min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400 text-center">
          Our Events
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center mb-12 mx-auto">
          Explore the diverse range of events at Sabrang '25.
        </p>
        <div className="w-full max-w-7xl mx-auto mb-12">
          <div className="flex justify-center space-x-4 md:space-x-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.name
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories
              .find((category) => category.name === activeCategory)
              ?.events.slice(0, 6).map((event, idx) => {
                let outline: 'gold' | 'silver' | undefined = undefined;
                if (idx < 3) outline = 'gold';
                else if (idx < 6) outline = 'silver';
                return <EventCard key={event.title} event={event} outline={outline} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}