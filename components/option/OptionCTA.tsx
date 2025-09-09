'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface OptionCTAProps {
  optionNumber: 1 | 2 | 3;
  theme: {
    primary: string;
    gradient: string;
  };
}

const ctaContent = {
  1: {
    title: "Ready to Simplify Your Logistics?",
    subtitle: "Join thousands of businesses that have streamlined their cross-border operations with NAECLA",
    buttonText: "Start Your Simple Journey",
    stats: [
      { value: "3 Days", label: "Average Delivery" },
      { value: "50%", label: "Cost Savings" },
      { value: "99.9%", label: "Success Rate" }
    ]
  },
  2: {
    title: "Let's Build Success Together",
    subtitle: "Partner with NAECLA and transform your logistics challenges into competitive advantages",
    buttonText: "Become a Partner",
    stats: [
      { value: "24/7", label: "Dedicated Support" },
      { value: "100+", label: "Success Stories" },
      { value: "5,268%", label: "Average ROI" }
    ]
  },
  3: {
    title: "Join the Market Leaders",
    subtitle: "Leverage our expertise to establish your dominance in North American markets",
    buttonText: "Claim Your Advantage",
    stats: [
      { value: "70+", label: "Years Experience" },
      { value: "$131K", label: "Avg Annual Savings" },
      { value: "8+", label: "Warehouse Locations" }
    ]
  }
};

export default function OptionCTA({ optionNumber, theme }: OptionCTAProps) {
  const content = ctaContent[optionNumber];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className={`relative rounded-2xl overflow-hidden ${theme.gradient} p-12 md:p-16`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {content.title}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>

            <motion.div 
              className="grid grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {content.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href="/#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg flex items-center gap-2"
              >
                {content.buttonText}
                <ArrowRight size={20} />
              </Link>
              
              <div className="flex gap-6 text-white">
                <a 
                  href="tel:+18886232521" 
                  className="flex items-center gap-2 hover:text-gray-200 transition-colors"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a 
                  href="mailto:info@naecla.com" 
                  className="flex items-center gap-2 hover:text-gray-200 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email Us</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            Explore other positioning options:
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Link
              href="/option/1"
              className={`px-4 py-2 rounded-lg transition-all ${
                optionNumber === 1
                  ? theme.primary + ' text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              Simplicity
            </Link>
            <Link
              href="/option/2"
              className={`px-4 py-2 rounded-lg transition-all ${
                optionNumber === 2
                  ? theme.primary + ' text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              Partnership
            </Link>
            <Link
              href="/option/3"
              className={`px-4 py-2 rounded-lg transition-all ${
                optionNumber === 3
                  ? theme.primary + ' text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              Expertise
            </Link>
          </div>
          
          {/* Back to Main Page Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all"
          >
            <ArrowLeft size={18} />
            Back to Main Page
          </Link>
        </motion.div>
      </div>
    </section>
  );
}