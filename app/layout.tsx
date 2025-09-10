import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/urbanist/400.css'
import '@fontsource/urbanist/500.css'
import '@fontsource/urbanist/600.css'
import '@fontsource/urbanist/700.css'
import '@fontsource/urbanist/800.css'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NAECLA - 北美电商物流联盟',
  description: 'Simplify your Canada and US imports with NAECLA\'s comprehensive logistics solutions. From customs clearance to last-mile delivery.',
  keywords: 'logistics, shipping, customs, warehousing, FBA, Canada, USA, NAECLA, freight forwarding',
  openGraph: {
    title: 'NAECLA - Your Bridge to North American Markets',
    description: 'Expert logistics solutions that transform complex international trade into seamless business growth.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-wash text-white min-h-screen`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
