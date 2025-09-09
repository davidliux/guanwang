'use client';

import { motion } from 'framer-motion';
import { Check, TrendingUp, Clock, Shield, Globe, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface OptionFeaturesProps {
  optionNumber: 1 | 2 | 3;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const featuresByOption: Record<1 | 2 | 3, Feature[]> = {
  1: [
    {
      icon: Clock,
      title: "Streamlined Processes",
      description: "Simplified customs clearance and documentation that saves you hours of work"
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Competitive rates with transparent pricing and no hidden fees"
    },
    {
      icon: Shield,
      title: "Compliance Made Easy",
      description: "Stay compliant with automated documentation and regulatory updates"
    },
    {
      icon: Globe,
      title: "End-to-End Tracking",
      description: "Real-time visibility from factory to final delivery"
    }
  ],
  2: [
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Personal account managers who understand your business needs"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive problem-solving and contingency planning"
    },
    {
      icon: TrendingUp,
      title: "Growth Partnership",
      description: "Strategic guidance to scale your cross-border operations"
    },
    {
      icon: Globe,
      title: "Network Access",
      description: "Leverage our extensive partner network for better outcomes"
    }
  ],
  3: [
    {
      icon: Shield,
      title: "70+ Years Expertise",
      description: "Combined team experience handling complex logistics challenges"
    },
    {
      icon: Globe,
      title: "Local Market Knowledge",
      description: "Deep understanding of North American regulations and markets"
    },
    {
      icon: Users,
      title: "In-House Customs Team",
      description: "Licensed brokers ensuring smooth border crossings"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average 5,268% return on investment for our members"
    }
  ]
};

const highlightsByOption: Record<1 | 2 | 3, string[]> = {
  1: [
    "3-day average delivery time",
    "99.9% customs clearance success rate",
    "24/7 shipment tracking",
    "Automated documentation"
  ],
  2: [
    "Quarterly business reviews",
    "Custom integration support",
    "Priority processing",
    "Strategic consulting included"
  ],
  3: [
    "$20,000+ annual savings average",
    "Access to 8+ warehouse locations",
    "Direct carrier relationships",
    "Volume-based discounts"
  ]
};

export default function OptionFeatures({ optionNumber, theme }: OptionFeaturesProps) {
  const features = featuresByOption[optionNumber];
  const highlights = highlightsByOption[optionNumber];

  return (
    <section id="features" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {optionNumber === 1 && "Simplicity at Every Step"}
            {optionNumber === 2 && "Your Success, Our Mission"}
            {optionNumber === 3 && "Expertise That Delivers"}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {optionNumber === 1 && "We've streamlined cross-border logistics so you can focus on growth"}
            {optionNumber === 2 && "More than a service provider, we're your strategic logistics partner"}
            {optionNumber === 3 && "Leverage decades of experience to dominate North American markets"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800/70 transition-all border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${theme.secondary} rounded-lg`}>
                    <Icon className={theme.accent} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className={`${theme.secondary} rounded-lg p-8 border ${theme.accent.replace('text', 'border')}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Check className={theme.accent} size={20} />
                <span className="text-gray-300">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}