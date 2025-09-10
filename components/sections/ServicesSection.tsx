'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { 
  Shield, Warehouse, Truck, Package, RotateCcw, Building, FileCheck, FileText,
  Map, TrendingDown, Calculator, DollarSign, ShoppingCart, Code, CreditCard
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Warehouse,
  Truck,
  Package,
  RotateCcw,
  Building,
  FileCheck,
  FileText,
  Map,
  TrendingDown,
  Calculator,
  DollarSign,
  ShoppingCart,
  Code,
  CreditCard
};

export default function ServicesSection() {
  const coreServices = services.filter(s => s.category === 'core');
  const valueAddedServices = services.filter(s => s.category === 'value-added');

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to streamline your cross-border operations
          </p>
        </motion.div>

        {/* Core Services */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Package;
              return (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-naecla-blue/10 rounded-lg">
                      {Icon && <Icon className="text-naecla-blue" size={24} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      {service.features && (
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-500 flex items-start">
                              <span className="text-naecla-blue mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Value-Added Services */}
        <div>
          <motion.h3 
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Value-Added Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueAddedServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Building;
              return (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-600/10 rounded-lg">
                      {Icon && <Icon className="text-green-600" size={24} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      {service.features && (
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-500 flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}