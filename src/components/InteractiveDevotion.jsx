import React, { useState, useEffect, useRef, useCallback } from 'react';

// Lazy loader for canvas-confetti so it doesn't inflate initial main thread parse time
let confettiPromise = null;
const triggerConfetti = (opts) => {
  if (!confettiPromise) {
    confettiPromise = import('canvas-confetti').then((m) => m.default || m);
  }
  confettiPromise.then((confetti) => confetti(opts)).catch(() => {});
};

/**
 * 3D Interactive Divine Sannidhanam Experience
 * Features:
 * 1. Real-time 3D Canvas rendering a 3D Golden Sacred Vel (ശക്തിവേൽ), Floating Lotus, and Temple Sanctum Halo
 * 2. 3D Raymarching / Perspective geometry with interactive mouse/touch drag rotation & gyro tilting
 * 3. Interactive Brass Aarti Deepam (നിലവിളക്ക്) with dynamic particle flames and aarti circulation
 * 4. Resonant 3D Temple Brass Bell with multi-harmonic chime audio synthesis
 * 5. Sacred Pushpanjali offering with cascading petals gravitating towards the 3D Vel
 * 6. Live Saravana Bhava chant counter with vibrational feedback
 */
export default function InteractiveDevotion() {
  const [flowerCount, setFlowerCount] = useState(0);
  const [isAartiActive, setIsAartiActive] = useState(false);
  const [mantraChants, setMantraChants] = useState(108);
  const [bellRinging, setBellRinging] = useState(false);
  const [lampsLit, setLampsLit] = useState([true, true, true, false, false]);

  const canvasRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const animFrameIdRef = useRef(null);
  const flowersParticlesRef = useRef([]);

  const bellAudioRef = useRef(null);

  useEffect(() => {
    // Preload authentic temple brass bell audio
    bellAudioRef.current = new Audio('/audio/temple-bell.wav');
    bellAudioRef.current.preload = 'auto';
  }, []);

  // Play authentic resonant temple brass bell sound
  const playSacredBellSound = useCallback(() => {
    try {
      if (bellAudioRef.current) {
        bellAudioRef.current.currentTime = 0;
        const playPromise = bellAudioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy or fallback
          });
        }
      }
    } catch {
      // Audio fallback
    }
  }, []);

  const ringBell = () => {
    setBellRinging(true);
    playSacredBellSound();
    setTimeout(() => setBellRinging(false), 1400);

    // Golden spark burst around the bell
    triggerConfetti({
      particleCount: 22,
      spread: 50,
      colors: ['#FFD700', '#FFA500', '#FFF8DC'],
      origin: { y: 0.6 },
    });
  };

  // Pushpanjali offering - spawns 3D petals that swirl and fall onto the lotus altar
  const offerFlowers = (e) => {
    setFlowerCount((prev) => prev + 1);

    // Local screen coordinate for confetti burst
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      triggerConfetti({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
        colors: ['#FF4500', '#FFD700', '#FF1493', '#FFF8DC', '#E0115F'],
        shapes: ['circle'],
        scalar: 1.2,
      });
    }

    // Add 12 3D canvas falling flower petals
    for (let i = 0; i < 12; i++) {
      flowersParticlesRef.current.push({
        x: (Math.random() - 0.5) * 180,
        y: -140 - Math.random() * 60,
        z: (Math.random() - 0.5) * 120,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 1.8 + Math.random() * 2.2,
        vz: (Math.random() - 0.5) * 1.5,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.08,
        color: ['#FF3366', '#FF9900', '#FFCC00', '#FF0055'][Math.floor(Math.random() * 4)],
        size: 5 + Math.random() * 4,
        alpha: 1,
      });
    }
  };

  const toggleAarti = () => {
    setIsAartiActive((prev) => !prev);
    if (!isAartiActive) {
      playSacredBellSound();
    }
  };

  const toggleLamp = (idx) => {
    setLampsLit((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });

    triggerConfetti({
      particleCount: 16,
      spread: 40,
      colors: ['#FFE082', '#FFA000', '#FF6F00'],
      origin: { y: 0.7 },
    });
  };

  // 3D Rendering Engine using Pure Canvas 3D Projection
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height =
      canvas.parentElement.clientHeight || (window.innerWidth < 576 ? 500 : 400));
    let isVisible = false;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height =
        canvas.parentElement.clientHeight || (window.innerWidth < 576 ? 500 : 400);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // IntersectionObserver: Only render 3D frames when devotion section is in/near viewport
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animFrameIdRef.current) {
            render();
          }
        },
        { rootMargin: '100px 0px', threshold: 0.05 }
      );
      observer.observe(canvas);
    } else {
      isVisible = true;
    }

    // 3D Point Projection Helper
    const project = (x, y, z, rotX, rotY, cx, cy) => {
      // Responsive scale down for mobile view so Vel & Lotus fit completely
      const isMobile = width < 576;
      const modelScale = isMobile ? 0.72 : 1.0;
      const sx = x * modelScale;
      const sy = y * modelScale;
      const sz = z * modelScale;

      // Rotate around Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = sx * cosY - sz * sinY;
      const z1 = sz * cosY + sx * sinY;

      // Rotate around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = sy * cosX - z1 * sinX;
      const z2 = z1 * cosX + sy * sinX;

      // Camera distance
      const fov = 380;
      const distance = 420;
      const scale = fov / (distance + z2);

      return {
        px: cx + x1 * scale,
        py: cy + y2 * scale,
        scale,
        depth: z2,
      };
    };

    let clock = 0;

    const render = () => {
      if (!isVisible) {
        animFrameIdRef.current = null;
        return;
      }
      clock += 0.025;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      // Position Vel higher up on mobile so buttons and aura do not overlap
      const isMobile = width < 576;
      const cy = isMobile ? height * 0.35 : height / 2 + 20;

      // Auto rotation + user interactive drag
      const curRotY = rotationRef.current.y + (isAartiActive ? Math.sin(clock * 1.5) * 0.15 : 0);
      const curRotX = rotationRef.current.x + Math.sin(clock * 0.8) * 0.05 - 0.12;

      // Slowly return drag to center when released
      if (!isDraggingRef.current) {
        rotationRef.current.y += (0 - rotationRef.current.y) * 0.02;
        rotationRef.current.x += (0 - rotationRef.current.x) * 0.02;
      }

      // ── 1. Sacred Sanctum Halo / Divine Aura ──
      const auraGrad = ctx.createRadialGradient(cx, cy - 20, 10, cx, cy - 20, 160);
      auraGrad.addColorStop(0, 'rgba(255, 215, 0, 0.45)');
      auraGrad.addColorStop(0.35, 'rgba(255, 140, 0, 0.22)');
      auraGrad.addColorStop(0.7, 'rgba(180, 40, 10, 0.1)');
      auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(cx, cy - 20, 160, 0, Math.PI * 2);
      ctx.fill();

      // Rotating Aura Rays
      ctx.save();
      ctx.translate(cx, cy - 30);
      ctx.rotate(clock * 0.4);
      for (let i = 0; i < 16; i++) {
        ctx.rotate((Math.PI * 2) / 16);
        ctx.fillStyle = 'rgba(255, 220, 120, 0.08)';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-6, -110);
        ctx.lineTo(6, -110);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // ── 2. 3D Lotus Pedestal (പീഠം) ──
      const lotusRadius = 75;
      const lotusPoints = [];
      for (let i = 0; i < 12; i++) {
        const ang = (i / 12) * Math.PI * 2 + clock * 0.1;
        const px = Math.cos(ang) * lotusRadius;
        const pz = Math.sin(ang) * lotusRadius;
        const pt = project(px, 75, pz, curRotX, curRotY, cx, cy);
        lotusPoints.push(pt);
      }

      // Draw base ring
      ctx.beginPath();
      ctx.fillStyle = 'rgba(180, 50, 20, 0.55)';
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < lotusPoints.length; i++) {
        if (i === 0) ctx.moveTo(lotusPoints[i].px, lotusPoints[i].py);
        else ctx.lineTo(lotusPoints[i].px, lotusPoints[i].py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Lotus petals
      for (let i = 0; i < lotusPoints.length; i++) {
        const p = lotusPoints[i];
        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 105, 180, 0.7)' : 'rgba(255, 69, 0, 0.75)';
        ctx.strokeStyle = '#FFF8DC';
        ctx.lineWidth = 1;
        ctx.arc(p.px, p.py, 10 * p.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // ── 3. 3D Sacred Golden Vel (ശക്തിവേൽ) ──
      // Vel Shaft (സുവർണ്ണ ദണ്ഡ്)
      const shaftTop = project(0, -60, 0, curRotX, curRotY, cx, cy);
      const shaftBottom = project(0, 75, 0, curRotX, curRotY, cx, cy);

      const shaftGrad = ctx.createLinearGradient(
        shaftTop.px,
        shaftTop.py,
        shaftBottom.px,
        shaftBottom.py
      );
      shaftGrad.addColorStop(0, '#FFE89E');
      shaftGrad.addColorStop(0.5, '#D4AF37');
      shaftGrad.addColorStop(1, '#8C6200');

      ctx.beginPath();
      ctx.lineWidth = 7 * shaftTop.scale;
      ctx.lineCap = 'round';
      ctx.strokeStyle = shaftGrad;
      ctx.moveTo(shaftTop.px, shaftTop.py);
      ctx.lineTo(shaftBottom.px, shaftBottom.py);
      ctx.stroke();

      // Vel Blade Geometry (Traditional Spear Head with Curved Petals)
      // Tip
      const vTip = project(0, -145, 0, curRotX, curRotY, cx, cy);
      // Left/Right Outer Curves
      const vLeftOut = project(-34, -100, 0, curRotX, curRotY, cx, cy);
      const vRightOut = project(34, -100, 0, curRotX, curRotY, cx, cy);
      // Waist Neck
      const vNeck = project(0, -62, 0, curRotX, curRotY, cx, cy);
      const vLeftInner = project(-16, -72, 0, curRotX, curRotY, cx, cy);
      const vRightInner = project(16, -72, 0, curRotX, curRotY, cx, cy);

      // Gold Shimmer on Blade
      const velBladeGrad = ctx.createLinearGradient(vLeftOut.px, vTip.py, vRightOut.px, vNeck.py);
      velBladeGrad.addColorStop(0, '#FFF5C0');
      velBladeGrad.addColorStop(0.3, '#FFD700');
      velBladeGrad.addColorStop(0.7, '#D4A017');
      velBladeGrad.addColorStop(1, '#855A00');

      ctx.beginPath();
      ctx.moveTo(vTip.px, vTip.py);
      ctx.bezierCurveTo(
        vLeftOut.px - 6,
        vTip.py + 15,
        vLeftOut.px,
        vLeftOut.py - 10,
        vLeftOut.px,
        vLeftOut.py
      );
      ctx.bezierCurveTo(
        vLeftOut.px + 5,
        vLeftOut.py + 20,
        vLeftInner.px,
        vLeftInner.py,
        vNeck.px,
        vNeck.py
      );
      ctx.bezierCurveTo(
        vRightInner.px,
        vRightInner.py,
        vRightOut.px - 5,
        vRightOut.py + 20,
        vRightOut.px,
        vRightOut.py
      );
      ctx.bezierCurveTo(
        vRightOut.px,
        vRightOut.py - 10,
        vRightOut.px + 6,
        vTip.py + 15,
        vTip.px,
        vTip.py
      );
      ctx.closePath();
      ctx.fillStyle = velBladeGrad;
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Vel Center Spine (കൂർത്ത നടുവര)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 2 * vTip.scale;
      ctx.moveTo(vTip.px, vTip.py);
      ctx.lineTo(vNeck.px, vNeck.py);
      ctx.stroke();

      // Sacred Vibhuti / Sandal Paste & Kumkum on Vel
      const vibhutiY = vTip.py + (vNeck.py - vTip.py) * 0.42;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.roundRect(cx - 10 * vTip.scale, vibhutiY - 5, 20 * vTip.scale, 2.5, 2);
      ctx.roundRect(cx - 10 * vTip.scale, vibhutiY, 20 * vTip.scale, 2.5, 2);
      ctx.roundRect(cx - 10 * vTip.scale, vibhutiY + 5, 20 * vTip.scale, 2.5, 2);
      ctx.fill();

      // Kumkum Pottu
      ctx.beginPath();
      ctx.fillStyle = '#CC0000';
      ctx.arc(cx, vibhutiY + 1.2, 2.2, 0, Math.PI * 2);
      ctx.fill();

      // ── 4. Aarti Lamp Orbit (ദീപസമർപ്പണം) ──
      if (isAartiActive) {
        const aartiRadius = 90;
        const aartiAngle = clock * 3.5;
        const ax = Math.cos(aartiAngle) * aartiRadius;
        const az = Math.sin(aartiAngle) * aartiRadius;
        const ay = -10 + Math.sin(clock * 5) * 15;
        const apt = project(ax, ay, az, curRotX, curRotY, cx, cy);

        // Aarti flame light halo
        const fGrad = ctx.createRadialGradient(
          apt.px,
          apt.py,
          2,
          apt.px,
          apt.py,
          32 * (apt.scale || 1)
        );
        fGrad.addColorStop(0, 'rgba(255, 255, 200, 0.95)');
        fGrad.addColorStop(0.3, 'rgba(255, 160, 0, 0.75)');
        fGrad.addColorStop(0.7, 'rgba(255, 50, 0, 0.3)');
        fGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');
        ctx.fillStyle = fGrad;
        ctx.beginPath();
        ctx.arc(apt.px, apt.py, 32 * (apt.scale || 1), 0, Math.PI * 2);
        ctx.fill();

        // Aarti Lamp icon
        ctx.font = `${24 * apt.scale}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🪔', apt.px, apt.py);
      }

      // ── 5. Falling Flower Petals Animation (പുഷ്പാർച്ചന) ──
      for (let i = flowersParticlesRef.current.length - 1; i >= 0; i--) {
        const fl = flowersParticlesRef.current[i];
        fl.y += fl.vy;
        fl.x += fl.vx + Math.sin(clock * 2 + i) * 0.8;
        fl.z += fl.vz;
        fl.rot += fl.vrot;

        // When petals land near altar, fade out
        if (fl.y > 80) {
          fl.alpha -= 0.02;
          if (fl.alpha <= 0) {
            flowersParticlesRef.current.splice(i, 1);
            continue;
          }
        }

        const fpt = project(fl.x, fl.y, fl.z, curRotX, curRotY, cx, cy);
        ctx.save();
        ctx.translate(fpt.px, fpt.py);
        ctx.rotate(fl.rot);
        ctx.globalAlpha = Math.max(0, fl.alpha);
        ctx.fillStyle = fl.color;

        // Petal shape
        ctx.beginPath();
        ctx.ellipse(0, 0, fl.size * fpt.scale, fl.size * 1.5 * fpt.scale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isAartiActive]);

  // Touch and Mouse Drag handlers for 3D Interactivity
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = {
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const deltaX = clientX - lastMousePosRef.current.x;
    const deltaY = clientY - lastMousePosRef.current.y;

    rotationRef.current.y += deltaX * 0.009;
    rotationRef.current.x += deltaY * 0.009;

    // Constrain X rotation to prevent flipping upside down
    rotationRef.current.x = Math.max(-0.45, Math.min(0.45, rotationRef.current.x));

    lastMousePosRef.current = { x: clientX, y: clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="devotion-hub-card my-5 p-3 p-md-5 rounded-4 shadow-lg text-white position-relative">
      {/* Header */}
      <div className="text-center mb-3">
        <span
          className="badge px-3 py-2 rounded-pill mb-2"
          style={{ background: 'rgba(212, 160, 23, 0.2)', border: '1px solid var(--gold-light)' }}
        >
          <i className="fas fa-cube me-2 text-warning"></i>3D വർച്വൽ സന്നിധാനം · 3D SACRED SANCTUM
        </span>
        <h2
          className="section-title text-white mb-1"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '1.95rem' }}
        >
          Interactive Divine Experience
        </h2>
        <p style={{ fontFamily: 'var(--font-malayalam)', color: '#FFE6BD', fontSize: '0.94rem' }}>
          ഭഗവാൻ മുരുകന്റെ ശക്തിവേൽ തിരിക്കാം, പുഷ്പാർച്ചനയും ദീപാരാധനയും മണിനാദവും അർപ്പിക്കാം
        </p>
      </div>

      {/* ── 3D Canvas Stage ── */}
      <div
        className="sanctum-3d-stage position-relative rounded-4 overflow-hidden mb-4"
        style={{
          background: 'radial-gradient(ellipse at center, #260503 0%, #120202 85%)',
          border: '1.5px solid rgba(247, 208, 102, 0.35)',
          boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.6)',
          cursor: 'grab',
          touchAction: 'none',
        }}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

        {/* Top Badges Bar */}
        <div
          className="position-absolute top-0 start-0 w-100 p-2 p-md-3 d-flex justify-content-between align-items-center pointer-events-none"
          style={{ zIndex: 12, pointerEvents: 'none' }}
        >
          {/* 3D Drag Helper Badge */}
          <div
            className="px-2 px-md-3 py-1 rounded-pill small"
            style={{
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: '0.72rem',
              color: '#FFE29A',
              maxWidth: '48%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <i className="fas fa-arrows-up-down-left-right me-1"></i> Drag to rotate
          </div>

          {/* Live Aarti Active Badge */}
          {isAartiActive && (
            <div
              className="px-2 px-md-3 py-1 rounded-pill small fw-bold"
              style={{
                background: 'linear-gradient(135deg, #FF6F00, #D84315)',
                color: '#FFF',
                boxShadow: '0 0 15px rgba(255, 111, 0, 0.8)',
                animation: 'pulseGlow 1.5s infinite',
                fontSize: '0.72rem',
                maxWidth: '48%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              🔥 ദീപാരാധന...
            </div>
          )}
        </div>

        {/* Bottom Floating 3D Action Controls */}
        <div
          className="sanctum-controls position-absolute bottom-0 start-50 translate-middle-x mb-2 mb-md-3 d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-center"
          style={{ zIndex: 10, width: 'calc(100% - 24px)', maxWidth: '420px' }}
        >
          <button
            onClick={offerFlowers}
            className="btn btn-warning rounded-pill px-3 py-2 fw-bold shadow w-100 flex-sm-grow-1"
            style={{
              background: 'var(--gradient-saffron)',
              border: 'none',
              color: '#fff',
              fontSize: '0.88rem',
            }}
          >
            🌺 പുഷ്പാർച്ചന ({flowerCount})
          </button>
          <button
            onClick={toggleAarti}
            className={`btn rounded-pill px-3 py-2 fw-bold shadow w-100 flex-sm-grow-1 ${
              isAartiActive ? 'btn-danger' : 'btn-outline-warning'
            }`}
            style={{
              ...(isAartiActive ? {} : { background: 'rgba(20,5,2,0.65)', color: '#FFD700' }),
              fontSize: '0.88rem',
            }}
          >
            🪔 {isAartiActive ? 'ആരതി നിർത്തുക' : 'ദീപാരാധന'}
          </button>
          <button
            onClick={ringBell}
            className={`btn btn-outline-light rounded-pill px-3 py-2 fw-bold shadow w-100 flex-sm-grow-1 ${
              bellRinging ? 'active' : ''
            }`}
            style={{
              background: 'rgba(20,5,2,0.65)',
              fontSize: '0.88rem',
            }}
          >
            🔔 മണിനാദം
          </button>
        </div>
      </div>

      {/* ── Sacred Devotion Controls Row ── */}
      <div className="row g-3">
        {/* Pancha-Deepam Lighting */}
        <div className="col-md-6">
          <div className="devotion-box p-3 rounded-4 text-center h-100">
            <h3 className="h6 fw-bold mb-1" style={{ color: 'var(--gold-light)' }}>
              പഞ്ച ദീപസമർപ്പണം (Pancha-Deepam)
            </h3>
            <p className="small mb-2 text-white-50">
              Click each diya lamp to illuminate the shrine
            </p>
            <div className="d-flex justify-content-center gap-2 my-2">
              {lampsLit.map((isLit, i) => (
                <button
                  key={i}
                  onClick={() => toggleLamp(i)}
                  className={`lamp-btn ${isLit ? 'lit' : ''}`}
                  style={{
                    fontSize: '1.4rem',
                    background: isLit
                      ? 'radial-gradient(circle, #FFE082, #FF8F00)'
                      : 'rgba(255,255,255,0.08)',
                    border: '1px solid var(--gold-light)',
                    borderRadius: '50%',
                    width: '46px',
                    height: '46px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isLit ? '0 0 16px rgba(255, 160, 0, 0.8)' : 'none',
                  }}
                  title={isLit ? 'Lit' : 'Click to light lamp'}
                >
                  🪔
                </button>
              ))}
            </div>
            <div className="small" style={{ color: '#FFD56B' }}>
              തെളിഞ്ഞ ദീപങ്ങൾ: <strong>{lampsLit.filter(Boolean).length} / 5</strong>
            </div>
          </div>
        </div>

        {/* Saravana Bhava Chant Counter */}
        <div className="col-md-6">
          <div className="devotion-box p-3 rounded-4 text-center h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 className="h6 fw-bold mb-1" style={{ color: 'var(--gold-light)' }}>
                ശരവണ ഭവ ജപമാല (Mantra Japam)
              </h3>
              <p className="small mb-2 text-white-50">
                Chant "ഓം ശരവണ ഭവായ നമഃ" with pure devotion
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 my-2">
              <span style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>🕉️</span>
              <span className="fs-3 fw-bold font-monospace" style={{ color: '#FFF2CE' }}>
                {mantraChants}
              </span>
              <button
                className="btn btn-warning rounded-pill px-4 fw-bold"
                style={{ background: 'var(--gradient-saffron)', border: 'none', color: '#fff' }}
                onClick={() => setMantraChants((prev) => prev + 1)}
              >
                +1 ജപിക്കുക
              </button>
            </div>
            <div className="small text-white-50">108 തവണ ജപിച്ചു സുകൃതം നേടുക</div>
          </div>
        </div>
      </div>
    </div>
  );
}
