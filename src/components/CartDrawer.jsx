import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { X, Trash2, Plus, Minus, ShieldCheck, Leaf, Tag, ArrowRight } from "lucide-react";
import { ProductVisual } from "./BottleVisual";

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    discountAmount,
    shippingCost,
    carbonOffsetCost,
    cartTotal,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    carbonOffset,
    setCarbonOffset,
    navigateTo
  } = useCart();

  const [promoInput, setPromoInput] = useState("");

  if (!cartOpen) return null;

  const freeShippingThreshold = 100;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromoCode(promoInput);
      setPromoInput("");
    }
  };

  return (
    <div className="cart-drawer-backdrop" onClick={() => setCartOpen(false)}>
      <aside className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="drawer-title-group">
            <h3>Your Eco Cart</h3>
            <span className="cart-count-pill mono">{cart.length} ITEMS</span>
          </div>
          <button className="close-drawer-btn" onClick={() => setCartOpen(false)} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="shipping-progress-banner">
          {amountToFreeShipping > 0 ? (
            <p>Add <strong>${amountToFreeShipping.toFixed(2)}</strong> more for <strong>Free Shipping!</strong></p>
          ) : (
            <p className="free-shipping-unlocked">🎉 <strong>Free Standard Shipping Unlocked!</strong></p>
          )}
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${freeShippingProgress}%` }} />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="cart-items-scroll">
          {cart.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-icon-circle">🍾</div>
              <h4>Your cart is empty</h4>
              <p>Every bottle item purchased saves glass from landfills.</p>
              <button
                className="btn btn-solid"
                onClick={() => {
                  setCartOpen(false);
                  navigateTo("shop");
                }}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.cartItemId} className="cart-item-card">
                <div className="cart-item-thumb">
                  <ProductVisual product={item.product} isLit={true} size="small" />
                </div>

                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <h4
                      className="cart-item-title"
                      onClick={() => {
                        setCartOpen(false);
                        navigateTo("pdp", item.product.id);
                      }}
                    >
                      {item.product.name}
                    </h4>
                    <button
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.cartItemId)}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <p className="cart-item-provenance">{item.product.provenance}</p>

                  {item.customEngraving && (
                    <div className="cart-engraving-tag">
                      <Tag size={12} />
                      <span>Engraved: "{item.customEngraving}" (+$15)</span>
                    </div>
                  )}

                  <div className="cart-item-bottom">
                    <div className="qty-picker">
                      <button onClick={() => updateQuantity(item.cartItemId, -1)} aria-label="Decrease quantity">
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartItemId, 1)} aria-label="Increase quantity">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="cart-item-price">${(item.unitPrice * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Breakdown */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Promo Code Input */}
            <div className="promo-section">
              {appliedPromo ? (
                <div className="promo-applied-badge">
                  <span><Tag size={14} /> {appliedPromo.label}</span>
                  <button onClick={removePromoCode} className="remove-promo-btn">Remove</button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="promo-form">
                  <input
                    type="text"
                    placeholder="Promo code (e.g. RECYCLE10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                  />
                  <button type="submit">Apply</button>
                </form>
              )}
            </div>

            {/* Carbon Offset Checkbox */}
            <label className="carbon-offset-toggle">
              <input
                type="checkbox"
                checked={carbonOffset}
                onChange={(e) => setCarbonOffset(e.target.checked)}
              />
              <div className="offset-info">
                <span className="offset-title"><Leaf size={14} className="leaf-icon" /> Add $2.00 Ocean Glass Cleanup</span>
                <span className="offset-sub">100% of donation funds coastal glass restoration</span>
              </div>
            </label>

            {/* Price Calculations */}
            <div className="summary-lines">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="summary-row discount">
                  <span>Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Estimated Shipping</span>
                <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              {carbonOffset && (
                <div className="summary-row">
                  <span>Eco Offset</span>
                  <span>+$2.00</span>
                </div>
              )}
              <div className="summary-row total-row">
                <span>Total</span>
                <span className="total-amount">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <button
              className="btn btn-solid checkout-btn"
              onClick={() => {
                setCartOpen(false);
                navigateTo("checkout");
              }}
            >
              Proceed to Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
