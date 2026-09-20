import { useEffect, useRef, useState } from "react";

/**
 * Returns scroll progress (0 to 1) for a given element ref.
 * Progress is 0 when element top hits viewport bottom, 1 when bottom hits viewport top.
 * @param {object} options - { offset: 0-1 threshold before triggering }
 */
export function useScrollProgress(options = {}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const { offset = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // start: element bottom entering viewport, end: element top leaving
      const start = vh - rect.top;
      const total = rect.height + vh;
      const raw = start / total;
      setProgress(Math.min(1, Math.max(0, raw - offset)));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, [offset]);

  return { ref, progress };
}
