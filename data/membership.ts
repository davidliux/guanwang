import { MembershipTier } from '@/types';

export const membershipTiers: MembershipTier[] = [
  {
    id: 'entry',
    name: 'Entry',
    price: 999,
    currency: 'USD',
    period: 'per year',
    features: [
      'Trade lane advisory and consulting',
      'Documents review and hotline support',
      'Access to preferred carrier rates',
      'Basic customs compliance guidance',
      'Email support'
    ],
    highlighted: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 1499,
    currency: 'USD',
    period: 'per year',
    features: [
      'Everything in Entry, plus:',
      'Customs entry filing',
      'Trucking coordination',
      'Returns management',
      'Priority support',
      'Quarterly business reviews',
      'Access to warehouse network'
    ],
    highlighted: true,
    savings: 'Most Popular - Best Value'
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 1999,
    currency: 'USD',
    period: 'per year',
    features: [
      'Everything in Pro, plus:',
      'Full warehousing services',
      'Local representation',
      'Partner banking support',
      'Dedicated account manager',
      'Custom integration support',
      'Priority processing',
      'Monthly strategy sessions'
    ],
    highlighted: false,
    savings: 'For established businesses'
  }
];

export const membershipBenefits = {
  points: 'Earn points on every shipping fee',
  upgrades: 'Free tier upgrades at $20,000+ annual spend',
  profitShare: 'Returns resale profit sharing program',
  roi: 'Average ROI: 5,268%'
};