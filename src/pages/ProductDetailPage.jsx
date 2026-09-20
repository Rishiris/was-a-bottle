import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, ALL_PRODUCTS } from "../data/products";
import { ProductVisual } from "../components/BottleVisual";
import { Star, Sun, Moon, ShoppingBag, ShieldCheck, Truck, RefreshCw, Tag, ChevronRight, CheckCircle2, MessageSquarePlus } from "lucide-react";

export function ProductDetailPage() {
  const { selectedProductId, navigateTo, addToCart, showToast } = useCart();
  const [isLit, setIsLit] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [engravingText, setEngravingText] = useState("");
  const [activeTab, setActiveTab] = useState("specs");
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });

  const product = ALL_PRODUCTS.find((p) => p.id === selectedProductId) || ALL_PRODUCTS[0];
  const relatedProducts = ALL_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  // Scroll to top whenever the product changes — the most reliable place to do it
  // because this runs AFTER React has committed the new PDP DOM to the screen.
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [selectedProductId]);

  const handleAddToCart = () => {
    addToCart(product, quantity, engravingText);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.comment) {
      product.reviews.unshift({
        id: `rev-${Date.now()}`,
        user: newReview.user,
        rating: newReview.rating,
        date: "Just now",
        comment: newReview.comment
      });
      product.reviewCount += 1;
      showToast("Thank you for submitting your review!");
      setReviewModalOpen(false);
      setNewReview({ user: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="page-pdp section-padding">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav className="pdp-breadcrumbs mono" aria-label="Breadcrumb">
          <span onClick={() => navigateTo("home")}>Home</span>
          <ChevronRight size={14} />
          <span onClick={() => navigateTo("shop")}>Shop</span>
          <ChevronRight size={14} />
          <span>{product.category}</span>
          <ChevronRight size={14} />
          <span className="current-crumb">{product.name}</span>
        </nav>

        {/* Product Hero Layout */}
        <div className="pdp-main-grid">
          {/* Visual Interactive Column */}
          <div className="pdp-visual-col">
            {/* Product Photo (if available) */}
            {product.image && (
              <div className="pdp-product-photo-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="pdp-product-photo"
                  loading="eager"
                />
              </div>
            )}

            <div className={`pdp-stage-box ${isLit ? "lit-mode" : "dark-mode"} ${product.image ? "pdp-stage-compact" : ""}`}>
              <ProductVisual product={product} isLit={isLit} size="pdp" />

              {product.category === "Lighting" && (
                <div className="pdp-switch-floating-bar">
                  <button
                    className={`pdp-switch-btn ${isLit ? "active-glow" : ""}`}
                    onClick={() => setIsLit(!isLit)}
                  >
                    {isLit ? <Sun size={18} /> : <Moon size={18} />}
                    <span>{isLit ? "Switch to Daytime / Lights Off" : "Switch to Night Glow"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Details & Purchase Column */}
          <div className="pdp-info-col">
            <div className="pdp-tags-row">
              <span className="pdp-pill mono">{product.bottleType} Bottle</span>
              <span className="pdp-pill mono">{product.glassTint} Glass Tint</span>
              {product.inStock ? (
                <span className="pdp-stock-pill mono in-stock">
                  <CheckCircle2 size={12} /> IN STOCK (READY TO SHIP)
                </span>
              ) : (
                <span className="pdp-stock-pill mono out-stock">MADE TO ORDER</span>
              )}
            </div>

            <h1 className="pdp-title">{product.name}</h1>

            <div className="pdp-rating-price-row">
              <div className="pdp-price">${product.price.toFixed(2)}</div>
              <div className="pdp-stars">
                <Star size={18} fill="#e7a33e" color="#e7a33e" />
                <span className="pdp-rating-val">{product.rating}</span>
                <span className="pdp-review-count">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            <p className="pdp-description">{product.description}</p>

            {/* Bottle Provenance Spotlight Card */}
            <div className="provenance-spotlight-card">
              <div className="prov-header mono">
                <span>RECLAIMED BOTTLE PROVENANCE</span>
              </div>
              <p className="prov-text">"{product.provenance}"</p>
              <div className="prov-specs-row mono">
                <span>DIMENSIONS: {product.dimensions}</span>
                <span>ORIGIN: PACIFIC NORTHWEST RECYCLING NETWORK</span>
              </div>
            </div>

            {/* Live Engraving Customizer Input */}
            <div className="pdp-engraving-card">
              <div className="engraving-header-row">
                <div className="engraving-title">
                  <Tag size={16} className="tag-icon" />
                  <span>Custom Laser Engraving</span>
                </div>
                <span className="engraving-price mono">+$15.00</span>
              </div>
              <p className="engraving-subtext">Add names, coordinates, or dates permanently laser-etched into the glass.</p>

              <input
                type="text"
                maxLength={32}
                placeholder="e.g. Established 2026 • NYC"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                className="engraving-input"
              />

              {engravingText && (
                <div className="engraving-live-preview-box">
                  <span className="preview-label mono">ENGRAVING PREVIEW:</span>
                  <span className="preview-text-render">{engravingText}</span>
                </div>
              )}
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="pdp-purchase-actions">
              <div className="qty-picker pdp-qty">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button className="btn btn-solid pdp-add-cart-btn" onClick={handleAddToCart}>
                <ShoppingBag size={20} /> Add to Cart — ${(
                  (product.price + (engravingText ? 15 : 0)) *
                  quantity
                ).toFixed(2)}
              </button>
            </div>

            {/* Guarantee Pills */}
            <div className="pdp-guarantee-grid">
              <div className="guarantee-item">
                <Truck size={18} />
                <span>Zero-Plastic Carbon Neutral Shipping</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={18} />
                <span>Hand-Polished Food-Safe Rims</span>
              </div>
              <div className="guarantee-item">
                <RefreshCw size={18} />
                <span>30-Day Eco Glass Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Tabs Accordion */}
        <div className="pdp-tabs-section">
          <div className="pdp-tabs-nav">
            <button
              className={`pdp-tab-btn ${activeTab === "specs" ? "active" : ""}`}
              onClick={() => setActiveTab("specs")}
            >
              Specifications & Craft
            </button>
            {product.articles && product.articles.length > 0 && (
              <button
                className={`pdp-tab-btn ${activeTab === "articles" ? "active" : ""}`}
                onClick={() => setActiveTab("articles")}
              >
                Articles & Editorials
              </button>
            )}
            <button
              className={`pdp-tab-btn ${activeTab === "care" ? "active" : ""}`}
              onClick={() => setActiveTab("care")}
            >
              Care & Maintenance
            </button>
            <button
              className={`pdp-tab-btn ${activeTab === "shipping" ? "active" : ""}`}
              onClick={() => setActiveTab("shipping")}
            >
              Zero-Waste Shipping
            </button>
          </div>

          <div className="pdp-tab-content">
            {activeTab === "specs" && (
              <div className="tab-panel">
                <h3>Technical Details</h3>
                <ul>
                  {product.specifications ? (
                    product.specifications.map((spec, idx) => <li key={idx}>{spec}</li>)
                  ) : (
                    <>
                      <li>Crafted from authentic heavy-weight salvaged glass bottles</li>
                      <li>Multi-stage wet-sanded rim polished to 1,200 grit smoothness</li>
                      <li>100% lead-free, food-safe, non-toxic processing</li>
                    </>
                  )}
                </ul>
                {product.provenance && (
                  <div className="tab-provenance-note">
                    <span className="mono">PROVENANCE: </span>{product.provenance}
                  </div>
                )}
              </div>
            )}

            {activeTab === "articles" && product.articles && (
              <div className="tab-panel tab-articles-panel">
                {product.articles.map((article, idx) => (
                  <article key={idx} className="pdp-article">
                    <h3 className="pdp-article-title">{article.title}</h3>
                    <p className="pdp-article-body">{article.body}</p>
                  </article>
                ))}
              </div>
            )}

            {activeTab === "care" && (
              <div className="tab-panel">
                <h3>Care Instructions</h3>
                <p>
                  For lighting pieces, wipe glass with a damp microfiber cloth. Unplug fixture before cleaning. Drinkware glasses are dishwasher safe (top rack recommended).
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="tab-panel">
                <h3>Shipping & Packaging</h3>
                <p>
                  Every order is packed using recycled Kraft paper cushioning and water-activated gummed tape. No bubble wrap or plastic foam is used. Standard delivery: 3-5 business days.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── EDITORIAL ARTICLES ── Below the purchase area */}
        {product.articles && product.articles.length > 0 && (
          <div className="pdp-editorial-section">
            <div className="pdp-editorial-header">
              <div className="eyebrow mono">EDITORIAL · THE STORY BEHIND THIS PIECE</div>
              <h2>Read more about the {product.name}</h2>
            </div>
            <div className="pdp-editorial-grid">
              {product.articles.map((article, idx) => (
                <article key={idx} className="pdp-editorial-card">
                  <div className="pdp-editorial-num mono">0{idx + 1}</div>
                  <h3>{article.title}</h3>
                  <p>{article.body}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews Section */}
        <div className="pdp-reviews-section">
          <div className="reviews-header-flex">
            <div>
              <h2>Customer Reviews ({product.reviews.length})</h2>
              <div className="stars-average">
                <Star size={20} fill="#e7a33e" color="#e7a33e" />
                <span className="avg-num">{product.rating} out of 5</span>
              </div>
            </div>

            <button className="btn btn-ghost" onClick={() => setReviewModalOpen(true)}>
              <MessageSquarePlus size={16} /> Write a Review
            </button>
          </div>

          <div className="pdp-reviews-list">
            {product.reviews.map((rev) => (
              <div key={rev.id} className="pdp-review-card">
                <div className="rev-card-top">
                  <strong>{rev.user}</strong>
                  <span className="rev-date mono">{rev.date}</span>
                </div>
                <div className="rev-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#e7a33e" color="#e7a33e" />
                  ))}
                </div>
                <p className="rev-comment">"{rev.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Grid — same category only */}
        {relatedProducts.length > 0 && (
          <div className="pdp-related-section">
            <div className="pdp-related-header">
              <div className="eyebrow mono">MORE FROM THIS CATEGORY</div>
              <h2>More {product.category}</h2>
            </div>
            <div className="products-grid">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="product-card pdp-related-card"
                  onClick={() => navigateTo("pdp", rel.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="product-card-visual">
                    {rel.image ? (
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="related-card-img"
                        loading="lazy"
                      />
                    ) : (
                      <ProductVisual product={rel} isLit={true} size="card" />
                    )}
                  </div>
                  <div className="product-card-info">
                    <h3 className="product-title-link">{rel.name}</h3>
                    <div className="related-card-footer">
                      <span className="card-price">${rel.price}</span>
                      <span className="related-card-cta mono">View →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review Submission Modal */}
      {reviewModalOpen && (
        <div className="review-modal-backdrop" onClick={() => setReviewModalOpen(false)}>
          <div className="review-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Write a Customer Review</h3>
            <form onSubmit={handleAddReview} className="review-form">
              <label>
                <span>Your Name:</span>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah M."
                  value={newReview.user}
                  onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
                />
              </label>

              <label>
                <span>Rating:</span>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                >
                  <option value={5}>5 Stars — Excellent</option>
                  <option value={4}>4 Stars — Very Good</option>
                  <option value={3}>3 Stars — Good</option>
                  <option value={2}>2 Stars — Fair</option>
                  <option value={1}>1 Star — Poor</option>
                </select>
              </label>

              <label>
                <span>Your Review:</span>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the glass quality, illumination, or packaging..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                />
              </label>

              <div className="review-modal-buttons">
                <button type="button" className="btn btn-ghost" onClick={() => setReviewModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-solid">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
