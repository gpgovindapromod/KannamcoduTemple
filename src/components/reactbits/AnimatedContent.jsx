import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedContent Component (inspired by reactbits.dev/animations/animated-content)
 * Viewport entrance wrapper with custom direction, delay, blur, and scale transitions.
 */
export default function AnimatedContent({
  children,
  distance = 30,
  direction = 'vertical', // 'vertical' or 'horizontal'
  reverse = false,
  duration = 0.65,
  delay = 0,
  scale = 1,
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const axis = direction === 'horizontal' ? 'x' : 'y';
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        [axis]: offset,
        scale: scale !== 1 ? scale : 0.98,
        filter: 'blur(6px)'
      }}
      animate={isInView ? {
        opacity: 1,
        [axis]: 0,
        scale: 1,
        filter: 'blur(0px)'
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

