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
    <section id="membership" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join NAECLA and unlock exclusive rates, priority services, and comprehensive support
          </p>
        </motion.div>

        {/* Membership Benefits Bar */}
        <motion.div 
          className="mb-12 bg-gradient-to-r from-naecla-blue/10 to-naecla-blue-light/10 rounded-lg p-6 border border-naecla-blue/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-gray-700">{membershipBenefits.points}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="text-green-400" size={20} />
              <span className="text-gray-700">{membershipBenefits.upgrades}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="text-blue-400" size={20} />
              <span className="text-gray-700">{membershipBenefits.profitShare}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="text-purple-400" size={20} />
              <span className="text-gray-700 font-semibold">{membershipBenefits.roi}</span>
            </div>
          </div>
        </motion.div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`relative rounded-lg p-8 shadow-lg ${
                tier.highlighted 
                  ? 'bg-gradient-to-br from-naecla-blue/5 to-naecla-blue-light/5 border-2 border-naecla-blue' 
                  : 'bg-white border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-naecla-blue text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                {tier.savings && (
                  <p className="text-sm text-naecla-blue">{tier.savings}</p>
                )}
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                  <span className="text-gray-600 ml-2">USD</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{tier.period}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`${
                      tier.highlighted ? 'text-naecla-blue' : 'text-green-600'
                    } mt-0.5 flex-shrink-0`} size={16} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-naecla-blue hover:bg-naecla-blue-dark text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-naecla-blue hover:text-naecla-blue-dark font-semibold"
          >
            Contact our team for a personalized consultation →
          </button>
        </motion.div>
      </div>
    </section>
  );
}