import Image from 'next/image';
import clsx from 'clsx';
import GlareHover from './GlareHover';

interface EventProps {
  event: {
    title: string;
    image: string;
    description?: string;
    date?: string;
    prize?: string;
    registration?: string;
  };
  glow: 'gold' | 'silver';
}

export default function EventCard({ event, glow }: EventProps) {
  const glowColor = glow === 'gold' 
    ? 'from-yellow-400 via-yellow-500 to-yellow-600' 
    : 'from-gray-400 via-gray-500 to-gray-600';

  return (
    <div className="relative group">
      <div className={clsx(
        "absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200",
        glowColor
      )}></div>
      <div className="relative bg-black rounded-2xl p-4 h-full flex flex-col">
        <div className="relative w-full aspect-[4/3] mb-4">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white text-center mb-3">{event.title}</h3>
            {event.description && (
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{event.description}</p>
            )}
            <div className="mt-auto space-y-3">
              {event.date && (
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
              )}
              {event.prize && (
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.prize}
                </div>
              )}
              {event.registration && (
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  {event.registration}
                </div>
              )}
            </div>
          </div>
        </GlareHover>
      </div>
    </div>
  );
}
