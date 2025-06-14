'use client';

import React from 'react';
import TeamCard from './teamcard';

export default function TeamPage() {
  const members = [
    { name: 'Suryaansh', role: 'Coordinator' },
    { name: 'Somay', role: 'Design Lead' },
    // Add more team members here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-10">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">Meet the Team</h1>
      
      {/* Perspective wrapper */}
      <div className="flex flex-wrap justify-center gap-10" style={{ perspective: '1000px' }}>
        {members.map((member, i) => (
          <TeamCard key={i} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
}
