"use client";

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function CardContainer({ className, children, ...props }: DivProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ className, children, ...props }: DivProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: keyof JSX.IntrinsicElements;
};

export function CardItem({
  className,
  children,
  translateZ,
  as,
  ...props
}: CardItemProps) {
  const Comp: any = as ?? "div";
  return (
    <Comp className={className} {...props}>
      {children}
    </Comp>
  );
}
