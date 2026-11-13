import React, { useRef, useState } from 'react';

/**
 * SpotlightCard Component (inspired by reactbits.dev/components/spotlight-card)
 * Tracks the devotee's cursor with a divine golden aura/spotlight across the card surface.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(247, 208, 102, 0.18)',
  style = {},
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card position-relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        className="spotlight-layer"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div
        className="position-relative d-flex align-items-center w-100"
        style={{ zIndex: 2, gap: 'inherit' }}
      >
        {children}
      </div>
    </div>
  );
}
