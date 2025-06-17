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
    ]
  };

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

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <FaUser className="text-blue-400" />
                    <span>Edit Profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <FaCog className="text-purple-400" />
                    <span>Settings</span>
                  </button>
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