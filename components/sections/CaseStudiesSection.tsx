'use client';

import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';
import { TrendingUp, Users, Clock } from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from businesses that transformed their logistics with NAECLA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-blue-800/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{study.industry}</span>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h4>
                <p className="text-gray-300">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h4>
                <p className="text-gray-300">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-400">{result.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{result.metric}</div>
                      <div className="text-xs text-green-400 mt-1">{result.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Badge */}
              {study.roi && (
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="text-green-400" size={20} />
                  <span className="text-green-400 font-semibold">ROI: {study.roi}</span>
                </div>
              )}

              {/* Testimonial */}
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-400">
                "{study.testimonial}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}