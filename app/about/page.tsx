import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

type TeamMember = {
  name: string
  role?: string
  bio: string
  imageUrl?: string
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground max-w-3xl">
          We build reliable logistics and fulfillment operations with a focus on
          measurable outcomes.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Team</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              {
                name: 'Ava Schneider',
                role: 'Head of Operations',
                bio: 'Leads network performance, SLAs, and continuous improvement across core lanes and peak season playbooks.',
                imageUrl: '',
              },
              {
                name: 'Noah Patel',
                role: 'Solutions Lead',
                bio: 'Designs fulfillment and transportation solutions with a focus on cost-to-serve and customer experience.',
                imageUrl: '',
              },
              {
                name: 'Mia Chen',
                role: 'Customer Success',
                bio: 'Owns onboarding, reporting cadence, and proactive issue resolution across accounts.',
                imageUrl: '',
              },
            ] satisfies TeamMember[]
          ).map((member) => (
            <article
              key={member.name}
              className="rounded-xl border bg-background p-6"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                {member.role ? (
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                ) : null}
                <p className="text-sm leading-6 text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
