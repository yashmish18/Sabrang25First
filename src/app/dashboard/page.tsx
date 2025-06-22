"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaTicketAlt, FaHistory, FaCog, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image'; // Added for QR code placeholder

export default function Dashboard() {
  // Mock user data - replace with actual user data from your auth system
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    profileImage: "/images/user-avatar.jpg",
    registeredEvents: [
      { id: 1, name: "Dance Competition", date: "2024-03-15", whatsappLink: "https://wa.me/1234567890", status: "upcoming" },
      { id: 2, name: "Music Festival", date: "2024-03-20", whatsappLink: "https://wa.me/1234567890", status: "upcoming" },
    ],
    pastEvents: [
      { id: 3, name: "Cultural Night", date: "2024-02-15", whatsappLink: "https://wa.me/1234567890", status: "completed" },
    ],
    transactionId: "TXN1234567890",
  };

  // Mock event coordinators data
  const eventCoordinators: { [eventName: string]: { name: string; contact: string }[] } = {
    "Dance Competition": [
      { name: "Alice Smith", contact: "+91-9876543210" },
      { name: "Bob Johnson", contact: "+91-9123456780" },
    ],
    "Music Festival": [
      { name: "Carol Lee", contact: "+91-9988776655" },
    ],
    "Cultural Night": [
      { name: "David Brown", contact: "+91-9001122334" },
    ],
  };

  // Transaction ID should come from user data or props in a real app
  // const transactionId = "TXN1234567890";
  const transactionId = userData.transactionId || "---";

  const handleShare = async () => {
    const qrCodeImage = '${window.location.origin}/images/qrcode-placeholder.png'; // Get full URL
    try {
      if (navigator.share) {
        const response = await fetch(qrCodeImage);
        const blob = await response.blob();
        const file = new File([blob], 'event-qr-code.png', { type: 'image/png' });

        await navigator.share({
          files: [file],
          title: 'My Event QR Code',
          text: 'Scan this QR code for quick event check-in!',
        });
        console.log('QR Code shared successfully!');
      } else {
        alert('Web Share API is not supported in your browser. You can download the QR code instead.');
      }
    } catch (error) {
      console.error('Error sharing QR code:', error);
      alert('Failed to share QR code.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-36 px-4">
      <div className="container mx-auto">
        {/* Header Section - User Profile Name Only */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4 mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
            <img
              src={userData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <p className="text-gray-400">{userData.email}</p>
            <p className="text-green-400 text-sm mt-1">Logged in as {userData.name}</p>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Participated Events and Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Participated Events Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {userData.registeredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white/5 p-4 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-semibold">{event.name}</h3>
                        <p className="text-gray-400">{event.date}</p>
                      </div>
                      <a
                        href={event.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      >
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions replaced with Event Coordinators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Event Coordinators</h2>
                <div className="space-y-6">
                  {userData.registeredEvents.concat(userData.pastEvents).map((event: { id: number; name: string }) => (
                    <div key={event.id} className="mb-2">
                      <h3 className="font-semibold text-lg mb-1">{event.name}</h3>
                      <ul className="ml-4 list-disc text-gray-300">
                        {(eventCoordinators[event.name] || []).map((coordinator: { name: string; contact: string }, idx: number) => (
                          <li key={idx} className="mb-1">
                            <span className="font-medium text-white">{coordinator.name}</span>: <span className="text-green-400">{coordinator.contact}</span>
                          </li>
                        ))}
                        {!(eventCoordinators[event.name] && eventCoordinators[event.name].length) && (
                          <li className="text-gray-400">No coordinators listed.</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* QR Code Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-4">Your Event QR Code</h2>
              <div className="w-64 h-77 mx-auto bg-white p-2 rounded-lg flex items-center justify-center">
                <Image 
                  src="/images/qrcode-placeholder.png" 
                  alt="QR Code Placeholder" 
                  width={240} 
                  height={240} 
                />
              </div>
              <p className="text-gray-400 mt-4 text-sm">Scan this code for quick event check-in.</p>
              <p className="text-gray-300 mt-2 text-xs">Transaction ID: <span className="font-mono text-white">{transactionId}</span></p>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="/images/qrcode-placeholder.png" // Replace with actual QR code image path from backend
                  download="event-qr-code.png"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  Download
                </a>
                <button
                  onClick={handleShare}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 