import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Parallax depth effect — moves element at a fraction of scroll speed.
 * @param {number} speed - Parallax multiplier (e.g., 0.3 = moves 30% of scroll)
 * @param {string} direction - "y" (default) or "x"
 * @returns ref to attach to the element
 */
export function useParallax(speed = 0.3, direction = "y") {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    let rafId;
    let currentY = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2 + scrollY;
      const viewportCenter = scrollY + window.innerHeight / 2;
      const offset = (viewportCenter - elementCenter) * speed;

      currentY = offset;

      gsap.set(el, {
        [direction === "x" ? "x" : "y"]: currentY,
        force3D: true,
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(rafId);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [speed, direction, prefersReduced]);

  return ref;
}
