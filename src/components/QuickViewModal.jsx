import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { X, Star, Sun, Moon, ShoppingBag, Sparkles, Check } from "lucide-react";
import { ProductVisual } from "./BottleVisual";

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, navigateTo } = useCart();
  const [isLit, setIsLit] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [engravingText, setEngravingText] = useState("");

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, engravingText);
    setQuickViewProduct(null);
  };

  return (
    <div className="quickview-backdrop" onClick={() => setQuickViewProduct(null)}>
      <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sticky close button */}
        <button
          className="quickview-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="quickview-grid">
          {/* Visual Column */}
          <div className="quickview-visual-col">
            {/* Show real photo if available */}
            {quickViewProduct.image && (
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                  maxHeight: "260px",
                  marginBottom: "16px",
                  display: "block",
                }}
                loading="eager"
              />
            )}

            <div className={`quickview-stage ${isLit ? "stage-lit" : "stage-dark"}`}>
              <ProductVisual product={quickViewProduct} isLit={isLit} size="large" />

              {quickViewProduct.category === "Lighting" && (
                <div className="light-switch-overlay">
                  <button
                    className={`light-switch-btn ${isLit ? "active" : ""}`}
                    onClick={() => setIsLit(!isLit)}
                  >
                    {isLit ? <Sun size={15} /> : <Moon size={15} />}
                    <span>{isLit ? "Lights On" : "Lights Off"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="quickview-details-col">
            <div className="quickview-badges">
              <span className="badge-provenance mono">{quickViewProduct.bottleType} Bottle</span>
              <span className="badge-tint mono">{quickViewProduct.glassTint} Glass</span>
            </div>

            <h2>{quickViewProduct.name}</h2>

            <div className="quickview-price-rating">
              <span className="qv-price">${quickViewProduct.price}</span>
              <div className="qv-rating">
                <Star size={15} fill="#e7a33e" color="#e7a33e" />
                <span>{quickViewProduct.rating} ({quickViewProduct.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="qv-description">{quickViewProduct.description}</p>

            <div className="qv-provenance-box">
              <span className="qv-prov-label mono">BOTTLE ORIGIN & PROVENANCE</span>
              <p>{quickViewProduct.provenance}</p>
            </div>

            {/* Custom Engraving Option */}
            <div className="qv-engraving-field">
              <label className="engraving-label">
                <span>Personalized Laser Engraving (+$15)</span>
                <span className="engraving-sub">Optional custom message</span>
              </label>
              <input
                type="text"
                maxLength={30}
                placeholder="e.g. Happy Anniversary 2026"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
              />
            </div>

            {/* Quantity & CTA */}
            <div className="qv-actions-row">
              <div className="qty-picker large">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button className="btn btn-solid qv-add-btn" onClick={handleAddToCart}>
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>

            <button
              className="qv-full-details-link"
              onClick={() => {
                setQuickViewProduct(null);
                navigateTo("pdp", quickViewProduct.id);
              }}
            >
              View Full Product Specifications & Customer Reviews →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
