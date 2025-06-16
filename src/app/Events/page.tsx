"use client";

import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    title: "Panache",
    image: "/images/building-6011756_1280.jpg",
    description: "A grand fashion show showcasing creativity and style. Experience the fusion of traditional and contemporary fashion.",
    date: "March 15, 2025",
    prize: "₹50,000",
    registration: "Register Now"
  },
  {
    title: "Hackathon",
    image: "/images/building-6011756_1280.jpg",
    description: "24-hour coding competition to solve real-world problems. Showcase your technical skills and win exciting prizes.",
    date: "March 16, 2025",
    prize: "₹1,00,000",
    registration: "Register Now"
  },
  {
    title: "Business Plan",
    image: "/images/building-6011756_1280.jpg",
    description: "Present your innovative business ideas to industry experts. Get mentorship and funding opportunities.",
    date: "March 17, 2025",
    prize: "₹75,000",
    registration: "Register Now"
  },
  {
    title: "Band Jam",
    image: "/images/building-6011756_1280.jpg",
    description: "Battle of the bands - rock, metal, and fusion. Let your music speak and win amazing prizes.",
    date: "March 18, 2025",
    prize: "₹60,000",
    registration: "Register Now"
  },
  {
    title: "Robo Wars",
    image: "/images/building-6011756_1280.jpg",
    description: "Battle of the robots in an epic arena. Design, build, and compete with your robotic warriors.",
    date: "March 19, 2025",
    prize: "₹80,000",
    registration: "Register Now"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center cosmic-text mb-24">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}