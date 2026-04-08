'use client';

import * as React from 'react';

export type TypewriterEffectProps = {
  words: Array<{ text: string; className?: string }>;
  className?: string;
};

/**
 * Minimal placeholder typewriter effect.
 */
export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  return (
    <span className={className}>
      {words?.map((w, i) => (
        <span key={i} className={w.className}>
          {w.text}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}

export default TypewriterEffect;
