import React, { useState, useEffect } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import { Header } from "./components/Header";
import { CartDrawer } from "./components/CartDrawer";
import { QuickViewModal } from "./components/QuickViewModal";
import { ToastNotification } from "./components/ToastNotification";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/animations/CustomCursor";
import { PageLoader } from "./components/animations/PageLoader";
import { useLenis } from "./hooks/useLenis";

import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { BYOBStudioPage } from "./pages/BYOBStudioPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage";
import { WholesalePage } from "./pages/WholesalePage";
import { OurStoryPage } from "./pages/OurStoryPage";
import { GiftSetsPage } from "./pages/GiftSetsPage";

function AppContent() {
  const { currentPage } = useCart();
  const [loaded, setLoaded] = useState(false);

  // Scroll to top on EVERY page change — belt-and-suspenders with CartContext fix
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  // Initialize Lenis smooth scroll + sync with GSAP
  useLenis();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "shop":
        return <ShopPage />;
      case "pdp":
        return <ProductDetailPage />;
      case "byob":
        return <BYOBStudioPage />;
      case "checkout":
        return <CheckoutPage />;
      case "confirmation":
        return <OrderConfirmationPage />;
      case "wholesale":
        return <WholesalePage />;
      case "story":
        return <OurStoryPage />;
      case "gift-sets":
        return <GiftSetsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-main-wrapper">
      {/* Premium page loader — only shown once on first load */}
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      {/* Premium custom cursor (desktop only) */}
      <CustomCursor />

      <ToastNotification />
      <Header />
      <CartDrawer />
      <QuickViewModal />
      <main className={`app-body ${loaded ? "app-body-loaded" : ""}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
