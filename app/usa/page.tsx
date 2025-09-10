'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Truck, Warehouse, Shield, Package, FileCheck, DollarSign, ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';

export default function USAServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with US Flag Colors */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900 text-white px-4">
        <div className="absolute inset-0 bg-[url('/images/usa-flag.svg')] opacity-10 bg-center bg-no-repeat bg-cover" />
        
        <motion.div 
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            US Logistics Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Coast-to-coast coverage with strategic warehouses in major hubs, optimized routing, and adaptive fulfillment strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#warehouse-network" className="px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg">
              View Our Network
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg">
              Start Shipping
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
              Mastering US Logistics Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              National coverage across 2,500+ miles requires strategic planning and adaptive solutions
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
              <Globe className="text-blue-700 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geographic Size & Distance</h3>
              <p className="text-gray-600">
                Coast-to-coast span exceeds 2,500 miles, creating long transit times for nationwide deliveries and requiring complex coordination.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Building2 className="text-blue-700 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Strain</h3>
              <p className="text-gray-600">
                Severe congestion in urban centers combined with aging roads, railways, and ports creates bottlenecks throughout the supply chain.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="text-blue-700 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uneven Population Distribution</h3>
              <p className="text-gray-600">
                Dense East & West Coasts contrast with rural Midwest, creating region-specific demand patterns requiring tailored solutions.
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
              Strategic US Warehouse Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete coverage from coast to coast
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Warehouse className="text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">New York / New Jersey</h3>
              <p className="text-gray-600">East Coast gateway with premier port access</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Warehouse className="text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chicago</h3>
              <p className="text-gray-600">Midwest hub serving America's heartland</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Warehouse className="text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo</h3>
              <p className="text-gray-600">Strategic cross-border location near Canada</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Warehouse className="text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Los Angeles</h3>
              <p className="text-gray-600">West Coast hub for Pacific imports</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Warehouse className="text-blue-700 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Houston</h3>
              <p className="text-gray-600">Gulf Coast strategic location</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Package className="text-blue-700" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FBA Integration</h3>
              <p className="text-gray-600">Direct access to Amazon fulfillment centers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-Border Customs Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              US Customs Clearance Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed brokerage covering all major trade lanes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileCheck className="text-blue-700" size={28} />
                Worldwide → USA
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Licensed customs brokerage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">ACE filing compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">FDA/FCC/USDA regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Type 86 entries under $800</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Truck className="text-blue-700" size={28} />
                USA → Canada
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">B2B/B2C parcel services</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">FBA transfer coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">GST/HST verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Proxy IOR services</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 bg-blue-50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Add-On Services</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Core Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <DollarSign className="text-blue-700 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Pre-clearance at major border points</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <DollarSign className="text-blue-700 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Full EDI/API integration with CBP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <DollarSign className="text-blue-700 flex-shrink-0" size={20} />
                    <span className="text-gray-700">All major carriers supported</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Optional Add-Ons</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Package className="text-blue-700 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Import license consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Package className="text-blue-700 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tax optimization advice</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Package className="text-blue-700 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Non-resident importer solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amazon FBA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amazon FBA Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrated with Amazon FBA Prep & Delivery workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FBA Prep Services</h3>
              <p className="text-gray-600">Complete preparation according to Amazon requirements</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-orange-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Delivery</h3>
              <p className="text-gray-600">Optimized routing to Amazon fulfillment centers</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-orange-600" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Returns Processing</h3>
              <p className="text-gray-600">FBA return handling and relabeling services</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize Your US Logistics?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join NAECLA and access our complete US logistics infrastructure with member-exclusive rates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg">
                Start Today
              </Link>
              <Link href="/membership" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg">
                Explore Membership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}