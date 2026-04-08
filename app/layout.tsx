import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHL Logistics — Fast, Reliable Shipping with Real-Time Visibility',
  description:
    'Modern logistics for businesses that can’t afford delays—track, optimize, and scale deliveries with confidence. Explore services, pricing, integrations, and request a tailored quote.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <NavbarSticky
          logo="DHL Logistics"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Get a Quote"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="DHL Logistics"
          description="Fast, reliable logistics—delivered with precision. We help teams ship smarter with real-time visibility, proactive exception handling, and service levels designed for every lane."
          columns={[
            {
              title: 'DHL Logistics',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Solutions',
              links: [
                { label: 'Express Parcel', href: '/services#service-cards' },
                { label: 'Freight', href: '/services#service-cards' },
                { label: 'Warehousing', href: '/services#service-cards' },
                { label: 'Integrations', href: '/#integrations' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'FAQ', href: '/pricing#faq' },
                { label: 'Tracking', href: '/services#features' },
                { label: 'Support', href: '/contact#contact-details' },
              ],
            },
          ]}
          copyright="© 2026 DHL Logistics. All rights reserved."
        />
      </body>
    </html>
  )
}
