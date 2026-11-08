import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function InteractiveDevotion() {
  const [flowerCount, setFlowerCount] = useState(0);
  const [lampsLit, setLampsLit] = useState([false, false, false, false, false]);
  const [mantraChants, setMantraChants] = useState(108);
  const [bellRinging, setBellRinging] = useState(false);

  const offerFlowers = (e) => {
    setFlowerCount((prev) => prev + 1);

    // Floral confetti burst
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x, y },
      colors: ['#FF6B00', '#FFD700', '#FF1493', '#FFF8DC', '#FF4500'],
      shapes: ['circle'],
      scalar: 1.2,
    });
  };

  const ringBell = () => {
    setBellRinging(true);
    setTimeout(() => setBellRinging(false), 1200);

    // Audio chime synthesis using web audio API (zero external assets needed)
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High pitch bell
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch {
      // Audio fallback silent
    }
  };

  const toggleLamp = (index) => {
    const updated = [...lampsLit];
    updated[index] = !updated[index];
    setLampsLit(updated);

    if (updated[index]) {
      confetti({
        particleCount: 15,
        spread: 35,
        colors: ['#FFE082', '#FFA000', '#FF6F00'],
      });
    }
  };

  return (
    <div className="devotion-hub-card my-5 p-4 p-md-5 rounded-4 shadow-lg text-white">
      <div className="text-center mb-4">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>
          <i className="fas fa-hands-praying me-2"></i>ഭക്തജന സമർപ്പണം · VIRTUAL DEVOTIONAL DARSHAN
        </span>
        <h3
          className="section-title text-white"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem' }}
        >
          Interactive Divine Experience
        </h3>
        <p style={{ fontFamily: 'var(--font-malayalam)', color: '#FFE6BD', fontSize: '0.96rem' }}>
          ഭഗവാൻ മുരുകന്റെ സന്നിധിയിൽ പുഷ്പാർച്ചനയും ദീപസമർപ്പണവും മണിനാദവും അർപ്പിക്കാം
        </p>
      </div>

      <div className="row g-4 align-items-center">
        {/* Flower Offering (Pushpanjali) */}
        <div className="col-md-4">
          <div className="devotion-box p-4 rounded-4 text-center h-100">
            <div className="box-icon-div mb-3">🌺</div>
            <h5 className="fw-bold mb-1" style={{ color: 'var(--gold-light)' }}>
              പുഷ്പാർച്ചന
            </h5>
            <p className="small mb-3 text-white-50">Offer sacred blossoms to Lord Murugan</p>
            <button
              onClick={offerFlowers}
              className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm"
              style={{ background: 'var(--gradient-saffron)', border: 'none', color: '#fff' }}
            >
              <i className="fas fa-spa me-2"></i>പുഷ്പം അർപ്പിക്കുക
            </button>
            <div className="mt-3 small" style={{ color: '#FFD56B' }}>
              സമർപ്പിച്ച പുഷ്പങ്ങൾ: <strong>{flowerCount}</strong>
            </div>
          </div>
        </div>

        {/* Temple Bell */}
        <div className="col-md-4">
          <div className="devotion-box p-4 rounded-4 text-center h-100">
            <div
              className={`box-icon-div mb-3 ${bellRinging ? 'bell-anim' : ''}`}
              style={{ fontSize: '2.8rem' }}
            >
              🔔
            </div>
            <h5 className="fw-bold mb-1" style={{ color: 'var(--gold-light)' }}>
              ക്ഷേത്ര മണിനാദം
            </h5>
            <p className="small mb-3 text-white-50">Ring the sacred bell for auspicious darshan</p>
            <button
              onClick={ringBell}
              className="btn btn-outline-warning rounded-pill px-4 fw-bold"
            >
              <i className="fas fa-bell me-2"></i>മണി മുഴക്കുക
            </button>
            <div className="mt-3 small" style={{ color: '#FFD56B' }}>
              {bellRinging ? 'മംഗള മണിനാദം മുഴങ്ങുന്നു...' : 'മണി മുഴക്കി പ്രാർത്ഥിക്കുക'}
            </div>
          </div>
        </div>

        {/* Deepam Lighting */}
        <div className="col-md-4">
          <div className="devotion-box p-4 rounded-4 text-center h-100">
            <div className="box-icon-div mb-3">🪔</div>
            <h5 className="fw-bold mb-1" style={{ color: 'var(--gold-light)' }}>
              ദീപ സമർപ്പണം
            </h5>
            <p className="small mb-2 text-white-50">Light the pancha-deepa lamps</p>
            <div className="d-flex justify-content-center gap-2 my-3">
              {lampsLit.map((isLit, i) => (
                <button
                  key={i}
                  onClick={() => toggleLamp(i)}
                  className={`lamp-btn ${isLit ? 'lit' : ''}`}
                  title={isLit ? 'Lit' : 'Click to light lamp'}
                >
                  🪔
                </button>
              ))}
            </div>
            <div className="small" style={{ color: '#FFD56B' }}>
              തെളിച്ച ദീപങ്ങൾ: <strong>{lampsLit.filter(Boolean).length} / 5</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Live Audio Chant Bar */}
      <div className="mt-4 p-3 rounded-4 chant-strip d-flex align-items-center justify-content-between flex-wrap gap-3">
        <div className="d-flex align-items-center gap-3">
          <span className="chant-orb">🕉️</span>
          <div>
            <div
              className="fw-bold"
              style={{ color: '#FFF2CE', fontFamily: 'var(--font-malayalam)' }}
            >
              ശരവണ ഭവ മന്ത്രജപം · SARAVANA BHAVA JAPAM
            </div>
            <div className="small" style={{ color: '#FFE6BD' }}>
              "ഓം ശരവണ ഭവായ നമഃ" ജപിച്ചു ഏകാഗ്രതയോടെ പ്രാർത്ഥിക്കുക
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-light rounded-pill px-4 btn-sm"
          onClick={() => setMantraChants((prev) => prev + 1)}
        >
          <i className="fas fa-plus me-2 text-warning"></i>ജപ സംഖ്യ: {mantraChants}
        </button>
      </div>
    </div>
  );
}
