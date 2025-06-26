import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import LandingPage from "./pages/landingpage";

function ErrorPage() {
  return <h2> Please wait. . .</h2>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>

      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
