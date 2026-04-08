import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ContactPage() {
  return (
    <div>
      <HeroSpotlight
        headline="Get a quote or talk to a logistics expert"
        subheadline="Share your lanes, volume, and service needs. We’ll respond within 1 business day with the next steps and lane-based pricing recommendations."
        primaryCta={{ label: 'Send Message', href: '#contact-form' }}
        secondaryCta={{ label: 'View Pricing', href: '/pricing' }}
      />

      <section id="contact-form" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <ContactForm
            headline="Contact form"
            subheadline="Client-side only. No database. Use this form to draft your request and send it—include origins/destinations, weights, timelines, and any special handling requirements."
            contactInfo={[
              { label: 'Sales', value: 'sales@dhl-logistics.example' },
              { label: 'Support', value: 'support@dhl-logistics.example' },
              { label: 'Phone', value: '+1 (555) 010-2020' },
              { label: 'Hours', value: 'Mon–Fri, 9am–6pm' },
            ]}
          />

          <div className="mt-6 rounded-xl border bg-muted p-5 text-sm text-muted-foreground">
            For the fastest quote, include: origin & destination countries/postal codes, average
            weight and dimensions, monthly volume, and whether you need express delivery, freight,
            or warehousing/fulfillment.
          </div>
        </div>
      </section>

      <section id="contact-details" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Contact options"
            headline="Other ways to reach us"
            subheadline="Choose the channel that fits your workflow. If you’re not sure where to start, email Sales with your lanes and volume."
            features={[
              { title: 'Sales', description: 'sales@dhl-logistics.example' },
              { title: 'Support', description: 'support@dhl-logistics.example' },
              { title: 'Phone', description: '+1 (555) 010-2020' },
              { title: 'Hours', description: 'Mon–Fri, 9am–6pm' },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Contact FAQ"
            subheadline="What to expect after you reach out."
            items={[
              {
                question: 'How quickly will you respond?',
                answer:
                  'Typically within 1 business day. Enterprise requests may include a short discovery call to confirm lanes, SLAs, and integration requirements.',
              },
              {
                question: 'What information helps you quote accurately?',
                answer:
                  'Origins/destinations, weights/dimensions, monthly volume, service level (express vs. economy), and any special handling or compliance requirements.',
              },
              {
                question: 'Can you support international shipping and customs?',
                answer:
                  'Yes. We can guide documentation and compliance requirements and help reduce clearance delays with proactive exception handling.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <CTASparkles
            headline="Move faster this quarter"
            description="Get a tailored service mix and pricing recommendation for your lanes—built for visibility, accountability, and scale."
            ctaLabel="Request a Quote"
            ctaHref="#contact-form"
          />
        </div>
      </section>
    </div>
  )
}
