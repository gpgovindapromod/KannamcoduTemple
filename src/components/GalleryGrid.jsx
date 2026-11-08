import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/templeData';
import Lightbox from './Lightbox';

export default function GalleryGrid({ limit = 0, showFilters = true }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const items =
    activeFilter === 'all'
      ? limit > 0
        ? GALLERY_DATA.slice(0, limit)
        : GALLERY_DATA
      : limit > 0
        ? GALLERY_DATA.filter((item) => item.category === activeFilter).slice(0, limit)
        : GALLERY_DATA.filter((item) => item.category === activeFilter);

  return (
    <>
      {showFilters && (
        <div className="gallery-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Photos
          </button>
          <button
            className={`filter-btn ${activeFilter === 'vel-kavadi' ? 'active' : ''}`}
            onClick={() => setActiveFilter('vel-kavadi')}
          >
            Vel Kavadi
          </button>
          <button
            className={`filter-btn ${activeFilter === 'manj-neerattu' ? 'active' : ''}`}
            onClick={() => setActiveFilter('manj-neerattu')}
          >
            Manj Neerattu
          </button>
          <button
            className={`filter-btn ${activeFilter === 'agni-kavadi' ? 'active' : ''}`}
            onClick={() => setActiveFilter('agni-kavadi')}
          >
            Agni Kavadi
          </button>
          <button
            className={`filter-btn ${activeFilter === 'temple' ? 'active' : ''}`}
            onClick={() => setActiveFilter('temple')}
          >
            Temple Views
          </button>
        </div>
      )}

      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => setLightboxImg(item)}>
            <div className="gallery-img-wrap">
              <img
                src={item.url}
                alt={item.captionEng || item.caption}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">{item.caption}</span>
            </div>
            <i className="fas fa-search-plus gallery-overlay-icon"></i>
          </div>
        ))}
      </div>

      <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)} />
    </>
  );
}
