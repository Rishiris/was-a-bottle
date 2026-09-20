import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Triggers entrance animations when an element enters the viewport.
 * @param {object} options - { threshold, rootMargin, once }
 * @returns { ref, isVisible }
 */
export function useSectionReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();
  const { threshold = 0.15, rootMargin = "0px 0px -80px 0px", once = true } = options;

  useEffect(() => {
    // If reduced motion, show immediately
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced, threshold, rootMargin, once]);

  return { ref, isVisible };
}
