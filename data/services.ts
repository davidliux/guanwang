import { Service } from '@/types';

export const services: Service[] = [
  // Core Services
  {
    id: 'customs-brokerage',
    title: 'Customs Brokerage',
    description: 'Licensed customs brokerage for Canada and US imports with full compliance support.',
    icon: 'Shield',
    category: 'core',
    features: [
      'Licensed brokers in Canada & US',
      'ACE & CBSA filing',
      'Low value shipment (LVS) entry',
      'Full EDI/API integration'
    ]
  },
  {
    id: 'warehouse-network',
    title: 'Strategic Warehouse Network',
    description: 'Comprehensive warehousing solutions across major North American logistics hubs.',
    icon: 'Warehouse',
    category: 'core',
    features: [
      'Toronto, Montreal, Calgary, Vancouver',
      'New York, Chicago, LA, Houston',
      'Temperature-controlled storage',
      '24/7 surveillance'
    ]
  },
  {
    id: 'first-last-mile',
    title: 'First & Last Mile Integration',
    description: 'Seamless connection from Asian factories to North American customers.',
    icon: 'Truck',
    category: 'core',
    features: [
      'Factory pickup in Asia',
      'Final-mile delivery',
      'Real-time tracking',
      'Integrated with major carriers'
    ]
  },
  {
    id: 'amazon-fba',
    title: 'Amazon FBA/FBM Solutions',
    description: 'Complete Amazon marketplace logistics support and compliance.',
    icon: 'Package',
    category: 'core',
    features: [
      'FBA prep & delivery',
      'FBM fulfillment',
      'Returns processing',
      'Inventory management'
    ]
  },
  // Value-Added Services
  {
    id: 'returns-management',
    title: 'Returns Management',
    description: 'Comprehensive returns processing with resale and recycling options.',
    icon: 'RotateCcw',
    category: 'value-added',
    features: [
      'Returns consolidation',
      'Quality inspection',
      'Resale program',
      'Profit sharing'
    ]
  },
  {
    id: 'virtual-office',
    title: 'Virtual Office Support',
    description: 'Complete business presence setup in North America.',
    icon: 'Building',
    category: 'value-added',
    features: [
      'Company registration',
      'GST/HST setup',
      'Local representation',
      'Banking support'
    ]
  },
  {
    id: 'compliance-assistance',
    title: 'Compliance Assistance',
    description: 'Expert guidance on regulations and compliance requirements.',
    icon: 'FileCheck',
    category: 'value-added',
    features: [
      'CARM registration',
      'NRI solutions',
      'Import licenses',
      'Tax optimization'
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation & HS Classification',
    description: 'Professional documentation services and customs classification.',
    icon: 'FileText',
    category: 'value-added',
    features: [
      'HS code classification',
      'Document preparation',
      'Duty optimization',
      'Compliance review'
    ]
  }
];