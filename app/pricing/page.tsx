import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <>
      <section className="py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">
            Pricing
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Transparent pricing for every shipping volume
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Plan for operations with predictable platform pricing and flexible shipping rates. Upgrade anytime as your
            lanes, service levels, and monthly volume grow. For annual planning, we can align pricing to your forecast
            and include structured reviews.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start with a Quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border bg-card px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              See Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <PricingTable
            headline="Choose your plan"
            subheadline="Designed for SMBs to enterprise operations. Final shipping rates depend on lanes, weight, dimensions, and service level."
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

          <div className="mt-10 rounded-xl border bg-card shadow-sm p-6">
            <h2 className="text-xl font-bold tracking-tight">Compare plan features</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A quick view of what’s included—so you can choose confidently. If you’re unsure, start with Growth for
              automation and upgrade to Enterprise when you need dedicated support and custom SLAs.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-3 px-4 border-b">Feature</th>
                    <th className="py-3 px-4 border-b">Starter</th>
                    <th className="py-3 px-4 border-b">Growth</th>
                    <th className="py-3 px-4 border-b">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Label creation', starter: true, growth: true, enterprise: true },
                    { feature: 'Pickup scheduling', starter: true, growth: true, enterprise: true },
                    { feature: 'Webhooks & API access', starter: false, growth: true, enterprise: true },
                    { feature: 'Returns portal', starter: false, growth: true, enterprise: true },
                    { feature: 'Dedicated support', starter: false, growth: false, enterprise: true },
                    { feature: 'Custom SLAs', starter: false, growth: false, enterprise: true },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-muted/60 transition-colors">
                      <td className="py-3 px-4 border-b font-medium">{row.feature}</td>
                      <td className="py-3 px-4 border-b text-muted-foreground">{row.starter ? 'Included' : '—'}</td>
                      <td className="py-3 px-4 border-b text-muted-foreground">{row.growth ? 'Included' : '—'}</td>
                      <td className="py-3 px-4 border-b text-muted-foreground">{row.enterprise ? 'Included' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Note: Feature availability may be tailored for regulated goods, special handling, or custom compliance
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 md:py-28 px-4 md:px-8">
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

      <section id="faq" className="py-24 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQs"
            subheadline="Quick answers to common questions before you request a quote."
            items={[
              {
                question: 'Are rates fixed?',
                answer:
                  'Plans cover platform features; shipping rates depend on lanes, weight, dimensions, and service level. We’ll confirm the best options during lane planning and can recommend ways to reduce cost without sacrificing delivery promises.',
              },
              {
                question: 'Can I switch plans later?',
                answer:
                  'Yes—upgrade or downgrade anytime as your volume changes. Many teams start with Growth to enable automation, then move to Enterprise when they need dedicated support and custom SLAs.',
              },
              {
                question: 'Do you support international shipping and customs?',
                answer:
                  'Yes. We support cross-border workflows with documentation guidance and tracking milestones. For complex destinations, we’ll align on requirements up front to reduce holds and delays.',
              },
              {
                question: 'Is there an API?',
                answer:
                  'Growth and Enterprise include API access and webhooks for automation. We can also provide a sandbox workflow so your team can test safely before going live.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Want a quote tailored to your lanes?"
        description="Share origins/destinations, weights, and service levels. We’ll respond with a recommended plan and a clear rollout path for integrations and tracking."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </>
  )
}
