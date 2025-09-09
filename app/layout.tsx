import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NAECLA - North America E-Commerce Logistics Association',
  description: 'Your Gateway to Seamless Cross-Border Shipping Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}