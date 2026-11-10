import React, { useEffect, useRef } from 'react';

export default function GoldenParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user prefers-reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Pause animation when canvas is scrolled out of viewport
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          render();
        }
      }, { threshold: 0.05 });
      observer.observe(canvas);
    }

    // 16-18 particles on mobile, 40 on desktop
    const particleCount = isMobile ? 18 : 40;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * (canvas.width || 400),
      y: Math.random() * (canvas.height || 600),
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

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulse * 0.05) * 0.01;

        if (p.y < 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        grad.addColorStop(0, `rgba(255, 230, 140, ${Math.min(1, Math.max(0, p.opacity))})`);
        grad.addColorStop(1, 'rgba(212, 160, 23, 0)');
        ctx.fillStyle = grad;

        // Disable expensive shadowBlur on mobile CPU to eliminate TBT long-tasks
        if (!isMobile) {
          ctx.shadowColor = 'rgba(247, 208, 102, 0.8)';
          ctx.shadowBlur = 6;
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
