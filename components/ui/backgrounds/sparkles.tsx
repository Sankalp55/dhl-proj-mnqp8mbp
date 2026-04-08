/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";

export type SparklesCoreProps = {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

/**
 * Minimal, build-safe SparklesCore implementation.
 * This is a lightweight placeholder to satisfy imports.
 */
export function SparklesCore({
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      style={{
        background: background ?? "transparent",
      }}
      aria-hidden="true"
    />
  );
}

export default SparklesCore;
