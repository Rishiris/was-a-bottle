import React, { useState, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { ProductVisual } from "../components/BottleVisual";
import { Search, Filter, SlidersHorizontal, Eye, ShoppingBag, Star, LayoutGrid, List, RotateCcw } from "lucide-react";

export function ShopPage() {
  const { navigateTo, addToCart, setQuickViewProduct } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTint, setSelectedTint] = useState("all");
  const [selectedBottleType, setSelectedBottleType] = useState("all");
  const [maxPrice, setMaxPrice] = useState(250);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available tints and bottle types for filter
  const tints = ["Sage", "Amber", "Emerald", "Cobalt", "Clear"];
  const bottleTypes = ["Wine", "Whiskey", "Gin", "Champagne", "Beer"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      // Search query
      if (
        searchQuery &&
        !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.provenance.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      // Glass Tint
      if (selectedTint !== "all" && p.glassTint !== selectedTint) return false;
      // Bottle Type
      if (selectedBottleType !== "all" && p.bottleType !== selectedBottleType) return false;
      // Price
      if (p.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, selectedTint, selectedBottleType, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSelectedTint("all");
    setSelectedBottleType("all");
    setMaxPrice(250);
    setSortBy("featured");
  };

  return (
    <div className="page-shop section-padding">
      <div className="section-container">
        {/* Shop Header */}
        <div className="shop-header-banner">
          <div className="eyebrow mono">ECO GLASSWARE & LIGHTING CATALOG</div>
          <h1>The Upcycled Collection</h1>
          <p className="shop-description">
            Explore 100% salvaged bottle creations, hand-polished and turned into luxury home goods.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`cat-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="shop-controls-bar">
          <div className="shop-search-input">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by bottle name, provenance, style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="controls-right-group">
            <button
              className="mobile-filter-trigger"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <SlidersHorizontal size={16} /> Filters
            </button>

            <div className="sort-picker-wrap">
              <label className="mono">SORT BY:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured Favorites</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="view-mode-toggle">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                title="List View"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Catalog Layout (Sidebar + Product Grid) */}
        <div className="shop-main-layout">
          {/* Filter Sidebar */}
          <aside className={`shop-filter-sidebar ${mobileFilterOpen ? "mobile-open" : ""}`}>
            <div className="filter-group-header">
              <h3>Filter Products</h3>
              <button className="reset-filters-btn mono" onClick={resetFilters}>
                <RotateCcw size={14} /> Reset
              </button>
            </div>

            {/* Price Range */}
            <div className="filter-widget">
              <h4 className="widget-title mono">MAX PRICE: ${maxPrice}</h4>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="filter-slider"
              />
              <div className="price-labels mono">
                <span>$20</span>
                <span>$250</span>
              </div>
            </div>

            {/* Glass Tint Filter */}
            <div className="filter-widget">
              <h4 className="widget-title mono">GLASS TINT / COLOR</h4>
              <div className="tint-options-list">
                <button
                  className={`tint-chip ${selectedTint === "all" ? "active" : ""}`}
                  onClick={() => setSelectedTint("all")}
                >
                  All Tints
                </button>
                {tints.map((tint) => (
                  <button
                    key={tint}
                    className={`tint-chip ${selectedTint === tint ? "active" : ""}`}
                    onClick={() => setSelectedTint(tint)}
                  >
                    {tint}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottle Type Filter */}
            <div className="filter-widget">
              <h4 className="widget-title mono">BOTTLE TYPE</h4>
              <div className="bottle-type-list">
                <button
                  className={`type-chip ${selectedBottleType === "all" ? "active" : ""}`}
                  onClick={() => setSelectedBottleType("all")}
                >
                  All Bottles
                </button>
                {bottleTypes.map((type) => (
                  <button
                    key={type}
                    className={`type-chip ${selectedBottleType === type ? "active" : ""}`}
                    onClick={() => setSelectedBottleType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid Area */}
          <div className="shop-products-container">
            <div className="results-count-bar mono">
              <span>SHOWING {filteredProducts.length} PRODUCTS</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-products-found">
                <h3>No bottle products match your filters</h3>
                <p>Try clearing your price range or glass color selection.</p>
                <button className="btn btn-ghost" onClick={resetFilters}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={`products-container-${viewMode}`}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className={`product-card ${viewMode === "list" ? "list-card" : ""}`}>
                    <div className="product-card-visual">
                      <ProductVisual product={product} isLit={true} size="card" />

                      <div className="product-card-actions-overlay">
                        <button
                          className="card-action-btn"
                          onClick={() => setQuickViewProduct(product)}
                          title="Quick View"
                        >
                          <Eye size={18} /> Quick View
                        </button>

                        <button
                          className="card-action-btn solid"
                          onClick={() => addToCart(product, 1)}
                          title="Add to Cart"
                        >
                          <ShoppingBag size={18} /> Add
                        </button>
                      </div>

                      {product.isNew && <span className="card-badge new-badge mono">NEW</span>}
                      {product.isBestseller && <span className="card-badge bestseller-badge mono">BEST SELLER</span>}
                    </div>

                    <div className="product-card-info">
                      <div className="card-provenance-pill mono">{product.bottleType} Bottle</div>

                      <h3 onClick={() => navigateTo("pdp", product.id)} className="product-title-link">
                        {product.name}
                      </h3>

                      <p className="card-prov-text">{product.provenance}</p>

                      <div className="card-price-row">
                        <span className="card-price">${product.price}</span>
                        <div className="card-rating">
                          <Star size={14} fill="#e7a33e" color="#e7a33e" />
                          <span>{product.rating} ({product.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
