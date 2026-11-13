import { useState, useEffect } from 'react';
import ShinyText from '../common/reactbits/ShinyText';
import BlurText from '../common/reactbits/BlurText';
import GoldenParticles from './GoldenParticles';

/**
 * Festive Devotional Splash Screen (Festive String Lights & Polaroid Garland Adaptation)
 * Inspired by Kerala festival celebration bunting:
 * - Hanging festoon light garlands glowing warmly across the twilight sky.
 * - Suspended polaroid photos of temple rituals, Thaipooyam, Vel, and architecture clipped to fairy lights.
 * - Dreamy atmospheric glow with bokeh and warm dusk temple background.
 * - Centered glowing temple name with elegant Malayalam typography.
 */
export default function SplashScreen({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Respect user prefers-reduced-motion: if reduced motion is requested, dismiss immediately
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      if (onFinish) onFinish();
      return;
    }

    // Festive photo bunting holds for 1.8 seconds then smoothly fades out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1800);

    // Completely unmount after fade transition completes
    const exitTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  // Authentic temple photos for the hanging bunting garlands (Optimized WebP thumbnails)
  const topGarland = [
    { src: '/images/splash-thumbs/temple-front.webp', caption: 'ക്ഷേത്രം', rot: -5 },
    { src: '/images/splash-thumbs/thaipusam-1.webp', caption: 'തൈപ്പൂയം', rot: 4 },
    { src: '/images/splash-thumbs/deity.webp', caption: 'ശ്രീ സുബ്രഹ്മണ്യൻ', rot: -3 },
    { src: '/images/splash-thumbs/VKP1.webp', caption: 'ശക്തിവേൽ', rot: 5 },
    { src: '/images/splash-thumbs/skanda-shasti.webp', caption: 'സ്കന്ദഷഷ്ഠി', rot: -4 },
  ];

  const bottomGarland = [
    { src: '/images/splash-thumbs/AKP1.webp', caption: 'അഗ്നിക്കാവടി', rot: 4 },
    { src: '/images/splash-thumbs/uthram-pooja.webp', caption: 'ഉത്രം പൂജ', rot: -3 },
    { src: '/images/splash-thumbs/thaipusam-2.webp', caption: 'കാവടിയാട്ടം', rot: 5 },
    { src: '/images/splash-thumbs/VNP1.webp', caption: 'വെള്ളിനീരാട്ട്', rot: -4 },
    { src: '/images/splash-thumbs/temple-aerial.webp', caption: 'സന്നിധാനം', rot: 3 },
  ];

  return (
    <div className={`devotional-splash-screen ${fading ? 'splash-fade-out' : ''}`}>
      {/* Twilight Temple Background */}
      <div className="splash-fullscreen-bg" />

      {/* Atmospheric Festive Glow Overlay */}
      <div className="splash-gradient-overlay" />

      {/* Floating Golden Sparks / Bokeh */}
      <GoldenParticles />

      {/* Festive Fairy Light Bulbs & Photo Garland: TOP STRAND */}
      <div className="festive-garland-wrap garland-top">
        <svg className="garland-wire-svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
          <path
            d="M 0,20 Q 250,90 500,40 T 1000,30"
            fill="none"
            stroke="rgba(255, 230, 160, 0.45)"
            strokeWidth="1.8"
          />
        </svg>

        {/* Hanging Bulbs */}
        <div className="fairy-bulbs-row">
          {[...Array(14)].map((_, i) => (
            <span
              key={`tb-${i}`}
              className="fairy-bulb"
              style={{
                animationDelay: `${(i % 5) * 0.35}s`,
                top: `${Math.sin(i * 0.45) * 12 + 18}px`,
              }}
            />
          ))}
        </div>

        {/* Suspended Polaroids on Top Strand */}
        <div className="polaroid-row polaroids-top">
          {topGarland.map((item, idx) => (
            <div
              key={`top-p-${idx}`}
              className="hanging-polaroid"
              style={{
                transform: `rotate(${item.rot}deg)`,
                animationDelay: `${0.1 + idx * 0.12}s`,
              }}
            >
              <div className="polaroid-pin" />
              <div className="polaroid-inner">
                <img src={item.src} alt={item.caption} className="polaroid-img" />
                <span className="polaroid-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Glowing Temple Identity / Festive Title */}
      <div className="splash-center-content">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-2 splash-mantra-row">
          <span className="splash-vel-badge">🔱</span>
          <div className="splash-mantra">
            <ShinyText text="ॐ ശരവണ ഭവ ॐ" speed={3.2} />
          </div>
          <span className="splash-vel-badge">🔱</span>
        </div>

        <h1 className="splash-hero-title mb-1">
          <span className="splash-place-label d-block">VETTIKKAVALA</span>
          <BlurText
            text="KANNAMCODU"
            delay={35}
            animateBy="letters"
            direction="bottom"
            className="splash-main-name"
          />
        </h1>

        <h2 className="splash-hero-mal">
          <BlurText
            text="ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം"
            delay={30}
            animateBy="words"
            direction="top"
          />
        </h2>

        {/* Golden Progress Bar */}
        <div className="splash-progress-track">
          <div className="splash-progress-bar"></div>
        </div>

        <p className="splash-welcome-tag">ഭക്തിസാന്ദ്രമായ ദർശനത്തിലേക്ക് സ്വാഗതം</p>
      </div>

      {/* Festive Fairy Light Bulbs & Photo Garland: BOTTOM STRAND */}
      <div className="festive-garland-wrap garland-bottom">
        <svg className="garland-wire-svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
          <path
            d="M 0,35 Q 250,95 500,45 T 1000,40"
            fill="none"
            stroke="rgba(255, 230, 160, 0.4)"
            strokeWidth="1.8"
          />
        </svg>

        {/* Hanging Bulbs */}
        <div className="fairy-bulbs-row">
          {[...Array(14)].map((_, i) => (
            <span
              key={`bb-${i}`}
              className="fairy-bulb"
              style={{
                animationDelay: `${0.2 + (i % 5) * 0.3}s`,
                top: `${Math.sin(i * 0.5) * 14 + 18}px`,
              }}
            />
          ))}
        </div>

        {/* Suspended Polaroids on Bottom Strand */}
        <div className="polaroid-row polaroids-bottom">
          {bottomGarland.map((item, idx) => (
            <div
              key={`bot-p-${idx}`}
              className="hanging-polaroid"
              style={{
                transform: `rotate(${item.rot}deg)`,
                animationDelay: `${0.25 + idx * 0.12}s`,
              }}
            >
              <div className="polaroid-pin" />
              <div className="polaroid-inner">
                <img src={item.src} alt={item.caption} className="polaroid-img" />
                <span className="polaroid-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
