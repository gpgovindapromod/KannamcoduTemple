import React from 'react';
import SpotlightCard from './reactbits/SpotlightCard';

/**
 * Reusable MemberCard Component
 * Standardizes executive, tantri, and council member profiles across the site.
 */
export default function MemberCard({
  name,
  role,
  img,
  phone,
  avatarSize = '95px',
  borderGold = true,
  className = ''
}) {
  return (
    <SpotlightCard
      className={`member-card p-4 text-center bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center ${className}`}
      style={{ border: borderGold ? '1.5px solid var(--border-gold)' : '1px solid #eee' }}
      spotlightColor="rgba(212, 160, 23, 0.16)"
    >
      <div
        className="member-avatar mb-3"
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2.5px solid var(--gold)',
          flexShrink: 0
        }}
      >
        <img
          src={img}
          alt={name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="member-name-block w-100">
        <div
          className="member-name fw-bold"
          style={{ fontSize: '1.05rem', color: 'var(--dark-brown)' }}
        >
          {name}
        </div>
        <div
          className="member-role text-center mt-1"
          style={{
            fontSize: '0.85rem',
            color: 'var(--medium-brown)',
            fontFamily: 'var(--font-malayalam)',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {role}
        </div>
      </div>

      <div className="mt-auto pt-3 w-100 text-center">
        {phone ? (
          <a
            href={`tel:${phone}`}
            className="btn btn-outline-warning btn-sm text-dark fw-bold rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 shadow-xs"
            style={{ fontSize: '0.8rem', borderColor: 'var(--gold)' }}
          >
            <i className="fas fa-phone-alt text-warning"></i>
            {phone}
          </a>
        ) : (
          <div style={{ height: '30px' }}></div>
        )}
      </div>
    </SpotlightCard>
  );
}
