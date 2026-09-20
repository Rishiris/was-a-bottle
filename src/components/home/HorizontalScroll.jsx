import React, { useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { ArrowRight } from "lucide-react";

/**
 * Horizontal scroll gallery — CSS overflow-x with drag-to-scroll.
 * Cards are clickable and navigate to the product detail page.
 * Section alignment matches the rest of the homepage.
 */
export function HorizontalScroll({ products = [], onNavigate }) {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const didDrag = useRef(false);
  const prefersReduced = useReducedMotion();

  /* ── Mouse drag-to-scroll (won't trigger click if user dragged) ── */
  const onMouseDown = (e) => {
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    if (Math.abs(walk) > 5) didDrag.current = true;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.userSelect = "";
    }
  };

  const handleCardClick = (product) => {
    // Only navigate if user didn't drag
    if (!didDrag.current && onNavigate) {
      onNavigate("pdp", product.id);
    }
  };

  return (
    <section className="hsg-section" aria-label="Product Gallery">
      {/* Section header — aligned with rest of homepage */}
      <div className="section-container">
        <div className="section-header-flex hsg-header-row">
          <div>
            <div className="eyebrow mono">THE COLLECTION</div>
            <h2>Every bottle, a new beginning</h2>
          </div>
          {onNavigate && (
            <button
              className="btn btn-ghost"
              onClick={() => onNavigate("shop")}
            >
              View All Products <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="hsg-track-scroll"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        role="region"
        aria-label="Horizontally scrollable product list"
      >
        {products.map((product, i) => (
          <div
            key={product.id}
            className="hsg-card hsg-card-clickable"
            onClick={() => handleCardClick(product)}
            role="button"
            tabIndex={0}
            aria-label={`View ${product.name}`}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(product)}
          >
            <div className="hsg-card-inner">
              <div className="hsg-card-num mono">0{i + 1}</div>

              <div className="hsg-card-visual">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      borderRadius: "12px",
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                ) : (
                  <svg viewBox="0 0 100 260" className="hsg-bottle-mini">
                    <defs>
                      <linearGradient id={`hsg-grad-${product.id}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={product.lightGlowColor || "#52b788"} stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#1a3a2b" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M42 28 H58 L62 46 C62 54 70 58 70 74 V210 C70 222 62 230 50 230 C38 230 30 222 30 210 V74 C30 58 38 54 38 46 Z"
                      fill={`url(#hsg-grad-${product.id})`}
                      stroke={product.lightGlowColor || "#52b788"}
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M36 90 V200 C36 208 40 218 44 222"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    {product.category === "Lighting" && (
                      <circle
                        cx="50"
                        cy="150"
                        r="6"
                        fill={product.lightGlowColor || "#f4a228"}
                        opacity="0.8"
                        className="hsg-glow-dot"
                      />
                    )}
                  </svg>
                )}

                <div
                  className="hsg-card-glow"
                  style={{ "--glow-color": product.lightGlowColor || "#52b788" }}
                  aria-hidden="true"
                />
              </div>

              <div className="hsg-card-info">
                <div className="hsg-card-cat mono">{product.category}</div>
                <h3 className="hsg-card-name">{product.name}</h3>
                <div className="hsg-card-provenance">{product.provenance}</div>
                <div className="hsg-card-price font-serif">${product.price}</div>
                <div className="hsg-card-cta mono">
                  View Product <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-container">
        <div className="hsg-drag-hint mono" aria-hidden="true">
          <span className="hsg-drag-arrow">←</span> Drag or scroll to explore
          <span className="hsg-drag-arrow">→</span>
        </div>
      </div>
    </section>
  );
}
