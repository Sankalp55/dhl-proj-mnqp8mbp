import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHL Logistics — Modern Shipping, Freight & Fulfillment',
  description:
    'Bold, fast, and reliable logistics—built for modern supply chains. Express shipping, freight, warehousing, and last‑mile delivery with real-time tracking and proactive exception management.',
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
          description="Bold, fast, and reliable logistics—built for modern supply chains. Express, freight, warehousing, and last‑mile delivery with visibility you can act on."
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
                { label: 'Express Shipping', href: '/services#service-cards' },
                { label: 'Freight', href: '/services#service-cards' },
                { label: 'Warehousing', href: '/services#service-cards' },
                { label: 'Integrations', href: '/services#integrations' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'FAQs', href: '/pricing#faq' },
                { label: 'Testimonials', href: '/pricing#testimonials' },
                { label: 'Tracking (Demo)', href: '/services#how-it-works' },
              ],
            },
          ]}
          copyright="© 2026 DHL Logistics. All rights reserved."
        />
      </body>
    </html>
  )
}
