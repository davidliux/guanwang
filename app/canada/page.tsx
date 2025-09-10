'use client';

import { motion } from 'framer-motion';
import { MapPin, Ship, Truck, Warehouse, Shield, Package, FileCheck, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CanadaServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Canadian Flag Colors */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 text-white px-4">
        <div className="absolute inset-0 bg-[url('/images/canada-flag.svg')] opacity-10 bg-center bg-no-repeat bg-cover" />
        
        <motion.div 
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Canadian Logistics Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Navigate Canada's vast geography and complex logistics landscape with our strategic warehouse network and expert customs brokerage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#warehouse-network" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg">
              Explore Our Network
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg">
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Understanding Canadian Logistics Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Despite 90% of the population living within 160km of the US border, servicing Canada requires navigating unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <MapPin className="text-red-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geographic Challenges</h3>
              <p className="text-gray-600">
                Second-largest country by landmass with population concentrated along southern border, making distribution to remote locations costly and time-consuming.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Ship className="text-red-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Port Limitations</h3>
              <p className="text-gray-600">
                High dependency on few key gateways (e.g., Vancouver for Asia-Pacific shipments) often leads to congestion, delays, and bottlenecks.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Truck className="text-red-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transportation Complexity</h3>
              <p className="text-gray-600">
                Inland movement across thousands of kilometers requires sophisticated planning involving trucks, rail, and warehousing, straining service timelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warehouse Network Section */}
      <section id="warehouse-network" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Strategic Canadian Warehouse Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Covering all major logistics hubs across Canada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border-2 border-red-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Warehouse className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vancouver</h3>
              <p className="text-gray-600">Gateway for Asian imports with direct port access</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border-2 border-red-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Warehouse className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Toronto</h3>
              <p className="text-gray-600">Serving Ontario's densely populated Golden Horseshoe</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border-2 border-red-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Warehouse className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Montreal</h3>
              <p className="text-gray-600">Eastern Canada hub serving Quebec and Atlantic provinces</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border-2 border-red-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Warehouse className="text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calgary</h3>
              <p className="text-gray-600">Efficiently serving Western Canada and Prairie provinces</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customs Brokerage Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Canada Customs Brokerage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert CBSA compliance and duty optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              
              <div className="flex items-start gap-4">
                <Shield className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Pre-clearance Services</h4>
                  <p className="text-gray-600">At major border crossing points (Windsor, Vancouver, Montreal)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Package className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Low Value Shipment (LVS)</h4>
                  <p className="text-gray-600">Entry below CAD $20 threshold for faster processing</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FileCheck className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Full EDI/API Integration</h4>
                  <p className="text-gray-600">Seamless connection with CBSA systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <DollarSign className="text-red-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Duty Optimization</h4>
                  <p className="text-gray-600">Strategic HS code restructuring and Incoterms advice</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optional Add-Ons</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Import license or permit consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">CARM and NRI setup assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Non-resident importer (NRI) solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Tax optimization advice</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Returns processing and re-export</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Coordination with all major carriers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Simplify Your Canadian Logistics?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join NAECLA today and transform Canada's logistics challenges into your competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg">
                Get Started Today
              </Link>
              <Link href="/membership" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg">
                View Membership Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}