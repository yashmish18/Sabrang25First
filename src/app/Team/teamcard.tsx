'use client';

import React, { useRef } from 'react';

interface Props {
  name: string;
  role: string;
}

const TeamCard: React.FC<Props> = ({ name, role }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetRotation = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      className="w-64 h-40 bg-blue-200 bg-opacity-90 rounded-2xl shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-center items-center text-center text-gray-900 font-semibold"
    >
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm font-normal">{role}</p>
    </div>
  );
};

export default TeamCard;
