import React from "react";

/**
 * Animated scroll indicator — bouncing chevron that encourages scrolling.
 */
export function ScrollIndicator({ label = "Scroll to explore" }) {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span className="scroll-indicator-label mono">{label}</span>
      <div className="scroll-indicator-track">
        <div className="scroll-indicator-thumb" />
      </div>
    </div>
  );
}
