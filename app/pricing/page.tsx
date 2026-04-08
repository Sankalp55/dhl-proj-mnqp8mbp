import { HeroBeams } from '@/components/blocks/HeroBeams'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <div>
      <HeroBeams
        headline="Pricing that scales with your shipping volume"
        highlightText="Transparent plans"
        subheadline="Choose a plan for platform features and support, then request a quote for lane-based shipping rates. Upgrade anytime as your volume grows and your workflows become more automated."
        primaryCta={{ label: 'Start with a Quote', href: '/contact' }}
        secondaryCta={{ label: 'Compare Plans', href: '#pricing' }}
      />

      <section id="pricing" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <PricingTable
            headline="Plans for every shipping operation"
            subheadline="Final rates depend on lanes, weight, and service level. For annual commitments and volume discounts, request a quote and we’ll tailor pricing to your network."
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
                  'Advanced compliance',
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
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Compare what’s included
            </h2>
            <p className="mt-4 text-muted-foreground">
              A clear breakdown to help you choose the right level of control and support. If you’re
              not sure, pick Growth—most teams adopt alerts and webhooks quickly once volume
              increases.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-xl border bg-card shadow-sm">
            <table className="w-full min-w-[720px] border-collapse">
              <thead className="bg-muted">
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold">Starter</th>
                  <th className="text-left p-4 font-semibold">Growth</th>
                  <th className="text-left p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Real-time tracking', starter: true, growth: true, enterprise: true },
                  { feature: 'Exception alerts', starter: false, growth: true, enterprise: true },
                  { feature: 'Webhooks & API access', starter: false, growth: true, enterprise: true },
                  { feature: 'Carbon reporting', starter: false, growth: true, enterprise: true },
                  { feature: 'Custom SLAs', starter: false, growth: false, enterprise: true },
                  {
                    feature: 'Dedicated success manager',
                    starter: false,
                    growth: false,
                    enterprise: true,
                  },
                ].map((row) => (
                  <tr key={row.feature} className="border-b last:border-b-0">
                    <td className="p-4 text-sm font-medium">{row.feature}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {row.starter ? 'Included' : '—'}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {row.growth ? 'Included' : '—'}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {row.enterprise ? 'Included' : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Note: Shipping rates are quoted separately and depend on lane, weight, dimensions, and
            service level.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <TestimonialsAnimated
            headline="Customers see measurable improvements"
            subheadline="Better ETAs, fewer exceptions, and faster resolution times."
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
                  'We finally have one view of shipments across carriers and lanes. Exception alerts keep our team ahead of issues.',
                name: 'Supply Chain Director',
                role: 'Supply Chain',
                company: 'Summit Manufacturing',
              },
              {
                quote:
                  'Annual planning made budgeting easier, and the reporting is clean enough for finance and ops to share.',
                name: 'Finance Ops Manager',
                role: 'Finance Operations',
                company: 'BrightFoods',
              },
            ]}
          />
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="Quick answers to common questions about plans and rates."
            items={[
              {
                question: 'Are shipping rates included in the plan price?',
                answer:
                  'Plans cover the platform features and support. Shipping rates depend on lane, weight, dimensions, and service level. We’ll provide lane-based pricing during quoting.',
              },
              {
                question: 'Can I switch plans later?',
                answer:
                  'Yes. Upgrade anytime as your volume grows. Enterprise plans are tailored to your network, SLAs, and integration needs.',
              },
              {
                question: 'Do you offer volume discounts?',
                answer:
                  'Yes. We can structure pricing based on committed volume and lanes. Request a quote and we’ll recommend the most cost-effective setup for your network.',
              },
              {
                question: 'Is there onboarding support?',
                answer:
                  'Growth and Enterprise include guided onboarding. Enterprise can include dedicated implementation support and governance for multi-site rollouts.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <CTASparkles
            headline="Get lane-based pricing in minutes"
            description="Share origins, destinations, weights, and monthly volume. We’ll respond within 1 business day with a tailored quote and recommended plan."
            ctaLabel="Request a Quote"
            ctaHref="/contact"
          />
        </div>
      </section>
    </div>
  )
}
