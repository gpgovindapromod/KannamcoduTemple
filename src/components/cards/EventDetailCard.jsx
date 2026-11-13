import React from 'react';

/**
 * Reusable EventDetailCard Component
 * Renders full festival descriptions with badge, image, and Malayalam paragraphs.
 */
export default function EventDetailCard({
  id,
  title,
  eng,
  badge,
  images = [],
  paragraphs = [],
  desc,
  layout = 'horizontal', // 'horizontal' (row) or 'vertical' (col)
}) {
  if (layout === 'vertical') {
    return (
      <div className="event-detail-card h-100" id={id}>
        {images.length > 0 && (
          <img
            src={images[0]}
            className="event-card-img"
            alt={title}
            loading="lazy"
            style={{
              height: '240px',
              objectFit: id.includes('chathayam') ? 'contain' : 'cover',
              background: '#4a120b',
              objectPosition: id === 'uthram' ? 'center 30%' : 'center',
            }}
          />
        )}
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
            <h3
              style={{
                fontFamily: 'var(--font-malayalam)',
                color: 'var(--dark-brown)',
                fontSize: '1.3rem',
                fontWeight: 700,
              }}
            >
              {title}
            </h3>
            {badge && <span className="badge bg-danger rounded-pill px-3 py-1">{badge}</span>}
          </div>
          {eng && (
            <div
              className="eng mb-2"
              style={{
                color: 'var(--saffron-dark)',
                fontSize: '0.84rem',
                letterSpacing: '0.8px',
                fontWeight: 600,
              }}
            >
              {eng}
            </div>
          )}
          {desc && (
            <p
              style={{
                fontFamily: 'var(--font-malayalam)',
                lineHeight: '1.85',
                textAlign: 'justify',
                color: '#443',
                fontSize: '0.94rem',
              }}
            >
              {desc}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-card mb-4" id={id}>
      <div className="row g-0">
        <div className="col-lg-5">
          {images.length > 0 && (
            <img
              src={images[0]}
              className="event-card-img h-100 w-100"
              alt={title}
              loading="lazy"
              style={{
                minHeight: '270px',
                objectFit: id.includes('chathayam') || id.includes('samadhi') ? 'contain' : 'cover',
                background: '#4a120b',
              }}
            />
          )}
        </div>
        <div className="col-lg-7">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
              <h3
                className="mb-0"
                style={{
                  fontFamily: 'var(--font-malayalam)',
                  color: 'var(--dark-brown)',
                  fontWeight: 700,
                }}
              >
                {title}
              </h3>
              {badge && <span className="badge bg-danger rounded-pill px-3 py-2">{badge}</span>}
            </div>
            {eng && (
              <div
                className="eng mb-3"
                style={{
                  color: 'var(--saffron-dark)',
                  fontSize: '0.88rem',
                  letterSpacing: '0.8px',
                  fontWeight: 600,
                }}
              >
                {eng}
              </div>
            )}
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: 'var(--font-malayalam)',
                  lineHeight: '1.9',
                  textAlign: 'justify',
                  color: '#443',
                  fontSize: '0.98rem',
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
