'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactSection() {
  const { formData, setFormData, isSubmitting, submitStatus, handleSubmit } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your logistics? Contact us for a personalized consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-naecla-blue focus:ring-1 focus:ring-naecla-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-naecla-blue focus:ring-1 focus:ring-naecla-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-naecla-blue focus:ring-1 focus:ring-naecla-blue transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-naecla-blue focus:ring-1 focus:ring-naecla-blue transition-colors resize-none"
                  placeholder="Tell us about your logistics needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-600 text-white' 
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-naecla-blue hover:bg-naecla-blue-dark text-white'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : submitStatus === 'error' ? (
                  'Error - Please Try Again'
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-naecla-blue/10 rounded-lg">
                    <Mail className="text-naecla-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Email Us</h4>
                    <a href="mailto:info@naecla.com" className="text-gray-600 hover:text-naecla-blue">
                      info@naecla.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-naecla-blue/10 rounded-lg">
                    <Globe className="text-naecla-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Website</h4>
                    <a href="https://www.naecla.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-naecla-blue">
                      www.naecla.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-naecla-blue/10 rounded-lg">
                    <MapPin className="text-naecla-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Head Office</h4>
                    <p className="text-gray-600">
                      4711 Yonge Street, Unit 10055<br />
                      North York, ON M2N 6K8<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-naecla-blue/5 to-naecla-blue-light/5 rounded-lg p-6 border border-naecla-blue/20">
              <h4 className="text-gray-900 font-semibold mb-3">Why Choose NAECLA?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Strategic warehouse network across North America</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Licensed customs brokers in Canada & USA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Amazon FBA/FBM compliance expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>24/7 support for Pro & Elite members</span>
                </li>
              </ul>
              <p className="text-naecla-blue font-semibold text-sm mt-4">
                Join today and get up to 5,268% ROI!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}