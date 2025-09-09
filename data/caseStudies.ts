import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'eagle-international',
    title: 'Eagle International Inc.',
    client: 'Toronto-based Logistics Company',
    industry: 'Freight Forwarding',
    challenge: 'High costs and inefficiencies in customs clearance and last-mile delivery for ocean and air freight imports to Canada.',
    solution: 'NAECLA membership provided competitive rates for customs brokerage, port pickup, and FBA delivery services.',
    results: [
      {
        metric: 'Customs Savings',
        value: '$75,600/year',
        improvement: 'From $475 to $360 per container'
      },
      {
        metric: 'Port Pickup Savings',
        value: '$34,500/year',
        improvement: 'From $95 to $50 per shipment'
      },
      {
        metric: 'FBA Delivery Savings',
        value: '$21,600/year',
        improvement: 'Monthly savings of $1,800'
      }
    ],
    roi: '5,268%',
    testimonial: 'The $1,999 CAD membership fee was recovered in less than one month. Total annual savings exceeded $131,700.'
  },
  {
    id: 'chinese-amazon-seller',
    title: 'Amazon Seller Transformation',
    client: 'Guangzhou Portable Sauna Brand',
    industry: 'E-commerce',
    challenge: '80% return loss rate due to voltage issues, 9-day average delivery with 28% customs delays.',
    solution: 'NAECLA Pro membership with Toronto warehouse integration, returns consolidation, and streamlined customs clearance.',
    results: [
      {
        metric: 'Return Loss Rate',
        value: '46%',
        improvement: 'Down from 80% (via resale program)'
      },
      {
        metric: 'Delivery Time',
        value: '3.5 days',
        improvement: 'Down from 9 days average'
      },
      {
        metric: 'Monthly Savings',
        value: '$5,850',
        improvement: '29% reduction in logistics costs'
      }
    ],
    roi: '$70,200 annual savings',
    testimonial: 'NAECLA gave us warehousing and returns recovery options we couldn\'t find anywhere else. Their API + routing made our Amazon logistics truly scalable.'
  },
  {
    id: 'customs-crisis',
    title: '24-Hour Customs Resolution',
    client: 'Chinese Electronics Brand',
    industry: 'B2C Electronics',
    challenge: 'Parcels held by CBSA for weeks due to missing NRI compliance documentation.',
    solution: 'NAECLA matched them with licensed Canadian IOR and connected with experienced customs broker offering 50% discounts.',
    results: [
      {
        metric: 'Clearance Time',
        value: '1 business day',
        improvement: 'From 4+ weeks stuck'
      },
      {
        metric: 'Monthly Volume',
        value: '400 packages',
        improvement: 'Now processing smoothly'
      },
      {
        metric: 'Monthly Savings',
        value: '$2,900',
        improvement: 'Membership ROI in one month'
      }
    ],
    testimonial: 'We had no idea how to get our products into Canada legally. NAECLA not only found us a solution in one day — they basically saved our cross-border business.'
  },
  {
    id: 'canada-post-strike',
    title: 'Canada Post Strike Solution',
    client: 'Hangzhou Fashion Platform',
    industry: 'Fashion & Accessories',
    challenge: 'Canada Post strike disrupted small parcel deliveries with 3-4 week delays and frozen cash flow.',
    solution: 'NAECLA provided early alerts, curated list of alternative carriers, and tailored logistics rerouting.',
    results: [
      {
        metric: 'Delivery Days',
        value: '5-8 days',
        improvement: 'During strike period'
      },
      {
        metric: 'Total Savings',
        value: '$109,000',
        improvement: 'Avoided losses'
      },
      {
        metric: 'Uptime',
        value: '100%',
        improvement: 'While competitors halted'
      }
    ],
    testimonial: 'While many platforms halted Canadian sales, we stayed online thanks to NAECLA\'s quick action and smart routing.'
  }
];