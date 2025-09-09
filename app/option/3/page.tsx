import { Metadata } from 'next';
import OptionHero from '@/components/option/OptionHero';
import OptionFeatures from '@/components/option/OptionFeatures';
import OptionCTA from '@/components/option/OptionCTA';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import { taglineOptions } from '@/data/taglines';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Expertise Focus - Market Leadership | NAECLA',
  description: 'Turning global exporters into local North American players. 70+ years of expertise at your service.',
};

const theme = {
  gradient: 'bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900',
  primary: 'bg-green-600',
  secondary: 'bg-green-600/20',
  accent: 'text-green-400'
};

export default function Option3Page() {
  const tagline = taglineOptions[3];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <OptionHero 
        optionNumber={3}
        tagline={tagline.main}
        subline={tagline.sub}
        theme={theme}
      />
      
      <OptionFeatures 
        optionNumber={3}
        theme={theme}
      />

      {/* Expertise Showcase */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Decades of Excellence
            </h2>
            <p className="text-xl text-gray-400">
              Our combined expertise delivers unmatched results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-green-400 mb-4">70+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Years Combined Experience</h3>
              <p className="text-gray-400">Industry veterans who've seen it all</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-green-400 mb-4">100%</div>
              <h3 className="text-xl font-semibold text-white mb-2">In-House Expertise</h3>
              <p className="text-gray-400">Licensed customs brokers on staff</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-5xl font-bold text-green-400 mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-white mb-2">Always Available</h3>
              <p className="text-gray-400">Round-the-clock expert support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories with Focus on ROI */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Track Record of Success
            </h2>
            <p className="text-xl text-gray-400">
              Real results from businesses that trusted our expertise
            </p>
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      {/* Market Dominance Stats */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Leadership By Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$131K+</div>
              <p className="text-gray-400">Average Annual Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10,000+</div>
              <p className="text-gray-400">Daily Deliveries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">8+</div>
              <p className="text-gray-400">Strategic Locations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5,268%</div>
              <p className="text-gray-400">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      <OptionCTA 
        optionNumber={3}
        theme={theme}
      />
    </main>
  );
}