import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Box, CircularProgress } from "@mui/material";

import Footer from "../../components/Footer";
import LazyImage from "../../components/LazyImage";
import landingImage from "../../assets/landingImage.jpg";
import landingImage2 from "../../assets/landingImage2.jpg";
import landingImage3 from "../../assets/landingImage3.jpg";
import landingImage4 from "../../assets/landingImage4.jpg";

function LandingPage() {
  return (
    <Box minHeight="100vh" position="relative">
      <LazyImage
        src={landingImage4}
        alt="Landing Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <Box padding="11%" minHeight="100vh"></Box>
    </Box>
  );
}

export default LandingPage;
