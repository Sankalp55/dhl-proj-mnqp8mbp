import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">
              Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Logistics services built for speed, control, and confidence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From urgent express shipments to full supply-chain operations—choose the services that match your business
              goals. DHL teams help you standardize processes, reduce exceptions, and keep every stakeholder informed with
              clear milestones and proactive alerts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Talk to an Expert
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border bg-card px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service-cards" className="py-24 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Core offerings"
            headline="Core offerings"
            subheadline="Clear options with transparent capabilities and SLAs—so you can choose what you need today and expand as volume grows."
            features={[
              {
                title: 'Express Shipping',
                description:
                  'Time-definite delivery with priority handling and customs support. Ideal for urgent replenishment, spare parts, and high-value goods.',
                icon: 'Zap',
              },
              {
                title: 'Freight Forwarding',
                description:
                  'Air, ocean, and road freight with optimized routing and consolidation. Balance cost and speed with milestone visibility across carriers.',
                icon: 'Route',
              },
              {
                title: 'Warehousing',
                description:
                  'Storage, kitting, pick/pack, and inventory controls designed for accuracy. Support seasonal peaks with consistent SLAs.',
                icon: 'Package',
              },
              {
                title: 'Last‑Mile & Returns',
                description:
                  'Delivery windows, proof of delivery, and streamlined reverse logistics. Reduce failed deliveries and improve customer satisfaction.',
                icon: 'Repeat',
              },
            ]}
          />
        </div>
      </section>

      <section id="how-it-works" className="py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">
                Process
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A predictable flow from quote to delivery—designed to reduce exceptions. We start with lane planning and
                service-level fit, then build reliable pickup, labeling, and tracking workflows that scale.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: '1) Quote & lane planning',
                    description:
                      'We confirm service level, lanes, weights, and delivery windows. You’ll get clarity on trade-offs between speed, cost, and resilience.',
                  },
                  {
                    title: '2) Pickup & label generation',
                    description:
                      'Schedule pickup, generate labels, and validate customs documentation. Standardization here prevents delays later.',
                  },
                  {
                    title: '3) In-transit visibility',
                    description:
                      'Track milestones, receive alerts, and resolve exceptions quickly. Share tracking links with customers or internal teams.',
                  },
                  {
                    title: '4) Delivery & proof',
                    description:
                      'Proof of delivery, returns handling, and performance reporting. Review lane performance and continuously improve.',
                  },
                ].map((step) => (
                  <div key={step.title} className="rounded-xl border bg-card shadow-sm p-5">
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border bg-card shadow-sm p-6">
              <h3 className="text-xl font-bold tracking-tight">Tracking (Demo)</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Your operations team should never have to guess. A modern tracking experience includes clear milestones,
                proactive exception flags, and a consistent proof-of-delivery record.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { label: 'Shipment created', value: 'Label generated + pickup scheduled' },
                  { label: 'Picked up', value: 'Driver scan confirmed' },
                  { label: 'In transit', value: 'Milestones updated per hub' },
                  { label: 'Out for delivery', value: 'Delivery window confirmed' },
                  { label: 'Delivered', value: 'Proof of delivery captured' },
                ].map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4 rounded-lg border bg-muted p-4">
                    <div className="text-sm font-medium">{row.label}</div>
                    <div className="text-sm text-muted-foreground text-right">{row.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity w-full"
                >
                  Request a tracking walkthrough
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-24 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Automation"
            headline="Automate shipping with integrations"
            subheadline="Reduce manual work and errors by connecting your tools. Start with order sync and labels, then add tracking webhooks and analytics exports as you scale."
            features={[
              {
                title: 'Order sync',
                description:
                  'Pull orders automatically and create shipments in bulk. Reduce copy/paste errors and speed up fulfillment during peak.',
                icon: 'RefreshCw',
              },
              {
                title: 'Tracking events',
                description:
                  'Push tracking updates to customers and internal systems. Keep support volume low with proactive notifications.',
                icon: 'Bell',
              },
              {
                title: 'Address validation',
                description:
                  'Prevent failed deliveries with validation and correction prompts at checkout or during order review.',
                icon: 'MapPin',
              },
              {
                title: 'Analytics exports',
                description:
                  'Export lane performance and costs for finance and ops. Monitor exceptions, on-time performance, and spend by lane.',
                icon: 'BarChart3',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Services FAQs"
            subheadline="A few practical details teams ask about when selecting services and setting up lanes."
            items={[
              {
                question: 'Can I combine services (e.g., warehousing + last-mile)?',
                answer:
                  'Yes. Many teams use warehousing for inventory positioning and pick/pack, then last‑mile delivery for consistent customer experience. We’ll help define SLAs and handoffs so the workflow stays predictable.',
              },
              {
                question: 'Do you support returns workflows?',
                answer:
                  'Yes. Returns can be configured with branded labels, drop-off options, and status milestones so customers and ops teams have the same visibility.',
              },
              {
                question: 'How do you handle exceptions?',
                answer:
                  'Exception events trigger alerts and queues so your team can act quickly. We focus on early detection, clear ownership, and post-incident reporting to reduce repeat issues.',
              },
            ]}
          />
        </div>
      </section>

      <CTAVortex
        headline="Need a custom logistics plan?"
        description="We’ll recommend the right mix of services for your lanes, volumes, and SLAs—then map a rollout plan that fits your team and tools."
        ctaLabel="Get a Custom Plan"
        ctaHref="/contact"
      />
    </>
  )
}
