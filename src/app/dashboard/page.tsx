"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaTicketAlt, FaHistory, FaCog, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import ProtectedRoute from '../../../components/ProtectedRoute';

interface Event {
  _id: string;
  name: string;
  coordinator: string;
  mobile: string;
  qrID: string;
  date: string;
  status: string;
  whatsappLink: string;
}

interface UserData {
  _id:String,
  name: string;
  email: string;
  profileImage: string;
  registeredEvents: Event[];
  transactionId: string;
  hasEntered: boolean;
  entryTime: string | null;
}

function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/user`, {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleShare = async () => {
    const qrCodeImage = `${window.location.origin}/images/qrcode-placeholder.png`;
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center p-4 bg-red-500/20 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <p>No user data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-36 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4 mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
            <img
              src={userData.profileImage || "/images/default-avatar.jpg"}
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
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                {userData.registeredEvents.length > 0 ? (
                  <div className="space-y-4">
                    {userData.registeredEvents.map((event) => (
                      <div
                        key={event._id}
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
                ) : (
                  <p className="text-gray-400">No upcoming events</p>
                )}
              </div>
            </motion.div>

            {/* Event Coordinators Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Event Coordinators</h2>
                <div className="space-y-6">
                  {[...userData.registeredEvents].map((event) => (
                    <div key={event._id} className="mb-2">
                      <h3 className="font-semibold text-lg mb-1">{event.name}</h3>
                      <div className="ml-4 text-gray-300">
                        <p className="mb-1">
                          <span className="font-medium text-white">Coordinator:</span> {event.coordinator}
                        </p>
                        <p>
                          <span className="font-medium text-white">Contact:</span> <span className="text-green-400">{event.mobile}</span>
                        </p>
                      </div>
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
                {
                  <img
  src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/qrcode/${userData._id}`}
  alt="QR Code"
  width={240}
  height={240}
  className="object-contain"
/>

                }
              </div>
              <p className="text-gray-400 mt-4 text-sm">Scan this code for quick event check-in.</p>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href={ 
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/qrcode/${userData._id}`
                  }
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

// Wrap the component with ProtectedRoute
export default function ProtectedDashboard() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}