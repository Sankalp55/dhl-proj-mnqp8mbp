import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ContactPage() {
  return (
    <>
      <section className="py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">
            Contact
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Contact DHL</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Get a quote, ask a question, or request a logistics consultation. Responses typically within 1 business day.
            Share origins/destinations, approximate weights, and your target delivery windows—we’ll take it from there.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send a Message
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

      <section id="contact-form" className="py-24 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <ContactForm
            headline="Request a quote"
            subheadline="Client-side form only (no database). Configure EmailJS / Formspree / a client-side email provider as needed. Include lane details so we can recommend the right service level and plan."
            contactInfo={[
              { label: 'Sales', value: 'sales@example.com' },
              { label: 'Support', value: 'support@example.com' },
              { label: 'Phone', value: '+1 (555) 123‑4567' },
              { label: 'HQ', value: '123 Logistics Way, Suite 200' },
            ]}
          />

          <div className="mt-8 rounded-xl border bg-card shadow-sm p-6">
            <h2 className="text-lg font-bold tracking-tight">What to include for the fastest quote</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              If you don’t have exact numbers, that’s fine—estimates help. The more context you provide, the faster we
              can recommend lanes, service levels, and an onboarding plan.
            </p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="rounded-lg border bg-muted p-3">Origins and destinations (countries / cities)</li>
              <li className="rounded-lg border bg-muted p-3">Average weight and dimensions</li>
              <li className="rounded-lg border bg-muted p-3">Monthly volume (estimate is fine)</li>
              <li className="rounded-lg border bg-muted p-3">Target delivery windows and SLAs</li>
              <li className="rounded-lg border bg-muted p-3">Any special handling or compliance needs</li>
              <li className="rounded-lg border bg-muted p-3">Your current tools (store, OMS, ERP)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FeaturesGrid
            badge="Contact details"
            headline="Other ways to reach us"
            subheadline="Choose the channel that fits your workflow."
            features={[
              { title: 'Sales', description: 'sales@example.com • Mon–Fri', icon: 'Mail' },
              { title: 'Support', description: 'support@example.com • 24/7 for Growth+ plans', icon: 'LifeBuoy' },
              { title: 'Phone', description: '+1 (555) 123‑4567', icon: 'Phone' },
              { title: 'HQ', description: '123 Logistics Way, Suite 200', icon: 'Building2' },
            ]}
          />
        </div>
      </section>

      <section className="py-24 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Contact FAQs"
            subheadline="What happens after you submit the form."
            items={[
              {
                question: 'How fast will I get a response?',
                answer:
                  'Typically within 1 business day. Enterprise requests may include a short discovery call to confirm lanes, service levels, and integration needs.',
              },
              {
                question: 'Do I need exact shipment details?',
                answer:
                  'No—share what you know. We can refine lanes, weights, and service levels together and recommend a rollout plan based on your current tools.',
              },
              {
                question: 'Can you support multiple warehouses?',
                answer:
                  'Yes. We can design multi-node fulfillment and routing strategies, including inventory positioning recommendations and lane-based SLA reporting.',
              },
              {
                question: 'Is my data stored?',
                answer:
                  'No database is used. The form is sent client-side to your configured email provider. You control where messages are delivered and stored.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Prefer a guided setup?"
        description="We’ll walk through lanes, volumes, and integrations to recommend the best plan—then outline next steps for onboarding and tracking."
        ctaLabel="Schedule a Call"
        ctaHref="#contact-form"
      />
    </>
  )
}
