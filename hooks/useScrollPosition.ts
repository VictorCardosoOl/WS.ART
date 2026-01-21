import { useState, useEffect } from 'react';

/**
 * Returns the current window scroll Y position.
 * Throttled using requestAnimationFrame for performance.
 */
export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      setScrollPosition(window.scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updatePosition(); // Initial set

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollPosition;
};