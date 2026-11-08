import React from 'react';
import SpotlightCard from './reactbits/SpotlightCard';

/**
 * Reusable MemberCard Component
 * Authentic former-site structure: Top portrait, bold title, role, and stylish direct call button.
 */
export default function MemberCard({ name, role, img, phone, highlight = false, className = '' }) {
  return (
    <SpotlightCard
      className={`member-portrait-card h-100 ${highlight ? 'highlight-leader' : ''} ${className}`}
      spotlightColor="rgba(212, 160, 23, 0.16)"
    >
      <div className="member-img-frame">
        <img src={img} alt={name} loading="lazy" className="member-img" />
      </div>

      <div className="member-info-content">
        <h4 className="member-name">{name}</h4>
        <span className="member-role">{role}</span>

        <div className="member-contact-action">
          {phone ? (
            <a href={`tel:${phone}`} className="member-phone-btn" title={`Call ${name}`}>
              <i className="fa fa-phone me-2 text-warning"></i>
              {phone.replace('+91', '')}
            </a>
          ) : (
            <div className="phone-placeholder"></div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
