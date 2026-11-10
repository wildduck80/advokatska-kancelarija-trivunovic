import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * @param {Object} [options]
 * @param {number} [options.threshold=0.1] - IntersectionObserver threshold
 * @param {string} [options.rootMargin='0px 0px -50px 0px'] - IntersectionObserver rootMargin
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export const useScrollAnimation = ({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing (animation only happens once)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return { ref: elementRef, isVisible };
};
