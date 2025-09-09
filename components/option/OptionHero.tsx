'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Home } from 'lucide-react';
import Link from 'next/link';

interface OptionHeroProps {
  optionNumber: 1 | 2 | 3;
  tagline: string;
  subline: string;
  theme: {
    gradient: string;
    primary: string;
    secondary: string;
  };
}

export default function OptionHero({ optionNumber, tagline, subline, theme }: OptionHeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className={`absolute inset-0 ${theme.gradient} -z-10`} />
      
      {/* Back to Home Button */}
      <motion.div
        className="absolute top-8 left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </motion.div>
      
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={`inline-block px-4 py-2 rounded-full ${theme.secondary} mb-6`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm font-semibold">
            {optionNumber === 1 && "Simplicity Approach"}
            {optionNumber === 2 && "Partnership Approach"}
            {optionNumber === 3 && "Expertise Approach"}
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          NAECLA
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {tagline}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {subline}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection('features')}
            className={`px-8 py-4 ${theme.primary} text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 font-semibold text-lg flex items-center gap-2 justify-center`}
          >
            Explore Features
            <ArrowRight size={20} />
          </button>
          <Link 
            href="/#contact"
            className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg"
          >
            Get Started
          </Link>
        </motion.div>

        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link 
            href="/option/1"
            className={`px-4 py-2 rounded-lg transition-all ${
              optionNumber === 1 ? theme.primary + ' text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            Simplicity
          </Link>
          <Link 
            href="/option/2"
            className={`px-4 py-2 rounded-lg transition-all ${
              optionNumber === 2 ? theme.primary + ' text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            Partnership
          </Link>
          <Link 
            href="/option/3"
            className={`px-4 py-2 rounded-lg transition-all ${
              optionNumber === 3 ? theme.primary + ' text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            Expertise
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ChevronDown 
          className="text-gray-400 animate-bounce cursor-pointer" 
          size={32}
          onClick={() => scrollToSection('features')}
        />
      </motion.div>
    </section>
  );
}