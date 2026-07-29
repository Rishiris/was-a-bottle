import React from "react";
import { CartProvider, useCart } from "./context/CartContext";
import { Header } from "./components/Header";
import { CartDrawer } from "./components/CartDrawer";
import { QuickViewModal } from "./components/QuickViewModal";
import { ToastNotification } from "./components/ToastNotification";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { BYOBStudioPage } from "./pages/BYOBStudioPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage";
import { WholesalePage } from "./pages/WholesalePage";
import { OurStoryPage } from "./pages/OurStoryPage";

function AppContent() {
  const { currentPage } = useCart();

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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-main-wrapper">
      <ToastNotification />
      <Header />
      <CartDrawer />
      <QuickViewModal />
      <main className="app-body">{renderPage()}</main>
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
