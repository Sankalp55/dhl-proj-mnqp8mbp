'use client';

import * as React from 'react';

export type SparklesCoreProps = React.HTMLAttributes<HTMLDivElement> & {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
};

/**
 * Minimal placeholder implementation to satisfy imports.
 * Replace with your actual sparkles/canvas implementation if desired.
 */
export function SparklesCore({
  background,
  className,
  style,
  ...props
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      style={{
        background: background ?? 'transparent',
        ...style,
      }}
      {...props}
    />
  );
}

export default SparklesCore;
