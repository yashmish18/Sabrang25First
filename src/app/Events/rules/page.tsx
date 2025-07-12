'use client';

export default function RulesPage() {
  return (
    <div className="min-h-screen text-white font-sans bg-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg text-purple-400 text-center">
          Event Rules & Regulations
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Rules */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">General Rules</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All participants must be currently enrolled students with valid ID cards
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Registration is mandatory for all events
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Participants must arrive 30 minutes before their event starts
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Any form of plagiarism or cheating will result in immediate disqualification
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                The decision of the judges will be final and binding
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Participants must follow all safety guidelines and instructions
              </li>
            </ul>
          </div>

          {/* Cultural Events Rules */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Cultural Events</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Performance time limits must be strictly adhered to
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All music and props must be brought by the participants
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Costumes and attire should be appropriate and non-offensive
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Sound check will be provided 15 minutes before performance
              </li>
            </ul>
          </div>

          {/* Technical Events Rules */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Technical Events</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All code must be original and written during the competition
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Internet access will be provided for research purposes only
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Participants must bring their own laptops and necessary equipment
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All projects must be submitted before the deadline
              </li>
            </ul>
          </div>

          {/* Management Events Rules */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Management Events</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All presentations must be prepared in advance
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Time limits for presentations will be strictly enforced
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All materials must be original and properly cited
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Professional dress code is mandatory for all presentations
              </li>
            </ul>
          </div>

          {/* Prize Distribution */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Prize Distribution</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Prizes will be distributed immediately after the event results are announced
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                All team members must be present for prize collection
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Valid ID proof is required for prize collection
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 pt-8">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 rounded-xl bg-gray-600 text-white text-lg font-bold hover:bg-gray-700 transition-colors"
            >
              ← Back to Events
            </button>
            <button
              onClick={() => window.location.href = '/Events/participate'}
              className="px-8 py-4 rounded-xl bg-purple-600 text-white text-lg font-bold hover:bg-purple-700 transition-colors"
            >
              Participate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 