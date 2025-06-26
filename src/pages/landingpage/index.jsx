import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "../../components/Navbar";

function LandingPage() {
  return (
    <div className="Landing">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Welcome to the catalog!
      </h1>
      <Navbar />
      <button className="btn btn-primary mt-4 ">Bootstrap Button</button>
      <button className="mt-4 ml-4 px-4 py-2 bg-green-500">
        Tailwind Button
      </button>
    </div>
  );
}

export default LandingPage;
