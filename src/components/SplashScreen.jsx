import React, { useState, useEffect } from 'react';
import ShinyText from './reactbits/ShinyText';
import BlurText from './reactbits/BlurText';
import GoldenParticles from './GoldenParticles';

/**
 * Fullscreen Immersive Devotional Splash Screen
 * The authentic temple image spans the full screen.
 * A smooth linear gradient overlay dissolves from transparent down to dark in the lower half.
 * The temple name is rendered prominently near the bottom with an elegant, immersive aesthetic.
 */
export default function SplashScreen({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Hold splash screen for 2.6 seconds, then initiate smooth fadeout
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2600);

    // Completely unmount after fade transition completes
    const exitTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <div className={`devotional-splash-screen ${fading ? 'splash-fade-out' : ''}`}>
      {/* Fullscreen Temple Background Image */}
      <div className="splash-fullscreen-bg" />

      {/* Linear Gradient Overlay: transparent from top, deepening towards the bottom */}
      <div className="splash-gradient-overlay" />

      {/* Subtle Ambient Golden Particles */}
      <GoldenParticles />

      {/* Prominent Bottom-Anchored Temple Identity */}
      <div className="splash-bottom-container">
        {/* Sacred Vel Icon & Mantra */}
        <div className="d-flex align-items-center justify-content-center gap-2 mb-2 splash-mantra-row">
          <span className="splash-vel-badge">🔱</span>
          <div className="splash-mantra">
            <ShinyText text="ॐ ശരവണ ഭവ ॐ" speed={3.2} />
          </div>
          <span className="splash-vel-badge">🔱</span>
        </div>

        {/* Temple Name in English with React Bits BlurText */}
        <h1 className="splash-hero-title mb-1">
          <span className="splash-place-label d-block">VETTIKKAVALA</span>
          <BlurText
            text="KANNAMCODU"
            delay={40}
            animateBy="letters"
            direction="bottom"
            className="splash-main-name"
          />
        </h1>

        {/* Malayalam Temple Title */}
        <h2 className="splash-hero-mal">
          <BlurText
            text="ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം"
            delay={35}
            animateBy="words"
            direction="top"
          />
        </h2>

        {/* Subtle Progress Bar */}
        <div className="splash-progress-track">
          <div className="splash-progress-bar"></div>
        </div>

        <p className="splash-welcome-tag">
          ഭക്തിസാന്ദ്രമായ ദർശനത്തിലേക്ക് സ്വാഗതം
        </p>
      </div>
    </div>
  );
}


