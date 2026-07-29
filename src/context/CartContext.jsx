import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const local = localStorage.getItem("wab_cart");
      return local ? JSON.parse(local) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState("wab-101");
  const [appliedPromo, setAppliedPromo] = useState(null); // { code: 'RECYCLE10', discountPercent: 10 }
  const [carbonOffset, setCarbonOffset] = useState(true);
  const [toast, setToast] = useState(null);
  const [lastOrderDetails, setLastOrderDetails] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("wab_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1, customEngraving = "") => {
    setCart((prev) => {
      const cartItemId = `${product.id}_${customEngraving || "plain"}`;
      const existingIndex = prev.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            product,
            quantity,
            customEngraving,
            unitPrice: product.price + (customEngraving ? 15 : 0)
          }
        ];
      }
    });
    showToast(`Added "${product.name}" to cart!`);
    setCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showToast("Item removed from cart.", "info");
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === "RECYCLE10") {
      setAppliedPromo({ code: "RECYCLE10", discountPercent: 10, label: "10% Recycled Glass Discount" });
      showToast("Promo code RECYCLE10 applied! (10% off)");
      return true;
    } else if (clean === "GREENGLOW") {
      setAppliedPromo({ code: "GREENGLOW", discountPercent: 15, label: "15% Eco-Glow Member Discount" });
      showToast("Promo code GREENGLOW applied! (15% off)");
      return true;
    } else {
      showToast("Invalid promo code. Try RECYCLE10", "error");
      return false;
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast("Promo code removed.");
  };

  const navigateTo = (page, productId = null) => {
    setCurrentPage(page);
    if (productId) setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const discountAmount = appliedPromo
    ? (cartSubtotal * appliedPromo.discountPercent) / 100
    : 0;

  const carbonOffsetCost = carbonOffset ? 2.00 : 0;
  const shippingCost = cartSubtotal > 100 || cart.length === 0 ? 0 : 8.50;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + carbonOffsetCost + shippingCost);

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        searchOpen,
        setSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        currentPage,
        setCurrentPage,
        selectedProductId,
        setSelectedProductId,
        navigateTo,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        carbonOffset,
        setCarbonOffset,
        cartSubtotal,
        discountAmount,
        shippingCost,
        carbonOffsetCost,
        cartTotal,
        totalItemsCount,
        toast,
        showToast,
        lastOrderDetails,
        setLastOrderDetails
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
