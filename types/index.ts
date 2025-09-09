// Service Model
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'core' | 'value-added';
  features?: string[];
}

// Membership Tier Model
export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  currency: 'USD' | 'CAD';
  period: string;
  features: string[];
  highlighted: boolean;
  savings?: string;
}

// Case Study Model
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement?: string;
  }[];
  roi?: string;
  testimonial?: string;
}

// Contact Form Model
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// Navigation Model
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Tagline Model
export interface TaglineOption {
  main: string;
  sub: string;
}

// Warehouse Location Model
export interface WarehouseLocation {
  country: 'Canada' | 'USA';
  cities: string[];
  description: string;
}