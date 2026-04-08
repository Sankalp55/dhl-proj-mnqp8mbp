'use client';

import * as React from 'react';

export type TextGenerateEffectProps = {
  words: string;
  className?: string;
};

/**
 * Minimal placeholder that renders the provided text.
 */
export function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
  return <span className={className}>{words}</span>;
}

export default TextGenerateEffect;
