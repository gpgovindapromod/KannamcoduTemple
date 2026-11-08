import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * BlurText Component (inspired by reactbits.dev/text-animations/blur-text)
 * Responsive: uses whiteSpace: 'normal' to allow natural line wrapping on mobile.
 */
export default function BlurText({
  text = '',
  delay = 50,
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  className = ''
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <span ref={ref} className={`blur-text-wrapper ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            y: direction === 'top' ? -15 : 15
          }}
          animate={isInView ? {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0
          } : {}}
          transition={{
            duration: 0.55,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ display: 'inline-block', whiteSpace: 'normal', marginRight: '0.28em' }}
        >
          {segment}
        </motion.span>
      ))}
    </span>
  );
}
