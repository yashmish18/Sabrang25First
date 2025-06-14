'use client';
import React, { useRef, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const events: Event[] = new Array(25).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}`,
  date: `2025-0${(i % 9) + 1}-15`,
  description: 'This is a sample description for the event.',
  image: 'https://via.placeholder.com/320x400?text=Event+' + (i + 1),
}));

const FlagshipEvent: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const velocity = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scaledDelta = e.deltaY * 0.3; // reduce sensitivity for trackpads
      velocity.current += scaledDelta;
      if (!isScrolling.current) animate();
    };

    const animate = () => {
      isScrolling.current = true;
      const step = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft += velocity.current;
        velocity.current *= 0.85;

        if (Math.abs(velocity.current) > 0.5) {
          requestAnimationFrame(step);
        } else {
          isScrolling.current = false;
        }
      };
      requestAnimationFrame(step);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Flagship Events</h2>
        <div
          ref={scrollRef}
          className="relative h-[600px] flex overflow-x-auto scrollbar-hide space-x-8 p-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-none w-80 min-w-[320px] h-[500px] bg-gray-800 rounded-lg shadow-lg flex flex-col"
            >
              <div className="w-full h-[300px] relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-t-lg"
                  loading="lazy"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipEvent;
