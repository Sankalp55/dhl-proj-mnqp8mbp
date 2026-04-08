import React from 'react';

import { StatsCounter } from '@/components/blocks/StatsCounter';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground max-w-2xl">
          We build reliable, measurable operations tooling.
        </p>
      </section>

      <section className="mt-12">
        <StatsCounter
          stats={[
            { label: 'Operational hubs & partners', value: '450', suffix: '+' },
            { label: 'Avg. milestone visibility', value: '12', suffix: '+' },
            { label: 'Typical exception reduction', value: '15', suffix: '–30%' },
            { label: 'Global reach', value: '220', suffix: '+ countries' },
          ]}
        />
      </section>
    </main>
  );
}
