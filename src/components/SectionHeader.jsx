import React from 'react';

export default function SectionHeader({ label, title, titleMal, subtitle, light = false }) {
  return (
    <div className="section-header temple-motifs-header">
      {label && (
        <span className="section-label d-inline-flex align-items-center gap-2">
          <span className="diya-glow">🪔</span>
          <span>{label}</span>
          <span className="diya-glow">🪔</span>
        </span>
      )}
      <h2 className="section-title" style={light ? { color: 'var(--gold-light)' } : undefined}>
        {title}
        {titleMal && (
          <span
            className="section-title-mal"
            style={light ? { color: 'rgba(255,220,150,0.85)' } : undefined}
          >
            {titleMal}
          </span>
        )}
      </h2>

      {/* Sacred Traditional Kerala Temple Motif Divider */}
      <div className="temple-sacred-divider">
        <span className="divider-flourish left">✦──</span>
        <span className="divider-vel">🔱</span>
        <span className="divider-flourish right">──✦</span>
      </div>

      {subtitle && (
        <p
          className="section-subtitle"
          style={light ? { color: 'rgba(255,235,205,0.85)' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
