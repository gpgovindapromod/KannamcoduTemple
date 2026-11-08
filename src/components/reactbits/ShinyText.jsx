import React from 'react';

/**
 * ShinyText Component (inspired by reactbits.dev/text-animations/shiny-text)
 * Adds a sweeping divine gold sheen across text characters.
 */
export default function ShinyText({ text, disabled = false, speed = 4, className = '' }) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
}

