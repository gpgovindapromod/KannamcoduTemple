import React from 'react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox-overlay active" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <i className="fas fa-times"></i>
      </button>
      <img src={image.url} alt={image.captionEng || image.caption} className="lightbox-img" />
      <p className="lightbox-caption">
        {image.caption} {image.captionEng ? `· ${image.captionEng}` : ''}
      </p>
    </div>
  );
}
