import { MembershipTier } from '@/types';

export const membershipTiers: MembershipTier[] = [
  {
    id: 'elite',
    name: 'Elite',
    price: 1999,
    currency: 'USD',
    period: 'per year',
    description: 'The ultimate package designed for established businesses that need end-to-end customs and logistics support.',
    features: [
      'Full warehousing services',
      'Local representation',
      'Partner banking support',
      'Dedicated account manager',
      'Custom integration support',
      'Priority processing',
      'Monthly strategy sessions',
      'Trade lane advisory and consulting',
      'Documents review and hotline support',
      'Access to preferred carrier rates',
      'Customs entry filing',
      'Trucking coordination',
      'Returns management'
    ],
    categorizedFeatures: {
      'Advisory & Compliance': [
        'Trade lane advisory and consulting',
        'Documents review and hotline support',
        'Comprehensive customs compliance guidance'
      ],
      'Operations & Logistics': [
        'Customs entry filing',
        'Trucking coordination',
        'Returns management',
        'Access to preferred carrier rates',
        'Full warehousing services',
        'Access to warehouse network'
      ],
      'Support & Account Management': [
        'Email + priority support',
        'Dedicated account manager',
        'Local representation',
        'Priority processing'
      ],
      'Value-Added Services': [
        'Quarterly business reviews',
        'Monthly strategy sessions',
        'Partner banking support',
        'Custom integration support'
      ]
    },
    highlighted: true,
    savings: 'For established businesses'
  }
];

export const membershipBenefits = {
  points: 'Earn points on every shipping fee',
  upgrades: 'Free tier upgrades at $20,000+ annual spend',
  profitShare: 'Returns resale profit sharing program',
  roi: 'Average ROI: 5,268%'
};