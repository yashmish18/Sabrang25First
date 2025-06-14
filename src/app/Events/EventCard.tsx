import Image from 'next/image';
import clsx from 'clsx';

export default function EventCard({ event, glow }: { event: { title: string; image: string }, glow: 'gold' | 'silver' }) {
  const glowColor = glow === 'gold' ? 'from-yellow-300 to-yellow-500' : 'from-gray-300 to-gray-500';

  return (
    <div
      className={clsx(
        'p-1 rounded-2xl shadow-lg',
        'bg-gradient-to-r', glowColor
      )}
    >
      <div className="bg-black rounded-2xl p-4 transition-transform hover:scale-105">
        <Image
          src={event.image}
          alt={event.title}
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />
        <h3 className="mt-4 text-xl font-semibold text-white text-center">{event.title}</h3>
      </div>
    </div>
  );
}
