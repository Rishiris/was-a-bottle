import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Search, ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { PRODUCTS } from "../data/products";

export function Header() {
  const {
    currentPage,
    navigateTo,
    setCartOpen,
    totalItemsCount,
    searchOpen,
    setSearchOpen
  } = useCart();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop All" },
    { id: "byob", label: "BYOB Studio", highlight: true },
    { id: "story", label: "Our Story" },
    { id: "wholesale", label: "Wholesale" },
  ];

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.provenance.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className={`nav-header ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <button className="wordmark-btn" onClick={() => navigateTo("home")}>
            <span className="wordmark-was">was a</span>
            <span className="wordmark-bottle">Bottle</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`nav-link ${currentPage === link.id ? "active" : ""} ${
                  link.highlight ? "highlight-link" : ""
                }`}
              >
                {link.highlight && <Sparkles size={14} className="sparkle-icon" />}
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="nav-actions">
            <button
              className="action-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search site"
              title="Search products"
            >
              <Search size={20} />
            </button>

            <button
              className="cart-trigger-btn"
              onClick={() => setCartOpen(true)}
              aria-label={`Cart with ${totalItemsCount} items`}
            >
              <ShoppingBag size={20} />
              <span className="cart-badge-text">Cart</span>
              {totalItemsCount > 0 && <span className="cart-count-bubble">{totalItemsCount}</span>}
            </button>

            <button
              className="btn btn-ghost nav-byob-cta"
              onClick={() => navigateTo("byob")}
            >
              Send Your Bottle
            </button>

            <button
              className="mobile-burger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  navigateTo(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-link ${currentPage === link.id ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn btn-solid mobile-cta"
              onClick={() => {
                navigateTo("byob");
                setMobileMenuOpen(false);
              }}
            >
              Send Your Bottle →
            </button>
          </div>
        )}
      </header>

      {/* Live Search Modal Overlay */}
      {searchOpen && (
        <div className="search-modal-backdrop" onClick={() => setSearchOpen(false)}>
          <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-header">
              <Search size={22} className="search-icon" />
              <input
                type="text"
                placeholder="Search lighting, drinkware, wine bottles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className="close-search-btn" onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="search-modal-results">
              {searchQuery.trim() === "" ? (
                <div className="search-quick-tags">
                  <span className="quick-label mono">Popular Searches:</span>
                  <div className="tags-list">
                    {["Pendant Light", "Tumbler", "Soy Candle", "Custom Engraved", "Amber Glass"].map((tag) => (
                      <button
                        key={tag}
                        className="quick-tag-btn"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="search-results-grid">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="search-result-item"
                      onClick={() => {
                        navigateTo("pdp", product.id);
                        setSearchOpen(false);
                      }}
                    >
                      <div className="search-item-info">
                        <h4>{product.name}</h4>
                        <p>{product.provenance}</p>
                      </div>
                      <span className="search-item-price">${product.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-search-results">
                  <p>No eco glass products match "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
