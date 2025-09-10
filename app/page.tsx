import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import MembershipSection from '@/components/sections/MembershipSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import NetworkSection from '@/components/sections/NetworkSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="membership">
        <MembershipSection />
      </div>
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <div id="network">
        <NetworkSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  )
}