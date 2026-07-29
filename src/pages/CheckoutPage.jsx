import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { ShieldCheck, Lock, Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import { ProductVisual } from "../components/BottleVisual";

export function CheckoutPage() {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    shippingCost,
    carbonOffsetCost,
    cartTotal,
    appliedPromo,
    carbonOffset,
    clearCart,
    setLastOrderDetails,
    navigateTo
  } = useCart();

  const [formData, setFormData] = useState({
    email: "eco.customer@example.com",
    firstName: "Rishikesh",
    lastName: "User",
    address: "742 Evergreen Terrace",
    city: "Portland",
    state: "OR",
    zip: "97201",
    paymentMethod: "card",
    cardNumber: "•••• •••• •••• 4242",
    cardExp: "12/28",
    cardCvc: "888"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderNumber = `WAB-${Math.floor(100000 + Math.random() * 900000)}`;
    const bottlesSaved = cart.reduce((sum, item) => sum + item.quantity, 0);

    const orderDetails = {
      orderNumber,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      items: [...cart],
      total: cartTotal,
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingCost,
      carbonOffset: carbonOffsetCost,
      bottlesSaved,
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerEmail: formData.email
    };

    setLastOrderDetails(orderDetails);
    clearCart();
    navigateTo("confirmation");
  };

  if (cart.length === 0) {
    return (
      <div className="page-checkout section-padding text-center">
        <div className="section-container">
          <h2>Your cart is empty</h2>
          <p>Please add products to your cart before proceeding to checkout.</p>
          <button className="btn btn-solid" onClick={() => navigateTo("shop")}>
            Browse Shop Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-checkout section-padding">
      <div className="section-container">
        <div className="checkout-grid">
          {/* Form Column */}
          <div className="checkout-form-col">
            <div className="checkout-header-box">
              <span className="mono eyebrow">SECURE ECO CHECKOUT</span>
              <h1>Shipping & Payment</h1>
            </div>

            <form onSubmit={handlePlaceOrder} className="checkout-main-form">
              {/* Contact Info */}
              <div className="form-section-card">
                <h3>1. Contact Information</h3>
                <div className="field-group">
                  <label>Email Address for Order Confirmation</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="form-section-card">
                <h3>2. Shipping Address</h3>
                <div className="field-row-2">
                  <div className="field-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="field-row-3">
                  <div className="field-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field-group">
                    <label>State</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field-group">
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="form-section-card">
                <div className="card-header-flex">
                  <h3>3. Payment Details</h3>
                  <span className="secure-badge mono">
                    <Lock size={12} /> 256-BIT ENCRYPTED
                  </span>
                </div>

                <div className="payment-options-row">
                  <label className={`payment-tab ${formData.paymentMethod === "card" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                    />
                    <span>Credit Card</span>
                  </label>
                  <label className={`payment-tab ${formData.paymentMethod === "ecopay" ? "active" : ""}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="ecopay"
                      checked={formData.paymentMethod === "ecopay"}
                      onChange={handleChange}
                    />
                    <span>Eco-Pay / Apple Pay</span>
                  </label>
                </div>

                {formData.paymentMethod === "card" && (
                  <div className="card-fields-box">
                    <div className="field-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field-row-2">
                      <div className="field-group">
                        <label>Expiration Date</label>
                        <input
                          type="text"
                          name="cardExp"
                          required
                          value={formData.cardExp}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="field-group">
                        <label>CVC Security Code</label>
                        <input
                          type="text"
                          name="cardCvc"
                          required
                          value={formData.cardCvc}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-solid place-order-btn">
                Complete Eco Order — ${cartTotal.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="checkout-summary-col">
            <div className="summary-card-box">
              <h3>Order Summary</h3>

              <div className="checkout-items-list">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="checkout-item-row">
                    <div className="item-thumb-tiny">
                      <ProductVisual product={item.product} isLit={true} size="small" />
                    </div>
                    <div className="item-info">
                      <h5>{item.product.name}</h5>
                      <span className="qty mono">Qty: {item.quantity}</span>
                    </div>
                    <span className="item-price">${(item.unitPrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-line-break" />

              <div className="summary-breakdown-rows">
                <div className="row">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="row discount">
                    <span>Discount ({appliedPromo?.code})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="row">
                  <span>Zero-Plastic Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                {carbonOffset && (
                  <div className="row">
                    <span>Ocean Glass Restoration</span>
                    <span>+$2.00</span>
                  </div>
                )}

                <div className="row total-row">
                  <span>Total Due</span>
                  <span className="total-val">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="eco-impact-recap-box">
                <Leaf size={18} className="leaf-icon" />
                <div>
                  <strong>Eco Impact of this order:</strong>
                  <p>{cart.reduce((sum, item) => sum + item.quantity, 0)} glass bottles diverted from landfills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
