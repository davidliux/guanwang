'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { taglineOptions, defaultTaglineOption } from '@/data/taglines';
import { ChevronDown, Globe, Package, TrendingUp, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [selectedTagline] = useState(taglineOptions[defaultTaglineOption]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Statistics data
  const stats = [
    { value: 5000, label: 'Shipments Delivered', suffix: '+', icon: Package },
    { value: 98, label: 'On-Time Delivery', suffix: '%', icon: TrendingUp },
    { value: 24, label: 'Hour Support', suffix: '/7', icon: Shield },
    { value: 50, label: 'Global Partners', suffix: '+', icon: Globe },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-banana/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-seashore/20 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main title */}
          <motion.h1 
            className="text-hero font-urbanist font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block">NAECLA</span>
            <span className="text-h2 font-light text-gray-300 mt-2 block">
              North American eCommerce Logistics Alliance
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-h3 font-bold text-white mb-4">
              {selectedTagline.main}
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
              {selectedTagline.sub}
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              variant="accent"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-[200px]"
            >
              Get Started
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('services')}
              className="min-w-[200px]"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-accent-banana/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent-banana" />
                  </div>
                  <div className="text-h1 font-bold text-white">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        separator=","
                      />
                    )}
                    <span className="text-accent-banana">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ChevronDown 
            className="text-accent-banana animate-bounce cursor-pointer w-8 h-8" 
            onClick={() => scrollToSection('services')}
          />
        </motion.div>
      </div>
    </section>
  );
}