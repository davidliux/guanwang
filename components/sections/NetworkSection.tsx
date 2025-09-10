'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Truck, Warehouse } from 'lucide-react';

const networkLocations = {
  canada: [
    { city: 'Toronto', type: 'hub' },
    { city: 'Montreal', type: 'warehouse' },
    { city: 'Vancouver', type: 'warehouse' },
    { city: 'Calgary', type: 'warehouse' }
  ],
  usa: [
    { city: 'New York/New Jersey', type: 'hub' },
    { city: 'Los Angeles', type: 'warehouse' },
    { city: 'Chicago', type: 'warehouse' },
    { city: 'Houston', type: 'warehouse' },
    { city: 'Buffalo', type: 'warehouse' },
    { city: 'Miami', type: 'warehouse' }
  ]
};

const networkStats = [
  { label: 'Warehouse Locations', value: '10+', icon: Warehouse },
  { label: 'Countries Served', value: '2', icon: Globe },
  { label: 'Daily Deliveries', value: '10,000+', icon: Truck },
  { label: 'Coverage Area', value: '100%', icon: MapPin }
];

export default function NetworkSection() {
  return (
    <section id="network" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic locations across North America for optimal reach and efficiency
          </p>
        </motion.div>

        {/* Network Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {networkStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-naecla-blue/10 rounded-full mb-4">
                  <Icon className="text-naecla-blue" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Network Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Canada */}
          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🇨🇦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Canada</h3>
            </div>
            <div className="space-y-3">
              {networkLocations.canada.map((location) => (
                <div key={location.city} className="flex items-center gap-3">
                  <MapPin className="text-gray-500" size={16} />
                  <span className="text-gray-700">{location.city}</span>
                  {location.type === 'hub' && (
                    <span className="text-xs bg-naecla-blue/10 text-naecla-blue px-2 py-1 rounded-full">
                      Main Hub
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* USA */}
          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-naecla-blue/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">United States</h3>
            </div>
            <div className="space-y-3">
              {networkLocations.usa.map((location) => (
                <div key={location.city} className="flex items-center gap-3">
                  <MapPin className="text-gray-500" size={16} />
                  <span className="text-gray-700">{location.city}</span>
                  {location.type === 'hub' && (
                    <span className="text-xs bg-naecla-blue/10 text-naecla-blue px-2 py-1 rounded-full">
                      Main Hub
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-naecla-blue mb-3 text-2xl font-bold">24/7</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Always Available</h4>
            <p className="text-sm text-gray-600">Round-the-clock operations and support</p>
          </div>
          <div className="text-center">
            <div className="text-green-600 mb-3 text-2xl font-bold">99.9%</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Delivery Success</h4>
            <p className="text-sm text-gray-600">Industry-leading reliability</p>
          </div>
          <div className="text-center">
            <div className="text-naecla-blue-dark mb-3 text-2xl font-bold">1-3 Days</div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Transit</h4>
            <p className="text-sm text-gray-600">Express delivery across North America</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}