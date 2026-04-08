'use client';

import * as React from 'react';

export type HighlightProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
};

/**
 * Minimal placeholder highlight component.
 */
export function Highlight({ className, children, ...props }: HighlightProps) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

export default Highlight;
