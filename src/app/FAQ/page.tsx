'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Sabrang '25?",
      answer: "Sabrang '25 is the grandest cultural fest, offering a platform for talent, captivating performances, and unforgettable memories."
    },
    {
      question: "How can I participate in Sabrang '25 events?",
      answer: "You can register for various competitions and workshops through our 'Register Now' button on the homepage or by navigating to the Events section."
    },
    {
      question: "Is there a registration fee?",
      answer: "Information regarding registration fees for specific events will be provided during the registration process or can be found on the individual event pages."
    },
    {
      question: "Where will Sabrang '25 take place?",
      answer: "Details about the venue and specific event locations will be announced closer to the event date on our website and social media channels."
    },
    {
      question: "Can I attend Sabrang '25 without participating in events?",
      answer: "Yes, you are welcome to attend Sabrang '25 as a spectator to enjoy the performances and overall festive atmosphere."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col items-center justify-center px-4 py-20 relative z-10 bg-gradient-to-br from-purple-950 to-black">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg cosmic-text text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-xl md:text-2xl cosmic-text max-w-3xl text-center mb-12">
        Find answers to common questions about Sabrang '25.
      </p>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-yellow-500 rounded-lg overflow-hidden bg-purple-900/80 shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_25px_#facc15] hover:border-yellow-400 hover:bg-gradient-to-br hover:from-purple-900 hover:to-yellow-900"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-yellow-300">{faq.question}</h3>
              <span
                className={`transform transition-transform duration-300 text-yellow-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`px-6 pt-0 pb-4 text-yellow-100 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
