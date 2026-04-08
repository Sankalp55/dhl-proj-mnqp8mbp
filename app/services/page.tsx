import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ServicesPage() {
  return (
    <div>
      <HeroSpotlight
        headline="Logistics services built for speed and control"
        subheadline="From express parcels to freight and supply chain solutions—choose the right service level for every lane. We combine disciplined operations with clear tracking so your team can plan, communicate, and deliver reliably."
        primaryCta={{ label: 'Talk to an Expert', href: '/contact' }}
        secondaryCta={{ label: 'See Pricing', href: '/pricing' }}
      />

      <section id="features" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How shipments move end-to-end
            </h2>
            <p className="mt-4 text-muted-foreground">
              Predictability comes from process. Our operating model is designed to reduce surprises
              and improve delivery performance with consistent scan events, clear handoffs, and
              proactive exception handling.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '1) Pickup',
                description:
                  'Scheduled pickups with scan events and chain-of-custody. Your team gets confirmation that freight is in motion—no guessing.',
              },
              {
                title: '2) Sort & linehaul',
                description:
                  'Optimized routing through hubs for faster transit. We prioritize reliable lanes and track milestones so ETAs stay realistic.',
              },
              {
                title: '3) Customs clearance',
                description:
                  'Documentation checks and proactive exception handling to reduce holds. When something needs attention, you’ll know early.',
              },
              {
                title: '4) Last-mile delivery',
                description:
                  'Recipient notifications, delivery windows where available, and proof of delivery for customer service and audit needs.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-cards" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesCards3D
            badge="Service levels"
            headline="Choose the right service for the job"
            subheadline="Flexible options for parcels, freight, and supply chain operations—each designed to balance speed, cost, and control for your lanes."
            features={[
              {
                title: 'Express Parcel',
                description:
                  'Time-definite delivery with real-time tracking, recipient notifications, and signature options for high-value or time-sensitive shipments.',
              },
              {
                title: 'Freight (Air & Ocean)',
                description:
                  'Cost-effective freight with lane planning and milestone visibility. Ideal for predictable replenishment and international networks.',
              },
              {
                title: 'Warehousing & Fulfillment',
                description:
                  'Storage, pick/pack, and returns with inventory visibility. Build SLA-based operations that keep order accuracy high and cycle times low.',
              },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Express Parcel highlights',
                items: ['Domestic & international options', 'Delivery windows', 'Proof of delivery'],
              },
              {
                title: 'Freight highlights',
                items: ['Consolidation', 'Port-to-door support', 'Customs guidance'],
              },
              {
                title: 'Warehousing highlights',
                items: ['SLA-based operations', 'Returns processing', 'Inventory reporting'],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border bg-muted p-6 shadow-sm">
                <h3 className="font-semibold tracking-tight">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {card.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Visibility & control"
            headline="Operational visibility across teams"
            subheadline="Bring tracking and performance data into your dashboards and workflows. Start simple, then add automation as your volume grows."
            features={[
              {
                title: 'Tracking API',
                description:
                  'Embed tracking and events in your portal so customers and internal teams see the same source of truth.',
              },
              {
                title: 'Webhooks',
                description:
                  'Trigger actions on pickup, delay, and delivery—route exceptions to the right team automatically.',
              },
              {
                title: 'Analytics exports',
                description:
                  'CSV/JSON exports for BI and finance to measure performance, cost, and SLA adherence over time.',
              },
              {
                title: 'Role-based access',
                description:
                  'Control who sees what across locations and teams, with permissions designed for multi-site operations.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <TestimonialsAnimated
            headline="Built for teams that ship at scale"
            subheadline="Operational leaders rely on DHL for predictable delivery and clear communication—especially when the network gets complex."
            testimonials={[
              {
                quote:
                  'We reduced late deliveries by 18% after switching lanes and setting exception alerts. The visibility is a game changer.',
                name: 'Operations Manager',
                role: 'Operations',
                company: 'Northwind Retail',
              },
              {
                quote:
                  'Customs support and documentation checks helped us avoid costly holds during peak season.',
                name: 'Logistics Lead',
                role: 'Logistics',
                company: 'Helio Pharma',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Services FAQ"
            subheadline="Common questions about service levels, handoffs, and getting started."
            items={[
              {
                question: 'Which service should I choose for time-sensitive shipments?',
                answer:
                  'Express Parcel is typically the best fit for time-definite delivery and high-visibility needs. For international replenishment where cost is a priority, Freight (Air & Ocean) may be a better match.',
              },
              {
                question: 'Do you support returns workflows?',
                answer:
                  'Yes. We can support returns labels, scan events, and reporting so your team can manage reverse logistics with the same visibility as outbound shipments.',
              },
              {
                question: 'Can you handle multi-site operations?',
                answer:
                  'Yes. Role-based access and structured reporting make it easier to manage multiple facilities, lanes, and stakeholders without losing accountability.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <CTASparkles
            headline="Talk to a logistics expert"
            description="Tell us your lanes, volume, and service requirements. We’ll recommend the best service mix and provide lane-based pricing."
            ctaLabel="Request a Quote"
            ctaHref="/contact"
          />
        </div>
      </section>
    </div>
  )
}
