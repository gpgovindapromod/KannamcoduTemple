import React from 'react';
import { Link } from 'react-router-dom';
import SpotlightCard from './reactbits/SpotlightCard';

/**
 * Reusable EventFeatureCard Component
 * Displays festival preview cards with icons, Malayalam title, English description, and links.
 */
export default function EventFeatureCard({
  icon = 'fa-calendar-star',
  titleMal,
  titleEng,
  desc,
  badgeText,
  to = '/events',
}) {
  return (
    <SpotlightCard className="h-100 rounded-4" spotlightColor="rgba(255, 183, 3, 0.18)">
      <Link className="event-card h-100 text-decoration-none" to={to}>
        <div className="event-icon">
          <i className={`fas ${icon} text-warning`}></i>
        </div>
        <span className="event-name-mal">{titleMal}</span>
        {titleEng && <span className="event-name-eng">{titleEng}</span>}
        <p className="event-desc">{desc}</p>
        {badgeText && <span className="event-badge">{badgeText}</span>}
      </Link>
    </SpotlightCard>
  );
}
