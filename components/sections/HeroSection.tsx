'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { taglineOptions, defaultTaglineOption } from '@/data/taglines';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [selectedTagline] = useState(taglineOptions[defaultTaglineOption]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 -z-10" />
      
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          NAECLA
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          North American eCommerce Logistics Alliance
        </motion.p>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {selectedTagline.main}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {selectedTagline.sub}
          </p>
          
          {/* Links to explore different options */}
          <div className="flex gap-4 justify-center mt-8">
            <a 
              href="/option/1"
              className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all text-sm"
            >
              Simplicity Focus →
            </a>
            <a 
              href="/option/2"
              className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all text-sm"
            >
              Partnership Focus →
            </a>
            <a 
              href="/option/3"
              className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-all text-sm"
            >
              Expertise Focus →
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('membership')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg"
          >
            View Membership Plans
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg"
          >
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown 
          className="text-gray-400 animate-bounce cursor-pointer" 
          size={32}
          onClick={() => scrollToSection('services')}
        />
      </motion.div>
    </section>
  )
}