'use client';

import * as React from 'react';

export type BackgroundBeamsProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal placeholder background component.
 */
export function BackgroundBeams({ className, ...props }: BackgroundBeamsProps) {
  return <div className={className} {...props} />;
}

export default BackgroundBeams;
