'use client';

import * as React from 'react';

export type AuroraBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

/**
 * Minimal placeholder Aurora background wrapper.
 */
export function AuroraBackground({ className, children, ...props }: AuroraBackgroundProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export default AuroraBackground;
