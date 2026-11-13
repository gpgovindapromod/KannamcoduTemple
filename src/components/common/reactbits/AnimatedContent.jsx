import React, { useRef, useState, useEffect } from 'react';

/**
 * AnimatedContent Component (High-Performance CSS Transition Implementation)
 * Provides smooth entrance animation with zero Framer Motion JavaScript execution overhead.
 * Uses native IntersectionObserver and hardware-accelerated CSS transitions.
 */
export default function AnimatedContent({
  children,
  distance = 30,
  direction = 'vertical', // 'vertical' or 'horizontal'
  reverse = false,
  duration = 0.65,
  delay = 0,
  scale = 1,
  className = '',
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset = reverse ? -distance : distance;
  const transformInitial =
    direction === 'horizontal'
      ? `translate3d(${offset}px, 0, 0) scale(${scale !== 1 ? scale : 0.98})`
      : `translate3d(0, ${offset}px, 0) scale(${scale !== 1 ? scale : 0.98})`;

  const transformFinal = 'translate3d(0, 0, 0) scale(1)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? transformFinal : transformInitial,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: isInView ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
