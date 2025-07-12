'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const normalEvents = [
  { id: 1, title: 'Panache', category: 'Cultural', image: '/images/building-6011756_1280.jpg', description: 'A grand fashion show showcasing creativity and style.', date: 'March 15, 2025', prize: '₹50,000', registration: 'Team of 4-6' },
  { id: 2, title: 'Band Jam', category: 'Cultural', image: '/events/bandjam.jpg', description: 'Battle of the bands - rock, metal, and fusion.', date: 'March 16, 2025', prize: '₹40,000', registration: 'Team of 4-8' },
  { id: 3, title: 'Fashion Show', category: 'Cultural', image: '/events/fashionshow.jpg', description: 'Showcase your unique style and creativity.', date: 'March 17, 2025', prize: '₹35,000', registration: 'Team of 3-5' },
  { id: 4, title: 'Street Play', category: 'Cultural', image: '/events/streetplay.jpg', description: 'Express social issues through street theater.', date: 'March 18, 2025', prize: '₹30,000', registration: 'Team of 8-12' },
  { id: 5, title: 'Dance Battle', category: 'Cultural', image: '/events/dancebattle.jpg', description: 'Show your moves in this electrifying dance competition.', date: 'March 19, 2025', prize: '₹25,000', registration: 'Solo/Duo' },
  { id: 6, title: 'Nukkad Natak', category: 'Cultural', image: '/events/nukkadnatak.jpg', description: 'Street play competition with social messages.', date: 'March 20, 2025', prize: '₹20,000', registration: 'Team of 6-10' },
  { id: 7, title: 'Solo Singing', category: 'Cultural', image: '/events/solosinging.jpg', description: 'Showcase your vocal talent in this solo competition.', date: 'March 21, 2025', prize: '₹15,000', registration: 'Individual' },
  { id: 8, title: 'Group Dance', category: 'Cultural', image: '/events/groupdance.jpg', description: 'Synchronized group dance performance.', date: 'March 22, 2025', prize: '₹20,000', registration: 'Team of 6-12' },
  { id: 9, title: 'Hackathon', category: 'Technical', image: '/events/hackathon.jpg', description: '24-hour coding competition to solve real-world problems.', date: 'March 15, 2025', prize: '₹1,00,000', registration: 'Team of 2-4' },
  { id: 10, title: 'Tech Quiz', category: 'Technical', image: '/events/techquiz.jpg', description: 'Test your knowledge in technology and science.', date: 'March 16, 2025', prize: '₹50,000', registration: 'Team of 2' },
  { id: 11, title: 'Robo Wars', category: 'Technical', image: '/events/robowars.jpg', description: 'Battle of the robots in an epic arena.', date: 'March 17, 2025', prize: '₹75,000', registration: 'Team of 3-4' },
  { id: 12, title: 'Circuit Design', category: 'Technical', image: '/events/circuitdesign.jpg', description: 'Design and implement innovative circuits.', date: 'March 18, 2025', prize: '₹40,000', registration: 'Team of 2-3' },
  { id: 13, title: 'Code Golf', category: 'Technical', image: '/events/codegolf.jpg', description: 'Write the shortest possible code to solve problems.', date: 'March 19, 2025', prize: '₹25,000', registration: 'Individual' },
  { id: 14, title: 'Robo Race', category: 'Technical', image: '/events/roborace.jpg', description: 'Race your autonomous robot through obstacles.', date: 'March 20, 2025', prize: '₹30,000', registration: 'Team of 2-3' },
  { id: 15, title: 'Web Dev', category: 'Technical', image: '/events/webdev.jpg', description: 'Build innovative web applications.', date: 'March 21, 2025', prize: '₹35,000', registration: 'Team of 2-3' },
  { id: 16, title: 'App Dev', category: 'Technical', image: '/events/appdev.jpg', description: 'Create mobile applications for real-world problems.', date: 'March 22, 2025', prize: '₹40,000', registration: 'Team of 2-3' },
  { id: 17, title: 'Business Plan', category: 'Management', image: '/events/businessplan.jpg', description: 'Present your innovative business ideas to industry experts.', date: 'March 15, 2025', prize: '₹60,000', registration: 'Team of 3-4' },
  { id: 18, title: 'Case Study', category: 'Management', image: '/events/casestudy.jpg', description: 'Analyze and solve real business case studies.', date: 'March 16, 2025', prize: '₹45,000', registration: 'Team of 2-3' },
  { id: 19, title: 'Startup Pitch', category: 'Management', image: '/events/startuppitch.jpg', description: 'Pitch your startup idea to potential investors.', date: 'March 17, 2025', prize: '₹55,000', registration: 'Team of 2-4' },
  { id: 20, title: 'Stock Trading', category: 'Management', image: '/events/stocktrading.jpg', description: 'Virtual stock market trading competition.', date: 'March 18, 2025', prize: '₹40,000', registration: 'Individual' },
  { id: 21, title: 'Stock Market', category: 'Management', image: '/events/stockmarket.jpg', description: 'Learn and compete in stock market analysis.', date: 'March 19, 2025', prize: '₹25,000', registration: 'Team of 2' },
  { id: 22, title: 'Marketing', category: 'Management', image: '/events/marketing.jpg', description: 'Create innovative marketing campaigns.', date: 'March 20, 2025', prize: '₹30,000', registration: 'Team of 3-4' },
  { id: 23, title: 'HR Challenge', category: 'Management', image: '/events/hrchallenge.jpg', description: 'Solve real HR management challenges.', date: 'March 21, 2025', prize: '₹20,000', registration: 'Team of 2-3' },
  { id: 24, title: 'Business Quiz', category: 'Management', image: '/events/businessquiz.jpg', description: 'Test your business and management knowledge.', date: 'March 22, 2025', prize: '₹25,000', registration: 'Team of 2' },
];

