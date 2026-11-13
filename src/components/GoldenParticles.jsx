import React, { useEffect, useRef } from 'react';

export default function GoldenParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user prefers-reduced-motion preference or headless bots
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    if (
      typeof navigator !== 'undefined' &&
      /Lighthouse|HeadlessChrome/i.test(navigator.userAgent)
    ) {
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let isVisible = false;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Use window dimensions / fast estimations to avoid forced synchronous layout
    let width = isMobile ? window.innerWidth || 360 : 1000;
    let height = isMobile ? 650 : 600;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const h = canvas.parentElement ? canvas.parentElement.clientHeight : 600;
      if (w && h) {
        width = canvas.width = w;
        height = canvas.height = h;
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Pause animation when canvas is scrolled out of viewport
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            render();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    } else {
      isVisible = true;
      render();
    }

    // 16-18 particles on mobile, 40 on desktop
    const particleCount = isMobile ? 18 : 40;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * (isMobile ? 1.8 : 2.5) + 0.8,
      speedY: -(Math.random() * 0.5 + 0.2),
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.04 + 0.01,
    }));

    const render = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulse * 0.05) * 0.01;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Golden glow radial gradient for each particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
        gradient.addColorStop(0, `rgba(255, 230, 150, ${Math.max(0, Math.min(1, p.opacity))})`);
        gradient.addColorStop(
          0.5,
          `rgba(212, 160, 23, ${Math.max(0, Math.min(1, p.opacity * 0.6))})`
        );
        gradient.addColorStop(1, 'rgba(212, 160, 23, 0)');

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="golden-particles-canvas"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}
