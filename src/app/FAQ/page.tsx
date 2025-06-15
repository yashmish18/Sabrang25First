import React from 'react';

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

  return (
    <div className="min-h-screen text-white font-sans flex flex-col items-center justify-center px-4 py-20 relative z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-lg cosmic-text">
        Frequently Asked Questions
      </h1>
      <p className="text-xl md:text-2xl cosmic-text max-w-3xl text-center mb-12">
        Find answers to common questions about Sabrang '25.
      </p>

      <div className="w-full max-w-3xl space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-purple-900/80 p-6 rounded-lg shadow-lg border border-purple-700">
            <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
            <p className="text-gray-200">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 