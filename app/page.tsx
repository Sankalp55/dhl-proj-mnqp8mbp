import { HeroAurora } from '@/components/blocks/HeroAurora'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { StatsCounter } from '@/components/blocks/StatsCounter'

export default function HomePage() {
  return (
    <div>
      <HeroAurora
        badge="Fast, reliable logistics—delivered with precision."
        headline="Ship smarter. Deliver faster."
        subheadline="Modern logistics for businesses that can’t afford delays—track, optimize, and scale deliveries with confidence. Get clear ETAs, proactive exception alerts, and the operational control your team needs to hit service targets."
        primaryCta={{ label: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl border bg-card p-6 md:p-10 shadow-sm">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Performance you can plan around
              </h2>
              <p className="text-muted-foreground">
                Logistics works best when it’s predictable. We focus on measurable outcomes—on-time
                performance, fast exception resolution, and clean reporting—so operations, customer
                experience, and finance stay aligned.
              </p>
            </div>

            <div className="mt-8">
              <StatsCounter
                stats={[
                  { label: 'Avg. first response time', value: 4, suffix: ' hrs' },
                  { label: 'Milestone events per shipment', value: 12, suffix: '+' },
                  { label: 'Countries served', value: 220, suffix: '+' },
                  { label: 'On-time improvement (typical)', value: 10, suffix: '–20%' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <LogoCloud
            headline="Trusted by teams shipping worldwide"
            logos={[
              { name: 'AEROPARTS CO.', imageUrl: '' },
              { name: 'NORTHWIND RETAIL', imageUrl: '' },
              { name: 'HELIO PHARMA', imageUrl: '' },
              { name: 'METRO ELECTRONICS', imageUrl: '' },
              { name: 'SUMMIT MANUFACTURING', imageUrl: '' },
              { name: 'BRIGHTFOODS', imageUrl: '' },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Logistics leaders choose DHL for speed, visibility, and reliability—especially when
            volume spikes and customer expectations rise.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesCards3D
            badge="Core capabilities"
            headline="Everything you need to move goods with certainty"
            subheadline="A clean, technical experience with real-time visibility and proactive exception handling—built for operators who need clear ownership and fast decisions."
            features={[
              {
                title: 'Real-time tracking',
                description:
                  'Live shipment status with milestone events, scan history, and predictive ETAs you can share with customers and internal teams.',
              },
              {
                title: 'Customs & compliance',
                description:
                  'Documentation guidance and compliance checks to reduce border delays and avoid preventable holds on time-sensitive lanes.',
              },
              {
                title: 'Route optimization',
                description:
                  'Smarter routing recommendations to reduce transit time and cost across common lanes—without sacrificing reliability.',
              },
              {
                title: 'Exception alerts',
                description:
                  'Instant notifications when shipments deviate from plan, with clear next steps so your team can resolve issues quickly.',
              },
              {
                title: 'Carbon reporting',
                description:
                  'Emissions estimates and reporting to support sustainability goals and give stakeholders consistent metrics.',
              },
            ]}
          />
        </div>
      </section>

      <section id="integrations" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Integrations"
            headline="Integrations that fit your workflow"
            subheadline="Connect shipping data to the tools your team already uses—no heavy setup. Start with a lightweight integration and expand to webhooks and exports as you scale."
            features={[
              {
                title: 'Commerce platforms',
                description:
                  'Sync orders and labels with Shopify, WooCommerce, and custom storefronts. Auto-create shipments, print labels in bulk, and streamline returns workflows.',
              },
              {
                title: 'ERP & inventory',
                description:
                  'Connect to SAP, NetSuite, and warehouse systems for end-to-end visibility. Keep fulfillment inventory-aware with ASN support and scan events.',
              },
              {
                title: 'Team notifications',
                description:
                  'Keep stakeholders updated via Slack, email, and webhooks. Route exceptions to the right channel and confirm deliveries automatically.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <PricingTable
            headline="Plans for every shipping operation"
            subheadline="Plans cover the platform features and support. Final shipping rates depend on lanes, weight, dimensions, and service level—request a quote for exact pricing."
            tiers={[
              {
                name: 'Starter',
                price: '$49',
                period: 'month',
                features: [
                  'Tracking dashboard',
                  'Email notifications',
                  'Basic reporting',
                  'Standard support',
                ],
                ctaLabel: 'Choose Starter',
                ctaHref: '/contact',
              },
              {
                name: 'Growth',
                price: '$149',
                period: 'month',
                features: [
                  'Everything in Starter',
                  'Webhooks',
                  'Bulk label workflows',
                  'Exception alerts',
                  'Priority support',
                ],
                ctaLabel: 'Choose Growth',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'tailored',
                features: [
                  'Custom SLAs',
                  'Dedicated success manager',
                  'Advanced compliance guidance',
                  'Custom integrations',
                  'Multi-site controls',
                ],
                ctaLabel: 'Contact Sales',
                ctaHref: '/contact',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <TestimonialsAnimated
            headline="Customers see measurable improvements"
            subheadline="Better ETAs, fewer exceptions, and faster resolution times—so teams spend less time chasing updates and more time improving performance."
            testimonials={[
              {
                quote:
                  'The Growth plan paid for itself in the first month—fewer support tickets and clearer ETAs for customers.',
                name: 'Customer Experience Lead',
                role: 'CX Operations',
                company: 'Metro Electronics',
              },
              {
                quote:
                  'We finally have one view of shipments across lanes. Exception alerts keep our team ahead of issues instead of reacting after the fact.',
                name: 'Supply Chain Director',
                role: 'Supply Chain',
                company: 'Summit Manufacturing',
              },
              {
                quote:
                  'Annual planning made budgeting easier, and the reporting is clean enough for finance and ops to share without rework.',
                name: 'Finance Ops Manager',
                role: 'Finance Operations',
                company: 'BrightFoods',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Frequently asked questions"
            subheadline="Quick answers on quoting, service levels, and what you’ll need to get started."
            items={[
              {
                question: 'How fast can I get a quote?',
                answer:
                  'Most requests receive a response within 1 business day. If your lanes require custom routing or compliance review, we’ll schedule a short discovery call to confirm requirements and timelines.',
              },
              {
                question: 'Do plans include shipping rates?',
                answer:
                  'Plans cover platform features and support. Shipping rates depend on lane, weight, dimensions, and service level. We’ll provide lane-based pricing during quoting so you can forecast accurately.',
              },
              {
                question: 'Can you support international shipping and customs?',
                answer:
                  'Yes. We help you prepare documentation, reduce avoidable delays, and handle exceptions proactively—especially for time-sensitive or regulated shipments.',
              },
              {
                question: 'What does “exception alerts” mean in practice?',
                answer:
                  'When a shipment deviates from plan—missed scan, delay at hub, customs hold, or delivery attempt failure—you’ll get an alert with context and recommended next steps so the right team can act quickly.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <CTASparkles
            headline="Ready to upgrade your logistics?"
            description="Get a tailored quote in minutes and start shipping with full visibility—clear milestones, proactive alerts, and reporting your team can trust."
            ctaLabel="Request a Quote"
            ctaHref="/contact"
          />
          <div className="mt-6 text-sm text-muted-foreground">
            Prefer to evaluate first? Review plans on the pricing page, then request a quote for your
            lanes and volume.
          </div>
        </div>
      </section>
    </div>
  )
}
