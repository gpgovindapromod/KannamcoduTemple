import React from 'react';
import { useLocation } from 'react-router-dom';

export default function DarshanBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // On Home Page: Keep the static centered pill bar
  if (isHome) {
    return (
      <section className="darshan-strip-compact">
        <div className="container">
          <div className="darshan-compact-bar">
            <div className="darshan-compact-label">
              <span className="compact-flame">🪔</span>
              <span>ദർശന സമയം:</span>
            </div>

            <div className="darshan-compact-item">
              <i className="fas fa-sun text-warning me-1"></i>
              <span className="compact-time-label">രാവിലെ:</span>
              <span className="compact-time-val">5:30 AM – 10:00 AM</span>
            </div>

            <span className="compact-divider">|</span>

            <div className="darshan-compact-item">
              <i className="fas fa-moon text-warning me-1"></i>
              <span className="compact-time-label">വൈകുന്നേരം:</span>
              <span className="compact-time-val">5:00 PM – 7:30 PM</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // On All Other Pages: Continuous Smooth Infinite Marquee Ticker
  const tickerContent = (
    <div className="darshan-ticker-group">
      <span className="compact-flame">🪔</span>
      <span className="ticker-label">ക്ഷേത്ര ദർശന സമയം (Darshan Timings):</span>
      <span className="ticker-item"><i className="fas fa-sun text-warning me-1"></i>രാവിലെ <strong>5:30 AM – 10:00 AM</strong></span>
      <span className="ticker-dot">✦</span>
      <span className="ticker-item"><i className="fas fa-moon text-warning me-1"></i>വൈകുന്നേരം <strong>5:00 PM – 7:30 PM</strong></span>
      <span className="ticker-dot">✦</span>
      <span className="ticker-holy">ॐ ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി നമഃ</span>
      <span className="ticker-dot">✦</span>
    </div>
  );

  return (
    <div className="darshan-marquee-strip">
      <div className="darshan-marquee-track">
        {tickerContent}
        {tickerContent}
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  );
}
