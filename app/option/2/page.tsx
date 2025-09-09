import { Metadata } from 'next';
import OptionHero from '@/components/option/OptionHero';
import OptionFeatures from '@/components/option/OptionFeatures';
import OptionCTA from '@/components/option/OptionCTA';
import MembershipSection from '@/components/sections/MembershipSection';
import NetworkSection from '@/components/sections/NetworkSection';
import { taglineOptions } from '@/data/taglines';

export const metadata: Metadata = {
  title: 'Partnership Focus - Strategic Alliance | NAECLA',
  description: 'More than logistics — a partner in your success. Strategic partnership for cross-border growth.',
};

const theme = {
  gradient: 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900',
  primary: 'bg-purple-600',
  secondary: 'bg-purple-600/20',
  accent: 'text-purple-400'
};

export default function Option2Page() {
  const tagline = taglineOptions[2];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <OptionHero 
        optionNumber={2}
        tagline={tagline.main}
        subline={tagline.sub}
        theme={theme}
      />
      
      <OptionFeatures 
        optionNumber={2}
        theme={theme}
      />

      {/* Partnership Benefits */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership That Grows With You
            </h2>
            <p className="text-xl text-gray-400">
              Choose the membership level that matches your ambitions
            </p>
          </div>
        </div>
      </section>
      
      <MembershipSection />

      {/* Network Strength */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Network, Your Advantage
            </h2>
            <p className="text-xl text-gray-400">
              Leverage our extensive infrastructure and partnerships
            </p>
          </div>
        </div>
      </section>

      <NetworkSection />

      <OptionCTA 
        optionNumber={2}
        theme={theme}
      />
    </main>
  );
}