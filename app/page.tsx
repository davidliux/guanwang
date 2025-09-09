import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import MembershipSection from '@/components/sections/MembershipSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import NetworkSection from '@/components/sections/NetworkSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <HeroSection />
      <ServicesSection />
      <MembershipSection />
      <CaseStudiesSection />
      <NetworkSection />
      <ContactSection />
    </main>
  )
}