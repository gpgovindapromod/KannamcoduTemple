import React, { useState, useEffect } from 'react';
import ShinyText from './reactbits/ShinyText';
import BlurText from './reactbits/BlurText';
import GoldenParticles from './GoldenParticles';

/**
 * Animated Devotional Splash Screen
 * Uses React Bits (ShinyText, BlurText) + GoldenParticles for a sacred launch transition.
 * Fades out smoothly and is skipped on quick revisits within the same session.
 */
export default function SplashScreen({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Hold splash screen for 2.2 seconds, then initiate smooth fadeout
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2200);

    // Completely unmount after fade transition completes
    const exitTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <div className={`devotional-splash-screen ${fading ? 'splash-fade-out' : ''}`}>
      <GoldenParticles />

      <div className="splash-content text-center">
        {/* Sacred Vel Icon with Divine Pulse */}
        <div className="splash-vel-symbol">
          🔱
        </div>

        {/* Sacred Mantra with React Bits ShinyText */}
        <div className="splash-mantra mb-2">
          <ShinyText text="ॐ ശരവണ ഭവ ॐ" speed={3} />
        </div>

        {/* Temple Name with React Bits BlurText */}
        <h1 className="splash-title">
          <BlurText
            text="Vettikkavala Kannamcodu"
            delay={35}
            animateBy="words"
            direction="top"
          />
        </h1>

        <h2 className="splash-title-mal mt-2">
          <BlurText
            text="ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം"
            delay={40}
            animateBy="words"
            direction="bottom"
          />
        </h2>

        {/* Golden Progress Line */}
        <div className="splash-progress-track mt-4">
          <div className="splash-progress-bar"></div>
        </div>

        <p className="splash-blessing mt-3">
          ഭക്തിസാന്ദ്രമായ ദർശനത്തിലേക്ക് സ്വാഗതം...
        </p>
      </div>
    </div>
  );
}
