import { Service } from '@/types';

export const services: Service[] = [
  // Core Services (会员费包含)
  {
    id: 'trade-channel-consulting',
    title: 'Trade Channel Consulting',
    description: 'Expert guidance on optimal trade routes and strategies for North American markets.',
    icon: 'Map',
    category: 'core',
    features: [
      'Route optimization',
      'Market entry strategy',
      'Cost-benefit analysis',
      'Regulatory guidance'
    ]
  },
  {
    id: 'customs-brokerage',
    title: 'Customs Brokerage & Compliance',
    description: 'Licensed customs brokerage for Canada and US imports with full compliance support.',
    icon: 'Shield',
    category: 'core',
    features: [
      'Licensed brokers in Canada & US',
      'ACE & CBSA filing',
      'CARM & NRI compliance',
      'Full EDI/API integration'
    ]
  },
  {
    id: 'preferred-rates',
    title: 'Preferred Express/Trucking Rates',
    description: 'Access to exclusive discounted rates with major carriers and trucking companies.',
    icon: 'TrendingDown',
    category: 'core',
    features: [
      'Pre-negotiated rates',
      'Express delivery options',
      'LTL & FTL trucking',
      'Cross-border solutions'
    ]
  },
  {
    id: 'warehouse-network',
    title: 'Bonded/Non-Bonded Warehouse Network',
    description: 'Strategic warehouse network across 4 Canadian cities and 6 US locations.',
    icon: 'Warehouse',
    category: 'core',
    features: [
      'Toronto, Montreal, Calgary, Vancouver',
      'NY/NJ, Chicago, LA, Houston, Buffalo',
      'Temperature-controlled storage',
      '24/7 surveillance & security'
    ]
  },
  {
    id: 'amazon-compliance',
    title: 'Amazon FBA/FBM Compliance Pre-processing',
    description: 'Complete Amazon marketplace preparation and compliance services.',
    icon: 'Package',
    category: 'core',
    features: [
      'FBA prep & labeling',
      'FBM fulfillment support',
      'Inventory management',
      'Amazon-ready packaging'
    ]
  },
  {
    id: 'returns-export',
    title: 'Returns Export Processing',
    description: 'Efficient returns management with consolidation and export services.',
    icon: 'RotateCcw',
    category: 'core',
    features: [
      'Returns consolidation',
      'Quality inspection',
      'Export documentation',
      'Cost optimization'
    ]
  },
  {
    id: 'carm-nri',
    title: 'CARM & NRI Registration Assistance',
    description: 'Complete support for Canadian customs compliance registrations.',
    icon: 'FileCheck',
    category: 'core',
    features: [
      'CARM portal setup',
      'NRI registration',
      'Bond arrangement',
      'Ongoing compliance support'
    ]
  },
  // Value-Added Services (会员折扣价)
  {
    id: 'documentation',
    title: 'Documentation & HS Code Classification',
    description: 'Professional documentation services and accurate customs classification.',
    icon: 'FileText',
    category: 'value-added',
    features: [
      'HS code classification',
      'Import documentation',
      'Compliance review',
      'AI-powered automation'
    ]
  },
  {
    id: 'duty-optimization',
    title: 'Duty & Tax Optimization',
    description: 'Strategic planning to minimize customs duties and taxes legally.',
    icon: 'Calculator',
    category: 'value-added',
    features: [
      'Tariff analysis',
      'CUSMA/USMCA benefits',
      'Duty drawback programs',
      'Tax planning strategies'
    ]
  },
  {
    id: 'returns-resale',
    title: 'Returns Consolidation & Resale',
    description: 'Transform returns into revenue with our resale program and profit sharing.',
    icon: 'DollarSign',
    category: 'value-added',
    features: [
      'Returns consolidation',
      'Quality grading',
      'Resale marketplace',
      'Profit sharing program'
    ]
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping Support',
    description: 'Complete dropshipping fulfillment services for e-commerce businesses.',
    icon: 'ShoppingCart',
    category: 'value-added',
    features: [
      'Order fulfillment',
      'Inventory management',
      'Multi-channel integration',
      'Same-day processing'
    ]
  },
  {
    id: 'software-integration',
    title: 'Software/API Integration',
    description: 'Seamless integration with your existing systems and platforms.',
    icon: 'Code',
    category: 'value-added',
    features: [
      'Custom API development',
      'ERP integration',
      'Real-time tracking',
      'Data synchronization'
    ]
  },
  {
    id: 'banking-support',
    title: 'Canada/US Banking & Payment Support',
    description: 'Facilitate cross-border payments and banking relationships.',
    icon: 'CreditCard',
    category: 'value-added',
    features: [
      'Bank account setup',
      'Payment processing',
      'Currency exchange',
      'Financial compliance'
    ]
  },
  {
    id: 'virtual-office',
    title: 'Virtual Office & Business Setup',
    description: 'Establish your North American business presence quickly and efficiently.',
    icon: 'Building',
    category: 'value-added',
    features: [
      'Company registration',
      'Business address',
      'GST/HST registration',
      'Local representation'
    ]
  }
];