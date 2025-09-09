'use client';

import { motion } from 'framer-motion';
import { membershipTiers, membershipBenefits } from '@/data/membership';
import { Check, Star, TrendingUp, DollarSign } from 'lucide-react';

export default function MembershipSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join NAECLA and unlock exclusive rates, priority services, and comprehensive support
          </p>
        </motion.div>

        {/* Membership Benefits Bar */}
        <motion.div 
          className="mb-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-gray-300">{membershipBenefits.points}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="text-green-400" size={20} />
              <span className="text-gray-300">{membershipBenefits.upgrades}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="text-blue-400" size={20} />
              <span className="text-gray-300">{membershipBenefits.profitShare}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-purple-400" size={20} />
              <span className="text-gray-300 font-semibold">{membershipBenefits.roi}</span>
            </div>
          </div>
        </motion.div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`relative rounded-lg p-8 ${
                tier.highlighted 
                  ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-2 border-blue-500' 
                  : 'bg-gray-800/50 border border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                {tier.savings && (
                  <p className="text-sm text-blue-400">{tier.savings}</p>
                )}
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400 ml-2">USD</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{tier.period}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`${
                      tier.highlighted ? 'text-blue-400' : 'text-gray-500'
                    } mt-0.5 flex-shrink-0`} size={16} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            Not sure which plan is right for you?
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Contact our team for a personalized consultation →
          </button>
        </motion.div>
      </div>
    </section>
  );
}