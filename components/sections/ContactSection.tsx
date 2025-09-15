'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
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

        {/* Centered Direct Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Direct Contact</h3>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Email */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-naecla-blue/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="text-naecla-blue" size={32} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-3 text-lg">Email Us</h4>
                <div className="space-y-1">
                  <a href="mailto:info@naecla.com" className="block text-sm text-gray-600 hover:text-naecla-blue transition-colors">
                    info@naecla.com
                  </a>
                  <a href="mailto:sales@naecla.com" className="block text-sm text-gray-600 hover:text-naecla-blue transition-colors">
                    sales@naecla.com
                  </a>
                </div>
              </motion.div>

              {/* Website */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-naecla-blue/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="text-naecla-blue" size={32} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-3 text-lg">Website</h4>
                <a href="https://www.naecla.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-naecla-blue transition-colors">
                  www.naecla.com
                </a>
              </motion.div>

              {/* Office */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-naecla-blue/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="text-naecla-blue" size={32} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-3 text-lg">Head Office</h4>
                <p className="text-sm text-gray-600">
                  4711 Yonge Street, Unit 10055<br />
                  North York, ON M2N 6K8<br />
                  Canada
                </p>
              </motion.div>

              {/* WeChat */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4 bg-green-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="text-green-600" size={32} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-3 text-lg">WeChat</h4>
                <p className="text-sm text-gray-600 mb-2">Scan to Connect</p>
              </motion.div>
            </div>

            {/* WeChat QR Code Section */}
            <div className="border-t border-gray-200 pt-8 mb-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Connect with Us on WeChat</h4>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Scan the QR code to add us on WeChat for instant communication and real-time logistics updates
                  </p>
                </div>
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-500/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/wechat-qr.png"
                    alt="NAECLA WeChat QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="text-center text-sm text-gray-500 mt-3">WeChat: NAECLA Official</p>
                </motion.div>
              </div>
            </div>

            {/* Why Choose NAECLA */}
            <div className="bg-gradient-to-br from-naecla-blue/5 to-naecla-blue-light/5 rounded-xl p-8 border border-naecla-blue/20">
              <h4 className="text-xl font-bold text-gray-900 text-center mb-6">Why Choose NAECLA?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                  <span>Strategic warehouse network across North America</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                  <span>Licensed customs brokers in Canada & USA</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                  <span>Amazon FBA/FBM compliance expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                  <span>24/7 support for Pro & Elite members</span>
                </div>
              </div>
              <p className="text-naecla-blue font-bold text-lg text-center mt-6">
                Join today and get up to 5,268% ROI!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}