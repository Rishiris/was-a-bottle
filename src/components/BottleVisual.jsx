import React from "react";

export function ProductVisual({ product, isLit = true, size = "normal" }) {
  const glowColor = product?.lightGlowColor || "#e7a33e";
  const category = product?.category || "Lighting";
  const tint = product?.glassTint || "Sage";

  const tintColors = {
    Sage: { body: "#a8c0a0", stroke: "#c3dac0", opacity: 0.4 },
    Amber: { body: "#e7a33e", stroke: "#f5c57b", opacity: 0.5 },
    Emerald: { body: "#2a704e", stroke: "#4eb884", opacity: 0.5 },
    Cobalt: { body: "#2b5cb8", stroke: "#6fa1ff", opacity: 0.5 },
    Clear: { body: "#e2ece9", stroke: "#ffffff", opacity: 0.3 },
  };

  const currentTint = tintColors[tint] || tintColors.Sage;

  if (category === "Lighting") {
    return (
      <div className={`product-visual-wrap ${isLit ? "is-illuminated" : "is-off"} size-${size}`}>
        <svg viewBox="0 0 300 400" className="product-svg">
          <defs>
            <radialGradient id={`glow-${product.id}`} cx="50%" cy="55%" r="60%">
              <stop offset="0%" stopColor={glowColor} stopOpacity={isLit ? "0.95" : "0"} />
              <stop offset="60%" stopColor={glowColor} stopOpacity={isLit ? "0.35" : "0"} />
              <stop offset="100%" stopColor="#0f201a" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id={`glass-grad-${product.id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={currentTint.body} stopOpacity={currentTint.opacity + 0.2} />
              <stop offset="50%" stopColor={currentTint.body} stopOpacity={currentTint.opacity} />
              <stop offset="100%" stopColor="#0f201a" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Background Aura */}
          {isLit && (
            <circle cx="150" cy="220" r="140" fill={`url(#glow-${product.id})`} className="ambient-glow" />
          )}

          {/* Hanging Cord & Brass Canopy */}
          <line x1="150" y1="0" x2="150" y2="90" stroke="#b89355" strokeWidth="3" strokeDasharray="6,3" />
          <rect x="135" y="85" width="30" height="15" rx="3" fill="#c99f53" />

          {/* Glass Bottle Body */}
          <path
            d="M136 100 H164 L168 135 C168 145 178 152 178 175 V330 C178 348 165 360 150 360 C135 360 122 348 122 330 V175 C122 152 132 145 132 135 Z"
            fill={`url(#glass-grad-${product.id})`}
            stroke={currentTint.stroke}
            strokeWidth="2.5"
          />

          {/* Glass Highlights */}
          <path
            d="M130 175 V320 C130 330 134 345 140 350"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Filament Bulb Inside */}
          <g className={`filament-group ${isLit ? "filament-on" : ""}`}>
            <line x1="150" y1="100" x2="150" y2="200" stroke="#b89355" strokeWidth="2" />
            <path
              d="M140 210 Q150 195 160 210 Q170 225 160 240 Q150 255 140 240 Q130 225 140 210 Z"
              fill="none"
              stroke={isLit ? glowColor : "#888888"}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="150" cy="225" r="5" fill={isLit ? glowColor : "#999999"} />
          </g>
        </svg>
      </div>
    );
  }

  if (category === "Drinkware & Sets") {
    return (
      <div className={`product-visual-wrap size-${size}`}>
        <svg viewBox="0 0 300 400" className="product-svg">
          <defs>
            <linearGradient id={`drink-grad-${product.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={currentTint.body} stopOpacity={currentTint.opacity + 0.3} />
              <stop offset="100%" stopColor={currentTint.body} stopOpacity={currentTint.opacity} />
            </linearGradient>
          </defs>
          {/* Glass Tumbler 1 */}
          <path
            d="M90 140 H170 L165 290 C165 305 152 315 130 315 C108 315 95 305 95 290 Z"
            fill={`url(#drink-grad-${product.id})`}
            stroke={currentTint.stroke}
            strokeWidth="3"
          />
          {/* Thick Punt Base */}
          <path d="M96 280 Q130 260 164 280" fill="none" stroke={currentTint.stroke} strokeWidth="3" opacity="0.7" />
          {/* Liquid fill preview */}
          <ellipse cx="130" cy="200" rx="35" ry="6" fill="#e7a33e" opacity="0.35" />

          {/* Glass Tumbler 2 (Background offset) */}
          <path
            d="M175 170 H235 L231 290 C231 300 220 308 205 308 C190 308 179 300 179 290 Z"
            fill={`url(#drink-grad-${product.id})`}
            stroke={currentTint.stroke}
            strokeWidth="2"
            opacity="0.75"
          />
        </svg>
      </div>
    );
  }

  if (category === "Planters & Pots") {
    return (
      <div className={`product-visual-wrap size-${size}`}>
        <svg viewBox="0 0 300 400" className="product-svg">
          {/* Top planter half */}
          <path
            d="M100 120 H200 L190 220 C190 230 175 238 150 238 C125 238 110 230 110 220 Z"
            fill={currentTint.body}
            fillOpacity="0.4"
            stroke={currentTint.stroke}
            strokeWidth="2.5"
          />
          {/* Soil */}
          <ellipse cx="150" cy="130" rx="46" ry="10" fill="#3d2a1b" />
          {/* Succulents plants */}
          <path d="M150 130 Q130 90 120 70 M150 130 Q150 80 150 60 M150 130 Q170 90 180 70" stroke="#7bb075" strokeWidth="6" strokeLinecap="round" />
          {/* Water reservoir bottom half */}
          <path
            d="M105 245 H195 L190 330 C190 342 175 350 150 350 C125 350 110 342 110 330 Z"
            fill={currentTint.body}
            fillOpacity="0.25"
            stroke={currentTint.stroke}
            strokeWidth="2"
          />
          <path d="M110 300 H190 V330 C190 342 175 350 150 350 C125 350 110 342 110 330 Z" fill="#4a90e2" opacity="0.3" />
        </svg>
      </div>
    );
  }

  if (category === "Eco Candles") {
    return (
      <div className={`product-visual-wrap size-${size}`}>
        <svg viewBox="0 0 300 400" className="product-svg">
          {/* Candle vessel */}
          <rect x="100" y="160" width="100" height="150" rx="8" fill={currentTint.body} fillOpacity="0.5" stroke={currentTint.stroke} strokeWidth="3" />
          {/* Wax fill */}
          <rect x="104" y="180" width="92" height="125" fill="#f3eee2" opacity="0.9" />
          {/* Wood Wick */}
          <rect x="147" y="160" width="6" height="25" fill="#5a3d28" />
          {/* Flame */}
          <path d="M150 130 C155 145 162 150 150 162 C138 150 145 145 150 130 Z" fill="#ff9000" />
          <circle cx="150" cy="148" r="4" fill="#fff5cc" />
        </svg>
      </div>
    );
  }

  // Fallback Glassware Icon
  return (
    <div className={`product-visual-wrap size-${size}`}>
      <svg viewBox="0 0 300 400" className="product-svg">
        <path
          d="M120 80 H180 L184 130 C184 140 196 148 196 175 V330 C196 348 180 360 150 360 C120 360 104 348 104 330 V175 C104 148 116 140 116 130 Z"
          fill={currentTint.body}
          fillOpacity="0.4"
          stroke={currentTint.stroke}
          strokeWidth="3"
        />
        <line x1="104" y1="200" x2="196" y2="200" stroke={currentTint.stroke} strokeWidth="1.5" strokeDasharray="4,4" opacity="0.6" />
      </svg>
    </div>
  );
}
