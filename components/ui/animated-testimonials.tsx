"use client";

import * as React from "react";

export type AnimatedTestimonialItem = {
  quote: string;
  name: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonialItem[];
  className?: string;
};

/**
 * Minimal, build-safe AnimatedTestimonials implementation.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials?.map((t, idx) => (
        <figure key={idx}>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <div>{t.name}</div>
            {t.title ? <div>{t.title}</div> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
