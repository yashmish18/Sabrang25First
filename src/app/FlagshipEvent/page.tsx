'use client'
import React, { useRef, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Literary Confluence',
    date: 'November 8, 2025',
    description: 'Engage with renowned authors and delve into the world of literature.',
    image: 'https://via.placeholder.com/320x400?text=Literary+Confluence',
  },
  {
    id: 2,
    title: 'Sabrang Opening Gala',
    date: 'June 15, 2025',
    description: 'An unforgettable night featuring star performances and dazzling visuals.',
    image: 'https://via.placeholder.com/320x400?text=Sabrang+Gala',
  },
  {
    id: 3,
    title: 'Cultural Extravaganza',
    date: 'July 10, 2025',
    description: 'A vibrant showcase of diverse arts and traditions.',
    image: 'https://via.placeholder.com/320x400?text=Cultural+Extravaganza',
  },
  {
    id: 4,
    title: 'Tech Innovation Summit',
    date: 'August 5, 2025',
    description: 'Explore the latest in technology and innovation with industry leaders.',
    image: 'https://via.placeholder.com/320x400?text=Tech+Summit',
  },
  {
    id: 5,
    title: 'Artistic Showcase',
    date: 'September 1, 2025',
    description: 'A vibrant display of contemporary and traditional art forms.',
    image: 'https://via.placeholder.com/320x400?text=Art+Showcase',
  },
  {
    id: 6,
    title: 'Musical Gala',
    date: 'October 20, 2025',
    description: 'An evening of captivating melodies and performances by top artists.',
    image: 'https://via.placeholder.com/320x400?text=Musical+Gala',
  },
  {
    id: 7,
    title: 'Fashion Fiesta',
    date: 'November 1, 2025',
    description: 'A dazzling display of style and creativity from emerging designers.',
    image: 'https://via.placeholder.com/320x400?text=Fashion+Fiesta',
  },
  {
    id: 8,
    title: 'Culinary Arts Festival',
    date: 'December 10, 2025',
    description: 'Savor exquisite flavors and culinary masterpieces from around the world.',
    image: 'https://via.placeholder.com/320x400?text=Culinary+Fest',
  },
  {
    id: 9,
    title: 'Sports Extravaganza',
    date: 'January 15, 2026',
    description: 'Witness thrilling competitions and celebrate athletic prowess.',
    image: 'https://via.placeholder.com/320x400?text=Sports+Extravaganza',
  },
  {
    id: 10,
    title: 'Film Premiere Night',
    date: 'February 28, 2026',
    description: 'Exclusive screening of independent films and interaction with filmmakers.',
    image: 'https://via.placeholder.com/320x400?text=Film+Premiere',
  },
  {
    id: 11,
    title: 'Dance Battle Showcase',
    date: 'March 10, 2026',
    description: 'Electrifying dance performances and fierce competition.',
    image: 'https://via.placeholder.com/320x400?text=Dance+Battle',
  },
  {
    id: 12,
    title: 'Photography Exhibition',
    date: 'April 5, 2026',
    description: 'A captivating display of visual stories captured by talented photographers.',
    image: 'https://via.placeholder.com/320x400?text=Photo+Exhibition',
  },
  {
    id: 13,
    title: 'Poetry Slam',
    date: 'May 1, 2026',
    description: 'An evening of powerful words and expressive performances by poets.',
    image: 'https://via.placeholder.com/320x400?text=Poetry+Slam',
  },
  {
    id: 14,
    title: 'Startup Pitch Competition',
    date: 'June 10, 2026',
    description: 'Innovative ideas presented by budding entrepreneurs.',
    image: 'https://via.placeholder.com/320x400?text=Startup+Pitch',
  },
  {
    id: 15,
    title: 'Traditional Arts Workshop',
    date: 'July 20, 2026',
    description: 'Hands-on experience with ancient crafts and art forms.',
    image: 'https://via.placeholder.com/320x400?text=Traditional+Arts',
  },
  {
    id: 16,
    title: 'Gaming Championship',
    date: 'August 1, 2026',
    description: 'Intense competition for gamers to showcase their skills.',
    image: 'https://via.placeholder.com/320x400?text=Gaming+Championship',
  },
  {
    id: 17,
    title: 'Science Fair',
    date: 'September 5, 2026',
    description: 'A display of innovative scientific projects and discoveries.',
    image: 'https://via.placeholder.com/320x400?text=Science+Fair',
  },
  {
    id: 18,
    title: 'Debate Championship',
    date: 'October 10, 2026',
    description: 'Sharp minds clashing in a battle of wits and arguments.',
    image: 'https://via.placeholder.com/320x400?text=Debate+Championship',
  },
  {
    id: 19,
    title: 'Robotics Challenge',
    date: 'November 15, 2026',
    description: 'Compete in an exciting robotics challenge and showcase your engineering skills.',
    image: 'https://via.placeholder.com/320x400?text=Robotics+Challenge',
  },
  {
    id: 20,
    title: 'Culinary Masterclass',
    date: 'December 1, 2026',
    description: 'Learn the secrets of gourmet cooking from renowned chefs.',
    image: 'https://via.placeholder.com/320x400?text=Culinary+Masterclass',
  },
  {
    id: 21,
    title: 'Digital Art Workshop',
    date: 'January 10, 2027',
    description: 'Explore digital painting and graphic design techniques.',
    image: 'https://via.placeholder.com/320x400?text=Digital+Art',
  },
  {
    id: 22,
    title: 'Environmental Awareness Summit',
    date: 'February 20, 2027',
    description: 'Discussions and initiatives focused on sustainability and ecological preservation.',
    image: 'https://via.placeholder.com/320x400?text=Environment+Summit',
  },
  {
    id: 23,
    title: 'Stand-up Comedy Night',
    date: 'March 5, 2027',
    description: 'An evening filled with laughter and hilarious performances.',
    image: 'https://via.placeholder.com/320x400?text=Comedy+Night',
  },
  {
    id: 24,
    title: 'Historical Reenactment',
    date: 'April 15, 2027',
    description: 'Step back in time with live reenactments of historical events.',
    image: 'https://via.placeholder.com/320x400?text=History+Reenactment',
  },
];

const FlagshipEvent: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let lastScrollTime = 0;
    const scrollCooldown = 0; // Set to 0 for immediate response

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); 

      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;
      lastScrollTime = now;

      const scrollAmount = event.deltaY * 50; // Drastically increased scroll sensitivity for maximum effect
      
      scrollContainer.scrollLeft += scrollAmount;
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []); // Dependencies array now empty as state is not used for scroll logic

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Flagship Events</h2>
        <div
          ref={scrollContainerRef}
          className="relative h-[600px] flex overflow-x-auto scrollbar-hide space-x-8 p-4 justify-start items-center" // Changed to overflow-x-auto and space-x-8 for horizontal layout
          style={{ scrollBehavior: 'smooth' }}
        >
          {events.map((event, index) => {
            // Simplified rendering logic for horizontal display
            return (
              <div
                key={event.id}
                className={`flex-none w-80 bg-gray-800 rounded-lg shadow-lg flex flex-col`} // flex-none to prevent shrinking, w-80 for fixed width
              >
                <div className="w-full h-96 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <p className="text-gray-400">{event.date}</p>
                    <p className="text-gray-300 mt-2">{event.description}</p>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlagshipEvent;