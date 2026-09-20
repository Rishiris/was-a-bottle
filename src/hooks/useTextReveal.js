import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Animates text by splitting into words and staggering them upward.
 * @param {boolean} trigger - When true, animation fires.
 * @param {object} options - { stagger, delay, duration, y }
 * @returns ref to attach to the container element
 */
export function useTextReveal(trigger = true, options = {}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const {
    stagger = 0.06,
    delay = 0,
    duration = 0.75,
    y = 40,
  } = options;

  useEffect(() => {
    if (!ref.current || !trigger) return;

    const el = ref.current;

    if (prefersReduced) {
      // Instantly show without motion
      gsap.set(el.querySelectorAll(".word-wrap"), { opacity: 1, y: 0 });
      return;
    }

    // Split text into word spans if not already done
    if (!el.dataset.split) {
      const nodes = Array.from(el.childNodes);
      el.innerHTML = "";
      el.dataset.split = "true";

      nodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.textContent.split(/(\s+)/);
          words.forEach((word) => {
            if (word.trim() === "") {
              el.appendChild(document.createTextNode(word));
            } else {
              const outer = document.createElement("span");
              outer.style.display = "inline-block";
              outer.style.overflow = "hidden";
              outer.style.verticalAlign = "bottom";

              const inner = document.createElement("span");
              inner.className = "word-wrap";
              inner.style.display = "inline-block";
              inner.style.transform = `translateY(${y}px)`;
              inner.style.opacity = "0";
              inner.textContent = word;

              outer.appendChild(inner);
              el.appendChild(outer);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Handle <em>, <br/>, etc.
          el.appendChild(node.cloneNode(true));
        }
      });
    }

    const words = el.querySelectorAll(".word-wrap");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: "power4.out",
        }
      );
    });

    return () => ctx.revert();
  }, [trigger, prefersReduced, stagger, delay, duration, y]);

  return ref;
}
