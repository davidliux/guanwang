'use client';

import { motion } from 'framer-motion';
import { membershipTiers, membershipBenefits } from '@/data/membership';
import { Check, Star, TrendingUp, DollarSign, Award, Shield, Zap } from 'lucide-react';

export default function MembershipSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tier = membershipTiers[0]; // Since we only have Elite tier now

  return (
    <section id="membership" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elite Membership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience premium services with our comprehensive Elite membership package
          </p>
        </motion.div>

        {/* Membership Benefits Bar */}
        <motion.div 
          className="mb-16 bg-gradient-to-r from-naecla-blue/10 to-naecla-blue-light/10 rounded-lg p-6 border border-naecla-blue/20"
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

        {/* Main Membership Card - Horizontal Layout */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Side - Pricing */}
            <div className="bg-gradient-to-br from-naecla-blue to-naecla-blue-dark p-10 lg:p-12 text-white flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">ELITE MEMBERSHIP</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">Unlock Premium Benefits</h3>
                <p className="text-white/80 mb-8 leading-relaxed">{tier.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${tier.price}</span>
                    <span className="text-xl ml-2 text-white/80">USD</span>
                  </div>
                  <p className="text-white/60 mt-2">{tier.period}</p>
                </div>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white text-naecla-blue hover:bg-gray-100 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Get Started Today
                </button>

                <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    <span>Instant Activation</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Benefits */}
            <div className="p-10 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Comprehensive Benefits Package</h4>
                
                {/* Categorized Benefits */}
                <div className="space-y-5">
                  {tier.categorizedFeatures && Object.entries(tier.categorizedFeatures).map(([category, features], catIdx) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + catIdx * 0.1 }}
                    >
                      <h5 className="text-xs font-bold text-naecla-blue uppercase tracking-wider mb-2">
                        {category}
                      </h5>
                      <div className="space-y-1.5">
                        {features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 group"
                          >
                            <div className="bg-naecla-blue/10 rounded-full p-0.5 mt-0.5 group-hover:bg-naecla-blue/20 transition-colors">
                              <Check className="text-naecla-blue w-3 h-3" />
                            </div>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Have questions about Elite membership?
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