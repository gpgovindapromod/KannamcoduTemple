import React from 'react';

export default function PageHero({ title, subtitle, bgImage = '/images/temple/temple-hero.jpg' }) {
  return (
    <div
      className="page-hero"
      style={{
        background: `linear-gradient(135deg, rgba(30, 10, 4, 0.93), rgba(95, 18, 6, 0.88)), url('${bgImage}') center/cover no-repeat`,
      }}
    >
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
