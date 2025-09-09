import { Metadata } from 'next';
import OptionHero from '@/components/option/OptionHero';
import OptionFeatures from '@/components/option/OptionFeatures';
import OptionCTA from '@/components/option/OptionCTA';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import { taglineOptions } from '@/data/taglines';

export const metadata: Metadata = {
  title: 'Simplicity Focus - Streamlined Logistics | NAECLA',
  description: 'We make your shipping journey simple, from border to buyer. Streamlined logistics solutions for cross-border success.',
};

const theme = {
  gradient: 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900',
  primary: 'bg-blue-600',
  secondary: 'bg-blue-600/20',
  accent: 'text-blue-400'
};

export default function Option1Page() {
  const tagline = taglineOptions[1];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <OptionHero 
        optionNumber={1}
        tagline={tagline.main}
        subline={tagline.sub}
        theme={theme}
      />
      
      <OptionFeatures 
        optionNumber={1}
        theme={theme}
      />

      {/* Relevant Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simplified Services for Your Success
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need, nothing you don't - streamlined for efficiency
            </p>
          </div>
        </div>
        <ServicesSection />
      </section>

      {/* Case Studies */}
      <CaseStudiesSection />

      <OptionCTA 
        optionNumber={1}
        theme={theme}
      />
    </main>
  );
}