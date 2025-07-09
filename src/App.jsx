import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/landingpage";
import ShopPage from "./pages/shoppage";
import AdminUploadPage from "./pages/adminuploadpage";
import ProductPage from "./pages/productpage";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function ErrorPage() {
  return <h2> Please wait. . .</h2>;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current?.scrollTop || 0;
      setIsScrolled(scrollTop > 50);
    };

    const scrollEl = scrollContainerRef.current;
    scrollEl?.addEventListener("scroll", handleScroll);
    return () => scrollEl?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App min-h-screen flex flex-col ">
      <BrowserRouter>
        <CartProvider>
          <Navbar isScrolled={isScrolled} />
          <div className="flex-grow overflow-y-auto" ref={scrollContainerRef}>
            <Routes>
              <Route
                path="/"
                element={<LandingPage />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/shop"
                element={<ShopPage />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/admin/upload"
                element={<AdminUploadPage />}
                errorElement={<ErrorPage />}
              />
              <Route
                path="/product/:id"
                element={<ProductPage />}
                errorElement={<ErrorPage />}
              />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
