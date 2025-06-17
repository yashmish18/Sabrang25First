"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../../../components/TiltedCard';


const sponsors = [
  {
    id: "gold-1",
    name: "Gold Sponsor 1",
    image: "/images/building-6011756_1280.jpg",
    description: "Our premium partner supporting excellence",
    category: "gold"
  },
  {
    id: "gold-2",
    name: "Gold Sponsor 2",
    image: "/images/building-6011756_1280.jpg",
    description: "lingaguli guli gli ga",
    category: "gold"
  },
  {
    id: "gold-3",
    name: "Gold Sponsor 3",
    image: "/images/building-6011756_1280.jpg",
    description: "lorem ispum",
    category: "gold"
  },
  {
    id: "silver-1",
    name: "Silver Sponsor 1",
    image: "/images/building-6011756_1280.jpg",
    description: "Dedicated to fostering innovation",
    category: "silver"
  },
  {
    id: "silver-2",
    name: "Silver Sponsor 2",
    image: "/images/building-6011756_1280.jpg",
    description: "Dedicated to fostering innovation",
    category: "silver"
  },
  {
    id: "silver-3",
    name: "Silver Sponsor 3",
    image: "/images/building-6011756_1280.jpg",
    description: "Dedicated to fostering innovation",
    category: "silver"
  },
  {
    id: "bronze-1",
    name: "Bronze Sponsor",
    image: "/images/building-6011756_1280.jpg",
    description: "Supporting cultural growth",
    category: "bronze"
  },
  // Add more sponsors as needed
];

const categories = {
  gold: "Gold Sponsors",
  silver: "Silver Sponsors",
  bronze: "Bronze Sponsors"
};

export default function Sponsors() {
  return (
    <div className="min-h-screen text-white">
   
      
      <main className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Our Sponsors
          </h1>

          {Object.entries(categories).map(([category, title]) => (
            <section key={category} className="mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-semibold mb-8 text-center"
              >
                {title}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsors
                  .filter(sponsor => sponsor.category === category)
                  .map((sponsor, index) => (
                    <motion.div
                      key={sponsor.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                      <TiltedCard
                        imageSrc={sponsor.image}
                        altText={sponsor.name}
                        captionText={sponsor.description}
                        containerHeight="400px"
                        imageHeight="400px"
                        imageWidth="100%"
                        scaleOnHover={1.05}
                        rotateAmplitude={10}
                        showTooltip={true}
                        overlayContent={
                          <div className="absolute inset-0 bg-black/50 rounded-[15px] flex items-center justify-center p-4">
                            <h3 className="text-xl font-semibold text-white text-center">
                              {sponsor.name}
                            </h3>
                          </div>
                        }
                        displayOverlayContent={true}
                      />
                    </motion.div>
                  ))}
              </div>
            </section>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            
          </motion.div>
        </motion.div>
      </main>

    
    </div>
  );
}
