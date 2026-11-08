import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FestivalCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);

  // Exact target date for upcoming Maha Thaipooyam Mahotsavam: 22nd January 2027
  const targetDateStr = '22 January 2027';

  useEffect(() => {
    // 22nd January 2027, 06:00:00 AM IST
    const target = new Date('2027-01-22T06:00:00+05:30');

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Collapse when clicking outside or scrolling
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    function handleScroll() {
      if (expanded) {
        setExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]);

  return (
    <div className="floating-countdown-dock" ref={containerRef}>
      {/* Expanded Modal/Card View */}
      {expanded && (
        <div className="countdown-expanded-card shadow-lg animate-fadeInUp">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-warning text-dark px-2 py-1 fw-bold" style={{ fontSize: '0.72rem' }}>
              <i className="fas fa-fire me-1"></i>മഹാ ഉത്സവം
            </span>
            <button
              type="button"
              className="btn-close btn-close-white"
              style={{ fontSize: '0.65rem' }}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
              aria-label="Close"
            ></button>
          </div>

          <h6 className="countdown-pop-title mb-1">
            മഹാ തൈപൂയം മഹോത്സവം
          </h6>

          {/* Prominently Highlight Upcoming Festival Date */}
          <div className="festival-date-highlight my-2">
            <i className="fas fa-calendar-star me-1 text-warning"></i>
            <span className="festival-date-text">
              തീയതി: <strong>{targetDateStr}</strong>
            </span>
            <div className="festival-malayalam-date">
              (മകരമാസത്തിലെ പൂയം നക്ഷത്രം)
            </div>
          </div>

          <p className="countdown-pop-sub mb-3">
            ഭഗവാന്റെ തിരുനാളായ തൈപൂയ മഹോത്സവത്തിലേക്ക് ഇനിയുള്ള സമയം:
          </p>

          <div className="d-flex justify-content-between gap-1 text-center mb-3">
            <div className="pop-timer-box">
              <span className="pop-timer-val">{timeLeft.days}</span>
              <span className="pop-timer-lbl">ദിവസം</span>
            </div>
            <div className="pop-timer-box">
              <span className="pop-timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="pop-timer-lbl">മണിക്കൂർ</span>
            </div>
            <div className="pop-timer-box">
              <span className="pop-timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="pop-timer-lbl">മിനിറ്റ്</span>
            </div>
            <div className="pop-timer-box">
              <span className="pop-timer-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="pop-timer-lbl">സെക്കൻഡ്</span>
            </div>
          </div>

          <Link
            to="/events#thaipooyam"
            className="btn btn-warning btn-sm w-100 fw-bold py-1"
            style={{ fontSize: '0.78rem', fontFamily: 'var(--font-malayalam)' }}
            onClick={() => setExpanded(false)}
          >
            10 ദിവസത്തെ ഉത്സവ വിവരങ്ങൾ <i className="fas fa-arrow-right ms-1"></i>
          </Link>
        </div>
      )}

      {/* Ultra-compact Pill Toggle Button */}
      <button
        type="button"
        className={`floating-countdown-pill shadow-sm ${expanded ? 'active' : ''}`}
        onClick={() => setExpanded(!expanded)}
        title="തൈപൂയം കൗണ്ട്ഡൗൺ & തീയതി"
        aria-label="തൈപൂയം കൗണ്ട്ഡൗൺ & തീയതി കാണുക"
      >
        <span className="live-spark"></span>
        <span className="pill-tag">തൈപൂയം:</span>
        <span className="pill-val">{timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h</span>
        <i className={`fas fa-chevron-${expanded ? 'down' : 'up'} pill-arrow`}></i>
      </button>
    </div>
  );
}
