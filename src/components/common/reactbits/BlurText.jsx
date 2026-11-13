import React, { useRef, useState, useEffect } from 'react';

/**
 * BlurText Component (High-Performance CSS Transition Implementation)
 * Eliminates Framer Motion from the critical path while preserving identical letter & word blur-fade transitions.
 */
export default function BlurText({
  text = '',
  delay = 50,
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  className = '',
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
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

  const yOffset = direction === 'top' ? '-15px' : '15px';

  return (
    <span ref={ref} className={`blur-text-wrapper ${className}`}>
      {elements.map((segment, index) => {
        const segDelay = (index * delay) / 1000;
        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              whiteSpace: 'normal',
              marginRight: '0.28em',
              opacity: isInView ? 1 : 0,
              filter: isInView ? 'blur(0px)' : 'blur(8px)',
              transform: isInView ? 'translate3d(0, 0, 0)' : `translate3d(0, ${yOffset}, 0)`,
              transition: `opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${segDelay}s, filter 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${segDelay}s, transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${segDelay}s`,
              willChange: isInView ? 'auto' : 'opacity, filter, transform',
            }}
          >
            {segment}
          </span>
        );
      })}
    </span>
  );
}
