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

function ErrorPage() {
  return <h2> Please wait. . .</h2>;
}

function App() {
  const scrollContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="App h-screen flex flex-col overflow-hidden">
      <BrowserRouter>
        <Navbar isScrolled={isScrolled} />
        <div className="flex-1 overflow-y-auto" ref={scrollContainerRef}>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
