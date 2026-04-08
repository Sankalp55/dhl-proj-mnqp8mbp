import { HeroAurora } from '@/components/blocks/HeroAurora'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function HomePage() {
  return (
    <>
      <HeroAurora
        badge="Bold, fast, and reliable logistics"
        headline="Ship smarter. Deliver faster. Scale globally."
        subheadline="DHL logistics solutions for express shipping, freight, warehousing, and last‑mile delivery—powered by real-time tracking and proactive exception management. Reduce delays, improve visibility, and keep customers informed from pickup to proof of delivery."
        primaryCta={{ label: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />

      <section className="py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
              <p className="text-sm text-muted-foreground">On-time delivery</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">99.2%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Performance you can plan around—supported by proactive exception handling and clear SLAs.
              </p>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
              <p className="text-sm text-muted-foreground">Countries served</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">220+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Global reach for cross-border shipping, freight lanes, and multi-region fulfillment programs.
              </p>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
              <p className="text-sm text-muted-foreground">Avg. pickup time</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{'< 60 min'}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fast dispatch for urgent shipments—especially valuable for time-sensitive ecommerce and B2B parts.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <StatsCounter
              stats={[
                { label: 'Shipments tracked per day', value: 125, suffix: 'k+' },
                { label: 'Avg. exception resolution time', value: 2, suffix: 'h' },
                { label: 'Customer tracking adoption', value: 84, suffix: '%' },
                { label: 'Active integration workflows', value: 340, suffix: '+' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <LogoCloud
            headline="Trusted by teams that move the world"
            logos={[
              { name: 'ACME Retail', imageUrl: '' },
              { name: 'Northwind Manufacturing', imageUrl: '' },
              { name: 'Globex Pharma', imageUrl: '' },
              { name: 'Initech', imageUrl: '' },
              { name: 'Umbrella Foods', imageUrl: '' },
              { name: 'Stark Components', imageUrl: '' },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Logos shown as text marks (no external assets). References are illustrative to demonstrate a realistic
            social-proof layout.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesCards3D
            badge="End-to-end coverage"
            headline="End-to-end logistics, engineered for reliability"
            subheadline="A clean, technical experience with subtle motion and glass-like cards—built to reduce delays, improve visibility, and keep delivery promises across every lane."
            features={[
              {
                title: 'Express & International Shipping',
                description:
                  'Door-to-door delivery with customs-ready documentation support, time-definite options, and proactive ETA updates to keep stakeholders aligned.',
                icon: 'Plane',
              },
              {
                title: 'Freight (Air, Ocean, Road)',
                description:
                  'Flexible routing, consolidated loads, and milestone tracking across carriers—so you can balance cost, speed, and risk per lane.',
                icon: 'Ship',
              },
              {
                title: 'Warehousing & Fulfillment',
                description:
                  'Inventory accuracy, pick/pack SLAs, and returns workflows that scale with demand—ideal for multi-SKU ecommerce and B2B replenishment.',
                icon: 'Warehouse',
              },
              {
                title: 'Last‑Mile Delivery',
                description:
                  'Delivery windows, proof of delivery, and customer notifications built-in—reduce “Where is my order?” tickets and failed deliveries.',
                icon: 'Truck',
              },
              {
                title: 'Real‑Time Tracking',
                description:
                  'Live shipment status, exception alerts, and shareable tracking links—visibility for ops teams and a simple experience for customers.',
                icon: 'Radar',
              },
              {
                title: 'Carbon Reporting',
                description:
                  'Estimate emissions by lane and optimize routes for lower impact—support internal reporting and sustainability targets with practical data.',
                icon: 'Leaf',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Integrations"
            headline="Integrations that fit your stack"
            subheadline="Connect shipping, orders, and inventory without heavy implementation. Start with the essentials, then automate deeper as volume grows."
            features={[
              {
                title: 'Ecommerce platforms',
                description:
                  'Sync orders, labels, and tracking events with Shopify, WooCommerce, and custom storefronts. Auto-create shipments, generate return labels, and keep customers updated.',
                icon: 'ShoppingCart',
              },
              {
                title: 'ERP & OMS',
                description:
                  'Keep fulfillment and finance aligned with SAP, Oracle, and Netsuite workflows. Use status webhooks, invoice-ready exports, and exception queues for control.',
                icon: 'Boxes',
              },
              {
                title: 'Developer-friendly API',
                description:
                  'REST endpoints for rates, labels, pickups, and tracking—built for automation. Use API keys, sandbox mode, and webhook events to integrate safely.',
                icon: 'Code',
              },
            ]}
          />

          <div className="mt-10 rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-medium">Example API request</p>
                <p className="text-sm text-muted-foreground">
                  Create a shipment with a single call—ideal for automated fulfillment pipelines.
                </p>
              </div>
              <a
                href="/contact"
                className="text-sm font-medium underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Request API access
              </a>
            </div>
            <pre className="mt-4 overflow-x-auto rounded-lg border bg-muted p-4 text-sm leading-relaxed">
              <code className="font-mono text-foreground">{`curl -X POST https://api.example.com/v1/shipments \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{"service":"EXPRESS","from":"DE","to":"US","weight":2.4}'`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <PricingTable
            headline="Choose your plan"
            subheadline="Designed for SMBs to enterprise operations. Plans cover platform features; final shipping rates depend on lanes, weight, dimensions, and service level."
            tiers={[
              {
                name: 'Starter',
                price: '$49',
                period: 'month',
                features: [
                  'Basic rate estimates',
                  'Label generation',
                  'Email support',
                  'Standard tracking page',
                ],
                ctaLabel: 'Choose Starter',
                ctaHref: '/contact',
              },
              {
                name: 'Growth',
                price: '$199',
                period: 'month',
                features: [
                  'Discounted rates (volume-based)',
                  'Automations & webhooks',
                  'Returns workflows',
                  'Priority support',
                ],
                ctaLabel: 'Choose Growth',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: [
                  'Dedicated account team',
                  'Custom integrations',
                  'Advanced reporting',
                  'SLA & compliance options',
                ],
                ctaLabel: 'Contact Sales',
                ctaHref: '/contact',
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Need annual planning? We’ll structure pricing to match your lanes and volume forecasts, with options for
            quarterly reviews and SLA reporting.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <TestimonialsAnimated
            headline="Teams shipping at scale trust DHL"
            subheadline="Operational wins you can measure—visibility, fewer exceptions, and faster delivery."
            testimonials={[
              {
                quote:
                  'We reduced delivery exceptions by 28% in the first quarter thanks to proactive alerts and better lane planning.',
                name: 'Operations Lead',
                role: 'Manufacturing Operations',
                company: 'Northwind Manufacturing',
              },
              {
                quote:
                  'The tracking experience is clean and fast—customers stopped emailing us for updates.',
                name: 'Head of CX',
                role: 'Customer Experience',
                company: 'ACME Retail',
              },
              {
                quote:
                  'Integrations were straightforward. Webhooks let us automate status updates across our OMS.',
                name: 'Engineering Manager',
                role: 'Platform Engineering',
                company: 'Initech',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="FAQs"
            subheadline="Quick answers about services, pricing, and how we keep shipments visible from pickup to delivery."
            items={[
              {
                question: 'Are shipping rates fixed?',
                answer:
                  'Plans cover platform features like tracking, automations, and reporting. Shipping rates depend on lanes, weight, dimensions, and the service level you choose. We’ll confirm rates during lane planning and can recommend options based on speed and cost targets.',
              },
              {
                question: 'Do you support international shipping and customs?',
                answer:
                  'Yes. We support cross-border workflows with documentation guidance and milestone tracking. For regulated goods or complex destinations, we’ll align on requirements during onboarding to reduce customs holds and delays.',
              },
              {
                question: 'Can I integrate with my store or OMS?',
                answer:
                  'Yes. Many teams start with order sync and label creation, then add webhooks for real-time status updates and exception queues. Growth and Enterprise plans are best for deeper automation.',
              },
              {
                question: 'What happens when something goes wrong in transit?',
                answer:
                  'Exception events trigger alerts so ops teams can act quickly—reroute, reschedule delivery, or notify customers. The goal is fewer surprises and faster resolution, with reporting to improve lane performance over time.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Ready to move faster with DHL?"
        description="Get a tailored quote in minutes. Your message is sent client-side via your email provider integration—no database required."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  )
}
