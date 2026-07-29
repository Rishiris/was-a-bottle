import React from "react";
import { useCart } from "../context/CartContext";
import { CheckCircle2, Leaf, Printer, ArrowRight, Package } from "lucide-react";
import { ProductVisual } from "../components/BottleVisual";

export function OrderConfirmationPage() {
  const { lastOrderDetails, navigateTo } = useCart();

  // Fallback demo order if refreshed
  const order = lastOrderDetails || {
    orderNumber: "WAB-984210",
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    customerName: "Rishikesh User",
    customerEmail: "eco.customer@example.com",
    shippingAddress: "742 Evergreen Terrace, Portland, OR 97201",
    items: [],
    total: 124.00,
    bottlesSaved: 3
  };

  return (
    <div className="page-confirmation section-padding">
      <div className="section-container">
        <div className="confirmation-card">
          <div className="success-icon-badge">
            <CheckCircle2 size={48} color="#a8c0a0" />
          </div>

          <div className="eyebrow mono">THANK YOU FOR YOUR ECO ORDER</div>
          <h1>Order Confirmed!</h1>
          <p className="order-num-text">
            Order Reference: <strong className="mono">{order.orderNumber}</strong> • Placed on {order.date}
          </p>

          <p className="confirmation-sub">
            We have sent a receipt to <strong>{order.customerEmail}</strong>. Your items are being hand-packed using plastic-free packaging.
          </p>

          {/* Eco Impact Certificate Box */}
          <div className="eco-certificate-card">
            <div className="cert-header">
              <Leaf size={24} className="leaf-icon" />
              <h3>Official Environmental Impact Certificate</h3>
            </div>
            <p>By choosing handcrafted upcycled glass instead of new manufacture, your order accomplished:</p>

            <div className="cert-metrics-row">
              <div className="cert-metric">
                <span className="metric font-serif">{order.bottlesSaved}</span>
                <span className="label mono">BOTTLES SAVED FROM LANDFILL</span>
              </div>
              <div className="cert-metric">
                <span className="metric font-serif">{(order.bottlesSaved * 0.45).toFixed(1)} kg</span>
                <span className="label mono">SOLID GLASS RECYCLED</span>
              </div>
              <div className="cert-metric">
                <span className="metric font-serif">{(order.bottlesSaved * 0.85).toFixed(1)} kg</span>
                <span className="label mono">CO2 EMISSIONS AVOIDED</span>
              </div>
            </div>
          </div>

          {/* Order Receipt Details */}
          <div className="receipt-details-box">
            <h3>Order Details</h3>

            <div className="receipt-items-list">
              {order.items && order.items.length > 0 ? (
                order.items.map((item) => (
                  <div key={item.cartItemId} className="receipt-item-row">
                    <div className="receipt-item-info">
                      <strong>{item.product.name}</strong>
                      <span className="prov">{item.product.provenance}</span>
                      {item.customEngraving && (
                        <span className="engraved mono">Engraving: "{item.customEngraving}"</span>
                      )}
                    </div>
                    <span className="qty mono">Qty: {item.quantity}</span>
                    <span className="price">${(item.unitPrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <p>1 × The Bordeaux Filament Pendant Light — $88.00</p>
              )}
            </div>

            <div className="receipt-shipping-address">
              <strong>Shipping Address:</strong>
              <p>{order.shippingAddress}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="confirmation-actions">
            <button className="btn btn-ghost" onClick={() => window.print()}>
              <Printer size={16} /> Print Receipt
            </button>

            <button className="btn btn-solid" onClick={() => navigateTo("shop")}>
              Continue Shopping <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
