'use client';

import * as React from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal, type-safe placeholders for the 3D card effect components.
 * These satisfy named imports used across the app.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: keyof JSX.IntrinsicElements;
};

export function CardItem({ as, className, ...props }: CardItemProps) {
  const Comp: any = as ?? 'div';
  return <Comp className={className} {...props} />;
}
