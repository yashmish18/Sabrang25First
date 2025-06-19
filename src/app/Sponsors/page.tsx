"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PinContainer } from '../../../components/PinContainer';


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
                      <PinContainer
                        title={sponsor.name}
                        href={`/sponsors/${sponsor.id}`}
                      >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                          <h3 className="!pb-2 !m-0 font-bold text-base text-slate-100">
                            {sponsor.name}
                          </h3>
                          <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                              {sponsor.description}
                            </span>
                          </div>
                          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                            <img
                              src={sponsor.image}
                              alt={sponsor.name}
                              className="h-full w-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </PinContainer>
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
