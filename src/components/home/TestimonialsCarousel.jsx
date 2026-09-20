import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Premium auto-sliding testimonial carousel.
 * - Cards float in/out with AnimatePresence
 * - Stars animate in one by one
 * - Auto-cycles every 4s, pauses on hover
 */
export function TestimonialsCarousel({ reviews = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const total = reviews.length;

  const go = (dir) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    if (paused || prefersReduced || total === 0) return;

    intervalRef.current = setInterval(() => {
      go(1);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [paused, prefersReduced, total, active]);

  if (!total) return null;

  const review = reviews[active];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.08, type: "spring", stiffness: 400, damping: 20 },
    }),
  };

  return (
    <section
      className="testimonials-carousel-section section-padding"
      aria-label="Customer Reviews Carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section-container">
        <div className="section-header-center">
          <div className="eyebrow mono">VERIFIED FEEDBACK</div>
          <h2>What our eco decor community says</h2>
        </div>

        <div className="tc-stage">
          {/* Background floating cards for depth */}
          <div className="tc-bg-card tc-bg-card-l" aria-hidden="true" />
          <div className="tc-bg-card tc-bg-card-r" aria-hidden="true" />

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={prefersReduced ? {} : variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="tc-active-card review-card"
            >
              {/* Stars */}
              <div className="stars-row">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={prefersReduced ? {} : starVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Star size={18} fill="#e7a33e" color="#e7a33e" />
                  </motion.span>
                ))}
              </div>

              <p className="review-quote tc-quote">"{review.quote}"</p>

              <div className="review-author-info">
                <div className="tc-avatar" aria-hidden="true">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <strong>{review.author}</strong>
                  <span className="author-role">{review.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="tc-controls">
            <button
              className="tc-nav-btn"
              onClick={() => go(-1)}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="tc-dots" role="tablist">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Review ${i + 1}`}
                  className={`tc-dot ${i === active ? "tc-dot-active" : ""}`}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                />
              ))}
            </div>

            <button
              className="tc-nav-btn"
              onClick={() => go(1)}
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