const flagshipEvents = [
  { id: 101, title: 'Sabrang Grand Finale', category: 'Flagship', image: '/images/building-6011756_1280.jpg', description: 'The ultimate showcase of talent and innovation.', date: 'March 25, 2025', prize: '₹2,00,000', registration: 'Team of 4-6' },
  { id: 102, title: 'Innovation Summit', category: 'Flagship', image: '/events/hackathon.jpg', description: 'Present groundbreaking innovations to industry leaders.', date: 'March 26, 2025', prize: '₹1,50,000', registration: 'Team of 3-5' },
  { id: 103, title: 'Cultural Extravaganza', category: 'Flagship', image: '/events/fashionshow.jpg', description: 'A spectacular celebration of diverse cultures.', date: 'March 27, 2025', prize: '₹1,25,000', registration: 'Team of 6-10' },
];

const categories = ['All', 'Cultural', 'Technical', 'Management'];

export default function ParticipatePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNormalEvents, setSelectedNormalEvents] = useState<number[]>([]);
  const [selectedFlagshipEvent, setSelectedFlagshipEvent] = useState<number | null>(null);
  const [selectedOptionalEvents, setSelectedOptionalEvents] = useState<number[]>([]);
  const router = useRouter();

  const filteredNormalEvents = selectedCategory === 'All' 
    ? normalEvents 
    : normalEvents.filter(event => event.category === selectedCategory);

  const toggleNormalEvent = (eventId: number) => {
    if (selectedNormalEvents.includes(eventId)) {
      setSelectedNormalEvents(prev => prev.filter(id => id !== eventId));
    } else if (selectedNormalEvents.length < 2) {
      setSelectedNormalEvents(prev => [...prev, eventId]);
    }
  };

  const toggleFlagshipEvent = (eventId: number) => {
    setSelectedFlagshipEvent(selectedFlagshipEvent === eventId ? null : eventId);
  };

  const toggleOptionalEvent = (eventId: number) => {
    setSelectedOptionalEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const isFormValid = selectedNormalEvents.length === 2 && selectedFlagshipEvent !== null;

  const handleSubmit = () => {
    if (!isFormValid) {
      alert('Please select exactly 2 normal events and 1 flagship event.');
      return;
    }
    
    const allSelectedEvents = [...selectedNormalEvents, selectedFlagshipEvent, ...selectedOptionalEvents];
    console.log('Selected events:', allSelectedEvents);
    alert(`Registration successful! You have selected ${allSelectedEvents.length} events.`);
    router.push('/Events');
  };

  return (
    <div className="min-h-screen text-white font-sans bg-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400 text-center">
          Participate in Events
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center mb-12 mx-auto">
          Select your events to participate in Sabrang '25
        </p>

        {/* Requirements Info */}
        <div className="bg-purple-900/20 border border-purple-500 rounded-xl p-6 mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Participation Requirements</h2>
          <div className="grid md:grid-cols-3 gap-4 text-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
              <span>Normal Events (Mandatory)</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
              <span>Flagship Event (Mandatory)</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">∞</div>
              <span>Additional Events (Optional)</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 md:space-x-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Flagship Events Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Flagship Events (Select 1)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {flagshipEvents.map((event) => (
              <div
                key={event.id}
                className={`relative bg-gray-900 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedFlagshipEvent === event.id
                    ? 'border-purple-500 bg-purple-900/20'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => toggleFlagshipEvent(event.id)}
              >
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedFlagshipEvent === event.id
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-400'
                }`}>
                  {selectedFlagshipEvent === event.id && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-600">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    Prize: {event.prize}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {event.registration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Normal Events Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
            Normal Events (Select 2) - {selectedNormalEvents.length}/2
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredNormalEvents.map((event) => (
              <div
                key={event.id}
                className={`relative bg-gray-900 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedNormalEvents.includes(event.id)
                    ? 'border-purple-500 bg-purple-900/20'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => toggleNormalEvent(event.id)}
              >
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedNormalEvents.includes(event.id)
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-400'
                }`}>
                  {selectedNormalEvents.includes(event.id) && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    event.category === 'Cultural' ? 'bg-pink-600' :
                    event.category === 'Technical' ? 'bg-blue-600' :
                    'bg-green-600'
                  }`}>
                    {event.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    Prize: {event.prize}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {event.registration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Events Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
            Additional Events (Optional) - {selectedOptionalEvents.length} selected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {normalEvents.map((event) => (
              <div
                key={event.id}
                className={`relative bg-gray-900 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedOptionalEvents.includes(event.id)
                    ? 'border-green-500 bg-green-900/20'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => toggleOptionalEvent(event.id)}
              >
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOptionalEvents.includes(event.id)
                    ? 'border-green-500 bg-green-500'
                    : 'border-gray-400'
                }`}>
                  {selectedOptionalEvents.includes(event.id) && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    event.category === 'Cultural' ? 'bg-pink-600' :
                    event.category === 'Technical' ? 'bg-blue-600' :
                    'bg-green-600'
                  }`}>
                    {event.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>

                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    Prize: {event.prize}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {event.registration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
              isFormValid
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50 hover:bg-purple-700'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isFormValid 
              ? `Submit Registration (${selectedNormalEvents.length + 1 + selectedOptionalEvents.length} events)`
              : `Please select 2 normal events and 1 flagship event (${selectedNormalEvents.length}/2 normal, ${selectedFlagshipEvent ? '1' : '0'}/1 flagship)`
            }
          </button>
        </div>
      </div>
    </div>
  );
} 